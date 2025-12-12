---
title: Weekly development report as of 2025-12-12
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d0e8dcff-ea90-4d74-80f8-18f960ef53c4/
image_text: Weekly development report as of 2025-12-12
---

Dear community, this report marks the final development update of 2025.

Wishing everyone warm holiday cheer and a wonderful New Year 🎄✨

Here’s to the year ahead — full of fresh progress, new milestones, and shared success!

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to grow. Currently, there are 2,020 projects being developed, while the number of delegated wallets remains stable at 1.34 million. The total number of native tokens has surpassed 11.03 million, and the number of token policies has increased to 224,768.

Governance participation is also strengthening, with 1,541 delegated representatives (DReps), of which 1,023 are active. Additionally, development activity remains consistent, with 380 GitHub commits recorded this week.

_In other news:_

*   The first integration under the [Critical Cardano Integrations](https://x.com/IntersectMBO/status/1999168539144368303) workstream has been approved, bringing Pyth Lazer oracle to Cardano
    
*   [Serviceplan Group](https://x.com/MasumiNetwork/status/1999148610584268943) has officially joined Intersect as an enterprise member
    
*   [Midnight’s Redemption](https://x.com/midnightfdn/status/1998728690801213946) portal is officially live, and participants can connect wallets to see their thaw dates
    
*   The NIGHT token is now trading on multiple exchanges, including [Kraken](https://x.com/krakenfx/status/1998333052469023137) and [Kucoin](https://x.com/kucoincom/status/1998026295813497131)
    
*   [Cardano Foundation](https://x.com/Cardano_CF/status/1997976947742138683) is recruiting service providers to deliver sessions and workshops for the Cardano Accelerator.
    

### CORE TECHNOLOGY

This week, the **consensus** team completed the LSM-tree work, with the remaining integration across the API, CLI, and node scheduled to land with `cardano-node` v.10.7. The team also addressed a mempool deadlock commit ([1](https://github.com/IntersectMBO/ouroboros-consensus/issues/1787), [2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1798)) and [resolved a benchmark memory leak for v.10.6.1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1802). For field testing, they prepared a [10.6.1 node with LSM-trees for preliminary relay deployment](https://github.com/IntersectMBO/cardano-node/tree/js/lsm-10.6.1) and compiled an [untested per-block-tables prototype](https://github.com/IntersectMBO/cardano-node/tree/js/multiple-tables) as groundwork for LedgerHD in v.10.8. In tooling and experiments, `cardano-testnet` now supports running with `kes-agent`, and the team advanced the Leios demo migration to `ouroboros-leios`, adding [traffic control for delay and bandwidth configuration](https://github.com/input-output-hk/ouroboros-leios/pull/651).

### SCALING

This week, the **Mithril** team continued focusing on the SNARK-friendly STM library, simplifying its code and implementing some wrappers for the [Jubjub backend](https://github.com/input-output-hk/mithril/issues/2817). They also made progress by specifying the non-recursive SNARK circuit, assessing constraints on [Halo2 verification keys](https://github.com/input-output-hk/mithril/issues/2800), designing a testing strategy for SNARK circuits, prototyping the recursive SNARK solution, and completing a prototype of the Bitcoin DeFi prover with RISC Zero.

Additionally, they completed the simple aggregator discovery mechanism, worked on improvements to the protocol security page, and completed the second phase of the common aggregator client implementation.

Finally, they worked on CI enhancements by implementing dependency license enforcement and fixing bugs in crate publication, and kept upgrading the Cardano node to v.10.6.

### CATALYST

This week, **Catalyst** turned the spotlight on USDMOfficial, Cardano’s fiat-backed stablecoin developed by Moneta. A major step in strengthening real-world utility across the ecosystem.

They also took a moment to honour Matthew Plomin, whose work and dedication helped shape a pivotal chapter in Cardano’s evolution.  
Following this, James Meidinger joined Catalyst for a deep dive into how USDM is poised to accelerate Cardano’s next wave of growth. 

The team also shared key Fund15 updates to keep everyone informed on progress through the review phase.

Reminder: the _community review period_ closes on December 15 at 6:00 AM UTC. Make sure your reviews are submitted before the deadline.

Watch the [full town hall](https://youtube.com/live/zt7et2DDqmU) and explore the [presentation deck](https://docs.google.com/presentation/d/1EiVKsEwTMuCa5IptDFdy50x8m1r6XdwzKAGA9ZdOfNs/edit?usp=sharing) for more details.

### GOVERNANCE

An essential governance vote is currently live to restore the constitutional committee (CC) to full capacity following a mid-term retirement that has left the body below quorum. Without a fully operational CC, Cardano faces governance paralysis, blocking the ratification of critical network upgrades, treasury withdrawals, and hard forks. DReps and SPOs are urged to ratify the off-chain election of **Cardano Curia** on-chain before the **December 20 deadline** to ensure the ecosystem can continue to evolve and adapt. For a full breakdown of the voting thresholds and implications, please **check out this** [detailed infographic](https://www.essentialcardano.io/infographic/cardano-constitutional-committee-restoration-infographic) **and** [blog post](https://www.essentialcardano.io/article/why-spos-and-dreps-need-to-vote-on-the-constitutional-committee-restoration)**.**  

EDUCATION

This week, the **education** team is reflecting on the successful smart contracts lectures and node demonstration at Florida International University last week. They are also concentrating on the self-paced content of the Cardano education program.

![](https://ucarecdn.com/1b1f6d82-0978-4c41-8a9b-2dada0bc9b21/-/preview/-/format/auto/-/quality/smart/)

コミュニティの皆様、2025年開発アップデートは本レポートが最後となります。

皆様には、温もりのあるホリデーシーズンと素晴らしい新年をお迎えいただけますようお祈り申し上げます🎄✨

フレッシュな進捗情報、新しいマイルストーン、そして共有された成功に満ちた来年が待っています！

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは成長を続けています。現在、開発中のプロジェクトは2,020件、委任済みウォレット数は134万と安定しています。ネイティブトークンの総数は1,103万を超え、トークンポリシー数は22万4,768に増加しました。

ガバナンスへの参加も強化され、DRep数は1,541人、うち1,023人がアクティブです。開発者の活動も引き続き安定しており、今週は380件のGitHubのコミットが記録されました。

_その他のニュース：_

*   [Critical Cardano Integrations](https://x.com/IntersectMBO/status/1999168539144368303)ワークストリームでの最初の統合が承認され、Pyth LazerオラクルがCardanoに移行
    
*   [Serviceplan Group](https://x.com/MasumiNetwork/status/1999148610584268943)がIntersectにエンタープライズメンバーとして公式参加
    
*   [Midnight償還](https://x.com/midnightfdn/status/1998728690801213946)ポータルが公式オープン、参加者はウォレットを接続して解凍日の確認が可能に
    
*   NIGHTトークンは現在、[Kraken](https://x.com/krakenfx/status/1998333052469023137)や[Kucoin](https://x.com/kucoincom/status/1998026295813497131)など複数の取引所に上場
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1997976947742138683)がCardano Acceleratorのセッションやワークショップを実施するサービスプロバイダーを募集中
    

### コアテクノロジー

**コンセンサス**チームはLSM-tree作業を完了しました。API、CLI、ノードにおける残りの統合は`Cardano-node` v.10.7で実装される予定です。メモリープールデッドロックのコミット（[1](https://github.com/IntersectMBO/ouroboros-consensus/issues/1787)、[2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1798)）に対処し、[v.10.6.1のベンチマークのメモリーリークを解消](https://github.com/IntersectMBO/ouroboros-consensus/pull/1802)しました。フィールドテストのための[予備的なリレーノードのデプロイのためにLSM-treeを備えた10.6.1ノード](https://github.com/IntersectMBO/cardano-node/tree/js/lsm-10.6.1)を準備し、v.10.8のLedgerHDのための基礎作業として、[未テストのブロックごとのテーブルのプロトタイプ](https://github.com/IntersectMBO/cardano-node/tree/js/multiple-tables)をコンパイルしました。ツールと実験においては、`cardano-testnet`が`kes-agent`を使用した実行をサポートするようになりました。Leiosデモの`ouroboros-leios`への移行を進め、[遅延や帯域幅の設定のためのトラフィック制御](https://github.com/input-output-hk/ouroboros-leios/pull/651)を追加しました。

スケーリング

**Mithril**チームは、SNARKに適したSTMライブラリーに引き続き焦点を当て、そのコードを簡素化し、[Jubjubバックエンド](https://github.com/input-output-hk/mithril/issues/2817)用のラッパーを実装しました。非再帰的なSNARK回路の指定、[Halo2検証キー](https://github.com/input-output-hk/mithril/issues/2800)に対する制約の評価、SNARK回路のテスト戦略の設計、再帰的なSNARKソリューションのプロトタイプ作成、RISC Zeroを使用したBitcoin DeFiプルーバーのプロトタイプの完了により、進捗を遂げました。

シンプルなアグリゲーター発見メカニズムを完了し、プロトコルセキュリティページの改善に取り組み、共通アグリゲータークライアント実装の第2フェーズを完了しました。

依存関係ライセンスの強制を実装し、クレート公開におけるバグを修正することでCIを強化し、Cardanoノードv.10.6へのアップグレードを続けました。

### CATALYST

**Catalyst**は、Monetaが開発したCardanoのフィアット担保型ステーブルコイン、USDMOfficialにスポットライトを当てました。これは、現実世界での実用性をエコシステム全体で強化する大きな一歩です。

Cardanoの進化における極めて重要な局面の形成に貢献したMatthew Plomin氏の功績と献身に敬意を捧げました。  
これに続き、James Meidinger氏がCatalystに参加し、USDMがCardanoの次なる成長の波をどのように加速させる態勢にあるかについて、深い洞察を提供しました。 

レビューフェーズ全体の進捗状況を全員に知らせるために、Fund15の主要な更新情報も共有されました。

リマインダー：コミュニティレビュー期間は日本時間12月15日午後3時に終了します。期限前にレビューが提出されていることを確認してください。

詳細は、[タウンホールの全編](https://youtube.com/live/zt7et2DDqmU)を視聴し、[プレゼンテーションデッキ](https://docs.google.com/presentation/d/1EiVKsEwTMuCa5IptDFdy50x8m1r6XdwzKAGA9ZdOfNs/edit?usp=sharing)をご覧ください。

### ガバナンス

現在、完全に機能する憲法委員会（CC）を復活させるために不可欠なガバナンス投票が進行中です。これは、委員会のメンバーが定足数を下回る原因となった任期途中での引退を受けたものです。完全に機能するCCがないため、Cardanoはガバナンスの麻痺に直面し、重要なネットワークアップグレード、トレジャリーからの引き出し、ハードフォークの批准が妨げられています。エコシステムが進化し、適応し続けることができるよう、DRepとSPOは、**12月20日の期限**までに、**Cardano Curia**のオフチェーン選挙をオンチェーンで批准することが求められています。投票のしきい値と影響についての完全な内訳については、**この詳細なインフォグラフィックとブログ記事**をチェックしてください。

教育

**教育**チームは先週フロリダ国際大学で開催されたスマートコントラクト講義とノードデモンストレーションの成功を振り返っています。Cardano教育プログラムの自習型コンテンツにも取り組んでいます。
