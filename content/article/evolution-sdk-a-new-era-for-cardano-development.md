---
title: "Evolution SDK: a new era for Cardano development"
tags:
  - Cardano
  - Developer Tools
  - Development
  - evolution-SDK
  - Intersect
  - No Witness Labs
url: ""
image: ""
image_text: ""
---

### The Cardano community, via Intersect, welcomes its first incubated project: Evolution SDK, a new TypeScript-first framework developed by No Witness Labs. This framework is designed to offer developers more flexibility in building Cardano transactions and integrating smart contracts, with enhanced safety and determinism built into the development flow.

**Author**: Jonathan Rodriguez/Mladen Lamesevic

Summary:

*   **Creator:** No Witness Labs, a Cardano-focused engineering team known for security audits and protocol design.
    
*   **Milestone:** Evolution SDK is the first project officially incubated by Intersect, signaling a shift toward community-owned, high-resilience infrastructure.
    
*   **Core benefit:** The SDK introduces a way to build Cardano applications by treating transactions as composable programs rather than fragile, one-off scripts.
    
*   **What it offers:** A TypeScript-first framework with robust technical features, modular transaction building, local development networks, and offline smart contract evaluation.
    
*   **Community contributions:** Developers are invited to transition and contribute code to the new SDK, and request features to shape its future.
    

Building decentralized applications on Cardano comes with unique advantages, strong security, formal foundations, and predictable execution, but also unique challenges.

Unlike account-based blockchains, Cardano uses the extended UTxO (EUTXO) model, which requires transactions to be precisely constructed before they are submitted. This precision increases safety, but it also makes developer tooling more complex.

For years, developers have managed this complexity through frameworks that offer fine-grained control over transaction logic and protocol interactions.

Enter the **Evolution SDK**. Created by [No Witness Labs](https://nowitnesslabs.com/) and recently selected as the first project to enter **Intersect’s incubation program**, this toolkit represents a significant maturation of the Cardano developer ecosystem. It is designed not just to write code, but to standardize how secure, scalable applications are built on Cardano.

## What is the Evolution SDK?

The Evolution SDK is a modular, TypeScript-first development framework designed to bring structure, enhanced security, and composability to Cardano application development.

Rather than treating transactions as mutable objects that are built and executed immediately, the SDK models them as declarative programs, allowing developers to assemble, reuse, test, and analyze transaction logic before it ever touches the blockchain.

### Core features and capabilities

The SDK is engineered to be fast and highly modular, allowing developers to import only what they need. Key capabilities include:

*   **TypeScript-first design:** Evolution SDK uses TypeScript not just as a language, but as a safety layer. Transactions, addresses, and smart contract data are checked before they run, reducing costly runtime failures and making complex applications easier to reason about.
    
*   **Modular architecture:** The SDK is built from small, composable modules that can be combined like building blocks. This makes applications easier to maintain, review, and extend as requirements evolve.
    
*   **DevNet integration:** Developers can spin up a fully local Cardano network with predictable starting conditions. This enables repeatable tests, faster iteration, and confidence that application behavior is designed to simulate production environments.
    
*   **Smart contract support:** Rather than locking developers into a single execution engine, Evolution SDK uses a pluggable evaluator model. Any modern UPLC evaluator, including Aiken or Scalus, can be integrated, enabling offline testing, faster feedback loops, and greater flexibility over how contracts are evaluated.
    
*   **Designed for safety and predictability**
    

Under the hood, Evolution SDK is built on Effect, a modern TypeScript framework inspired by the safety guarantees of functional languages like Haskell. Instead of relying on hidden exceptions and implicit side effects, operations explicitly describe what they do and how they can fail.

This approach makes complex transaction logic easier to reason about, test, and maintain especially as applications grow in size and importance.

## Beyond the code: No Witness Labs

The team behind Evolution SDK, No Witness Labs, brings extensive experience designing and auditing production-grade Cardano protocols. This background in security-critical environments strongly influences the SDK’s design philosophy emphasizing predictable behavior, clear failure modes, and tooling that helps teams avoid entire classes of mistakes before they reach production.

Founded by [Jonathan Rodriguez](https://x.com/solidsnakedev) and [Mladen Lamesevic](https://x.com/MladenLm), No Witness Labs operates not only as an open-source contributor, but as a specialized engineering partner within the Cardano ecosystem.

Their work extends beyond open source tooling into mission-critical services, including:

*   **Security audits:** conducting in-depth smart contract reviews to identify vulnerabilities before deployment.
    
*   **Development support:** working directly with engineering teams to design, implement, and harden smart contracts and transaction logic.
    

This hands-on experience with real-world edge cases and complex operating environments directly informs the Evolution SDK, resulting in an architecture focused on robustness, predictability, and long-term maintainability

## Get involved and shape the future of Cardano tooling

The Evolution SDK is now an incubated project under **Intersect**, meaning it is maintained as an open-source project for the benefit of the community. Its growth depends on active participation from developers like you.

**How you can contribute:**

1.  **Explore the library:** visit the [official documentation](https://intersectmbo.github.io/evolution-sdk/docs/) or the [GitHub repository](https://github.com/IntersectMBO/evolution-sdk) to start building today.
    
2.  **Explore the Migration Path:** Developers interested in TypeScript-based DApp development can review the Evolution SDK documentation to see if it fits their specific technical requirements.
    
3.  **Request features:** is the SDK missing a critical tool? [Open an issue](https://github.com/IntersectMBO/evolution-sdk/issues) to let the maintainers know what the community needs.
    
4.  **Contribute code:** as an open-source project, contributions are welcome. Fork the repo, fix a bug, or add a feature to help the ecosystem grow.
    

_This information is intended for technical educational purposes only. This content is not directed at, and is not intended for, residents of Singapore or any jurisdiction where such distribution would be contrary to local law. No Witness Labs does not provide financial services or investment advice in connection with this SDK._

_Purchasing digital assets is risky. You are encouraged to do your own research and to consult professional advice before buying any other cryptocurrency._
