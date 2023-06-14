---
title: Cardano advances with Valentine upgrade and zippier P2P nodes
tags:
  - Cardano
url: ""
image: https://ucarecdn.com/94c3136b-c082-4cd1-877f-1f53721b28ce/
image_text: Cardano logo with network artwork
---

日本語版はこちら

Cardano is gradually and securely becoming a blockchain capable of hosting a new decentralized financial system. The biggest upgrades of recent years – implemented using ‘hard forks’ – have added stake delegation, native assets and NFTs, and the Plutus and Marlowe smart contract platforms. 

At first sight, improvements so far this year are more subtle, but they affect all of the core areas – interoperability, scalability, and sustainability – that define Cardano as a third-generation blockchain. Furthermore, they help software developers who are using Plutus smart contracts.

## More curves improve blockchain links

First off, February’s upgrade, Valentine, helps developers to create software that uses smart contracts, and extends the compatibility of Cardano with other blockchains. The upgrade name came from the scheduled release date coinciding with Saint Valentine's day – for the love of DApps! 

Before the date was set and that name applied, the upgrade was called SECP. This stands for Standards for Efficient Cryptography protocol, named after the Standards for Efficient Cryptography Group. This consortium began setting commercial standards for cryptography in 1998. The group bases its techniques on elliptic curves because breaking codes involving these curves is very difficult, yet the key codes are shorter than with other methods. 

The Valentine upgrade adds support for a curve called SECP256k1. Bitcoin, Ethereum, and Binance Coin use this for their public key cryptography, so the change improves compatibility between Cardano and these other leading blockchains. In particular, people and firms creating decentralized applications (DApps) on Cardano will be able to use two more types of signature, Elliptic Curve Digital Signature algorithm (ECDSA) and Schnorr, to verify data. This is in addition to Cardano’s native signature algorithm, the Edwards-curve Digital Signature algorithm (EdDSA).

Adding these signatures to Cardano saves money and time for developers, and removes the potential for making errors that could reduce security when writing smart contracts in Plutus. Already, there are more than 7,800 Plutus scripts running on Cardano. 

The aim of improving interoperability – the ability of blockchains to work together – is one of the three core concepts driving the creation of Cardano. Blockchain compatibility is vital to the acceptance of decentralized technology on a global scale, and Cardano is helping make this possible with cross-chain transfers, many types of tokens, and common smart contracts.

