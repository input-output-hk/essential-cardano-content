---
title: "From Classic to Genesis: the implementations of Ouroboros explained"
tags:
  - Ouroboros
  - Consensus
  - Smart Contracts
  - Blockchain
url: ""
image: https://ucarecdn.com/a573fe37-519c-4b95-8ac2-89cad4d042b5/
image_text: "Ouroboros "
---

**Original author:**

Olga Hryniuk - Technical Writer

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2020/03/23/from-classic-to-genesis-the-implementations-of-ouroboros-explained/): March 23, 2020

**Blurb**:

Ouroboros is the consensus protocol of Cardano. Here, we explain what it does and how it’s evolving

**Article**:

With the recent BFT update to the Byron mainnet you’ll probably have heard a lot about Ouroboros: the ground-breaking proof-of-stake consensus protocol used by Cardano. Developed as a more energy efficient and sustainable alternative to proof of work, upon which earlier cryptocurrencies – Bitcoin and, currently, Ethereum – are built, Ouroboros was the first blockchain consensus protocol to be developed through peer-reviewed research.

Led by Aggelos Kiayias at the University of Edinburgh, Ouroboros and its subsequent implementations – BFT, Praos, Genesis – provide a new baseline to solve some of the world’s greatest challenges, securely and at scale.

Yet recognition begins with education, and we cannot rely on _what_ a technology achieves to convey the _how_. In this article, we present an overview of the _how_ of Ouroboros. We’ll examine the tangibles and cover what each implementation introduces, to further the community’s understanding of the protocol, and illustrate why it’s such a game changer. A detailed analysis of each implementation can be found in the corresponding papers below. For a broad-stroke explanation of Ouroboros and its implementations, however, read on.

