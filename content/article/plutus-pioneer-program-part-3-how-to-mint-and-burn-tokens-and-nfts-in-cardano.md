---
title: "Plutus Pioneer Program - Part 3: How to Mint and Burn Tokens and NFTs in
  Cardano"
tags:
  - Plutus Pioneers
  - Plutus
  - EUTXO
  - PAB
  - Smart Contracts
  - Development
  - Script
  - Token Minting
  - Token
  - Native tokens
  - Non-fungible token
  - Haskell
  - CLI
  - Burn Token
  - PeakChain
url: ""
image: https://ucarecdn.com/731f064b-eb07-498a-8e3f-0bea65c9ca86/
image_text: ""
---

The last blog covered how to deploy Smart Contracts in Cardano after simulating and testing its execution.

Today, however, we have a more interesting part: how to mint and burn tokens in Cardano using Plutus technology and how to write a corresponding minting policy.

# **1- Native Tokens in Cardano**

As we may recall from previous blog posts, Cardano’s main difference compared to account-based models like Ethereum is the Extended UTXO Model.

This essentially means any transaction in Cardano must consume one or more UTXOs that carry ADA as well as other non fungible or fungible tokens.

In fact, when you receive fungible tokens from another user, the transactions carrying the fungible or non-fungible token must include a minimal amount of ADA.

For example, as seen in the figure below, you can see a transaction history where one user has sent around 537 SUNDAE fungible tokens to another user. So, the transaction includes around 1.34 ADA, which represents the minimal amount of ADA needed to send the previously mentioned tokens.

