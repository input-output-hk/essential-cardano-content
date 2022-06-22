---
title: "Plutus Application Backend (PAB): supporting DApp development on Cardano"
tags:
  - Plutus
  - PAB
  - Smart Contracts
  - Blog
url: ""
image: https://ucarecdn.com/c97f7204-cc8c-4e70-86b8-e34a6e16b279/-/resize/800/-/format/webp/-/quality/best/-/progressive/yes/
image_text: PAB
---

**Original author:**

[Fernando Sanchez](https://iohk.io/en/team/fernando-sanchez) - Technical Writer

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2021/10/28/plutus-application-backend-pab-supporting-dapp-development-on-cardano/): October 28, 2021

**Summary**:

The PAB provides the components and an environment to help developers create and test DApps, before deploying them to a live production environment

**Article**:

The Alonzo protocol upgrade introduced Plutus – a platform that provides a native smart contract language along with the necessary infrastructure and tools to support smart contracts on Cardano. The Plutus platform enables developers to write decentralized applications (DApps) with scripting capabilities that interact with distributed ledgers.

To understand Plutus, one has to recognize three concepts:

*   The [Extended Unspent Transaction Output](https://docs.cardano.org/plutus/eutxo-explainer) (EUTXO) model
    
*   Plutus Core ‒ the ‘on-chain’ part of Plutus
    
*   The Plutus Application Framework (PAF) ‒ Plutus contracts consist of parts that run on the blockchain (on-chain code) and parts that run on a user’s machine (off-chain or client code)
    

Both the on-chain and off-chain code are written in Haskell, and Plutus smart contracts are effectively Haskell programs.

## **What is the Plutus Application Backend?**

[In a previous blog post](https://iohk.io/en/blog/posts/2021/04/13/plutus-what-you-need-to-know/), we discussed the on- and off-chain functionality of core components of Plutus in greater detail. Here, let’s dive deeper into Plutus off-chain capabilities and take a look at the Plutus Application Backend (PAB).

In the UTXO model, we have off-chain infrastructure that builds the transactions that move the apps along. This off-chain infrastructure is quite complicated because it needs to look at the ledger state, pick some information from the ledger, and put it all together to build a transaction with the right pieces of data in the right place. The PAB is a single Haskell library that makes it easier to write this off-chain infrastructure and the on-chain scripts.

The PAB helps with building the UTXO transactions in two ways:

*   The read path - That is, getting information from the chain, and reacting to events that happen on the blockchain. The read path is currently working on the testnet
    
*   The write path - This is where we actually construct the transactions that run the Plutus scripts
    

## **The role of the PAB**

The PAB is a key component of the Plutus Application Framework (PAF) that enables developers to create and test DApps locally, before deploying them to a live production environment. A little like the [Marlowe Playground](https://alpha.marlowe.iohkdev.io/#/) provides a sandbox for devs to create and test financial smart contracts, the PAB offers a similar environment for devs to create and test full DApps.

The PAB is an off-chain, backend service for managing and handling the requirements of the application instance throughout its lifecycle. This includes interaction with external clients (such as wallet frontends) and acts as an intermediary between Plutus Applications, the node, the wallet backend, and end-users. Such interaction is made possible by PAB commands and mock components that enable convenient simulations and integration of DApps.

While not a prerequisite for DApp creation or implementation – some developers are creating their own tools and indeed [API-based alternatives](https://youtu.be/W2R3zl91U24?t=357) are being worked on by the community – the PAB removes the need for developers to create their own infrastructure from scratch (including chain index, etc.) reducing development time and resources needed. It allows developers to simulate how an application would behave on-chain for prior testing and error elimination, to ensure a flawless transition for launch.

The purpose of the PAB is to:

*   provide a standardized environment for Plutus applications to run in
    
*   present discoverable interfaces to the external clients
    
*   track on-chain information for smart contract uses
    
*   allow the developer to work in an emulated or non-emulated environment
    

The PAB can switch between emulated and non-emulated (real network) environments seamlessly. This makes it easier to write all kinds of different tests – unit tests, integration tests, property based tests, etc. The PAB allows DApps to easily communicate with it as the backend can receive and deliver messages. Thus, the DApp can send usual requests to endpoints that the PAB has exposed, and which correspond to actions and operations that any particular smart contract is capable of handling.

Applications deployed using the framework’s libraries can run on the PAB, which provides runtime support for access to the blockchain to further perform smart contract operations triggering transactions based on the [EUTXO model](https://iohk.io/en/blog/posts/2021/03/11/cardanos-extended-utxo-accounting-model/). Additionally, PAB features functionality for persistence, logging, and monitoring.

## **Where are we right now?**

Earlier this summer, we deployed the first in a series of color-coded testnets to bring core Plutus smart contract capability to Cardano. This was deployed on mainnet via the ‘Alonzo’ hard fork. Smart contract capability is currently accessible using a Command Line Interface (CLI). While the first simple smart contracts were enabled on mainnet in early September, this was always the first stage in the road to DApp deployment on mainnet.

Developers have meanwhile been working on their DApps (many via the PAB) locally while testing any core smart contract functionality on the testnet. These elements need to come together before an DApp hits mainnet and this takes time. Once the PAB is integrated with the node and other core components such as the wallet back end (WBE) connector, developers will be able to move their DApps into a state of readiness and bring them to the Cardano testnet prior to mainnet launch.

These early applications built locally will then be able to interact with the mainnet as intended. The ‘mockchain’ approach to development to date means that for DApp creators, it will be a smooth transition from testnet to mainnet. All it takes is a change in the configuration files to start the PAB, it requires no changes to the actual code or to the Haskell code. This integration work is complex and a critical part of Cardano infrastructure so we need to ensure it is done correctly. We’re continuing to work on the final integrations and based on the current trajectory, we plan to deliver the integration in November, assuming we don’t encounter any critical issues.

## **Looking ahead**

This is just the start. As always, this will be an iterative process. With the evolution of the Plutus platform, we will be inviting the developer community to deploy their own tooling and create off-chain code for their DApps running on Cardano. We have already seen a hive of activity in this area, through both the Alonzo testnet program and Project Catalyst. So while we test the platform with our engineers/QA and the developer community, we’ll be making gradual improvements and adding more capabilities and functionality. The goal? From the Alonzo hardfork and the arrival of Plutus smart contracts, a rapid scaling of the developer experience, with new tools, APIs and environments to support an already burgeoning ecosystem of talent.

_For regular updates make sure you follow us on_ [Twitter](https://twitter.com/InputOutputHK) and subscribe to our [YouTube](https://www.youtube.com/channel/UCBJ0p9aCW-W82TwNM-z3V2w) channel. For an overview of projects #BuildingOnCardano be sure to check out the [Essential Cardano](https://github.com/input-output-hk/essential-cardano) repo.
