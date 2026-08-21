---
title: Weekly development report as of 2026-08-21
slug: weekly-development-report-as-of-2026-08-21
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/a3eac03b-65b7-49b1-8787-9d608f6c5eea/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **ledger** team continued advancing Leios support by extending the pool distribution to include the corresponding BLS key and per-pool BLS-attributed stake, making BLS-related pool information available wherever pool distribution data is consumed.

The team also began groundwork for a broader refactor of predicate failures toward standalone, reusable units shareable across rules and eras, with sub-transactions in Dijkstra as the initial target. They also relaxed CBOR decoders to accept indefinite-length encodings, making them tolerant of structurally equivalent CBOR variants.

On the testing side, the team extended sub-transaction test coverage, re-enabled several conformance test suites following generator fixes, and strengthened serialization tests in Dijkstra. See more [details here](https://updates.cardano.intersectmbo.org/2026/08/19/ledger#high-level-summary).

### LEIOS

Over the past few weeks, the **Leios** team completed the Earth phase of MusashiNet, the public testnet taking the Ouroboros Leios prototype to production-grade code. The phase ran 41 days from the June 23 launch, producing over 127,000 blocks and nearly 8,000 on-chain certificates, with pool participation growing from three to 63. Under synthetic load, the network peaked at 26.8 TxkB/s against the 4.51 TxkB/s the mainnet can reach with Praos alone – roughly six times current throughput, with parameters still at cautious initial values. The team shipped 12 releases in eight weeks.

Across the phase, the team hardened the prototype against the conditions only a live network exposes. They improved the node's database connection handling to eliminate a memory leak under sustained load, stabilized certificate validation so that syncing nodes reliably follow a chain carrying endorser blocks, and stopped the Haskell node re-encoding blocks on their way to disk, restoring byte-for-byte agreement across node implementations. Error handling was revised so that invalid input from an external peer results in a logged rejection rather than a halted process, and the mempool was redesigned to revalidate transactions off-chain, avoiding the lock the forge loop requires and keeping block production responsive as the mempool fills. All changes will go into testing during the Water phase, which is now open on a fresh chain.

The team is now finalizing a blog post covering the path to mainnet so far, with a detailed account of the challenges and their resolutions.

### SMART CONTRACTS

The **Cardano High Assurance** team has been implementing the test tree, table results, and coverage views for the property-based testing extension, which will provide a brand-new user experience when using the testing tool.

The team also implemented a few more rules for the plu-stan static analyzer, bringing more automated checks for Plinth developers.

Finally, the team has been building new, more optimized formalizations of the cryptographic primitives for automated formal verification, enabling better usability and faster proofs. The team is also investigating several ideas to optimize Blaster to enable proof of larger scripts, paving the way for proof of several scripts as committed in the 26/27 Blaster roadmap.

### DEVELOPER EXPERIENCE

This week, the **developer experience** team delivered a significant `cardano-init` update, roughly doubling the tool selection and introducing a shared protocol to ensure on-chain and off-chain tools work together consistently.

The team also added Plinth as an on-chain tool, Evolution SDK and Tx3 as off-chain options, and shipped a compatibility check that validates whether the selected tools and data provider work together – catching mismatches before project generation. Every scaffolded project now includes a stack-specific `AGENTS.md` file to guide both AI agents and developers through the project's interfaces and workflow. The CLI also received a full visual redesign with clearer error messages and improved diagnostics.

On the reliability side, the team added automated compliance tests for every template in the registry, fixed the `doctor` command to correctly recognize Tx3 projects, and merged the experimental-tools opt-in gate from last week.

The `contracts-library` continued at a steady pace with 15 commits, including a pull request to implement configuration parameter management. The Cardano Foundation's Developer Portal onboarding flow advanced with six further commits, and the team updated `cardano-dev-skills` – the knowledge layer that helps AI agents work within Cardano projects – adding support for Plinth, Tx3, and a new scalability skill.

Read the [full update](https://input-output-hk.github.io/devx-updates/updates/2026-w33/) for more details.

### SCALING

This week, the **Hydra** team delivered a notable performance improvement to the Blockfrost backend ([#2821](https://github.com/cardano-scaling/hydra/issues/2821)), replacing blind sleeps with condition-based polling. A full head lifecycle on preview dropped from over an hour to around 13.5 minutes, publishing from roughly 10 minutes to 32 seconds, and first seeding from around 30 minutes to 40 seconds. The team also fixed a crash under sustained load ([#2819](https://github.com/cardano-scaling/hydra/issues/2819)) caused by an uncaught error in the `etcd gRPC` link, and merged the `rejectLowDeposits` optimization ([#2805](https://github.com/cardano-scaling/hydra/issues/2805)), which is now a single-pass operation with a property test over multi-output UTXOs.

On the maintenance side, the team fixed a long-standing CI reliability issue ([#2811](https://github.com/cardano-scaling/hydra/issues/2811)): test port sentinels are now close-on-exec, preventing spawned subprocesses from inheriting bound ports – a bug responsible for 16 of the last 25 hydra-node CI failures. Flaky etcd, TUI, and chain-sync tests were also fixed, and `withTempDir` now cleans up atomically on success ([#2813](https://github.com/cardano-scaling/hydra/issues/2813)).

Finally, the team fixed some bugs and progressed work on benchmark reliability, opening several pull requests ([#2827](https://github.com/cardano-scaling/hydra/issues/2827), [#2828](https://github.com/cardano-scaling/hydra/issues/2828)) to fix timing units, pin seeds, and improve end-to-end benchmark comparisons.

### RESEARCH

This week, the **research** team is preparing for their next virtual technical workshop, details of which will be released soon.

Additionally, two research papers by Aggelos Kiayias have been presented at [Crypto ‘26](https://crypto.iacr.org/2026/) in Santa Barbara, USA: [Fast Difficulty Adjustment in Proof-of-Work Consensus](https://eprint.iacr.org/2026/1116.pdf) by Juan Garay, Aggelos Kiayias, Yu Shen &

[Permissionless Consensus from a Common Random String](https://eprint.iacr.org/2026/1179.pdf) by Damiano Abram, Marshall Ball, Juan Garay, Aggelos Kiayias. New explainers are being written for these papers and will be shared soon.
