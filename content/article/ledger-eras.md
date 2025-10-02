---
title: Ledger eras
tags:
  - Cardano
url: ""
image: https://ucarecdn.com/71e60b0e-c8b9-40c8-a7a5-44deaeb00de4/
image_text: Ledger eras
---

# Ledger eras

Cardano's hard fork combinator transitions the network through ledger eras that introduce new sets of rules and features. Eras are distinct from the higher-level development phases outlined in the [original Cardano roadmap](https://roadmap.cardano.org/en/).

## Terminology

*   **Development phase** – a broad, roadmap-level theme (for example, [Byron](https://www.essentialcardano.io/glossary/byron-ce8e5b4a), [Shelley](https://www.essentialcardano.io/glossary/shelley-a775613f), [Goguen](https://www.essentialcardano.io/glossary/goguen-a3b9fd2), [Basho](https://www.essentialcardano.io/glossary/basho-b7431a8), and [Voltaire](https://www.essentialcardano.io/glossary/voltaire-b74a08c8)).
    
*   **Ledger era** – a specific set of ledger features introduced by a hard fork and enforced by consensus.
    
*   **Intra-era hard fork** – a focused change that requires a hard fork but does not initiate a new era.
    

When new functionality needs to be introduced to Cardano, the ledger undergoes a [hard fork combinator event](https://iohk.io/en/blog/posts/2020/05/07/combinator-makes-easy-work-of-shelley-hard-fork/). Unlike other blockchains, where hard forks can split the chain and force communities to choose between versions, Cardano’s hard fork combinator ensures a seamless transition with no chain split. This mechanism allows the network to evolve safely while preserving all existing data and history. Besides era transitions, Cardano also supports intra-era hard forks, which enable incremental updates within the same era. Each hard fork introduces a new ledger era, extending Cardano’s capabilities while maintaining continuity and security.

## Development phases and ledger eras

<table style="border-collapse:collapse; width:100%;">
  <thead>
    <tr>
      <th style="border:1px solid #d9d9d9; padding:8px; text-align:left; vertical-align:top;">Development phase</th>
      <th style="border:1px solid #d9d9d9; padding:8px; text-align:left; vertical-align:top;">Focus</th>
      <th style="border:1px solid #d9d9d9; padding:8px; text-align:left; vertical-align:top;">Ledger era(s) and functionality introduced</th>
      <th style="border:1px solid #d9d9d9; padding:8px; text-align:left; vertical-align:top;">Upgrade names (examples)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;"><b>Byron</b></td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Foundational layer</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Byron ledger era: ada transactions, Daedalus and Yoroi wallets, federated consensus</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Byron hard fork</td>
    </tr>
    <tr>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;"><b>Shelley</b></td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Decentralization</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Shelley ledger: stake pools, delegation, community-led block production</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Shelley hard fork</td>
    </tr>
    <tr>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;"><b>Goguen</b></td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Smart contracts</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">
        <ul style="margin:0 0 0 1.25em; padding:0;">
          <li>Allegra: token locking</li>
          <li>Mary: native tokens and multi-asset support</li>
          <li>Alonzo: Plutus smart contracts</li>
        </ul>
      </td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Allegra, Mary, and Alonzo hard forks</td>
    </tr>
    <tr>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;"><b>Basho</b></td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Scalability and efficiency</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Babbage ledger era: reference scripts, inline datums, reference inputs</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Known as the Vasil upgrade</td>
    </tr>
    <tr>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;"><b>Voltaire</b></td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Governance</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">
        Conway ledger era: on-chain governance via
        <a href="https://cips.cardano.org/cips/cip1694">CIP-1694</a>
        <ul style="margin:0.5em 0 0 1.25em; padding:0;">
          <li><b>Chang upgrade</b>: initiated Conway ledger era and introduced the first set of on-chain governance capabilities</li>
          <li><b>Plomin upgrade</b>: extended Conway by enabling the full set of governance actions and decentralized representatives (DReps) on mainnet (epoch 537, protocol version 10.0)</li>
        </ul>
      </td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Chang and Plomin upgrades</td>
    </tr>
    <tr>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;"><b>Future</b></td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Ongoing roadmap</td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">
        <ul style="margin:0 0 0 1.25em; padding:0;">
          <li><b>Dijkstra</b> (planned): Plutus v4, consensus and ledger integration, Conway refactors for transition</li>
          <li><b>Euler</b> (planned): scope TBD</li>
        </ul>
      </td>
      <td style="border:1px solid #d9d9d9; padding:8px; vertical-align:top;">Next hard fork name TBD</td>
    </tr>
  </tbody>
</table>

**Hard fork upgrades** use distinct names for community communication (for example, Chang → Plomin). These names are always mapped internally to a ledger era and protocol version. Hard forks activate a ledger era and may also introduce additional intra-era changes.

## Current status at a glance

*   **Conway**. The current ledger era, initiated by the Chang upgrade and completed with the Plomin hard fork.
    
*   **Dijkstra**. The next ledger era, under active development by the Ledger, Plutus and Consensus teams. This work includes preparations for Plutus v4 and integration hooks for the new era.
    
*   **Euler**. A planned ledger era to follow Dijkstra. Public details remain unfinalized, and both name and scope may change.
    

Future hard fork names will be announced closer to release. The number of future hard forks is roadmap-driven rather than predetermined.

**Where can I track technical progress?**

*   [Weekly development reports](https://www.essentialcardano.io/search?tags=Weekly+development+updates)
    
*   Ledger team updates on [Cardano Updates](https://updates.cardano.intersectmbo.org/)
    

Public ledger [repository](https://github.com/IntersectMBO/cardano-ledger) and [specification](https://github.com/input-output-hk/formal-ledger-specifications).
