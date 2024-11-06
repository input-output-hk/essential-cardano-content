---
title: The MeshJS open source solution for the NFT vending machine problem
tags:
  - meshjs
  - aiken
  - Onchain
  - Offchain
  - NFT vending machine
url: ""
image: https://ucarecdn.com/83623e00-da67-45d1-a6a4-ab8c5e4b0dcd/
image_text: MeshJS Aiken contracts on-chain off-chain
---

A few months ago we successfully developed a series of standard contracts in _Aiken_, which offer solutions to use cases without a significant number of moving parts.

Currently, we are expanding our collection of _Aiken_ contracts to cover more complex use cases. One such contract approaches the well-known NFT vending machine problem. Although a seemingly simple problem, implementing efficient logic has traditionally presented challenges of security, user experience, and validator limitations.

Today we present a design proposal that not only contributes to the progress of the Cardano development ecosystem in the area, but, as usual, we serve it open source and ready to be integrated into existing solutions, or to be built upon.

# **Contract name: NFT Minting Vending Machine**

**Basic logic behind the contract:**

*   Mint an “oracle” token that keeps track of the number of NFTs in a collection that are minted: each time an NFT in the collection is to be minted, the oracle token will have to be included in the transaction.
    
*   Each transaction will increase by one unit the number of NFTs in the collection that the oracle token keeps track of.
    
*   In addition, the oracle token contains key metadata that defines each NFT mining transaction: NFT name, NFT value.
    
*   the contract scaffolds all the business logic: keeps track of the mined NFTs, withdraws from the buyer’s wallet the amount defined in the oracle token, sends the money of the NFT sale to the owner of the collection.
    

Let’s play a little bit in the [Mesh Playground](https://meshjs.dev/)!

**Action:** “Setup Oracle”

1\. Go to [https://meshjs.dev/smart-contracts/plutus-nft.](https://meshjs.dev/smart-contracts/plutus-nft.) Search for the “Setup Oracle” action.

2\. Connect your _preprod_ wallet

3\. Name the collection of NFTs and the value to be charged for each one.

4\. Run the demo.

Note: Don’t forget to copy the `ParamUtxo` that is displayed as a result.

**Action**: “Mint Token”

1\. Verify that the _Collection Name_ and _Param UTxO_ fields are correctly set with your data.

2\. Run the demo.

Now, let’s take a look at how the oracle token count changes.

**Action**: “Get Oracle Data”

1\. Verify that the _Collection Name_ and _Param UTxO_ fields are correctly set with your data.

2\. Run the demo.

3\. Copy the JSON object in the _Result_ section.

4\. Open a notepad and paste it.

5\. Run the “Mint Token” action again (the _Collection Name_ and _Param UTxO_ info should still be in place).

6\. Go back to the “Get Oracle Data” action and execute steps 1, 2, 3, and 4.

7\. Now. compare the two JSON. _Notice the difference in the_ `nftIndex` _key? What other differences do you notice? What data do you notice that does not change, and is therefore constant in each NFT of the collection that is minted?_

**Observe a basic principle here:** unlike the previous two actions, querying information from the blockchain does not require modifying the blockchain itself. Consequently, there is no transaction to be signed and no fee to be paid.

**Now, play around a little bit more:** Create a new collection of NFTs. Go back to the “Setup Oracle” action and modify the information corresponding to the value of each NFT in the collection and the name of the collection, and run the whole exercise again.

# **🏄That was fun!**

\---

Both on-chain and off-chain codes are open-source and available on Mesh Github Repository: [https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/plutus-nft](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/plutus-nft)

\---

🍳Want to know what we are cooking for this Catalyst Fund 13 and give us your❤️support to keep the💡lights on? Thanks in advance: [https://meshjs.dev/about/catalyst](https://meshjs.dev/about/catalyst)

  
![](https://ucarecdn.com/4cfc099c-76a0-4812-8671-ca1e27dc47c4/)
