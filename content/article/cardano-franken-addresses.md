---
title: Cardano Franken Addresses
tags:
  - Franken address
  - Vcoincheck.io
url: ""
image: https://ucarecdn.com/639e3c2a-8473-458d-ada4-c6e2ab137da2/
image_text: ""
---

## **Introduction**

On the Cardano blockchain, apart from storing information about the network and spending rights, a wallet address also contains information about the staking right. This characteristic sets it apart and makes it significantly different from wallet addresses on other blockchains.

In this article, we will deep dive into understanding the workings of a unique address format within Cardano, known as Franken addresses

Understanding this concept optimizes the utilization of Franken addresses, safeguards one's holdings, and helps avoid vulnerabilities or security flaws during the creation of smart contracts on the Cardano network.

**Shelley Wallet Address**

Firstly, we need to understand the current format of Cardano wallet addresses (from the Shelley era onwards).

The current Shelley wallet address, often seen most prominently after decoding via bech32, comprises the following fundamental components:

1.  **Header Byte:** The first 4 bits contain information such as which network the address is for (testnet or mainnet), while the subsequent 4 bits denote the type of address (e.g., script address or regular wallet address).
    
2.  **Payment Part:** This section encrypts the public key of the wallet and is the most critical part of the address as it signifies who has the spending rights over the funds or assets associated with that address. The owner could be an individual or a smart contract holder, being the entity in possession of the private key corresponding to the public key designated within the address.
    
3.  **Delegation Part:** Typically comprises around 28 bits and comes immediately after the payment part. It indicates who has the authority to choose where the funds in the address are staked and has control over the rewards obtained from staking those funds.
    

![](https://ucarecdn.com/b6fc93c1-fcb3-4ef6-8622-e2b3ae9e93a3/-/preview/-/format/auto/-/quality/smart/)

The control of delegation also occurs through the corresponding private keys. In many instances, a wallet address might not have a delegation part, typically seen in wallets managing funds for others without engaging in staking activities.

## **Franken Address**

### **Concept**

When a user creates a Cardano wallet, it can generate numerous receiving/sending addresses. However, all of these addresses share a single [stake key](https://www.essentialcardano.io/glossary/stake-key) located within the delegation part. This stake key is further encrypted into a stake address used for staking. Consequently, the user has the staking authority over the funds across all addresses linked to that wallet.

Nevertheless, anyone can create a payment or delegation address arbitrarily from two entirely different addresses. This means that we can easily generate a wallet address where the owner of the payment key designated in one address is different from the owner of the stake key designated in the delegation part. Such an address is termed a Franken address, a hybrid address, or a mangled address.

![](https://ucarecdn.com/96575249-b093-4757-9ec3-597634fd56fa/-/preview/-/format/auto/-/quality/smart/)

### **Characteristics**

This hybrid address is a type of address that doesn't exist in any wallet but is manually coded using bech32 or can be created through the advanced functionality of the Eternl wallet by utilizing the payment key and delegation key from two distinct addresses.

The actual owner is the individual holding the payment key of address A, while the holder of the delegation key (B) holds temporary authority. When the funds within this address are completely spent, the staking rights associated with these funds cease to exist.

When funds are transferred into a franken address where the payment part belongs to wallet A and the delegation part belongs to wallet B, the displayed balance within wallet B will alter. B then possesses the staking rights over this balance to receive rewards, while the actual asset amount within wallet B remains unchanged.

**Example:**

> If Alice sends 1,000 ADA to an address where the payment part is controlled by Bob, while the delegation (staking) key is still controlled by Alice, Bob can spend that 1,000 ADA, but Alice retains the authority to choose where to stake those funds and receive rewards from staking the 1,000 ADA.

All information, transactions, and assets from all addresses sharing the same staking key are recorded on the blockchain as transactions of a single wallet. Therefore, people often use the stake address of the wallet to verify information. Consequently, all information from the franken address is recorded on the stake address of wallet B. This is why information on wallet A's address remains entirely hidden. Thus, querying information from the stake address of the wallet on the blockchain can be relatively accurate but not entirely precise.

In the scenario where an NFT is transferred into this hybrid address, checking wallet A will show the presence of the NFT. However, when investigating ownership details, it will show wallet B as the owner. To prove the true ownership of the NFT, providing the corresponding signature of the payment part containing the NFT is necessary. Therefore, B will be unable to provide such proof.

## **Use Cases**

1.  Some application developers may leverage delegation rights to receive rewards or assist users in maintaining their staking rights while their funds are locked in the application's smart contract. By designating the user's delegation part within the receiving address (similar to what platforms like Wingriders or Indigo are doing):
    
    ![](https://ucarecdn.com/e7ab4529-7f6c-44a9-9b2c-38230cc993e9/-/preview/-/format/auto/-/quality/smart/)
    

> For instance: A user sends 1000 ADA into a smart contract (containing a franken address with the user's delegation key) and mints 300 iUSD. Recorded transaction information:
> 
> *   Address: stake01abc - 1000 ADA (sent)
>     
> *   Address: stake01abc + 300 iUSD (received),
>     
> *   Staking Controlled + 1,000 ADA.
>     
> 
> If the amount locked in the smart contract is liquidated, this displayed balance will also be affected and reduced accordingly.

2.  Any user can create a franken address to transfer their funds without revealing their primary wallet address by sending funds to a hybrid address containing their payment key and delegation key from different wallets.
    
3.  The franken address serves as a means to register additional commitment to a staking pool without requiring a secondary ownership registration on the blockchain.
    
4.  While users do not lose the spending rights to their funds, malicious actors can stake the exchanged funds until the victim realizes that these funds do not contribute to their staking balance or until their wallet inadvertently uses this amount in a transaction.
    
5.  In the NFT market, malicious buyers might exploit this vulnerability to control the funds they use to purchase NFTs by sending payment to a hybrid address where the seller controls the payment part but designates the buyer's staking key in the delegation part.
    
6.  Malicious actors can use someone else's delegation key, creating a franken address to seize benefits from staking. For example, signing up for whitelists, receiving NFTs, receiving token airdrops, ISPO (Initial Stake Pool Offering) participation, etc. This is similar to the case of Ray's ISPO being hacked using a Franken address as mentioned above.
    
7.  On decentralized exchanges, agents can exploit this loophole using a franken address to take control of users' staking rights when executing asset swap transactions.
    
    > Example: Alice wants to swap 100 ADA for WRT tokens. Bob wants to swap 200 WRT tokens for 100 ADA. Jack acts as an intermediary on the trading platform and exploits this vulnerability. He creates a transaction contract but sends the funds to the hybrid address containing Jack's stake key to hijack the staking rights of the exchanged amount.
    > 
    > ![](https://ucarecdn.com/3b61fdd8-04d7-4640-93ea-49393f77d1c3/-/preview/-/format/auto/-/quality/smart/)
    

When aware that the funds in their wallet have been exchanged, users can reclaim their staking rights by transferring the entire exchanged amount back to their correct wallet address.

## **Conclusion**

Compared to wallet address types on other blockchain networks, addresses on Cardano are unique and more complex. Anyone can create a wallet address that holds control by two different owners. Therefore, the characteristics of Franken addresses on Cardano need more awareness to help developers and users understand their functionality, protect their own interests, and avoid unforeseen complications.

Hence, we have explored the concept of hybrid addresses on Cardano. Real-life use cases, as well as some remedies to address shortcomings, are available for readers to refer to at the end of the article.
