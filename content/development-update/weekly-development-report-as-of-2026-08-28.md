---
title: Weekly development report as of 2026-08-28
slug: weekly-development-report-as-of-2026-08-28
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/de0b5ef8-f4c2-424e-b969-0c67bb8cf147/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team resolved an issue with the attack targeting how nodes announce endorser blocks, which had been causing honest nodes to disconnect from each other ([#2179](https://github.com/IntersectMBO/ouroboros-consensus/pull/2179)). They also extended `db-analyser` to read Leios chains, enabling the tool to replay a chain and report the cost of applying each block, including the transactions of each certified endorser block, their total size, and the time to read them ([#2181](https://github.com/IntersectMBO/ouroboros-consensus/pull/2181)).

On the maintenance side, the team forward-ported the new snapshot interval and mempool allocation fix from the 4.x release line to the `main` development branch ([#2209](https://github.com/IntersectMBO/ouroboros-consensus/pull/2209), [#2215](https://github.com/IntersectMBO/ouroboros-consensus/pull/2215)).

### WALLETS AND SERVICES

The **Lace** team added support for the Keystone hardware wallet, available in both the Lace browser extension and the Lace mobile app. Keystone is an air-gapped device that uses QR codes for signing rather than USB, Bluetooth, or NFC connections, removing the attack surface associated with live data connections. Seed phrases are generated using true random number generators across three separate secure element chips, with an option for users to generate their own entropy manually using dice rolls.

Lace now supports four hardware wallets – Ledger, Trezor, SeedSigner, and Keystone – each taking a different approach to security and connectivity. Read more in the [full blog post](https://www.lace.io/blog/keystone-has-landed-in-lace).

### SMART CONTRACTS

The **Plutus** team published release 1.68.0.0, which includes the Plutus V4 ledger API types. Note that Plutus V4 is still under development, and these types may change before the Dijkstra era.

Getting started with Plinth is now easier: the new [install script](https://github.com/IntersectMBO/plinth-template/pull/85) in `plinth-template` sets up a Plinth project with a single command and handles installing the required tooling. See the updated [documentation](https://plutus.cardano.intersectmbo.org/docs/using-plinth/environment-setup) for details.

Work on Plutus V4 language features continues. The team implemented casing on `Data`: a `case` on a `Data.Constr` value can now dispatch directly on the constructor tag, which, combined with the recently added `dropList`, yields a performance improvement. The team also added the `assetCount` built-in (CIP-0168) along with its cost model, merged the cost model for `multiIndexArray` (CIP-0156), and continued formalizing built-ins in the Agda metatheory.

Feedback on [CPS-0034 – Extending Plutus Core conformance testing](https://github.com/cardano-foundation/CIPs/pull/1244) is welcome.

### DEVELOPER EXPERIENCE

This week, the **developer experience** team delivered the first tagged releases of `cardano-init` – `v0.2.0` and `v0.2.1`, marking the tool's transition from prototype to released product. The web builder surface was dropped, making the CLI the single, focused interface. Two new commands – `cardano-init add` and `remove` – now allow developers to edit a project's composition after generation, swapping or adding tools without starting from scratch. Network selection was also simplified: every project now generates for preview by default, with a one-line environment variable edit to switch networks at runtime.

The first external contributions landed this week, with Chris Gianelloni from Blink Labs opening several pull requests including a new Dingo devnet provider and a cluster of security and reliability fixes.

The `contracts-library` saw 34 commits, with the configuration parameter management pull request still in progress. The Cardano Foundation's Developer Portal onboarding track advanced with 10 further commits. The ecosystem map was updated to include team contacts and maintainer handles for easier community outreach.

As always, check out the [technical report](https://input-output-hk.github.io/devx-updates/updates/2026-w34/) for more details. 

### SCALING

The **Hydra** team delivered two significant performance improvements as part of the CBOR milestone. Persisted event payloads now use CBOR instead of JSON, reducing a real three-node benchmark database by 2.6× (27.4 MB to 10.5 MB), with automatic migration included. The client API also gains opt-in binary CBOR encoding, reducing wire sizes by 2.2–3.1× and speeding up encode/decode by 3–21×; a 1,000-UTXO snapshot decode drops from 46.8 ms to 3.2 ms. JSON remains the default, unchanged.

On the maintenance side, the team unified fuel/funds naming, with hydra-tui's ambiguous --cardano-signing-key renamed to --funds-signing-key. They also worked on several improvements, including a fix for a latent metrics bug in which mistyped Prometheus lookups silently failed, a correction to the published cost table that was underreporting minimum fees by roughly 30%, and a 90% reduction in the tx-cost-diff Nix closure size. Finally, they added a test to verify that partial fanout correctly recovers funds when an unburned token is present.

See [Hydra’s technical report](https://cardano-scaling.github.io/hydra-updates/updates/2026-w34/) for more details.

### RESEARCH

This week, the **Research** team is preparing to host their next session in a series of technical workshops under Cardano Vision 26 on data availability (DA). Registration is now [open](https://luma.com/spwdhvaf) for the DA workshop on September 3, which aims to drive specifications and requirements, including preparing a Cardano Problem Statement (CPS). 

Additionally, the team had two papers accepted to [Asiacrypt 2026](https://asiacrypt.iacr.org/2026/). First, _‘A Tight Analysis of GHOST Consistency’_ by Peter Gaži, Zahra Motaqy (UConn), and Alexander Russell. Second, _‘Crossing with Confidence: Formal Analysis and Model Checking of Blockchain Bridges’_ by Pyrros Chaidos, Pooya Farshim, Denis Firsov, Dimitar Jetchev, Aggelos Kiayias, Markulf Kohlweiss, and Anca Nitulescu.
