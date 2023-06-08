---
title: "What is the Marlowe CLI tool? "
tags:
  - Marlowe
  - Smart Contracts
  - Development
url: ""
image: ""
image_text: ""
---

[Marlowe CLI](https://iohk.io/en/blog/posts/2022/04/19/introducing-the-new-command-line-interface-tool-for-marlowe/) is a command line tool that provides access to Marlowe capabilities on [testnet environments](https://docs.cardano.org/cardano-testnet/getting-started/#environments) and mainnet. It is specifically built for running Marlowe contracts directly without needing a web browser or mobile app.

Just as the cardano-cli tool enables plain transactions, simple scripts, and Plutus scripts, the Marlowe CLI tool facilitates the ability to interact with and develop Marlowe contracts. Users can measure transaction size, submit transactions, test wallet integrations, and debug validators. It provides a very concrete representation of Marlowe contracts that is quite close to what is occurring on-chain.

Users can create their own workflow that operates Marlowe, or their own toolset to wrap the Marlowe CLI tool in the way that developers have wrapped cardano-cli to create services such as libraries, faucets, and marketplaces.
