---
title: Technology
tags:
  - "101"
  - ada
  - Cardano
url: ""
image: https://ucarecdn.com/a2a23146-6c8e-4744-bfd9-54ae067fe6f4/
image_text: ""
---

## How does Cardano work?

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

## Cryptography

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

## Peer-to-peer communication between nodes

Peer-to-peer (P2P) communication enables nodes to self-organize into a globally distributed network of Cardano block producers and relays, and also self-optimize, choosing the best and more performant connected nodes and disconnecting from less performant ones. 

Information is exchanged between nodes to enable a flexible network topology that automatically adapts to dynamically changing network conditions. This further boosts network decentralization, resilience and robustness.

The network's P2P architecture includes four elements:

*   P2P Governor
    
*   Connection Manager
    
*   Server
    
*   Inbound Protocol Governor
    

[Read more](https://iohk.io/en/blog/posts/2021/04/06/boosting-network-decentralization-with-p2p/) about P2P communication in Cardano.

[Read more](https://iohk.io/en/blog/posts/2021/03/31/decentralization-to-d-0-day-and-beyond/) about Cardano’s decentralization drive.

## Ouroboros

Cardano's proof-of-stake consensus protocol.

In mythology, Ouroboros (also, _uroboros_) is usually depicted as a snake (or sometimes a dragon) eating its own tail in a closed circle. The word Ouroboros itself derives from Ancient Greek, its literal meaning being 'tail eating' or 'tail devourer.'

As a symbol, Ouroboros represents the infinity of time flowing back unto itself, in a never-ending cycle, as if caught in an eternal loop. Ouroboros first appeared in Egypt, in the 13th century BC. Later, alchemists adopted Ouroboros into their mystical symbolism.

So why was this mythical creature chosen to represent the proof-of-stake consensus protocol that underlies Cardano? In this context, Ouroboros represents the possibility of infinite and ethical growth and scalability of the blockchain, and also, the protocol feeds itself from previous epochs for the randomness used in the current epoch. This is known as ‘eating its own tail’, as the pictorial representation of Ouroboros does.

Ouroboros' central message is the delivery of greater opportunities for the world, and its preservation through much-reduced energy consumption.

### What makes Ouroboros unique?

Ouroboros is the first provably secure proof-of-stake blockchain protocol. In other words, Ouroboros offers _mathematically verifiable_ security against attackers. The protocol is guaranteed to be secure, as long as 51% of the stake is held by honest participants.

Ouroboros realizes what is known as ‘Nakamoto-style consensus’ based on proof-of-stake. This provides the robustness from Bitcoin but ensures significant energy efficiency, higher speed and a fair reward mechanism. Also, the protocol ensures security against network attacks and has a rigorous game-theoretic mechanism designed to discourage monopolization.

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

##   
Sidechains

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

##   
Mithril

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
