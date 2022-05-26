---
title: What is consensus?
tags:
  - Consensus
  - Ouroboros
url: ""
image: null
image_text: null
---

Consensus means agreement. A consensus protocol is a way for blockchain participants to agree on transaction validity. The consensus protocol for Cardano is [Ouroboros](https://www.essentialcardano.io/faq/what-is-ouroboros).

In a traditional setting, a central entity (like a bank) controls individuals’ funds and financial activity. This entity decides what kind of activity an individual can do, to whom they can send funds, or put a limit on certain operations. 

In a decentralized setting, no single entity is in control of individuals’ financial activity. That is why it is crucial to ensure that decisions made within the system are true, valid, and reached without the common pattern of centralized leadership management.

To ensure trust and security in financial operations, blockchains use the consensus algorithm. In essence, a consensus is what controls the laws and parameters governing the behavior of blockchains. Think of consensus as a ruleset that each network participant adheres to. It is the process of reaching a majority opinion by everyone involved in running the blockchain. An agreement must be made on which blocks to produce, which chain to adopt, and how to determine the single state of the network. 

The consensus protocol has three main responsibilities:

*   perform a leader check and decide if a block should be produced 
    
*   handle chain selection 
    
*   verify produced blocks
    

Blockchains create consensus by allowing participants to bundle transactions that others have submitted to the system in blocks, and add them to their chain (sequence of blocks). Determining who is allowed to produce a block when, and what to do in case of conflicts, (such as two participants adding different blocks at the same point of the chain), is the purpose of the consensus protocol.
