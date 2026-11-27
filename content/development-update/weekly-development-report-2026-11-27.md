---
title: Weekly development report as of 2026-11-27
slug: weekly-development-report-2026-11-27
tags:
  - Cardano
  - Weekly development updates
url: ""
image: https://ucarecdn.com/fcabb7c9-4849-4d24-aacc-f007f8102f53/
image_text: weekly development report as of 2026-11-27
---

## **CORE TECHNOLOGY**

This week, the **ledger** team added validation rules for Leios endorser blocks and corrected the block header hash so it covers only the header body and its signature. The team also implemented ledger support for self-usable transaction outputs (CIP-172) and updated a Dijkstra helper to report outputs from transactions inside a batch.

See [this update](https://updates.cardano.intersectmbo.org/2026-11-25-ledger/) for more details.

The **performance and tracing** team benchmarked Cardano node 11.2.1 against 11.1.1. Node process memory was 14% lower under saturation in the benchmark, and writing a ledger snapshot no longer caused the large temporary spike in live memory seen in 11.1.1.

The team also ran initial benchmarks for Dijkstra features, including nested transactions and reference script pricing. In a separate Leios cluster test, nearly every endorser block was certified under sustained, heavy submission pressure after a performance optimization.

See [this update](https://updates.cardano.intersectmbo.org/2026-11-26-performance-and-tracing/) for more details.

## **SCALING**

The **Hydra** team merged a fix for tracking funds withdrawn from a Hydra Head. It now uses the output references from the Cardano transaction that returns the funds. The team added regression tests for withdrawals that produce multiple outputs. Work on the HeadLogic refactor was still in review at the close of the reporting period.

See [this update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w47/) for more details.

## **DEVELOPER EXPERIENCE**

From November 9 to 22, the **developer experience** team expanded testing for cardano-init v0.4.1 to cover more tool combinations and verify Windows installation commands. The team also completed a second review of six Contracts Library examples, merged fixes into the integration branch, and expanded automated checks for changes to that branch.

See the [November 9 to 15](https://github.com/input-output-hk/devx-updates/blob/main/content/weekly/2026-W46.md) and [November 16 to 22](https://github.com/input-output-hk/devx-updates/blob/main/content/weekly/2026-W47.md) updates for details.
