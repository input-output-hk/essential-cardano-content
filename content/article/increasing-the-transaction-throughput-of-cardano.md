---
title: Increasing the transaction throughput of Cardano
tags:
  - Blog
  - Transactions per second
  - Throughput
  - Hydra
url: ""
image: https://ucarecdn.com/9dad98ce-68f0-42d1-a390-3c143e426a03/
image_text: ""
---

**Original author:**

[Matthias Fitzi](https://iohk.io/en/blog/authors/matthias-fitzi/page-1/) - Research Fellow

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2022/03/21/increasing-the-transaction-throughput-of-cardano/): March 21st, 2022

**Blurb**:

Diffusion pipelining - scheduled for this summer - will increase the budget for block propagation and validation times, allowing for larger blocks and increased transaction throughput. Here’s a technical research perspective. (Along with an introduction to AV, its even more performant sibling…)

**Article**:

The recent enabling of smart contracts on Cardano has led to a significant increase in user activity. Simultaneously, average transaction sizes grew due to code-carrying script transactions. With the first decentralized-finance (DeFi) applications now deployed on the Cardano ecosystem, and more on the way, we expect this trend to continue. To keep up with this elevated demand, the system’s current transaction throughput must be increased.

An obvious approach to increase transaction throughput is to increase the block-size limit to fit more transactions per block. Block size has already been increased by 25% this year—from 64kB to its current 80kB, and we anticipate further increases. However, there is a limit on how large a block can be securely maintained by a ledger-consensus protocol if the block production rate is to be kept at the current level. To achieve high throughput without compromising the security of the system, additional measures are required. To understand why we need to take a closer look at how ledger consensus works in general:

Ledger consensus protocols are characterized by two-time parameters:

*   Δp, the maximal network delay for a new block to reach (e.g.) 95% of the network, and
    
*   Δb, the (expected) time between the generation of two new blocks
    

In typical protocols, to argue consistency for consensus, the propagation of a prior block must finish before the next block is generated—at least most of the time. Thus, Δb is chosen to be somewhat larger than Δp. In Cardano, we have Δp=5s (seconds) and Δb=20s.

Now, how much data can be transported by a block under these conditions? To see this, we need to examine in more detail what exactly has to be achieved within Δp.

