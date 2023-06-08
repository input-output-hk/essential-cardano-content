---
title: How are Marlowe contracts special?
tags:
  - Smart Contracts
  - Marlowe
  - FAQ
url: ""
image: ""
image_text: ""
---

[Marlowe](https://marlowe.iohk.io/) is based on original, peer-reviewed research conducted by the Marlowe team, initially at the University of Kent supported by a research grant from Input Output Global (IOG), and latterly by an internal engineering team. Marlowe is also a joint collaboration with Wyoming Advanced Blockchain R&D Laboratory (WABL) at the University of Wyoming.

A Marlowe contract is built by combining a small number of building blocks that describe making a payment, making an observation of something in the ‘real world,’ waiting until a certain condition becomes true, and other similar types of concepts.

Formal proofs, extensive testing, and analysis tools provide strong assurances for the safety of Marlowe contracts.

Beyond the notable benefit of being usable by non-programmers, Marlowe contracts are written in the Marlowe language, which has many additional advantages:

-   Ensures that certain sorts of flawed programs cannot even be written by designing those possibilities out of the language.
-   Avoids some of the unanticipated exploits that have been a problem for existing blockchains.
-   More easily checks that programs have the intended properties.
-   Makes sure that the contract will never fail to make a payment that it should.
-   Helps people write programs in the language using special-purpose tools.
-   Emulates how a contract will behave before it is run for real on the blockchain, ensuring that the contract performs as intended through static analysis.
-   Provides valuable diagnostics to potential participants before they commit to a contract.
-   Formally proves properties of Marlowe contracts, giving the highest level of assurance that contracts behave as intended through using logic tools.
