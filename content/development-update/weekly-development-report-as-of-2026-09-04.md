---
title: Weekly development report as of 2026-09-04
slug: weekly-development-report-as-of-2026-09-04
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/53955457-1185-4986-8a86-291265e168ec/
image_text: ""
---

### CORE TECHNOLOGY

Last week, the **performance and tracing** team benchmarked the Cardano node v.11.1.0 and analyzed both release and pre-release performance. The benchmarks showed reduced process CPU usage, alongside an increase in resident set size, which is being addressed in the v.11.1.1 patch release.

The team also enhanced beacon benchmarking with metrics that separate ledger-tick and disk-access times for UTXO lookups, and replaced its Cairo-based plotting backend with gnuplot to improve portability and reduce dependencies. For Leios, they delivered on-disk LedgerDB transaction validation benchmarks, including disk I/O, memory, and block I/O measurements, and continued work on a self-contained benchmark package that can run on SPO hardware without Nix or network access. In tracing, implementation of the cardano-tracer alert manager is now underway, following the earlier design work. 

### SCALING

This week, the **Hydra** team made significant progress on the specification stack, moving the specification from LaTeX to Typst and formalizing it in Agda. They also added differential testing between the Hydra node and the validator, along with a machine-checked reference, strengthening confidence in the implementation and specification. The stack is part of the maintenance and developer experience work and is now integrated.

Additionally, the team improved reliability and performance across Hydra, including Blockfrost query caching, script integrity fixes, stricter UTXO value handling, and improvements to benchmark consistency. They also reduced smoke test execution time and continued progress on partial fanout, including more efficient chunk-size searches and broader property testing.

Finally, the team improved operational support by publishing native Linux ARM64 Hydra node images alongside AMD64 images and enhancing tracing around the KZG trusted setup. They also redeployed hydra-explorer to EC2 and made further improvements to documentation and testing.

For a detailed breakdown, see this [technical report](https://cardano-scaling.github.io/hydra-updates/updates/2026-w35/).

### RESEARCH

This week, the **research** team held the second in a series of technical workshops under Cardano Vision 26, which covered data availability requirements, use cases, and specifications. It also included preparing a Cardano Problem Statement (CPS), roadmap discussions, and implementation handover. This workshop was hosted by Fergie Miller, director of research partnerships, and Giorgos Panagiotakos, research fellow at Input Output Group.
