---
title: Why the EUTxO model is ideal for layer 2 zk-rollups like Orbis
tags:
  - Layer 2
  - Scalability
  - blockchain
  - Interoperability
  - DeFi
url: ""
image: https://ucarecdn.com/e3624bfe-7116-411b-91f5-99095cf3c5a1/
image_text: ""
---

The Cardano blockchain is constantly evolving to serve a thriving community of users that leverage it for various financial services and transactions. This year, the blockchain’s main focus is to develop and implement scaling solutions methodically.

Layer 2 solutions create additional improvements to the layer 1 protocol, helping a blockchain scale and providing efficient and seamless transaction experiences to its users.

That’s where layer 2 scaling solutions come in. The Orbis protocol, which I previously discussed in [April’s 360](https://youtu.be/b4x5OIy4shU?t=2843), is one such example. 

During the show, I gave a detailed explanation of what Orbis would do for Cardano. In this post, you can learn more about Orbis, how it will help the blockchain scale, and why Cardano’s EUTxO model lends itself more to building effective layer 2 solutions compared to other accounting models.

## What are Orbis zk-rollups?

To understand why the [EUTxO model](https://www.essentialcardano.io/glossary/eutxo) works well for scaling solutions, let’s first look at what these solutions are.

Simply put, [the Orbis protocol](https://blog.orbisprotocol.com/p/enter-orbis?showWelcome=true&s=r) will be Cardano’s first layer 2 zero-knowledge (zk) proof solution that is infinitely scalable. With zk-rollups such as Orbis, a ZK proof enables batching thousands of transactions into a single proof and verification of their validity through a single transaction on the Cardano blockchain.

Orbis is a general-purpose zk-rollup compatible with any DApp that runs on Cardano. The layer 2 solution aims to support [DeFi](https://www.essentialcardano.io/glossary/decentralized-finance-defi) applications by offering enhanced transaction throughput and scalability required for Cardano to truly become a global financial system.

Scaling is possible through the following steps:

1.  Multiple [transactions](https://www.essentialcardano.io/glossary/transaction-tx) take place off-chain on [layer 2](https://www.essentialcardano.io/glossary/layer-2).
    
2.  They are then bundled into one zero-knowledge proof (zk-rollup).
    
3.  And finally, the zk proof is submitted on-chain to Cardano’s [layer 1](https://www.essentialcardano.io/glossary/layer-1) for verification.
    

![](https://lh6.googleusercontent.com/lbR4eprrCNMPbYjzuWsh2QHQhsuckrWaLrlCvHCokMFBMG8qvV9JvPdmDjcFEIKg0WjeXbCxj_5e8425C6TypBOjCByeb0Rs0O9P7HaCfyjmRdl3oLNBi3POo9rupHW85VMUsce6SEYyDh8pCw)

_Figure 1. The relationship between Orbis and Cardano_

These zk-rollups guarantee, with complete mathematical certainty, that each of the multiple transactions has occurred on the Orbis protocol. And they do so without revealing all the details of said transactions.

### How Orbis' zk-rollups work

Orbis will essentially consist of two main parts:

*   An off-chain _Prover_ node that processes and proves that transactions are taking place, allowing its users to interact with Orbis and post transactions.
    
*   An on-chain _Verifier_ contract that settles transactions happening on-rollup onto the layer 1, accepting asset inputs to be used on the rollup and verifying the Prover’s transactions.
    

The ability to effectively compress transactions together on the layer 2 ensures a _much higher throughput_ at a _faster speed_ and _lower fees_.

ZK-Rollups usually operate on an account-based model like Ethereum’s, however, according to Ryan, Cardano’s EUTxO model is better suited for zk-rollups.

Here’s how.

## The benefit of building zk-rollups on a EUTxO accounting model

The main difference between [the EUTxO and account-based models](https://medium.com/coinmonks/a-simple-explanation-of-cardanos-eutxo-approach-vs-ethereum-s-on-smart-contracts-328a1ce485ff) that gives Cardano the edge comes down to how the two [handle state](https://blog.blockmagnates.com/accounting-models-in-blockchain-utxo-eutxo-and-account-models-3ebbc1493f35).

Whereas Ethereum’s model considers a whole set of data through a [global state](https://www.essentialcardano.io/glossary/global-state), Cardano’s model considers a [local state](https://www.essentialcardano.io/glossary/local-state), only analyzing a relevant transaction’s [UTxOs](https://www.essentialcardano.io/glossary/utxo). This makes it easier to parallelize transactions and bundle them together into a single proof that can then be submitted on-chain.

![](https://lh5.googleusercontent.com/M1P3ubGKxRa9kpSThn_L_6uR-fvGjfwmdr8uhy3YAL8Vc_X7VGetCrQyy5WgEHYCaaOkXoY2i8a4WQkLszOF-n5rnazBEYpD7SfiGJ-BLWu7caNpTa2IgrWlFH1FhxxBdlv_1nb9J8UskTqQ5Q)

_Figure 2. Cardano’s EUTxO model v Ethereum’s Account-based model_

[Parallelism](https://www.essentialcardano.io/glossary/parallelism), one of Cardano’s key features, is basically a system’s ability to create multiple transactions at the same time without any interference.

On Cardano, parallelism goes hand in hand with [concurrency](https://www.essentialcardano.io/glossary/concurrency), another key advantage of the EUTxO model. As parallelism aligns the transactions, [concurrency processes them simultaneously](https://iohk.io/en/blog/posts/2021/09/10/concurrency-and-all-that-cardano-smart-contracts-and-the-eutxo-model/). Thus, the maximum achievable parallelism increases as the level of concurrency increases. Through this process, performance and throughput improve.

Parallelism and concurrency, therefore, **allow Orbis to leverage the EUTxO model** and scale throughput infinitely in the long run, while reducing the amount of computational data required to process transactions.

## Cardano’s scaling journey continues

As you can see with Orbis’ zk-rollups approach, Cardano’s architecture is aptly constructed to eventually become the blockchain that provides financial services to the entire globe.

However, Orbis isn’t the only way that Cardano is [scaling in 2022](https://www.essentialcardano.io/article/how-were-scaling-cardano-in-2022) and beyond. Learn about these [scalability solutions that are building on Cardano right now](https://iohk.io/en/blog/posts/2022/04/28/interoperability-is-key-to-blockchain-growth/).
