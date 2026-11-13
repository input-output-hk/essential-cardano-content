---
title: Weekly development report as of 2026-11-13
slug: weekly-development-report-2026-11-13
tags:
  - Weekly development updates
  - cardano
url: ""
image: https://ucarecdn.com/c252fb40-bcd1-441a-b513-60f23b5b692b/
image_text: ""
---

## **CORE TECHNOLOGY**

This week, the ledger team implemented validation and application of Leios endorser blocks, which carry transactions alongside ranking blocks. The team also exposed a certificate-validation interface and removed owner-signature requirements for pool updates that only change BLS keys.

For Dijkstra, the team introduced a separate mempool transaction representation, switched Plutus V4 evaluation to the V4 interface, and changed multi-asset reference-input pricing from per policy to per byte. Conformance tests now detect when expected failures start passing.

See [this update](https://updates.cardano.intersectmbo.org/2026-11-11-ledger/) for more details.

## **SCALING**

In its November 2 to 8 update, the Hydra team merged an increase in Head capacity from 4,095 to 32,767 outputs, including outputs owed by pending commits and decommits. The larger trusted setup makes this a breaking change for the next release; no new Hydra version was released during the reporting period.

The team also fixed capacity-related snapshot stalls and a database-write deadlock, and reduced startup replay work and memory use. Documentation now explains collateral requirements for Plutus transactions inside a Head. User-defined policies and further snapshot-recovery work remained under review.

See [this update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w45/) for more details.

## **DEVELOPER EXPERIENCE**

The developer experience team's November 2 to 8 update, with follow-ups through November 11, covered cardano-init v0.4.0, released on November 10. Six additional tools brought the registry to 21, with smoke tests covering every DApp tool. The release also improved dependency checks and devnet shutdown.

In the contracts library, the team merged upgradeability support with forwarding across all script purposes. Separate fixes for contract security findings remained on an integration branch at the November 8 cutoff, with regression tests and updated specifications.

Dijkstra readiness work examined Ledger's host library and Aiken tooling. The team reported Ledger compatibility findings upstream without testing a physical device or firmware emulator. Existing Plutus V3 validators remain valid under Dijkstra, while transaction decoding, evaluation, and budgets still need checks against the real node.

See [this update](https://input-output-hk.github.io/devx-updates/updates/2026-w45/) for more details.

## **RESEARCH**

The **research team** is working through the CPS portfolio and continuing to write more explainers for the research papers.