*   [Ouroboros Classic](https://iohk.io/en/research/library/papers/ouroborosa-provably-secure-proof-of-stake-blockchain-protocol/)
    
*   [Ouroboros BFT](https://iohk.io/en/research/library/papers/ouroboros-bfta-simple-byzantine-fault-tolerant-consensus-protocol/)
    
*   [Ouroboros Praos](https://iohk.io/en/research/library/papers/ouroboros-praosan-adaptively-securesemi-synchronous-proof-of-stake-protocol/)
    
*   [Ouroboros Genesis](https://iohk.io/en/research/library/papers/ouroboros-genesiscomposable-proof-of-stake-blockchains-with-dynamic-availability/)
    

## A word on consensus protocols, and why Ouroboros is different

It’s reasonable to assume that anybody new to the space might be confused by the term 'consensus protocol'. Put simply, a consensus protocol is the system of laws and parameters that govern the behavior of distributed ledgers: a ruleset by which each network participant plays.

Public blockchains aren’t controlled by any single, central authority. Instead, a consensus protocol is used to allow distributed network participants to agree on the history of the network captured on the blockchain – to reach consensus on what has happened, and continue from a single source of truth.

That single source of truth provides a single record. This is why blockchains are sometimes referred to as trustless: instead of requiring participants to trust one another, trust is built into the protocol. Unknown actors may interact and transact with each other without relying on an intermediary to mediate, or for there to be a prerequisite exchange of personal data.

Ouroboros is a proof-of-stake protocol, which is distinct from proof of work. Rather than relying on 'miners' to solve computationally complex equations to create new blocks – and rewarding the first to do so – proof of stake selects participants (in the case of Cardano, stake pools) to create new blocks based on the stake they control in the network.

Networks using Ouroboros are many times more energy efficient than those using proof of work – and, through Ouroboros, Cardano is able to achieve unparalleled energy efficiency. At the same level of decentralization – for example, 100 pools, which exceeds [bitcoin’s current network](https://btc.com/stats/pool) – Cardano could consume as little as 0.01567GWh (gigawatt-hours) per year. Bitcoin, meanwhile, would require 67,000 GWh per year (according to [current statistics](https://digiconomist.net/bitcoin-energy-consumption)). This is based on Ouroboros' ability to run on a [Raspberry Pi](https://www.reddit.com/r/cardano/comments/e8t34d/rock_pi_cardano_full_node_for_100/), which has a power consumption of [15 to 18W (watts)](https://wiki.radxa.com/News/2018/11/introduce-the-new-rockpi-4-hardware). In theory, this equates to more than four-million times the energy efficiency. The resulting difference in energy use can be analogized to that between a household and a small country: one can be scaled to the mass market; the other cannot.

Now, let’s take a closer look at how the Ouroboros protocol works, and what each new implementation adds.

## Ouroboros Classic

We start with [Ouroboros](https://iohk.io/en/research/library/papers/ouroborosa-provably-secure-proof-of-stake-blockchain-protocol/): the first implementation of the Ouroboros protocol, published in 2017. This first implementation (referred to as Ouroboros Classic) laid the foundations for the protocol as an energy-efficient rival to proof of work, introduced the mathematical framework to analyze proof of stake, and introduced a novel incentive mechanism to reward participants in a proof-of-stake setting.

More than this, however, what separated Ouroboros from other blockchain, and, specifically, proof-of-stake protocols was its ability to generate unbiased randomness in the protocol’s leader selection algorithm, and the subsequent security assurances that provided. Randomness prevents the formation of patterns, and is a critical part of maintaining the protocol’s security. Whenever a behavior can be predicted, it can be exploited – and though Ouroboros ensures transparency, it prevents coercion. Significantly, Ouroboros was the first blockchain protocol to be developed with this type of rigorous security analysis.

## How Ouroboros works

A comprehensive explanation of how Ouroboros works can be found in its [research paper](https://iohk.io/en/research/library/papers/ouroborosa-provably-secure-proof-of-stake-blockchain-protocol/). To summarize, Ouroboros divides the blockchain into slots and epochs. In Cardano, each slot lasts for 20 seconds and each epoch – which is an aggregation of slots – represents approximately five days’ worth of slots.

Central to Ouroboros’ design is the recognition that attacks are inevitable. As such, the protocol has tolerance built-in to prevent attackers from propagating alternative versions of the blockchain, and assumes that an adversary may send arbitrary messages to any participant at any time. In fact, the protocol is guaranteed to be secure so long as more than 51% of the stake is controlled by honest participants (that is, those following the protocol).

A slot leader is elected for each slot, who is responsible for adding a block to the chain and passing it to the next slot leader. To protect against adversarial attempts to subvert the protocol, each new slot leader is required to consider the last few blocks of the received chain as transient: only the chain that precedes the prespecified number of transient blocks is considered settled. This is also referred to as the settlement delay. Among other things, this means that a stakeholder can go offline and still be synced to the blockchain, so long as it’s not for more than the settlement delay.

Within the Ouroboros protocol, each network node stores a copy of the transaction mempool – where transactions are added if they are consistent with existing transactions – and the blockchain. The locally stored blockchain is replaced when the node becomes aware of an alternative, longer valid chain.

The drawback of Ouroboros Classic was that it was susceptible to adaptive attackers – a significant threat in a real-world setting that was resolved with Ouroboros Praos – and had no secure way for a new participant to bootstrap from the blockchain, which was resolved with Ouroboros Genesis.

## Ouroboros BFT

[Ouroboros BFT](https://iohk.io/en/research/library/papers/ouroboros-bfta-simple-byzantine-fault-tolerant-consensus-protocol/) came next. Ouroboros BFT (Byzantine Fault Tolerance) is a simple protocol that was used by Cardano during the Byron reboot, which was the transition of the old Cardano codebase to the new. Ouroboros BFT will help prepare Cardano’s network for Shelley’s release and, with that, its decentralization.

Rather than requiring nodes to be online all of the time, Ouroboros BFT assumes a federated network of servers – the blockchain – and synchronous communication between the servers, providing ledger consensus in a simpler and more deterministic manner.

Additional benefits include instant proof of settlement, transaction settlement at network speed – which means the determiner for transactions is the speed of your network connection to a OBFT node – and instant confirmation in a single round trip of communication. Each of these results in significant performance improvements.

## Ouroboros Praos

[Ouroboros Praos](https://iohk.io/en/research/library/papers/ouroboros-praosan-adaptively-securesemi-synchronous-proof-of-stake-protocol/) builds upon – and provides substantial security and scalability improvements to – Ouroboros Classic.

As with Ouroboros Classic, Ouroboros Praos processes transaction blocks by dividing chains into slots, which are aggregated into epochs. Unlike Ouroboros Classic, however, Praos is analyzed in a semi-synchronous setting and is secure against adaptive attackers.

It assumes two possibilities: that adversaries can delay honest participant messages for longer than one slot, and that an adversary may send arbitrary messages to any participant at any time.

Through private-leader selection and forward-secure, key-evolving signatures, Praos ensures that a strong adversary cannot predict the next slot leader and launch a focused attack (such as a DDoS attack) to subvert the protocol. Praos is also able to tolerate adversarially-controlled message delivery delays and a gradual corruption of individual participants in an evolving stakeholder population, which is critical for maintaining network security in a global setting, provided that an honest majority of stake is maintained.

## Ouroboros Genesis

Then, we have [Ouroboros Genesis](https://iohk.io/en/research/library/papers/ouroboros-genesiscomposable-proof-of-stake-blockchains-with-dynamic-availability/). Genesis further improves upon Ouroboros Praos by adding a novel chain selection rule, which enables parties to bootstrap from a genesis block – without, significantly, the need for trusted checkpoints or assumptions about past availability. Genesis also provides proof of the protocol’s Universal Composability, which demonstrates that the protocol can be composed with other protocols in arbitrary configurations in a real-world setting, without losing its security properties. This significantly contributes to its security and sustainability, and that of the networks using it.

## The future of Ouroboros

Ouroboros, named after the symbol of infinity, is the backbone of the Cardano ecosystem. The protocol serves as a foundation and staging point for self-propagating systems that cyclically transform and grow, supplanting existing systems – financial and otherwise – and disintermediating the power structures upon which they rely. It is the beginning of a new standard, defined not from the center but, instead, from the margins.

Its future is as its past: a tireless effort to explore, iterate, and optimize, and drive positive change through rigorous research. Each step in its journey – after Genesis comes Ouroboros Crypsinous and Ouroboros Chronos – is a new evolution, and takes us closer to our vision of a fairer, securer, and more sustainable world.
