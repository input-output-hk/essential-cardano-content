---
title: Babel fees - denominating transaction costs in native tokens
tags:
  - Babel fees
  - Transaction
  - Fees
url: ""
image: https://ucarecdn.com/9febbcb3-2434-471f-a3fa-c4429eec71bf/
image_text: A yellow fish swimming in water
---

**Original author:**

[Prof Aggelos Kiayias](https://iohk.io/en/team/aggelos-kiayias) - Chief Scientist

Originally published on [IOG.io](https://iohk.io/blog/posts/2021/02/25/babel-fees/ ): February 25, 2021

**Summary**:

Introducing a novel mechanism that allows the payment of transaction fees in user-defined tokens on Cardano.

**Article**:

In Douglas Adams' classic The Hitchhiker's Guide to the Galaxy, a [Babel fish](http://www.bbc.co.uk/cult/hitchhikers/guide/babelfish.shtml) is a creature that allows you to hear any language translated into your own. This fantasy of universal translation ensures meaningful interaction despite the myriad different languages in the galaxy. 

In the cryptocurrency space, smart contract platforms enable the development of a myriad of custom tokens. Is it possible to interact with the platform using your preferred token? If only there was a “Babel fees” mechanism to translate the token you use to the one that the platform requires for posting a transaction. 

Common wisdom in blockchain systems suggests that posting a valid transaction must incur a cost to the sender. The argument is that, without such constraint, there is nothing to stop anyone from overloading the system with trivial transactions saturating its capacity and rendering it unusable. Given the above tenet, a frequently made corollary is that in any blockchain system where user-defined tokens are supported, it should be prohibited to pay transaction fees in such tokens. Instead, transactions should carry a fee in the native token of the platform that is accepted by all participants as being valuable.  Arguably such a restriction is undesirable. But how is it possible to circumvent the ensuing – and seemingly inevitable – vulnerability? 

## The art of the possible

Cryptography and game theory have been known to make possible what seemed impossible. Celebrated examples include key exchange over a public channel, Merkle's puzzles, and auctions where being truthful is the rational thing to do, like Vickrey's auctions. And so it also turns out in this case. 

First, let us recall how native assets work in Cardano: Tokens can be created according to a minting policy and they are treated natively in the ledger along with ada. Cardano's ledger adopts the Extended UTXO (EUTXO) model, and issuing a valid transaction requires consuming one or more UTXOs. A UTXO in Cardano may carry not just ada but in fact, a token bundle that can contain multiple different tokens, both fungible and non-fungible. In this way, it is possible to write transactions that transfer multiple different tokens with a single UTXO. 

Transaction fees in the ledger are denominated in ada according to a function fixed as a ledger parameter. A powerful feature of Cardano's EUTXO model is that the fees required for a valid transaction can be predicted precisely prior to posting it. This is a unique feature that is not enjoyed by other ledger arrangements (such as the account-based model used in Ethereum). Indeed, in this latter case, the fees needed for a transaction may change during the time it takes for the transaction to settle, since other transactions may affect the ledger's state in between and influence the required cost for processing the transaction. 

## A thought experiment

Let's consider the following thought experiment to help us move closer to our objective of Babel fees. Imagine that it is possible to issue a transaction that declares a liability denominated in ada equal to the number of fees that the transaction issuer is supposed to pay. Such a transaction would not be admissible to the ledger. However, it can be perceived as an open offer that asks for the liability to be covered. Why would anyone respond to such an offer? To entice a response, assuming the token bundle concept is already present in Cardano,  the transaction can offer some amount of token(s) to whoever covers the liability. This suggests a spot trade between ada and the offered token(s) at a certain exchange rate. Consider now a block producer that sees such a transaction. The block producer can create a matching transaction absorbing the liability covering it with ada as well as claiming the tokens that are on offer. 

By suitably extending the ledger rules, the transaction with the liability as well as its matching transaction becomes admissible to the ledger as a group. Due to the absorption of the liability, the set of two transactions becomes properly priced in ada as a whole and hence it does not break the ledgers' bookkeeping rules in terms of ada fees. As a result, the transaction with the liability settles, and we have achieved our objective. Users can submit transactions priced in any token(s) they possess and, providing a block producer is willing to take them up on the spot trade, have them settle in the ledger as regular transactions!

## A concrete example

The mechanism is of course conditioned on the presence of liquidity providers that possess ada and are willing to issue matching transactions. In fact, the mechanism creates a market for such liquidity providers. For instance, a stake pool operator (SPO), can publish exchange rates for specific tokens they consider acceptable. For instance, an SPO can declare that it will accept tokenX for an exchange rate of 3:1 over ada. It follows that if a transaction costs, say ₳0.16, the transaction can declare a liability of ₳0.16 as well as offer 0.48 of tokenX. In the native asset model of Cardano, this can be implemented as a single UTXO carrying a token bundle with the following specification (Ada→ -0.16, tokenX→0.48). Note the negative sign signifying the liability. 

Suppose now that the SPO is about to produce a block. She recovers the liability transaction from the mempool and issues a matching transaction consuming the UTXO with the liability. The matching transaction transfers 0.48 of tokenX to a new output which is owned by the SPO. The resulting block contains the two transactions in sequence. The matching transaction provides the missing ₳0.16 in addition to the fees that are needed for itself. In fact, multiple transactions can be batched together and have their fees covered by a single matching transaction.

![](https://ucarecdn.com/9b534532-b3ba-4aa1-ac2f-7725be3e096c/-/preview/-/format/auto/-/quality/smart/)

_Figure. Alice sends a quantity of 9 tokens of type X to Bob with the assistance of Stacy, an SPO, who covers Alice's transaction liability and receives tokens of type X in exchange. The implied exchange rate between X and Ada is 3:1._ 

## New measures of value

The above process is entirely opt-in for SPOs. Each one can determine their own policy and exchange rate as well as decide to change the exchange rate for the various tokens they accept on the spot. Moreover, there is no need for agreement between SPOs about the value of a specific token. In fact, different SPOs may provide different exchange rates for the same token and a user issuing a liability transaction can offer a number of tokens corresponding to the minimum, average, or even maximum of the posted exchange rates in the network. In this way, a natural trade-off arises between the settlement time of liability transactions and the market value of tokens they offer. 

This illustrates how native assets, the EUTXO model, and the simple but powerful tweak of introducing liabilities in the form of negative values in token bundles can accommodate Babel fees empowering users to price transactions in any token supported natively by the system. It also shows the unique advantage of being an SPO in such a system. It should be noted that SPOs need not be the only entities in the network offering to cover liabilities. In fact, an SPO can readily partner -if they wish- with an external liquidity provider who will be issuing the matching transactions. In addition, third-party providers can also act on the network independently and issue matching transactions. Nevertheless, the benefit will remain with the block producers; SPOs can always front-run matching transactions and substitute them for their own if they wish so. This is a case in which front-running transactions is a feature: it makes it feasible for SPOs to be paid in the tokens they prefer for their transaction processing services.

The mechanism of negative quantities in token bundles can be implemented in the basic ledger rules of Cardano at some point following the introduction of native assets with the Mary Hard Fork. Beyond Babel fees, the mechanism allows a variety of other interesting applications, such as atomic swaps for spot trades, that we will cover in a future blog post. It is yet another illustration of the power of Cardano's approach and its ability to support a diverse and entrepreneurial community of users and stake pool operators. 

_I am grateful to Manuel Chakravarty, Michael Peyton Jones, Nikos Karagiannidis, Chad Nester, and Polina Vinogradova for helpful discussions, suggestions, and comments related to the concept of Babel fees and its implementation in the Cardano ledger. We also have a_ [video whiteboard walkthrough](https://youtu.be/YXaK0cvgoFQ?t=2184) covering this topic.
