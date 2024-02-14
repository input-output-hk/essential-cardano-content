---
title: Programming languages
tags:
  - "101"
  - ada
  - Cardano
  - Smart Contracts
  - Programming
url: ""
image: https://ucarecdn.com/c11efb45-dd05-4003-adac-8f4b8fd09998/
image_text: ""
---

## Haskell

Cardano is written in [Haskell](https://github.com/IntersectMBO/cardano-haskell-packages), a functional language that emphasizes 'pure' functions. That is, functions that produce the same result for the same input.

Haskell is particularly well suited to Cardano's high-assurance code, and the need for greater formal verification in the blockchain. Cardano aims to become a global social and financial system, which requires high reliability and verification. 

Many other companies use Haskell, both because of its security properties and pure functional nature. Well-known firms like Oracle and Facebook use Haskell for blockchain research and advertising, respectively, while lesser-known companies such as Atos IT and Jotron use it for building applications for the aerospace industry.

## Plutus

[Plutus](https://github.com/IntersectMBO/plutus) is Cardano's native smart contract language. Plutus smart contracts are effectively Haskell programs.

Plutus draws from modern language research to provide a safe, full-stack programming environment based on Haskell, the leading purely functional programming language. By using Plutus, users can be confident in correctly executing their smart contracts.

[Read about Plutus V3](https://www.essentialcardano.io/article/unlocking-more-opportunities-with-plutus-v3) and how it offers developers greater efficiency, optionality, and ease of use.

## Marlowe

[Marlowe](https://github.com/input-output-hk/marlowe-cardano) is a domain-specific language (DSL) for writing and executing financial contracts. 

Marlowe contracts are optimized for financial transactions and development platforms, and ensure a fast track for financial service providers to build expertise in smart contracts and blockchain technology.

Marlowe provides a suite of products for the community that will foster the adoption of Cardano in finance. Marlowe creates a blockchain-specific way to replicate key processes within financial services by making smart contract development easier for developers in this industry.

Marlowe also aims to facilitate new possibilities of financial innovation and aims to become the technology powering a host of smart contract-based financial services.

## Aiken

Aiken is a new programming language and toolchain for developing smart contracts on the Cardano blockchain. It draws inspiration from various modern languages, like Gleam, Rust, and Elm, renowned for their friendly error messages and an overall excellent developer experience.

As a language, Aiken is purely functional with static typing and type inference. This means most of the time, the compiler is smart enough to determine the type of something without requiring user annotation. It also allows the creation of custom types resembling records and enums. Aiken does not include higher-kinded types or type classes because it aims for simplicity.

Learn more on the [Aiken website](https://aiken-lang.org/).

## opshin

[Opshin's](https://github.com/OpShin/opshin) syntax is 100% valid Python code, ensuring that contracts evaluate on-chain exactly as their Python counterpart. This makes opshin the main alternative for developers with Python experience looking to build on Cardano. Opshin interacts closely with the Python library, [PyCardano](https://pycardano.readthedocs.io/en/latest/index.html), and supports both imperative and functional paradigms without compromising Cardano smart contracts' core design.

## plu-ts

Developed by [Harmonic Labs](https://www.harmoniclabs.tech/), [plu-ts](https://www.harmoniclabs.tech/plu-ts-docs/index.html) is a Typescript-embedded programming language and library designed for on-chain smart contract code efficiency while staying as close as possible to the Typescript syntax. 

Plu-ts implementation provides tools to write off-chain code, allowing developers to use the same syntax for both portions of a Cardano DApp.

## Helios

[Helios](https://github.com/hyperion-bt/helios) is a Javascript/Typescript SDK alternative created to onboard web developers from the Javascript/Typescript ecosystem -- among the largest developer communities -- onto Cardano.

The Helios toolkit works for both on-chain and off-chain code. The Helios language can also be used to calculate and manage Cardano assets during a transaction, making it a versatile alternative in the Cardano ecosystem for programmers of all backgrounds. 

## Plutarch

[Plutarch](https://github.com/Plutonomicon/plutarch-plutus) is a domain-specific language for on-chain code based on Haskell. Plutarch's higher level of abstraction compared to Haskell gives developers ways to write highly efficient smart contracts. 

Plutarch's main purpose is to optimize the size of a validator, making transactions as cheap as possible. 

Also, see a list of [developer tools on Essential Cardano](https://www.essentialcardano.io/article/a-list-of-community-built-developer-tools-on-cardano) or check out some of the most popular [builder tools](https://developers.cardano.org/tools) on the Developer Portal.
