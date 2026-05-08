---
title: Weekly development report as of 2026-05-08
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/99e7bdfb-64db-49e5-bb64-d4eb88a4481b/
image_text: ""
---

### CORE TECHNOLOGY

Over the past few weeks, the **consensus** team has continued working on the Leios prototype development as part of the treasury funding initiative 4. The team completed migrating endorser-block announcements and certification flags from the ledger block to the Praos header, aligning the prototype with the original Leios design (#[1978](https://github.com/IntersectMBO/ouroboros-consensus/pull/1978), ouroboros-leios#[874](https://github.com/input-output-hk/ouroboros-leios/pull/874), cardano-node#[6537](https://github.com/IntersectMBO/cardano-node/pull/6537)). They also [fixed](https://github.com/IntersectMBO/ouroboros-consensus/pull/2017) several bugs in the Leios prototype, helped the system reliability team [spin up a Leios testnet](https://github.com/input-output-hk/ouroboros-leios/issues/879) that is now running the prototype, and continued working on the [voting prototype](https://github.com/IntersectMBO/ouroboros-consensus/pull/1963) as well as on the fix for in-memory LeiosDB performance issues observed during the March demo (ouroboros-leios#[844](https://github.com/input-output-hk/ouroboros-leios/issues/844), cardano-node#[6554](https://github.com/IntersectMBO/cardano-node/pull/6554)). The team is now working on applying [certified endorser blocks](https://github.com/input-output-hk/ouroboros-leios/issues/838) to the mempool. 

Additionally, as part of the Ledger-HD (treasury funding initiative 11), the team refactored consensus-type variables so that ledger tables, transaction inputs, and transaction outputs are indexed by the block type rather than the ledger-state shape, collapsing duplicate type-class instances and simplifying the codebase ahead of Ledger-HD integration (#[2016](https://github.com/IntersectMBO/ouroboros-consensus/pull/2016), #[2019](https://github.com/IntersectMBO/ouroboros-consensus/pull/2019)).

In terms of maintenance and support (treasury funding initiative 17), the team pre-released [Cardano node v.11.0](https://github.com/IntersectMBO/cardano-node/pull/6541) and expanded the [documentation](https://github.com/IntersectMBO/ouroboros-consensus/pull/2011) by adding an explainer on the consensus layer's ticking mechanism. 

### SCALING

This week, the **Leios** team merged the documentation website and development tracker into a [unified site](https://leios.cardano-scaling.org/). Additionally, in their [April session](https://www.youtube.com/live/IYDMqkEPLDs?t=35s), project leads discussed a successful prototype demonstration that achieved significant transaction throughput while testing new features including vote diffusion and included several fixes. The team reported progress on benchmarking and stress testing efforts aimed at optimizing transaction validation and network efficiency across various hardware configurations. They also made technical adjustments to committee selection and cryptographic keys, moving toward more deterministic and smaller certificates for better scalability. Additionally, the team progressed work on network fetching logic and simulation models to ensure robustness against latency and adversarial conditions, and reviewed the development roadmap covering the progression from controlled testing environments toward a production-ready mainnet release.

The **Hydra** team made progress on [partial fanout](https://github.com/cardano-scaling/hydra/pull/2324), including [KZG trusted setup](https://github.com/cardano-scaling/hydra/pull/2582) with G1 accumulator commitments. They [switched](https://github.com/cardano-scaling/hydra/pull/2597) from `list` to `Seq` for faster benchmark runs at higher transaction counts and fixed a file-handle exhaustion issue by ensuring [connections](https://github.com/cardano-scaling/hydra/pull/2588) are closed properly. They also upgraded [Mithril compatibility](https://github.com/cardano-scaling/hydra/pull/2596), added a [fallback](https://github.com/cardano-scaling/hydra/pull/2598) so `nix develop` works on `aarch64-darwin`, and updated the [Pumba](https://github.com/cardano-scaling/hydra/pull/2602) flake to build on modern Mac hardware.

The **Mithril** team completed the [data encoding](https://github.com/input-output-hk/mithril/issues/3191) and state transition tests for the recursive SNARK circuit prototype, as well as the detection of SNARK circuit modifications in the STM library. They continued work on implementing a [SNARK-friendly protocol message](https://github.com/input-output-hk/mithril/issues/3146), the trusted setup validation for the SNARK circuit in the STM library, the implementation of [Schnorr signatures](https://github.com/input-output-hk/mithril/issues/3136) in the STM library, and the in-circuit verification tests for the recursive SNARK circuit prototype.

The team also continued work on robust support for unknown and in-progress signed entity types, as well as enforcement of the [DMQ message ID format](https://github.com/input-output-hk/mithril/issues/3251). They completed the ledger state snapshot conversion tests in end-to-end tests and added support for stable and unstable versions of the OpenAPI specification.

Finally, they accelerated SNARK circuit tests in CI, upgraded [Node.js 20 GitHub Actions](https://github.com/input-output-hk/mithril/issues/3173), and fixed flaky nightly tests and circuit golden tests.

### RESEARCH

This week, the **research** team has [submitted their proposal](https://momentum.cardano.iog.io/proposals/input-output-research) on-chain and published a [blog](https://www.iog.io/news/why-research-matters-scientific-foundations-as-cardano-s-edge-for-growth) on research as one of Cardano’s core competitive advantages.
