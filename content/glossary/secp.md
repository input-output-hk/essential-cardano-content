---
title: SECP
tags:
  - Cryptography
  - Interoperability
  - Development
  - Smart Contracts
url: ""
image: ""
image_text: ""
---

Standard for Efficient Cryptography. SECP256k1 is the name of the elliptic curve used by many [blockchains](https://www.essentialcardano.io/faq/what-is-a-blockchain) to implement public key cryptography. Examples of SECP include the Elliptic Curve Digital Signature Algorithm (ECDSA) and Schnorr which allow users to verify the integrity of specific signed hashed data. ECDSA and Schnorr signature algorithms work with the SECP256k1 curve in many blockchains.

Cardano uses the Edwards-curve Digital Signature Algorithm (EdDSA) with elliptic curve Curve25519 as its base curve (aka. Ed25519). 

To ensure [interoperability](https://www.essentialcardano.io/glossary/interoperability) between blockchains, and to make it easier for developers to build cross-chain [decentralized applications (DApps)](https://www.essentialcardano.io/glossary/dapp), Input Output Global (IOG) is adding new [built-in functions to Plutus](https://www.essentialcardano.io/article/what-is-secp-and-how-it-drives-cross-chain-development-on-cardano). These will support ECDSA and Schnorr signatures allowing developers to use a wider range of multi-signature or threshold signature designs natively on Cardano.
