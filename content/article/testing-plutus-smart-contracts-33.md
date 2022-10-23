---
title: Testing Plutus Smart Contracts (3/3)
tags:
  - Plutus
  - Plutus Pioneers
  - Testing
  - Test Automation
  - PeakChain
  - Haskell
  - Smart Contracts
url: ""
image: https://ucarecdn.com/1195c582-f6b1-42e2-84ce-d0a191a8462f/
image_text: ""
---

_You can check Part 1 and Part 2 under these links:_

[Testing Plutus Smart Contracts (1/3)](https://www.essentialcardano.io/article/testing-plutus-smart-contracts-13)

[Testing Plutus Smart Contracts (2/3)](https://www.essentialcardano.io/article/testing-plutus-smart-contracts-23)

\--------------------------------------------------------------------------------------------------

To guarantee secure and high-quality smart contracts, rigorous testing strategies should be implemented. These will significantly differ from standard testing techniques typically used in low-risk web 2 applications.

Testing in Plutus has been thoroughly covered in the [8th lecture of the Plutus Pioneer Program](https://www.youtube.com/playlist?list=PLNEK_Ejlx3x0UIixvEQG2Y2mmFL6__pEJ).

[My background](https://www.linkedin.com/in/oussama-benmahmoud-43693926/), which is largely in software quality in test automation, means I was ecstatic to discover blockchain testing concepts, especially with Plutus.

In three Plutus Testing-related articles, we will go over special techniques on how to test Plutus smart contracts using the emulator trace, calculate test coverage, the notion of optics and lenses, and Property-Based Testing.

In the [last article](https://www.essentialcardano.io/article/testing-plutus-smart-contracts-23), we covered the following concepts:

*   Assertions
    
*   Emulator Trace-Based Tests
    
*   Code Coverage
    
*   Optics and Lenses in Haskell
    

In this article, we will present the concept of Property Based Testing.

# **1\. Origins of Property-Based Testing:**

The concept of property-based testing already exists in some libraries of other mainstream programming languages. However, this approach originally came from Haskell.

Unit testing is more popular than property-based testing. But we should note that property-based testing both subsumes and includes unit testing.

Various libraries in Haskell implement this approach. Regardless, the most important library in Haskell for property-based testing is the [Quick Check Library](https://hackage.haskell.org/package/QuickCheck).

# **2\. Goals and Challenges of Property-Based Testing:**

To discuss our property-based testing goal, we should go over how we generally write tests.

In practice, tests comprise test steps and test assertions (sometimes called properties). So, we must feed our tests with test data before executing them, trying to break our pre-defined assertions.

We feed our tests with a few test data we manually pre-define in the unit testing approach.

In property-based testing, it is not our task to choose the test data. The power of this approach resides in how our library will be responsible for the task of automatically generating random test data.

Once the assertion (property) goes unmet met, the framework doesn’t deliver the counter-example directly. Instead, it tries to simplify the counter-example and deliver the simplest version. This concept is known as “shrink.”

But one of the main challenges of property-based testing is its inability to test non-pure function, known as IO functions (functions with side effects), which includes writing files, reading input, opening windows, etc.

To solve this problem, if we cannot test the real system in the real world, we must model the real life system and then conduct testing. Therefore, the same actions applied to the real-life system, when applied to the model, both results should be identical.

Using the previous concept, quick check generates a random sequence of actions. After applying the same sequence on both the model and the real-world system, we compare the results.

# **3\. Property-Based Testing in Plutus:**

Next, we will apply property-based testing techniques to test the Plutus smart contracts.

In this way, we create a model and then define our expected results when applying specific actions.

From here, we provide a link between the model and the real-world system. In our case, this is not the blockchain but the emulator trace.

![](https://ucarecdn.com/706b1966-9b17-4c9d-983a-edb3136cc573/-/preview/-/format/auto/-/quality/smart/)

**Figure 1:** Declaration of the TSState data type

Ultimately, we have to define a model for our Token Sale contract.

So, we begin by defining a data type called “TSState”, representing the State of one Token Sale Contract Instance.

This TSState is a triple consisting of the token price, the amount of Lovelace and tokens.

At this stage, we can construct our model by defining the token Sale model “TSModel”, representing a type class ContractModel instance.

# **4\. Constructing the Token Sale Model:**

As discussed in the previous Testing Articles, in our model, we should specify all the business logic. That means we specify how our model should behave and how it is linked to the real world.

![](https://ucarecdn.com/b36624c0-bec5-49f5-b9fb-64a2ff204033/-/preview/-/format/auto/-/quality/smart/)

**Figure 2:** Implementation of the Token Sale Model — Part 1

Before moving on to the next part, I think a disclaimer is necessary!

Constructing the Token Sale Model is a bit tricky, and its implementation is quite long.

So, below, we will present the details of implementing 14 functions of our Token Sale Model.

Sorry, in advance, if you feel frustrated reading the following.

Despite this, it is definitely worth understanding how to construct a model. This model is comparable with our real blockchain (in our case, the emulator trace).

This model is needed to apply property-based testing for our Plutus Smart Contract.

## **4.1 Create a first associated Action type**

First, we need to create a **“Associated Action type”,** representing the actions that a quick check will generate and control. See “figure 2”

These actions are:

\- Start the Token Sale Contract

\- Set Price

\- Add Token

\- Withdraw

\- Buy Token

For argument's sake, we have two wallets in our example. This means the second argument wallet tries to withdraw pre-defined ADA from the Token sale contract run by the wallet declared in the first argument function.

This withdrawal action, for example, should fail if the two wallets are not the same.

## **4.2. Create a Second Associated Data type**

We implement a Second **“Associated Data type”** called ContractInstanceKey. See “figure 2”

Here, the goal is to define a key for each instance of the token sale contract we run.

## **4.3. instanceWallet function**

We create the instanceWallet function. See “figure 2”

This function explains to the system how to extract a wallet on which a contract is running.

## **4.4. instanceTag function**

The following method we need to implement is the instanceTag function in our Token Sale model, which returns a **_ContractInstanceTag_**. See “figure 2”

This function will _then_ _be used on the blockchain side to identify running instances of contracts and interact with them by naming them endpoints_.

## **4.5. arbitraryAction function**

Next function is **_arbitraryAction_** function.

![](https://ucarecdn.com/d8061adb-3ba5-46d4-a548-ba3df6736600/-/preview/-/format/auto/-/quality/smart/)

**Figure 3:** Implementation of the Token Sale Model — Part 2

As we described the property-based testing approach, we have said that our Testing Framework will take charge of generating random actions. These will then be fed to our tests.

As the name indicates, this function generates an arbitrary action, which will be fed to our tests.

For example, when generating a random BuyToken Action, we should pick a random Wallet that runs the contract (first argument: genWallet). After that, we will pick a second random wallet that interacts with the contract (second argument: genWallet). Finally, we will generate a random integer representing the ADA we want to buy (third argument genNonNeg).

What follows is an example of the random generation of actions (Test Data) using repl:

![](https://ucarecdn.com/389740b1-92b8-4bdd-a689-e096ad5a20a6/-/preview/-/format/auto/-/quality/smart/)

**Figure 4:** Random Generation of our Actions (Test Data)

## **4.6. initialState function**

The next function we should implement in our model is the **_initialState function._**

**_A_**s the name shows, it represents the initial state of our model. In our case, in the beginning, we should set an empty initial state, because no Token Sale will be there at the beginning.

![](https://ucarecdn.com/068a6030-b767-42c8-920f-e5160c883ca0/-/preview/-/format/auto/-/quality/smart/)

**Figure 5:** Implementation of the Token Sale Model — Part 2

## **4.7. initialInstances function**

The following method we need to implement is called **_initialInstances._** Similar to the name, it gives the initial contract instances that must run.

See “figure 5”

## **4.8. precondition**

The next function is **precondition**. See “figure 5”

This function is essential because it allows us to set the legality of actions, given a specific model state.

For example, the precondition of triggering a “Start Action” of a Token Sale Contract, is that no Token Sale Contract should have already started. In such an instance, we must know the current State of the Token Sale Contract to check the preconditions for running Actions.  
  
  
Indeed, to know the current State of our Token Sale Contract, we have to specify a helper function called „getTSState‘“, which returns the state of our Token Sale Contract. Hence, given a **ModelState** (as the next point discusses), and the wallet, we try to extract the token sale **TSState** that this wallet runs.

Recall, TSState is a triple consisting of:

\- The Token Price

\- The amount of Lovelace

\- The amount of Tokens.

(See Previous Point 3. Property-Based Testing in Plutus)

# **The Model State Data Type**

As seen, to set the preconditions, we must understand the notion of the Model State.

To learn more about the Model State, we can have a look at the [Plutus documentation](https://playground.plutus.iohkdev.io/doc/haddock/Plutus-contract/html/Plutus-Contract-Test-ContractModel.html#g:2)

![](https://ucarecdn.com/9b255a25-d8cf-4ec1-85d0-7ca8274e2cb2/-/preview/-/format/auto/-/quality/smart/)

**Figure 6:** Model State Definition in the Plutus Documentation

The Model State Data type has multiple functions that operates with it.

The most important one is the contractState function, also known as a lens: A lens from “ModelState” to “State”.

Given our Token Sale Model (TSModel), a hierarchical type, we must use lenses to get the State of the contract, which is data in the TSModel hierarchy.

So, in our example, the contract state is accessible from the ModelState via the contractState function, which is a lens.

Now, we can understand our past discussion on the notion of optics and lenses in Haskell. (Check the concept of Optics and Lenses in Haskell in the [previous article](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-11-testing-plutus-smart-contracts-2-3-4af6e04507f8))

But our ModelState contains not only the _contractState function_ but also the currentSlot function, which returns the current Slot as shown by the name.

ModelState also provides **_balanceChanges functions,_** which, given a Wallet, can check how its balance has changed.

But in our example, we will only use two functions: **_contractState_** and **_currentSlot_**.

## **4.9. nextState function**

Now we will check the implementation of another Token Sale Model function called **_nextState_**. This function **is the most complex and perhaps the most important.**

Regarding constructing our model and its link to our real system (emulator trace), we have said that we must know which effect that action will have on our model for each performed action. And that’s precisely the goal of our nextState function.

![](https://ucarecdn.com/2b4b6d1e-8e9a-4499-a319-4c58c929baf2/-/preview/-/format/auto/-/quality/smart/)

**Figure 7:** Implementation of the Token Sale Model — Part 3 — nextState function

As we can see in the code, our nextState function has an input parameter and Action on a TSModel. From here, it returns a Spec Monad.

The spec monad’s purpose is to describe effects on the model, our Token Sale Model (TSModel). So, it describes the impact on the contract state, the flow of funds between the wallets, and the time (slots).

For each triggered Action (Start contract, SetPrice, AddTokens, BuyTokens, Withdraw Tokens), we perform specific tasks to synchronize wallet balances, token prices, minimal fees and the time (in slots) between our model and real-world system. This should be the real blockchain, but in our case, it is the emulator trace.

## **4.10. startInstances function**

Next, we will go over implementing two other Token Sale Model functions, the **_startInstances function._** This function specifies when starting the Token Sale Contracts (either at the beginning or later).

![](https://ucarecdn.com/7dfa24c7-1701-4bf4-a16b-caa750cbcc27/-/preview/-/format/auto/-/quality/smart/)

**Figure 8:** Implementation of the Token Sale Model — Part 4

## **4.11. instanceContract function**

**The instanceContract** function : Which starts providing the link between our model and the emulator. (see figure 8)

## **4.12. Token Sale Model function**

Finally, we implement the last Token Sale Model function, called the perform function. (see figure 8)

This function provides an instance of the contract model class. So, basically, it tells how an action (SetPrice, AddTokens, BuyTokens, Withdraw) is expressed in actuality in the emulator on the blockchain.

## **4.13. prop\_TS function**

As a form of conclusion and to utilize all previous functions, we define the prop\_TS function.

![](https://ucarecdn.com/b5fbce39-d1d0-4d8d-88b9-7aa733be7110/-/preview/-/format/auto/-/quality/smart/)

**Figure 9:** prop\_TS function implementation

We can see that in the prop\_TS function, we are composing the **_propRunActionsWithOptions function using the withMaxSuccess function._**

**_The former represents a Plutus function,_** which is in this Plutus.Contract.Test.ContractModel in the [Plutus documentation](https://playground.plutus.iohkdev.io/doc/haddock/Plutus-contract/html/Plutus-Contract-Test-ContractModel.html#v:propRunActionsWithOptions)

The latter is a quick check function, where we specify how many test cases to run. Here, 100 is the default, but this makes it easy to increase or decrease that figure.

We continue to understand the TS\_prop function. We can now see that we are setting the initial distribution for every wallet with an **_InitialDistribution_** called “d”:

\- Wallet 1 has 1000 Tokens A and is selling these types of tokens

*   Wallet 2 has 1000 Tokens B and is selling these types of tokens
    

Next, **defaultCoverageOptions** checks whether the performed actions in the blockchain (emulator trace in our case) are actually reflected in the model.

## **4.14. test function**

To run our tests in the repl, we finally declare test, which simply applies Quick Check to this **_prop\_TS_** _function. (See figure 9)_

So, this means that Quick Check will generate random action sequences and discover whether the Property (expected results or assertions) is fulfilled.

The property checked is included in the **nextState** function definition, which we have seen previously in 4.9.

# **5\. Running the Tests and getting the Test Results:**

![](https://ucarecdn.com/1195c582-f6b1-42e2-84ce-d0a191a8462f/-/preview/-/format/auto/-/quality/smart/)

**Figure 10:** Running the tests with repl

After running the tests with repl, we achieved these results: All 100 tests run successfully.

The test results also contain the number of actions randomly chosen by QuickCheck, as discussed.

We can also check the number of actions rejected due to nonvalid preconditions, as specified in our code.

# **6\. Test Suite:**

![](https://ucarecdn.com/3b814757-30a5-422b-bb98-3eab41f01f8c/-/preview/-/format/auto/-/quality/smart/)

**Figure 11:** Test Suite implementation

At this juncture, we can pack all our tests into a single test suite.

Our tests are now in a Type “TestTree” from the Taste framework we saw earlier.

We use the notion of “testGroup” and put into it our emulator trace test that we saw at the beginning of the blog post.

# **7\. Conclusion:**

Quick check tests verify the flow of funds and check whether our assertions from our model are passing.

Previously, we tested the actions in a random sequence. However, it is also possible to test a specific sequence of actions.

One limitation is that we cannot test all possible off-chain codes. A malicious actor could, for example, write an off-chain code that can steal funds from our contract.

Our quick check model cannot check all possibilities of an off-chain code. It is to use the contracts we give in the “perform” method we have seen.

Another limitation is concurrency. In our code previously, we have configured our actions to last exactly three slots. But in our real blockchain, our actions could stay for more time due to possible concurrency of transactions. This problem could be avoided by setting further conditions in our model.

Property-based testing is a powerful tool that allows us to test various possibilities of our code and tremendously increase the quality and security of our smart contracts.

Using my knowledge from the software testing and test automation domains, we should be aware that implementing property-based testing or test automation independently doesn’t assure software quality.

In fact, running tests that all passing doesn’t even mean that our code is free of bugs.

According to ISTQB, the international standard of testing, the “Seven Testing principles”, we should remember some important quality concepts:

\- Testing shows the presence of defects, not their absence

\- Exhaustive testing (testing everything) is impossible

\- Absence-of-errors is a fallacy

_“ISTQB Foundation Level (CTFL) Syllabus Version 2018 v3.1.1”_

That means running tests that all pass doesn’t assure the quality of the software because it doesn’t confirm the absence of bugs. Testing all possible combinations and possibilities of a complex system is impossible.

That’s why we must follow a risk-based approach and cover the riskiest components of software through stringent testing.

Standards like ISTQB helps a lot when defining such testing strategies.

\---------------------------------------------------------------------------

**You can find the original article published in** [PeakChain](https://medium.com/peakchain) **Medium Publication under** [this link](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-12-testing-plutus-smart-contracts-3-3-f0dc3b34f107)**.**

**To Support this educational content and contribute in the Success of** [PeakChain](https://peak-chain.com/) Automotive Solutions, we appreciate delegating to our [PeakChain Pool](https://www.peakchain-pool.com/), Ticker: \[PKCP\]

**Support also our PeakChain Automotive Solutions in Project Catalyst Fund 9!**

[1- PeakChain Car Wallet Device](https://cardano.ideascale.com/c/idea/414249)

[2- PeakChain Uber on Cardano](https://cardano.ideascale.com/c/idea/414255)

[3- PeakChain Fleet Management Platform](https://cardano.ideascale.com/c/idea/414216)

[4- PeakChain Car-Sharing Platform](https://cardano.ideascale.com/c/idea/414199)

**Author:** [Oussama Benmahmoud](https://twitter.com/@oussbenma), CEO of [PeakSoft GmbH](https://peak-soft.de/) and Founder of [PeakChain](https://peak-chain.com/)
