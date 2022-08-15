---
title: What is Cardano (Cardano 101)
tags:
  - ada
  - Ouroboros
  - Open Source
  - NFT
  - Native tokens
  - Blog
  - Glossary
  - Wallet
  - Rewards
  - Staking
  - Stake pool
  - Smart Contracts
  - "101"
  - Catalyst Circle
  - Hard fork
  - Hard fork combinator
  - Code
  - Catalyst
url: ""
image: https://ucarecdn.com/cc7fa8e4-40aa-4fde-bb4d-c1efe0fc3e0b/
image_text: Cardano 101 - All you need to know
---

## What is Cardano?

The Cardano universe is expanding with the arrival of a broad range of decentralized applications and exchanges. From games to decentralized finance (DeFi), Cardano covers the whole gamut of blockchain-based versatility.

As Cardano grows, so does its reach, its community, value, and adoption. This paper reflects all that Cardano is, what it represents, and what it can offer to the world.

## Founding and IOG organization

The project to create Cardano was initiated by a group of cryptocurrency enthusiasts, investors, and entrepreneurs concentrated in Asia at the end of 2014. Charles Hoskinson and Jeremy Wood founded Input Output (initially, IOHK) to design and implement Cardano. In addition, the Cardano Foundation was set up to oversee and supervise the development of Cardano and to act as an advocate for its users. The foundation is based in Switzerland. A third entity, Emurgo, was created to pursue commercial activities on behalf of the ecosystem and community. The three entities have separate ownerships and leadership.

The Cardano blockchain and ada, its founding native cryptocurrency, was launched in 2017 and established itself as one of the leading blockchains.

 IOHK has evolved into Input Output Global, Inc. (IOG) with Charles Hoskinson as Chief Executive Officer. IOG is incorporated in the state of Wyoming, USA.

## The team behind Cardano

