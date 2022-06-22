---
title: "No-surprises transaction validation: part 2"
tags:
  - Alonzo
  - Transaction
  - UTXO
  - Plutus
url: ""
image: https://ucarecdn.com/d8fd6848-3781-4c41-a8e9-dfec9f1ddc9c/
image_text: ""
---

**Original author:**

[Polina Vinogradova](https://iohk.io/en/team/polina-vinogradova) - Research Engineer

Originally published on IOHK.io: September 7, 2021

**Summary**:

Alonzo transaction validation is performed in two phases to ensure fair compensation for validation work

**Article**:

In our [previous blog post](https://www.essentialcardano.io/article/no-surprises-transaction-validation-on-cardano), we discussed the deterministic nature of transaction and script validation on the Alonzo ledger, which provides assurance that the outcome of on-chain transaction application and script validation can be accurately predicted locally, before the transaction is ever submitted.

Relying on the guarantees provided by the deterministic design of the Alonzo ledger, we have implemented a specific two-phase validation scheme. It is designed to minimize the resources the nodes use to validate network transactions while also eliminating unexpected costs for the user. In this blog post, we dive deeper into how the two-phase validation works.

In the Shelley, Allegra, and Mary eras, transaction validation was a one-step process. The effect of a valid transaction on the ledger was fully predictable before it was applied. If a transaction was valid, it got included into a block and added to the ledger. If not, a node would reject it after a failed validation attempt and the transaction would not be included in a block. However, nodes that validated incoming transactions used time and resources, regardless of whether or not the transaction ended up in a block.

Alonzo introduces Plutus scripts, which might require significantly more resources to validate them compared to simple scripts in previous eras. To address the issue of nodes expending resources on validating scripts of transactions that get rejected, Alonzo introduces a two-phase validation approach. This strategy maintains a predictable outcome of applying transactions to the ledger, and also ensures fair compensation to the nodes for their work and resource usage.

## Two-phase transaction validation

Transaction validation on Cardano is divided into two phases. The main reason for introducing two-phase validation is to limit the amount of uncompensated validation work by nodes. Each phase serves a purpose in achieving this goal. Roughly speaking, the first phase checks whether the transaction is constructed correctly and can pay its processing fee. The second phase runs the scripts included in the transaction. If the transaction is phase-1 valid, phase-2 scripts run. If phase-1 fails, no scripts run, and the transaction is immediately discarded.

Thus, nodes are expected to add processable transactions to a block even if the transactions are not phase-2 valid. This means that either:

*   a small amount of uncompensated work is done by a node to find out that a transaction is not processable, but no expensive phase-2 validation is done, or
    
*   the transaction is processable. The node can then perform phase-2 validation of the scripts, tag the transaction accordingly as either phase-2 valid or phase-2 invalid, and add it to a block. In either case, the node will later be compensated for both phases of validation via the fee or collateral collected from this transaction.
    

The expectation is that phase-2 failure should be rare, because a user submitting a transaction with failing scripts will lose ada while achieving nothing. This is locally predictable, and therefore a preventable event. The phase is a required safeguard to guarantee compensation for scripts’ potentially resource-intensive computation.

Let’s take a closer look at the specifics of each phase.

**Phase 1**

The first phase of validation must be simple. If this phase fails, a node does not get compensated for the work it has done, as it cannot accept processing fees from unprocessable transactions.

Phase-1 validation verifies two things: that a transaction is constructed correctly, and that it is possible to add it to the ledger. This validation includes the following checks and some additional ones:

*   it pays the correct amount of fees and provides the correct amount of collateral (i.e. ada collected in the case of script failure, explained below)
    
*   it includes all the data required for executing Plutus scripts
    
*   it does not exceed any bounds set in the protocol parameters (on output sizes, etc.)
    
*   its inputs refer to UTXOs existing on the ledger
    
*   the stated computational budget for the transaction does not exceed the maximum resource limit per transaction
    
*   integrity hash checks, etc.
    

Before adding an incoming transaction to the mempool (and eventually, to a block), a node must perform all phase-1 validation checks. If any of these checks fail, the transaction is rejected without being included into a block, and no fees are charged. In previous eras, this was the only validation phase, and Cardano handled all validation failures in this fashion.

Honest, non-compromised nodes are not expected to intentionally produce unprocessable transactions. Nodes can also drop connections performing adversarial dissemination of phase-1 invalid transactions.

**Phase 2**

The second phase of validation runs Plutus scripts, which can be more computationally expensive. Therefore, fees are charged following either a success or a failure in the second phase. Collected ada goes into the fee pot, and thus compensates nodes for the resources used in the validation process.

Successful phase-1 validation does not guarantee that all of the transaction’s actions are processable, only that collection of the collateral is possible. Phase-2 performs Plutus script validation, and the decision of whether to perform full processing or only collect collateral is made based on the outcome of validation:

*   fully apply the transaction (the only possibility prior to Alonzo) – if the Plutus scripts validate **all** the actions of the transaction, or  
    
*   collect the collateral ada and ignore the rest of the transaction – if one of the Plutus scripts fails  .
    

Recall that script validation has a locally predictable outcome and is guaranteed to terminate. Users can locally check script validation outcomes, and there will be no disagreement between honest nodes on how to process a given transaction and the scripts therein.

**Collateral**

If scripts don't validate, we still need to compensate the nodes for their work. But we can't just take money from the transaction inputs, because those might have been locked with scripts - those that failed! So instead, Alonzo introduces a special provision for this. The _collateral_ of a transaction is the amount of ada that will be collected as a fee in case of a phase-2 script validation failure. In a processable transaction, this amount must be at least a certain percentage of the transaction fee, specified in a protocol parameter.

This amount is specified at the time of constructing the transaction. Not directly, but by adding _collateral inputs_ to the transaction. The total balance in the UTXOs corresponding to these specially marked inputs is the transaction’s collateral amount. These UTXOs must have public key (rather than script) addresses and contain no tokens other than ada.

The collateral inputs get removed from the ledger UTXO _only if any script fails phase-2 validation_. If all scripts pass, the specified transaction fee amount gets collected, as in previous eras. In particular, the amount comes from the regular, non-collateral inputs, and the collateral inputs are simply ignored. And, good news! It is permitted to use the same inputs as both collateral and regular, since only one of the two sets ever gets removed from the UTXO.

The signatures required to validate the spending of collateral inputs also play an important role in maintaining the integrity of a transaction. They do so by preventing adversaries from altering its contents so that it continues to be processable but fails phase-2 validation. An example of this would be an adversary replacing a redeemer. Collateral key holders’ signatures are required to make such a change. The collateral key holders are also the only users who stand to lose any ada if script validation fails.

Since script evaluation is deterministic, the collateral key holders are able to check locally whether the transaction will pass phase-2 validation on-chain before they sign it. If it does, then they can be sure it will also do so on-chain, and they will definitely not lose their collateral. A user acting in good faith should never lose their collateral. It also means that they can reuse the same collateral inputs for multiple transactions, and be sure the collateral is not collected.

_Now that we have launched the public Alonzo testnet, we welcome all users and developers to assess it by building and executing Plutus scripts. You can find out more information in the dedicated_ [Alonzo testnet repository](https://github.com/input-output-hk/Alonzo-testnet), or [discuss Plutus and Alonzo topics](https://discord.com/channels/826816523368005654/826829738156621895) with our diverse community.
