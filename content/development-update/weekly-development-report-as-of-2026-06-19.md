---
title: Weekly development report as of 2026-06-19
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f23cd058-7120-4722-856a-908609ff1c57/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team focused on Mithril integration: nodes running on an on-disk backend can now [export snapshots](https://github.com/IntersectMBO/ouroboros-consensus/pull/2053) in the portable in-memory format, allowing Mithril signers to obtain the agreed format directly from the node. They also implemented a new [snapshot policy](https://github.com/IntersectMBO/ouroboros-consensus/pull/2063) that makes ledger state snapshot timing predictable using agreed-upon cadence values.

On the maintenance side, the team updated `db-analyser` to start [analysis](https://github.com/IntersectMBO/ouroboros-consensus/pull/2061) from a snapshot at a specified slot, avoiding full replays from genesis, and [fixed](https://github.com/IntersectMBO/ouroboros-consensus/pull/2070) a rare snapshot error on epoch-boundary blocks. 

Finally, the team shipped full-text [search](https://github.com/IntersectMBO/ouroboros-consensus/pull/2059) on the consensus documentation website, built as static files with no external service required.

### WALLETS AND SERVICES

This week marked an important milestone for the Lace team as **Lace Carbon entered internal testing**.

Built on the foundations of Lace 2.0, Lace Carbon represents the next evolution of the wallet experience, with a focus on delivering a faster and more intuitive user journey.

Internal teams are now putting it through its paces and providing feedback ahead of a future opt-in release. We're looking forward to sharing more details in the coming weeks.

### SCALING

This week, the **Hydra** team released [2.2.0](https://github.com/cardano-scaling/hydra/releases/tag/2.2.0), bundling the partial fanout implementation and `hydra-tui` revamp. The release also delivers a significantly expanded benchmark suite, including real-world TPS metrics, a `Mixed` UTXO generator, and a new `matrix` sub-command that sweeps cluster sizes and UTXO shapes. The team also unified on-chain membership checks around the BLS accumulator, reducing the snapshot-signing tuple and removing redundant hashing, and started optimizing snapshot processing so script-heavy heads avoid re-evaluating Plutus scripts that have already been validated.

The **Mithril** team completed the [prover input](https://github.com/input-output-hk/mithril/issues/3138) preparation and SNARK [proof verification](https://github.com/input-output-hk/mithril/issues/3140) for the recursive SNARK aggregation primitives and [adapted](https://github.com/input-output-hk/mithril/issues/3147) the certificate chain to support recursive SNARKs. They continued work on creating the SNARK proof with the circuit, wiring the SNARK proof in the aggregate signature, refactoring the preparation of the prover input, adding the missing ancillary data for the IVC aggregate signature creation, and updating the Midnight ZK library audit status for SNARK.

Additionally, they completed the optimization of the [end-to-end tests](https://github.com/input-output-hk/mithril/issues/3151) for SNARK, updated the ledger state snapshot selection in artifacts, upgraded to [Pallas 1.1.0](https://github.com/input-output-hk/mithril/issues/3297), and enhanced support for discontinued signed entity types in the aggregator.

Finally, the team continued work on shipping the Mithril signer node binary in the Cardano node bundle, the release of the 2625 distribution, and the fix for the aggregator switch in the explorer.

### VOLTAIRE 

Candidate registration for constitutional committee elections closes this Sunday, June 21, at 21:45 UTC — and there is a development worth noting. Five candidates have now registered for four available seats, meaning the election is competitive, if only by a narrow margin. This is a meaningful improvement from last week, when the candidate count matched the number of open seats exactly.

Registration is still open. More candidates would strengthen the outcome, and anyone considering running should act now. Waiting until the last minute creates unnecessary risk, especially if there are wallet issues, signing issues, or questions about the registration process.

Once registration closes, DRep voting begins at the epoch boundary on June 23 and runs through July 23. The election uses stake-weighted voting: each DRep may vote for up to four candidates, and each candidate they vote for receives that DRep's full voting power. The four candidates with the highest total voting power at the close of voting will form the election outcome, which will then support an on-chain Update Committee governance action to seat the new members before current terms expire in September.

If you believe you have the experience, judgment, and commitment to contribute to Cardano governance at this level, please consider registering before the deadline:

*   [Candidate registration](https://hydra-voting.intersectmbo.org/cc-elections)
    
*   [Election documentation](https://docs.hydra-voting.intersectmbo.org/)
    
*   [Weekly AMA sessions](https://luma.com/ccelection).
    

### RESEARCH

This week, the **research** team is progressing work on Cardano Vision 26 workstreams and has published a [blog](https://www.iog.io/news/input-output-co-hosts-cryptographic-tools-for-blockchains-workshop) on a recent Cryptographic Tools for Blockchains workshop at Eurocrypt '26.
