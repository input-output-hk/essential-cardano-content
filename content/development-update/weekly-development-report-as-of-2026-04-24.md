---
title: Weekly development report as of 2026-04-24
tags:
  - development
url: ""
image: https://ucarecdn.com/ae6a2242-e295-4eb1-90ea-09396d09a960/
image_text: ""
---

### CORE TECHNOLOGY

This week, IO’s **treasury proposals** went live on the [proposals website](https://momentum.cardano.iog.io/). The teams submitted nine proposals focusing on performance, scalability, and capability improvements, with a funding ask of just under 50% of last year’s and a clear focus on delivery.

Delegated representative (DRep) voting is open now and closes on May 24.

[Explore the full set of proposals](https://momentum.cardano.iog.io/proposals).

This week, the **consensus** team continued Leios prototype development as part of the 2025 Treasury Funding Initiative 4 (Leios implementation). They fixed a crash in the prototype’s fetch decision logic ([#1996](https://github.com/IntersectMBO/ouroboros-consensus/pull/1996)), added cumulative transaction bytes to the ledger state and exposed them as a Prometheus metric – giving operators a direct measure of throughput on the proto-devnet ([#1988](https://github.com/IntersectMBO/ouroboros-consensus/pull/1988), [cardano-node#6536](https://github.com/IntersectMBO/cardano-node/pull/6536)) – and added a confirmed-transaction throughput panel to the proto-devnet dashboard ([ouroboros-leios#859](https://github.com/input-output-hk/ouroboros-leios/pull/859)). They also hardened the prototype’s test suite around endorser-block inclusion to make it easier to extend to upcoming features such as voting ([#1971](https://github.com/IntersectMBO/ouroboros-consensus/pull/1971)), and started aligning the prototype with the original Leios design by migrating the endorser-block announcement and certification flag from the ledger block into the Praos header ([ouroboros-leios#837](https://github.com/input-output-hk/ouroboros-leios/issues/837)). Additionally, the team is investigating a performance bug observed during the March demo, in which the time between forging and storing an endorser block can stretch to minutes, disrupting protocol operation ([ouroboros-leios#844](https://github.com/input-output-hk/ouroboros-leios/issues/844)). A work-in-progress snapshot of the SQLite latency investigation from March was shared, which informs Leios-related storage work ([ouroboros-leios#863](https://github.com/input-output-hk/ouroboros-leios/pull/863)), and the logbook update from the 2026-04-09 consensus office hours was posted ([ouroboros-leios#854](https://github.com/input-output-hk/ouroboros-leios/pull/854)).

As part of the 2025 Treasury Funding Initiative 17 (maintenance and support), the team defined sensible default values for `PerasParams`, simplifying configuration for downstream users ([#1998](https://github.com/IntersectMBO/ouroboros-consensus/pull/1998)). On the documentation side, they added an explanation page describing the data flow between consensus components ([#1955](https://github.com/IntersectMBO/ouroboros-consensus/pull/1955)), published a first iteration of an explanation page covering the Ouroboros Praos consensus protocol ([#1960](https://github.com/IntersectMBO/ouroboros-consensus/pull/1960)), and removed leftover documentation stubs while cleaning up the sidebar on the consensus website ([#1956](https://github.com/IntersectMBO/ouroboros-consensus/pull/1956)). Finally, they released ouroboros-consensus-3.0.1.0 ([#1987](https://github.com/IntersectMBO/ouroboros-consensus/pull/1987)), bumped the node’s consensus dependency to 3.0.1 to propagate recent improvements to cardano-node ([cardano-node#6533](https://github.com/IntersectMBO/cardano-node/pull/6533)), and re-landed the rework of snapshotFromIS as part of ongoing improvements to ledger snapshotting ([#1992](https://github.com/IntersectMBO/ouroboros-consensus/pull/1992)).

### SMART CONTRACTS

This week, the **Plutus** team made several improvements to the UPLC executable. They added support for [hex-encoded scripts](https://github.com/IntersectMBO/plutus/pull/7655) and [blueprint](https://github.com/IntersectMBO/plutus/pull/7685) JSON as inputs, with the ability to optimize all scripts they contain. They also added the ability to [certify optimizations](https://github.com/IntersectMBO/plutus/pull/7692) and generate a certifier report for each optimized validator, addressed [several flags](https://github.com/IntersectMBO/plutus/pull/7682) to give users control over optimization behavior, and enabled evaluation of a script with [user-supplied input](https://github.com/IntersectMBO/plutus/pull/7695) before and after optimization.

The UPLC executable is included with every [Plutus release](https://github.com/IntersectMBO/plutus/releases). While it supports a range of use cases, its most immediately useful feature for most developers is script optimization. Preliminary testing suggests that applying these optimizations to recent mainnet scripts yields, on average, a 10% reduction in execution cost and a 2% reduction in script size. User documentation for the UPLC executable is currently in progress.

The **Cardano High Assurance** team delivered a completely formalized example from the [Invariant0 Capture-the-Flag](https://github.com/Invariant-0/cardano-ctf), showing how users can formalize their own smart contracts and discover vulnerabilities.

### SCALING

This week, the **Mithril** team completed [production readiness](https://github.com/input-output-hk/mithril/issues/3165) preparations for circuit keys and trusted setup in the STM library. They continued work on the [golden tests](https://github.com/input-output-hk/mithril/issues/3125) for the recursive SNARK circuit prototype, enhancements to witness preparation for the non-recursive prover, deterministic proof generation in [golden tests](https://github.com/input-output-hk/mithril/issues/3164), and data encoding and state transition tests for the recursive SNARK circuit prototype.

The team also completed the [explorer update](https://github.com/input-output-hk/mithril/issues/3079) for Cardano blocks and transactions, the [documentation](https://github.com/input-output-hk/mithril/issues/3101) of the Cardano blocks and transactions signature on the website, and the [plan](https://github.com/input-output-hk/mithril/issues/3158) to sunset Cardano transaction certification. They continued work on the upgrade to [Cardano node v.10.7](https://github.com/input-output-hk/mithril/issues/2894) and on the preparation of the next distribution, [2617](https://github.com/input-output-hk/mithril/issues/2967).

Finally, they investigated an issue with signer registration in the SNARK prover, fixed flaky end-to-end tests, and worked on supporting multiple tiers for CI tests.

### VOLTAIRE

In the latest news on the **Intersect** committee elections, 105 candidates are standing for the 37 available seats.

Voting is underway and continues until 12 noon UTC on Friday, May 1.

### RESEARCH

This week, the **research** team is working on their treasury proposal.

Read more about the team’s strategic collaboration with the Archimedes Research Unit in Greece in the latest [blog post](https://www.iog.io/news/input-output-launches-new-blockchain-technology-laboratory-at-archimedes).
