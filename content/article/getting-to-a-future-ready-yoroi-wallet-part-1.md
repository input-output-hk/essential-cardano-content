---
title: "Getting to a Future-Ready Yoroi Wallet: Part 1"
tags:
  - Yoroi
  - Stablecoin
  - Emurgo
url: ""
image: https://ucarecdn.com/5d5bf067-9390-4152-a1f6-f11a41c83b04/
image_text: Yoroi Wallet
---

[Yoroi Wallet](https://yoroi-wallet.com/) is one of the most important products EMURGO has built. 

Our cryptocurrency light wallet is the gateway to all other products, services, and features that we are planning including an especially exciting launch announcement at Cardano Summit 2022.

However, we do acknowledge that for some time, the performance of our wallet has left a lot to be desired and we have taken the last few months to address these issues. 

Now that the first phase of Yoroi’s performance improvement plan is being put into action and a major improvement is scheduled to be released in the coming weeks, we would like to take a moment to explain what challenges we faced as well as our plan going forward to build a better Yoroi. 

So as we lay out our phased approach below for getting to a Future-Ready Yoroi, keep in mind that this is a journey, with several stages involved – but one that we are committed to taking. 

Let’s start with some history, as EMURGO has gone through our fair share of challenges and successes over the past few years, and it helps to put where we are in context.  

## **The Yoroi of Yesteryear**

We’ve been developing Yoroi Wallet since 2018. Our team had grown from 5 developers to 11 by 2020. 

Then right as Cardano’s user base started to rapidly grow, we experienced unfortunate changes in management and other difficulties. 

We rushed to keep up with the demand and in that rush, we went down some wrong paths from a technical architecture perspective. 

With new leadership this year, a seasoned Chief Technology Officer, and a dedicated technical team now on board, we’ve been able to reimagine and carefully re-engineer our product architecture, user experience, and development process. 

The best way to lay out our approach is to use a Good-Better-Best (G-B-B) framework. 

It’s a practical framework for Yoroi’s improvement progression and how we get to a future-ready Yoroi Wallet. 

In Part 1 of our three-part series, we will cover Yoroi Good State.  

In the following parts, we will discuss Yoroi Better State, and how we get to a Yoroi Future-Ready Best State. There’s a lot to cover, so let’s get started. 

## **Yoroi Good State for 2022**

### **1) We’ve implemented a decoupled architecture for Yoroi Wallet**

Decoupled vs. monolithic architecture: In the world of software, there are two types of architecture. A monolithic architecture acts and serves as a single system with components coupled together. In a decoupled software architecture, components of the system are built separately but integrated with well-defined interfaces so that a change in one component’s codebase does not impact the other. It also means that while one team is fixing one part of the app, another team can be improving another part without blocking each other.

A decoupled architecture gives Yoroi several benefits: A decoupled architecture allows developers to deploy new code for each component independently without needing to update the entire code base. This makes Yoroi easier to develop, test, and maintain, resulting in:

*   Better user experience due to faster signing and processing of transactions
    
*   Improvements in time to delivery of new features and UX improvements that the community wants
    
*   Freedom and flexibility to scale business logic independently from frontend UI
    

How we Achieved a Decoupled Architecture – Moving Yoroi’s business logic from the front end and back end: Keeping the front end free of business logic is a good software engineering practice. When too much data and business logic are processed, it impacts the performance of the wallet. So moving business logic from the front end to the back end improves the performance and maintainability of the wallet and allows us to better handle Yoroi user requests.       

Knowing that moving the business logic and related data processing to the backend will ultimately provide the best user experience, we achieved further performance improvements because: 

*   Due to the growth of transactions on Cardano, Yoroi Wallet no longer relies on transactions from the blockchain to generate UTXOs (unspent transaction outputs). We have developed an entirely new service to provide the UTXOs efficiently.
    
*   The new UTXO service also provides wallet assets, including tokens, NFTs, and user balances.
    

### **2) We’ve made changes to how we store and retrieve data that improve Yoroi’s efficiency**

Yoroi Then: Since 2018, Yoroi has been using PostgreSQL, an open-source relational database, for its data management.  Relational databases like PostgreSQL utilize tables and indexing for data management. This makes PostgreSQL great for handling small to medium-sized information but has query limitations as the size and interconnectedness of the blockchain data increases.

Yoroi Now: As part of our performance review, we looked into other options for managing the various data gathered from the Cardano Blockchain and from Yoroi Wallet itself.  We’re now in the process of our switch from PostgreSQL to a Graph database which is great news for Yoroi users, as they will see significant performance upgrades when fetching data. 

### **3) We’ve made critical operational improvements**

Our Yoroi users were commonly experiencing slow wallet syncing and other inconvenient performance issues. Sometimes this was caused by congestion and overload to our backend servers. To solve this, we’ve made a sizable investment to upgrade servers to enterprise-grade. We have added servers with enhanced memory and increased processing power to operate well during peak loads.  This infrastructure enhancement together with software architecture changes has resulted in faster transactions and sync times.

In addition, we are adding management capabilities to our data centers to monitor the health of our systems and respond to issues before they impact our users. Our new enterprise-grade infrastructure allows us to set a threshold for the amount of data we can handle, and when it goes over this limit or when something fails, we are notified automatically. This lets us scale up and down the infrastructure, or take other corrective measures, as needed. 

### **4) Other improvements**

There are many developments in Yoroi’s “Good State” that are not covered in depth here, but they are no less important. One example is internal control process improvements, a key part of the team’s continuous process improvement initiative. Another example is the change in our testing process – including a new effort to involve the Cardano community in testing wireframes.   

In sum, the primary objective of Yoroi Good State is to lay the foundation for sustainable growth as Cardano adoption increases. As the number of users and transactions on Cardano increases so will Yoroi Wallet’s relative performance. 

Stay tuned for Part 2 of the Getting to a Future-Ready Yoroi Wallet series where we discuss EMURGO’s New Database Sync: What is it, How it Performs Better, and Why it Matters.

## **Download Yoroi Wallet to get ready for Cardano’s Web3 future and send us your feedback**

[Click here to download Yoroi Wallet](https://yoroi-wallet.com)

Yoroi is an open-source and the first light wallet built for Cardano ada users to be your gateway to Cardano’s Web3 ecosystem of dApps including DeFi and NFTs.

As a self-custodial wallet, the user always has complete control over their Cardano ada and can stake and unstake as they wish.

EMURGO and Yoroi Wallet would also love to hear back from the community. We have created a Yoroi community feedback form to gather ideas and ways to improve the Yoroi user experience.

Please find the Yoroi community feedback form [here](https://forms.gle/dyuqo6d7fUYteH99A).

If you need further assistance, [](https://yoroi-wallet.com/#/support)contact Yoroi’s customer help desk [here](https://emurgohelpdesk.zendesk.com/hc/en-us) and a customer support specialist shall respond within 24 hours.

Authored by: Keisha Dwyer

Acknowledgments: Vijay (CTO), Juliano Lazzarotto, Tyler Wales

**About Yoroi Wallet**

*   Yoroi Twitter: [@YoroiWallet](https://twitter.com/YoroiWallet)
    
*   Official Website: [yoroi-wallet.com](//yoroi-wallet.com)
    

**About EMURGO**

*   Official Homepage: [emurgo.io](//emurgo.io)
    
*   Twitter (Global): [@EMURGO\_io](https://twitter.com/emurgo_io)
    
*   YouTube: [EMURGO channel](https://www.youtube.com/channel/UCgFQ0hHuPO1QDcyP6t9KZTQ)
    
*   Discord: [EMURGO Community](https://discord.com/invite/AWEp2SG437)
    
*   Facebook: [@](https://www.facebook.com/emurgo.io/)[EMURGO.io](//EMURGO.io)
    
*   Instagram: [@EMURGO\_io](https://www.instagram.com/emurgo_io/)
    
*   LinkedIn: [@EMURGO\_io](https://www.linkedin.com/company/emurgo_io/)