![](https://ucarecdn.com/62875b0f-a679-4fce-b9c6-cfe3217a0473/-/preview/-/format/auto/-/quality/smart/)

**Figure 1:** A transaction carrying 537 “SUNDAE” Token and a minimum required amount of ADA

The exact same applies to NFTs. In this way, you must include a minimal amount of ADA when sending the transactions carrying the NFT.

Below is a screenshot of transaction details where a user sends an NFT called “peakchain”. Here, the same logic as the previous transaction with fungible tokens applies, and this transaction carries a minimal amount of ADA, which is, in this example, around 1,48.

![](https://ucarecdn.com/a9a7f940-627e-4be7-a0f5-7ee34a9da403/-/preview/-/format/auto/-/quality/smart/)

**Figure 2:** A transaction carrying a “PeakChain” NFT and a minimum required amount of ADA

Importantly, unlike Ethereum, where the both fungible (ERC-20) and non-fungible (ERC-721) tokens are not native tokens, all non fungible and fungible tokens in Cardano are native tokens that behave just like ADA.

However, the striking difference is that these tokens can be minted or burned based on a specified minting policy defined from the beginning by the user, but ADA cannot be minted or burned.

We will discuss later why, technically, ADA cannot be minted or burned.

# **2- The Minting Policy**

To be able to mint and burn tokens, the user should write a minting policy, like the Plutus validator we described in earlier blog posts. We can recall that a validator has three inputs: the datum, the redeemer, and the context.

Meanwhile, however, in the minting policies, we have just two inputs, redeemer and context, so we don’t have a datum.

Another feature of Cardano is that we can mint many tokens in one transaction simply because we can include many minting policies in one transaction.

![](https://ucarecdn.com/c7a3d8f2-b752-46d5-962b-b8a72a3de802/-/preview/-/format/auto/-/quality/smart/)

**Figure 3:** Overview of the on-chain part: the minting policy

Here is an example of a minting policy, where we specified the public key of the user who is allowed to mint the token as an input. This part is called the on-chain part of our script.

Next, for us to test the specified minting policy, we must create an off-chain part. This section is often called the “endpoint” and is executed by the user’s wallet.

We can test this endpoint using the emulator trace monad that we explained in a previous blog.

![](https://ucarecdn.com/00023ee9-ae6c-44a1-a1b8-2720e7a75b02/-/preview/-/format/auto/-/quality/smart/)

**Figure 4:** Overview of the off-chain part: the minting endpoint

This represents the off chain code called an endpoint. Here, we have to specify the minting parameters, which are the Token name, the amount of the minted token, and of course, the minting policy we have previously defined.

# **3- Currency Symbol vs Token Name**

However, prior to going further with the simulation execution using Monad, it may be worth explaining the differences between token name and currency symbol. After all, these are two important paradigms to understand when minting Tokens.

So, the question is, why do we need a currency symbol and a token name for each token in Cardano?

The token name is fairly straightforward, representing the name of the minted token, which should be a string like “ABC”, “PeakChain”, etc.

However, the currency symbol is not quite the same. Instead, the currency symbol is a string that is built from hexadecimal digits. For example, “**a8ff**”.

To begin, it’s best to explain that each minting or burning transaction should pay a fee based on the script size that the nodes should execute to validate the transaction. In this way, fees depend on the size of the transactions in bytes, meaning it depends on the size of the script to validate, which is contained in the transaction.

To simplify even further, to calculate the costs of minting a token, we should include the hash of the minting policy in the transaction, represented by the Currency symbol.

**Why could ADA not technically be minted or burned?**

As noted previously, ADA could not be minted or burned. Technically, the explanation is that the currency symbol of ADA is just an empty string, which could not be the hash of any script. Thus, no script can mint or burn ADA.

Perhaps, however, it could be said that burning ADA is possible by sending it to an address with lost private keys so no one could access them. While this is partially true, the total amount of ADA, in this case, will not be reduced but just unlocked forever.

# **4- Simulation of the Minting of a Token locally using the Plutus Playground and the Emulator Trace Monad**

As presented in previous blog posts, after creating the validator script, which in our case is the minting policy, as well as upon completing coding the endpoint, we can now test our code by simulating its execution.

Here, there are two methods available — the first of which is using the Plutus playground. We paste the whole code on our tool and configure the input parameters.

In the following scenario in the screenshot below, we mint 555 pieces of a token that we call it “ABC” by wallet one. The second wallet mints also a 444 Token “ABC”. In this example, we didn’t specify in the minting policy which user is allowed to mint the Token “ABC”. This is in contrast to the former policy, where only one user could mint a specific token based on their public key hash.

To add a further example, in what follows, we have specified a policy where everyone could mint this token.

For now, we’ll move back to the scenario in questions. After waiting for some time, wallet one will burn 222 of the same token.

![](https://ucarecdn.com/d3206f83-56b9-444e-92de-cd6d900a39ec/-/preview/-/format/auto/-/quality/smart/)

**Figure 5:** Overview of the configuration of the Plutus Playground Tool to simulate the minting script

Next, we perform the scenario to check the results. Ultimately, we have got three UTXOs as output of the minting transaction. The first UTXO contains the fees. The second UTXO contains the remaining amount of ADA that the wallet possesses after subtracting the fees and the minimal required ADA (the concept of min ADA was already explained previously in point 1 of the blog). The third transaction output comes with the amount of the newly minted token, 444 ABC tokens.

![](https://ucarecdn.com/156d6e07-57f5-469f-ab10-30b24989d683/-/preview/-/format/auto/-/quality/smart/)

**Figure 6:** Overview of the minting transaction input and outputs of Wallet two

Now, we can look at the minting transaction results submitted by Wallet one, where we have minted 555 ABC Tokens.

![](https://ucarecdn.com/39100960-038c-4984-b586-8ffc6b1d03b1/-/preview/-/format/auto/-/quality/smart/)

**Figure 7:** Overview of the input and outputs of the minting transaction of the Wallet one

But now, the third transaction is burning about 222 ABC Tokens in its possession. So, this means just 333 ABC remains in its balance.

![](https://ucarecdn.com/731f064b-eb07-498a-8e3f-0bea65c9ca86/-/preview/-/format/auto/-/quality/smart/)

**Figure 8:** Overview of the input and outputs of the burning transaction of the Wallet one

As a previous blog analyzed, Plutus Scripts could be tested using the emulator trace wallet, which is a more practical way to test our scripts when building a DApp. Hence, Lars conducted a presentation on how to simulate the minting and burning script using the emulator trace Monad.

![](https://ucarecdn.com/158d0968-8c1f-43aa-aa8f-5885ecca1480/-/preview/-/format/auto/-/quality/smart/)

**Figure 9:** Overview of the emulator trace Monad, as well as the final state of the wallets after executing the minting and burning scripts

# **5- Minting a token in the testnet or mainnet using the Cardano CLI or the PAB**

As discussed in an earlier post, we can deploy a smart contract using two tools. One of these tools is the Cardano CLI, and the second is the Plutus Application Backend. The two methods were discussed in detail in the [sixth lecture of the Plutus pioneer program](https://www.youtube.com/playlist?list=PLNEK_Ejlx3x2sBWXHdFBRgkzPF6N-1LVi).

Naturally, it is possible to mint a token by utilizing the same tools. In this way, each tool poses unique advantages and disadvantages.

Using the CLI, we should do a lot of manual work compared to the PAB scenario. Also, we must do some preparation work. Finally, we must alter the script to serialize and write to disc various Plutus types.

But, with PAB, this kind of preparatory work is not necessary. Still, we must install various Plutus Apps locally, which are obviously resource-intensive.

These tools include the Plutus PAB, the Cardano Wallet, the Chain Index, and a Cardano Node.

To learn more about the PAB, check [this link](https://plutus-apps.readthedocs.io/en/latest/plutus/explanations/pab.html).

**You can find the original article published in** [PeakChain](https://medium.com/peakchain) **Medium Publication under** [this link](https://medium.com/peakchain/building-on-cardano-my-whole-journey-part-7-how-to-mint-and-burn-tokens-and-nfts-in-cardano-49bedd8c8df6)**.**

**Support also our PeakChain Automotive Solutions in Project Catalyst Fund 9!**

[1- PeakChain Car Wallet Device](https://cardano.ideascale.com/c/idea/414249)

[2- PeakChain Uber on Cardano](https://cardano.ideascale.com/c/idea/414255)

[3- PeakChain Fleet Management Platform](https://cardano.ideascale.com/c/idea/414216)

[4- PeakChain Car-Sharing Platform](https://cardano.ideascale.com/c/idea/414199)

**Author:** [Oussama Benmahmoud](https://twitter.com/@oussbenma), CEO of [PeakSoft GmbH](https://peak-soft.de/) and Founder of [PeakChain](https://peak-chain.com/)
