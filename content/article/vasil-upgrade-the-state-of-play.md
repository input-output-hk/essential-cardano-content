---
title: Vasil upgrade - the state of play
tags:
  - Cardano
  - Development
  - vasil
  - Hard fork combinator
url: ""
image: https://ucarecdn.com/d54d4bff-1cda-4067-9b6d-24811a874d34/
image_text: the Cardano logo
---

**Original author:**

[Nigel Hemsley](https://iohk.io/en/blog/authors/nigel-hemsley/page-1/) - Head of Delivery and Projects

Originally published on [IOHK.io](//IOHK.iohttps://iohk.io/en/blog/posts/2022/06/20/vasil-upgrade-the-state-of-play/): June 20, 2022

**Blurb**:

Very close but a little further still to go. Here’s an update on the progress towards the Vasil upgrade

**Article**:

On Friday, the core Input Output Global (IOG) team working toward the Vasil upgrade held its regular end-of-week evaluation call. Today (Monday, June 20) was the latest date that we could facilitate a Cardano testnet upgrade before the next epoch boundary, so we agreed to re-evaluate the latest status this afternoon, taking into account the work our engineers did over the weekend.

The IOG engineering team is extremely close to finalizing the core work, with just seven bugs still outstanding to complete the hard fork work, with none currently ranked as ‘severe’. After some consideration, we have agreed NOT to send the hard fork update proposal to the testnet today to allow more time for testing.

To date, we’ve managed to get through the majority (approx 95%) of our [Plutus V2 test scripts](https://github.com/input-output-hk/cardano-node-tests/issues/1079). However, we still have a few outstanding items that we need to run to confirm everything is working as expected. We have determined we'll need a few more days for this. This puts us behind schedule on our previously communicated target date of June 29 for a mainnet hard fork.

Since the start of June, we have been successfully running an early build of the new node (which includes diffusion pipelining and the new Plutus v2 CIPs among other enhancements) as a semi-public Vasil developer testnet (Devnet). We now have some 35 developers from across 27 projects testing their DApps and helping identify any issues, along with 16 stake pool operators (SPOs) supporting. We’re also working closely with some of the leading tool/API providers, including [Blockfrost](https://blockfrost.io/), Cardano Serialization library (EMURGO), and Cardano Multiplatform Library (dcSpark). We want to call out the work of Mlabs and Dquadrant in particular for providing great support throughout the process. This developer testnet stage puts us in a good position when it comes to Plutus code compatibility and functionality. This valuable work will continue on this development testnet over the next few weeks.

The work on Vasil has been the most complex program of development and integration to date, from several angles. It's a challenging process that requires not only significant work from core teams but also close coordination across the ecosystem.

The final decision to hard fork the Cardano Testnet will be made – in consultation with members of the SPO and DApp development community – against 3 key criteria:

1.  No critical issues outstanding on node (including ledger, CLI, consensus, etc.) or our internal audit function,
    
2.  Benchmarking and performance-cost analysis is acceptable, and
    
3.  Community (including exchanges and DApp projects) has been properly informed and has had sufficient time to prepare for the hard fork combinator event.
    

The project continues to track well against these criteria. Once we can comfortably and confidently tick all these boxes, we can move forward and hard fork the Cardano testnet, marking the final countdown to the mainnet hard fork. The Cardano Foundation integration team leads this process and typically aims to give exchanges 4 weeks to finish their own integrations/updates. The Pareto principle tends to be followed here - aiming to achieve 80% exchange compliance (by liquidity) before mainnet hard fork thus minimizing inconvenience for users while recognizing different exchanges can work to different timelines.

Today, IOG and the Cardano Foundation have agreed on a new target date to hard fork the testnet at the end of June. Once completed, we will then allow four weeks for exchanges and SPOs to carry out any required integration and testing work. This is only reasonable and should not be rushed. The working assumption should therefore now be a Cardano mainnet hard fork occurring during the last week of July.

We recognize that this news will be disappointing to some. However, we are taking an abundance of caution to ensure that we do this deployment correctly.

As we have consistently communicated, and most in the community recognize, no timelines can be absolute in software development. Quality and security must remain paramount. If more time is needed to get the core code right - and ensure all ecosystem players (SPOs, DApp projects, tools, exchanges, etc.) are fully comfortable – so be it. Giving the process longer is the only responsible thing to do.

The IOG and Cardano Foundation teams will continue to work closely with the developer community and exchanges as we draw closer to the Vasil hard fork on mainnet. And to keep the updates to the community coming. Thanks to all of you for your support.
