---
title: Weekly development update as of 2026-07-31
tags:
  - Development
  - Statistics
  - Weekly development updates
url: ""
image: https://ucarecdn.com/16b33cc3-a95d-471a-a337-34d97e3a8e00/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team released `prototype-2026w29` ([#996](https://github.com/input-output-hk/ouroboros-leios/pull/996)), enabling the node to certify and announce endorser blocks inside the forging loop – expected to raise the certification rate and throughput ([#2105](https://github.com/IntersectMBO/ouroboros-consensus/pull/2105)). They also improved testnet stability by addressing an issue with Dijkstra block handling ([#2140](https://github.com/IntersectMBO/ouroboros-consensus/pull/2140)), updated the prototype dashboards with a new endorser-block events graph, and added `CallTrace` instrumentation to the forge thread to make block production easier to trace and profile.

On the protocol side, the team extended the `LeiosNotify` mini-protocol to accept block announcement messages as a step toward the full block-announcement flow ([#2142](https://github.com/IntersectMBO/ouroboros-consensus/pull/2142)), and enriched `typed-protocols` to provide more precise back pressure for pipelined mini-protocols ([#93](https://github.com/IntersectMBO/typed-protocols/pull/93)). The team also documented mempool design considerations for Leios and participated in discussions on high-throughput and tiered-pricing mempool approaches.

Finally, the team aligned the node's default snapshot policy with Mithril's ([#2149](https://github.com/IntersectMBO/ouroboros-consensus/pull/2149)) and added a new `LSMExportPath` configuration option, giving operators control over where LSM data is exported ([#6629](https://github.com/IntersectMBO/cardano-node/pull/6629)).

### WALLETS AND SERVICES

This week, the **Lace** team delivered one of its biggest hardware wallet releases yet. [Lace 2.2](https://x.com/lace_io/status/2080717142740160819?s=20) introduced Bitcoin support for Ledger and Trezor hardware wallets, giving users a simple way to manage both native Cardano assets and Bitcoin with the security of their preferred hardware device. The team also published a dedicated [blog post](https://www.lace.io/blog/your-keys-your-way-lace-now-supports-seedsigner) and a [step-by-step setup video](https://youtu.be/D7SUn30VyX4?si=CyC0JAIVgihgyYmV) for SeedSigner support, helping users get started with air-gapped signing. Rounding out the week, Lace made the results of its independent [security audit](https://www.lace.io/blog/security-you-can-verify-today-and-a-wallet-migration-feature-we-re-building-for-the-future) publicly available, reinforcing its commitment to transparency and secure self-custody.

### SMART CONTRACTS

Over the past few weeks, the **Plutus** team added new built-in functions, improved `Value` support in the ledger API, broadened the conformance test suite, and continued work on the Plutus V4 script context and Plutus V4 language features such as casing on `Data`.

They also implemented two built-ins from recent CIPs: `multiIndexArray` (CIP-0156), which reads several elements of an array in one call, and `policies` (CIP-0168), which returns the currency symbols in a `Value`. Both are gated behind a future protocol version and not yet costed, so they cannot be used on-chain until the Dijkstra era.

The conformance test suite now includes `.flat` files alongside the textual test cases, making it easier to consume for implementations that do not parse the textual format. The `asData` pattern synonyms now use built-in list casing. The `Value` built-in type has been added to the metatheory as postulates, along with a fix to `decEq` that removed a normalization issue consuming over 128 GB of memory when checking certificates.

The Plutus V4 script context definition has been merged, though it remains subject to change. Its `Data` encoding was recently discussed during a Plutus Working Group meeting – the notes are available [here](https://github.com/IntersectMBO/plutus/issues/7342#issuecomment-5039899895). Implementers of alternative node clients, UPLC interpreters, and compilers targeting UPLC are encouraged to review the notes and contribute to the discussion.

Learn more details from the [recent pull requests](https://updates.cardano.intersectmbo.org/2026-07-29-plutus-core/#key-pull-requests-merged).

### DEVELOPER EXPERIENCE

This week, the **developer experience** team delivered 65 commits across all four active deliverables.

On `cardano-init`, the team merged Scalus templates for on-chain, off-chain, and full-stack scaffolding, completing the multi-role support outlined the previous week. They also updated the README with clearer usage examples and opened a PR to verify dependency installers.

The `contracts-library` saw the heaviest activity with 34 commits, as previously cataloged explorations began to take shape as ready-to-audit contract code.

On the Cardano Foundation's Developer Portal, the onboarding flow advanced – the team merged the scaffold, opened the first beginner lecture with runnable Mesh examples, and added an `extractRegion` helper to allow documentation to embed snippets directly from tested example code.

The developer pledge gained momentum this week, with the team making signing clearer and more convenient, adding an Apache 2.0 license, and welcoming four new signatories – including the MeshJS team.

[Sign the pledge](https://input-output-hk.github.io/devx-updates/pledge/) **to support a more unified and collaborative Cardano developer ecosystem.**

### SCALING

This week, the **Mithril** team completed benchmarks for the IVC SNARK recursive circuit and analyzed and optimized the testing strategy for the STM SNARK modules. They also worked on encoding the aggregate signature of the certificate message as bytes, which significantly reduces the size of the certificates.

The team also continued implementing the aggregator CLI commands and the runbook for on-chain configuration parameters, and began creating a local IPFS network for a proof-of-concept distribution of Cardano database artifacts.

Finally, they completed the repository transfer to the Intersect MBO organization. They also continued working on shipping the Mithril signer node binary in the Cardano node bundle, preparing the `2630` distribution release, upgrading to Cardano node v.11.1, updating the DMQ node to `0.7.0.0`, and upgrading the documentation website to Docusaurus `3.10.2` and `tailwind` `v4`.
