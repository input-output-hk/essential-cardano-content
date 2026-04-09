---
title: Weekly development report as of 2026-04-10
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/43bbead4-884b-4e25-a699-c07ea52733c1/
image_text: Weekly development report as of 2026-04-10
---

### CARDANO HIGH ASSURANCE

This week, the **Cardano High Assurance** team released a complete formalization of Plutus Core, UPLC, and CEK machine in Lean 4, called [PlutusCoreBlaster](https://github.com/input-output-hk/PlutusCoreBlaster).

Combined with the automated formal reasoning backend, [Blaster](https://github.com/input-output-hk/Lean-blaster), developers can now formally verify that the compiled UPLC of their smart contracts meets the intended business requirements and security objectives.

The team is working hard to deliver a complete set of ledger rules and formalization in Lean 4, making it even easier to formally verify smart contracts through predefined helper functions.

### SMART CONTRACTS

The **Plutus** team delivered a set of improvements to Plinth, focusing on compiler usability and language efficiency.

On the compiler side, they introduced new type checker plugins that [preserve source locations](https://updates.cardano.intersectmbo.org/2026-04-08-plutus-core/) and [detect unsupported Haskell features](https://github.com/IntersectMBO/plutus/pull/7659), resulting in clearer and more actionable error messages. They also added a [driver plugin](https://github.com/IntersectMBO/plutus/pull/7687) that automatically applies the required compiler flags and enables the Strict extension.

In terms of language improvements, the team enhanced [AsData](https://github.com/IntersectMBO/plutus/pull/7664) to generate a destructor function for data types, providing a more efficient approach for matching on sum types compared to pattern synonyms.

Additionally, they implemented a new UPLC optimization, transforming applications with three or more arguments into `case-constr` form to improve execution efficiency.

Updates to the Plinth user guide are in progress, with further details currently available in the associated pull request descriptions.

### SCALING

This week, the **Mithril** team completed the [full review](https://github.com/input-output-hk/mithril/issues/2982) of the recursive SNARK circuit prototype, the impact assessment of SNARK on Mithril protocol security, and support for multiple proof systems in the STM library. They also completed SNARK proof generation and verification in [end-to-end tests](https://github.com/input-output-hk/mithril/issues/3107). They began work on the recursive SNARK circuit, including creating a new module in the STM library, and worked on a testing plan for the IVC circuit and production readiness for circuit keys and trusted setup. They also supported test mode for the recursive circuit and continued refactoring the STM library's byte codec.

Additionally, they completed the [client CLI implementation](https://github.com/input-output-hk/mithril/issues/3032) for Cardano blocks and transactions and made progress on partial block range support, security parameter offset signing, and the explorer update for Cardano blocks and transactions.

Finally, the team completed the [reqwest](https://github.com/input-output-hk/mithril/issues/3033) upgrade to `0.13` and continued work on the Cardano [node upgrade](https://github.com/input-output-hk/mithril/issues/2894) to `10.7` and the [DMQ node update](https://github.com/input-output-hk/mithril/issues/3114) to `0.4.1.0`.

### VOLTAIRE

Only seven days left to apply for the 2026 **Intersect committee elections** – if you've been thinking about it, [now is the time to act](https://luma.com/intersect-committee-elections).

Whether your background is technical, operational, community-focused, strategic, or regional, your perspective could help strengthen Cardano. Previous committee experience isn’t essential if you’re considering applying. What matters most is a willingness to contribute, collaborate, and help improve the ecosystem.
