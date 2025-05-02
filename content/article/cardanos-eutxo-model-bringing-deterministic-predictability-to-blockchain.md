---
title: "Cardano's EUTXO model: bringing deterministic  predictability to blockchain"
tags:
  - cardano
  - eutxo
url: ""
image: https://ucarecdn.com/9f1d7b12-1521-478f-b3ce-b33e0d0d0ac9/
image_text: "Banner image for the 'Cardano's EUTXO model: bringing
  deterministic  predictability to blockchain' article"
---

_Standfirst: Discover the simplicity, security, and power behind Cardano’s extended unspent transaction output (EUTXO) model_

Cardano builds on Bitcoin's unspent transaction output (UTXO) model, enhancing it for smart contracts and complex applications without sacrificing security or simplicity. This advanced version, extended UTXO (EUTXO), offers significant benefits for developers and users.

In his [recent video](https://x.com/MinswapIntern/status/1907010224428388409), Charles Hoskinson highlighted the model’s power:

‘When you look at EUTXO, it’s really hand-in-glove built for isomorphism between the off-chain and on-chain. In other words, equality between these two.’

## Understanding EUTXO through a simple analogy

Think of a Bitcoin wallet as a jar filled with individual coins, each being a UTXO of a specific value. In this example, let's assume there are two coins – UTXOs – in the jar, with these values: $50 and $20. If a user wants to make a purchase worth $30, they will pay $50 and get $20 in return (similar to what you would get when buying something in a shop). 

This $20 (the 'change') is the new UTXO to be added to the jar, and can be spent on another purchase. A Bitcoin (or Cardano) wallet merely contains a group of UTXOs (called the UTXO set), with the difference that Cardano extends the UTXO concept by adding data and logic, enabling much more versatile and functional UTXOs well beyond value representation.

## Why EUTXO matters

Cardano’s EUTXO model offers several key benefits:

*   **Deterministic smart contracts:** users know exactly what a smart contract will do before it executes. The outcome of a transaction depends on its inputs, not on the global state of the blockchain. This predictability builds trustworthy and reliable decentralized applications (DApps).
    
*   **Bitcoin decentralized finance (DeFi)**: EUTXO can facilitate interaction between Bitcoin and Cardano’s DeFi platforms thanks to the model’s complex smart contract capabilities. Among a number of ecosystem players, Input | Output is working on harnessing this interoperability.
    
*   **Predictable fees and outcomes:** there are no surprise costs and unpredictable ‘gas wars.’ Users can calculate the fees required for a valid transaction beforehand.
    
*   **Parallel execution potential:** EUTXO potentially permits multiple transactions to process simultaneously, significantly boosting scalability. Because transactions only depend on their inputs, they can, in principle, validate in parallel without interfering with each other.  This will be exploited in future Cardano protocol updates.
    
*   **Easier testing and verification:** the model’s deterministic nature makes it easier to test and verify smart contracts. Formal methods and off-chain simulation can ensure that DApps are safe, secure, and function as intended before deployment to mainnet.
    

## EUTXO v account-based models

Unlike account-based models, where assets reside in accounts and the state of the blockchain can change during transaction validation, EUTXO offers a more predictable and secure environment. In the Cardano EUTXO model, users can check the validity of a transaction off-chain before sending it to the blockchain. A transaction can still fail if another transaction concurrently consumes an input that the transaction expects, but if all inputs are still present, the transaction is guaranteed to succeed. This predictability reduces the risk of loss and adversarial behavior.

## Dive deeper into EUTXO

Want to learn more about the EUTXO model and its benefits? Check out these resources:

*   [The EUTXO Handbook](https://www.essentialcardano.io/article/the-eutxo-handbook)
    
*   [EUTXO v account-based models infographic](https://www.essentialcardano.io/infographic/eutxo-v-account-based-models)
    
*   [Six reasons why EUTXO wins](https://www.essentialcardano.io/article/six-reasons-why-eutxo-wins)
    
*   [EUTXO explained on Cardano Docs](https://docs.cardano.org/about-cardano/learn/eutxo-explainer)
