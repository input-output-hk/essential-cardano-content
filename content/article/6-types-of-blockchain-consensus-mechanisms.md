---
title: 6 types of blockchain consensus mechanisms
tags:
  - consensus mechanism
  - blockchain
  - proof of stake
  - proof of work
  - proof of useful work
  - proof of capacity
  - delegated proof of stake
  - proof of authority
url: ""
image: https://ucarecdn.com/98a12612-b202-4d99-9dc8-94cfcfb03a7c/
image_text: A header image on 6 types of blockchain consensus mechanisms
---

\*日本語版はスクロールダウンしてください

Blockchains are distributed systems in which records of digital [transactions](https://www.essentialcardano.io/glossary/transaction-tx) are both publicly verifiable and [immutable](https://www.merriam-webster.com/dictionary/immutable). Each new transaction is included in a block along with other recent transactions, and the block is then added to a chain of other blocks (hence the term ‘blockchain’).

For a blockchain to operate successfully, the participants – also known as [nodes](https://www.essentialcardano.io/glossary/node) – need to agree on the validity of each new block. Blockchains can use different variations of different consensus protocols to determine eligibility of block-producing nodes.

ensure continuity, block producers must reach _consensus_ on a particular transaction history. This is achieved by a specific consensus mechanism that guarantees that the participant’s views converge to the same history of events. This ensures trust in the blockchain as a whole, _without the need to trust specific participants_. Mutually distrustful entities can still participate in the blockchain, comfortable in the knowledge that the blockchain itself can arbitrate and verify their actions.

Different protocols provide varying levels of security, scalability, and decentralization. Each consensus mechanism might claim to be the 'best' solution.

Let’s take a look at six blockchain protocols.

## What are the most prevalent consensus mechanisms?

![](https://lh5.googleusercontent.com/2Ou2Nw4B7rsnXzjsyMgtP2YkkKYUKRe9zpRIJQUv8FhRi-tNz_kKRe11fC6FmZJH8PWRHIjjWUG13hhsFOjbaf3Fb1hb34dzS9Q8gn7PzYAv-QpvfZKmnPrFQvdPDOxT7tzkO_ECDuf4h6YPJfVO5CXVlBGisA187A-xfAhIJn1gfX0p5uOnVu-Hxg)

Two of the best-known consensus protocols are [proof of work](https://www.essentialcardano.io/faq/what-is-proof-of-work-pow) (PoW) and [proof of stake](https://www.essentialcardano.io/glossary/pos-proof-of-stake) (PoS), but others (and multiple variations on the above) also exist. Let’s delve into how some of these mechanisms work and what sets them apart.

### Proof of work (PoW)

PoW was the first blockchain consensus mechanism with [Satoshi Nakamoto](https://nakamotoinstitute.org/) applying this model to the [Bitcoin](https://bitcoin.org/en/how-it-works) chain in 2009.

PoW relies on competition between computers (miners) to solve moderately hard puzzles. The next miner to find a possible solution to a query gets to [mine](https://www.essentialcardano.io/faq/what-is-mining) a new block on the blockchain.

[Ergo](https://ergoplatform.org/en/discover/) and [Ethereum Classic](https://ethereumclassic.org/why-classic) also use PoW.

Here are a few advantages and disadvantages to think about before committing to a PoW chain:

**_Advantage_**

*   Attacking a PoW chain would require controlling 51% of the network's computing power – a process that is too expensive for hackers.
    

**_Disadvantages_**

*   The [high energy consumption](https://adan.eu/en/article/blockchain-protocol-energy-footprint) used in solving queries (because miners are _all_ actively competing to mine a block) is a major disadvantage of PoW chains.
    
*   [Expensive and specialized hardware](https://corporatefinanceinstitute.com/resources/knowledge/other/bitcoin-mining/) is required to become a miner, thus hindering decentralization.
    
*   PoW has scalability limitations due to the network's design, which limits block size and creation time.
    

### Proof of stake (PoS)

PoS is a newer, less energy-intensive, and thus more sustainable consensus mechanism than PoW. Through PoS consensus, holders of a blockchain asset can participate in securing and validating on-chain transactions by delegating their stake to a validator.

Launched in 2012, [Peercoin](https://www.peercoin.net/) was the first PoS project. [Cardano](https://docs.cardano.org/), [Polygon](https://polygon.technology/about)**,** and [Tezos](https://tezos.com/learn/what-is-tezos/) are three popular PoS blockchains. Ethereum has recently moved from PoW to PoS after a successful ‘Merge’.

It is important to note that unlike Ethereum’s version of PoS, however, Cardano’s PoS mechanism:

*   Enables liquid staking (i.e. no lock-up) through which holders of Cardano native tokens can withdraw their stake or delegate it to another validator (stake pool) at any time.
    
*   Requires a small initial amount of 2.17 ada to start staking
    
*   Has no slashing feature that risks unfairly punishing delegators for staking to nodes that do not operate as intended.
    

[Ouroboros](https://www.essentialcardano.io/glossary/ouroboros) is Cardano’s PoS consensus protocol and was the first provably secure PoS protocol. In other words, Ouroboros offers _mathematically verifiable_ security against attackers. The protocol is guaranteed to be secure, as long as 51% of the stake is held by honest participants. According to [Google scholar](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=ouroboros&btnG=), the original paper has been academically cited more than 1400 times, and variants of the protocol are used on other PoS chains. 

Let’s look at the pros and cons of PoS:

**_Advantages_**

*   Validators [don’t need expensive specialized equipment](https://iohk.zendesk.com/hc/en-us/articles/900001208966-Stake-Pool-Minimum-System-Requirements) to set up nodes, a standard computer will do thus encouraging decentralization.
    
*   PoS protocols are highly [energy-efficient](https://slate.com/technology/2022/03/how-green-is-green-crypto.html) & [sustainable](https://www.essentialcardano.io/glossary/sustainability) because validators do not need to solve resource-intensive puzzles.
    

**_Disadvantages_**

*   Validators on some PoS consensus mechanisms must [lock up a small amount of their assets](https://cardano.org/stake-pool-operation/) (pledge), which can’t be unstaked for a set period.
    
    Note: This doesn’t apply to Cardano.
    
*   Validators with the largest amounts of staked assets or [multiple pools](https://adapulse.io/multiple-stakepool-operators-are-harming-cardano/) have significant influence in validating transactions, which could pose security risks.
    
*   With some chains, delegators and validators can risk losing part of their staked funds (slashing) if validators validate inaccurate transactions, go offline along with other validators, or attack the network.
    
    Note: There is no such slashing on Cardano.
    
*   PoS systems with a small number of active validators or those that overly rely on centrally hosted Cloud services (vs bare metal, self-hosted nodes) reduce decentralization.
    

### Delegated proof of stake (DPoS)

DPoS is a modified [PoS consensus](https://emurgo.io/explain-proof-of-stake-pos-dpos/) mechanism that implements a voting system with two actors: delegates and voters.

Voters stake their assets and elect delegates to validate transactions on the network. This means that a delegate’s ability to become and remain a validator depends on their reputation. One mistake and they can be removed and replaced. Maintaining their reputation, therefore, becomes crucial.

[WAX](https://on.wax.io/about-wax/) and [EOS](https://eosnetwork.com/about-us/) are DPoS blockchains.

The advantages and disadvantages of a DPoS consensus mechanism include:

**_Advantages_**

*   Transactions are fast on a DPoS network due to the limited number of validators, enabling faster consensus. 
    
*   A DPoS consensus protocol blockchain remains secure through voting. Any delegate that behaves suspiciously can be voted out instantly.
    
*   A DPoS blockchain is very energy efficient.
    

**_Disadvantages_**

*   DPoS networks may be more susceptible to a [51% attack](https://www.investopedia.com/terms/1/51-attack.asp) due to the relatively small number of validators. This attack occurs when over 50% of the chain’s stake is controlled by one individual or group.
    
*   DPoS blockchains are more centralized than chains with some of the other consensus mechanisms because of fewer validators on a DPoS chain.
    
*   Voters with more staked assets are more influential.
    

### Proof of authority (PoA)

PoA is a consensus model that might better suit private networks. Instead of staking the chain’s digital assets, a committee is entrusted to perform validation – in contrast to public (i.e., permissionless) participation.

The PoA consensus mechanism determines a fixed set of nodes to perform chain maintenance. These nodes earn the exclusive right to secure the network and validate transactions.

[VeChain](https://docs.vechain.org/) and private networks such as [JP Morgan’s Coin Systems](https://www.jpmorgan.com/onyx/coin-system.htm) use this mechanism.

A PoA protocol has the following pros and cons:

**_Advantage_**

*   As with PoS, this model is [energy-efficient](https://smartcharging-electricvehicles.medium.com/the-proof-of-authority-algorithm-in-the-energy-market-9535735d8f9c) and doesn’t require expensive hardware or high computational power.
    

**_Disadvantages_**

*   The blockchain is maintained by a small number of approved validators, meaning it is not truly [decentralized](https://stackoverflow.com/questions/57465247/does-proof-of-authority-make-blockchain-network-centralized).
    
*   Becoming a validator requires a lot of fiat, making it harder for most people to participate in the process.
    

### Proof of capacity (PoC)

PoC – also known as proof of space – requires miners to have available disk space to obtain mining rights and validate transactions. Similarly to PoW, in PoC, the rights to produce a new block are assigned proportionally to the space (instead of computational power) a given miner dedicates to the PoC system.

Blockchains using PoC include [Chia](https://www.chia.net/about/), [Signum](https://signum.network/discover) (formerly known as Burstcoin), [SpaceMint](https://dci.mit.edu/research/2019/3/20/spacemint-a-cryptocurrency-based-on-proofs-of-space), and [Storj](https://www.storj.io/about).

**_Advantages_**

*   Block mining does not require high energy consumption as block producer election depends on available disk space.
    
*   Any standard hard disk is compatible with PoC.
    
*   The drive can be used for any other data storage purpose after mining data has been removed, unlike in PoW mechanisms where hardware is only used to mine.
    
*   Nodes do not require hard drive upgrades or specialized hardware, they only require disk space.
    

**_Disadvantage_**

*   If the PoC model gains greater popularity, the mechanism could increase demand for higher capacity storage to boost a miner’s chances of validating a block.
    

## Proof of useful work (PoUW): a new and sustainable consensus mechanism

The blockchain industry is still relatively new, having existed for not much longer than a decade. Organizations and blockchain projects continuously look into how to build and improve on consensus mechanisms.

[Input Output Global](https://iog.io/) is one such example with its recent research into **Ofelimos** – a novel proof of _useful_ work (PoUW) consensus mechanism that seeks to minimize the energy wastage in a PoW mechanism.

At the time of writing, no blockchain uses PoUW and any pros and cons of this consensus mechanism are only theoretical. Here's a possible advantage and a presumed disadvantage of Ofelimos:

**_Advantage_**

*   PoUW ensures that at least some of PoW’s computational energy expenditure is used to solve complex real-world problems. Examples might include DNA sequencing, distributed computation, protein unfolding, urban planning, and more.
    

**_Disadvantage_**

*   The PoUW model requires a continuous stream of complex real-world queries to solve, otherwise, there’s an unnecessary loss of computational power like in PoW protocols.
    

**Learn more** about this new model by reading this [in-depth article](https://iohk.io/en/blog/posts/2022/08/16/introducing-ofelimos-a-proof-of-useful-work-consensus-protocol/).

# ブロックチェーンコンセンサスメカニズム6種

検証を理解するための初心者向けガイド

ブロックチェーンは分散型システムです。ここでは、デジタル[トランザクション](https://www.essentialcardano.io/glossary/transaction-tx)の記録が公に検証可能かつ[不可変](https://www.merriam-webster.com/dictionary/immutable)です。新しいトランザクションは、他の最近のトランザクションとともにブロックに格納され、その後ブロックは他のブロックからなるチェーンに追加されます（故に「ブロックチェーン」と呼ばれます）。

ブロックチェーンが良好に稼働するためには、参加者（または[ノード](https://www.essentialcardano.io/glossary/node)）が新規ブロックの検証に合意する必要があります。ブロックチェーンはブロック生成ノードの適正を判断するために、さまざまなコンセンサスプロトコルのさまざまなバリエーションを使用することができます。

継続性を確保するために、ブロック生成者は特定のトランザクション履歴について_コンセンサス_に達する必要があります。これは、参加者の見解が同じ履歴に収束することを保証する、特定のコンセンサスメカニズムによって達成されます。これにより、_特定の参加者を信用する必要なく_、ブロックチェーン全体の信頼が保証されます。相互に不信感を抱いている者同士でも、ブロックチェーン自体が自分たちの行動を仲裁して検証できるとわかっているため、安心してブロックチェーンに参加することができます。

プロトコルによって、さまざまなレベルの安全性、スケーラビリティ、分散性が提供されます。それぞれのコンセンサスメカニズムが「ベスト」ソリューションであると主張するでしょう。

ここでは、6つのブロックチェーンプロトコルについて解説します。

**最も普及しているコンセンサスメカニズムとは何でしょうか。**

![](file:///C:/Users/junko/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

最も有名なコンセンサスプロトコルは[プルーフオブワーク](https://www.essentialcardano.io/faq/what-is-proof-of-work-pow)（PoW）と[プルーフオブステーク](https://www.essentialcardano.io/glossary/pos-proof-of-stake)（PoS）の2つですが、その複数のバリエーションも含め、他にもプロトコルは存在します。こうしたプロトコルのメカニズムの仕組みと、それぞれの違いについて掘り下げてみましょう。

**プルーフオブワーク（Proof of work：PoW）**

PoWは最初のブロックチェーンコンセンサスメカニズムで、[サトシ・ナカモト](https://nakamotoinstitute.org/)が2009年にこのモデルを[ビットコイン](https://bitcoin.org/en/how-it-works)チェーンに適用しました。

PoWは、適度に難しいパズルを解くというコンピューター（マイナー）間の競争に依存しています。クエリに対する可能な解決策を見つけた次のマイナーは、ブロックチェーン上の新しいブロックを[マイニング](https://www.essentialcardano.io/faq/what-is-mining)します。

[Ergo](https://ergoplatform.org/en/discover/)と[Ethereum Classic](https://ethereumclassic.org/why-classic)もPoWを使用しています。

PoWを使う前に考慮したい利点と欠点は以下の通りです。

**_利点_**

*   PoWチェーンを攻撃するためには、ネットワークの計算力の51%をコントロールすることが必要となる、すなわち、ハッカーにとってプロセスが高額になりすぎる
    

**_欠点_**

*   クエリの解決に[エネルギーを大量に消費する](https://adan.eu/en/article/blockchain-protocol-energy-footprint)（_すべて_のマイナーがブロックのマイニングのために積極的に競争するため）ことは、PoWチェーンの大きな欠点
    
*   マイナーになるためには、[高額な専用ハードウェア](https://corporatefinanceinstitute.com/resources/knowledge/other/bitcoin-mining/)が必要であるため、分散化の妨げとなる
    
*   PoWはネットワークの設計上スケーラビリティに限界があるため、ブロックサイズと生成時間が限定される
    

**プルーフオブステーク（Proof of stake：PoS）**

PoSは、PoWよりも新しく、エネルギー消費が少ない、よりサステナブルなコンセンサスメカニズムです。PoSコンセンサスを通じて、ブロックチェーン資産保有者は、自分のステークをバリデーターに委任することによって、オンチェーントランザクションの保守と検証に参加できます。

2012年に立ち上げられた[Peercoin](https://www.peercoin.net/)は、最初のPoSプロジェクトです。[Cardano](https://docs.cardano.org/)、[Polygon](https://polygon.technology/about)**、**[Tezos](https://tezos.com/learn/what-is-tezos/)は、三大PoS ブロックチェーンです。イーサリアムは最近無事に「マージ」して、PoWからPoSに移りました。

ただし、CardanoのPoSメカニズムは以下の点でイーサリアムとは異なっています。

*   Cardanoネイティブトークン保有者がいつでもステークを引き出したり他のバリデーター（ステークプール）に委任することができる流動ステーキング（ロック無し）が可能
    
*   ステーキングを始めるには最初に2.17ADAという少額の資金が必要
    
*   意図したとおりに運営しないノードにステーキングしたデリゲーター（委任者）を不当に罰する怖れのあるスラッシング機能はない
    

[Ouroboros](https://www.essentialcardano.io/glossary/ouroboros)（ウロボロス）はCardanoのPoSコンセンサスプロトコルであり、最初の証明可能安全性を持つPoSプロトコルです。言い換えれば、Ouroborosは攻撃に対し_数学的に検証可能な_安全性を持ちます。このプロトコルは、ステークの51%が誠実な参加者に保有されている限り、安全であることが保障されます。[Google scholar](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=ouroboros&btnG=)によれば、オリジナルの論文は1400回以上学術的に引用されており、このプロトコルのバリエーションが他のPoSチェーンで使用されています。 

PoSの利点と欠点は以下の通りです。

**_利点_**

*   バリデーターがノードをセットアップするのに[高額な専用の機材は必要ではなく](https://iohk.zendesk.com/hc/en-us/articles/900001208966-Stake-Pool-Minimum-System-Requirements)標準のコンピューターで済むため、分散化が促進される
    
*   PoSプロトコルは、バリデーターがリソースを大量に必要とするパズルを解く必要がないため、極めて[エネルギー効率がよく](https://slate.com/technology/2022/03/how-green-is-green-crypto.html)[サステナブル](https://www.essentialcardano.io/glossary/sustainability)
    

**_欠点_**

*   PoSコンセンサスプロトコルによっては、バリデーターが[少額の資産をロックする](https://cardano.org/stake-pool-operation/)必要があり（プレッジ）、この資産は一定期間ステークできない
    

注：これはCardanoには当てはまりません

*   ステーク資産の最大額を持つ、あるいは[複数のプール](https://adapulse.io/multiple-stakepool-operators-are-harming-cardano/)を持つバリデーターがトランザクションの検証に大きな影響を及ぼすことで、セキュリティリスクにつながる恐れがある
    
*   チェーンによっては、バリデーターが不正確なトランザクションを有効とする、または、他のバリゲーターと一緒にオフラインになる、ネットワークを攻撃するなどした場合に、デリゲーターとバリデーターがステークした資金の一部を失う（スラッシング）リスクがある
    

注：Cardanoにはスラッシングはありません

*   アクティブなバリデーターが少数のPoSシステムや、一元的にホストされているクラウドサービス（対してベアメタル、セルフホストノード）に過剰に依存しているPoSシステムは分散化が低下する
    

**委任型プルーフオブステーク（Delegated proof of stake：DPoS）**

DPoSは[PoSコンセンサス](https://emurgo.io/explain-proof-of-stake-pos-dpos/)メカニズムをアレンジしたもので、デリゲートと投票者という2つのアクターによる投票システムを実装しています。

投票者は自分の資産をステーキングしてネットワークでトランザクションを検証するデリゲートを選出します。これは、デリゲートが自身の評判次第でバリデーターとなり、その役に留まることを意味します。1つのミスで排除され、取って代わられることもあり、評判を保つことが重要になります。

[WAX](https://on.wax.io/about-wax/)と[EOS](https://eosnetwork.com/about-us/)はDPoSブロックチェーンです。

DPoSコンセンサスメカニズムの利点と欠点は以下の通りです。

**_利点_**

*   DPoSネットワークではバリデーターの数が限られていることからコンセンサスが迅速であり、トランザクションの高速化が可能 
    
*   DPoSコンセンサスプロトコルブロックチェーンでは投票を介して安全性が保たれる。疑わしい行動をするデリゲートは即座に投票で落とされる
    
*   DPoSブロックチェーンは非常にエネルギー効率が良い
    

**_欠点_**

*   DPoSネットワークはバリデーターの数が比較的少数であることから、[51%攻撃](https://www.investopedia.com/terms/1/51-attack.asp)に対してより脆弱となる可能性がある。この攻撃は、チェーンで50%を超えるステークが1個人や1グループにコントロールされると発生する
    
*   DPoSブロックチェーンは、バリデーターの数が他に比べて少ないため、他の一部のコンセンサスメカニズムのチェーンよりも中央集権化しやすい
    
*   多くのステーク資産を持つ投票者ほど、影響力が増す
    

**プルーフオブオーソリティ（Proof of authority：PoA）**

PoAはプライベートネットワークに適したコンセンサスモデルです。チェーンのデジタル資産をステーキングする代わりに、信任された委員会が検証を実行します。これは、一般参加型（パーミッションレス）とは対照的です。

PoAコンセンサスメカニズムは、固定されたノードのグループがチェーンを保守します。これらのノードはネットワークを保全しトランザクションを検証する独占権を得ます。

[VeChain](https://docs.vechain.org/)や、[JP MorganのCoin Systems](https://www.jpmorgan.com/onyx/coin-system.htm)といったプライベートネットワークはこのメカニズムを採用しています。

PoAプロトコルの利点と欠点は以下の通りです。

**_利点_**

*   PoSの一種であるこのモデルは[エネルギー効率が良く](https://smartcharging-electricvehicles.medium.com/the-proof-of-authority-algorithm-in-the-energy-market-9535735d8f9c)、高額なハードウェアや高度な計算力を必要としない
    

**_欠点_**

*   ブロックチェーンは承認された少数のバリデーターによって保守されるため、真の意味で[分散型](https://stackoverflow.com/questions/57465247/does-proof-of-authority-make-blockchain-network-centralized)とは言えない
    
*   バリデーターになるには多額のフィアットが必要であるため、ほとんどの人にとってプロセスに参加することは困難
    

**プルーフオブキャパシティ（Proof of capacity：PoC）**

PoCはプルーフオブスペースとも呼ばれ、マイナーがマイニング権を得てトランザクションを検証するために空きディスク容量を要求されます。PoWと同様に、PoCでは、新ブロックの生成権は、所与のマイナーがPoCシステム専用にする容量（計算力ではなく）に比例して割り当てられます。

PoCを使用しているブロックチェーンには、[Chia](https://www.chia.net/about/)、[Signum](https://signum.network/discover)（旧Burstcoin）、[SpaceMint](https://dci.mit.edu/research/2019/3/20/spacemint-a-cryptocurrency-based-on-proofs-of-space)、[Storj](https://www.storj.io/about)があります。

**_利点_**

*   ブロック生成者はディスク容量に基づいて選定されるため、高い電力消費は必要にならない
    
*   PoCは標準ハードディスク対応
    
*   ハードウェアをマイニング専用にしか使えないPoWシステムとは異なり、ドライブはマイニングデータの削除後に別のデータストレージとして利用可能
    
*   ノードによりハードドライブのアップグレードや専用ハードウェアが必要となることはなく、必要なのはディスク容量のみ
    

**_欠点_**

*   PoCモデルの人気が高まると、マイナーがブロックを検証するチャンスを高めるために、より大容量のストレージの需要が高まる可能性がある
    

**プルーフオブユースフルワーク（Proof of useful work：PoUW）：サステナブルな新型コンセンサスメカニズム**

ブロックチェーン業界は、その存在が10年そこそこと、いまだに比較的新しい業界です。組織やブロックチェーンプロジェクトは恒常的にコンセンサスメカニズムの構築方法および改善方法を模索しています。

[Input Output Global](https://iog.io/ja/)最近の研究**Ofelimos**はその好例です。これは、プルーフオブ_ユースフル_ワーク（PoUW）という新しいコンセンサスメカニズムで、PoWメカニズムのエネルギー浪費を最小に抑えることを目指しています。

執筆時点で、PoUWを使用しているブロックチェーンはなく、このコンセンサスメカニズムの利点と欠点は理論上のものです。Ofelimosの予想される利点と欠点は以下の通りです。

**_利点_**

*   PoUWは、PoWの計算にかかるエネルギー消費の少なくとも一部を、複雑な実世界の問題を解決するために使用する。この例としては、DNA塩基配列決定、分散コンピューティング、タンパク質のアンフォールディング、都市計画など
    

**_欠点_**

*   PoUWモデルでは、解決を要する複雑な現実世界のクエリの継続的なストリームが必要。そうでなければ、PoW同様に計算能力を無駄に損失することになる
    

この新モデルの**詳細**は、こちらの[解説記事](https://iohk.io/jp/blog/posts/2022/08/16/introducing-ofelimos-a-proof-of-useful-work-consensus-protocol/)を参照してください。
