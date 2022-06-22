---
title: How we’re scaling Cardano in 2022
tags:
  - Cardano
  - Scalability
  - Development
  - Blog
url: ""
image: https://ucarecdn.com/bb4f6227-a7c6-4dd4-aa92-f0302e33433f/
image_text: Scaling Cardano
---

**Original author:**

[Tim Harrison](https://iohk.io/en/team/tim-harrison) - VP Community & Ecosystem

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2022/01/14/how-we-re-scaling-cardano-in-2022/): January 14, 2022

**Summary**:

With core smart contract capability now deployed, the next phase for Cardano focuses on performance optimization and scaling. And it starts right here…

**Article**:

The Cardano project has always been committed to addressing the classic blockchain trilemma; scalability, security, and (importantly) decentralization. As the organization tasked with creating the core platform, we have always pursued a defined, clearly staged roadmap to deliver on Cardano’s capability and fulfill its long-term potential.

Utilizing formal development methods and Haskell code – with deep roots in a peer-reviewed academic approach – we have delivered a robust, secure platform fit for the future. Built for correctness. We named this phase Byron.

An incredible community has grown up around our endeavors and, through a network of some 3,000 stake pool operators, we now have one of the most decentralized proof-of-stake networks in the world. This era of decentralization and stake pools we named Shelley, after poet and political radical, Percy Bysshe Shelley.

Goguen (which included the Alonzo HFC event) brought with it core smart contract capability, paving the way for DeFi and DApps. With initial Plutus capability now deployed, we continue to evolve the expressiveness of the Plutus language and the overall proposition, in collaboration with a growing community of developers.

Now, as we enter the Basho stage, we’re investing further energy into optimization and scaling. Building on these foundations, and steadily increasing capacity and throughput to deal with the growth in the DApp ecosystem and onboard first hundreds of thousands, then millions of new users. From DeFi degens to citizens of developing nations.

During the course of this year, starting right now, we’ll be pursuing this next phase of our mission. Parameter adjustments, improvements, enhancements, and other innovations will all play their part in steadily increasing Cardano’s capacity & throughput during 2022. While maintaining the considered, safe approach that has served us to date. Yes, we anticipate periods of high demand, and network congestion at times. We’re on an exciting journey and usage will be high. While we may at times feel impatient, this is the way. Here’s how we will optimize and scale as we grow.

## On-chain solutions

### Block size increase

The bigger the block, the more transactions it can carry. Block size was recently increased by 8KB to 72KB (a 12.5% increase); further increases will be applied over time based on ongoing system monitoring and overall network health.

### Pipelining

Improves block propagation times by coalescing validation and propagation. The goal is for blocks to be propagated to at least 95% of peers within five seconds by reducing the ‘dead time’ between blocks (the block propagation overhead). This provides the headroom to make more aggressive scaling changes, such as increasing block size/increasing Plutus parameter limits.

### Input Endorsers

Input endorsers improve block propagation times and throughput by allowing transactions to be separated into pre-constructed blocks. This improves the consistency of block propagation times and allows higher transaction rates.

### Memory /CPU parameters for Plutus

Memory usage is more efficient across the chain. Specifically, there are memory improvements in Unspent Transaction Output (UTxO) handling, stake distribution, live stake distribution and pools, and hash representation.

### Plutus script enhancements

Even more effective usage of the powerful eUTxO model through smart contract optimization, including:

*   **Reference inputs (CIP-0031)** – Plutus scripts can inspect transaction inputs without needing to spend them. This means that it is not necessary to create UTxOs simply to inspect the information held by an input.
    
*   **Plutus Datums (CIP-0032)** – Datums can be attached directly to outputs instead of datum hashes. This simplifies how datums are used, as a user can see the actual datum rather than having to supply the datum that matches the given hash.
    
*   **Script sharing (CIP-0033)** – Plutus script references can be associated with transaction outputs, meaning that they can be recorded on-chain for subsequent reuse. It will not be necessary to supply a copy of the script with each transaction, hugely reducing friction for developers. Reusing scripts in multiple transactions significantly reduces transaction sizes, improving throughput and reducing script execution costs.
    

### Node enhancements

Improvements will help even the distribution of stake and reward computations across the epochs, thus providing greater headroom for block size increases. Also, memory usage is now more efficient. Memory compaction reduces RSS footprint, and memory sharing means we need fewer data instantiated. Node version 1.33.0, from January 2022, reduces peak load at critical points, including the epoch boundary.

### On-disk storage

By storing portions of the protocol state on disk, nodes will need to hold less in memory, meaning that RAM-constrained systems will be able to run nodes provided they have sufficient storage, and memory will no longer be a bottleneck on scalability. This will enable significant growth in the blockchain state.

## Off-chain solutions

### Sidechains

A sidechain is a separate blockchain connected to a main blockchain (the 'main' chain, also known as parent chain), through a two-way mechanism (the 'bridge') that enables tokens and other digital assets from one chain to be used in another and results returned to the original chain. Assets can be moved between chains as needed. One single parent chain can have multiple interoperable sidechains connected to it, which may operate in completely different ways. EVM sidechains coming to Cardano include dcSpark’s Milkomeda and IOG’s Mamba.

### Hydra

Introduces a family of layer 2 protocols including isomorphic state channels to maximize throughput, minimize latency, incur low to no costs, and greatly reduce storage requirements. Hydra provides a more efficient means to process transactions off-chain while using the main-chain ledger as the secure settlement layer.

### Off-chain computing

Offloading some of the computation, for example with Asynchronous Contract Execution (ACE) can drive greater core network efficiency. Transactions occur outside of the blockchain itself, yet can offer fast, cheap transactions via a trust model.

### Mithril

To achieve greater scalability, you need to address the complexity of critical operations that depend logarithmically on the number of participants. Mithril will improve chain synchronization while maintaining trust. The result? Multi-signature aggregation that is fast and efficient without compromising security features.

![](https://ucarecdn.com/fc644130-c13d-43f9-a966-14290687d190/)

_Infographic credit: Mikki Pham/Fernando Sanchez_
