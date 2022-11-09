---
title: Testing Plutus Smart Contracts (1/3)
tags:
  - "#ProjectCatalyst"
  - Plutus Pioneers
  - Plutus
  - PeakChain
  - Smart Contracts
  - Testing
  - Haskell
url: ""
image: https://ucarecdn.com/590cbd86-e0fc-48e2-b31f-ca067ac7b339/
image_text: ""
---

To guarantee secure and high-quality smart contracts, rigorous testing strategies should be implemented. These will significantly differ from standard testing techniques typically used in low-risk web 2 applications.

Testing in Plutus has been be thoroughly covered in the [8th lecture of the Plutus Pioneer Program](https://www.youtube.com/playlist?list=PLNEK_Ejlx3x0UIixvEQG2Y2mmFL6__pEJ).

[My background](https://www.linkedin.com/in/oussama-benmahmoud-43693926/), which is largely in software quality in test automation, means I was ecstatic to discover the blockchain testing concepts, especially with Plutus.

In three Plutus Testing related articles, we will go over special techniques on how to test Plutus smart contracts using the emulator trace, calculate test coverage, the notion of optics and lenses, and Property Based Testing.

# **1\. “Manual” Testing of a Token Sale Smart Contract**

## **1.1. Token Sale Use Case Description**

To show testing strategies, in the [8th lecture of the Plutus Pioneer Program](https://youtube.com/playlist?list=PLNEK_Ejlx3x0UIixvEQG2Y2mmFL6__pEJ), Lars presented a Use Case implementation with State Machine, an example of a Token Sale.

In this example, a seller wants to buy a certain amount of Tokens by locking them in a contract and then setting their prices. In this way, the seller is able to retrieve their locked Tokens at any time.

![](https://ucarecdn.com/65c4d206-ced7-4d2c-9ef8-99ea6c4ffa1f/-/preview/-/format/auto/-/quality/smart/)

**Figure 1:** Modelization of the flow of UTXOs of the Token Sale Use Case

Upon implementing our on-chain and off-chain Token Sale code using the state machine mechanism, as covered in our [last article](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-9-state-machine-with-plutus-2-2-2475e41f7c8e), we can attempt our code by using the emulator trace.

[The Plutus Pioneer Program GitHub repository of week 8](https://github.com/input-output-hk/Plutus-pioneer-program/tree/main/code/week08) could help with checking details of the implementation:

## **1.2. Emulator Trace Configuration**

Prior to testing out our code, first, we should configure the emulator trace.

Each fund first needs some initial fund defining. So, we must fund three wallets needed for our use case, not only with 1000 ADA each but also with 1000 customized Tokens we called “A”.

![](https://ucarecdn.com/4fac5155-fc59-4ae8-819b-507419103da7/-/preview/-/format/auto/-/quality/smart/)

**Figure 2:** Configuring the emulator by funding three wallets with ADA and “A” Token

Next, we should set up the use case steps:

*   **Wallet 1**, representing the seller, sets the price of the Token to 1 ADA, and after that locks 100 A Token in the contract.
    
*   **Wallet 2** buys 20 ADA
    
*   **Wallet 3** buys 5 Tokens
    
*   **Wallet 1** (the seller) retrieved 40 A tokens and 10 ADA from the Token Sale contract.
    

![](https://ucarecdn.com/aabb0669-de32-411c-bd12-fbcd13ad008a/-/preview/-/format/auto/-/quality/smart/)

**Figure 3:** Configuring the EmulatorTrace with a specific Token Sale case

The previous code is written as a Test Suite. This meant the code could be run as a test executable file.

After running the test suite, we can check the file balances of the three wallets.

![](https://ucarecdn.com/f33d1ad9-b84a-4079-8b25-41f4b44d6850/-/preview/-/format/auto/-/quality/smart/)

**Figure 4:** Final Balances of the Wallets after running the Token Sale Test Suite

What follows is an explanation of the final balances we see in the previous figure:

*   **Wallet 2**: Bought 20 A Token using 20 ADA
    
*   **Wallet 3:** Bought 5 A Tokens using 5 ADA
    
*   **Wallet1**: Placed 100 A Tokens and withdrew 40 A Tokens from the contract again.
    

## **1.3 Minimal deposit of ADA for the contract**

In wallet 1, we can discover that 2 ADA are missing: We withdrew 10 ADA, but we got just 8 ADA.

The reasoning behind this is simple: to set up the token sale UTXO, we must deposit a minimum amount of ADA. However, this amount is variable in the real blockchain (testnet or mainnet) and depends on the size of the UTXO.

In the emulator trace, however, for simplification reasons, the min ADA is fixed and set to 2 ADA.

The minimal ADA deposit was not mentioned explicitly in our code. Thus, the state machine takes care of that and sets it automatically, representing a clear advantage of using the state machine concept.

# **2\. Automation Testing in Plutus**

## **2.1 Tasty Framework in Haskell**

In the , we prepared what can only be described as a „manual“ test in Plutus.

Nevertheless, automated tests bring more advantages, supplying the ability to configure and run regression tests. These tests could, thus, be configured to automatically execute once a new software release is deployed.

Various testing frameworks in Haksell provide a good automation experience, which is achieved by organizing the tests suites, grouping them, labeling them, etc.

Here, Plutus utilized the „**Tasty Test Framework**“

Hackage offers more information about this framework: [https://hackage.haskell.org/package/tasty](https://hackage.haskell.org/package/tasty)Through the Tasty framework, tests have the type „**TestTree**“, which, as the name indicates, means a tree of tests. Remember this type for later in Plutus tests.

By using the Tasty framework, we cam combine different type of tests, like unit tests, golden tests, QuickCheck/SmallCheck properties, and any other tests, into a single test suite. This is achieved by grouping these tests in groups and sub-groups.

![](https://ucarecdn.com/f0b1d5f5-9a4b-430b-9a14-a7220be28e5c/-/preview/-/format/auto/-/quality/smart/)

**Figure 5:** Example of implementing a Test in Haskell using Tasty framework

## **2.2 Plutus Contract Test Module**

In Plutus, a special package is available for testing our smart contracts, named: “[Plutus Contract Test](https://playground.plutus.iohkdev.io/doc/haddock/Plutus-contract/html/Plutus-Contract-Test.html)”.

To explore Plutus Contract Tests, we must develop an understanding of the „**checking predicates**“ of the module [Plutus.Contract.Test](https://playground.plutus.iohkdev.io/doc/haddock/Plutus-contract/html/Plutus-Contract-Test.html#g:2)

First, it’s worth defining what a predicate means in Haskell:

[Definition of a predicate in Hackage](https://hackage.haskell.org/package/wai-predicates-0.8.6/candidate/docs/Data-Predicate.html#:~:text=A%20predicate%20is%20a%20function,the%20given%20value%20as%20metadata):

> _A predicate is a function of some value of type a to a_ Result, i.e. a Bool-like value with Okay as True and Fail as False, which carries additional data in each branch.

So, this means we can say that a predicate checks a condition and returns true if the assertions are met, but false if not.

## **2.2.1 Checking Predicates of the Plutus Contract Test**

„**checking predicates**“ of the module Plutus.Contract. The test includes a few important functions:

## **2.2.1.1 checkPredicate function**

o **Function Input types:**

*   **Test Name**
    
*   **Trace Predicate** (see next point 2.2.1.2)
    
*   **EmulatorTrace** (the same type as used in the manual testing section)
    

o **Function Output type:**

*   **Test Tree:** The same type seen in the Tasty framework in Haskell
    

![](https://ucarecdn.com/8a312830-87ca-42a2-b3df-52f4f322309b/-/preview/-/format/auto/-/quality/smart/)

**Figure 6:** “Checking Predicates” of the “Plutus.Contract.Test” Module

## **2.2.1.2 Trace Predicate:**

Trace Predicate is simply a predicate on a Trace, which means a function responsible for checking a certain condition on a Trace.

In the trace predicate definition, we can notice different combinators of the TracePredicate types (not, (.&&.), (.||.) )

![](https://ucarecdn.com/7851036b-9bca-4a4c-8fd5-9be5ee3bcf1b/-/preview/-/format/auto/-/quality/smart/)

**Figure 7:** “TracePredicate” Type in the “Plutus.Contract.Test” Module

So, this means there are numerous testing predicates available.

In our Token Sale contract, we will pick just one, the “**walletFundsChange**”.

By using this function, we can check, after running the tests, if the wallet funds have changed as predicted in the input Value; this is, of course, excluding the fees.

The calculation of fees is complicated. So, the “**walletFundsChange**” function makes our life easier by automatically excluding fees and calculating the exact change of funds in our testing wallet after conducting the tests.

![](https://ucarecdn.com/8eb740f8-aa82-4412-a70d-0899a0821bb1/-/preview/-/format/auto/-/quality/smart/)

**Figure 8:** “walletFundsChange” predicate in the “Plutus.Contract.Test” Module

## **2.2.1.3 „checkPredicateOptions“ function:**

Almost identical input and output types as the earlier “checkPredicate” function.

There is just one added input with type “CheckOptions”

![](https://ucarecdn.com/b1338c2b-1902-49da-a8c7-5514f5588d8e/-/preview/-/format/auto/-/quality/smart/)

**Figure 9:** “CheckOptions” in the “Plutus.Contract.Test” Module

Thus, for us to set the checkOptions, we must change the type “Lens’

”. Consequently, this leads to us working on “optics”, as part of Haskell, as discussed later.

Furthermore, we notice another essential function that we will later utilize, the “EmulatorConfig” function. Through this function, we can configure the emulator as required before running the tests.

**In the next article about testing in Plutus, we will present the following concepts:**

*   **Assertions**
    
*   **Emulator Trace Based Tests**
    
*   **Code Coverage**
    
*   **Optics and Lenses in Haskell**
    

\---------------------------------------------------------------------------

**You can find the original article published in** [PeakChain](https://medium.com/peakchain) **Medium Publication under** [this link](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-10-testing-plutus-smart-contracts-1-3-ee53a8127536)**.**

**Support also our PeakChain Automotive Solutions in Project Catalyst Fund 9!**

[1- PeakChain Car Wallet Device](https://cardano.ideascale.com/c/idea/414249)

[2- PeakChain Uber on Cardano](https://cardano.ideascale.com/c/idea/414255)

[3- PeakChain Fleet Management Platform](https://cardano.ideascale.com/c/idea/414216)

[4- PeakChain Car-Sharing Platform](https://cardano.ideascale.com/c/idea/414199)

**Author:** [Oussama Benmahmoud](https://twitter.com/@oussbenma), CEO of [PeakSoft GmbH](https://peak-soft.de/) and Founder of [PeakChain](https://peak-chain.com/)
