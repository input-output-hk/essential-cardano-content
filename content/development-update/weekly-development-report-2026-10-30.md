---
title: Weekly development report as of 2026-10-30
slug: weekly-development-report-2026-10-30
tags:
  - cardano
  - Weekly development updates
url: ""
image: https://ucarecdn.com/8ff531b7-3e63-48d6-97a5-3d9fb06c974e/
image_text: Graphic for this week's Cardano development report
---

## **CORE TECHNOLOGY**

This week, the **ledger team** added the LEIOSCERT validation rule and checks for Leios certificates in block bodies. The team also defined how endorser block references are encoded, prevented duplicate cryptographic signing keys from being used, and added certificate tests.

For Dijkstra, the team implemented minimum-fee calculations, updated reward calculations to use CIP-23 effective cost and margin, and corrected block body size calculations. Sub-transaction validation and tests also progressed, alongside fixes to data and redeemer decoding.

See [this ledger update](https://github.com/IntersectMBO/cardano-updates/pull/851) for more details.

The performance and tracing team completed preparations for the switch to Hermod Tracing, with version 1.1.0 tested against the node codebase. Ahead of Node 11.2, the team fixed missed-slot accounting and UTF-8 encoding issues, plus a Prometheus metrics-format issue in Hermod.

The team also benchmarked the Leios prototype and Week42 build, added Dijkstra profiles for nested transactions and reference scripts, and analyzed transaction validation on SPO hardware. Leios findings remain preliminary. Further trace-filtering optimizations await full validation; the tracing-system switch itself is not yet complete.

See the [performance and tracing update](https://updates.cardano.intersectmbo.org/2026-10-29-performance-and-tracing/) for more details.

## **SCALING**

In its October 19 to 25 update, the **Hydra team** reported the October 22 release of Hydra 2.4.2. The release adds larger snapshot batches for higher throughput, faster partial fanout, which lets participants withdraw funds in stages, and compatibility with cardano-node 11.1.3. It also includes a delegated-head demo and fixes for deposits, snapshot consistency, and recovery from network stalls and restarts.

An experimental Windows hydra-node build is included; live Cardano connectivity and encrypted connections remain untested. The team also merged an extension to the solvency proof covering close, contest, and full distribution at fanout. Further rollback and snapshot recovery work remained under review.

See [this update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w43/) for more details.

## **DEVELOPER EXPERIENCE**

In its October 19 to 25 update, the **developer experience team** merged smart wallet and tokenized bond reference implementations into the contracts library. The smart wallet includes delegated spending and deposit restrictions, with tests and documentation following adversarial review. Administrators retain the ability to close the wallet. The bond example adds stricter coupon and vault accounting; redemption depends on available liquidity.

The team also tested Dijkstra compatibility on a local devnet using a cardano-node 11.2 integration revision. The tests identified tool and decoder compatibility gaps to address upstream; the readiness work remained unmerged. Upgradeability examples and advanced onboarding lessons also remained under review.

See the [DevX update](https://input-output-hk.github.io/devx-updates/updates/2026-w43/) for more details.

## **HIGH ASSURANCE**

This week, the **high assurance team** published the [Universal Annotation Language (UAL) 1.0 specification](https://github.com/input-output-hk/UniversalAnnotationLanguage/releases/tag/v1.0.0) and made progress on [Blaster’s Plinth integration](https://github.com/input-output-hk/PlutusCoreBlaster/pull/53), delivering complete smart contract demonstrations and [refined counterexample reporting](https://github.com/input-output-hk/CardanoLedgerApiBlaster/pull/24). Work also continued on a [cost-aware CEK engine](https://github.com/input-output-hk/PlutusCoreBlaster/pull/55) designed to evaluate script execution along with input-dependent CPU and memory limits, alongside general performance enhancements and [tooling upgrades](https://github.com/input-output-hk/Lean-blaster/pull/424).

## **RESEARCH**

This week, the **research** **team** hosted an interactive technical workshop on light clients which discussed light client designs for Cardano and their security trade-offs. The [recording](https://drive.google.com/file/d/1QJTnCIJaIKpflnqBeDxPIF7qu62z_gsm/view) is available. If you missed last week’s Cardano R&D session, which provided a Q3 update on CV26 workstreams, you can watch the [recording](https://drive.google.com/file/d/1VA_nD_iX42PBVt6Lv4oO1bh1qRjqlraI/view).
