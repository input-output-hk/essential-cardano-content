---
title: "Concurrency and all that: Cardano smart contracts and the EUTXO model"
tags:
  - Cryptocurrency
  - Smart Contracts
  - EUTXO
  - Djed
url: ""
image: https://ucarecdn.com/692a35a5-098a-4b8c-a14a-2be597031a6e/
image_text: A picture of a road with car lights on both sides of the road
---

**Original author:**

[Olga Hryniuk](https://iohk.io/en/team/olga-hryniuk) - VP Community & Ecosystem

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2021/09/10/concurrency-and-all-that-cardano-smart-contracts-and-the-eutxo-model/): September 10, 2021

**Blurb**:

Cardano’s EUTXO model provides a secure and versatile environment to process multiple operations without system failures

**Article**:

Cardano is a UTXO-based blockchain, which utilizes a different programming paradigm for decentralized applications (DApps) from other account-based blockchains like Ethereum. The specific flavor Cardano uses is the [Extended Unspent Transaction Output (EUTXO) model](https://iohk.io/en/blog/posts/2021/03/11/cardanos-extended-utxo-accounting-model/) introduced by the Alonzo upgrade. EUTXO offers greater security allowing for smart contract execution cost predictability (without unpleasant surprises) and, as a result, offers a different approach to parallelization.

EUTXO inherits the per-branches design of the UTXO (Bitcoin) model, where one branch is by definition a sequence of transactions that requires a sequence of validations. To split the logic across different branches and enforce more parallelism, it is essential to build DApps and other solutions using _multiple UTXOs_. This provides benefits in terms of scaling, just like developing Bitcoin services prerequisites splitting one wallet into sub wallets.

DApps built on Cardano are **not limited** to one transaction per block. In fact, the block budget (that is the maximum number of transactions it can hold) allows the execution of hundreds of simple transactions and several complex scripts. However, the EUTXO model allows spending a transaction output only once. Given that users can face contention issues trying to access the same UTXO, it is important to use many different UTXOs. Note that this is important unless such a design would benefit from a strict ordering of clients. Sets of UTXOs can be used to implement design patterns that include semaphores. In addition, different users can interact with one smart contract without any concurrency failure. That is because a smart contract can handle _a number of different UTXOs_ that make up its current state and off-chain metadata that allows interpreting those UTXOs.

## Doing things in parallel

Blockchains achieve immutability and transparency of transaction processing differently. Any blockchain system should have a set of properties to meet the ever-growing need for secure yet swift operation processing, namely:

*   **Throughput** – the number of operations a system can perform within a certain time period. This relates, for example, to the number of transactions or smart contracts processed in one second.
    
*   **Performance** – how fast the system works. Performance measures the time of transaction or smart contract execution.
    
*   **Scalability** – the ability of the system to perform multiple operations without overloading the network or influencing performance properties.
    

By increasing parallelism, we can ultimately improve the throughput of the system while keeping the performance of individual operations the same, but this sort of scalability will always be limited by the degree of contention.

When it comes to scalability, we also distinguish such system properties as _concurrency_, _parallelism_, and _contention_. Concurrency is essential to allow multiple actors to progress on a certain task without interfering with each other. Parallelism allows such progress _at the same time_ without any interference. Contention occurs when those multiple actors interfere with each other while working either concurrently or in parallel.

## Understanding concurrency

Concurrency may or may not improve a system’s performance, throughput, or responsiveness. The amount of concurrency limits the maximum number of simultaneous operations that can be performed.

To obtain _actual_ performance improvements in a UTXO-based blockchain, processors or other actors should be able to perform multiple actions simultaneously. The higher the level of concurrency, the higher the maximum possible parallelism. Such an approach then translates to performance improvements and throughput. It also provides significant advantages over account-based systems (like Ethereum).

## Deploying DApps on UTXO ledgers _is different_

Cardano’s approach to DApp deployment is different and thus it requires a learning curve and a different approach. This is like working with different programming languages: there is one goal – to deploy a solution, but so many programming languages to use for this purpose.

Maximizing concurrency is a skill that needs to be learned: developers need to write code in a way that severely restricts the opportunities for contention (e.g., by avoiding shared states and accidental dependencies). The system must then translate this concurrency into parallelism. A number of developers have already identified ways to approach this, while others are still developing solutions. Simply transplanting lessons learned on one blockchain will not work; while the learning curve is a little steeper, the results make this worthwhile.

Either way, it is important to understand that to deploy a scalable DApp on Cardano, a developer can’t just use an adapted Ethereum contract. Cardano is based on the UTXO model; it is not account-based. And this means that a single on-chain state will not meet the concurrency property on Cardano. Instead, DApps should split up their on-chain state across many UTXOs. This will increase the concurrency in their application, thereby allowing higher throughput.

Our education team has previously shared a simple AMM-style DEX implementation in the Plutus Pioneer course. While this is useful for teaching purposes, this architecture would not directly support a commercial DEX where an order book approach and additional concurrency are required. A developer looking to deploy on the Cardano mainnet would need to improve the scalability of the architecture accordingly.

We proposed a solution within our recent [Djed stablecoin paper](https://iohk.io/en/research/library/papers/djeda-formally-verified-crypto-backed-pegged-algorithmic-stablecoin/). For the Djed implementation on Cardano, an order book modeling pattern is favored whereby an order maker is responsible for forwarding any minting or burning order to the stablecoin smart contract, with an additional incentive fee imposed on each would-be buyer or seller of stablecoins and reserve coins. Several security mechanisms – via the extensive use of non-fungible tokens (NFTs) – are also used to guarantee the uniqueness of transactions, the correctness of each submitted order, and to prevent front-running attacks. NFT tokens are also used to report successful or failed minting and burning orders. We’ll publish a fuller article on this shortly.

To learn more about scalability, you can read [how to design a scalable Plutus application](https://plutus.readthedocs.io/en/latest/plutus/howtos/writing-a-scalable-app.html) and find out how to organize DApps on Cardano using [order book patterns](https://plutus.readthedocs.io/en/latest/plutus/explanations/order-book-pattern.html). Developers have also presented [concurrent and deterministic approaches to the EUTXO smart contract architecture](https://medium.com/meld-labs/concurrent-deterministic-batching-on-the-utxo-ledger-99040f809706) that might be regarded as a generalization of the parallel state machine steps introduced in the [Hydra paper](https://iohk.io/en/research/library/papers/hydrafast-isomorphic-state-channels/) to realize multi-step state machines. A number of other [developers](https://twitter.com/ErgoDex/status/1434241104015151105?s=20) and community members have also published papers, [videos](https://youtube.com/watch?v=TxnvYsBnLjQ), [articles](https://sundaeswap-finance.medium.com/concurrency-state-cardano-c160f8c07575), and useful [threads](https://twitter.com/CardanoMaladex/status/1434960813006200835) on Twitter outlining their approaches. It’s a brilliant lesson in how the community will continue to develop its own innovative solutions, as approaches become more standardized with platform maturity.

## Moving forward

The Alonzo hard fork event will introduce the core building blocks of Plutus 1.0. This is the beginning of ecosystem growth. Although it is still early, the Alonzo testnet allows our developers to assess system properties and build scalable DApps in advance – preparing for their mainnet launch. Dozens of projects have already been working with local instances of Plutus environments. With the main public testnet soon supporting smart contracts, we expect a significant ramping up of activity over the next few weeks and in the months ahead. Later this month, the [Cardano summit](https://summit.cardano.org/) (25-26 September) will showcase many of these projects, plus provide important updates on the smart contracts roadmap and the ongoing evolution of the technology stack. Developer events, hackathons, and, of course, the results of Project Catalyst will continue to bring new tools and abstractions to this fast-growing developer ecosystem.

If you are a developer, make sure to join our [Discord community](https://discord.gg/ScxDkrxpBg) and get involved with [Project Catalyst](https://cardano.ideascale.com/a/index) if you are looking to fund your project.

_I'd like to acknowledge_ [Lars Brünjes](https://github.com/brunjlar), [Jann Müller](https://github.com/j-mueller), and [Manuel Chakravarty](https://github.com/mchakravarty) for their technical input and support during the blog post preparation.
