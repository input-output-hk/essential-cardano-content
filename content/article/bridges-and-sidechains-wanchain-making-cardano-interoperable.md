---
title: "Bridges and Sidechains: Wanchain Making Cardano Interoperable"
tags:
  - Blockchain bridge
  - Sidechain
  - Interoperability
  - Scalability
url: ""
image: https://ucarecdn.com/a8f830ac-8fa4-4e75-89a0-f6e0043f50df/
image_text: ""
---

### A guest blog post by Dr. Weijia Zhang and Temujin Louie

Several months ago, a team from [Wanchain](https://www.wanchain.org/) reached out to Input Output Global, Inc. (“IOG”) to discuss how to enable interoperability between the Cardano mainnet, Cardano sidechains, and other heterogeneous blockchain networks.

The goal? To build the infrastructure required to enable true RealFi applications spanning multiple blockchains to drive the adoption of Cardano’s ecosystem, Wanchain’s network-agnostic blockchain interoperability solutions, and support the future of Web3.  

It soon became apparent that this was a monumental task requiring the input (and output!) of multiple teams. Indeed, connecting Cardano to heterogenous blockchains would be a complex undertaking, since Cardano is fundamentally different to most other blockchain networks. Of note, Cardano uses:

*   Different smart contract environments and programming languages: Cardano uses Plutus and Haskell, not EVM and Solidity;
    
*   Different transaction models: Cardano uses a UTXO model (like Bitcoin), not an account-based model (like Ethereum);
    
*   Different signature schemes and elliptic curves: Cardano supports EdDSA and Curve25519, not Shnorr and Secp256k1.
    

Each of these differences are worthy of their own dedicated post, but suffice to say that, combined, they presented a unique obstacle limiting Cardano’s potential for interoperability. 

Luckily, engineers love a good challenge!

Teams from IOG, Wanchain and MLabs (an industry-best Haskell, Rust, blockchain, and AI consultancy) collaborated to design an actionable plan to make Cardano interoperable and now, with the foundation of an interoperability solution for Cardano in place, the time is right to share  some details about what has thus far been an exciting endeavor. 

In this article, we explain the basic infrastructure for connecting Cardano to heterogeneous blockchain networks, reveal a novel sidechain solution, and share this project’s near and long-term roadmap.

## Wanchain: A wide area network of blockchains

First, a bit about Wanchain. Wanchain is both a sustainable layer 1 PoS blockchain and a decentralized blockchain interoperability solution. The Wanchain layer 1 PoS blockchain is a full Ethereum-like environment that works with industry standard Ethereum tools, DApps and protocols. Importantly, it has some ties to Cardano. Wanchain uses [Galaxy Consensus](https://www.wanchain.org/_files/ugd/9296c5_5205d584ee594e879d4b8b58048b6fac.pdf), a proof-of-stake consensus algorithm that leverages a variety of cryptographic schemes, including distributed secret sharing and threshold signatures, to improve random number generation and block production mechanisms. Galaxy Consensus, developed by world-class researchers and academics, is a continuation of Cardano’s own [Ouroboros](https://eprint.iacr.org/2016/889.pdf).

Meanwhile, Wanchain bridges are decentralized, direct, non-custodial bridges that connect both EVM and non-EVM networks without requiring any relay chains or intermediary networks. These bridges use a combination of Secure Multiparty Computation (sMPC) and Shamir's Secret Sharing to secure crosschain assets. Currently, more than 15 layer 1 and layer 2 networks (and counting!) are connected by Wanchain’s wide area network of blockchains.

### Foundational block 1: Cardano crosschain bridges

The first element needed to build Cardano’s crosschain interoperability solution is decentralized, non-custodial, bi-directional crosschain bridges connecting Cardano to other layer 1 blockchains.

A crosschain bridge transfers assets and/or data from a source chain to a target chain. In its most basic form, this is usually done by locking an asset on the source chain and minting a wrapped asset of the same value on the target chain. We call this the Lock-Mint-Burn-Unlock method. For the Lock-Mint-Burn-Unlock method to work, three main smart contracts are deployed: one on source chain to handle source assets, one on target chain to handle target assets, and one on a managing chain to handle registration and staking of bridge nodes. 

For those unfamiliar, Figure 1, below, illustrates a source chain to target chain transaction. A brief description: when the crosschain transaction is initiated by a user, the target chain and target address are specified. The source chain smart contract locks the source token and emits a Lock event. The bridge nodes detect the Lock event and instruct the target chain smart contract to mint a token of the same value on the target chain.

 ![](https://lh4.googleusercontent.com/pxR6gg_lZT_hPI2k1jNktIe0sbHNwykxTmhf0f1iXnYu49V6khudfJyzpvJGIb17iseHvbabn1yEINa80uLbK8cQRL0hpGAfmVHp4kXQfc9VRComPziQWonMdQlfsl440Tz-BWg)

_Figure 1. A basic crosschain transaction_

To bring the token back to the source chain, the owner of the token simply sends a “redeem” transaction to the target chain smart contract. The target chain smart contract burns the wrapped token and sends out a Burn event. The bridge nodes detect the Burn event and instruct the source chain smart contract to unlock the token on the source chain. Wanchain bridge nodes are permissionless and use multiparty computation and staking to prevent collusion.

As mentioned above, Cardano has several fundamental differences that complicate the task of deploying crosschain bridges. Here is how IOG, Wanchain, and MLabs have tackled these issues:

_Different virtual machines and programming languages: Cardano uses Plutus and Haskell, not EVM and Solidity_

Wanchain’s expertise is in connecting fully heterogeneous blockchains. The current crosschain infrastructure already includes blockchains that use EVM (like Ethereum and Wanchain), WebAssembly (like Polkadot), and even blockchains that have no virtual machines at all (like Bitcoin, XRP Ledger, and Litecoin). When possible, we solve this issue by developing native smart contracts on both the source and target chains. Otherwise, if a network does not support smart contracts, Wanchain bridge nodes jointly manage a dedicated lock account using sMPC. Wanchain’s ever-changing selection of permissionless bridge nodes then communicate with smart contracts (or lock accounts) on each chain, as needed. 

_Different transaction models: Cardano uses a UTXO model (ike Bitcoin), not an account-based model (like Ethereum)_

Wanchain bridge nodes have adaptors to connect to different blockchains. The adaptors can construct transactions based on the transactional model of the intended blockchain. An API specification provided by IOG enables Wanchain to define the format of transactions to call smart contracts on Cardano. 

_Different signature schemes and elliptic curves: Cardano supports EdDSA and Curve25519, not Shnorr and Secp256k1_

This proved to be the biggest dependency for Cardano’s interoperability solution. Cardano originally supported EdDSA and Curve25519, not Schnorr and Secp256k1. Following a request from Wanchain and MLabs, Input Output coordinated internal efforts to add native support to Cardano for a Schnorr signature and Secp256k1 curve. Both will be [publicly available following Cardano’s Vasil hard fork](https://www.youtube.com/watch?v=B0tojqvMgB0&t=1148s).

### Foundational block 2: Additional security, Wanchain as a Cardano sidechain

Ethereum co-founder Vitalik Buterin recently commented that he was pessimistic about crosschain applications due to the fundamental security limitations of bridges. Though [we at Wanchain disagree](https://www.altcoinbuzz.io/reviews/crypto-education/vitalik-forgot-one-thing-this-is-why-crosschain-bridges-can-be-safe/) with his conclusions, his concerns are valid. As such, special consideration is being taken to secure the crosschain bridges and maximize the security of Cardano’s interoperability solution.

This leads to the second element needed to build Cardano’s crosschain interoperability solution: Wanchain bridge nodes will be upgraded to peg the Wanchain and Cardano networks to further secure Cardano’s crosschain bridges and transactions. In simpler terms, Wanchain will serve as an EVM-compatible sidechain to Cardano. 

The Cardano-Wanchain peg is based on a two-phase Merkle transaction verification. This proof mechanism includes the following components: 

*   A state management contract deployed on Cardano;
    
*   Bridges nodes are responsible for authenticating the validity of Wanchain blockchain data, calculate Merkle roots, and save the Merkle root value to Cardano at regular intervals;
    
*   A two-stage Merkle tree proof.
    

A two-stage Merkle tree proof is used to prove the correctness of a Wanchain transaction using the compressed data stored in Cardano. This two-stage proof has two components, namely, the First Stage Proof (FSP) and the Second Stage Proof (SSP). FSP is used to prove the fact that _tx_ is stored in some Wanchain block with _bh_ as its transaction Merkle root. SSP is used to prove the fact that _bh_ is a valid transaction Merkle root of some block in Wanchain. With a combination of FSP and SSP, we can know for a fact that _tx_ is a valid transaction in Wanchain. This procedure is shown, below, in Figure 2.

![](https://lh6.googleusercontent.com/8EEJQO97f8wjv6b2zV2VwrnkDJO118Xay2YWboF2gBbFHX_NFkjLZOZjVbyUbpApCCuzcmTPfIEmeX0ASPrfIny9Uyd1fTPeQJgR7MZRZXul7_-hdAnxwG64TPCEA9NlalSh1LS1)

Figure 2. Verification path of 2-Stage Proof

To prove the correctness of _Tx1_, the two-stage proof is constructed as follows:

1.  Construct FSP:
    

_FSP={Tx1, Tx2,Tx34,LRoot3}_

2.  Construct SSP:
    

_SSP={LRoot3,LRoot4,LRoot12}_

3.  Compose the two proofs:
    

_2StageProof={FSP,SSP}_

The 2-Stage Proof is valid if the following equations hold:

1.  _LRoot3=SHA256(SHA256Tx1,Tx2,Tx34);_
    
2.  _Root=SHA256(LRoot12,SHA256LRoot3,LRoot4);_
    

Not only does this novel approach maximize the security of Cardano’s interoperability solution, it also doubles as a _scalability_ solution. Transactions can now safely be moved off Cardano, recording only the vital information on the layer 1 blockchain to ensure security and immutability. 

## The roadmap: near and far

Enabling full interoperability between the Cardano mainnet, Cardano sidechains, and other heterogeneous blockchain networks is a long term project. As such, this project will be defined by incremental improvements, rather than radical leaps.

The first basic Cardano-Wanchain bridge has been live in a test environment for several months, allowing wrapped ada to be minted on Wanchain. Following Cardano’s Vasil hard fork, these bridges will be deployed to the mainnet.

![](https://lh4.googleusercontent.com/rs15nlfTM1ue2X9IKjjYWyHz5rhSYd1xJnfS9jVnfHV0pr5qeQiV9KFnv3lex8JXG3ImISd4lD01Oi3Vf-BydGS8pWQrDCG-b6IEsemiL_8zXu7Aahmiinme400lE770tkgB-6LzwMADnWTO2Q)

Figure 3. Wrapped ADA in a test environment

Meanwhile, work will continue to make Wanchain a formal EVM-compatible sidechain to Cardano. Once the two-phase Merkle transaction verification is in place, Wanchain will be positioned as a scalability solution for applications currently running on Cardano. 

Over time, the full Cardano-Wanchain interoperability topology will take shape, as seen in figure 4 below. 

![](https://lh4.googleusercontent.com/_GENO7goFI56Rv0s6aiI2p0GG6m5rPFe2mCNvrVopT-_b-vzvVGy-G72IK5-MiV2JPnoTudkCkcCm5BhgRN6i7mSH_c2nIVemwiK5bc1HF3gH7EqBvrYNvrebsj-qyVkNGU7E08)

Figure 4. The Cardano-Wanchain interoperability topology

The topology’s bottom layer is formed by layer 1 blockchains such as Cardano, Ethereum, Cardano, Polkadot, or Bitcoin. These are all connected by existing Wanchain crosschain bridges. The vertical connections bridge layer 1 to layer 2 networks and sidechains such as Arbitrum, Polygon, Optimistic. The layer 2/sidechain layer is ideal to host tokens and RealFi projects. Assets crossing bridges in this layer do not need to pass through the layer 1 network to reach their target destination. Wanchain has already deployed several of these layer 1, layer 2 and sidechain-to-sidechain bridges. 

As Cardano’s own sidechain strategy continues to mature, the interoperability solution that we are building today will be able to service Cardano’s crosschain and sidechain needs.

## About Wanchain:

Wanchain, the Wide Area Network chain, is a decentralized blockchain interoperability solution with a mission to drive blockchain adoption through interoperability by building fully decentralized, non-custodial bridges that connect the world’s many siloed blockchain networks. Wanchain empowers developers to build truly decentralized crosschain applications to power the future of Web3.

[Website](https://www.wanchain.org/) **_|_** [Bridge](https://bridge.wanchain.org/#/) **_|_** [Documentation](https://www.explorewanchain.org/) **_|_** [Telegram](https://t.me/WanchainCHAT?source=post_page---------------------------)**_|_** [Twitter](https://twitter.com/wanchain_org?source=post_page---------------------------) **_|_** [Newsletter](https://wanchain.us17.list-manage.com/subscribe?u=474affe3661620cb14a108d52&id=f76852edbb&source=post_page---------------------------) **_|_** [Blockchain Explorer](http://wanscan.org/) **_|_** [Developer Portal](https://wandevs.org/)

_Disclaimer: The information contained in this article is for general guidance on matters of interest only. The material herein is provided for informational purposes only and should not be construed as investment advice._
