---
title: What is EUTxO?
tags:
  - Programming
  - FAQ
  - EUTXO
url: ""
image: null
image_text: null
---

EUTxO stands for Extended UTxO model. Cardano's EUTxO combines and matures Bitcoin's security and Ethereum's programmability. This model is vastly superior to the account-based model used by other blockchains because it ensures:

*   Enhanced security: every transaction uses a different address, which makes it impossible to track the address or find out the user’s overall balance.
    
*   Scalability: UTxO ledgers allow for transaction parallelization, which reduces congestion.
    
*   Interoperability: due to the implementation of off-chain and sidechain protocols, it is easier to establish interoperability between different blockchains.
    
*   Determinism: on the UTxO ledger, a user can predict the cost and validity of a transaction before it is processed on the chain. Transaction costs are also much lower in the UTxO model as there are no ‘gas’ fees.
