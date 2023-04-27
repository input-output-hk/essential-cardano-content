---
title: Why does Cardano stake not lock ADA?
tags:
  - Staking
  - Vcoincheck.io
  - Wallet
url: ""
image: https://ucarecdn.com/74094b91-1408-4d73-86ad-b952d4fbb59d/
image_text: ""
---

One of the basic questions about Cardano that every new user asks is “Does Cardano stake pool lock ADA?” 

**The answer is, No! Absolutely not**

The ADA staking mechanism on Cardano's network does not lock assets at all. Users have full rights to use the assets in their wallets whenever and wherever they want.

This is very contrary to real-life common sense when we go to deposit in Bank or staking or farming services in Defi where users have to deposit their assets in

In this article, we will explore this special mechanism of Cardano.  

### **Cardano address**

_Note: To better understand new users need to have basic knowledge of “Cardano address”. Readers can refer to the documents of Cardano or the author will briefly summarize below._

Blockchain technology is built on decentralization and the communication intermediary between the blockchain and the user is the address. The design of the address of a foundation blockchain is very important and it also greatly determines the development ability of that blockchain in the future.

Since Cardano entered the Shelley era with the introduction of the Staking pool system, Cardano's address structure also changed from Byron address to Shelley address.

The Shelley address is the type of address that current users use to stake ADA into the Cardano network. Shelley addresses are divided into 2 types: payment addresses and stake addresses

The structure of a payment address consists of 2 parts combined together:

\- Payment part: containing information about the payment (payment credential)

\- Delegation part: containing information about the delegation (Stake Address Reference).

In the design of the Shelley address, the payment address will be used to receive and send assets. The stake address is only used to record relevant information about the ADA delegated to the Cardano network of the asset owner.

Both delegation and payment parts are cryptographically hashed from the private key which means they both contain the same original owner information.

If we analyze a common payment address via Explorer [Cardanoscan.io](//Cardanoscan.io) we will see the following.

 ![Fig1. Shelley payment address is combined by payment and stake](https://ucarecdn.com/c8251085-289c-4aa1-98d5-7abf507eb52f/)

### **Why does CARDANO stake not lock ADA?**

As above we have grasped the basic knowledge about Shelley address such as payment address, stake address, payment credential, stake credential, stake address reference

The following will explore the correlation between those components to see why ADA stakes don't lock up assets.

  
![Fig2. Correlation in Shelley address’s structure](https://ucarecdn.com/7f0e0166-7989-42fd-8482-5f528258d897/)

According to the figure above, we can see the correlation inside a Shelley address structure.

\- Stake address reference will contain information about the number of assets in the payment address and record this information in the "By value" section

\- Value will be the reference to a record in stake credential

\- When a wallet delegates to a stake pool, the pool will record information about the asset from the stake address.

\- The Cardano network-wide staking system will only reference the information in the stake address of each generated address.

\- The information will be updated through each snapshot.

So we can see that ADA is always contained in the payment address, the system will only reference the information from that address. Therefore, the user is free to use ADA in his wallet anytime, anywhere.

To do this, the main point is that the payment address and stake address are encrypted from the public and private keys.

The diagram below will better explain the technical aspects of the design of the ADA staking mechanism.

  
![](https://ucarecdn.com/21ed9dd9-85de-4631-a677-caa91d6f82e9/)

_Fig3. Correlation between address and stake pool_

\- To stake ADA, every user must register to stake into a specific stake pool.

\- When a wallet registers into a pool, all components in this pool will only be able to register for the staking verifying key.

\- In simple terms, we can consider the Staking key as a stake address, and as we all know the stake address does not have the function of receiving and sending Cardano's assets. It only contains information about the property owner, not the right to change the property.

\- Finally, we all see that the stake pool or the Cardano system has absolutely no right to affect the ADA located in the user's wallet directly.

### **Conclusion**

Thus, we can see the uniformity and science in the design of Shelley's address, and the staking system and the important thing is that ADA stakes do not lock assets.

In fact, the Cardano address is much more complex than what is shown above, it represents a visionary design for a huge ecosystem in the future.

Hopefully, every Cardano user can understand the value and safety of staking ADA on the Cardano blockchain network.

_This article was written and checked by Vcoincheck.io team. A project is sponsored by Catalyst._
