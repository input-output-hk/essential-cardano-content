---
title: Weekly development report as of 2026-04-03
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/7b194458-70ca-46fe-965d-5f95df627d98/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **performance and benchmarking** team ran compiler benchmarks on node v.10.6.2 and evaluated new tracing features. They also began developing a new project – `tx-centrifuge`– a transaction submission service designed to generate extremely high, continuous workloads.

Regarding infrastructure, the team addressed minor maintenance tasks, including fixing profiled Nix builds for local benchmarking. In tracing, they separated the new tracing system into its own project, ‘Hermod Tracing’, and released a new library, `cardano-timeseries-io`, which accumulates metrics into queryable time series.

For Leios, the `cardano-recon-framework` (formerly the LTL trace verifier) has now been integrated and is in use. Finally, within node diversity, the formal trace schema definition is nearing merging, while trace forwarding in native Rust remains on hold. 

### WALLETS AND SERVICES

Midnight wallet is now available in **Lace**. This marks a significant milestone for the team, bringing Midnight mainnet access directly into the Lace wallet experience. Users can now create a Midnight wallet, hold Midnight assets, and begin exploring a new model of blockchain privacy alongside their existing Cardano assets.

### SCALING

This week, the **Mithril** team completed [wiring](https://github.com/input-output-hk/mithril/issues/3042) the SNARK proof into the aggregate signature and successfully activated the [SNARK prover](https://github.com/input-output-hk/mithril/issues/3104) on a developer Mithril network. They also continued the [full review](https://github.com/input-output-hk/mithril/issues/2982) of the recursive SNARK circuit prototype, the [impact assessment](https://github.com/input-output-hk/mithril/issues/2803) of SNARK on Mithril protocol security, and SNARK proof generation and verification in end-to-end tests.

Additionally, the team completed the implementation of [examples](https://github.com/input-output-hk/mithril/issues/3100) for Cardano blocks and transactions and continued progressing the client CLI implementation, partial block range support, and signing of the security parameter offset. They also updated the [release process](https://github.com/input-output-hk/mithril/issues/3070) to anticipate unreleased versions of the Cardano node.

Finally, the team removed the legacy `v1` Cardano database backend, updated the [DMQ node](https://github.com/input-output-hk/mithril/issues/3054) to `0.3.0.0`, and continued work on the upgrade to Cardano node v.10.7.

### VOLTAIRE

Applications for the 2026 **Intersect** committee elections are open now and close on April 17 — so if you've been weighing it up, this is the moment to act. Five seats are available across each of seven standing committees, covering budget, civics, growth and marketing, membership and community, open source, product, and technical steering, plus two seats on the Intersect steering committee itself. Each committee plays a genuine advisory role in shaping how Cardano evolves, and a two-year term means your contribution will have real depth and continuity.

If you're still unsure whether you're the right fit, each committee is hosting both an X Space and a Virtual Hub session before the deadline — a chance to hear directly from current members, ask questions, and get a clearer sense of where your skills belong. Find and register for all sessions via the Luma calendar at [](https://luma.com/intersect-committee-elections)[luma.com/intersect-committee-elections](//luma.com/intersect-committee-elections). Full details on available seats and how to apply are on the [Intersect Knowledge Base](https://docs.intersectmbo.org/intersect-knowledge-base/intersect-membership/intersect-voting-events/2026-intersect-elections).

### RESEARCH

Read more about IOR’s Professor Aggelos Kiayias, **2026 IACR Fellow,** in the latest [blog post](https://www.iog.io/news/defining-the-frontiers-of-cryptography-professor-aggelos-kiayias-recognized-as-2026-iacr-fellow).
