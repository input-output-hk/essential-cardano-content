---
title: 6 types of blockchain consensus mechanisms
tags:
  - consensus mechanism
  - blockchain
  - proof of stake
  - proof of work
  - proof of useful work
  - proof of capacity
  - delegated proof of stake
  - proof of authority
url: ""
image: https://ucarecdn.com/98a12612-b202-4d99-9dc8-94cfcfb03a7c/
image_text: A header image on 6 types of blockchain consensus mechanisms
---

Blockchains are distributed systems in which records of digital [transactions](https://www.essentialcardano.io/glossary/transaction-tx) are both publicly verifiable and [immutable](https://www.merriam-webster.com/dictionary/immutable). Each new transaction is included in a block along with other recent transactions, and the block is then added to a chain of other blocks (hence the term ‘blockchain’).

For a blockchain to operate successfully, the participants – also known as [nodes](https://www.essentialcardano.io/glossary/node) – need to agree on the validity of each new block. Blockchains can use different variations of different consensus protocols to determine eligibility of block-producing nodes.

To ensure continuity, block producers must reach _consensus_ on a particular transaction history. This is achieved by a specific consensus mechanism that guarantees that the participant’s views converge to the same history of events. This ensures trust in the blockchain as a whole, _without the need to trust specific participants_. Mutually distrustful entities can still participate in the blockchain, comfortable in the knowledge that the blockchain itself can arbitrate and verify their actions.

Different protocols provide varying levels of security, scalability, and decentralization. Each consensus mechanism might claim to be the 'best' solution.

Let’s take a look at six blockchain protocols.

## What are the most prevalent consensus mechanisms?

![](https://lh5.googleusercontent.com/2Ou2Nw4B7rsnXzjsyMgtP2YkkKYUKRe9zpRIJQUv8FhRi-tNz_kKRe11fC6FmZJH8PWRHIjjWUG13hhsFOjbaf3Fb1hb34dzS9Q8gn7PzYAv-QpvfZKmnPrFQvdPDOxT7tzkO_ECDuf4h6YPJfVO5CXVlBGisA187A-xfAhIJn1gfX0p5uOnVu-Hxg)

Two of the best-known consensus protocols are [proof of work](https://www.essentialcardano.io/faq/what-is-proof-of-work-pow) (PoW) and [proof of stake](https://www.essentialcardano.io/glossary/pos-proof-of-stake) (PoS), but others (and multiple variations on the above) also exist. Let’s delve into how some of these mechanisms work and what sets them apart.

### Proof of work (PoW)

PoW was the first blockchain consensus mechanism with [Satoshi Nakamoto](https://nakamotoinstitute.org/) applying this model to the [Bitcoin](https://bitcoin.org/en/how-it-works) chain in 2009.

PoW relies on competition between computers (miners) to solve moderately hard puzzles. The next miner to find a possible solution to a query gets to [mine](https://www.essentialcardano.io/faq/what-is-mining) a new block on the blockchain.

[Ergo](https://ergoplatform.org/en/discover/) and [Ethereum Classic](https://ethereumclassic.org/why-classic) also use PoW.

Here are a few advantages and disadvantages to think about before committing to a PoW chain:

**_Advantage_**

*   Attacking a PoW chain would require controlling 51% of the network's computing power – a process that is too expensive for hackers.
    

**_Disadvantages_**

*   The [high energy consumption](https://adan.eu/en/article/blockchain-protocol-energy-footprint) used in solving queries (because miners are _all_ actively competing to mine a block) is a major disadvantage of PoW chains.
    
*   [Expensive and specialized hardware](https://corporatefinanceinstitute.com/resources/knowledge/other/bitcoin-mining/) is required to become a miner, thus hindering decentralization.
    
*   PoW has scalability limitations due to the network's design, which limits block size and creation time.
    

### Proof of stake (PoS)

PoS is a newer, less energy-intensive, and thus more sustainable consensus mechanism than PoW. Through PoS consensus, holders of a blockchain asset can participate in securing and validating on-chain transactions by delegating their stake to a validator.

Launched in 2012, [Peercoin](https://www.peercoin.net/) was the first PoS project. [Cardano](https://docs.cardano.org/), [Polygon](https://polygon.technology/about)**,** and [Tezos](https://tezos.com/learn/what-is-tezos/) are three popular PoS blockchains. Ethereum has recently moved from PoW to PoS after a successful ‘Merge’.

It is important to note that unlike Ethereum’s version of PoS, however, Cardano’s PoS mechanism:

*   Enables liquid staking (i.e. no lock-up) through which holders of Cardano native tokens can withdraw their stake or delegate it to another validator (stake pool) at any time.
    
*   Requires a small initial amount of 2.17 ada to start staking
    
*   Has no slashing feature that risks unfairly punishing delegators for staking to nodes that do not operate as intended.
    

[Ouroboros](https://www.essentialcardano.io/glossary/ouroboros) is Cardano’s PoS consensus protocol and was the first provably secure PoS protocol. In other words, Ouroboros offers _mathematically verifiable_ security against attackers. The protocol is guaranteed to be secure, as long as 51% of the stake is held by honest participants. According to [Google scholar](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=ouroboros&btnG=), the original paper has been academically cited more than 1400 times, and variants of the protocol are used on other PoS chains. 

Let’s look at the pros and cons of PoS:

**_Advantages_**

*   Validators [don’t need expensive specialized equipment](https://iohk.zendesk.com/hc/en-us/articles/900001208966-Stake-Pool-Minimum-System-Requirements) to set up nodes, a standard computer will do thus encouraging decentralization.
    
*   PoS protocols are highly [energy-efficient](https://slate.com/technology/2022/03/how-green-is-green-crypto.html) & [sustainable](https://www.essentialcardano.io/glossary/sustainability) because validators do not need to solve resource-intensive puzzles.
    

**_Disadvantages_**

*   Validators on some PoS consensus mechanisms must [lock up a small amount of their assets](https://cardano.org/stake-pool-operation/) (pledge), which can’t be unstaked for a set period.
    
    Note: This doesn’t apply to Cardano.
    
*   Validators with the largest amounts of staked assets or [multiple pools](https://adapulse.io/multiple-stakepool-operators-are-harming-cardano/) have significant influence in validating transactions, which could pose security risks.
    
*   With some chains, delegators and validators can risk losing part of their staked funds (slashing) if validators validate inaccurate transactions, go offline along with other validators, or attack the network.
    
    Note: There is no such slashing on Cardano.
    
*   PoS systems with a small number of active validators or those that overly rely on centrally hosted Cloud services (vs bare metal, self-hosted nodes) reduce decentralization.
    

### Delegated proof of stake (DPoS)

DPoS is a modified [PoS consensus](https://emurgo.io/explain-proof-of-stake-pos-dpos/) mechanism that implements a voting system with two actors: delegates and voters.

Voters stake their assets and elect delegates to validate transactions on the network. This means that a delegate’s ability to become and remain a validator depends on their reputation. One mistake and they can be removed and replaced. Maintaining their reputation, therefore, becomes crucial.

[WAX](https://on.wax.io/about-wax/) and [EOS](https://eosnetwork.com/about-us/) are DPoS blockchains.

The advantages and disadvantages of a DPoS consensus mechanism include:

**_Advantages_**

*   Transactions are fast on a DPoS network due to the limited number of validators, enabling faster consensus. 
    
*   A DPoS consensus protocol blockchain remains secure through voting. Any delegate that behaves suspiciously can be voted out instantly.
    
*   A DPoS blockchain is very energy efficient.
    

**_Disadvantages_**

*   DPoS networks may be more susceptible to a [51% attack](https://www.investopedia.com/terms/1/51-attack.asp) due to the relatively small number of validators. This attack occurs when over 50% of the chain’s stake is controlled by one individual or group.
    
*   DPoS blockchains are more centralized than chains with some of the other consensus mechanisms because of fewer validators on a DPoS chain.
    
*   Voters with more staked assets are more influential.
    

### Proof of authority (PoA)

PoA is a consensus model that might better suit private networks. Instead of staking the chain’s digital assets, a committee is entrusted to perform validation – in contrast to public (i.e., permissionless) participation.

The PoA consensus mechanism determines a fixed set of nodes to perform chain maintenance. These nodes earn the exclusive right to secure the network and validate transactions.

[VeChain](https://docs.vechain.org/) and private networks such as [JP Morgan’s Coin Systems](https://www.jpmorgan.com/onyx/coin-system.htm) use this mechanism.

A PoA protocol has the following pros and cons:

**_Advantage_**

*   As with PoS, this model is [energy-efficient](https://smartcharging-electricvehicles.medium.com/the-proof-of-authority-algorithm-in-the-energy-market-9535735d8f9c) and doesn’t require expensive hardware or high computational power.
    

**_Disadvantages_**

*   The blockchain is maintained by a small number of approved validators, meaning it is not truly [decentralized](https://stackoverflow.com/questions/57465247/does-proof-of-authority-make-blockchain-network-centralized).
    
*   Becoming a validator requires a lot of fiat, making it harder for most people to participate in the process.
    

### Proof of capacity (PoC)

PoC – also known as proof of space – requires miners to have available disk space to obtain mining rights and validate transactions. Similarly to PoW, in PoC, the rights to produce a new block are assigned proportionally to the space (instead of computational power) a given miner dedicates to the PoC system.

Blockchains using PoC include [Chia](https://www.chia.net/about/), [Signum](https://signum.network/discover) (formerly known as Burstcoin), [SpaceMint](https://dci.mit.edu/research/2019/3/20/spacemint-a-cryptocurrency-based-on-proofs-of-space), and [Storj](https://www.storj.io/about).

**_Advantages_**

*   Block mining does not require high energy consumption as block producer election depends on available disk space.
    
*   Any standard hard disk is compatible with PoC.
    
*   The drive can be used for any other data storage purpose after mining data has been removed, unlike in PoW mechanisms where hardware is only used to mine.
    
*   Nodes do not require hard drive upgrades or specialized hardware, they only require disk space.
    

**_Disadvantage_**

*   If the PoC model gains greater popularity, the mechanism could increase demand for higher capacity storage to boost a miner’s chances of validating a block.
    

## Proof of useful work (PoUW): a new and sustainable consensus mechanism

The blockchain industry is still relatively new, having existed for not much longer than a decade. Organizations and blockchain projects continuously look into how to build and improve on consensus mechanisms.

[Input Output Global](https://iog.io/) is one such example with its recent research into **Ofelimos** – a novel proof of _useful_ work (PoUW) consensus mechanism that seeks to minimize the energy wastage in a PoW mechanism.

At the time of writing, no blockchain uses PoUW and any pros and cons of this consensus mechanism are only theoretical. Here's a possible advantage and a presumed disadvantage of Ofelimos:

**_Advantage_**

*   PoUW ensures that at least some of PoW’s computational energy expenditure is used to solve complex real-world problems. Examples might include DNA sequencing, distributed computation, protein unfolding, urban planning, and more.
    

**_Disadvantage_**

*   The PoUW model requires a continuous stream of complex real-world queries to solve, otherwise, there’s an unnecessary loss of computational power like in PoW protocols.
    

**Learn more** about this new model by reading this [in-depth article](https://iohk.io/en/blog/posts/2022/08/16/introducing-ofelimos-a-proof-of-useful-work-consensus-protocol/).
