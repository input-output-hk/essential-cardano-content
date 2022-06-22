---
title: No-surprises transaction validation on Cardano
tags:
  - Transaction
  - EUTXO
  - UTXO
  - Plutus
  - Smart Contracts
url: ""
image: https://ucarecdn.com/9c2ea2dd-1260-4e80-919a-4e301ac19078/
image_text: A graphic representing a smart contract
---

**Original author:**

[Polina Vinogradova](https://iohk.io/en/team/polina-vinogradova) - Research Engineer

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2021/09/06/no-surprises-transaction-validation-on-cardano/): September 6, 2021

**Summary**:

Cardano's EUTXO model enables the deterministic nature of Plutus script execution

**Article**:

As the Alonzo hard fork brings core Plutus smart contract capability to Cardano, the ledger evolves to meet the growing need for the deployment of decentralized solutions. Cardano ledger design focuses on high assurance, security, and proven formal verification. In alignment with this strategy, it is also important to ensure that transaction processing is *deterministic*, meaning that a user can predict its impact and outcome before the actual execution. 

The ability to guarantee the cost of transaction execution, and how the transaction behaves on the ledger *before* it is submitted, becomes even more prominent with the introduction of smart contract support. [Unspent Transaction Output (UTXO)](https://iohk.io/en/blog/posts/2021/03/11/cardanos-extended-utxo-accounting-model/)-based blockchains, like Cardano, provide such capabilities. Account-based blockchains, like Ethereum, are *indeterministic*, which means that they cannot guarantee the predictability of the transaction’s effect on-chain. This presents risks of monetary loss, unpredictably high fees, and additional opportunities for adversarial behavior.

In this blog post, we take a closer look at the benefits of Cardano’s deterministic design that allows for secure transaction and script evaluation before execution. In the following blog post, coming later this week, we discuss the two phases of transaction validation on Cardano.

## What is transaction determinism and why is it important?

Determinism, in the context of transaction and script processing, is a synonym for *predictability*. This means that a user can predict locally (off-chain) how their transaction will impact the on-chain state of the ledger, without:  

* unexpected script validation outcomes or failures
* unexpected fees
* unexpected ledger or script state updates.

A transaction in a deterministic system might yet be rejected, even if constructed correctly. *Rejected* means that the transaction could not be applied to the ledger at all, therefore having no effect on its state, so no fees are paid. The reason this would happen is due to ledger changes caused by other transactions processed between the time when the initial transaction is constructed and the time it is processed. This can happen even with simple transactions. For example, another transaction might spend a UTXO that a user was also planning to spend. Determinism ensures that, whenever a transaction is accepted, it will only have predictable effects on the ledger state.

## Addressing the issue of indeterminism

*Indeterminism* means that we cannot predict what effects a transaction will have on the ledger before execution. When designing the ledger, as well as a smart contract interpreter, it is important to foresee conditions in which indeterminism *might* occur, and make design decisions to avoid them. One of the main hazards in such a case is access to mutable ledger data, that is data that can be changed or altered. When the changes a transaction or a smart contract make to the ledger depend on its state at the time of processing, rather than only the contents of the transaction, indeterminism might become an issue. 

Ethereum is notably susceptible to this problem. For example, gas prices, or a decentralized exchange (DEX) rate can fluctuate between the time a user submits a transaction and the time it gets processed. This results in unexpected gas fees, or price changes of assets being purchased. Or a script might simply fail, resulting in high execution costs (hundreds of dollars) and no other effect. This could occur, for instance, if the funds available to cover the gas costs run out mid-execution. Deterministic ledger design eliminates these possibilities.

Other possible sources of indeterminism include allowing scripts to see: 

* data in the block containing the transaction, but not included in any transaction, e.g., system randomness, block header, or the current slot number 
* data altered or substituted by an adversary, which might change the outcome of script validation, while the transaction itself remains processable.

In most systems, there are ways to mitigate these issues with improved script-writing practices, or layer-2 solutions. Cardano is designed to guarantee predictable outcomes for all scripts and transactions.

## How basic UTXO model benefits in terms of determinism

The Cardano ledger is built on a UTXO accounting model, which means that assets are stored on the ledger in *unspent outputs*, rather than in *accounts*. Each of these outputs specifies quantities of assets stored therein, together with its address. Unspent outputs are *immutable*, so a transaction might consume the entire output, but it cannot alter it. 

To transfer assets, a transaction consumes one or more outputs and creates new ones, which, in total, contain the same quantities of assets as the ones consumed. These quantities -and their UTXO addresses- are specified in the outputs of the transaction. The only way a transaction can influence the effect of another transaction applied to the ledger is by spending the same UTXO as the later transaction attempts to spend, thus causing the node to reject it. This is the key feature on which the UTXO model relies for maintaining determinism. 

A UTXO ledger has both benefits and drawbacks over the account-based model. The latter will encounter fewer instances of transactions blocking one another, for example. Unlike UTXOs, accounts are mutable ledger data. So a transaction might see, for example, a different quantity of assets in an account, depending on whether it was processed before or after another transaction that updates that same account. This circumstance might not cause the transaction to be rejected, but it could result in different – and unpredictable – changes to the ledger.

Spending a UTXO is just one example of an action a transaction can take. Next, we explain what transaction actions are, and how they can be validated. The most significant set of changes introduced in Alonzo are changes to the process of action validation.

## Validating actions with signatures and scripts

An important aspect of processing a transaction is validating the actions it is taking. A transaction is *taking an action* when it contains data in the specific field to that action. For example, a transaction is *spending UTXO U* when it contains a reference to U in its input field, and it is *minting a token X* when its mint field contains X. 

When the node processes a transaction, it verifies whether it can perform the action it intends to. For this, the author of the transaction must provide relevant pieces of data, e.g., scripts, redeemers, or signatures. A common example of an action that requires validation is spending a UTXO locked with a public key. The transaction must provide a signature from the corresponding private key to perform this action.

Cardano uses scripts to validate actions. These scripts, which are pieces of code, implement pure functions with *True* or *False* outputs. *Script validation* is the process of invoking the script interpreter to run a given script on appropriate arguments.

Script validation can be performed for the following actions:

* Spending a UTXO locked by a script address: the script that is run is the one whose hash forms the address. 
* Minting a token: the script that is run is the one whose hash forms the policy ID of the token being minted. 
* Reward withdrawal: the script that is run is the one whose hash forms the staking address.
* Applying a certificate: the script that is run is the one whose hash forms the certificate author’s credential.

Besides letting the node know which script to run, all transaction actions indicate how to assemble arguments passed to that script. 

Cardano’s multi-asset ledger (Mary) supports simple *multisig* and *timelock* scripting languages. These allow users to specify signatures required to perform an action (such as spending a UTXO or minting a non-fungible token (NFT)), and the time interval in which it can be performed. A timelock script can never see the actual slot number in the transaction that includes it. Timelock can only see the *validity interval* of the carrying transaction. Allowing a timelock script to see the current slot number (i.e., data coming from the block, rather than the author) would break determinism. This is ensured by the fact that a user cannot know the exact slot in which the transaction gets processed, and therefore they cannot predict how the script will behave. 

Mary scripts, unlike Plutus contracts in Alonzo, are very limited in what they can express. The Alonzo hard fork ushers in a new era of powerful, stateful contracts that do not compromise the deterministic ledger property.

## Plutus scripts

Alonzo introduces a new approach to transaction validation on Cardano due to the implementation of Plutus scripts. The [extended unspent transaction output](https://iohk.io/en/blog/posts/2021/03/12/cardanos-extended-utxo-accounting-model-part-2/) (EUTXO) model, deployed as part of Alonzo, provides the ledger infrastructure to support Plutus contracts. Below, we provide a high-level overview of ledger and transaction changes. For more details about working with the ledger and Plutus scripts, check out the [Plutus Pioneer program](https://www.youtube.com/watch?v=IEn6jUo-0vU&list=PLK8ah7DzglhhJzuiz7X33UCHSTYPB-8Jt)!

Alonzo changes the data on the ledger as follows: 

1. Plutus scripts can lock UTXOs.
2. A new component, added to the contents of the output parts of UTXOs, enables script state-like functionality. In addition to assets and an address, a UTXO locked by Plutus scripts also contains a *datum*. A datum is a piece of data that can be thought of as an interpretation of the script state. 
3. There are a number of new protocol parameters used to impose additional validation requirements on transactions. These include upper limits on computational resources that scripts can consume. 

To support Plutus scripts, transactions have been upgraded as follows:

1. For each of its actions, the transaction now carries a user-specified argument, called a *redeemer*. Depending on the script, a redeemer can serve a different purpose. For example, it can act as the bid the user places in an auction, or the user’s guess in a guessing game, among many other functions.
2. The transaction specifies computational execution budgets for each script.
3. To ensure that a transaction can pay its execution fee, Alonzo introduces additional pieces of data, which we’ll discuss in a follow-up blog post. 
4. Transactions contain an integrity hash, needed to ensure that it has not been compromised, outdated, etc. 

There are also some changes to the specifics of Alonzo transaction validation as compared to Mary. For each action, the node assembles script arguments expected by the Plutus interpreter, including:

* the datum
* the redeemer
* execution budget
* a summary of the transaction. 

The node performs new, Alonzo-specific checks that ensure the transaction is constructed correctly. For example, it must not exceed the maximum execution resource budget. It also invokes the Plutus script interpreter to run the scripts.

**Datum objects vs script state**

Like mutable accounts, mutable script state falls squarely into the ‘mutable ledger data’ category of indeterminism sources. We already saw that the UTXO model avoids the mutable accounts indeterminism issue. It can also help us reimagine the concept of script state in a way that maintains determinism. If a UTXO is locked by a Plutus script, that UTXO’s script code is associated with its address. The state-analog of this script is the datum stored in that UTXO. When a transaction spends that UTXO, it gets deleted from the ledger, including the datum. However, the contents of the Plutus script could enforce that the transaction carrying it must also create a UTXO containing a specific datum that can be viewed as the updated script state. 

**Script execution budget**

The non-deterministic gas model can charge users unpredictably large fees. In Cardano scripts, this source of indeterminism is addressed by requiring that the resource budget itself, as well as the fee required to cover this budget, are included in the transaction. In Alonzo, a user can predict both locally when constructing the transaction. Script execution necessarily returns either *True* or *False*, and will not loop indefinitely. The reason for this is that every operation a script performs takes a non-zero amount of resources, which are tracked by the interpreter. If the budget specified by the transaction is exceeded, script execution terminates and returns *False*. 

## Transaction validation in Alonzo

Addressing the possible sources of indeterminism, the following key points make the outcomes of script and transaction validation predictable:

* the script interpreter will always terminate and return the same validation result when applied to the same arguments
* a transaction necessarily fixes all arguments that will be passed to the script interpreter during validation 
* a transaction specifies all the actions it is taking that require script validation
* compulsory signatures on a transaction ensure that it cannot be altered by an adversary in a way that causes scripts to fail
* applying a transaction in the EUTXO ledger model is deterministic.

The last point is largely inherited from the UTXO model, as Alonzo ledger protocol updates remain, for the most part, consistent with updates in previous eras (including the delegation scheme, etc.). After the Alonzo upgrade, script validation failure or success does affect how a transaction is processed (more about this in part 2!). However, the *True* or *False* outcome, as well as ledger changes associated with either outcome, are predictable for a given transaction.

The deterministic behavior of Cardano’s script and transaction validation is not a natural outcome of using the EUTXO model. To ensure this property, the IOG team had to carefully track the source of every piece of data which a script is allowed to see.

*The deterministic evaluation property is formally specified in the [Alonzo specification](https://hydra.iohk.io/build/7172824/download/1/alonzo-changes.pdf), and the IOG team has also sketched proof that the interpreter gets only those arguments that would not break the property.* 

*In our second blog post, we’ll take a closer look at the 2-phase validation process of Cardano transactions. So, keep an eye out later this week for part two.*
