---
title: Interoperability is key to blockchain growth
tags:
  - Interoperability
  - Sidechain
  - ERC20
  - Blockchain bridge
url: ""
image: https://ucarecdn.com/5b6077f2-4bb3-40e5-a7b0-06b411381431/
image_text: Bridge
---

**Original author:**

[Olga Hryniuk](https://iohk.io/en/team/olga-hryniuk) - Technical Writer

Originally published on [IOHK.io](https://iog.io/en/blog/posts/2022/04/28/interoperability-is-key-to-blockchain-growth/): April 13, 2022

**Summary**:

Bridges, sidechains, and the AGIX ERC20 converter are providing solutions for Cardano cross-chain development

**Article**:

Cardano is steadily expanding a broad community of developers and blockchain enthusiasts. According to [Cardano blockchain insights](https://datastudio.google.com/u/0/reporting/3136c55b-635e-4f46-8e4b-b8ab54f2d460/page/p_wxcw6g0irc), there are over 4.5 million native tokens, over 5 thousand NFT projects, and [more than 900 projects overall building on Cardano](https://www.linkedin.com/posts/timbharrison_cardano-activity-6925389231104143360-D7QX?utm_source=linkedin_share&utm_medium=member_desktop_web) to date.

To support this growth, the community is now working on Cardano's wider adoption. The ability to work with other blockchains – interoperability – is key to this.

In this post, Input Output Global (IOG) takes a look at blockchain bridges, sidechains, and the role of the AGIX ERC20 converter. These are the core elements that enable communication between blockchains to ensure greater scalability, technology adoption, and ease of use.

## Interoperability

Today, there are thousands of blockchains – Bitcoin, Ethereum, Algorand, Solana, and so on. They employ a range of programming languages and have their own systems and rules. Interoperability is the ability of different blockchain networks to connect in order to exchange and leverage data between one another and to move unique types of digital assets.

The value held in blockchains is increasing exponentially. However, to evolve the industry, each network cannot be limited to its own ‘silo’, functioning in its own ecosystem. As the volume of transactions increases, users tend to switch to other networks because each blockchain handles specific tasks that others may not address. The desire to switch networks can also relate to fees, speed of transaction processing, security, or incentives.

Interoperability is essential for blockchain technologies to succeed – users need to have the ability to transact with each other without being limited to a certain network. Developers should be able to write smart contracts that are compatible with many blockchains. And, of course, users should be able to transact with all types of tokens without limitations.

Sidechains and blockchain bridges are two technologies that enable interoperability by allowing users to interact with each other simultaneously across multiple blockchains.

## Blockchain bridges

Back in 2017, during his [Cardano whiteboard presentation](https://www.youtube.com/watch?v=Ja9D0kpksxw&t=15s), Charles Hoskinson said:

> _The idea of interoperability is that there won’t be one single token to rule them all._

Blockchain bridges enable a token native to one blockchain, to be used on a different blockchain. A bridge allows tokens to be moved from one blockchain to another, where they can be used for payments or to interact with decentralized applications (DApps).

There are three types of blockchain bridges:

*   **Centralized**: these bridges are owned and fully controlled by a single party (ie. a company) that validates all bridge operations.
    
*   **Permissioned** (federated): these bridges are more decentralized as they are operated by multiple parties. However, a person or entity willing to become a validator needs permission from the federation that maintains the bridge to set up and run a node that helps validate bridge operations.
    
*   **Permissionless** (trustless): these bridges work like a fully decentralized system. Anyone can join this bridge to help maintain the validity of its operations.
    

Generally, bridge operators act as network validators. Operators accept the tokens that are undergoing migration and store them in a special smart contract. Then, using smart contracts, operators can issue the equivalent of those tokens on another network. Some bridges can only move tokens in one direction, others can make transfers in both directions. For example, unidirectional bridges can move tokens from Ethereum to Cardano for users to interact with DApps on Cardano. If a bridge is bidirectional, then users will be able to move tokens back from Cardano to Ethereum. The bridge mechanism depends on the type of smart contracts used within the networks.

**What is the AGIX ERC20 converter?**

Through a collaborative effort, IOG and [SingularityNET](https://singularitynet.io/) embarked on a mission to build a solution to drive greater adoption for Cardano – creating a bridge for Ethereum developers to leverage the inherent benefits of the network, including a more predictable and cost-efficient way to host their applications.

SingularityNET has recently launched the [AGIX-ERC20 converter](https://twitter.com/singularity_net/status/1516069469591908361) on mainnet. This bridge is centralized meaning that the validity of its operations and token transfer success will be managed exclusively by SingularityNET.

While SingularityNET can now support the AGIX-ERC20 converter independently, IOG continues to explore the possibility of other solutions. This will bring a greater degree of choice to the Cardano ecosystem – empowering developers to select tools that fit their specific needs. IOG’s commercial team is also available for developers, DApps, and enterprises alike to inquire about potential collaborations regarding future converters – or any other initiative – and can be reached using the [contact form](https://iohk.io/en/contact-commercial).

## Sidechains

Now let’s talk about sidechains. The main benefit of sidechains is their ability to introduce new features to the network without causing security risks to the mainnet. Sidechains expand blockchain’s _scalability_ because they take the burden of processing complex logic off the main chain, thereby increasing the speed (and decreasing the cost) of transaction processing. Sidechains can also act as a two-way mechanism for transferring tokens between the main and additional chains, which in turn greatly increases blockchain interoperability.

Simply put, a sidechain is a separate blockchain that is connected to the mainnet. The mainnet acts as a parent blockchain, but since sidechains are separate ledgers, they are not affected by the overall traffic. Organizations can set up their own sidechains to process transactions, execute smart contracts, and move tokens faster. These operations are not only more efficient, but also much cheaper than on the main chain, which benefits everyone.

Sidechains can also inherit some (or all) features of the parent chain, such as the ledger model and consensus mechanism. However, they can also adopt a different model depending on the organization’s goals. For example, a sidechain can combine different security protocols, consensus algorithms, or governance models to create a new sidechain that interoperates with other networks.

**Cardano sidechains**

By adding a sidechain to Cardano, it is possible to create opportunities for developers using the Solidity language on Ethereum. For instance, using the Ethereum Virtual Machine (EVM), developers can easily build DApps on top of Cardano.

[Milkomeda](https://www.milkomeda.com/) is a sidechain protocol that was launched recently to support Cardano. It allows EVM-compatible smart contracts to be executed on the Milkomeda C1 sidechain, which is connected to the Cardano main chain. Currently, Milkomeda does not use Cardano’s security model, but this is being addressed to ensure the highest level of security. Milkomeda provides a broad selection of DApps by allowing developers to port over existing projects from Ethereum and also enables the latest innovations in zero-knowledge technology to be implemented as L3+ solutions on top of its protocol. Additionally, Milkomeda aims to provide interoperability between Cardano and other blockchains such as Solana by the end of 2022.

Earlier this week, [Wanchain announced](https://iohk.io/en/blog/posts/2022/04/27/guest-blog-collaborating-on-cardano-interoperability/) new decentralized, non-custodial, bi-directional cross-chain bridges connecting Cardano to other layer 1 blockchains. Wanchain is both a sustainable layer 1 proof-of-stake (PoS) blockchain and a decentralized interoperability solution. The Wanchain layer 1 PoS blockchain is a full Ethereum-like environment that works with industry-standard Ethereum tools, DApps, and protocols. Importantly, it shares some common ground with Cardano. Wanchain uses a PoS consensus algorithm called [Galaxy Consensus](https://www.wanchain.org/_files/ugd/9296c5_5205d584ee594e879d4b8b58048b6fac.pdf) that leverages a variety of cryptographic schemes including distributed secret sharing and threshold signatures to improve random number generation and block production mechanisms. Galaxy Consensus, developed by world-class researchers and academics, is a continuation of Cardano’s own [Ouroboros](https://docs.cardano.org/core-concepts/ouroboros-overview).

Dr. Ben Goertzel, SingularityNET’s CEO, has also recently [announced](https://blog.singularitynet.io/introducing-hypercycle-singularitynets-radically-scalable-ledgerless-cardano-sidechain-3abbb24ff880) that his pioneering AI project is introducing the HyperCycle sidechain. It is being designed as a lightweight layer 2 architecture to enable inexpensive, high-speed, large-scale on-chain execution of microservices. This project is specifically designed to optimize AI-related processes, and will have profound implications for many domains beyond AI that require efficient and scalable sidechain solutions.

[Orbis](https://twitter.com/orbisproject/status/1496928538536329217?s=21&t=N2A-KPHv5p2ZGP5ZeZuIIA) and Fourier are additional scalability solutions being developed within the Cardano ecosystem. [Orbis will act](https://twitter.com/Soorajksaju2/status/1518208661084160008?s=20&t=88S8vrujQGeWfc8NSlQjeA) as a ZK (zero-knowledge) rollup layer 2 protocol, moving computation off-chain to scale Cardano's throughput. Meanwhile, [Fourier Protocol](https://emurgo.io/blog/emurgos-investment-arm-emurgo-ventures-announces-investment-in-fourier-labs) is being designed as an interoperable, EVM-compatible solution on Cardano to accelerate the migration of EVM-based projects into the Cardano ecosystem and further boost the adoption of Plutus-based applications that lack an interoperable scaling solution.

Last but not least, IOG is planning to release a new permissionless EVM sidechain this year. This sidechain will allow developers to write Solidity smart contracts on Cardano, create EVM compatible DApps, and ERC20-compatible tokens (and in time, their own sidechains) while gaining many of the benefits of Cardano. That means users will benefit from far lower fees and faster settlement times on a more environmentally sustainable blockchain. The key features of the EVM sidechain will be full compatibility with Ethereum upgrades and tools, Web3 wallet compatibility, the use of the proof-of-stake Ouroboros Byzantine Fault Tolerance consensus protocol, and, of course, its ability to inherit security from the Cardano main chain.

[April’s Cardano360](https://www.youtube.com/watch?v=b4x5OIy4shU) show will feature updates from Milkomeda, Wanchain, Orbis and IOG’s own EVM sidechain teams. Make sure you join to find out more.
