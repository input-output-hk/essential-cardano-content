---
title: The Rise and Growth of Mesh
tags:
  - meshjs
  - Developer Tools
  - typescript
url: ""
image: https://ucarecdn.com/2135447b-afb2-415c-855a-73fce0ad2d67/
image_text: ""
---

Three days ago the team from Gimbalabs released [MeshJS](https://meshjs.dev/) v1.7, Chang-ready on [mainnet](https://www.nmkr.io/de/glossary/cardano-mainnet). Its main features:

*   Chang Cost models
    
*   PlutusV3
    
*   General transaction structure changes to fit Conway
    
*   Embedded datum
    
*   dRep in Browser Wallet
    
*   New experimental utxo selection
    
*   Add verbose to transaction
    

However, [MeshJS](https://meshjs.dev/) v2.0 is on its way. It will come in 3 different flavors:

*   100% pure TypeScript: Great for all developers to get Cardano on their frontends.
    
*   WebAssembly: Ideal for developers who want to use Cardano on their TypeScript backends.
    
*   Rust: Perfect for applications that require high performance.
    

All 3 versions consist of the same endpoints for wallet, transactions, and various utilities needed. It includes all existing endpoints for anyone to get started with Cardano as easily as possible. It also includes all the low-level transaction-building endpoints for all Conway features, PlutusV3, parameterized scripts, Sidechain (service layer) support, and more.

**TypeScript**

Thanks to [Input Output (IOHK)](https://x.com/IOG_Eng) JS SDK and [Strica](https://x.com/StricaHQ) libraries, we are able to provide a 100% pure TypeScript implementation of [MeshJS](https://meshjs.dev/). With this TypeScript version, developers can easily integrate Cardano into their frontend applications. New developers can get started with Cardano easily, as we work with various parties to provide educational materials and tutorials.

**WebAssembly**

The current version is dependent on CSL, but we will be moving to another WASM implementation by [SIDAN Lab](https://x.com/sidan_lab), [Whisky](https://youtu.be/GSZiLGe5Sa8?si=DGl-vxIAsas8agdH), which wraps the CSL and provides some additional features. This WebAssembly version is for developers who want to use Cardano on their TypeScript backends. It comes with a few additional features for [Aiken](https://x.com/aiken_eng)’s UPLC and other performance optimizations.

**Rust**

This Rust version is for backend applications that require high performance (such as DEX and minting/airdrops vending machines). It is built on top of CSL. Here, we provide high-level APIs and utilities for developers for their applications. We also have all the required test cases to ensure everything upstream is working as expected.

Stay tuned for more updates on Mesh v2.0!

Follow [MeshJS](https://meshjs.dev/).

\---

Are you new to Cardano? Go here: [https://docs.cardano.org/about-cardano/introduction/#:~:text=Cardano%20is%20a%20decentralized%20third,a%20research%2Dfirst%20driven%20approach](https://docs.cardano.org/about-cardano/introduction/#:~:text=Cardano%20is%20a%20decentralized%20third,a%20research%2Dfirst%20driven%20approach).

Are you a developer and you want to start building on top of Cardano in a very easy way? Go here: [https://meshjs.dev/guides](https://meshjs.dev/guides)