The Valentine signature changes mean that transactions generated on a sidechain – such as the [Ethereum-compatible EVM](https://iohk.io/en/blog/posts/2022/07/06/introducing-the-cardano-evm-sidechain/) – or another blockchain can be verified easily against Cardano.  

## Heading for growth

Another core concept where there has been recent progress is scalability. Here, Hydra technology, which sits on top of Cardano as a layer 2 protocol, is important. Hydra gives developers the potential to create their own mini-blockchains – heads – for functions that can be handled off the main blockchain. Hydra heads speed up processing time for an application and also free up the main chain from doing that work. The technology also cuts transaction costs. Input Output Global (IOG) and MLabs are working on an [auction using Hydra](https://iohk.io/en/blog/posts/2023/01/20/implementing-auction-projects-using-hydra-1/) to demonstrate the power of the technology. Another project, this time with Obsidian Systems, is introducing [payments using Hydra](https://iohk.io/en/blog/posts/2022/11/10/hydra-for-payments-introducing-developer-tooling-to-unlock-micropayments-on-cardano/). 

## Dynamic P2P improves the whole network

The third concept is sustainability. For a blockchain to carry on working in the long term, it has to be decentralized, so that no single party or small group is in control. Peer-to-peer (P2P) communication ensures that network connectivity remains decentralized by allowing relay nodes – the thousands of computers kept running round-the-clock by Cardano’s stake pool operators – to interact directly with each other. 

Pool operators are advised to run one node configured to produce blocks, and at least two relay nodes. Until recently, relay nodes had to be set up manually to link to other relay nodes.

The advance comes from the release of Cardano node software with more automated communication capabilities (versions 1.35.6 and 1.35.7). With [Dynamic P2P](https://iohk.io/en/blog/posts/2023/03/16/dynamic-p2p-is-coming-to-cardano/), a pool operator does not have to manually configure links to other nodes; it is done automatically. This means that when parts of the network fail, slow down or are attacked by hackers, each node can find new peers itself across the internet. The operator does not have to intervene.

The update automates the way each node selects which other nodes to ‘talk’ to when validating transactions or performing any of the many tasks needed to keep Cardano on the road. Dynamic P2P enhances security because it makes the network more resistant to denial-of-service (DoS) attacks. If a node goes down or the connection quality worsens, the network automatically adjusts to link to nodes that are running well.

Ultimately, the efficiency of the whole network improves because block diffusion time is minimized. Nodes running in the P2P mode make smarter choices about which other relay peers to maintain links to, based on quality measurements. These local choices by each node result in a network-wide continuous optimization that minimizes the time to send blocks and transactions across the network. 

## A piece in the DeFi jigsaw

Working with other blockchains, writing smart contracts in Plutus, handling more tasks, and a more resilient Cardano network are all stages in developing a finance system that can be used by anyone, anywhere. Another piece of the decentralized financial (DeFi) jigsaw was added when [Djed, a stablecoin on Cardano](https://iohk.io/en/blog/posts/2021/09/26/coti-to-issue-djed-stablecoin-on-cardano/), went live at the end of January. Within a day, Djed attracted 27m ada in backing and was available on exchanges such as MinSwap, MuesliSwap, and Wingriders.

Six ada back each Djed to help keep the coin’s price stable. That backing will unlock DeFi opportunities for the Cardano ecosystem, as well as Djed being used for settling payments and covering fees.

## Investing in training

Alongside the technology advances, IOG has expanded its training courses. This should benefit both programmers and people working in finance who do not have programming experience. The [IOG Academy](https://iohk.io/en/blog/posts/2023/02/09/iog-academy-the-pathway-to-becoming-a-cardano-smart-contract-developer/) provides courses, technical guides, and Q&A sessions covering Marlowe and Plutus, the smart contract platforms for Cardano. A starting point for this is a course on GitHub that gives the [basics of the Haskell language](https://github.com/input-output-hk/haskell-course) for Marlowe and Plutus.

Over the past five years, more than 500 people at IOG have been beavering away on Cardano. That figure is now being multiplied by the large number of developers outside the company. They have launched 119 projects so far, with a thousand more in the pipeline. With every upgrade to Cardano, IOG aims to make their life easier and the road to decentralized finance for the world easier.

_Nothing in this article is intended to be professional advice, including without limitation, financial, investment, legal, or tax advice. Input Output Global is not responsible for your use of or reliance on any information in this article._

### **Find out more**

*   [Duncan Coutts](https://www.youtube.com/watch?v=zOTfhcK-Wf4) on implementing P2P
    
*   [Cardano’s core concepts](https://docs.cardano.org/new-to-cardano/why-use-cardano): scalability, interoperability, and sustainability 
    
*   [Standards for Efficient Cryptography protocol](http://www.secg.org/sec2-v2.pdf) (SECP) 
    
*   Discover the [theory behind Djed](https://iohk.io/en/research/library/papers/djed-a-formally-verified-crypto-backed-pegged-algorithmic-stablecoin/) and how it can smooth out price changes
    
*   Check out the [Marlowe tutorials](https://play.marlowe-finance.io/doc/marlowe/tutorials/index.html)
    
*   Why [hard forks on Cardano](https://iohk.io/en/blog/posts/2020/05/07/combinator-makes-easy-work-of-shelley-hard-fork/) aren’t so hard
    
*   Explore any of this technology on [Essential Cardano](https://www.essentialcardano.io/) or sign up to the [Essential Cardano Guide to the Ecosystem](https://landing.essentialcardano.io/guide-to-the-ecosystem)
