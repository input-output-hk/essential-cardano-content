---
title: New Cardano cryptographic primitives will bring greater interoperability
  and secure, cross-chain DApp development
tags:
  - "#cardano"
  - upgrade
  - Interoperability
url: ""
image: https://ucarecdn.com/7b1b14a9-0d3e-4c6e-8c67-a2a9fe53953b/
image_text: ""
---

### To make it easier for developers to build cross-chain applications, Input Output Global (IOG) is adding new built-in functions to Plutus to support ECDSA and Schnorr signatures

Cryptography ensures trust and security in blockchain settings and different blockchains use different cryptographic signature methods. Elliptic Curve Digital Signature Algorithm (ECDSA) and Schnorr signatures are two popular signature schemes used in blockchain platforms. Bitcoin and Ethereum, among other cryptographic systems, use ECDSA. Schnorr signatures, originally proposed as an alternative to ECDSA, are also used in several blockchain networks, such as Polkadot.

Cardano uses the Edwards-curve Digital Signature Algorithm (EdDSA) with elliptic curve Curve25519 as its base curve (aka. Ed25519). This gives fast signature verification and small signature sizes, which helps to improve the overall performance and security of the blockchain. Additionally, Ed25519 is designed to be resistant to certain types of cryptographic attacks, making it a more secure choice. [Monero, Ripple, and others](http://ethanfast.com/top-crypto.html) also use Ed25519 as their signature algorithm.

## New cryptographic primitives on Cardano

The variance in algorithms means that Plutus DApp developers who want to work with other blockchains and need to validate ECDSA and Schnorr signatures would have to spend time, effort, and funds to implement such algorithms over the Standards for Efficient Cryptography ([SECP](https://iohk.io/en/blog/posts/2022/11/03/what-is-secp-and-how-it-drives-cross-chain-development-on-cardano/)) elliptic curves in Plutus. This considerably increases potential security risks and may use an unrealistic amount of resources.

Since only Cardano’s primary signature algorithm Ed25519 is provided as a Plutus built-in function, ECDSA and Schnorr operations would be more expensive and time-consuming _unless also provided as built-in functions_.

To make it easier for developers to build cross-chain applications, Input Output Global (IOG) has added new built-in functions to Plutus to support ECDSA and Schnorr signatures. This will allow developers to use a wider range of multi-signature or threshold signature designs natively in Cardano, thus providing the highest level of security.

### Getting ready for the upgrade

Preparations have been underway for some time across the entire Cardano ecosystem. The core engineering teams at IOG and the Cardano Foundation, SPOs, DApp developers, and exchanges have performed intensive integration testing in the preview test environment since November 2022, with positive results. This technology is now close to being deployed on the Cardano mainnet.

For the Vasil upgrade, IOG and the Cardano Foundation agreed on some clear critical mass indicators in the final mile to ensure ecosystem readiness. The new upgrade is not as complex as Vasil, for example, nor does it have such an impact across existing DApps. Nonetheless, the teams are ensuring readiness by working closely with key Cardano stakeholders (notably SPOs, DApps, and exchanges) that may need to prepare for the new capability.

At the time of writing, [over 80% of block-producing nodes](https://pooltool.io/networkhealth) were running the required new node (version 1.35.4). Downstream components (such as DB Sync, the wallet backend, GraphQL, etc.) are not impacted directly by the change, but as ever, compatibility against the new node version has been fully tested.

Exchanges have already been notified of the upgrade, so they have enough time to upgrade their systems as required. IOG has also polled the DApp/tool development community – very few projects will be impacted by the change and we have factored in the needs of those that do need to update their code accordingly. Based on that community polling, the **mainnet** upgrade is proposed tentatively for **February 14, 2023 at 21:44:51 UTC**. The mainnet hard fork will take place at the beginning of epoch 394 around absolute slot height 84844800, estimated block height 8403208.

On that basis, IOG is targeting the update to the **pre-production test environment on February 11, 2023 at 00:00:00 UTC**.

As ever, stay close to our and the Cardano Foundation social channels for the latest on progress as we head towards this date. If you are a developer or SPO, please join our [Discord](https://discord.com/invite/inputoutput), [TG announcement](https://t.me/SPOannouncements) channels, and track this [ecosystem readiness page](https://iohk.zendesk.com/hc/en-us/articles/14669691361433-Ecosystem-readiness-for-the-SECP-upgrade).
