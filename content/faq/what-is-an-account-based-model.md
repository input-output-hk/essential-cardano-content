---
title: What is an account-based model?
tags:
  - Programming
  - FAQ
url: ""
image: ""
image_text: ""
---

Account-based accounting models use an account (which can be controlled by a private key or a smart contract) to hold a coin balance. In this model, assets are represented as balances within users’ accounts, and the balances are stored as a global state of accounts, kept by each node, and updated with every transaction.

In many respects, account-based chains (such as Ethereum) operate in a similar fashion to traditional bank accounts. The wallet's balance increases when coins are deposited, and decreases when coins are transferred elsewhere. This poses a security risk since the recipient’s address can be tracked to reveal its balances, which is not possible with UTXOs.
