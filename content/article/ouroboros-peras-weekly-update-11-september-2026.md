---
title: Ouroboros Peras weekly update - 11 September 2026
slug: ouroboros-peras-weekly-update-11-september-2026
tags:
  - "#cardano"
url: ""
image: https://ucarecdn.com/cf515c6f-5543-46ad-b5a0-faa2407a564e/
image_text: "Peras - Weekly Update "
---

## Ouroboros Peras weekly update - 11 September 2026

### **Integration workstream**

Upstreaming of Peras code continued this week.

[Peras PRs 61–66](https://github.com/IntersectMBO/ouroboros-consensus/pulls?q=is%3Apr+state%3Aclosed+label%3Aperas+sort%3Aupdated-desc+is%3Amerged) were merged, containing the bulk of the integration workstream: changes to the extended ledger state and HardFork combinator plumbing.

[Peras 67: Add new Peras methods to ChainDB](https://github.com/IntersectMBO/ouroboros-consensus/pull/2278) was undrafted, and [Peras 68: Rewire DijkstraEra to use Peras V1 types](https://github.com/IntersectMBO/ouroboros-consensus/pull/2276) was opened. Peras 68 depends on [changes](https://github.com/IntersectMBO/ouroboros-consensus/pull/2222) recently merged into `cardano-ledger`.

### **Certificate size estimation and protocol parameters**

Work continued on [certificate size estimation](https://github.com/IntersectMBO/ouroboros-consensus/pull/2187), which is needed to avoid forging certificates that could potentially not fit inside a block body.

A concrete initial set of [protocol parameters](https://github.com/IntersectMBO/cardano-ledger/issues/5966#issuecomment-5586915404) needed by Peras was also defined, along with an implementation draft.

The team documented why other parameters cannot be governable for now and what they depend on.

### **Historical certificates**

The investigation into historical certificate syncing through `ObjectDiffusion` continued, including how out-of-order certificates could be handled by the sliding window protocol given time-limited validation constraints.

Several competing designs have been evaluated, but all of them are inherently complex. The team is currently evaluating whether there is a formal argument to justify the correctness of a simpler design.

The historical certificates team is also working on the first prototype implementation of `PerasImmutableCertDB` and on how to transform the current `PerasCertDB` into `PerasVolatileCertDB`. An initial draft should be ready soon.

### **Network team**

The network team continued adapting `ObjectDiffusion` to clearly indicate when the client is caught up, using a distinct state and the corresponding state transitions.

The last remaining tests are being updated to fit the revised protocol, and internal code review will begin soon.

### **Alternative Cardano implementations**

An initial list of Peras implementation requirements that could help non-Haskell/alternative implementation of Cardano to implement their version of Peras.

### **Peras cryptography and committee selection**

The team is also actively working through considerations around Peras cryptography and the committee selection scheme in light of recent recommendations from ARC researchers.

Follow the latest development activity on the [Peras Tracker](https://peras-tracker.tweag.io/).
