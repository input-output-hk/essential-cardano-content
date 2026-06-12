---
title: Weekly development report as of 2026-06-12
tags:
  - development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/aae948b9-c21f-42b9-8bd9-04e10442b3a5/
image_text: ""
---

### SMART CONTRACTS

This week, the **Cardano High Assurance** team has finalized a beta version of the [property-based testing tool](https://github.com/input-output-hk/sc-testing-tools) and is pursuing internal testing. The team introduced a testing interface to easily explore a vast variety of scenarios, automated positive testing to verify the contracts meet their specifications, negative testing to ensure the testing interface is not overly restrictive, threat models to automatically discover common weaknesses, and testing coverage to ensure that no line of code was left untested.

The team is working on a Visual Studio code extension that will make exploring the testing outcome easier and debugging faster. They have also been experimenting with developing a complete AI skill that makes the process of writing this testing interface as simple as possible.

### SCALING

This week, the **Mithril** team completed the implementation of the SNARK-friendly genesis certificate and the type-consistency and naming-alignment refactoring for the SNARK recursive circuit. They continued work on the prover input and the SNARK proof verification of the recursive SNARK aggregation primitives, and on adapting the certificate chain to support the recursive SNARK.

Additionally, they completed support for DMQ ledger peers, enforcement of the DMQ message ID format, and a prototype for Cardano node ledger state certification. They also continued shipping the Mithril signer node binary in the Cardano node bundle and updating the ledger state snapshot selection in artifacts.

Finally, the team completed the upgrade of the DMQ node to `0.6.0.0`, removed support for Mithril nodes in the devnet, and continued work on optimizing the end-to-end tests for SNARK.

### VOLTAIRE 

The call is out for more candidates to register for the Cardano constitutional committee. Four seats will become vacant as members’ terms expire in September, and only four candidates have registered for the upcoming election. If no additional candidates register before the June 21 deadline, there will be no competitive election.

This committee is very important to Cardano governance because many governance actions need approval from two-thirds of the constitutional committee.

Several people have already indicated their interest. If you feel you can contribute to this important committee, [register today](https://hydra-voting.intersectmbo.org/cc-elections).

### RESEARCH

This week, the **research team's IOR** proposal for Cardano Vision 2026 was ratified with a confidence vote of [74.96%](https://adastat.net/governances/5ad10ad39f49a0f93ac91e70482f114fdbcbc05b20ac774dbe23a82efbcb820a00). Thank you to all the DReps and the wider Cardano community who voted in favor - your support and confidence are appreciated. Community feedback across all votes is valued and will inform delivery going forward.
