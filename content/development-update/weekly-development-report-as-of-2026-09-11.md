---
title: Weekly development report as of 2026-09-11
slug: weekly-development-report-as-of-2026-09-11
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/15365be4-ee9d-4ade-9713-c8fd8368bba5/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team made several improvements to the Leios prototype. They rewrote the download decision logic so nodes bound both the time and memory spent on pending downloads, prioritize the newest endorser blocks, and avoid saturating the same peer with concurrent requests. They also added a transaction cache so nodes don't re-download transactions they have already seen. The team fixed a second cause of unwanted disconnects between honest nodes – syncing nodes now pause requests for Leios messages until they catch up – and capped the time the mempool spends reading a ledger state from disk, preventing block production delays.

On the storage side, ledger state garbage collection now runs in its own thread, preventing snapshot delays from blocking memory cleanup.

Finally, the team released `ouroboros-consensus` 4.2.0.0 and followed up with 4.2.1.0, which fixes a silent failure in the `GetGenesisConfig` query that had caused `cardano-wallet` to stop following the chain against node v.11.0.1.

See this [update](https://updates.cardano.intersectmbo.org/2026-09-08-consensus) for more details.

### SMART CONTRACTS

This week, the **Plutus** team merged casing on `Data`: a `case` on a `Data.Constr` value now dispatches directly on the constructor tag, which, combined with the recently added `dropList`, significantly reduces the cost of consuming `Data`\-encoded values. This is a Plutus V4 feature, and work is also underway on specifying casing on built-in types in the Plutus Core specification.

Work on the `Value` built-ins (CIP-0168) continues: the team added the `keepPolicies` and `dropPolicies` built-ins and merged the cost model for `policies`, with cost models for `keepPolicies` and `dropPolicies` in progress. As with other new built-ins, these are gated behind a future protocol version and cannot be used on-chain until the Dijkstra era.

On the Plutus V4 `ScriptContext` front, the team is implementing a different encoding for product types using `List` instead of `Constr`, making them cheaper to decode and improving the usability of the certifier in the `uplc` and `plc` tools.

The **Cardano** **High Assurance** team released the first stable release of Plu-stan, the static analyzer for Plutus, with additional rules to cover more common pitfalls developers face when first developing their DApps. It comes with an updated version of the Visual Studio Code extension.

Work on the Property-based testing tool is still ongoing, with several critical features being finalized for the Visual Studio Code extension: a test tree view to quickly identify test-run results, and an intuitive transaction graph view to review failed tests at the transaction level, as a user would draw them. The extension is available for very early testing to interested users.

Finally, in the formal verification tool, the team fully axiomatized BLS functions and hashing functions to enable high-level proofs that use the expected security properties of those primitives. They are also continuously testing and pushing optimizations on lean-blaster to scale the tool to larger and larger scripts.

### DEVELOPER EXPERIENCE

This week, the **developer experience** team delivered milestone DX.02 (the `cardano-init` setup CLI specifications and proof of concept) and published the first open beta release, receiving strong community support.

Work continued to harden and expand the tool selection, including ongoing integration of Dingo as a devnet provider. The `contracts-library` reached a significant milestone by completing two reusable protocol implementations, each delivered with on-chain and off-chain code, specifications, and examples: a settings protocol for managing any protocol's configuration, and a governance and DAO protocol for fully on-chain protocol governance.

On the Cardano Foundation's Developer Portal, nine of twelve intermediate onboarding lectures are now complete.

[Dive deeper](https://input-output-hk.github.io/devx-updates/updates/2026-w36/) for more details.

### SCALING

This week, the **Hydra** team released `2.4.0` and immediately followed with `2.4.1`, a security release. Anyone running `2.3.0` or `2.4.0` should upgrade to `2.4.1`.

`2.4.0` introduced security fixes to incremental commits: a snapshot now identifies exactly which deposit it approves, and the on-chain validators enforce that an increment can only claim the deposit the parties actually signed. As this changed the Hydra scripts and snapshot signature payload, the upgrade was breaking – open heads must be closed and fanned out before upgrading, and the persisted `hydra.db` migrated to CBOR on first start with no downgrade path.

`2.4.1` superseded `2.4.0` the day after a vulnerability was identified: when confirming a snapshot, `hydra-node` re-applied transactions through an optimized path that skipped signature verification and Plutus script evaluation. An unvalidated transaction could reach that path, allowing a malicious head participant to get a transaction with an invalid signature or a failing script into a confirmed snapshot and steal funds. `2.4.1` removes the optimization and fully validates all transactions when processing a snapshot request. It is a drop-in replacement for `2.4.0` with no changes to scripts, snapshot signatures, or database format.

The release also bundles this quarter's accumulated work, including the CBOR database and binary client API, Blockfrost performance improvements, Linux/arm64 Docker images, the Typst/Agda specification, and several deposit-handling and validity-window fixes.

See this [update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w36/) for more details.

### RESEARCH

This week, the research team are preparing to present the following papers at two world-renowned conferences:

[MARBLE 2026](https://www.marble-conference.org/marble2026)

*   [Strategic Validator Liquidation in Proof-of-Stake Tokenomics](https://www.iog.io/papers/strategic-validator-liquidation-in-proof-of-stake-tokenomics): Lingxiao Zhao, Madalina Sas, and Carmine Ventre.
    

[SCN 2026](https://scn.unisa.it/scn26/)

*   [Adaptively Secure Fast Settlement with Dynamic Participation and Self-Healing](https://www.iog.io/papers/adaptively-secure-fast-settlement-with-dynamic-participation-and-self-healing): Christian Badertscher, Sandro Coretti-Drayton, Peter Gaži, Aggelos Kiayias, and Alexander Russell. 
    

The team also hosted the data availability technical (DA) workshop, which covered on-chain DA requirements for Cardano’s growing layer 2 ecosystem. If you missed this workshop, you can watch the [recording](https://x.com/IOGroup/status/2097610354012393647). 

Stay tuned for more technical workshops coming soon!
