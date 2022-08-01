---
title: "Plutus Pioneer Program Part 1: Understanding the eUTXO Model and Coding
  the first Smart Contract"
tags:
  - Plutus
  - Plutus Pioneers
  - Haskell
  - EUTXO
  - Code
  - Documentation
  - Programming
  - Development
  - Smart Contracts
  - UTXO
  - Script
url: ""
image: https://ucarecdn.com/c79510ea-ca33-4ce8-b040-b4872fb2f7dd/
image_text: The eUTXO Model
---

The [first](https://www.youtube.com/watch?v=X80uNXenWF4&list=PLNEK_Ejlx3x2nLM4fAck2JS6KhFQlXq2N) and [second](https://www.youtube.com/watch?v=BEr7lcCPjnA&list=PLNEK_Ejlx3x0mhPmOjPSHZPtTFpfJo3Nd) Plutus Pioneer Program lessons are about understanding the eUTXO Model, configuring the development environment, and diving in practically by coding the first smart contract with Plutus.

**1- The Extended UTXO Model**

The [eUTXO Model](https://iohk.io/en/research/library/papers/the-extended-utxo-model/) extends the UTXO Model that Bitcoin utilizes. Ultimately, one of the eUTXO Model‘s primary advantages, compared to Ethereum’s account based model, is that all transactions are deterministic.

In this way, we are confident of the transaction status, whether it will pass or fail, before submitting it to the blockchain. Cardano transactions depend on their inputs and outputs and not from the global state of the blockchain, unlike Ethereum.

Furthermore, the eUTXO Model ensures high security and scalability, which is delivered through its powerful parallelization. Cardano is built with a “quality-first” approach in mind. After all, focusing on delivering high quality and secure DApps should be the blockchain industry’s number one focus.

  
![Figure 1: A visual representation of Transactions, UTXOs, flow of funds and in a eUTXO based model](https://ucarecdn.com/2fd3bc09-5522-4612-8abe-d626a746e36f/)

**Figure 1:** A visual representation of Transactions, UTXOs, flow of funds and in a eUTXO based model

**2- Setting up the development environment:**

Before writing the Plutus Pioneer Program’s scripts, we should create the development environment by installing nix, checking out the Plutus-apps repo, launching the nix-shell, compiling the course’s code, and finally, running a local instance of the playground.

I encountered challenges when configuring the local development environment on my Mac. However, thanks to tips from the Cardano [StackExchange](https://cardano.stackexchange.com/) and documentation from the Cardano community, I have solved those problems and correctly set up all the artifacts.

Consequently, the developer’s community engagement within the Cardano ecosystem, as well as how helpful they are, is displayed.

  
![Figure 2: Starting nix-shell and the playground server in Mac M1: Step by Step guide written by Cardano Community member in Github](https://ucarecdn.com/ab6d8bf3-fba6-4093-a712-edc97ab867c2/)

**Figure 2:** Starting nix-shell and the playground server in Mac M1: Step by Step guide written by Cardano Community member in [Github](https://github.com/renzwo/cardano-Plutus-apps-install-m1/blob/main/README.md)

After configuring the environment, you will gain access to high level Plutus and Marlowe documentation, which runs on a local server using port 8002.

  
![Figure 3: High Level Documentation of Plutus and Marlowe running on a local server on port 8002](https://ucarecdn.com/72674382-3828-4022-8ebd-e7511ac0a1ac/)

**Figure 3:** High Level Documentation of Plutus and Marlowe running on a local server on port 8002

The haddock detailed documentation for all the Plutus libraries is also accessible in the same server; this is run locally in port 8002. The extensive documentation provided contains further technical concepts, including clarifications of important Plutus details.

  
![Figure 4: Haddock documentation of Plutus running on a local server on port 8002](https://ucarecdn.com/ccd37ae0-c889-4c03-81b3-adfea0883b07/)**Figure 4:** Haddock documentation of Plutus running on a local server on port 8002

**3- Understanding the notion of a Plutus validator**

Prior to coding the first smart contract, it’s first vital to gain an [understanding of the Plutus validator](https://playground.plutus.iohkdev.io/doc/plutus/tutorials/basic-validators.html).

Briefly, Plutus validators are functions with three inputs that return a boolean. The three inputs are the datum, the redeemer, and the script context. If the validator script returns a true result, the user can unlock the funds sitting at the script address.

All developers interested in Cardano should dive into the course and begin coding smart contracts using Plutus. Usually, this it the best way to gain an understanding of the technology used.

To learn more about Plutus through a short video, I highly recommend you view this amazing [short video by John Woods](https://www.youtube.com/watch?v=zUerLu_GOQs).

**4- Coding the first Smart Contract**

In the first and second Plutus Pioneer Program lectures, we get our hands dirty by coding our first smart contract. This initial contract is an Auction Contract for an NFT.

In this way, the auction covers an open bid for an NFT. At the end of the bidding, the highest bidder receives the NFT.

The graph below offers an excellent example of an NFT bid, as well as the flows of the UTXOs.

  
![Figure 5: A visual representation of the Transaction, UTXOs, flow of funds and in a eUTXO based model](https://ucarecdn.com/c79510ea-ca33-4ce8-b040-b4872fb2f7dd/)

**Figure 5:** A visual representation of the Transaction, UTXOs, flow of funds and in a eUTXO based model

Beneath I have included a screenshot example of the Plutus validator code. When viewing the code the first time, it may seem tricky to understand, but actually, it isn’t. [Dr. Lars Brünjes](https://iohk.io/en/team/lars-brunjes) uses an excellent pedagogical methodology to comb over each part of the code.

  
![Figure 6: The Auction Plutus Validator Script](https://ucarecdn.com/12aef8b5-2dac-4145-9e60-8c6b15bb083d/)

**Figure 6:** The Auction Plutus Validator Script

When learning Plutus, I also found the number of available tools, which help developers grasp the technology, simply amazing. One such tool is the Plutus Playground, which represents a visualization of the written code and simulation of its execution.

Using the Plutus playground, you can test different scenarios of the NFT Auction Validator and, after that, check the UTXO flows and the scenario results.

  
![Figure 7: Configuring a scenario of the auction validator script in the Plutus playground](https://ucarecdn.com/f9fcabe7-f70b-4399-a547-f7753724f062/)

**Figure 7:** Configuring a scenario of the auction validator script in the Plutus playground

  
![Figure 8: Transaction inputs and outputs for a configured scenario of the auction validator script](https://ucarecdn.com/c1fe5f0b-5f5e-4a26-8561-052114c98f9f/)

**Figure 8:** Transaction inputs and outputs for a configured scenario of the auction validator script

**You can find the original article published in** [PeakChain](https://medium.com/peakchain) **Medium Publication under** [this link](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-5-the-plutus-pioneer-program-understanding-the-874064b216b7)**.**

**To Support this educational content and contribute in the Success of** [PeakChain](https://peak-chain.com/) Automotive Solutions, we appreciate delegating to our [PeakChain Pool](https://www.peakchain-pool.com/), Ticker: \[PKCP\]

**Support also our PeakChain Automotive Solutions in Project Catalyst Fund 9!**

[1- PeakChain Car Wallet Device](https://cardano.ideascale.com/c/idea/414249)

[2- PeakChain Uber on Cardano](https://cardano.ideascale.com/c/idea/414255)

[3- PeakChain Fleet Management Platform](https://cardano.ideascale.com/c/idea/414216)

[4- PeakChain Car-Sharing Platform](https://cardano.ideascale.com/c/idea/414199)

**Author:** [Oussama Benmahmoud](https://twitter.com/@oussbenma), CEO of [PeakSoft GmbH](https://peak-soft.de/) and Founder of [PeakChain](https://peak-chain.com/)
