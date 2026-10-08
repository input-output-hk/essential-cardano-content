---
title: Weekly development report as of 2026-10-09
slug: weekly-development-report-2026-10-09
tags:
  - Weekly development updates
  - cardano
url: ""
image: https://ucarecdn.com/78330f79-1be5-4fbb-94ef-9218306b6076/
image_text: ""
---

### CORE TECHNOLOGY

This week, the consensus team moved the Leios database to main and split its SQLite backend into modules by job. The mempool now reserves room for an Endorser Block alongside the ranking block, and each transaction carries a second measure for its cost in an Endorser Block. That capacity comes from the protocol parameters in the Dijkstra era and is zero in every earlier era, so mempool capacity in those eras stays the same. The Leios CBOR decoders now reject malformed input from peers, which closes three findings from the Anastasia Labs audit. Two prototype versions, prototype-2026w39 and prototype-2026w40a, are out with performance and shutdown fixes.
On the maintenance side, the team released ouroboros-consensus 5.0 and 5.1.0.0. Version 5.0 includes the reworked Peras API, takes ledger snapshots about once a day on mainnet from a background thread, and moves a mempool transaction from an older era to the current one in a single step. Version 5.1.0.0 traces the snapshot policy at startup and warns when its settings don't suit a network's slot length. Tracing for consensus types now lives in a new ouroboros-consensus:tracing sublibrary, and the database tools read configuration and keys the same way cardano-node does.

### SMART CONTRACTS

This week, the **Plutus** team published release 1.71.0.0. It includes the full Plutus V4 script context, which will be integrated into node release 11.2, and adds Plutus Core language version 1.2.0 along with cost models for keepPolicies and dropPolicies (CIP-0168). The team also opened CIP-0205, which proposes removing scope checking for Plutus scripts. Everyone is welcome to read it and comment, and the team wants as much feedback as it can get.

Casing on built-in types is now specified in the Plutus Core specification, and the guardrail script is smaller and cheaper to run after a switch to BuiltinList and BuiltinPair. Other merged changes added property tests for the V4 script context helpers, fixed the scope check, and fixed a plugin bug that left a variable reference unresolved when parsing a list.

Still in progress: making the uplc and plc executables easier to get by publishing them to CHaP and shipping prebuilt macOS binaries from the Hydra CI, applying script deserialization bounds unconditionally, adding a plugin option that dumps compilation timing, and bringing the specification further up to date.

Check out the [Plutus Core team's update](https://updates.cardano.intersectmbo.org/2026-10-07-plutus-core/) for further details.

### DEVELOPER EXPERIENCE

Over the past four weeks, the **developer experience** team merged two long-running explorations into contracts-library: the DAO and the settings protocol. The settings protocol brought the whole Tx3 off-chain workspace in with it. DAO governance arrived with three validators (stake, proposal, and vote), 2,125 lines of Aiken tests, a Tx3 protocol, and a MeshJS driver with end-to-end tests. Security fixes went in just before the merge. Refunds now use tagged outputs, so two tally transactions can't claim the same refund, vote tallying has limits that stop a proposal from being flooded until it can't be counted, and the design caps the stake datum's locks list. Both protocols got usage guides, and docs/ now has one directory per protocol.

The Intermediate onboarding track is complete. Paulo Bressan's final four lectures cover time, multi-validators, modifying state, and reference inputs and scripts. Every step has a runnable Aiken project, and lectures with an app include a Mesh app as well. The Advanced track opens with Detecting vulnerabilities, a lecture that teaches attacker thinking as a method: readers write each attack as a passing test, fix it, and then find the next hole the fix leaves open. A gift-card shop goes through three versions this way. Two multi-step exercises followed: a splitter that dust tokens can lock up by pushing the cost of reading it past the execution limit, and a vault whose staking rewards can be redirected through a stake part the donor chooses. All onboarding examples now use Aiken v1.1.24 and stdlib v4, and the Advanced lecture is still in review.

The pledge went out to 118 maintainers and gained 13 signatures. It now has 35 signatories, including people from Cardanoscan, Masumi/NMKR, Charli3, Andamio, ADA Handle, NUFI, and Hydra.

Two explorations also moved from spec to code, though neither has merged yet. Event-triggered assets became a tokenized bond: a CIP-113 asset that steps up 4% at each of four annual deadlines and can later convert into a plain native asset. Anyone can submit the schedule update without a signature, and because the payout destination is registered in the token's own datum, a third party can complete a conversion but can never redirect the payout. The bond now has a CIP-113 base, a full Aiken test suite, a Tx3 protocol, and MeshJS end-to-end tests. The smart wallet design was cut down first, then implemented as an M-of-N validator with spending limits. A follow-up spec added pluggable restrictions (withdraw-0 scripts that hold their own state), two example restrictions, and both MeshJS and Tx3 drivers.

[Dive deeper](https://input-output-hk.github.io/devx-updates/updates/) for more details.

### SCALING

This week, the **Hydra** team merged three PRs, with 19 commits across two repos and no releases. On October 2, the team ran the Hydra Technical Workshop as Cardano Foundation Developer Office Hours #80, which completes its Ecosystem Support workstream.

The main fix lets a head that holds tokens minted on layer 2 fan out without stopping the node. A fanout step spends the head output and re-creates it minus the value being distributed. An L2-minted token was never in the head output on layer 1, so subtracting it produced a negative quantity, and the ledger assertion that followed crashed the node. The node now leaves out any output whose value the head output doesn't hold. Everything else still fans out, and outputs carrying L2-minted tokens stay behind, as the protocol requires. A step with nothing to distribute is refused with a clear error, and if it was the first step, the head goes back to closed. More generally, an assertion raised anywhere while building or posting a transaction now reaches clients as an UnexpectedPostTxError rather than taking the node down. Two new end-to-end tests cover the change: one mints tokens inside a head and checks that the node keeps running, and the other deposits tokens minted on layer 1 and checks that they come back on fanout.

The team also corrected what the node reports as fanned out. It had been counting the wallet's change output as well, so the TUI showed what looked like the full fee going back to the fuel key. It now counts only the outputs the redeemer says were distributed. A tidy-up across hydra-node and hydra-tx swapped several comments for more self-descriptive code, for a net 75 lines removed, and one new issue is open to look at whether a snapshot request at the same version can drop or swap a pending incremental action.

See [this update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w40/) for more details.

### RESEARCH

This week, the **research** team attended the [AFT 2026](https://aft.ifca.ai/aft26/index.html) conference in London, where Aggelos Kiayias was the program chair, and the [Reserve Depletion and Security Runway in Proof-of-Stake Systems](https://www.iog.io/papers/reserve-depletion-and-security-runway-in-proof-of-stake-systems) paper by Paolo Penna and Manvir Schneider was presented. 

They are also preparing for the next Cardano Vision 26 technical workshop on Light Clients and the Cardano R&D session later this month. Details and registration pages will be shared soon!
