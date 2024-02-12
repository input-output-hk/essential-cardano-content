---
title: Unlocking more opportunities with Plutus V3
tags:
  - Plutus
  - Smart Contracts
  - Interoperability
  - Cryptography
url: ""
image: https://ucarecdn.com/4ac8aab5-b968-4397-86b7-b298d8349454/
image_text: Unlocking more opportunities with Plutus V3
---

### Plutus V3 will elevate the developer experience by improving smart contract adoption, bringing support for governance and voting features, and fostering interoperability between blockchains

Plutus V3, now available for testing on SanchoNet, introduces advanced Plutus primitives and so provides more tools for developers and unlocks more possibilities for writing smart contracts.

Improved developer experience and smart contract adoption are critical to the flourishing smart contract landscape on Cardano. Over the past year, the emergence and growth of a [host of community-built developer tooling](https://www.essentialcardano.io/article/a-list-of-community-built-developer-tools-on-cardano) and alternative languages have added significantly to developer options and the vibrancy of the Cardano builder ecosystem. To continue building out capability, the Plutus and cryptography teams at Input Output Global (IOG) – in collaboration with [MLabs](https://mlabs.city/) – worked on Plutus V3, focusing on performance, throughput, smart contract size, and platform capabilities. With an enriched developer toolkit and better operational efficiency, this upgrade not only reduces costs but also helps bring in new developers.

## What is Plutus V3?

Plutus V3 enhances Plutus Core's cryptographic capabilities, enabling Cardano to conform with the latest industry standards. The [Valentine](https://docs.cardano.org/cardano-testnet/about/secp/) upgrade a year ago added support for SECP elliptic curves (ECDSA and Schnorr).

The introduction of new cryptographic primitives with V3 helps developers meet industry best practices, use well-known and optimal cryptographic algorithms, port smart contracts from Ethereum, and create sidechain bridges. Besides cryptographic primitives, Plutus V3 improves performance by adding a sums of products (SOPs) feature to support the direct encoding of different data types. Finally, V3 provides an updated script context that will let users see [CIP-1694](https://cips.cardano.org/cip/CIP-1694#goal) governance-related entities.

Let’s take a closer look at the new functions.

## Sums of products

A common way of encoding data types in Plutus Core is by using the [Scott](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding) approach. Plutus V3 introduces sums of products – a way of encoding data types that leads to smaller and cheaper scripts compared with Scott encoding.

The sums of products approach aims to boost script efficiency and improve code generation for Plutus Core compilers. The changes involve new term constructors for packing fields into constructor values and efficient tag inspection for case branches. The benefit is the potential for programs to run 30% faster, which is a significant performance optimization, streamlining operations and ensuring swift execution of smart contracts. For more details, [see CIP-85](https://cips.cardano.org/cip/CIP-0085).

## New cryptographic primitives

Central to every blockchain is the use of cryptographic primitives, encompassing hash functions, digital signatures, and zero-knowledge proof (ZKP) systems. These foundational elements are crafted for computational efficiency, ensuring robust security tailored to their respective applications. The outcome is a set of security assurances that establish a trustless ecosystem, facilitating smooth engagement with Cardano's peer-to-peer (P2P) network and its decentralized applications (DApps).

In the Plutus language, built-in functions are those not explicitly defined within the script but are part of the language's runtime environment. Using these functions allows the interpreter to furnish an optimized implementation specific to its system when executing the script. Built-in functions execute frequently-used, well-defined operations, encompassing arithmetic, control, and other crucial tasks. As we delve into Plutus V3, let's explore the new built-in primitives that will enrich the language's capabilities:

*   **BLS12-381** – this curve pairing includes 17 primitives that support cryptographic curves, opening doors to seamless sidechain specification implementation and [Mithril](https://iohk.io/en/blog/posts/2023/07/20/mithril-nears-mainnet-release/) integration.
    
*   **Blake2b-224** – a cryptographic hash function for on-chain computation of public-key hashes for the validation of transaction signatures. Implementation of Blake2b-224 supports community projects, contributing to Cardano's versatility and adoption by accommodating various applications.
    
*   **Keccak-256** – a cryptographic hash function that produces a 256-bit (32-byte) hash value, commonly used for secure data verification. Keccak-256 supports Ethereum signature verification within scripts. This is crucial for cross-chain solutions and facilitates community projects by expanding use cases on Cardano.
    
## Empowering developers with bitwise primitives

The introduction of [CIP-58](https://cips.cardano.org/cip/CIP-0058) bitwise primitives will provide developers with robust capabilities for low-level bit manipulations. This addition offers developers profound benefits in both performance optimization and cryptographic functionality. With their incremental deployment plan, bitwise primitives ensure a seamless integration process and foster a robust environment for developers to build powerful and efficient solutions on Cardano.

Bitwise primitives provide the following features:

*   **Performance boost**. Bitwise primitives introduce the capability for very low-level bit manipulations within Plutus. This capability lays the foundation for executing high-performance data manipulation operations, a crucial aspect for developers seeking efficient solutions.
    
*   **Cryptographic support**. The inclusion of bitwise primitives is essential for supporting cryptographic functions like ED25519, which is a standard requirement for smart contract development. These primitives implement secure and robust cryptographic algorithms within Plutus.
    
*   **Integer-string conversions for smooth integration**. Bitwise primitives facilitate standard, high-performance implementations for conversions between integers and strings. This ability is essential because the primitives require arguments in integer format, while data is often presented in string format.
    
*   **Efficient algorithms and data structures**. CIP-58 adds a class of low-level functions for highly efficient algorithms and data structures. The ability to build efficient hash tables, a common key-value mapping data structure, showcases the practical impact of these low-level functions in building performant solutions.
    
The Plutus upgrade will add two bitwise primitives: `integerToByteString` and `byteStringToInteger`. The remaining primitives will be added to Plutus V3 gradually. Going forward, such upgrades won’t require a new language version. This incremental deployment approach ensures a systematic integration of these powerful features into the Plutus language.

Starting with the release of Cardano [node v.8.8.0-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.0-pre), Plutus V3 is now available on [SanchoNet](https://sancho.network/), introducing the Cardano community to governance features from CIP-1694 in a controlled testnet environment.

## Conclusion

Among its benefits, Plutus V3 offers greater efficiency, optionality, and ease of use to the Cardano builder community – all key to nurturing developer adoption. Prioritizing aspects such as performance, throughput, smart contract size, and platform capabilities ensures that Cardano developers can use the latest standards. These improvements facilitate the smooth migration of smart contracts from Ethereum, enable the creation of sidechain bridges, and ultimately contribute to the expansion of the Cardano ecosystem.

Follow [IOG X (Twitter)](https://twitter.com/InputOutputHK?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) for further announcements.
