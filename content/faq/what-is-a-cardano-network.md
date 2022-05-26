---
title: What is a Cardano network?
tags:
  - Networking
url: ""
image: ""
image_text: ""
---

The Cardano network is a technical infrastructure combining Cardano nodes and their relative interactions in one unified system. It consists of a collection of nodes that communicate with each other to maintain the distributed ledger. These nodes are the actors on Cardano that validate blocks, add blocks to the chain, and distribute transactions.

The networking layer is the driving force for delivering information exchange requirements for establishing a better data flow. Cardano nodes maintain connections with peers that have been chosen via a custom peer selection process.

A set of mini-protocols is used to enable communication between different nodes. Each mini-protocol implements a basic information exchange requirement, such as:

*   informing peers of the latest block
    
*   sharing blocks as needed
    
*   sharing new transactions around the Cardano network. 
    

For connection purposes, mini-protocols are determined by the version of the network protocol. For example, there are two protocol suites: _node-to-node_ and _node-to-client_. The node-to-client protocol suite is used by wallets and chain consumers. Protocol suites use different sets of mini-protocols and the version is negotiated when a new connection is established. 

Find out more:

*   [The Cardano network](https://docs.cardano.org/explore-cardano/cardano-network/about-the-cardano-network)
    
*   [Networking protocol design](https://docs.cardano.org/explore-cardano/cardano-network/networking-protocol)
    
*   [Peer-to-peer (P2P) networking](https://docs.cardano.org/explore-cardano/cardano-network/p2p-networking)
