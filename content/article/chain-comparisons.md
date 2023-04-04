---
title: Chain comparisons
tags:
  - "101"
  - Cardano
  - ada
  - Staking
url: ""
image: https://ucarecdn.com/f9dc5b41-33aa-4645-b96d-4e7da1f1d340/
image_text: ""
---

## How does Cardano differ from Bitcoin?

Cardano and Bitcoin bear some fundamental differences in terms of design, purpose, and usability.

Cardano uses a proof-of-stake consensus mechanism, while Bitcoin relies on proof of work to mine new coins and add blocks to the chain. Functionally, Bitcoin is designed to transfer digital currency in a decentralized, peer-to-peer fashion. Cardano, on the other hand, supports a much broader range of functions. Cardano can handle smart contracts, custom tokens, and decentralized applications (DApps).

Another key difference between Cardano and Bitcoin is the energy utilization. Bitcoin's proof-of-work design [consumes huge amounts of energy](https://digiconomist.net/bitcoin-energy-consumption/), to the tune of 204.50 Terawatts/hour. Cardano is far more environmentally sustainable. Charles Hoskinson estimates that Cardano’s electricity consumption is [about 0.01% of Bitcoin’s](https://www.independent.co.uk/life-style/gadgets-and-tech/cardano-crypto-bitcoin-elon-musk-b1849021.html).

## How does Cardano differ from Ethereum?

Cardano differs from Ethereum in fundamental ways. 

Cardano is designed as a [proof-of-stake blockchain](https://www.essentialcardano.io/article/staking-is-the-bedrock-of-cardano). The transformation of the Ethereum chain from proof of work to proof of stake was the main motivation for ETH2.0 and the Merge. 

Cardano and Ethereum feature different staking systems. Cardano users [delegate](https://www.essentialcardano.io/glossary/delegation) their ada to stake pools run by SPOs, while Ethereum does not natively support delegation. 

Ethereum users can either run their own validating node, stake through a third-party operator as a service, or stake through pooled staking. Solo home staking on Ethereum requires a minimum of 32 ETH and a dedicated computer connected to the internet 24/7, while staking as a service and pooled staking also have their own constraints. Ethereum penalizes a validator that acts against the network through [slashing](https://www.essentialcardano.io/glossary/slashing). 

On Cardano, Ouroboros provides incentives for good behavior instead. Each  SPO pledges funds to their pool to make it more attractive and earn a higher percentage of rewards. Dishonest behavior will result in loss of rewards. Leading-edge game theory techniques have contributed to this strategy too. 

Finally, staking on Cardano is more convenient than on Ethereum as there is no locking (users can withdraw ada at any time), there is no minimum stake requirement, rewards get automatically assigned, and the custody always remains with an ada holder.

For more details on staking see this [comparison](https://www.essentialcardano.io/article/staking-and-rewards-in-proof-of-stake) and [an infographic](https://www.essentialcardano.io/infographic/staking-and-rewards-in-proof-of-stake-b88a4532).

Also, Cardano supports custom tokens natively, without the need for smart contracts. Ethereum does support custom tokens also, but requires smart contracts, which adds a layer of complexity and the possibility of errors. In Cardano, the ledger handles all token functionality.

Another fundamental difference is the accounting model. Cardano features an extended unspent transaction output (EUTXO) model. Ethereum uses an account-based ledger model. This is significant for many reasons. For example, Cardano's model enables simpler transaction verification as each individual UTXO can only be consumed once, and as whole. Ethereum's transaction logic is more complex, as each individual transaction updates the global state of the chain. Because Ethereum’s transactions are processed sequentially, parallelization is hard to implement, to the detriment of throughput.

Cardano's EUTXO accounting model is deterministic, meaning transactions can be validated beforehand. Fees and transaction outcomes are predictable. Also, if a transaction fails the phase 1 validation, no fees are taken. This is not the case in an account-based model, like Ethereum, where users will lose all paid fees in this same scenario.

## How does Cardano differ from Polkadot?

Cardano and Polkadot share a common starting point: the resolution of some of the shortcomings inherent to Ethereum's design, including chronic network congestion, high gas fees, unpredictable transaction outcomes, etc.

The chains' evolutionary paths diverged, however, as both chains differ in substantive ways, starting with their consensus mechanisms. Cardano uses proof of stake, whereas Polkadot relies on a variation of this system, called Nominated Proof of Stake, which is designed with the roles of validators and nominators to maximize chain security. Validators produce new blocks, validate parachain blocks, and guarantee finality. Nominators can choose to back select validators with their stake. Nominators can approve candidates that they trust and back them with their tokens. Polkadot’s design was in fact heavily influenced by Cardano. 

Another fundamental difference is in the chains' architecture. Cardano's design includes three layers (consensus, ledger, and network), whereas Polkadot's architecture is anchored on a single layer, the Relay Chain.

## How does Cardano differ from Solana?

There are some similarities between Cardano and Solana, and the media often refers to both chains as direct ‘rivals’. Both chains use a proof-of-stake consensus mechanism, for example, but Solana adds a technology known as _proof of history_, where consensus is achieved by the validation of the time difference between two events on the blockchain. Proof of history enables timestamps to be built on the blockchain itself (rather than relying on off-chain programs to calculate time, like Ethereum does). Proof-of-history technology is achieved through a Verifiable Delay Function (VDF).

But in stark contrast to Cardano, the Solana blockchain is not as decentralized. It has been reported that almost 50% of all [Solana's tokens are owned by venture capital entities](https://www.makeuseof.com/reasons-solana-isnt-really-decentralized/), the blockchain's developers, and the Solana Labs company. Also, the Solana Foundation is currently the only entity able to add new blocks to the chain.

Another well-known trait of the Solana blockchain is the costly hardware requirements needed for running a validator node. Cardano's nodes can be run efficiently with far lower hardware specs.

Cardano offers liquid staking without slashing, so there is no risk for delegators to lose funds. In contrast, the Solana delegation system does involve slashing, so delegators can lose funds.

Cardano's strength and resilience lie in peer-reviewed research and design principles. 

## How does Cardano differ from Algorand?

Cardano and Algorand have some similarities.

Both are backed by strong academic research (Algorand was founded by an MIT professor and Turing award winner), and both emphasize decentralization as a core tenet.

Cardano and Algorand operate proof-of-stake consensus protocols, which means significantly better energy efficiency and faster transaction times than proof-of-work chains like Ethereum or Bitcoin. But each chain uses a different implementation of the consensus mechanism. Algorand implements what it calls Pure Proof of Stake (PPoS), which randomly selects a token holder as the next block producer. The block then needs to be approved by 1,000 validators before being added to the chain. Cardano uses Ouroboros, the first provably secure proof-of-stake consensus mechanism.

Cardano is written in Haskell (with Plutus as its scripting language), while Algorand uses JavaScript, Python, Java, and Go.

Both chains also differ in their core architecture: Algorand features two layers, whereas Cardano uses three.

In terms of non-fungible tokens (NFTs), Algorand users can create NFTs using a system built into the protocol, without the need for smart contracts. Cardano users can create NFTs in a variety of ways.