As the blockchain engineering and research company that is participating, along with the Cardano Foundation, Emurgo, and other third parties, in developing the core Cardano platform, IOG has assembled a multi-talented [global team](https://iohk.io/en/team/) of more than 600 people. This includes computer scientists, academic researchers, software engineers, product specialists, and technical architects. 

With over 600 staff (as of May 2022), IOG is an ever-expanding constellation for the development of decentralized applications, identity solutions, wallets, and an eclectic and thematically diversified range of decentralized applications for blockchain.

## The Cardano blockchain

Cardano is a third-generation, open source, proof-of-stake blockchain platform. Its name derives from [Gerolamo Cardano](https://www.britannica.com/biography/Girolamo-Cardano), a mid-16th century Italian physician and mathematician. Third-generation blockchain platforms are designed to resolve the issues that the first two generations (Bitcoin and Ethereum) suffer from, including _scalability_ and _interoperability,_ while fulfilling an ambitious agenda of _decentralization._

The Cardano platform combines pioneering technologies based on peer-reviewed research to provide unparalleled security and sustainability to decentralized applications, systems, and communities worldwide. Cardano is about openness, fairness, and inclusivity. 

The blockchain's proof-of-stake protocol, Ouroboros, offers a scalable and energy-efficient solution to accommodate millions – and ultimately, billions – of users worldwide.

Cardano's development is led by a deliberate approach to construct a robust and reliable enterprise-grade infrastructure.

### Commitment to decentralization

Decentralization is one of Cardano's main drivers, built around three central pillars:

*   Block production & consensus
    
*   Networking
    
*   Governance
    

These three elements combined form a fully decentralized environment where power shifts from monopolistic entities to the individual. Decentralization dissolves the concentration of power by enabling peers to make choices and decisions, and returning ownership of personal information where it belongs - with the users.

On March 31, 2021, Cardano's block production became fully decentralized. On that day, [the stake pool operator (SPO) community began producing 100% of new blocks](https://iog.io/en/blog/posts/2021/03/31/decentralization-to-d-0-day-and-beyond/). This was an important milestone on the way to Cardano's ultimate destination; the creation of a platform wholly and democratically operated and controlled through a global community of SPOs, developers, and ada holders.  
Technology

### How does Cardano work?

The Cardano architecture features three layers:

*   Consensus layer
    
*   Ledger layer
    
*   Network layer
    

**Consensus layer**

This layer performs two fundamental functions:

*   Running the [Ouroboros](https://eprint.iacr.org/2016/889.pdf) consensus protocol. This layer takes decisions like adopting blocks, choosing between competing chains (if there are any), and decides when to produce blocks of its own; and 
    
*   Maintaining all the state that is required to make the decisions taken in the consensus layer.
    

**Ledger layer**

This layer specifies:

*   What the state of the ledger looks like; and
    
*   How the ledger must be updated for each new block.
    

The ledger layer consists exclusively of pure functions that specify the transitions between successive ledger states, as derived from the formal ledger rules, using the [Extended UTXO (EUTXO)](https://api.zotero.org/groups/478201/items/T24L95MI/file/view?key=Qcjdk4erSuUZ8jvAah59Asef) accounting model. The state transitions are driven by the set of transactions contained within the Cardano blocks, and by major events such as epoch boundary transitions and hard fork combinator events.

The consensus layer does not need to know the exact nature of the ledger state, nor the contents of the blocks, apart from some header fields required to run the consensus protocol.

**Network layer**

This layer maintains the connections between all the distributed nodes in the Cardano network, obtains new blocks from the network as they are produced by block producing nodes, builds newly minted transactions into blocks, and transmits blocks between nodes.

### Cryptography

Cardano uses strong cryptographic primitives to securely create and send transactions, and to protect the security and integrity of the protocol. 

Cardano utilizes asymmetric key pairs for:

*   Signing and validating payments and staking certificates;
    
*   Smart contract execution
    
*   Multi-signature transactions
    
*   Identifying and defining addresses on the Cardano blockchain
    

Key pairs include a public and a private key. By using their private key, users provide cryptographic proof that they indeed own the coins or assets they're using.

Cryptography also provides security for the consensus protocol. The two main mechanisms are:

*   Node keys, which are used to register and operate stake pools, and are sub-divided into Operator/operational key, Key Evolving Signature (KES) key pairs, and Verifiable Random Function (VRF) keys; and
    
*   Payment and stake credentials, which are used to authorize fund transfers or to delegate stake to stake pools. These may be either key hashes or script hashes.
    
    Learn more about [Cardano's cryptography](https://docs.cardano.org/core-concepts/cardano-keys#gatsby-focus-wrapper).
    

### Peer-to-peer communication between nodes

Peer-to-peer (P2P) communication enables nodes to self-organize into a globally distributed network of Cardano block producers and relays, and also self-optimize, choosing the best and more performant connected nodes and disconnecting from less performant ones. 

Information is exchanged between nodes to enable a flexible network topology that automatically adapts to dynamically changing network conditions. This further boosts network decentralization, resilience and robustness.

The network's P2P architecture includes four elements:

*   P2P Governor
    
*   Connection Manager
    
*   Server
    
*   Inbound Protocol Governor
    

[Read more](https://iohk.io/en/blog/posts/2021/04/06/boosting-network-decentralization-with-p2p/) about P2P communication in Cardano.

[Read more](https://iohk.io/en/blog/posts/2021/03/31/decentralization-to-d-0-day-and-beyond/) about Cardano’s decentralization drive.

### Ouroboros

Cardano's proof-of-stake consensus protocol.

In mythology, Ouroboros (also, _Uroboros_) is usually depicted as a snake (or sometimes a dragon) eating its own tail in a closed circle. The word Ouroboros itself derives from Ancient Greek, its literal meaning being 'tail eating' or 'tail devourer.'

As a symbol, Ouroboros represents the infinity of time flowing back unto itself, in a never-ending cycle, as if caught in an eternal loop. Ouroboros first appeared in Egypt, in the 13th century BC. Later, alchemists adopted Ouroboros into their mystical symbolism.

So why was this mythical creature chosen to represent the proof-of-stake consensus protocol that underlies Cardano? In this context, Ouroboros represents the possibility of infinite and ethical growth and scalability of the blockchain, and also, the protocol feeds itself from previous epochs for the randomness used in the current epoch. This is known as ‘eating its own tail’, as the pictorial representation of Ouroboros does.

Ouroboros' central message is the delivery of greater opportunities for the world, and its preservation through much-reduced energy consumption.

### What makes Ouroboros unique?

Ouroboros is the first provably secure proof-of-stake blockchain protocol. In other words, Ouroboros offers _mathematically verifiable_ security against attackers. The protocol is guaranteed to be secure, as long as 51% of the stake is held by honest participants.

Ouroboros realizes what is known as ‘Nakamoto-style consensus’ based on proof-of-stake. This provides the robustness of Bitcoin but ensures significant energy efficiency, higher speed and a fair reward mechanism. Also, the protocol ensures security against network attacks and has a rigorous game-theoretic mechanism designed to discourage monopolization.

Ouroboros upgrades are smooth due to hard-fork combinator technology, which does not cause disruptions for users. There have been several [‘flavors’ of Ouroboros](https://docs.cardano.org/core-concepts/ouroboros-overview), released in stages.

This is just a high-level overview of Cardano’s protocol. For more information about Ouroboros, visit IOG’s [research library page](https://iohk.io/en/research/library/).

## EUTXO

Cardano uses an innovative [Extended Unspent Transaction Output (EUTXO)](https://iohk.io/blog/posts/2021/03/11/cardanos-extended-utxo-accounting-model/) accounting model to support multi-assets and smart contracts.

Smart contracts are digital agreements, written in code, that can be executed without an intermediary once certain conditions are met. Smart contracts make non-fungible tokens (NFTs) and decentralized finance applications possible.

Building on Bitcoin’s UTXO model, the EUTXO model provides a secure and versatile environment to process multiple operations without system failures. This model offers better scalability and privacy, as well as more simplified transaction logic, as each UTXO can only be consumed once and as a whole, which makes transaction verification much simpler.

EUTXO offers unique advantages over other accounting models. The success or failure of transaction validation depends only on the transaction itself and its inputs, and not on anything else on the blockchain. As a consequence, the validity of a transaction can be checked off-chain, before the transaction is sent to the blockchain. A transaction can still fail if some other transaction concurrently consumes an input that the transaction is expecting, but if all inputs are still present, the transaction is guaranteed to succeed.

## Interoperability

Interoperability is about two or more blockchains interacting to move assets and data back and forth. This is usually achieved by two-way mechanisms called _bridges_. 

Interoperating chains can be in a symmetric or an asymmetric relationship. Two main chains that interoperate (Ethereum and Cardano, for instance) form the symmetric case. A mainchain and a sidechain that interoperate form the asymmetric case.

In the symmetric case, if one chain dies, the other one is not affected. The situation is different with the asymmetric case, because the sidechain depends on the mainchain, but not the other way around. If the sidechain dies or is compromised, a firewall property typically protects the mainchain from harm. However, if the mainchain is compromised, the sidechain will usually no longer be able to function securely. However, the precise consequences depend on the nature of the sidechain's dependency on the mainchain.

The main blockchain and its properties (like throughput and scaling) represent layer 1. Sidechains and off-chain solutions (like ZK-rollups) that run independently alongside the main blockchain are referred to as _layer 2 solutions_.

## Sidechains

Sidechains give two immediate advantages to a network:

1.  Easy addition of new features; and 
    
2.  Scalability
    

**New features**

The addition of sidechains enables blockchain developers to add new features to a network without introducing additional security risks. These added features open up the possibility for developers building on top of the network to explore new use cases.

Also, sidechains can inherit some (or all) features (ledger model, consensus mechanism, etc.) from their parent chain, and pair them with features that might not exist on the main chain. For example, a sidechain can combine different security models, consensus protocols, or governance models to create a brand new blockchain that can interoperate with other blockchain networks.

The EVM sidechain is a Cardano sidechain -which is currently underway- this sidechain will enable Solidity DApps and EVM developers to build on the Cardano platform. In this way, developers can easily expand their community's reach into Cardano and benefit from the blockchain's existing capabilities.

**Scalability**

Sidechains enable a high degree of versatility and scalability. A blockchain can spin up a series of sidechains and 'delegate' processing work to them to increase throughput, for example. Think of this as a manager delegating tasks to other staff so that more work can be done simultaneously.

Sidechains do have one drawback: in most cases, they're not operated by the same nodes or network as the mainchain, which means that sidechain nodes will need to trust the sidechain's security model. The EVM sidechain however will implement a sidechain that will inherit Cardano’s security model.

## Hydra

Hydra is a layer 2 solution for Cardano. It is not a single protocol, but rather a family of layer 2 protocols designed to address network security and scalability capabilities. As part of the Basho development phase, Hydra focuses on steady network optimizations and improvements to establish a scalable, versatile, and high-throughput blockchain. The Hydra suite of protocols includes the Hydra Head protocol, Interhead Hydra, Hydra Tail, etc.  

The [Hydra Head](https://eprint.iacr.org/2020/299.pdf) protocol is the first in this suite and an important element of Cardano’s scaling journey. It provides the foundation on which to build out advanced scalability solutions and will be the first element to be delivered while research on the others is completed. 

Hydra Heads are isomorphic multi-party state channels and form fast and secure off-chain communication paths between two or more participants to process transactions. Being isomorphic means that this channel works just the same way as the mainchain, but is faster and cheaper to operate due to its local scope. It is very similar to Bitcoin Lightning, but elegantly extends the mainchain with fully capable EUTXO mini-ledgers to layer more complex solutions on top. Use cases of the basic Hydra Head include bank-to-bank private transfers for processing multiple transactions between 2 or more peers, a pay-per-use API service to pay a virtual private cloud provider for resources, an auction between a seller and several bidders, etc. 

This technology can also produce advanced layer 2 solutions, including networks of Hydra Heads that would support fast and cheap consumer-to-consumer payments, or Interhead Hydra, which could introduce seamless smart contract scalability.

## Mithril

Mithril is a research and engineering effort carried out by IOG to boost the efficiency and speed of data synchronization, state bootstrapping, and trust issues in blockchain applications. As part of the Basho development phase, [Mithril](https://eprint.iacr.org/2021/916.pdf) is now in development to be applied as a protocol on Cardano. 

Data synchronization and state bootstrapping are integral to ensuring the accuracy of operations on the blockchain. For certain messages or actions, it is important that a particular number of stakeholders provide their cryptographic signatures. 

For the base case, we go from a linear number of participants (without Mithril) to a logarithmic one (with Mithril), which is more efficient. This means that the higher the number of participants who need to agree on operations, the more complex it becomes to efficiently aggregate their signatures. In a base scenario, to presume a signature that talks for the majority of stakeholders, every stakeholder needs to sign the appropriate individual message. This results in delays in terms of scalability and speed.

Mithril has been designed to address these issues and to ensure efficient data and state synchronization while preserving rigorous security settings. Simply put, Mithril allows a variety of applications to work faster on the blockchain. Mithril's aggregation does not require signers to coordinate with other signers to produce signatures: they can sign independently and anyone can perform the aggregation, even at a later time. The signature scheme also lets different stakeholders validate only a given checkpoint of the chain (where 'checkpoint' is a state of the chain at some point in time, plus Mithril proofs to support that) without going through the whole transaction history of the given state. This results in fast chain state bootstrapping, 

Overall, the protocol is also beneficial for light client applications like light wallets that need to work fast without a full chain synchronization. Mithril signatures can be also useful for lightweight tally verification, or cryptocurrency governance decision making. ​​When applied to full node clients like Daedalus, Mithril can boost full node data synchronization ensuring speed and decreasing resource consumption.

## DApp Store

Since the Alonzo hard fork in September 2021, Cardano offers a blockchain environment to support smart contracts and decentralized applications (DApps). The “DApp Store” – currently under development – will be a gateway to the Cardano DApp ecosystem. 

For developers, the [DApp Store](https://iohk.io/en/blog/posts/2021/09/22/bringing-certified-dapps-to-cardano/) will provide a path to building product awareness and driving user adoption, plus a way to establish their DApps' legitimacy and build reputation. 

For end users, the dAppStore will be an on-ramp, the main touch point to a wide range of blockchain products, and a path to the discovery of new use cases and capabilities offered by DApps. The DApp Store will provide frictionless access to the ecosystem through an easy to use interface. End users will be equipped with all the information about DApp offerings, including the security assurance level of certified DApps, and usage statistics to help them make the right choices.

## Hard fork combinator

Hard forks tend to be 'traumatic' events where a blockchain splits ('forks'), rendering the 'old' blockchain invalid, along with its transaction history, protocol, etc.

The hard fork combinator is an IOG engineered, open-source technology that, rather than discarding the old data, combines two protocols into a single protocol. We call this a sequential combination of the two protocols because it runs the first protocol for a while and at some point, it switches over to the second. The current Cardano chain combines blocks of the following development phases: Byron, Shelley, Allegra, Mary, and Alonzo. After future transitions, it will also combine Goguen, Basho, and Voltaire blocks - all as a single property.

We have successfully used this technology for all the hard forks that Cardano has undergone (except for the first one, where Cardano switched from Ouroboros Classic to Ouroboros BFT.)

## Programming languages

### Haskell

Cardano is written in Haskell, a functional language that emphasizes 'pure' functions. That is, functions that produce the same result for the same input.

Haskell is particularly well suited to Cardano's high-assurance code, and the need for greater formal verification in the blockchain. Cardano aims to become a global social and financial system, which requires a very high degree of reliability and verification. 

Many other companies use Haskell, both because of its security properties and pure functional nature. Well-known firms like Oracle and Facebook use Haskell for blockchain research and advertising, respectively, while lesser known companies such as Atos IT and Jotron use it for building applications for the aerospace industry.

### Plutus

Plutus is Cardano's native smart contract language. Plutus smart contracts are effectively Haskell programs.

Plutus draws from modern language research to provide a safe, full-stack programming environment based on Haskell, the leading purely-functional programming language. By using Plutus, users can be confident in the correct execution of their smart contracts.

Watch the latest [Plutus update](https://youtu.be/zUerLu_GOQs) video. 

### Marlowe

Marlowe is a domain-specific language (DSL) for writing and executing financial contracts. 

Marlowe contracts are optimized for financial transactions, development platforms, and ensure a fast track for financial service providers to build expertise in smart contracts and blockchain technology.

Marlowe provides a suite of products for the community that will foster the adoption of Cardano in finance. Marlowe creates a blockchain-specific way to replicate key processes within financial services by making smart contract development easier for developers in this industry.

Marlowe also aims to facilitate new possibilities of financial innovation and aims to become the technology powering a host of smart contract based-financial services.

## Chain comparisons

### How does Cardano differ from Bitcoin?

Cardano and Bitcoin bear some fundamental differences in terms of design, purpose, and usability.

Cardano uses a proof-of-stake consensus mechanism, while Bitcoin relies on proof of work to mine new coins and add blocks to the chain. Functionally, Bitcoin is designed to transfer digital currency in a decentralized, peer-to-peer fashion. Cardano, on the other hand, supports a much broader range of functions. Cardano can handle smart contracts, custom tokens, and decentralized applications (DApps).

Another key difference between Cardano and Bitcoin is the energy utilization. Bitcoin's proof-of-work design [consumes huge amounts of energy](https://digiconomist.net/bitcoin-energy-consumption/), to the tune of 204.50 Terawatts/hour. Cardano is far more environmentally sustainable. Charles Hoskinson estimates that Cardano’s electricity consumption is [about 0.01% of Bitcoin’s](https://www.independent.co.uk/life-style/gadgets-and-tech/cardano-crypto-bitcoin-elon-musk-b1849021.html).

### How does Cardano differ from Ethereum?

Cardano differs from Ethereum in fundamental ways. 

Cardano is a proof-of-stake blockchain, while Ethereum uses a proof-of-work consensus mechanism. This confers Cardano with several key advantages, including a far more efficient energy consumption rate (Cardano is known as a [green blockchain](https://iohk.io/en/blog/posts/2021/08/17/why-they-re-calling-cardano-the-green-blockchain/)). Ethereum recently decided to follow Cardano’s approach and move to PoS. This transition will occur sometime in 2022, according to [Ethereum sources](https://ethereum.org/en/upgrades/merge/).

Also, Cardano supports custom tokens natively, without the need for smart contracts. Ethereum does support custom tokens also, but requires smart contracts, which adds a layer of complexity and the possibility of errors. In Cardano, the ledger handles all token functionality.

Another fundamental difference is the accounting model. Cardano features an extended unspent transaction output (EUTXO) model. Ethereum uses an account-based ledger model. This is significant for many reasons. For example, Cardano's model enables simpler transaction verification as each individual UTXO can only be consumed once, and as whole. Ethereum's transaction logic is more complex, as each individual transaction updates the global state of the chain. Because Ethereum’s transactions are processed sequentially, parallelization is hard to implement, to the detriment of throughput.

Cardano's EUTXO accounting model is deterministic, meaning transactions can be validated beforehand. Fees and transaction outcomes are predictable. Also, if a transaction fails the phase 1 validation, no fees are taken. This is not the case in an account-based model, like Ethereum, where users will lose all paid fees in this same scenario.

### How does Cardano differ from Polkadot?

Cardano and Polkadot share a common starting point: the resolution of some of the shortcomings inherent to Ethereum's design, including chronic network congestion, high gas fees, unpredictable transaction outcomes, etc.

The chains' evolutionary paths diverged, however, as both chains differ in substantive ways, starting with their consensus mechanisms. Cardano uses Ouroboros Proof-of-Stake, whereas Polkadot uses Hybrid Consensus with Nominated Proof of Stake. Polkadot's consensus mechanism is designed with numerous roles of active participants across a modular architecture to ensure system security. Validators produce new blocks and order blocks on the Relay Chain while Collators maintain and aggregate valid transactions from Parachains to be submitted to the Relay Chain, which later guarantees finality. Nominators can choose to "nominate" Relay Chain validators with their stake. Nominators can elect candidates that they trust with their DOT tokens.

### How does Cardano differ from Solana?

There are some similarities between Cardano and Solana, and the media often refers to both chains as direct ‘rivals’. Solana uses a combination of Proof-of-Stake and another known as Proof-of-History as Sybil Control mechanisms, the latter is what optimises the operation of Solana's consensus model known as Tower BFT (a variation of PBFT). Proof of history enables timestamps to be built on the blockchain itself (rather than relying on off-chain programs to calculate time). Proof-of-History technology is achieved through a Verifiable Delay Function (VDF).

On the topic of network decentralization, it has been reported that almost 50% of all [Solana's tokens are owned by venture capital entities](https://www.makeuseof.com/reasons-solana-isnt-really-decentralized/), the blockchain's developers, and the Solana Labs company.

On the topic of accessibility by means of hardware requirements, the Solana blockchain is known to require hardware with high specifications to deliver performance demand of the Solana network whereas Cardano functions with low hardware specifications requirements. For better context, Solana requires hardware with near enterprise-grade specs while Cardano leans more towards consumer-grade hardware specifications.

On the topic of staking, Cardano offers liquid staking in a non-custodial fashion via its stake delegation mechanism without slashing penalties, so there is no risk for delegators to lose their principal funds. In contrast, the stake delegation mechanism of Solana does involve slashing penalties, so delegators risk the loss of principal funds as a worse-case scenario.

## How does Cardano differ from Algorand?

Cardano and Algorand have some core similarities and fair differences as well.

Algorand is backed by strong academic research and founded by Silvio Micali, an Italian computer scientist (currently a professor at MIT) and Turing award winner for his work in Cryptography.

Cardano and Algorand both operate proof-of-stake protocols as part of their consensus mechanism. They even share the use of Verifiable Random Functions (VRFs), a technology invented by Silvio Micali, as part of their respective slot/block leader selection process.

Algorand implements what is known as Byzantine Agreement for its consensus mechanism which is secured/supported by their trademarked Pure Proof of Stake (PPoS) protocol. It operates via a process known as "Cryptographic Sortitioning" which randomly selects a block producing node/validator as the next block producer per its stake-weight, to propose a new block. The block then needs to be approved with signatures by 1,000 other randomly selected validators (at time of writing) before being finalized to the chain.

Cardano's core implementation is written in Haskell (with Plutus as its smart contract language), while Algorand's is written in C and Go (with TEAL, PyTeal, and Reach as its smart contract language).

In terms of user-defined assets or custom tokens like Non-Fungible Tokens (NFTs), Algorand users can create their custom tokens using in-built scripts of the Algorand protocol, without the need for complex smart contracts. This is very similar to how user-defined assets are created via Native Scripts on Cardano.

## Financial aspects

### The ADA token: definition and functionality

ADA (from 19th-century English writer and mathematician Ada Lovelace) is Cardano's native digital currency. It is currently the sole means to pay for transaction fees on the Cardano blockchain. Formal ledger rules determine the effects of these ledger transactions, yielding an immutable and independently verifiable record that tracks the movement of ADA and custom assets over time.

As hinted earlier, Cardano users can opt to _stake_ their ADA holdings in order to participate in the Ouroboros proof-of-stake consensus process, which determines how transactions are validated and ordered in successive Cardano blocks. They receive rewards for this in proportion to the stake that has been delegated in the entire system. In addition, ADA allows Cardano users to:

*   participate in decentralized governance activities such as on-chain voting eg. [Project Catalyst](https://projectcatalyst.org)
    
*   pay for the costs of forging, destroying and transferring Native Assets such as Non-Fungible Tokens (NFTs).
    
*   pay for the costs of smart contract execution.
    
*   pay for the costs of recording data on the blockchain.
    
*   pay for the cost of every day simple transactions.
    

Bonus: 1 ADA divides into 1,000,000 lovelaces.

### Staking

As a Proof-of-Stake blockchain, a large network of Cardano validators (a.k.a. Stake Pool Operators) creates 100% of blocks on the Cardano blockchain.

Unlike the common Proof-of-Work systems that require the constant and energy-inefficient computation of complex calculations to do work and secure the blockchains like Bitcoin, Proof-of-Stake uses advanced cryptographic processes with the support of economic resources to do work and secure the blockchain in an eco-friendly and low cost manner.  

For Cardano, this Proof-of-Stake technology is known as Ouroboros and the economic resource is the ADA cryptocurrency.  
  
Cardano uses a staking rewards system which collects snapshots of validator stake and user stake delegations and rewards all parties accordingly per their stake-weights provided to do work at the turn of the Epoch.

An Epoch in Cardano is currently a period of 5 days where work is done to advance the blockchain with transactions and other protocol related activities. It is also the current interval for which Cardano users who stake their existing ADA receive new ADA as staking rewards. At the end of every Epoch, a new snapshot is taken to account for stake-weight of validators and user delegations, and used to randomly and privately select the next line-up of slot leaders (block producers) for the next Epoch.

Since the chance of a validator (or stake pool) being selected for block creation increases based upon the amount of ADA staked (or delegated) to it, it's important for the validator to provide as much stake or attract as many stake delegations as possible, up to the point when the pool becomes '[saturated](https://docs.cardano.org/glossary#saturation)'. As more ADA is delegated to a single stake pool by others and saturation increases, rewards become more competitive among delegators which impedes their expected Return on ADA (ROA) as dilution of rewards is likely to occur. When the pool is saturated, it will no longer be selected to do work (produce blocks) by Ouroboros and for that matter will lose economic incentive i.e. staking rewards, this affects the validator and their stake delegators in total. The saturation property is designed to mitigate a single pool dominating block creation, encourage stake delegation to decentralised by distributing across multiple unique Stake Pools. This also helps counter "the rich get richer" scenario.

### Check out this [staking tutorial](https://forum.cardano.org/t/staking-and-delegating-for-beginners-a-step-by-step-guide/36681) for more information.

Bonus: RealFi

Identity stands as a core aspiration of what a third-gen blockchain should do. Blockchain identity solutions enable participants from the real-world to build relationships and access essential services for business needs across an open and permissionless peer-to-peer network.

Cardano aims to combines Decentralized Identity standards and Decentralized Finance applications to unlock a brand new range of inclusive financial opportunities that encompasses what is referred to as [RealFi](https://iohk.io/en/blog/posts/2021/11/25/welcome-to-the-age-of-realfi/) – Real Finance (or RealFi for short) is aimed at supporting people in the real world economies who have a need of business and financial solutions, with novel blockchain-based decentralized applications.

RealFi is an ecosystem of financial products and services that removes the frictions between real world economic activities and Decentralized Finance (DeFi) to offer greater access to global financial products and services, for all.

## Wallets on Cardano

Wallets in the blockchain/cryptocurrency context are tools/applications that allow users to manage and transact their cryptocurrency and digital assets in a seamless fashion. They also enable users to explore new experiences and decentralized applications (dApps) in the blockchain ecosystem.  
  
Wallets come in the forms of software and hardware, each with their respective benefits and tradeoffs.

Certain categories of wallets may either operate as Full Nodes/Clients by downloading the entire blockchain database or as Light Clients/Nodes by downloading smaller bits of the entire blockchain data such as metadata (like block headers). Depending on the needs and capacity of the user will determine which category of wallets best works for them.

## Software Wallets

### Daedalus

Daedalus is a full-node hierarchical deterministic (HD) desktop wallet software for ADA.

Daedalus comes bundled with a full Cardano node, so requires a relatively performant/capable desktop machine for good performance. The wallet software downloads and stores the entire history of the Cardano blockchain and validates all blocks and transactions to ensure better security.

### Yoroi

[Yoroi](https://twitter.com/YoroiWallet?s=20&t=sjacJxtxQ1kWELsD_k4FqA) is a light wallet product for ADA that is available as a browser-based extension and a native mobile application. It connects to full nodes via third-party infrastructure hosted by a [EMURGO](https://emurgo.io/). 

### Other compatible wallets

Cardano boasts of a thriving and very active developer community that has developed a number of compatible wallets. These include:

*   [Nami](https://namiwallet.io/) 
    
*   [Eternl](https://ccvault.io/)
    
*   [Flint](https://flint-wallet.com/)
    
*   [Gero](https://gerowallet.io/)
    
*   [Exodus](https://www.exodus.com/ada-cardano-wallet)
    
*   [AdaLite](https://adalite.io/)
    
*   [Typhon](https://typhonwallet.io/)
    
*   [NuFi](https://nu.fi/)
    

## Hardware wallets

Here are some Hardware Wallets currently compatible with Cardano

*   Ledger Nano X
    
*   Ledger Nano S
    
*   Trezor model T
    

## Governance

### Liquid Democracy

One of the key pillars for Cardano's viability is active community engagement and participation. This necessitates an effective governance mechanism. Using an iterative, anti-fragile approach and setting high standards for effective decision making, IOG provides the Cardano community with the mechanisms and human processes required to help decide & build the future of Cardano.

IOG plans to deliver this through **absolute Liquid democracy** - collective decision-making through direct participation and dynamic representation.

Liquid democracy is a concept of hybrid governance system that stands somewhere between representative and direct democracy. Ada holders can choose to vote directly, or delegate their votes to domain experts called Delegate Representatives (dReps\_)\_. This democratic culture plays a key role in Cardano's long-term sustainability as a public blockchain system.

Liquid democracy is also about the staking benefits. Cardano’s delegation mechanism is based on a liquid democracy, meaning that staked ada are never locked and can be utilized at any time. Other platforms use a third-party protocol to make staked tokens liquid, which has the potential to introduce security problems.

### Project Catalyst

Project Catalyst is a program that allows ada holders to directly vote on and allocate funds from the Cardano Treasury to start-up projects building applications, tools and products for Cardano.

Catalyst brings governance to Cardano by allowing the community to self-determine priorities for growth.

To do this, Project Catalyst is divided into a series of funds, which are deployed approximately every twelve weeks. These funds are used to elicit ideas in the form of proposals from participants. Each proposal is focused on a challenge issued by the Project Catalyst team or the Project Catalyst community. The proposals then go through a community refinement process where they are vetted for feasibility, auditability, and impact by a group of incentivized community advisors. Once the proposals have been finalized, they are voted on by the community and ada funds are distributed to the successful projects.

Catalyst enables people to realize great ideas and implement them, but funding is only part of the journey towards success. Other factors, such as education, mentorship, collaborations, and product roadmap development are also needed to nurture projects and help them formalize a business plan and effective go-to-market strategy.

### Catalyst Circle and Community Participation

The Catalyst Circle is a “human sensor array” acting as the representative body for all the different groups participating in Project Catalyst. The Circle monitors the current state and future plans regarding governance in Catalyst. It detects and discusses concerns, objections and opportunities arising within the Catalyst ecosystem. The Circle might discuss, for example, the definition of amounts allocated to challenges Fund over Fund; changes or conditions to incentive parameters; the Catalyst API, etc.

By recording meetings and capturing actions in a backlog accessible to all, this activity provides a view into the hopes, wants, needs, and concerns of the community within Project Catalyst. The Circle is also responsible for determining its own future shape and defining the election processes for Circle v3.

The Circle exists to fulfil four key goals:

*   To facilitate communication between the different functional groups
    
*   To provide a heads-up when red lines are crossed within a certain group
    
*   To suggest improvements on plans and processes that shape Project Catalyst
    
*   To define the election process for upcoming Circles
    

There are also numerous examples of community-led governance initiatives in addition to Catalyst. One significant example is the [Cardano DeFi Alliance](https://cardanodefialliance.org/). The Cardano DeFi Alliance is a consortium of projects with the primary mission of standardizing Plutus and Cardano best practices within the Cardano ecosystem. It aims to drive composability across Cardano DeFi protocols. The DeFi Alliance offers a framework to Plutus protocol development teams who are focused on collaboration of key issues and their strategic development. 

Cardano’s ecosystem also encourages broad community participation. The Cardano improvements proposals program (“CIP”) allows ada holders and other third parties to build applications on the Cardano blockchain. The CIP describes standards and processes and provides general guidelines and information to the Cardano community. It is a formal, technical communication process that exists off-chain.

## Digital Identity

### Atala PRISM

Identity is key to accessing a range of private and public services. From opening a bank account to obtaining loans or a driver's license, access to education, etc., the need to prove to others who we are is almost omnipresent in everyday life.  

Atala PRISM is IOG’s decentralized identity solution. It enables people to own their personal data and interact with organizations seamlessly, privately, and securely. Visit the [Atala PRISM website](https://www.atalaprism.io/app) for more information.

## Community

### Stake pools

A stake pool is a network node holding the combined ada ('stake') of several delegators. Stake pools yield rewards to those ada holders who choose to delegate their ada to them. Stake pools are used to ensure that everyone can participate in the Cardano Blockchain, regardless of technical experience or availability to keep a node running. These stake pools focus on maintenance and hold the combined stake of various stakeholders in a single entity. Stake pools are responsible for processing transactions that will be placed in the ledger, as well as producing new blocks. 

Stake pools can be public or private. Any Cardano user can delegate ada to public pools. Private stake pools, however, only deliver rewards to their owners.

Visit [this page](https://cardano.org/stake-pool-operation#stake-pool) for more information about stake pools.

## Educational initiatives

Education is central to the Cardano mission. That’s why IOG, the Cardano Foundation, Emurgo and other Cadano participants are all committed to upskilling developers to build on Cardano blockchain. 

Through this education outreach, the Cardano community is being equipped with the essential skills they need to build on Cardano. An empowered community means a stronger ecosystem.

During 2021, IOG launched the [Plutus Pioneer](https://testnets.cardano.org/en/plutus-pioneer-program/) and [Atala Pioneer](https://atalaprism.io/pioneers/) programs. Together, these programs saw over 3,500 participants trained on Plutus and Atala and were very well received amongst the community. A Marlowe Pioneer Program will launch mid 2022.

Earlier in 2022, IOG launched the [IOG Academy](https://www.youtube.com/channel/UCX9j__vYOJu00iqBrCzecVw), a library of educational videos and materials covering Haskell, Plutus, and Marlowe.

IOG also recently established a partnership with the European Business University of Luxembourg (EBU), with the goal of making education accessible for everyone in developing countries. EBU has so far rolled out courses on Haskell and Plutus.

Also, IOG works [with a number of universities](https://github.com/input-output-hk/essential-cardano/blob/main/essential-cardano-list.md#education-institutions-and-blockchain-labs) worldwide.

## NFTs

Cardano utilises a Multi-Asset ledger architecture which allows for user-defined tokens i.e. Native Assets to benefit from the very security and ledger rules that power up ADA.

The implementation of the Native Assets feature enabled the creation of Non-Fungible tokens (NFTs) on Cardano via the use of Native Scripts (in-built scripts on the Cardano Blockchain)

Native Scripts offers distinct advantages for developers and casual/power users alike that are looking to issue their own brand of Native Assets/Tokens: there is no need to write complex or specialised smart contracts to generate custom tokens, for example. This removes a barrier of added complexity and risk of erroneous code/bugs since the Native Scripts used are pre-built and secured by the Cardano Blockchain core implementation.

Due in part to the easy and low cost nature of minting Native Assets, the Cardano NFT ecosystem has rapidly grown to be one of the most vibrant and creative elements of the early Cardano blockchain, with over 400 projects and diverse NFT marketplaces launched and live as of early 2022.  
  
Fact: As of late March, 2022, over [4 million NFTs have minted on Cardano](https://twitter.com/mtschofield/status/1506575854217928706).

### NFT Marketplaces on Cardano

NFT Marketplaces serve as hubs for the trading and distribution of various digital assets secured by the Cardano blockchain by means of NFTs.

Here is a non-exhaustive list of some NFT Marketplaces on Cardano:  
`<ul>   <li><a href = "https://www.jpg.store"> JPG.Store </a></li>   <li><a href = "https://artano.io/home/"> Artano </a></li>`

`<li><a href = "https://www.jamonbread.com"> JAM ON BREAD </a></li>`

`<li><a href = "https://artifct.app"> Artifct </a></li>`

`<li><a href = "https://cardahub.io/home"> Cardahub </a></li>`

`<li><a href = "https://cnft.io"> CNFT.IO </a></li>   </ul>`

## Cardano resources and further reading

### Technical documentation

Our [technical documentation site](https://docs.cardano.org/) covers all topics about Cardano’s technology, features, etc.

### Developer portal

Find all the [tools and resources](https://developers.cardano.org/tools/) you need to build on Cardano.

### Cardano forum

Chat and interact with [fellow Cardano enthusiasts](https://forum.cardano.org/c/developers/29) from around the world.

## Social media

### Twitter

[IOG](https://twitter.com/InputOutputHK)

[Cardano community](https://twitter.com/cardano?lang=en)

### Discord channels

[IOG](https://discord.com/invite/w6TwW9bGA6)

[Cardano community](https://discord.gg/kfATXEENPD)

[Developer portal](https://discord.gg/Exe6XmqKDx)

### Telegram

IOG’s [Official Telegram channel](https://t.me/Cardano)

### Reddit

Keep up to date with [all stories](https://www.reddit.com/r/cardano/) about Cardano.

## Research papers

Browse our [extensive library](https://iohk.io/en/research/) of published papers.

## Blogs

We regularly publish [blog posts](https://iohk.io/en/blog/posts/page-1/) reflecting updates, new features, and relevant Cardano stories.

## Glossary

[Browse](https://www.essentialcardano.io/glossary) all Cardano-related terms.
