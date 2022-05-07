---
title: The Open Source Cardano Lottery
tags:
  - OpenSource
  - Development
  - Lottery
url: https://github.com/lley154/cardano-lottery
image: https://ucarecdn.com/50918560-80a1-4257-a301-8148335afe21/
image_text: Lottery Drum
---

The Open Source Cardano Lottery is a smart contract lottery built using plutus for the Cardano Blockchain. It is a non-custodial lottery where all interactions with the lottery are done directly with smart contracts and do not require any 3rd party to manage and hold any lottery funds. Equally important is that the lotto administrator only has the ability to run the lottery and does not have access to the jackpot or treasury to prevent any unauthorized access.

[https://github.com/lley154/cardano-lottery](https://github.com/lley154/cardano-lottery)

The repo has lots of code examples that work on the testnet. In particular some key areas of interest may be:

*   a pseudo on chain random number validator
    
*   a PAB created from bash shell scripts
    
*   working state machine code
    
*   logic splitting between 2 validators by using thread tokens for communication
    
*   performance enhancements to fit the plutus code within the max 16KB TX size limits
    
*   and other tips and tricks
    

Enjoy!
