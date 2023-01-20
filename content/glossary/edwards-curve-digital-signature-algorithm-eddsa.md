---
title: Edwards-curve Digital Signature Algorithm (EdDSA)
tags:
  - Cryptography
  - Smart Contracts
  - Interoperability
url: ""
image: ""
image_text: ""
---

Cardano uses the Edwards-curve Digital Signature Algorithm (EdDSA) with elliptic curve Curve25519 as its base curve (aka. Ed25519). This gives fast signature verification and small signature sizes, which helps to improve the overall performance and security of the blockchain. Additionally, Ed25519 is designed to be resistant to certain types of cryptographic attacks, making it a more secure choice.

However, to ensure better [interoperability](https://www.essentialcardano.io/glossary/interoperability) between blockchains and ease of use for developers, [IOG](https://www.essentialcardano.io/glossary/iog) is adding new built-ins to [Plutus](https://www.essentialcardano.io/glossary/plutus) to support SECP elliptic curves.
