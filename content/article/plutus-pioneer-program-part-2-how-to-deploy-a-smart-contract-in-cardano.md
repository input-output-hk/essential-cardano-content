---
title: "Plutus Pioneer Program - Part 2: How to “deploy” a Smart Contract in Cardano"
tags:
  - Plutus
  - Plutus Pioneers
  - Haskell
  - Script
  - Development
  - Code
  - Programming
  - Documentation
  - EUTXO
  - Tutorial
  - Smart Contracts
url: ""
image: https://ucarecdn.com/31fa67c9-d517-4eb9-87bc-9739d87fc78e/
image_text: ""
---

This blog post will demonstrate how to simulate the execution of a smart contract and how to **“**deploy“ it to the testnet through using various tools. Using the term “deploying” a smart contract is not accurate in the context of the Cardano Blockchain. We will explain the reason behind it later.

I will try to break down technical concepts using straightforward and simple language. My goal is to make these technical terms understandable for all audiences. Ultimately, this blog post is a worthwhile not only for DApps developers but also for non-technical Cardano community members. After all, the knowledge here will empower your faith in Cardano when you discover Plutus’ various powerful tools, helping every developer to build scalable and secure DApps.

In this blog post, we will present the concepts explained in the [third lecture of the Plutus Pioneer Program](https://www.youtube.com/playlist?list=PLNEK_Ejlx3x2zxcfoVGARFExzOHwXFCCL), where we implemented a vesting smart contract. Here, a donor locks a specific fund in a script address. Then, only certain beneficiaries can obtain these funds once a deadline has been reached.

## **1- Emulator Trace Monad:**

There are two ways to simulate a smart contract’s execution. The first method by the Plutus playground was outlined in the [previous blog post](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-5-the-plutus-pioneer-program-understanding-the-874064b216b7).

However, the second method involves using the emulator trace monad. Contrary to the Plutus Playground, where you should write and configure the simulated scenario by hand, the emulator trace monad forces you to script the simulator tab.  
  
![](https://ucarecdn.com/0bc13143-642d-441f-b035-c367eb928eba/-/preview/-/format/auto/-/quality/smart/)  
**Figure 1:** Overview of final state of the wallets after the smart contract execution using the emulator trace monad

Maybe the notion of monads is a little bit strange for you; this is especially true if you are not familiar with functional programming. That’s why Lars has explained the notion of monads in [lecture 4 through a separate long-form video (around one and a half hours)](https://www.youtube.com/watch?v=f2w-MB3X4a0&list=PLNEK_Ejlx3x230-g-U02issX5BiWAgmSi&index=3).

Although monads may seem a little complicated, learning this concept is extremely useful when working with Plutus. This is because you have to understand the two types of monads in Plutus. These are the emulator trace monad, as described previously, and the contract monad, which allows you to write off chain code. Also, the contract monad is also called the wallet code. Finally, the same logic of the contract monad could be constructed using the Cardano cli.

## **2- Preparing for the contract deployment to the cardano testnet**

Contrary to Ethereum, the Validator Script in Cardano doesn’t live in the Blockchain. Instead, the hash of the script is submitted within the transaction when interacting with a smart contract instance. Thus, the notion of “deployment” doesn’t exist in Cardano. However, for the sake of this example, we will still use the term contract “deployment” in the blog post.

As discussed at the blog’s beginning, we have written a vesting smart contract. After simulating contract execution by using the Plutus Playground or the Emulator trace monad, we can deploy it to the testent and execute it.

But, first, we need to complete some preparatory work.

**2.1- Installing and Running a Cardano Node and Creating the addresses and the key pairs:**

To interact with the Cardano testnet blockchain, we must submit transactions using the Cardano CLI. Hence, we have to install and run a node on the testnet.

There is vast documentation available to show how to complete that process perfectly.

You can find such help in [this link](https://developers.cardano.org/docs/get-started/installing-cardano-node).

Next, we should create two addresses and their corresponding keypairs. The first address should correspond to the donor, while the second address will correspond to the beneficiary.

![](https://ucarecdn.com/de307f4a-110e-460e-9a51-cd28ef7f9314/-/preview/-/format/auto/-/quality/smart/)

**Figure 2:** A Shell script to run a Cardano Node locally on the Cardano testnet

![](https://ucarecdn.com/bc2ea628-cb4a-42cf-a7c7-144923506842/-/preview/-/format/auto/-/quality/smart/)

**Figure 3:** Cardano Node running and synchronizing with the Cardano testnet

**2.2- Requesting funds from the faucet**

To submit transactions to the blockchain, we must first fund both addresses with some Test ADA in our address.

The request can be submitted through Cardano [testnet faucet](https://testnets.cardano.org/en/testnets/cardano/tools/faucet/).

![](https://ucarecdn.com/0fc04aa1-7559-4e6c-ac53-c7a959f61113/-/preview/-/format/auto/-/quality/smart/)

**Figure 4:** Cardano testnet faucet

**2.3- Serialize and write to disc some Plutus Types to be able to deploy the validator script using Cardano CLI**

To be able to deploy a Plutus script using the Cardano cli, we must do some preparation work. Also, we have to make changes to the script to serialize and write to disc various Plutus types. For simplicity reasons, I will not outline all steps. Instead, to learn more about that, you can check [lecture 3 of the Plutus Pioneer Program](https://www.youtube.com/playlist?list=PLNEK_Ejlx3x2zxcfoVGARFExzOHwXFCCL).

## **3- Deploy the Smart Contract with the Cardano CLI:**

After making the changes to the Plutus script, we can now build and generate the script file and the script address.

![](https://ucarecdn.com/8ea06d02-93e4-4784-a043-6683e82ac8bd/-/preview/-/format/auto/-/quality/smart/)

**Figure 5:** Building and generating the script file and address using the Cardano cli

Next, we can construct a “give” shell script, which consists of building the transaction and locking the funds at the script address.

After submitting these transactions, we can verify that the funds sent from our first address are sitting at the script address and locked, waiting for the deadline to pass and for the beneficiary address to grab them.

![](https://ucarecdn.com/da4fc124-3862-4451-8232-eb104be7cacb/-/preview/-/format/auto/-/quality/smart/)

**Figure 6:** Overview of the “give.sh” shell script

We can now construct the “grab” shell script. This script allows the beneficiary address to grab the funds locked in our contract upon reaching the deadline.

After executing the “grab.sh” script, we can check that all funds have been transferred from the script address to the beneficiary address.

Now, we have successfully tested the full deployment and execution scenario on the testnet using the Cardano cli.

![](https://ucarecdn.com/5184baff-fd2c-4a10-bed3-0f26dd00c675/-/preview/-/format/auto/-/quality/smart/)

**Figure 7:** Overview of the “grab.sh” shell script

## **4- Deploy the Smart Contract with the Plutus Application Backend (PAB)**

There is a second way to deploy a smart contract using the PAB. With this approach, you can avoid changing the types manually in the Plutus Script, as previous point 2.3 of this blog post describes. Using the power of the PAB, we can interact with an instance of our contract simply using some APIs.

![](https://ucarecdn.com/66a17c18-251d-4e06-bc5e-b185804f1dcc/-/preview/-/format/auto/-/quality/smart/)

**Figure 8:** SwaggerUI API Specification for Interacting with the Smart Contracts through the PAB using APIs

Still, first, we must set up and run various tools: the Plutus PAB, the Cardano Wallet, the Chain Index, and a Cardano Node.

![](https://ucarecdn.com/ee7eadda-2ab0-4b56-8daa-76d920180129/-/preview/-/format/auto/-/quality/smart/)

**Figure 9:** _The hosted deployment scenario for the PAB with the WBE (wallet backend)_

Lars effectively explains this method in lecture 6 of the Plutus Pioneer Program.

To know more about the PAB, you can check [this link](https://plutus-apps.readthedocs.io/en/latest/plutus/explanations/pab.html).

**You can find the original article published in** [PeakChain](https://medium.com/peakchain) **Medium Publication under** [this link](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-6-the-plutus-pioneer-program-how-to-deploy-a-b51bd6e99d05)**.**

**To Support this educational content and contribute in the Success of** [PeakChain](https://peak-chain.com/) Automotive Solutions, we appreciate delegating to our [PeakChain Pool](https://www.peakchain-pool.com/), Ticker: \[PKCP\]

**Support also our PeakChain Automotive Solutions in Project Catalyst Fund 9!**

[1- PeakChain Car Wallet Device](https://cardano.ideascale.com/c/idea/414249)

[2- PeakChain Uber on Cardano](https://cardano.ideascale.com/c/idea/414255)

[3- PeakChain Fleet Management Platform](https://cardano.ideascale.com/c/idea/414216)

[4- PeakChain Car-Sharing Platform](https://cardano.ideascale.com/c/idea/414199)

**Author:** [Oussama Benmahmoud](https://twitter.com/@oussbenma), CEO of [PeakSoft GmbH](https://peak-soft.de/) and Founder of [PeakChain](https://peak-chain.com/)
