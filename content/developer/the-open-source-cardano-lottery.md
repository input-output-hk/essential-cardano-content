---
title: The Open Source Cardano Lottery
tags:
  - Open Source
  - Development
  - Lottery
url: https://github.com/lley154/cardano-lottery
image: https://ucarecdn.com/4f75c8c0-06bd-474e-869c-cbb2762233f3/
image_text: Lottery Drum
---

The Open Source Cardano Lottery is a smart contract lottery built using Plutus([https://www.essentialcardano.io/glossary/plutus](https://www.essentialcardano.io/glossary/plutus)) for the Cardano Blockchain. It is a non-custodial lottery where all interactions with the lottery are done directly with smart contracts([https://www.essentialcardano.io/glossary/smart-contracts](https://www.essentialcardano.io/glossary/smart-contracts)) and do not require any 3rd party to manage and hold any lottery funds. Equally important is that the lotto administrator only has the ability to run the lottery and does not have access to the jackpot or treasury to prevent any unauthorized access.

[https://github.com/lley154/cardano-lottery](https://github.com/lley154/cardano-lottery)

The repo has lots of code examples that work on the testnet. In particular some key areas of interest may be:

*   an onchain pseudo random number validator
    
*   a PAB created from bash shell scripts
    
*   working state machine code
    
*   logic splitting between 2 validators by using thread tokens for communication
    
*   performance enhancements to fit the plutus code within the max 16KB TX size limits
    
*   and other tips and tricks
    

Enjoy!
