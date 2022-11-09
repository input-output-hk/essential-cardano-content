---
title: Testing Plutus Smart Contracts (2/3)
tags:
  - Plutus
  - PeakChain
  - Testing
  - Plutus Pioneers
  - Test Automation
  - Haskell
url: ""
image: https://ucarecdn.com/54716b8e-797e-42d1-9648-d19b30543039/
image_text: ""
---

To guarantee secure and high-quality smart contracts, rigorous testing strategies should be implemented. These will significantly differ from standard testing techniques typically used in low-risk web 2 applications.

Testing in Plutus has been be thoroughly covered in the [8th lecture of the Plutus Pioneer Program](https://www.youtube.com/playlist?list=PLNEK_Ejlx3x0UIixvEQG2Y2mmFL6__pEJ).

[My background](https://www.linkedin.com/in/oussama-benmahmoud-43693926/), which is largely in software quality in test automation, means I was ecstatic to discover the blockchain testing concepts, especially with Plutus.

In three Plutus Testing related articles, we will go over special techniques on how to test Plutus smart contracts using the emulator trace, calculate test coverage, the notion of optics and lenses, and Property Based Testing.

In the [last article](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-10-testing-plutus-smart-contracts-1-3-ee53a8127536), we covered “Manual” testing techniques of a Smart Contract in Plutus. After that, we presented “Tasty Framework” in Haskell and “[Plutus Contract Test](https://playground.plutus.iohkdev.io/doc/haddock/Plutus-contract/html/Plutus-Contract-Test.html)” (A special package in Plutus for testing Smart Contracts). Both are used for automated tests in Plutus.

In this article, we will present the following concepts:

*   Assertions
    
*   Emulator Trace Based Tests
    
*   Code Coverage
    
*   Optics and Lenses in Haskell
    

# **1\. Assertions in Plutus**

We begin our article by checking the different assertions available for use in our tests.

You can find below the Assertions available in the “_Plutus.Contract.Test_” Module.

![](https://ucarecdn.com/9198ca61-5ab3-4e7e-aaec-7e449c51cf81/-/preview/-/format/auto/-/quality/smart/)

**Figure 1:** Assertions in the “Plutus.Contract.Test” Module

# **2\. Emulator Trace Based Tests:**

In Plutus, a number of test types are supported. This blog post will explain two categories mainly:

\- Emulator Trace based testing (covered in this article)

\- Property based testing (will be presented in the next article)

Now, we will move on to covering the first Emulator Trace based testing

# **2.1 Test implementation**

## **2.1.1 “tests”: The TestTree function**

At this juncture, we go back to our code to implement our tests. We begin by coding the “tests” function from the type “TestTree”.

*   First, we have used the “**checkPredicateOptions**”. These options are needed to configure the Emulator before running the tests.
    
*   Second, we indicate the name of our tests. Simple string: “token sale trace”
    
*   Third, we specify the Predicate: This is the main assertion we should check after conducting the test
    
*   Fourth, we define the Trace, which we call “myTrace”
    

![](https://ucarecdn.com/d4506ac5-6acd-4278-9da7-064ed7d14d70/-/preview/-/format/auto/-/quality/smart/)

**Figure 2:** “tests” function implementation

## **2.1.2 “emCfg”: the EmulatorConfig Function**

Using the Emulator config, we can specify the initial wallet funds.

![](https://ucarecdn.com/2eefdf79-c654-42c8-b6ae-0545d2d60db9/-/preview/-/format/auto/-/quality/smart/)

**Figure 3:** EmulatorConfig implementation

## **2.1.3 “myPredicate”: TracePredicate function**

This function has the main assertions regarding wallet balances in the Emulator Trace. So, we should check these after running the test.

We are using the (**_.&&._**) combinator to check the wallet Funds after running our customized Token Sale use case.

Here, we can see that we have implemented the same assertions as the manual test cases.

# **2.2 Running the test:**

Moving on, we can run the tests using repl after importing the Tasty Haskell Testing Framework and running the defaultMain tests. This is, of course, indicated by the Tasty framework.

![](https://ucarecdn.com/0b93f55d-013d-4b65-9148-63d300ce9842/-/preview/-/format/auto/-/quality/smart/)

**Figure 4:** Running Plutus Automatic Tests in the repl using Tasty Framework

# **2.3 Emulator Trace Based Test Execution Results**

Previously, all tests have passed successfully.

Moving forward, we need to check how the test execution results look in case of Failed Tests. And we can manipulate test assertions to enforce test failure.

Hence, we change the expected funds in wallet 2 after running the tests from 20 to 19, which is obviously false.

![](https://ucarecdn.com/3dcbef28-42b6-4b64-b5bd-e10ae27e1e1f/-/preview/-/format/auto/-/quality/smart/)

**Figure 5:** Changing the test assertions from the test predicate

![](https://ucarecdn.com/9e7500ba-8eea-4512-a748-ef62e67a1255/-/preview/-/format/auto/-/quality/smart/)

**Figure 6:** Running Plutus Automatic Tests in the repl using Tasty Framework — Case of failure

We notice that the test failed as expected.

We also get the logs offering details of the test execution results, along with a comparison between the Actual Results and Expected Results.

# **3\. Code Coverage**

## **3.1 Implementation of the code coverage functionality**

Plutus allows us to check the code coverage. Thus, how much code covered by our tests serves as a crucial indicator of our code quality.

As described in “**Figure 6:** Checking Predicates” ([Previous article](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-10-testing-plutus-smart-contracts-1-3-ee53a8127536)) of the “Plutus.Contract.Test” Module”, one of the checking predicates functions provided by the “Plutus.Contract.Test” module is the “checkPredicateCoverage” function.

![](https://ucarecdn.com/57bbc3bb-0a1f-4ca3-a0c3-c9f453eb9608/-/preview/-/format/auto/-/quality/smart/)

**Figure 7:** “checkPredicateOptionsCoverage” function implementation

Now, we implement the “**_testCoverage_**” function by deploying the mentioned “**_checkPredicateCoverage_**” function.

![](https://ucarecdn.com/6d612f72-6584-485e-a3b9-1f704fd760bf/-/preview/-/format/auto/-/quality/smart/)

**Figure 8:** Implementation of the test coverage function

## **3.2 Executing the coverageTest function and result checking:**

After implementing the “testCoverage” function, we run it in the repl. Once executed, the “**testCoverage**” function will save the results in an HTML report.

![](https://ucarecdn.com/3186f733-0251-4ce6-957f-d444cd3b1b4e/-/preview/-/format/auto/-/quality/smart/)

**Figure 9:** Running the test coverage function in repl

Our test coverage report captures a range of meaningful indicators. This is especially true for the transition function, where we have the core business logic of our use case.

For example, the green color code means that the highlighted conditions were always true in our test.

But the “Nothing” is highlighted in Red, meaning our tests did not cover this condition.

![](https://ucarecdn.com/058318bc-1d62-4f44-a5e6-754568a22c5e/-/preview/-/format/auto/-/quality/smart/)

**Figure 10:** Html test coverage report

# **4\. Optics and lenses in Haskell:**

One critical concept in Haskell needed as part of our Testing framework is Optics and Lenses.

Various frameworks in Haskell implement these concepts. Still, the Plutus development team uses the [library “Lens” in Hackage](https://hackage.haskell.org/package/lens).

Optics attempts to deal with hierarchical data types. Thus, in this way, we can either read specific data located in one particular hierarchical data type or update it.

![](https://ucarecdn.com/31bd7ffc-fede-492d-be8a-673492a09171/-/preview/-/format/auto/-/quality/smart/)

**Figure 11:** Example of a hierarchical data type

Lars created an example of a hierarchical data type he calls “company” in the Plutus pioneer lecture. The company includes a staff, which represents another data type called “Person”, which contains the person’s name and address.

The main challenge in a hierarchical data type is reading or changing the address of a specific person using a simple, straightforward function.

But, Lenses solve this issue. In fact, it provides a concept similar to “accessors”, which exist in other programming languages like Java, represented by the “.” symbol.

![](https://ucarecdn.com/091705b8-d6f4-41aa-aff7-10dca00853f8/-/preview/-/format/auto/-/quality/smart/)

**Figure 12:** Getting and Updating specific data using Lenses

**In the next article about testing in Plutus, we will present the concept of Property Based Testing.**

\---------------------------------------------------------------------------

**You can find the original article published in** [PeakChain](https://medium.com/peakchain) **Medium Publication under** [this link](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-11-testing-plutus-smart-contracts-2-3-4af6e04507f8)**.**

**Support also our PeakChain Automotive Solutions in Project Catalyst Fund 9!**

[1- PeakChain Car Wallet Device](https://cardano.ideascale.com/c/idea/414249)

[2- PeakChain Uber on Cardano](https://cardano.ideascale.com/c/idea/414255)

[3- PeakChain Fleet Management Platform](https://cardano.ideascale.com/c/idea/414216)

[4- PeakChain Car-Sharing Platform](https://cardano.ideascale.com/c/idea/414199)

**Author:** [Oussama Benmahmoud](https://twitter.com/@oussbenma), CEO of [PeakSoft GmbH](https://peak-soft.de/) and Founder of [PeakChain](https://peak-chain.com/)
