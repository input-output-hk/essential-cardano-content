---
title: How Ouroboros Phalanx enhances network protection
tags:
  - Ouroboros
  - Consensus
  - Development
  - Throughput
  - security
url: ""
image: https://ucarecdn.com/1b63d46b-6fd3-4907-9803-0990dc1ada60/
image_text: ""
---

_By Kris Bennett, developer relations specialist on the innovation team_

### Ouroboros Phalanx raises Cardano’s security bar with powerful protection against stake-based attacks – ensuring faster transactions and stronger network integrity

日本語版はスクロールダウンしてください。  
  
Ouroboros Phalanx raises Cardano’s security bar with powerful protection against stake-based attacks – ensuring faster transactions and stronger network integrity

Imagine Cardano as a bustling city where everyone has a fair chance to ‘lead’ – deciding which transactions get added to the blockchain. But what if a sneaky group could rig the system, stacking the deck to control more turns than they should? That's the risk of ‘grinding attacks’ in Cardano's current setup. 

Today, Input | Output is excited to introduce Ouroboros Phalanx – think of it as a digital shield wall, inspired by ancient warriors locking shields to fend off invaders. Phalanx makes these attacks way harder and more expensive, keeping Cardano secure, fair, and fast for everyone. Phalanx is one of six projects funded via an Input | Output Research (IOR) proposal to Intersect, and endorsed by the community. This project is currently in its technical validation phase as part of its closure state. 

In simple terms, Phalanx upgrades Cardano's ‘random draw’ system (how leaders are picked) to be tamper-resistant. Phalanx adds an extra layer of protection to the rock-solid Praos protocol. Phalanx belongs to the broader Ouroboros family of consensus protocols that power Cardano’s proof-of-stake system. Ouroboros began with the original Classic and Praos designs, which established secure and energy-efficient block production. Later iterations, such as Genesis, Peras, and Leios, aim to extend Ouroboros to support features like dynamic availability, scalability, and higher throughput. Phalanx builds directly on Praos, strengthening its randomness mechanism to make Cardano even more resilient to manipulation as the network scales.

Let's break it down without the jargon.

## The hidden danger: why attacks matter

Cardano uses a lottery-like system within the Ouroboros Praos consensus to pick who adds the next block. It's fair because it's random – like drawing names from a hat. But bad actors with a significant stake (think 20% or more of ada) could ‘grind’ the system: they try tons of options super fast to pick the one that lets them win more often. This could lead to:

*   Delaying transactions (slowing down the network)
    
*   Sneaky tricks like double-spending or censoring deals
    
*   Undermining trust, as the city (Cardano) feels less safe.
    

It's like someone peeking at lottery tickets and swapping them out. Although it's not common yet, as Cardano grows, we need to stay ahead.

## How Phalanx works: the shield in action

Phalanx borrows from ancient tactics: soldiers in a phalanx formation were hard to break because they worked together tightly. Here, it adds a ‘slow and steady’ layer to the randomness process using something called verifiable delay functions (VDFs) – fancy math that takes real effort to compute, but is easy to check.

*   **Extends the process:** instead of quick draws, randomness builds over two epochs (10 days), making cheats need massive computing power.
    
*   **Honest players win easy:** regular stake pools do small, manageable tasks – like each soldier holding one shield.
    
*   **Attackers pay big:** cheaters must redo everything for each try, costing billions in hardware or energy. It's like forcing them to climb a mountain instead of a hill.
    

Analogy: Picture a raffle where tickets are drawn normally. Phalanx adds a puzzle to each ticket – easy for one, but if you're trying to fake thousands, you're buried in work.

## Real-world benefits: faster, safer Cardano

With Phalanx:

*   **Quicker confirmations:** transactions settle faster (20-30% reduction in wait times) because the system trusts randomness more.
    
*   **Stronger defense:** reduces attack risks by exponentially increasing the costs of an attack, thereby protecting your ada and DApps from disruptions.
    
*   **Eco-friendly boost:** by deterring wasteful attacks, it keeps Cardano green and efficient.
    
