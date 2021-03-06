---
title: Soft fork
tags:
  - "101"
  - ada
  - Blockchain
  - Alonzo
  - Cardano
  - Code
  - Ecosystem
  - Glossary
  - Governance
  - Hard fork
  - Layer 1
  - Layer 2
url: ""
image: ""
image_text: ""
---

A modification to the software protocol that renders previously valid transaction blocks invalid. A soft fork is backwards-compatible since old nodes will identify the new blocks as legitimate. In contrast to a [hard fork](https://www.essentialcardano.io/glossary/hard-fork), which needs all nodes to update and agree on the new version, this type of fork merely means a majority of miners to update in order to enforce the new regulations.

Understanding soft fork usage

Soft forks are frequently used to add new transaction kinds, requiring only that the participants (e.g., sender and recipient) and miners comprehend the new transaction type. This is accomplished by presenting the new transaction to older clients as a "pay-to-anybody" transaction (in a special form) and convincing miners to consent to refuse blocks containing these transactions until the transaction verifies under the proposed regulations. Pay-to-script hash (P2SH) was implemented to Bitcoin in this manner.
