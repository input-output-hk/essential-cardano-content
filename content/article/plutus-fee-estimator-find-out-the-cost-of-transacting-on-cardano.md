---
title: "Plutus fee estimator: find out the cost of transacting on Cardano"
tags:
  - Plutus
  - Fees
  - Transaction
  - Development
url: ""
image: https://ucarecdn.com/8628b492-50eb-41a9-bbdd-f2b94397019a/
image_text: An image of a calculator
---

**Original author:**

[Kevin Hammond](https://iohk.io/en/team/kevin-hammond) - Software Engineer

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2022/01/21/plutus-fee-estimator-find-out-the-cost-of-transacting-on-cardano/): January 21, 2022

**Summary**:

Our new fee estimator – released today – will help developers estimate the cost of smart contract scripts for maximum efficiency and minimum cost

**Article**:

[The ‘Alonzo’ smart contract upgrade](https://iohk.io/en/blog/posts/2021/09/12/today-will-feel-like-a-destination-yet-a-new-exciting-journey-begins/) deployed to the Cardano mainnet in September 2021 turned Cardano into a functional platform for the development of decentralized applications (DApps) built in [Plutus](https://iohk.io/en/blog/posts/2021/04/13/plutus-what-you-need-to-know/).

With the Cardano ecosystem steadily growing, a great number of [DApps are being built](https://twitter.com/InputOutputHK/status/1475107377775099910?s=20) and readied for launch on Cardano. Either in final testing, deployment, or active development, Cardano will soon host a variety of DApps covering [DeFi](https://iohk.io/en/blog/posts/2022/01/10/defi-demystified/) offerings, NFT markets, wallets, exchanges, games, and more.

The deterministic design of the Cardano ledger allows developers to predict how much they will pay for contract execution and there’s no fee for contract failure. Deterministic transaction processing, low fees, and security – all of these are major benefits of transacting and building on Cardano. Here, we’ll take a closer look at Cardano pricing and introduce a new Plutus fee estimator developed to provide better clarity on the processing fees.

## The benefits of building on Cardano

Many factors influence a blockchain's price competitiveness: functionality, quality, security, and, of course, liquidity.

The design principles underpinning the Cardano ledger ensure high performance while respecting rigorous security properties. Cardano uses an [Extended Unspent Transaction Output (EUTXO) accounting model](https://iohk.io/en/blog/posts/2021/03/12/cardanos-extended-utxo-accounting-model-part-2/), which greatly contributes to its [deterministic design](https://iohk.io/en/blog/posts/2021/09/06/no-surprises-transaction-validation-on-cardano/). Determinism refers to the predictability of outcomes. This means that Cardano transactions and scripts can be validated locally (off-chain), so letting the user know if a transaction is valid before executing it on-chain and without paying any fees. Moreover, transaction fees are fixed and predictable. To compare, smart contract execution costs on Ethereum vary depending on the network load, with fees fluctuating from $5 to hundreds of dollars (see [The ridiculously high cost of Gas on Ethereum](https://coingeek.com/the-ridiculously-high-cost-of-gas-on-ethereum/)). Moreover, even failed Ethereum transactions may also incur fees, creating additional uncertainty about pricing.

In contrast, on Cardano, users can calculate the potential fees for transaction processing in advance. Because the user knows in advance whether the transaction is valid or not, there is no need to pay for a transaction that will potentially fail. This saves wasting funds and eliminates on-chain failures. Cardano’s execution fee in ada is always stable as it depends on pre-set network protocol parameters rather than on varying network congestion factors, for example.

## Cardano’s pricing model relies on demand over supply

Cardano’s approach to price setting mainly relies on market demand over actual supply. With smart contract support on Cardano, there is now more than one type of demand competing for the common supply. Thus, it is crucial to consider both relative and absolute pricing. One way to do this is to inspect the effects of smart contract pricing, non-fungible token (NFT) operations, etc., with respect to some common value – in our case, the consumption of Cardano’s processing power. 

With Cardano, smart contract pricing model is based on a fixed cost, which relies on the pricing of the spent resources (UTXO size or computation/memory used when running). 

Fees must be paid to fairly compensate for stake pool operation (SPO) work and for the resources used to validate network transactions. In addition, making sure that any particular way of using Cardano is not substantially cheaper than another helps mitigate whole classes of adversarial attacks (e.g. a classic DDoS attack).

Flexibility is also key and an important feature of the Cardano protocol as it provides the possibility to change its parameters and adapt to price fluctuations. For example, if ada significantly increases in value, protocol parameters can, if required, be adjusted to prevent the user from overpaying for smart contract execution. 

## Plutus fee estimator

The Plutus fee estimator tool has been developed by IOG for price benchmarking and comparison. Today we are making it available for developers or curious Cardano users on [our public testnet site](https://docs.cardano.org/cardano-testnet/tools/plutus-fee-estimator). The estimator uses information from real-world Plutus transactions to predict the fees that will be charged for a transaction. The estimator can be used to calculate fees for actual transactions (e.g. to determine the fees that will be charged if the network parameters change), and also to estimate fees for individual script transactions or complete DApps before or during development. It may also be useful to determine the effect of script changes or optimizations on fees.

The estimator uses the same fee calculation formula as the actual Cardano node. Given sufficiently accurate inputs, it can give an accurate idea of the required fee. By combining the costs from multiple transactions, a user can easily predict how much a whole DApp might cost. This will be valuable for developers, business analysts, etc. The estimator includes a number of examples based on real transactions that have been verified against actual fees.

Fee calculation requires three pieces of information:

* **The total on-chain transaction size in bytes**: a simple transaction, for example, is around 300 bytes, one with metadata is around 650 bytes, and Plutus scripts are typically 4,000-8,000 bytes (future optimizations will reduce this).
* **The number of computational (CPU) steps** that the script uses: each step represents 1 picosecond of execution time on a benchmark machine. Typical scripts should consume less than 1,000,000,000 CPU units (1 millisecond).
* **The number of memory units** that the script uses: this represents the number of bytes that the script allocates. Typical scripts should consume less than 1,000,000 memory units (1MB of memory allocation).

Let’s take a look at example Plutus scripts to understand their execution costs (Figure 1):

![Estimated fees for script processing on Cardano](https://ucarecdn.com/b9348432-f20e-4ffd-aa13-3d8a203723c2/ "Estimated fees for script processing on Cardano")

Figure 1. Estimated fees for script processing on Cardano

The estimator shows that sending a simple transaction would be as cheap as 0.17 ada, whereas the maximum possible cost for a single script would be 2.17 ada. 

The calculation can be extended to DApp execution (see Figure 2). For example, a DApp using three transactions (one simple and two script transactions) might cost ~ 1.50 ada.

![Estimated fees for DApp execution on Cardano](https://ucarecdn.com/d856f910-c3b1-4925-8ee1-adb195c7130c/ "Estimated fees for DApp execution on Cardano")

Figure 2. Estimated fees for DApp execution on Cardano

## The final word

The Alonzo HFC event enabled Plutus script execution on the Cardano mainnet. This was really just the beginning of the journey for Cardano smart contracts. Now, with the launch of major smart contracts projects, we can begin the process of [optimization and scaling](https://iohk.io/en/blog/posts/2022/01/14/how-we-re-scaling-cardano-in-2022/). This includes the ongoing assessment of actual, real-world smart contract usage.

We need to balance the needs of the user and what is good for the network, speed versus correctness, and – as ever – striking that balance between security, scalability, and decentralization.

Future code/script optimizations and system performance improvements will help to refine the Cardano fees model over time. Together with our developer and stake pool operator communities, we will monitor the growth of smart contracts, optimize the Cardano node and the Plutus interpreter implementations, and make other adjustments to best support our user base in terms of fair and predictable transaction fees.

*Check out the [Plutus fee estimator](https://docs.cardano.org/cardano-testnet/tools/plutus-fee-estimator) and be sure – you can easily estimate the processing fee without losing your funds in case of transaction failure.*
