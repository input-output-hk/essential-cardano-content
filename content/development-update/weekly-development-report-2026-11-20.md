---
title: Weekly development report as of 2026-11-20
slug: weekly-development-report-2026-11-20
tags:
  - Cardano
  - Weekly development updates
url: ""
image: https://ucarecdn.com/7e7e0370-59e5-4810-891f-174e2f9fd667/
image_text: ""
---

## **CORE TECHNOLOGY**

This week, the **consensus** team simplified Leios endorser-block storage and enabled the fetch server to send stored block bytes without decoding them. Work continued on fetch logic and vote aggregation. In the prototype, adaptive endorsements now reduce block size after a missed quorum and gradually restore capacity after successful endorsements.

The team also released ouroboros-consensus 5.4.0.0 with support for the new ledger release. Version 5.4.0.1 corrects LSM backend IOWAIT accounting so node metrics reflect actual disk wait.

See [this update](https://github.com/IntersectMBO/cardano-updates/pull/860/files) for more details.

## **SCALING**

The **Hydra** team split its off-chain HeadLogic refactor into smaller changes for review. The proposed structure separates protocol rules from execution and persistence. The team also opened independent regression tests to compare protocol behavior and recovery with executable Agda reference models.

The changes remained under review at the end of the reporting period. Full validation and benchmark comparisons were still pending.

See [this update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w46/) for more details.

## **WALLETS**

The **Lace** team prepared Browser Extension 2.5.2 and Mobile 2.5.2 for iOS and Android, targeting public releases for the end of this week or early next week.

The browser update integrates Midnight Wallet SDK 2.0.0 and expands compatibility with newer decentralized applications (DApps). It improves DUST syncing, wallet recovery, and status information, with fixes for failed swaps and NIGHT redemption transaction reviews.

The mobile update adds per-account Cardano sync resets and lets ada sends include eligible staking rewards when needed, with withdrawals shown before confirmation. It also strengthens DApp signing protections and improves hardware wallet compatibility, transaction processing, and balance syncing.

## **HIGH ASSURANCE**

This week, the High Assurance team advanced an [extension to Blaster’s optimizer](https://github.com/input-output-hk/Lean-blaster/pull/472), allowing users to add domain-specific optimization rules without modifying the core. The team also [integrated the native Z3 backend into the Cardano CLI](https://github.com/input-output-hk/cardano-blaster/pull/2), restored the [benchmarking pipeline and published updated results](https://github.com/input-output-hk/Lean-blaster/pull/477), and improved the VS Code extension with [property filtering](https://github.com/input-output-hk/blaster-extension/pull/98) and [context menus](https://github.com/input-output-hk/blaster-extension/pull/112). Work continued on [verifying the solver interface](https://github.com/input-output-hk/Lean-blaster/pull/481).

## **RESEARCH**

The **research team** is working on the CPS portfolio and explainers for the research papers.
