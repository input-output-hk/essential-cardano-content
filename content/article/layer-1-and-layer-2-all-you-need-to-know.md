---
title: "Layer 1 & Layer 2: all you need to know"
tags:
  - Cardano
  - blockchain
  - CIP
  - EUTXO
  - Hydra
  - IOG
  - Layer 1
  - Layer 2
  - Ouroboros
  - Proof of stake
  - Sidechain
url: ""
image: https://ucarecdn.com/8bb2253b-796c-4633-a15b-f8eab419a603/
image_text: ""
---

When discussing blockchain architecture, the terms 'layer 1' and 'layer 2' are frequently mentioned. These are important concepts that serve two purposes: explain how a blockchain network is built, and provide an easy-to-understand visual representation of what a blockchain network looks like.

Let's break these ideas down.

## Layer 1: definition

Imagine a wedding cake, with different tiers -layers, if you will-, and the figurine of a couple on top. That beautiful cake rests on a solid stand, the base. For all intents and purposes, that robust and solid cake stand is the first layer (layer 1) that supports the cake infrastructure. You can probably see where this is going. In a blockchain, layer 1 is the base network upon which rest layer 2 solutions.

## Layer 1: functionality

With this visual schematic in mind, Cardano is the layer 1 (the base network), which itself includes three independent layers:

*   Network layer
    
*   Consensus layer
    
*   Ledger layer
    

**Network layer**

This layer maintains the connections between all the distributed nodes in the Cardano network, obtains new blocks from the network as they are produced by block producing nodes, builds newly minted transactions into blocks, and transmits blocks between nodes.

**Consensus layer**

This layer performs two fundamental functions:

