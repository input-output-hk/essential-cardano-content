---
title: Weekly development report as of 2026-09-25
slug: weekly-development-report-2026-09-25
tags:
  - Weekly development updates
  - Cardano
url: ""
image: https://ucarecdn.com/c4bb54f8-4696-4fcc-8fe6-2bb3ea7d7fa3/
image_text: ""
---

## CORE TECHNOLOGY

This week, the **consensus** team split the Leios prototype's database into two files, one for data that can still be rolled back and one for settled data, with certified Endorser Blocks moving from the first to the second in the background; operators can put each file on its own disk. Garbage collection now runs in two paced steps, marking rows and then deleting them in batches, instead of blocking the node. db-synthesizer builds an actual Leios chain now, filling blocks, voting on Endorser Blocks, and storing the ones it forges, and db-truncater can truncate that same Leios database and drop orphaned transactions when cutting a chain back to a given slot.

Block forging also moved out of the node kernel into its own module with named steps, same behavior but easier to instrument and reuse. Separately, the team dropped node-to-client protocol support below v23, which shipped with node 10.7.0 in March 2026, removing legacy code that no checked client still needs.

## SMART CONTRACTS

This week, the **Plutus** team closed out several September milestones. A new with-crypto cabal flag lets Plinth and Plutus build without the system crypto C libraries, and the uplc certifier got further usability work. Other merged changes covered Data.List encoding for single-constructor ledger types, more V4 helper functions and test cases, efficiency and consistency fixes to Data.AssocMap, deserialiser optimizations, and checkpoints in the UPLC inliner.

Still in progress: cost models for keepPolicies and dropPolicies (CIP-0168), a CIP to drop the scope check during script deserialization, shape-safety for Data.AssocMap's FromData, exact arity checks in generated FromData, and continued work on built-in pattern matching (CIP-0194) and casing on built-in types.

Check out [the Plutus Core team’s update](https://updates.cardano.intersectmbo.org/2026-09-23-plutus-core/) for further details.

The **Cardano** **High Assurance** team worked on finalizing the release of the property-based testing extension, with its latest features, the Transaction Graph view and the coverage report, now reviewed and merged. [A new tutorial for the testing tool](https://github.com/input-output-hk/sc-testing-tools-tutorial) is also available for newcomers (and their trusty LLM friends).

Over the past few weeks, the team also developed a new set of static analysis rules for plu-stan. This work is currently under review, with a new release expected next week.

On the automated formal verification side, the team has invested significant effort in a complete rework of the higher-order function formalization to boost Blaster's performance. They also fixed a few bugs that mainly affected power users working on very specific kinds of theorems. In addition, the team is improving the Z3 and CVC5 backend solvers, with several patches already merged. These patches directly benefit formal methods engineers around the world, while also delivering major improvements to the automated proof of Cardano smart contracts.

## SCALING

This week, the **Hydra** team merged five PRs, one opened (and merged same day), 37 commits across two repos, no releases. The compiled head validator script was regenerated (a hash bump with no cost or behavioral change), and last week's fanout guard and adversarial model testing PRs were both merged.

The main fix addressed a fund-lockout: a user's deposit through the Mesh SDK went unobserved and sat stuck at the deposit script for three hours after coverFee topped up an under-minimum output but left its datum at the original value, so the node's value-versus-datum check rejected it. The fix validates the deposit before submission, fails fast with a new error naming the shortfall, and adds a way to decode already-stuck deposits for manual recovery.

The rest of the week went into test infrastructure: nix flake check now runs the Haskell test suites directly, and 13 slow end-to-end tests were replaced with 30 unit tests, cutting about 114 seconds of test time down to roughly 1.3 seconds. Writing the replacements exposed several things the old tests had only covered by accident, most notably that all 39 cases of which internal events reach clients, and in what form, were untested.

Read [this Hydra update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w38/) for more.

## WALLETS

This week, the **Lace** team released Lace 2.3, making things feel smoother, clearer, and more reliable across the wallet. DApp connections now survive the wallet's background process restarting mid-request, with already-confirmed transactions recognized instead of reported as failures, and connected DApps correctly notified when the active account changes. The staking pool browser adds estimated annual rates and a combined recommendation score for ordering, and the DRep browser now orders by quality signals rather than stake weight, hiding policy-excluded DReps from the main list while keeping them searchable by ID.

Hardware wallet support improved across Ledger, Trezor, Keystone, and SeedSigner, including separate on-device certificates for stake registration and delegation and better handling of the extra signatures air-gapped script-based wallets need. Balance and sync displays were cleaned up so accounts show progress instead of appearing empty, and Midnight accounts gained a manual sync reset along with fixes to DUST fee calculation and a background state-write bug.

[Read this blog post](https://www.lace.io/blog/lace-2-3-small-refresh-big-changes) for more on the latest Lace release.

## RESEARCH

This week, the **Research** team hosted an interactive technical workshop on Cardano governance. If you missed this workshop, you can watch the [recording](https://drive.google.com/file/d/1KfjV62dnnpL4225Ha7vqFLkBV1AVVuyO/view). Stay tuned for more technical workshops from IO Research.
