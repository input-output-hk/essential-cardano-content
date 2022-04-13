---
title: Boosting Cardano’s throughput with script referencing
tags:
  - CIP
  - Plutus
  - Development
  - Scalability
url: ""
image: https://ucarecdn.com/c75a09d0-71b4-4f2e-af89-2aabf84994d3/
image_text: Plutus
---

**Original author:**

[Olga Hryniuk](https://iohk.io/en/team/olga-hryniuk) - Technical Writer

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2022/04/13/boosting-cardano-s-throughput-with-script-referencing/): April 13, 2022

**Blurb**:

We take a closer look at just some of the enhancements coming to Cardano in June

**Article**:

During the Basho development phase, the ledger continues to optimize and scale for the growing demand. Along with parameter adjustments and node upgrades, Plutus capability continues to develop at a steady pace.

Plutus is a living, evolving smart contract language. [Cardano improvement proposals](https://cardanofoundation.org/en/news/make-it-even-better-cardanos-improvements-proposals/) – also known as CIPs – play an important role in this evolution. Through the CIP mechanism, anyone can suggest an improvement to Cardano. CIPs encourage community engagement and proposal reviews, which are continually maintained on the Cardano Foundation’s [GitHub repository](https://github.com/cardano-foundation/CIPs).

Let’s drill down into two of these. CIPs for [reference inputs](https://github.com/cardano-foundation/CIPs/pull/159) (CIP-31) and [reference scripts](https://github.com/cardano-foundation/CIPs/pull/161) (CIP-33) have been submitted to be implemented on Cardano and are among those due to be implemented as part of June’s _Vasil_ hard fork. Along with other [scalability improvements](https://iohk.io/en/blog/posts/2022/01/14/how-we-re-scaling-cardano-in-2022/), these enhancements to Plutus will boost throughput for decentralized apps (DApps) decentralized finance (DeFi), RealFi, products, smart contracts, and exchanges building or operating on Cardano.

In this post, we take a closer look at what these CIPs are and how they benefit and optimize Cardano's scalability.

## Reference inputs

Transaction outputs carry _datums_, which enable the storage and access to information on the blockchain. However, these datums are constrained in a number of ways. For example, to access datum’s information, you’d have to spend the output that the datum is attached to. This requires the re-creation of a spent output. Any user who wishes to look at the data cannot spend the old output (which is gone), but must spend the new output (which they will not know about until the next block). In practice, this limits some applications to one ‘operation’ per block, thus decreasing the desired performance.

CIP-31 introduces a new mechanism for accessing information in datums – a reference input. Reference inputs allow looking at an output without spending it. This will facilitate access to information stored on the blockchain without the need for spending and re-creating unspent transaction outputs (UTXOs).

Reference inputs also enable the other key improvement – reference scripts.

## Reference scripts

When you spend an output locked with a Plutus script, you must include the script in the spending transaction. Hence, the size of the scripts contributes to transaction size, which directly influences Cardano’s throughput.

Large script sizes pose problems for users because:

1.  Larger transactions result in higher fees.
    
2.  Transactions have size limits. Large scripts can hit the limits. Even if one script fits, multiple scripts in one transaction might not fit. This makes it difficult to execute complex transactions that rely on several scripts.
    

CIP-33 suggests script referencing as a possible solution. This is the ability to reference a script without including it in each transaction, which hugely reduces the contribution of scripts to the transaction size. Referencing scripts in multiple transactions can significantly reduce transaction sizes, improve throughput, and reduce script execution costs.

**How does script referencing work?**

The idea is to use reference inputs and outputs that carry actual scripts (reference scripts). The script referencing proposal eliminates sending frequently-used scripts to the chain every time they are used. Instead, scripts will be available in a persistent way on-chain. This means that the transaction using the script will not need to include the script itself, as long as it references the output that contains it.

This approach follows the reference inputs proposal ([CIP-31](https://github.com/cardano-foundation/CIPs/pull/159)). CIP-31 considers how to enable data sharing on-chain, and concludes that referencing UTXOs is the most appropriate solution. UTXOs store data safely, and take advantage of the existing mechanisms for size control.

For reference scripts, transaction outputs must be extended to carry an optional field to include a script. The minimum UTXO value for such outputs will depend on the size of the script, following the `coinsPerUTxOWord` protocol parameter.

## Community engagement is key

With the proposals already submitted and implemented, Plutus script referencing and reference inputs are planned to be included in the June _Vasil_ hard fork. The CIP process enables the community to contribute to the development of Cardano by proposing, discussing, reviewing, and contributing to improvement proposals. We encourage the developer community to join CIP discussions and visit [Cardano Foundation’s CIP repository](https://github.com/cardano-foundation/CIPs) for more details.
