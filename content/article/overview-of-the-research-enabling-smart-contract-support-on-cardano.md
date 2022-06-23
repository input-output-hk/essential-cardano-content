---
title: Overview of the research enabling smart contract support on Cardano
tags:
  - Research
  - Cardano
  - EUTXO
  - UTXO
  - Smart Contracts
  - Plutus
  - Plutus Pioneers
  - Marlowe
url: ""
image: https://ucarecdn.com/521fc1bc-b3cc-49e9-8bba-b218b63a305b/
image_text: Overview of the research enabling smart contract support on Cardano
---

**Author**:

Olga Hryniuk - Technical Writer

**Summary**:

Taking a closer look at Cardano’s research, part 2. Here’s more on Cardano’s innovative EUTXO model and how it facilitates more efficient smart contracts 

**Article**:

Our previous [blog post](https://www.essentialcardano.io/article/cardanos-foundational-research-overview) discussed the research underpinning some of the core elements of Cardano, including staking, delegation, and reward sharing. This time, we outline the papers that helped establish a functional smart contract platform for decentralized application (DApp) development – enabled by the [Extended Unspent Transaction Output](https://iohk.io/en/blog/posts/2021/03/11/cardanos-extended-utxo-accounting-model/) (EUTXO) accounting model.

## UTXO vs account-based model

Bitcoin and Ethereum are among the most popular blockchains nowadays. They use two rather different ledger accounting models to track the distribution and ownership of users' funds. These models are Bitcoin's Unspent Transaction Output (UTXO) model and the account-based model, as employed by Ethereum among other blockchains.

The UTXO model guarantees security at the core of financial activities. While UTXO’s semantic model stays simple in a complex concurrent and distributed computing environment, it is rather limited in its support for smart contracts. Ethereum chose the account-based model explicitly to facilitate more expressive smart contracts.

Addressing the question of whether it is possible to have expressive smart contracts while keeping the semantic simplicity of the UTXO model, IOG researchers came up with ‘[The Extended UTXO Model](https://iohk.io/en/research/library/papers/the-extended-utxo-model/)’ and ‘[Native Custom Tokens in the Extended UTXO Model](https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/)’ solutions. Both research papers were published in 2020 and fully describe the EUTXO model implemented on Cardano.

Manuel Chakravarty, Lambda scientist and Plutus architect at Input Output Global, Inc. says:

> The UTXO ledger model, battle-tested by Bitcoin, remains the gold standard for security and scalability. We created the Extended UTXO (EUTXO) model to gain the level of smart contract expressiveness pioneered by Ethereum, while still maintaining UTXO's unrivaled security and scalability. We simply wanted the best of both worlds!

‘The Extended UTXO Model’ research paper demonstrates the ability of EUTXO to continually maintain the contract state and use the same contract code along the entire sequence of transactions. Another powerful feature of the EUTXO model is that the fees required for a valid transaction can be predicted precisely before posting it. This is a unique feature driven by the [deterministic design of the EUTXO model](https://www.essentialcardano.io/article/no-surprises-transaction-validation-on-cardano), which is not found in account-based models.

### Plutus

Smart contracts are the driving force behind deal execution on Cardano. They are self-executing so they don't rely on third parties.

At the ACM SIGPLAN International Conference on Functional Programming (ICFP'19), [Manuel Chakravarty discussed functional blockchains](https://www.youtube.com/watch?v=zXy4kxUlUmY) and, in particular, presented Plutus as a functional approach to smart contracts:

> Moving fast and breaking things isn’t the right way to build a blockchain platform. Broken things can’t be fixed easily. Hence, Plutus was built on the solid mathematical foundation of functional programming. It is a programming platform for smart contracts, which includes elements such as Haskell libraries to write smart contracts, a compiler from Haskell to Plutus Core on-chain code, and various tools to assist development.

Most blockchain programming platforms depend on a custom language, such as Ethereum’s Solidity. Plutus has been realized on top of Haskell. The choice of Haskell enabled the IOG research and engineering teams to reuse the existing Haskell infrastructure, libraries, and tools with an established track record for high-assurance software. Haskell facilitates concise and reusable code, while simplifying informal reasoning, testing, and the use of formal methods to achieve the desired level of security. Formal methods, as the most stringent form of reasoning about code correctness, are of special interest to high-value smart contracts and are well supported by the functional programming paradigm.

IOG research and engineering teams delivered Plutus smart contracts based on such papers as ‘[The Extended UTXO Model](https://iohk.io/en/research/library/papers/the-extended-utxo-model/)’, ‘[Native Custom Tokens in the Extended UTXO Model](https://iohk.io/en/research/library/papers/native-custom-tokens-in-the-extended-utxo-model/)’, ‘[Unraveling recursion: compiling an IR with recursion to System F](https://iohk.io/en/research/library/papers/unraveling-recursioncompiling-an-ir-with-recursion-to-system-f/)’, and ‘[System F in Agda, for fun and profit](https://iohk.io/en/research/library/papers/system-f-in-agdafor-fun-and-profit/)’. Together these papers establish Cardano's smart contract-enabled ledger model as well as the on-chain representation of contract code as so-called lambda terms. ’System F in Agda, for fun and profit’ includes a rigorous mathematical definition, which was computer-checked with the help of the Agda theorem prover.

Plutus is now a living, evolving programming platform for smart contracts on Cardano. The IOG education team has also launched the Plutus Pioneer Program to recruit and train developers in Plutus for the Cardano ecosystem. You can [find out more about the program here](https://testnets.cardano.org/en/plutus-pioneer-program/).

### Marlowe

While Plutus is a functional smart contract programming language, Marlowe is a web-based platform to build and run low-cost financial smart contracts visually, without needing deep programming knowledge. It opens a range of use cases for non-programmers to execute straightforward and optimized contracts for financial transactions.

The first research paper presenting Marlowe, ‘[Marlowe: financial contracts on blockchain](https://iohk.io/en/research/library/papers/marlowefinancial-contracts-on-blockchain/)’, was published in 2018. This paper explores the design of a domain-specific language targeted at the execution of financial contracts. It presents an executable semantics of Marlowe in Haskell, an example of Marlowe in practice, and describes the tool that allows users to interact in-browser with simulations of Marlowe contracts.

Later, in 2020, the IOG research team published a paper on ‘[Efficient static analysis of Marlowe contracts](https://iohk.io/en/research/library/papers/efficient-static-analysis-of-marlowe-contracts/)’, which presents the summary of work on optimizing the static analysis for Marlowe contracts. ‘[Marlowe: implementing and analysing financial contracts on blockchain](https://iohk.io/en/research/library/papers/marloweimplementing-and-analysing-financial-contracts-on-blockchain/)’ followed to describe the implementation of Marlowe on Cardano and the web-based development and simulation environment of the Marlowe Playground. The paper also shows that Marlowe contracts can be exhaustively analyzed before running them, thus providing strong guarantees to participants in the contract.

Marlowe is already available for people to try out within the [Marlowe Playground](https://playground.marlowe.iohkdev.io/#/) – a browser-based sandbox environment where you can develop, simulate, and test the process of writing smart contracts. IOG is currently preparing for a Marlowe testnet launch and will use the [Marlowe Pioneers Program](https://pioneers.marlowe-finance.io/) to gather feedback and use cases across the Marlowe suite of products. The team has recently delivered the [Marlowe CLI tool](https://iohk.io/en/blog/posts/2022/04/19/introducing-the-new-command-line-interface-tool-for-marlowe/) to enable users to submit transactions and interact with Marlowe contracts using a command line interface. When launched on mainnet, Marlowe contracts will open up a range of DeFi capabilities.

_Now that we have discussed the characteristics of Cardano’s EUTXO model and how it facilitates smart contract development on Cardano, we will further discuss the research that enabled multi-asset support. Stay tuned for the next blog post!_
