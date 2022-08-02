---
title: "Plutus Pioneer Program - Part 4: State Machine with Plutus (1/2)"
tags:
  - Plutus
  - PeakChain
  - Plutus Pioneers
  - Haskell
  - Script
  - Code
  - StateMachine
  - Smart Contracts
  - EUTXO
  - Tutorial
url: ""
image: https://ucarecdn.com/6a0960bc-4983-46c8-86bd-8b231410dc5f/
image_text: Transitions of the Game represented by the “mkGameValidator”
  function — Implementation without State Machine
---

State Machine is a crucial concept that enables Plutus DApps developers to write more concise and qualitatively better contracts on-chain as well as off-chain. A shorter code means a more readable code and results in a better software quality.

In this blog post, we will present a simple Game in the Cardano Blockchain, and we will implement it with a first approach without a State Machine.

In the next article, we will refactor the code of the same Game and implement it with the State Machine concept and highlight the advantages of this approach.

This concept was presented in the [seventh lecture](https://www.youtube.com/playlist?list=PLNEK_Ejlx3x3Y5xvAsVqq46S9xkHopSGU) of the Plutus Pioneer Program.

# **1\. Modelizing the Game**

In order to emphasize the differences between the code with and without State Machine, Lars presented a Game that will be implemented using Plutus smart contracts.

Two players, Alice and Bob, are playing a very simple game; each has the choice between 0 or 1. If both players choose different numbers, the first player wins; otherwise, the second player wins.

The game’s main challenge is that the first player should reveal his choice in an ambiguous format, so the second player cannot read it.

Here are the proposed game steps to solve the previous issue:

*   **Step 1**: The first player must choose a random nonce. Then they concatenate it with his choice of 0 or 1.
    
*   **Step2**: The second player should reveal his choice of 0 or 1.
    
*   **Step 3:** The first player should reveal the random nonce that he chose in step 1 and prove that the hash he has already delivered in step 1 corresponds indeed to the hash of the concatenation of the random nonce chosen in step 1, and his chosen number 0 or 1.
    

![](https://ucarecdn.com/44dd2fef-96d4-4639-890e-2d4c79b4dadd/-/preview/-/format/auto/-/quality/smart/)

**Figure 1:** Representation of the steps of the Game

![](https://ucarecdn.com/39ba7d5f-72d8-4a50-b3a3-ba2818931aaa/-/preview/-/format/auto/-/quality/smart/)

**Figure 2:** Modelization of the different States of the Game

# **2\. Implementing the Game Without a State Machine**

One of the main challenges when implementing this Game is how to modelize a State.

Before diving deep into the implementation details, it’s worth discussing the differences between Cardano and Ethereum regarding states.

## **2.1. Immutable UTXOs in Cardano**

In Ethereum, states are mutable. Hence, if we try to implement our game in Ethereum, we have to simply change the state after each player’s move. But the notion of mutable states could be potentially a leading source of security issues.

In contrast, in Cardano, we don’t have the notion of mutable states because UTXOs are immutable. The UTXO Model indeed assures a high degree of security and quality for Applications build on Cardano. This advantage is one of the main reasons [why I have chosen Cardano](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-1-cf9ece7ed4ac).

## **2.2. State Modelization in Cardano**

Immutable UTXOs means that we cannot change a UTXO. In fact, we must consume the old UTXO carrying the old state and create a new one with the new state. In this case, we must link the two UTXOs to recognize that they relate to each other and represent a state transition.

The trick here is that the UTXOs should contain the same NFT, which the **gToken** field will present in our newly created “**Game**” data.

![](https://ucarecdn.com/3bc9812a-8ca2-49a3-88c3-02059be1d35e/-/preview/-/format/auto/-/quality/smart/)

**Figure 3:** Part of the on-chain code of our Game

In practice, the UTXO will carry a Datum, called “Game Datum”, corresponding to the actual state of the game, and also carry an NFT, which will act as a link between the UTXOs carrying the state of the game.

Another challenge is that we must identify the UTXO carrying the current state among all UTXOs potentially sitting at the same script address. Indeed, we cannot enforce an address to carry just one unique UTXO.

In fact, the same previously mentioned NFT would help us to identify the UTXO carrying the current state of the game from all UTXOs sitting at the same address.

## **2.3. Implementation of the on-chain code without a state machine**

Moving to the “**GameRedeemer”**, we can check that it represents the logic of our game, based on the GameChoice (Datum corresponding to the State of the game) and the nonce revealed by the first player if he wins.

![](https://ucarecdn.com/b3c1dce6-4f02-4e36-8d61-b4aa606f5cec/-/preview/-/format/auto/-/quality/smart/)

**Figure 4:** GameRedeemer

Now we tackle the main part of our code, which is the “**mkGameValidator**” (Make Game Validator) function, which carries the core business logic of our game. It is composed of all transitions in our Game. Each code block below represents one game transition.

![](https://ucarecdn.com/6a0960bc-4983-46c8-86bd-8b231410dc5f/-/preview/-/format/auto/-/quality/smart/)

**Figure 5:** mkGameValidator (Make Game Validator) function

Here is a description of the four transitions represented by the “**mkGameValidator”** function:

*   **First Transition:** is where the first player has moved, and the second player has to move.
    
*   **Second Transition**: where the first player wins, so he has to reveal his chosen random nonce.
    
*   **Third** **Transition:** where the second player hasn’t moved yet, and the deadline for the game has passed, so the second player wins and claims the funds.
    
*   **Fourth Situation**: where the second player wins, or when the first player didn’t reveal his nonce or missed the deadline, and he indeed loses.
    

## **2.4. Implementation of the off-chain code without a state machine**

Now we can write the off-chain code, allowing us to test the game and simulate its execution using the emulator trace.

The code is a bit long, so I think it’s not worth writing here because we are focused more on describing the concept of state machines.

You can check the whole code in the [GitHub repository for week07](https://github.com/input-output-hk/plutus-pioneer-program/tree/main/code/week07) of the Plutus Pioneer Program.

When we start simulating the game execution, first, we simulate a first case where both players chose the value 0.

![](https://ucarecdn.com/a7eb09e2-5cf7-4735-a937-47e247aa5dde/-/preview/-/format/auto/-/quality/smart/)

**Figure 6:** Execution of our game using the choices Player 1: Zero, Player 2: Zero

We can see that the wallet corresponding to the first player has received almost 100ADA (minus the transaction fees), and the NFT is identifying the UTXO carrying the actual state of the game, which is called, in our case: “STATE TOKEN”.

![](https://ucarecdn.com/106e8a70-71a5-4d26-bb0f-355a1fd841fc/-/preview/-/format/auto/-/quality/smart/)

**Figure 7:** Final balances of the players’ accounts in Lovelace after playing the game

Now, we simulate a second case where the second player wins and check the final balances of the players’ wallets.

![](https://ucarecdn.com/8773ecb6-ae19-471b-8493-93b20a887207/-/preview/-/format/auto/-/quality/smart/)

**Figure 8:** Execution of our game using the choices Player 1: Zero, Player 2: One

![](https://ucarecdn.com/1fa8e93b-f93f-49c7-b938-496b35cb054c/-/preview/-/format/auto/-/quality/smart/)

**Figure 9:** Final balances of the players’ accounts in Lovelace after playing the game

As said previously, in the next article "Plutus Pioneer Program - Part 4: State Machine with Plutus (2/2)", we will refactor the code of the same Game and implement it with a State Machine and highlight the advantages of this approach.

\---------------------------------------------------------------------------

**You can find the original article published in** [PeakChain](https://medium.com/peakchain) **Medium Publication under** [this link](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-7-state-machines-with-plutus-1-2-96a6db743fda)**.**

**To Support this educational content and contribute in the Success of** [PeakChain](https://peak-chain.com/) Automotive Solutions, we appreciate delegating to our [PeakChain Pool](https://www.peakchain-pool.com/), Ticker: \[PKCP\]

**Support also our PeakChain Automotive Solutions in Project Catalyst Fund 9!**

[1- PeakChain Car Wallet Device](https://cardano.ideascale.com/c/idea/414249)

[2- PeakChain Uber on Cardano](https://cardano.ideascale.com/c/idea/414255)

[3- PeakChain Fleet Management Platform](https://cardano.ideascale.com/c/idea/414216)

[4- PeakChain Car-Sharing Platform](https://cardano.ideascale.com/c/idea/414199)

**Author:** [Oussama Benmahmoud](https://twitter.com/@oussbenma), CEO of [PeakSoft GmbH](https://peak-soft.de/) and Founder of [PeakChain](https://peak-chain.com/)
