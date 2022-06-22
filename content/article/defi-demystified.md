---
title: DeFi Demystified
tags:
  - DeFi
  - Smart Contracts
  - DApp
url: ""
image: https://ucarecdn.com/7d036b23-abfa-4d1c-99e1-e1175ab95e98/
image_text: A graphic representing decentralization
---

**Original author:**

[Olga Hryniuk](https://iohk.io/en/team/olga-hryniuk) - Technical Writer

Originally published on [IOG.io](https://iog.io/en/blog/posts/2022/01/10/defi-demystified/): January 10, 2022

**Summary**:

With the Cardano ecosystem set to grow exponentially in 2022, now is the time to get to grips with some of the prime principles – and jargon – behind DeFi

**Article**:

The number of ada users and software developers building on the Cardano blockchain continues to grow. With projects now in final testing and starting to deploy, sites like [Cardano Cube](https://www.cardanocube.io/), [Built on Cardano](https://builtoncardano.com/), [Building On Cardano](https://buildingoncardano.com/#/), [Essential Cardano](https://github.com/input-output-hk/essential-cardano), and [](Developers.cardano.org)[Developers.cardano.org](https://developers.cardano.org/showcase/) are busy mapping an exciting ecosystem. Cardano has been created as a secure, robust platform to build blockchain-based products, services, and systems. With a clear roadmap to steadily develop, we now see it scaling to serve on a global scale.

DeFi – decentralized finance – has exploded in recent years, opening up a host of new financial instruments – from the useful to the crazily speculative. Ultimately as this market matures, the goal of DeFi is to help individuals and companies engage in financial activity without going through a central, expensive middleman such as a bank, or to attain higher returns on their assets in an era of inflation and negative interest rates.

Cardano has expanded on this idea. The aim is to bring inexpensive banking and insurance services to the millions of people worldwide who cannot access such products. This would help break down the barriers between developed and developing nations. We call this vision ‘[RealFi](https://iohk.io/en/blog/posts/2021/11/25/welcome-to-the-age-of-realfi/)’.

Despite this surge for Cardano, overall blockchain understanding and adoption levels are still low. Not least, because of the mountain of jargon, every crypto-curious person needs to grapple with. So, in anticipation of the next wave of fresh interest in Cardano – and particularly to welcome _new_ readers to this blog – we thought the beginning could be a great place to start!

So we’ll try to unpack the complexity of some notions that we so often read about with blockchain. Terms like DeFi, RealFi, DApp, DEX, liquidity, and so on go hand-in-hand with the latest blockchain products. Let’s take a look at what these terms mean, and let’s start with the basic building blocks.

## Where does DeFi start?

It all starts with a [blockchain](https://docs.cardano.org/new-to-cardano/what-is-a-blockchain). So, simply put, a blockchain is a digital ‘book’ of records – what accountants would call a _ledger_ – about transactions. What’s unusual about this book is that it is not controlled by a single person, company, or government official. Instead, entries are made in a _decentralized_ way. By decentralized, we mean that thousands of people’s computers communicate with each other to agree on whether a transaction is valid. They reach this consensus based on the rules built into the blockchain software they are running. Blockchain records cannot be altered and can be examined by everyone – making it impossible to delete the record about a transaction, forge its amount, or hide any details. This feature guarantees transparency and trust between the users. Interestingly, although the blockchain shows such information, users are ‘presented’ as addresses. So, although anyone can see what transactions were made to and from an address since the blockchain started, no one can identify the person at the blockchain address.

The advantages of decentralized systems are summarized in Figure 1.

But how do we use blockchain in daily life, and why does it matter? The answer is that blockchain is about trading or exchanging funds under specified conditions, for a potentially infinite number of applications. Companies in healthcare, art, retail, collecting, beverage, sportswear, and gaming already use blockchain technology.

![](https://ucarecdn.com/fd2f95e0-df5c-431f-9506-e4e3c97f0d21/-/preview/-/format/auto/-/quality/smart/)

_Figure 1. Decentralized v traditional finance_

## What is decentralized finance?

Decentralized finance or **DeFi** is a blockchain-based form of finance that addresses the same needs as traditional finance. You can send and receive payments, pay for products or services, or invest in cryptocurrency projects instead of bonds or stocks. However, DeFi does not depend on any intermediary and uses smart contracts to settle deals fairly. By adding an identity component such as [Atala Prism](https://atalaprism.io/app) – and thus a ‘bridge’ to the real world – you have what we call _RealFi_.

### The money

In a traditional setting, we use money to pay for products and services. This medium of exchange is usually represented as coins or banknotes issued by central banks. Crypto users have popularized the use of the term fiat ​​to describe real-world money. The US dollar, British pound, and Japanese yen are all **fiat** money. The word has been used since governments stopped having to back their currency with gold. Instead, they issue a formal decree – a fiat – that their currency is legal tender.

On the blockchain, people use **crypto assets** instead of fiat. Let’s take a look at the different types (Figure 2).

![Types of cryptocurrency assets](https://ucarecdn.com/0737d7f4-6e8a-439a-9f3e-77c87849a9e1/)

_Figure 2. Types of cryptocurrency assets_

## How it works

Before we dive into the peculiarities of DeFi terminology, let’s first see what makes it all work. So, the driving force of security and fair agreements lies in smart contracts. Let’s say you download a DeFi app and you’d like to lend Alice 10 ada. We need to be assured that Alice will pay it back, and we’d also like to earn some interest if she pays it back later than agreed. Traditionally, users sign agreements and specify such conditions. That’s also done on the blockchain, but in the form of smart contracts.

*   [Smart contract](https://docs.cardano.org/new-to-cardano/what-is-a-smart-contract): an automated digital agreement, written in code, that tracks, verifies, and executes the binding parts of a deal between various parties. The contract stages are automatically executed by the smart contract code when predetermined conditions are met.
    

An interesting fact is that smart contracts don’t find specific data themselves. For example, we agree with Alice that she pays back by say, January 20. For a smart contract to execute, it needs to know the date, whether Alice processed a transaction and whether the sent amount matches the indicated amount. For this, smart contracts use oracles.

*   **Oracle**: a way to communicate with real-world data. Oracles connect with trusted external data sources that enable smart contracts to execute by referencing datasets such as exact timing, the weather, election results, sports statistics, and cryptocurrency prices. Oracles ensure confidence in timely, accurate, and untampered data.
    

With Cardano, users can work with **Plutus** or **Marlowe** contracts:

*   [Plutus](https://iohk.io/en/blog/posts/2021/04/13/plutus-what-you-need-to-know/): a set of programming tools for writing smart contracts on Cardano. Deployed since September on Cardano, it includes Plutus Core – the software that runs Plutus transactions and contracts – and the Plutus programming language, which is based on Haskell, a language designed for writing extremely reliable programs. There is also the [Plutus Playground](https://iohk.io/en/blog/posts/2021/01/25/introducing-the-new-plutus-playground/) – a place where developers can test their code before using it on the main chain.
    
*   [Marlowe](https://iohk.io/en/blog/posts/2020/10/06/marlowe-industry-scale-finance-contracts-for-cardano/): Marlowe is a language designed specifically for writing financial smart contracts. It is limited to financial applications and is for experts in finance rather than in programming. There is also the [Marlowe Playground](https://play.marlowe-finance.io/#/), where users can create, edit, simulate, and analyze Marlowe contracts in a web browser. Marlowe will be deployed to Cardano later this year.
    

## DeFi ecosystem

Users access various DeFi platforms and applications for different purposes. For instance, asset management products (or simply, [wallets](https://docs.cardano.org/new-to-cardano/types-of-wallets)) store, send and receive cryptocurrencies between users. There are many decentralized applications (DApps):

*   **DApp**: a digital application that runs on the blockchain. There are various types of DApps, such as DeFi products, NFT markets, wallets, exchanges, games, and more.
    

Now that the Cardano ecosystem is growing fast, more and more DeFi products are coming to Cardano. Users will soon be able to use new DApps and platforms for their financial needs. Thus, to ensure that users and the developer community can offer and consume products of the best quality, we are working on:

*   **The dAppStore**: a user-friendly marketplace for all Cardano DApps. It is also a place where users with limited blockchain knowledge will be able to explore ways that the technology can be useful to them.
    
*   [DApp certification](https://iohk.io/en/blog/posts/2021/09/22/bringing-certified-dapps-to-cardano/): certification and assurance help ensure that products meet certain quality checks. While voluntary (Cardano is, after all, open and decentralized) Certification benefits both developers and users because it includes security checks that help with auditing smart contracts. There are [three levels of certification](https://iohk.io/en/blog/posts/2021/10/25/new-certification-levels-for-smart-contracts-on-cardano/), each of which is complementary to the others.
    

DeFi platforms and DApps mainly deal with financial activities. Besides sending and receiving funds, these can be used for investing, lending, and borrowing.

As a matter of fact, users can borrow cryptocurrency on the blockchain without paying interest:

*   **Flash loan**: works as an instant loan that doesn't require collateral (funds needed to secure a loan of other cryptocurrencies or tokens) or know-your-customer (KYC) verification. However, the flash loan requires repayment within the same block it is lent to the borrower. If the loan isn’t paid back, the initial transaction is rejected, and the issuer retains their funds.
    

Let’s take a look at a few more of the most common terms you’ll come across in DeFi:

*   **Exchange**: a cryptocurrency marketplace where users can buy or sell cryptocurrencies. There are two types of exchanges. A **CEX** (centralized exchange) is maintained by a specific entity or structure, which is subject to regulations or rules. A **DEX** (decentralized exchange) is a type of crypto exchange with no intermediary, and users can buy and sell their assets in a secure, peer-to-peer way.
    

**Liquidity** is another term that you’ll commonly hear. It measures the circulating supply and trading activity in a certain DEX, CEX, or another network. Circulating supply is essential to meet the trading needs of users. For example, Alice wants to sell some bitcoins she owns and instead buy some ada, and let’s say, some tokens needed for her new shopping app. While bitcoin trading is very popular, she won’t have any difficulties. She’ll probably buy ada as well if the chosen exchange supports it. But what if there are none of the tokens she’s looking for? Or, say, she wants to get 100 tokens for her app, and there are only 30? This is what liquidity is about – having enough supply of coins or tokens to satisfy users’ requirements.

Liquidity includes relevant activities and notions that go hand in hand with them:

*   **Liquidity mining**: the process of creating or adding new coins or tokens to support the demand for transactions. Liquidity miners (providers) usually get rewards that incentivize them to support the user base and grow liquidity pools. Liquidity mining is also known as yield farming.
    
*   **Liquidity pools**: a pool of deposited cryptocurrencies that provides liquidity to the network, where the currencies are in demand.
    
*   **AMM** (automated market maker): a pool of cryptocurrencies that provides liquidity between ‘trading pairs’. A trading pair is a match between Alice, who wants to sell her bitcoin, and Bob, who wants to buy it, for example. AMMs are decentralized and depend on the liquidity provided by their users.
    

Decentralized exchanges aren’t only convenient marketplaces for cryptocurrency trading. They also serve as tools for earning profit. So let’s discuss some relevant terms:

*   **ROI** (return on investment): the profit or loss on an investment, often expressed as a percentage.
    
*   **Yield farming**: as mentioned above, this is also known as liquidity mining. Because rewards are gained for providing funds, such a process is called farming.
    
*   **Yield**: rewards earned for cryptocurrency staking or liquidity mining.
    
*   **Leverage**: the act of using borrowed capital, expecting profits to be greater than the paid interest.
    

**Please note that we’re not giving any financial advice. This post explains some of the DeFi terms for informative purposes only.**

And while we’re discussing some ‘earning profit’ terms, let’s also recall how ada holders can securely benefit and get rewards from their ada:

*   [Staking and delegating on Cardano](https://docs.cardano.org/new-to-cardano/how-to-delegate): every ada holder owns a stake that is based on the amount of ada they have. A developer or a tech-savvy person can set up a stake pool and run it to help verify Cardano transactions, getting rewards for this. Everyone can delegate their funds to a stake pool to earn a share of these rewards. There is no risk to this and no ada leaves your wallet. Ada can be delegated from your wallet or spent at any time.
    

_While these are exciting times, we continue to stress the importance of_ [doing your own research](https://iohk.io/en/blog/posts/2021/12/09/when-it-comes-to-defi-do-your-own-research/) and approaching new products with caution. Follow our blog and [Twitter](https://twitter.com/InputOutputHK/status/1475107377775099910?s=20) for new announcements not to miss a thing. And throughout this year, we’ll have plenty more content coming your way to help you navigate this growing ecosystem.
