---
title: "UPDATE: Cardano Cross-Chain Bridges and Other Interoperability Solutions"
tags:
  - Blockchain bridge
  - Sidechain
  - cross-chain
  - Wanchain
  - Cardano
  - Interoperability
  - ZKP
  - Ethereum
  - Ethereum Virtual Machine
url: ""
image: https://ucarecdn.com/918b6689-8c30-4d99-89a0-4522bcaddebc/
image_text: Wanchain is making Cardano interoperable
---

_TL;DR Decentralised, non-custodial,_ bi-directional _cross-chain bridges are officially up and running on Cardano Pre-Production! This means that ADA, other native Cardano tokens, and all erc20 tokens can seamlessly move between Cardano and any EVM-based network! Next step? Mainnet!_ 

Last July, the team at [Wanchain shared details about their ongoing work with IOG and MLabs](https://iohk.io/en/blog/posts/2022/07/08/bridges-and-sidechains-wanchain-making-cardano-interoperable/) to make Cardano interoperable. The goal was to build the infrastructure required to enable applications spanning multiple blockchains, thereby driving the adoption of Cardano’s ecosystem, promoting Wanchain’s network-agnostic cross-chain infrastructure, and advancing the future of Web3. 

This monumental endeavour consisted of two foundational blocks. The first: infrastructure to enable decentralised cross-chain bridges connecting Cardano to heterogeneous blockchain networks – both EVM and non-EVM. The second: a novel sidechain solution to further secure Cardano’s cross-chain bridges and transactions. 

Now, after hitting several significant development milestones, it’s finally time to share this highly anticipated update!

## **Cardano Bridges**

As [previously explained](https://iohk.io/en/blog/posts/2022/07/08/bridges-and-sidechains-wanchain-making-cardano-interoperable/), making Cardano interoperable is a complex undertaking. The primary reason is that Cardano is fundamentally different to most other blockchain networks. Specifically, Cardano uses:

*   Different smart contract environments and programming languages: Cardano uses Plutus and Haskell, not EVM and Solidity;
    
*   Different transaction models: Cardano uses a UTXO model (like Bitcoin), not an account-based model (like Ethereum);
    
*   Different signature schemes and elliptic curves: Cardano supports EdDSA and Curve25519, not Shnorr and Secp256k1.
    

Since the last update, the Wanchain team has fully developed the Haskell smart contracts needed to support cross-chain transactions. Wanchain’s bridge nodes have also been updated and can now construct UTXO transactions to call Cardano smart contracts. Finally, following a request from Wanchain and MLabs, Input Output coordinated internal efforts to add native support for a Schnorr signature and Secp256k1 curve. Both have been publicly available on the Cardano mainnet since the Valentine update on February 14th, 2023.

Now that these three areas have been fully resolved, it is with great pleasure to announce that Cardano cross-chain bridges are fully functional on [Pre-Production](https://docs.cardano.org/cardano-testnet/getting-started)_._

### _Next step: Cardano Mainnet_

Pre-Production is Cardano’s most mature late-stage testnet. It follows “Devnet” and “Preview” and is designed to closely resemble the Cardano mainnet as it serves as the final step before deploying applications on the Cardano Mainnet. The following decentralised, non-custodial, bi-directional cross-chain bridge types are currently deployed to Pre-Production:

1.  Move ADA to _any_ EVM-compatible chain and back
    
2.  Move Cardano native tokens to _any_ EVM-compatible chain and back
    
3.  Move _any_ coin or ERC20 token from _any_ EVM-compatible chain to Cardano and back
    

The advantages of these bridges are plentiful. They enable users to use their ADA and other Cardano native tokens like DJED with any Web3 application on any EVM-compatible network. Similarly, these bridges benefit the entire Cardano ecosystem by paving the way for a huge influx of new assets and liquidity.

From here, it is relatively straightforward to connect Cardano to the non-EVM networks already supported by Wanchain’s cross-chain infrastructure, such as Bitcoin, Polkadot and the XRP Ledger, amongst others. Once deployed on the Cardano mainnet, the first foundational block needed to make Cardano interoperable will be realised!

## **Sidechains**

Since the last update outlining how [Wanchain will serve as an EVM-compatible sidechain to Cardano](https://iohk.io/en/blog/posts/2022/07/08/bridges-and-sidechains-wanchain-making-cardano-interoperable/), IOG published extensive sidechain specifications aimed at improving Cardano’s scalability. The design of these specifications positions the Cardano mainnet as the root of trust for multiple other networks and sidechains, enabling developers to securely build on Cardano sidechains rather than directly on the Cardano mainnet. As such, small adjustments are in order to ensure alignment with IOG’s sidechain specifications. Additionally, there are numerous elements of Wanchain’s interoperability solutions that will add value.

### _Expanding Cardano's sidechain framework_

Wanchain’s existing interoperability solutions include components that can serve as building blocks for Cardano sidechains. These include blockchain followers, relayers, secure multiparty computation, secure validator registration, staking functions and more. These can expand the scope of Cardano’s sidechains as Wanchain’s solutions are already compatible with non-OBFT- and UTXO-compatible blockchains.

IOG’s sidechain specifications allow sidechains to stake and register Stake Pool Operators (SPO). Wanchain’s enterprise-stack and related technologies can also be adapted to provide a Cardano sidechain solution to enterprises. 

### _Bringing Zero-Knowledge Proof to Cardano sidechains_

IOG’s sidechain specification describes a mechanism for validating sidechain transactions on the mainchain through certificates. Wanchain’s ongoing research into Zero-Knowledge Proof (ZKP) technology can complement this approach. ZKPs are designed to prove a fact without revealing private information and therefore provide strong security without any external assumptions while simultaneously reducing on-chain verification costs.

More detailed information about Wanchain’s Cardano sidechain solution will be shared at a later date.

## **The future of interoperability**

Wanchain has long been at the forefront of blockchain interoperability. From launching the industry’s first decentralised cross-chain bridge, to deploying the first direct bridge connecting Bitcoin and Ethereum, to more recent innovations like NFT bridges and XFlows, Wanchain continues to earn its reputation for enabling interoperability between EVM and non-EVM networks.

With Cardano set to join more than 20 other public networks connected by Wanchain’s cross-chain infrastructure, Wanchain’s original vision of blockchain interoperability is closer than ever. Get involved with the Wanchain community of developers, users and ambassadors by joining us on [Telegram](https://t.me/WanchainCHAT) and by following Wanchain on [Twitter](https://twitter.com/wanchain_org). We are all connected.

![](https://ucarecdn.com/c1f426d6-74c4-443f-9835-93b868ccfa7a/)

## **About Wanchain**

We are all connected — Wanchain, the Wide Area Network chain, is the world’s premier decentralised blockchain interoperability solution. Our mission is to drive blockchain adoption through interoperability by building fully decentralised bridges that connect the world’s many siloed blockchain networks. This cross-chain infrastructure empowers developers to build truly decentralised cross-chain applications to power the future of Web3.

[Website](https://www.wanchain.org/) **_|_** [Bridge](https://bridge.wanchain.org/#/) **_|_** [Documentation](https://www.explorewanchain.org/) **_|_** [Telegram](https://t.me/WanchainCHAT?source=post_page---------------------------) **_|_** [Twitter](https://twitter.com/wanchain_org?source=post_page---------------------------) **_|_** [Newsletter](https://wanchain.us17.list-manage.com/subscribe?u=474affe3661620cb14a108d52&id=f76852edbb&source=post_page---------------------------) **_|_** [Blockchain Explorer 1](http://wanscan.org/) **_|_** [Blockchain Explorer 2](https://wanexplorer.io/) **_|_** [Developer Portal](https://wandevs.org/)
