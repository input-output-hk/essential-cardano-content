---
title: Ouroboros Genesis design update
tags:
  - Consensus
  - Ouroboros
  - Development
url: ""
image: https://ucarecdn.com/5f3f0189-c555-4ee6-b1c3-4221a7b2e9b8/
image_text: ""
---

### A deep dive into the design and implementation of Ouroboros Genesis, the latest incarnation of the consensus protocol responsible for the reliability and security of Cardano

Author: Nicholas Frisby  
Contributor: Neil Burgess

Ouroboros Genesis is a series of enhancements to the already robust Ouroboros protocol, with countermeasures to protect a network node when it is new or returning after an absence.

Ouroboros is the consensus protocol at the heart of the Cardano blockchain. Given the continuing development and increasing uptake of Cardano, Ouroboros has progressed along its [planned upgrade path](https://iohk.io/en/blog/posts/2022/06/03/from-classic-to-chronos-the-implementations-of-ouroboros-explained/). [Ouroboros Classic](https://iohk.io/en/research/library/papers/ouroborosa-provably-secure-proof-of-stake-blockchain-protocol/) was the first provably secure proof-of-stake protocol. [Ouroboros BFT](https://iohk.io/en/research/library/papers/ouroboros-bfta-simple-byzantine-fault-tolerant-consensus-protocol/) was an interim solution that enabled the [Byron update](https://iohk.io/en/blog/posts/2020/03/30/what-the-byron-reboot-means-for-cardano/). [Ouroboros Praos](https://iohk.io/en/research/library/papers/ouroboros-praosan-adaptively-securesemi-synchronous-proof-of-stake-protocol/) continued the development of Ouroboros Classic. Ouroboros' evolution will go a step further with [Ouroboros Genesis](https://iohk.io/en/research/library/papers/ouroboros-genesiscomposable-proof-of-stake-blockchains-with-dynamic-availability/), which is currently planned to be delivered by Q3 of 2024.

This article describes recent updates to the development and implementation of the Ouroboros Genesis protocol.

## The Ouroboros story so far

A blockchain is a distributed ledger replicated across machines called nodes. Because there is no single central authority, a mechanism must exist to guarantee the consistency and immutability of all ledger copies. That mechanism is the consensus protocol. The protocol also sets incentives for the nodes to validate new blocks and add them to the chain. 

Ouroboros divides Cardano's time into epochs, which are subdivided into slots. Slots represent short time periods when blocks can be created.

Ouroboros Classic is proven secure when most of the nodes are online and have consistent copies of the ledger. Adversaries could not predict which node would be the next slot leader (the node that gets to add a block to the chain), making attacks very expensive.

Ouroboros Praos increased the randomness in selecting the next slot leader, and added countermeasures for other possible attacks.

Ouroboros Genesis will address the situation where a node first joins the network (starting from the **genesis** block), or rejoins after a prolonged absence. Such nodes are in a vulnerable situation until they catch up. For example, a **long-range attack** occurs when an adversary attempts to rewrite the history of the chain. The adversary accumulates a large stake, to allow them to secretly create blocks faster than the main chain. Then, when the alternate historical chain is ready, the adversary attempts to switch the main chain to the adversary's chain. The Genesis implementation will mitigate long-range attacks, unless the syncing node becomes **eclipsed**. An eclipse attack occurs when the adversary attempts to surround the victim node with malicious peers, obscuring the real network.

## Latest developments

Genesis introduces the following new concepts: 

*   ledger peers
    
*   lightweight checkpointing (as a temporary fallback/override)
    
*   limit on eagerness (LoE)
    
*   genesis density disconnections (GDD)
    
*   limit on patience (LoP)
    
*   the Genesis state machine.
    

### Ledger peers

The deepest departure from the [Genesis paper](https://iohk.io/en/research/library/papers/ouroboros-genesis-composable-proof-of-stake-blockchains-with-dynamic-availability/) was an early architectural decision to preserve the Praos node's limitation on rollback. Under Praos, a Cardano node will not rollback further than 2,160 blocks without manual intervention. As outlined in the Genesis paper, a node under eclipse attack could only select extensions of an adversarial chain for years and then, when it finally connects to a node serving the honest chain, abruptly rollback any number of blocks.

Because it is not necessary in practice for a node to have unlimited rollback capability, the architects instead prioritized the rollback limit, which is key to many bounds on resource usage. Dropping it for Genesis would remove a staple invariant invoked by a significant portion of the preceding engineering work. Moreover, as long as the syncing Cardano Genesis node has access to a healthy honest peer, it should, like the Praos node, not require a rollback of more than 2,160 blocks.

Eclipses are potentially a more significant threat to the Genesis node than expressed in the paper, which doesn't directly address them. These attacks endanger the Genesis safety property, since an eclipse lasting longer than a few seconds is enough for a syncing Genesis node to potentially select 2,161 blocks from an adversarial chain, despite faithfully implementing the Genesis density comparisons. Without knowledge of the honest chain, the Genesis rule will simply select the densest chain currently accessible. In an eclipse situation, that might not necessarily be the honest chain. This contrasts with the Genesis paper, in which an eclipsed node and its users are merely delayed, confused, misinformed, etc. That carries related risks, but does not compromise the safety or liveness properties, since the node could eventually connect an honest peer and therefore recover.

Considering only a Praos network, in which nodes theoretically never fall behind, eclipses can still be detrimental. The key difference with Genesis is that a Praos node (inherently caught up) can withstand a much longer eclipse before there's a significant probability that it might commit to an adversarial chain. However, even without considering the extra vulnerability during syncing, a Praos node does need some defense against eclipses.

One defense is to introduce the concept of **ledger peers** within the peer selection logic to sufficiently bound the probability and duration of eclipses. While syncing, a Genesis node adjusts its ledger peer configuration to drastically reduce the probability of becoming eclipsed. And without eclipses, the Genesis node will never select 2,161 blocks from an adversarial chain.

The changed peer selection works like this. By examining a recent stake distribution, a Genesis node selects sample peers that have participated in maintaining the network, greatly reducing the probability of selecting malicious nodes.

### A fallback: lightweight checkpointing

The Genesis paper establishes that the best chain within a healthy Praos network will have more blocks than any other chain in a fixed window of slots immediately after the two chains' intersection. The only exception is if the Praos network is not healthy. 

A severe network outage would justify executing a disaster recovery plan, one that requires off-chain cooperation among stakeholders to rewrite the chain within the outage's interval to repair the honest chain. After that happens, the Genesis rule would again favor the honest chain.

However, a disaster recovery plan is inherently difficult and expensive to execute. At least in the meantime, a simple checkpointing mechanism would let a sufficiently large cooperating subset of vigilant stake pool operators quickly and easily maintain control of the network during or immediately after the block production outage.

The logic is simple and consistent with the rest of the protocol: a configuration file specifying a list of block number and hash pairs, each of which causes any other block with the same block number to be treated as invalid. That checkpoint’s configuration data should be used with care and acquired only from trusted sources. Ideally, the recovery plan's eventual execution will permit (and even require) that reactive additions to the checkpoints list are temporary. The only permanent checkpoints will be the set that ensures the Byron era's genesis keys are no longer relevant to the Cardano chain.

### Limit on eagerness

Since ledger peers effectively prevent eclipses, a syncing node can assume that it has at least one healthy peer serving all of some honest chain. The safety property is therefore directly ensured by simply prohibiting the syncing Genesis node from ever selecting more than 2,160 blocks of a chain past the intersection of its ledger peers' chains. It will only select blocks that all ledger peers agree on, which almost certainly include an honest peer. This constraint is named **limit on eagerness (LoE)**, because the syncing node must not eagerly commit to the best block it has seen so far. An adversarial peer may be able to serve its alternative blocks much faster than any honest peer can serve the historical blocks.

### Genesis density disconnection

It's trivial for an adversary to abuse the LoE to cause the victim to stop syncing blocks, violating the syncing node's liveness property. There are three ways to do so:

• the attacking peer claims it has no more blocks  
• the attacking peer serves an alternative chain  
• the attacking peer claims it has alternative blocks but also does not serve them.

The fundamental rule from the Genesis paper directly mitigates the first two. If two peers are serving different chains and at least one of the chains has no fewer than 2,161 blocks after the intersection, Genesis favors the chain that has more blocks in the fixed window of slots after the two chains’ intersection. (An honest chain will always win that comparison. Recall that a shared prefix reflects a chain intersection, even if one of the chains is simply the extension of another.) The Genesis node will favor the honest chain by disconnecting from the other peer. This action is known as a **Genesis density disconnection (GDD)**. After enough GDDs, the remaining peers' intersection will be farther along the historical honest chain.

### Limit on patience

The third attack vector is the most difficult to analyze. The GDD is disabled since the peer is claiming to have more blocks. That is, it's claiming that its block count in that fixed window will increase if it is permitted more time to serve more blocks. An honest peer is always genuinely making that claim, until the syncing node indeed has all the honest blocks. But an attacking peer could make that claim in bad faith. The **limit on patience (LoP)** ensures that a peer claiming to have more blocks must actually send them, and do so promptly. The key complication is that even honest peers cannot maintain perfect responsiveness for hours on end, they will occasionally have latency bursts, etc. For this reason, the LoP is implemented as a [leaky bucket](https://en.wikipedia.org/wiki/Leaky_bucket) for each peer, where the leakage is the rate of processing blocks while the peer has claimed blocks and is serving them slower than some generous minimal rate, but each honest peer's bucket capacity will be high enough to absorb bursts of latency typically expected from healthy ledger peers.

### The Genesis state machine

The Genesis node will disable LoE, GDD, and LoP once it concludes it is caught up, for two important reasons. First, a caught-up node in a Praos network fundamentally must mint the best block it can in a slot in which it's elected. For example, if such a node were still using the Genesis rules, a strong adversary could potentially abuse the LoE to temporarily prohibit the victim from selecting the block it just minted, thereby preventing it from propagating to the network. It's difficult to bound the system-wide fallout of such a vector, and so the Genesis node should behave exactly like a Praos node whenever it's not syncing. 

Second, a caught-up node does not need as many peers as a syncing node, since it is not as vulnerable to eclipses. Therefore, the significant extra load on the network due to all nodes maintaining inflated ledger peer counts is unnecessary and undesirable. The **Genesis state machine** manages the node's transitions between considering itself caught up or not:

• When caught up, the node disables the LoE, GDD, and LoP. • A node concludes it is caught up if these conditions are met:

*   it has enough ledger peers
    
*   all peers claim to have no additional blocks (which a well-tuned LoP ensures must happen soon enough)
    
*   the node has already selected the best of the peers’ chains.  
    This is more robust than trusting the age of the local selection etc, since an attacking peer might be able to trigger such thresholds, causing the victim to prematurely lower its defenses.
    

• A node falls back to syncing if the tip of its chain is too old (eg, 20 minutes or so). Notably, this will happen during the lifetime of the node's operating system process if the machine sleeps for long enough (eg, a user closes their laptop lid for a while).

## Next steps

The above design has stabilized over the past year or so. While it's still evolving slightly, there have been no major changes. IOG has been collaborating with [Tweag](https://www.tweag.io/) during the past several months to implement and test it.

The first Genesis-capable implementation is scheduled for release by Q3 of 2024. At this stage, the greatest remaining unknown is the degree of optimization necessary to compensate for the increased peer count required to prevent eclipses.

Until then, the imminent bootstrap peer design serves as an increment towards Genesis. The bootstrap state machine is a simpler variant of the Genesis state machine. While syncing, a node only communicates with bootstrap peers, every single one of which is trusted, and hence the LoE, GDD, and LoP are unnecessary. In contrast, Genesis will allow a syncing node to safely include untrustworthy peers, as long as it's not eclipsed (ie, as long as one peer is honest), which will permit retiring the bootstrap peers, thereby decentralizing the infrastructure for syncing nodes and fulfilling the promise of Ouroboros Genesis.
