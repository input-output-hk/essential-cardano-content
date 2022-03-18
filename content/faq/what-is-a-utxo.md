---
title: What is a UTXO?
tags:
  - Programming
  - FAQ
url: ""
image: ""
image_text: ""
---

UTXO stands for unspent transaction output. This model allows keeping track of users’ balances after sending or receiving funds on the blockchain. In the UTXO model, a transaction has inputs and outputs, where the inputs are unspent outputs from previous transactions. As soon as an output is used as input in a transaction, it becomes spent and can never be used again. 

UTXO is, in many ways, similar to cash. A good analogy is this: Imagine you have $50 in your wallet. This amount could be made up with several combinations: two $20 bills and one $10, four $10 bills and two $5 bills, and many others. But regardless of the permutations, the amount ($50) remains equal. UTXOs work in the same way. Whatever balance you have in your blockchain wallet (say, 150 coins) could be made up with many different UTXO combinations, based on previous transactions, but the balance amount remains the same. In other words, the balance held in a given wallet address is the sum of all unspent UTXOs from previous transactions.