*   Running the [Ouroboros](https://www.essentialcardano.io/glossary/ouroboros) consensus protocol. This layer takes decisions like adopting blocks, choosing between competing chains (if there are any), and deciding when to produce blocks of its own; and 
    
*   Maintaining all the state that is required to make the decisions taken in the consensus layer.
    

**Ledger layer**

This layer specifies:

*   What the state of the ledger looks like; and
    
*   How the ledger must be updated for each new block.
    

The ledger layer consists exclusively of pure functions that specify the transitions between successive ledger states, as derived from the formal ledger rules, using the Extended UTxO (EUTxO) accounting model. The state transitions are driven by the set of transactions that are contained within the Cardano blocks, and by major events such as epoch boundary transitions.

The consensus layer does not need to know the exact nature of the ledger state, nor the contents of the blocks, apart from some header fields required to run the consensus protocol.

As a whole, these three layers form the layer 1 solution that is Cardano.

## Layer 1: scalability

Look at that wedding cake again. It's big, isn't it, with all those tiers stacked on top of one another. But look at the base, the cake stand. That first layer has certain dimensions and cannot be any bigger. Equally, it needs to be big enough to support the tiers that sit above it. The stuff that rests on it can only be of a certain size, and this is exactly the reason why wedding cakes have multiple tiers. Every tier (think _layer_) adds something to the base. A new filling, frosting, decoration, etc. In other words, every tier scales the base layer up.

Decentralized public networks face a similar problem. Just as a cake stand can only fit a finite amount of slices, the base (the layer 1) can only process a certain amount of transactions. If you try adding more slices than the stand cake takes, they will start falling off the edges and the mess will ruin someone's big day. Equally, the nodes in a layer 1 network can only process so many transactions before congestion occurs. As the user base grows, so does the need for more nodes to process transactions. To resolve this problem, the network needs to scale, or else transactions will start falling off the edges, so to speak.

There are ways to scale up a layer 1 network. Increasing block size, for example, so that blocks carry more transaction data. Block size was recently increased by 8KB to 72KB (a 12.5% increase). This is one of the ways in which Cardano will scale in 2022. 

Returning to our wedding cake visual, adding tiers not only makes the cake bigger, it also introduces a very useful feature: the ability to make every tier different to the base. We can add different flavors, fillings, designs, and so on, independently of the first layer. To cater for different ‘guests’ and different preferences. In blockchain, adding a new layer (layer 2) not only allows the layer 1 to scale, it also enables transactions and processes to happen independently of the main chain (layer 1).

### Layer 1 scalability solutions in Cardano

Cardano is now into the Basho phase of development, which is all about scaling and optimization. While the network is currently managing demand very effectively, the decentralized application (DApp) ecosystem is growing fast and will continue to place increasing demand on the system. To address this, [multiple scalability methods](https://iog.io/en/blog/posts/2022/01/14/how-we-re-scaling-cardano-in-2022/) (including layer 1 and layer 2 solutions) are being deployed to Cardano to onboard first hundreds of thousands, then millions of new users.

**Block size increase**

The bigger the block, the more transactions it can carry. The very first block minted on Cardano had a size of 665 bytes (0.665KB). Today, blocks are 72KB in size. That’s an increase of over 10,000%! Further increases will be applied over time based on ongoing system monitoring and overall network health.

**Pipelining**

Improves block propagation times by coalescing validation and propagation. The goal is for blocks to be propagated to at least 95% of peers within five seconds by reducing the ‘dead time’ between blocks (the block propagation overhead). This provides the headroom to make more aggressive scaling changes, such as increasing block size/increasing Plutus parameter limits.

**Input Endorsers**

Further down the line, input endorsers will improve block propagation times and throughput by allowing transactions to be separated into pre-constructed blocks. This improves the consistency of block propagation times and allows higher transaction rates.

**Memory/CPU parameters for Plutus**

Memory usage is more efficient across the chain. Specifically, there are memory improvements in Unspent Transaction Output (UTXO) handling, stake distribution, live stake distribution and pools, and hash representation.

**Plutus script enhancements**

Even more effective usage of the powerful EUTxO model through smart contract optimization, including:

*   Reference inputs (CIP-0031) – Plutus scripts can inspect transaction inputs without needing to spend them. This means that it is not necessary to create UTXOs simply to inspect the information held by an input.
    
*   Plutus Datums (CIP-0032) – Datums can be attached directly to outputs instead of datum hashes. This simplifies how datums are used, as a user can see the actual datum rather than having to supply the datum that matches the given hash.
    
*   Script sharing (CIP-0033) – Plutus script references can be associated with transaction outputs, meaning that they can be recorded on-chain for subsequent reuse. It will not be necessary to supply a copy of the script with each transaction, hugely reducing friction for developers. Reusing scripts in multiple transactions significantly reduces transaction sizes, improving throughput and reducing script execution costs.
    

**Node enhancements**

Improvements to the node will help even distribution of stake and reward computations across the epochs, thus providing greater headroom for block size increases. Also, memory usage is now more efficient. Memory compaction reduces RSS footprint, and memory sharing means we need less data instantiated. Node version 1.34.1, from March 2022, reduces peak load at critical points, including the epoch boundary.

**On-disk storage**

By storing portions of the protocol state on disk, nodes will need to hold less in memory, meaning that RAM-constrained systems will be able to run nodes provided they have sufficient storage, and memory won’t present a bottleneck to scalability. This will enable significant growth in the blockchain state.

# Interlude: the blockchain trilemma

The scalability of a distributed system -such as a blockchain- is a complex quandary. 

There is a general consensus that a 'proper' blockchain system must have three properties: scalability, security, and decentralization. But an equally widespread belief is the so-called trilemma, which dictates that decentralized systems can only provide two of these properties, while sacrificing the third. First postulated by Ethereum creator Vitalik Buterin, the trilemma suggests that developers must always accept a compromise, or a trade-off, when designing blockchain networks. This compromise means one property must 'suffer', for the other two to be possible.

For example, the more nodes a network has, the more decentralized it becomes, but it also means that more nodes need to be trustworthy to maintain security. To maintain security, fees must be introduced that would make the cost of a potential attack prohibitively high. Yet, a network must incentivize participation, so costs per node must be relatively low. Also, the very trait of immutability implies that blockchain data will be added for as long as the blockchain exists, but never deleted, which means the blockchain will just keep on growing. Larger network means more computational resources required to maintain performance. Better performance needs better hardware, which means that rewards must be enough to make the investment worthwhile. And so on.

## Vertical and horizontal scaling

Resolving this trilemma requires a careful and balanced approach, so that all three elements remain in equilibrium. 

In theory, a blockchain system will keep on growing indefinitely. As more nodes become part of the system, more data and assets will flow, and more transactions will need processing. All this requires computational power and storage. Over time, demand will keep on growing, so the underlying system will need to scale accordingly to prevent a dramatic fall in performance.

Two scaling options exist: vertical and horizontal.

### Vertical scaling

This technique involves expanding the computational capabilities of individual nodes by adding more memory and better components. In other words, upgrade the network's hardware to achieve better performance overall. 

Having a network that includes high-performance nodes supports larger block sizes and faster block diffusion, for example. But the downsides are that decentralization will be limited, given the high operating costs, which will make new node operators think twice about joining and thus curtailing the network's expansion. Also, such a network will bring higher costs for validator nodes.

### **Horizontal scaling**

In contrast to vertical scaling, horizontal scaling can be achieved in two ways. One, simply by adding more computers (nodes) to the existing network. The rationale here is that, by adding additional nodes, the network becomes capable of processing more transactions. 

And two, by using sidechains, which will take some of the computational load off the mainchain, and, as an added advantage, enable customization in the form of different consensus protocols or governance models for example, to suit a particular project or industry. From a security standpoint, sidechains can create a more secure ecosystem by isolating potential threats to the mainchain. If a sidechain becomes compromised in any way, the risk is contained to that sidechain, thus safeguarding the rest of the network.

# Layer 2: addressing the scalability dilemma

Broadly speaking, layer 2 solutions extend the capabilities of an an existing layer 1 chain, often to address scalability issues. By being built on top of an existing blockchain (just as adding a new tier to a wedding cake), layer 2 protocols perform a great deal of processing work that would otherwise happen on the main chain while inheriting the security of the blockchain it is built on top of.

## Layer 2: definition

An additional, off-chain protocol that works on top of the layer 1 blockchain. Parties can securely transfer funds from the blockchain into an off-chain protocol, settle transactions in this protocol independently of the underlying chain, and safely transfer funds back to the underlying chain as needed. Layer 2 protocols improve overall throughput and scalability because they reduce network congestion.

### Layer 2 scalability solutions in Cardano

**Sidechains**

Although sidechains are not layer 2s, they are defined as a way to enable multiple blockchains to communicate with each other and have one react to events in the other, is a separate blockchain connected to a main blockchain (the 'main' chain, also known as parent chain), through a two-way mechanism (the 'bridge') that enables tokens and other digital assets from one chain to be used in another and results returned to the original chain. Assets can be moved between chains as needed. One single parent chain can have multiple interoperable sidechains connected to it, which may operate in completely different ways. EVM sidechains on Cardano include [dcSpark’s Milkomeda](https://www.milkomeda.com/) and [IOG’s EVM sidechain project.](https://iohk.io/en/blog/posts/2022/07/06/introducing-the-cardano-evm-sidechain/)

**Hydra**

Hydra is the layer 2 scalability solution for Cardano, which aims to increase transaction speed through low latency and high throughput and minimize transaction cost.

[Hydra Head](https://hydra.family/head-protocol/) is the first protocol of the Hydra family and embodies the foundation for more advanced deployment scenarios relying on isomorphic, multi-party state-channels. By providing more efficient means of processing transactions off-chain for a set of users, while using the main-chain ledger as the secure settlement layer, Hydra Head keeps security guarantees while remaining loosely coupled to the main chain. Not requiring global consensus, it can adapt to a broad range of applications. Also, Hydra Head allows Tx fees, script execution budgets and other protocol parameters to be configured as low or high as needed by the use case. For example, this is crucial to enable microtransactions.

Furthermore, Hydra Head introduces the concept of [isomorphic state channels](https://eprint.iacr.org/2020/299.pdf): that is, to reuse the same ledger representation to yield uniform, off-chain ledger siblings, which we call Heads (hence the Hydra name). Specifically for Cardano, this means that native assets, non-fungible tokens (NFTs), and Plutus scripting are available inside _each_ Hydra Head. Isomorphism permits a natural extension of the system, rather than a bolted-on one.

Hydra Heads excel in achieving near-instant finality within a Head. The process of setting up and closing a Head can take a few blocks, but once established, transactions can flow rapidly across collaborative participants. Since Hydra Heads are isomorphic and also use the EUTXO model, they can process non-conflicting transactions concurrently, which – coupled with good networking – allows for optimal use of the available resources. 

**Rollups and Validiums**

Rollups work by converting L1 execution cost (running a smart contract on the L1) into L1 data cost (storing the data on the L1). Since data is much cheaper than execution, L2 systems typically achieves much lower transaction costs while still inheriting the decentralization and safety of the underlying L1 as all data required to reconstruct the L2 state is embedded into the underlying chain. Rollups are often paired with a system to cheaply prove the current L2 state to the underlying L1, typically with fraud proofs ("optimistic rollups") or validity proofs ("zk rollups"). However, this is not a requirement, as "sovereign rollups" often contain no such proof. An example of a framework for creating rollups in the Cardano ecosystem is [Paima Engine](https://paimastudios.com/), which settles to [dcSpark’s Milkomeda](https://www.milkomeda.com/), as well as is capable of monitoring certain properties such as NFT ownership changes in the Cardano L1.

Sometimes, instead of storing the entire data on the L1, only hashes of the L2 data are stored on the L1. These are called "Validiums". They are much cheaper, but often require being paired with another storage solution to retrieve the full data (the "pre-image") of the hash (such a storage solution is often called a "data availability layer").

# Other scalability solutions

**Off-chain computing**

Offloading some of the computation, for example with Asynchronous Contract Execution (ACE), can drive greater core network efficiency. Transactions occur outside of the blockchain itself, yet can offer fast, cheap transactions via a trust model.

**Mithril**

To achieve greater scalability, it is necessary to address the complexity of critical operations that depend logarithmically on the number of participants. [Mithril](https://iohk.io/en/blog/posts/2021/10/29/mithril-a-stronger-and-lighter-blockchain-for-better-efficiency/) is an IOG-developed protocol that acts as a stake-based threshold signature scheme allowing for transparent, secure, and lightweight stake leveraging. Mithril will improve chain synchronization while maintaining trust. The result is fast and efficient multi-signature aggregation without compromising security features.

# Conclusion

A blockchain network works in mysterious ways, and some of the concepts surrounding a decentralized ledger ecosystem can be hard to understand.

Not so layer 1 and layer 2, if you use the layer cake visualization expressed herein. 

*   Layer 1 (the cake stand) = the robust and secure base network upon which rest layer 2 solutions
    
*   Layer 2 (the cake tiers) = solutions built on top of the base to address inherent limitations
    

This is the simplest way to visualize and understand what layer 1 and layer 2 are.

## Key takeaways

*   Cardano is the layer 1 (the base network)
    
*   A layer 2 solution is a structure built on top of a layer 1 chain to address the latter's limitations such as transaction speed issues. Bitcoin's Lightning Network is an example of a layer 2 solution, as is Hydra for Cardano 
    
*   There are two scaling options: vertical and horizontal
    
*   Vertical scaling involves expanding the computational capabilities of individual nodes by adding more memory and better components.
    
*   Horizontal scaling can be achieved in two ways. One, simply by adding more computers (nodes) to the existing network, and two, by using sidechains, which will take some of the computational load off the mainchain.
    

Cardano will see [a range of scalability methods](https://iog.io/en/blog/posts/2022/01/14/how-we-re-scaling-cardano-in-2022/) implemented throughout 2022/2023
