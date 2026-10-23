---
title: Weekly development report as of 2026-10-23
slug: weekly-development-report-2026-10-23
tags:
  - cardano
  - Weekly development updates
url: ""
image: https://ucarecdn.com/fe7ba2b1-f637-4797-88c7-f48a732715f6/
image_text: ""
---

## **CORE TECHNOLOGY**

This week, the **consensus team** reported that Praos2, which combines Praos with the Leios overlay, had merged into main. LeiosNotify clients and LeiosFetch servers also moved to main. Work on selecting and fetching Endorser Blocks is next.

The team also merged prototype changes that bring Endorser Block diffusion closer to the production design, including stricter checks on peer announcements and certificates. The prototype now uses the Leios header format only from Dijkstra onward. This requires restarting the prototype testnet from genesis and updating its nodes, not restarting Cardano mainnet.

Maintenance work included the ouroboros-consensus 5.1.0.1 release, a GetStakePoolState query, and tests for ledger query and snapshot encodings. A tracing fix prevents Dijkstra validation failures from crashing the tracing thread.

[See the submitted consensus update for more details.](https://github.com/IntersectMBO/cardano-updates/pull/847)

## **SCALING**

The **Hydra team** merged dependency upgrades to cardano-node 11.1.3 and cardano-api 11.7.0.0. Plutus moved to 1.68, producing smaller compiled scripts while avoiding a newer builtin that mainnet does not yet support.

The team opened work on rollback recovery, snapshot handling, extended solvency proofs, and experimental Windows support. These changes were proposals, not a new release. The Windows package covers hydra-node only; live Cardano connectivity and TLS remain untested.

[See this update for more details.](https://cardano-scaling.github.io/hydra-updates/updates/2026-w42/)

## **DEVELOPER EXPERIENCE**

The **developer experience team** published a documentation site for cardano-init and improved its doctor command to detect missing projects and show relevant tools and support channels. The subsequent cardano-init 0.3.0 release, published on October 12, also added short flags, project specification scaffolding, and update notices.

In the team's October 5-11 update, the Beginner and Intermediate onboarding path entered staging review. Advanced optimization lessons, runnable design-pattern examples, and weekly checks for example projects remained under review rather than live on the Developer Portal.

Contract explorations added deposit restrictions to smart wallets and revised an ADA-backed bond design. Both remained unmerged. The community pledge reached 36 signatories, while a bounty-program guide remained a draft, not a program launch.

See the [DevX update](https://input-output-hk.github.io/devx-updates/updates/2026-w41/) and [cardano-init 0.3.0 release notes](https://github.com/input-output-hk/cardano-init/releases/tag/v0.3.0) for more details.

## **SMART CONTRACTS**

The **Plutus team** enabled multiIndexArray and four new Value builtins for Dijkstra across all Plutus ledger language versions. They require the Dijkstra hard fork before they can be used on-chain. The team also added conformance tests and updated the specification's versioning section.

The guardrail script now supports optional parameters that governance proposals can set or unset. Plinth can report timings for individual compilation stages. Agda typechecking test generation and CEK machine optimizations remain in progress.

[See this update for more details.](https://updates.cardano.intersectmbo.org/2026-10-21-plutus-core/)

## **HIGH ASSURANCE**

In an update covering the past few weeks, the **high assurance team** shared a first version of Hades, its High Assurance Developer Environment. It brings smart contract development and verification tools into a container to make them easier to use.

The team contributed fixes and performance improvements to Z3, the SMT solver behind Blaster. Its finite field solver was merged into the latest Z3 release to improve solve times for cryptographic primitives. The team also integrated external contributions to the Plutus Core and Cardano Ledger API.

[Explore the Hades repository.](https://github.com/input-output-hk/hades)

## **RESEARCH**

This week, the **research team** hosted the Cardano R&D session, which provided a Q3 update on Cardano Vision 26 work streams. If you missed the session, you can watch the [recording](https://drive.google.com/file/d/1VA_nD_iX42PBVt6Lv4oO1bh1qRjqlraI/view). They are also preparing for the technical workshop on light client architecture next week. [Registration is now open.](https://luma.com/s02ucx4q)