*   **Future-proof:** complements upgrades like [Peras](https://iohk.io/en/blog/posts/2025/04/11/ouroboros-peras-accelerating-transaction-settlement-on-cardano/) (super-fast finality) for even smoother experiences.
    

For users: your wallet feels more secure knowing your transaction is safe, no more worries about roll-backs. For developers: Build without worrying about network hiccups. For the community: Cardano stays decentralized and fair.

## What's next?

Currently, Phalanx operates at the protocol level – the next phase will commence once nodes start integrating this work. Phalanx will roll out via a hard fork after testnet success. Governance lets the community tweak settings. Dive deeper into our [technical post](https://iohk.io/en/blog/posts/2025/10/22/introducing-ouroboros-phalanx-breaking-the-economics-of-grinding-attacks/) or [check out the repo](https://github.com/input-output-hk/ouroboros-phalanx-protocol) for more details! 

Cardano isn't just building a blockchain – we're forging a fortress. Phalanx is the latest shield. Stay tuned!


## **Ouroboros Phalanxは、どのようにネットワーク保護を強化するか**

### Ouroboros Phalanxはステークベースの攻撃に対する強力な防御によりCardanoのセキュリティ基準を引き上げ、より高速なトランザクションとより強固なネットワークの整合性を保証

Cardanoを、誰もが公平に「リーダー」（どのトランザクションをブロックチェーンに追加するかを決定する役割）になるチャンスがある賑やかな街だと想像してみてください。そこで、もしずる賢いグループがシステムを不正に操作し、本来よりも多くのブロック生成の機会をコントロールしようとしたらどうなるでしょうか。これが、現在のCardanoの設定における「グラインディング攻撃」のリスクです。 

本日、Input | Outputは、Ouroboros Phalanxを発表できることを嬉しく思います。これは、盾を組み合わせて侵入者を防いだ古代の戦士たちにインスピレーションを得た、デジタルな盾の壁のようなものです。Phalanxはこれらの攻撃を非常に困難で高コストなものにし、Cardanoをすべての人にとってセキュアで公平、かつ高速なものに保ちます。Phalanxは、Input | Output Research (IOR)がIntersectに提案し、コミュニティによって承認された6つのプロジェクトのうちの1つです。このプロジェクトは現在、クロージャー（完了）段階の一環として技術的検証フェーズにあります。 

簡単に言えば、PhalanxはCardanoの「くじ引き」システム（リーダーの選出方法）を改ざん耐性のあるものへとアップグレードするものです。Phalanxは、堅牢なPraosプロトコルに追加の保護層を加えています。Phalanxは、Cardanoのプルーフオブステーク型システムを支える、より広範なOuroborosコンセンサスプロトコルファミリーの1つです。Ouroborosは、セキュアでエネルギー効率の高いブロック生成を確立した最初の設計、ClassicとPraosから始まりました。Genesis、Peras、Leiosなどその後のイテレーションは、動的な可用性、スケーラビリティ、高スループットといった機能をサポートするためにOuroborosを拡張することを目指しています。PhalanxはPraosの上に直接構築されており、ネットワークのスケーリングに伴い、不正操作に対するCardanoの耐性を高めるために、そのランダム性メカニズムを強化しています。

専門用語を使わずに、その仕組みを分解してみましょう。

## 潜む危険性：なぜ攻撃が問題となるのか

Cardanoは、次のブロックを追加するノードを選ぶために、Ouroboros Praosコンセンサス内で宝くじのようなシステムを使用しています。これはランダムであり、帽子から名前を引くように公平です。しかし、多大なステーク（ADAの20％以上）を持つ悪意のある攻撃者は、システムを「グラインディング」しようとする可能性があります。つまり、彼らは膨大な数の可能性を超高速で試行し、より頻繁に自分たちが選出される結果を引き出します。これは、以下の事態につながる可能性があります。

*   トランザクションの遅延（ネットワークの速度低下）
    
*   二重支払いや取引の検閲などの不正行為
    
*   都市（Cardano）の安全性が低下したと感じられることからの、信頼の失墜
    

これは、宝くじのチケットを覗き見て、すり替えを行うようなものです。まだ一般的ではありませんが、Cardanoの成長を見越して先手を打つ必要があります。

## Phalanxの仕組み：盾の効果

Phalanxは古代の戦術から着想を得ています。ファランクス陣形では兵士たちがしっかりと連携しており、壁を難攻不落のものにしていました。ここでは、検証可能遅延関数（VDF）と呼ばれるものを使用して、ランダム性プロセスに「ゆっくり着実に」という層を追加します。これは、計算に真の労力を要するがチェックは容易という高度な数学です。

*   **プロセスの拡張：**ランダム性の生成を、クイックドロー（即座の抽選）ではなく2エポック（10日間）にわたって構築することで、不正行為は膨大な計算資源を必要とするものになります。
    
*   **正直な参加者の利点：**通常のステークプールは、各兵士が持つ盾が1つであるように、管理しやすい小さなタスクを実行するだけです。
    
*   **攻撃者は多大なコストを負担：**不正行為を試みる攻撃者は、試行ごとにすべての計算をやり直す必要があり、ハードウェアやエネルギーに億単位のコストがかかります。これは、丘を登ろうとして、山に追い立てられるようなものです。
    

アナロジー：チケットが普通に引かれる抽選会を想像してください。Phalanxはそれぞれのチケットにパズルを追加します。1つのパズルは解くのが簡単ですが、数千枚のチケットを偽造しようとすると、パズル解きに忙殺されます。

## 現実的なメリット：より速く、より安全なCardano

Phalanxの導入により、以下の効果が得られます。

*   **迅速な承認：**信頼性が増すため、トランザクションの決済が高速化される（待機時間が20％～30％削減）
    
*   **強固な防御**：攻撃コストを指数関数的に増大させることで攻撃リスクを軽減し、ADAとDAppを中断から保護
    
*   **環境への配慮：**無駄な攻撃を抑止することで、Cardanoの環境性能と効率性を維持
    
*   **将来への対応：**[Peras](https://iohk.io/jp/blog/posts/2025/04/11/ouroboros-peras-accelerating-transaction-settlement-on-cardano/)（超高速ファイナリティ）などのアップグレードを補完し、さらにスムーズな体験を実現
    

ユーザーにとっては、トランザクションが安全であると確信できるため、ウォレットの安心感が増し、ロールバックの心配がなくなります。開発者にとっては、ネットワーク障害を心配せずに構築に専念できます。コミュニティにとっては、Cardanoは分散性と公平性を維持します。

今後の展望

現在、Phalanxはプロトコルレベルで動作しています。次のフェーズは、ノードがこの作業の統合を開始すると始まる予定です。Phalanxは、テストネットでの成功を経て、ハードフォークを通じてロールアウトされます。ガバナンスによって、設定の微調整はコミュニティに委ねられます。詳細は、[技術ブログ](https://iohk.io/jp/blog/posts/2025/10/22/introducing-ouroboros-phalanx-breaking-the-economics-of-grinding-attacks/)を確認するか、[リポジトリをチェック](https://github.com/input-output-hk/ouroboros-phalanx-protocol)してください。 

Cardanoは単にブロックチェーンを構築するだけでなく、要塞を築いています。Phalanxはその最新の盾です。ご期待ください。