![](https://ucarecdn.com/7efeb696-1f39-4e36-aa84-65c1b1e5a225/)

Figure 1. Block network diffusion and validation within the Δp=5s budget

Consider the above Figure 1 depicting in a simplified way, how block propagation works in the network. The block producer sends their new block header to Peer 1 (white h-box), occupying both nodes’ network links during the time span indicated by the white h-box. Peer 1 then validates the header (involving local computation during the time span indicated by the gray hv-box). If the header is valid, i.e. the header proves eligible block leadership, etc., the block body is downloaded by Peer 1 (white b-box), again occupying both nodes’ network links. Finally, Peer 1 validates the block body (gray bv-box), and, only if the block body is also valid, Peer 1 is ready to propagate the block to other peers along the lines of what was just described.

An unfortunate side effect of this mode of operation is that a single node’s CPU and network link is only utilized during a small fraction of Δp=5s while remaining (mostly) idle during the rest of the (expected) Δb=20s.

Concretely, the amount of data we can fit into a block is determined by the peer-to-peer network delay of the block and the required validation time. Both grow roughly linearly in the size of the block—times the maximal number of hops required to reach 95% of all nodes. Measurements show that, to guarantee network propagation within Δp=5s, the block size should not exceed 2 MB. Accounting for computationally intense scripts, validation time may even impose a much lower limit.

The good news is that, within these constraints, transaction throughput can be exceeded by applying changes to the peer-to-peer network and/or consensus layers. We explain these techniques below.

### **Diffusion pipelining**

Reconsidering Figure 1, we see that all nodes’ actions are performed in strict sequence, and thus Δp needs to fit the time required by a single node multiplied by the number of hops in the peer-to-peer path. We observe that, while this is necessary for network transmission, it is not for block validation.

![](https://ucarecdn.com/68ed3a4b-de66-4412-a007-b7dba501e164/)

Consider Figure 2. By allowing blocks to be propagated before full validation has taken place, we can exclude (repeated) body validation from the propagation path. As soon as Peer 1 has received the block body (b-box), it can already start propagating the block concurrently to validating the block-body, etc.

In contrast to the scheme in Figure 1, the Δp budget now only needs to account for body validation once. This results in a higher time budget for peer-to-peer network transmission and/or body validation, thus allowing for a higher transaction throughput (for easy comparison to Figure 1, this gain is illustrated by a larger body-validation (‘bv’) budget).

For reasons explained below, it is crucial that the following two validation checks remain fully replicated in the propagation path:

1.  Header correctness, i.e. the block correctly references its predecessor, and correct block leadership (verifiable-random-function (VRF) and block-signature validation).
    
2.  Block completeness, i.e. the received (but not yet validated) body is indeed referenced by the header’s body hash.
    

How might diffusion pipelining (as described above) affect the security of the consensus and network layers?

First, note that the consensus layer remains unaffected by this change:

*   Honest blocks are always valid, since the block leader fully validates the chain to be appended by the new block as well as the new block itself, and,
    
*   Incomplete blocks are not propagated (due to Point 2 above), and,
    
*   Invalid (complete) blocks, though possibly propagated through the network, are always discarded by an honest node after body validation
    

Second, concerning Denial-of-Service (DoS) attacks on the network layer, note that the adversary can try to congest the system by diffusing invalid blocks. However, correct block leadership is still verified (due to point 1), implying that such a block will only be propagated if the adversary is scheduled to do so, i.e., no more load is generated than if this block leader was honest (except for the block not contributing towards the throughput of the system). Furthermore, stake-pool operators (SPOs) generating invalid blocks can be easily identified and punished, in fact an infraction management system is currently in development to perform exactly this function.

To conclude, diffusion pipelining increases the budget for block propagation and validation times within the Δp limit, allowing for larger blocks and thus for increased transaction throughput—while leaving the consensus rules unchanged. It promises to substantially increase throughput while being achievable by minimally invasive changes to the system, and is thus an excellent candidate for implementation in the short term. Still, the impact of pipelining (alone) is limited, and our ambitions do not stop here.

We next give a summary of a more powerful technique that can achieve even higher transaction throughput, but also requires some more dramatic protocol changes.

### **Asynchronous validation**

The idea behind diffusion pipelining—delayed body validation—can be taken to the extreme: a new block is still required to arrive within Δp, but we do not demand that its body validation be completed within Δp. We refer to this as asynchronous validation (AV).

![](https://ucarecdn.com/dc77d0eb-210b-4ab6-b3c1-56f1d050de05/)

Consider Figure 3. Body validation is allowed to essentially consume the remaining (expected) Δb budget (besides block transmission and header validation), thus virtually putting the nodes’ CPUs at permanent load. However, note that the network link and the CPU are also assigned to other tasks (such as mempool synchronization), meaning that we do not want to utilize the full remainder of Δb for body validation, but leave a couple of seconds assigned to such other tasks.

This has a notable side effect. In contrast to diffusion pipelining, ledger validation generally lags behind the head of the chain. In particular, even honest block leaders now may possibly create blocks that are (partially) invalid, as they may not have finished validating the transaction history leading up to the new block.

To cope with this side effect, the ledger rules need to be adapted: to guarantee that honest blocks always contribute to the security of consensus, blocks carrying invalid transactions must still be considered as valid chain extensions. Invalid transactions can then simply be discarded during ledger validation.

Although substantially improving over diffusion pipelining, AV can be even further improved. The reason is that, generally, not enough data can be diffused during Δp to produce enough validation work to max out the CPUs during the full remainder of the Δb period. To fully leverage the benefits of AV, we will combine it with the mechanism of input endorsers, which we will describe in an upcoming blog post.

### **Impact**

What impact on throughput can we expect from pipelining and AV? Finding the precise answer to this question is still ongoing work by our network and research teams, as giving a rigorous analysis in case of a malicious adversary (attempting to maximally disrupt the protocol) is rather involved. Still, to provide a first estimate, we give below a throughput analysis for the optimistic case where all SPOs behave honestly—in expectation that the results for the malicious case will not deviate substantially (given also the presence of the infraction management system). Still, note that the real throughput of the system will likely vary from the given estimates.

In Table 1, we present these throughput estimates (in transactions per second, TPS). Recall that throughput depends both on transaction sizes and validation times. For a selection of size/validation-time pairs, we assume that all transactions have the same characteristics, and give the respective throughput numbers. We compare four different protocols:

*   Praos: Cardano’s currently deployed protocol (block size 80 kB)
    
*   Praos Max: Praos with the maximal possible block size that can be safely maintained (under the above assumptions)
    
*   Diffusion pipelining
    
*   AV (with 20% of the Δb budget discounted, and reserved for different tasks)
    

We consider four different transaction types with varied size and required time for validation. A simple payment transaction is somewhere near the 0.5 kB / 0.5 ms category, while script transactions may fall into either one of the other types, which require both a larger size and more effort to validate. Note also the last column (2 kB / 32 ms) where validation time becomes substantial in comparison to the network delay: Increasing the block size (from Praos to Praos Max) does not help to improve throughput as validation already maxes out the time budget. Consequently, pipelining and AV provide strong relative gains exactly in these cases since they increase the validation-time budget.

![](https://ucarecdn.com/6424c60b-7e61-4e53-8534-97209c982d62/)

### **Outlook for Cardano**

Increasing the throughput of a permissionless blockchain is security critical, as admitting more load to the system may introduce DoS-attack opportunities. It is thus advisable to perform such changes in a sequence of small steps while carefully observing the effects on the system.

The first such steps were taken last December and this February by raising the block-size limit (and Plutus-script memory units) from 64kB to 80kB (see also this [recent blog](https://iohk.io/en/blog/posts/2021/11/22/slow-and-steady-wins-the-race-network-evolution-for-network-growth/) by John Woods).

Over the months ahead, we will continue to closely monitor and adjust these parameters, based on network demand and capacity constraints. Further improvements will come with the implementation of diffusion pipelining. Other consensus optimizations, including input endorsers, are still under development, and more details on how these will be executed will be announced in due time.

Note that the optimization endeavor of the Cardano Basho era extends beyond the network and consensus layers, and includes Plutus script enhancements as well as off-chain processing—see this [recent blog](https://iohk.io/en/blog/posts/2022/01/14/how-we-re-scaling-cardano-in-2022/) by Tim Harrison. In particular, [Hydra](https://iohk.io/en/blog/posts/2020/03/26/enter-the-hydra-scaling-distributed-ledgers-the-evidence-based-way), a layer-2 protocol suite under development, offers another pathway for a dramatic improvement in total transaction throughput by allowing to execute transactions off-chain.

_Acknowledgments. I would like to thank Duncan Coutts, Sandro Coretti-Drayton, Neil Davies, Alexander Esgen, Nicolas Frisby, Peter Gaži, Philipp Kant, Aggelos Kiayias, Karl Knutsson, Tim Harrison, Giorgos Panagiotakos, Alexander Russell, Fernando Sanchez, Marcin Szamotulski, Peter Thompson, Spyros Voulgaris, and John Woods._
