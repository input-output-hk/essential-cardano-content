---
title: Weekly development report as of 2023-05-05
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/67102359-bae9-44f5-8f8a-da50dc2288f1/
image_text: Weekly development report as of 2023-05-05
---

### CORE TECHNOLOGY

This week, the **networking** team worked on the ouroboros-network component. After moving ouroboros-consensus to its own repository, the team made ouroboros-network compatible with GHC v.9.4 and v.9.6 and made the cardano-client library independent of ouroboros-consensus-diffusion. They also prepared the release of network packages for the upcoming cardano-node-8.0. These updates are expected to improve the overall performance and stability of the network.

Over the past two weeks, the **consensus** team has made significant progress in the Genesis design. The team discovered that the BlockFetch logic may not require modification for Genesis, though this still needs to be verified. In addition, they began creating a DoS mitigation handbook and updated the conceptual component diagram to guide the Genesis design. Collaborating with IOG researchers, they focused on the ‘Limit on Patience’ attack vector, work on which is ongoing. They sketched a design to decouple the CPU load of the node from its responsiveness to the socket and worked with the networking team to reduce the performance impact of the BlockFetch decision logic.

The team also migrated the consensus code to a [new repository](https://github.com/input-output-hk/ouroboros-consensus), splitting it from the `ouroboros-network` repository, and released consensus v.0.6. Finally, they merged the mempool fairness improvement to the main branch, and worked on documentation improvements. For more details, [see this update](https://input-output-hk.github.io/cardano-updates/2023-05-03-consensus).

The **DB Sync** team worked on a schema change to enhance UTXO query speed and benchmarked it to ensure it is effective. They also optimized rewards performance and worked on [improving epoch calculations](https://github.com/input-output-hk/cardano-db-sync/pull/1380) by introducing a cache to reduce resource usage. Additionally, the team evaluated risks related to UTXO-HD integration and worked on two feature requests: splitting the tx\_out to an address table and pruning consumed entries from the tx\_out table. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team updated some potentially vulnerable libraries and integrated the latest cardano-wallet v.2023-04-14 and cardano-node v.1.35.4.

The team continued working on the **Lace** desktop development. They focused on improving the user experience by enhancing the settings page, embedding DApp rendering, and updating the sidebar. Additionally, the team added new features to the DApp autoconnection functionality.

The **Adrestia team** worked on the community feedback following the Lace launch, and are now preparing the first big cardano-js-sdk and Lace update.

Work is ongoing on extracting the transaction balancing library and wrapping up the multi-signature wallet delegation functionality.

### SMART CONTRACTS

This week, the **Plutus** tools team started documenting the Marconi sidechain architecture and worked on profiling performance regression with the UTXO address indexer. Additionally, they verified the correctness of the indexed `Epoch-StakePoolDelegationDistribution` and redesigned the resuming capabilities, taking into account the issues encountered with the current design. The Plutus core team continued to work on delivering sums-of-products, and merged the plutus-ir and plutus-tx parts of the implementation. They also added the case-of-known-constructor optimization to the Plutus Tx compiler.

The **Marlowe** team worked on the [Merkleization formalization](https://github.com/input-output-hk/marlowe/pull/171) by adding the bases theory, reorganized [Isabelle semantic theory](https://github.com/input-output-hk/marlowe/pull/182) into literate programming, and refactored the guarantees chapter to the specification. The team also updated the [Isabelle version](https://github.com/input-output-hk/marlowe/pull/185) to the 2022 release and added more scenarios for the [Swap example](https://github.com/input-output-hk/marlowe/pull/166) along with [withdrawal support](https://github.com/input-output-hk/marlowe-cardano/pull/564) to runtime tests.

### BASHO (SCALING)

The **Hydra** team conducted an April review meeting and published the [April report](https://hydra.family/head-protocol/monthly/2023-04) where the team summarizes their monthly progress and takes a look at further development goals. They also updated the specification on both the repository and the [website](https://hydra.family/head-protocol/unstable/core-concepts/specification/), resolved some user issues, and fixed the TUI peer list. Additionally, the team updated several dependencies, hosted a [Twitter space on auction use cases](https://twitter.com/InputOutputHK/status/1651572046055325697?s=20), and addressed the rollback bug by running tests and implementing a solution. 

This week, the **Mithril** team completed the implementation of the new certifier service of the aggregator. They also finished implementing the interfaces defined to provide certification for the fully immutable Cardano files snapshot and the Mithril stake distribution. Additionally, they have completed the refactoring of the multi-signer in the aggregator.

Finally, the team fixed the bug in the signer registration that was responsible for gaps during the signature phase for some signers, and they upgraded the Cardano node used in the Mithril testnets and devnet to v.1.35.7.

### VOLTAIRE

This week, the conversations on **CIP-1694** are about to go global. Applications for funding to host a workshop on Cardano’s on-chain governance proposal (as described in [CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694)) closed on Monday. There have been over 75 applications across the planet, with both virtual and in-person meets on the table. Shortly, Essential Cardano will release an update detailing all the workshops and how people can attend.

In other news, the **Member-Based Organization (MBO)** has recently published an update to progress with more details on what the MBO will orchestrate across the Cardano ecosystem. The MBO will be a home for the blockchain’s future development and an aggregation point for community governance. 

Focussing on five pillars, the MBO will:

1.  Support the community to develop the ecosystem by hosting developer-focused conferences, hackathons, and events.
    
2.  Administrate and champion Cardano’s community-led governance implemented by CIP-1694.
    
3.  Coordinate delivery of the community approved Cardano technical roadmap.
    
4.  Coordinate the routine maintenance of Cardano for system stability.
    
5.  Coordinate open source development of core technologies for Cardano.
    

[Read more](https://cardanombo.org) and express your early interest to join!

### CATALYST

This week in **Project Catalyst,** a number of teams presented their projects to the community during the Catalyst town hall. You can rewatch the segment from the main town hall [here](https://www.youtube.com/live/zTmmbkbSoMs?feature=share). The Catalyst community presents a town hall each week, if you haven’t registered for next week you can register your attendance for the [upcoming town hall here](https://zoom.us/meeting/register/tJEtduyupzMvHNUczCQwfFJGcXzmw2lDwkIf#/registration).

Finally, if you’d like to stay up to date with everything happening in Project Catalyst, bookmark the past issues of the weekly newsletter. Check [it out here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

  
![](https://ucarecdn.com/dfdb70dd-801c-4266-b29d-51abbece8260/)

### コアテクノロジー

**ネットワーキング**チームはouroboros-networkコンポーネントに取り組みました。ouroboros-consensusを独自のリポジトリに移動した後、ouroboros-networkをGHC v.9.4およびv.9.6に対応させ、cardano-clientライブラリーをouroboros-consensus-diffusionから独立させました。ｃardano-node-8.0向けのネットワークパッケージのリリース準備も行いました。これらの更新により、ネットワーク全体のパフォーマンスと安定性が向上することが期待されます。

**コンセンサス**チームは、この2週間でGenesisの設計を大きく前進させました。BlockFetchロジックがGenesisの変更を必要としない可能性があることを発見しましたが、これはまだ検証が必要です。DoS緩和ハンドブックの作成に着手し、Genesisの設計の指針となるコンポーネントの概念図を更新しました。IOGの研究者と協力して、「忍耐力の限界」攻撃ベクトルに焦点を当てました。ノードのCPU負荷をソケットに対する応答性から切り離す設計をスケッチし、BlockFetch決定ロジックのパフォーマンスへの影響を減らすためにネットワークチームと協力しました。

コンセンサスコードを[新しいリポジトリ](https://github.com/input-output-hk/ouroboros-consensus)に移行して

ouroboros-networkリポジトリから分離させ、consensus v.0.6をリリースしました。メモリープールの公平性向上をメインブランチにマージし、ドキュメントの改良に取り組みました。詳細は、[こちらの更新情報](https://input-output-hk.github.io/cardano-updates/2023-05-03-consensus)をご覧ください。

**DB Sync**チームは、UTXOクエリ速度を向上させるためにスキーマの変更に取り組み、効果を確認するためにベンチマークを行いました。報酬パフォーマンスを最適化し、キャッシュを導入してリソース使用量を削減することで、[エポック計算の改良](https://github.com/input-output-hk/cardano-db-sync/pull/1380)に取り組みました。UTXO-HD統合に関連するリスクを評価し、tx\_outをアドレステーブルに分割し、tx\_outテーブルから消費されたエントリーをプルーニングするという2つの機能要求に取り組みました。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、脆弱性のあるライブラリーを更新し、最新のｃardano-wallet v.2023-04-14とｃardano-node v.1.35.4を統合しました。

**Lace**デスクトップの開発作業は進行中です。ユーザーエクスペリエンスの向上に焦点を当て、設定ページの強化、DAppレンダリングの埋め込み、サイドバーの更新に取り組みました。DApp自動接続機能に新しい機能も追加しました。

**Adrestia**チームは、Laceのリリース後にコミュニティから寄せられたフィードバックに取り組み、現在cardano-js-sdkとLaceの最初の大きな更新を準備しています。

トランザクション残高ライブラリーの抽出とマルチシグウォレットの委任機能の仕上げは順調に進んでいます。

### スマートコントラクト

**Plutus**ツールチームは、Marconiサイドチェーンアーキテクチャーの文書化に着手し、アドレスUTXOインデクサーを使用したパフォーマンス低下のプロファイリングに取り組みました。インデックス化されたEpoch-StakePoolDelegationDistributionの正しさを検証し、現在の設計で発生した問題を考慮してレジューム機能を再設計しました。Plutus Coreチームは、sums-of-productsを提供する取り組みを続け、本実装でplutus-irとplutus-txの部分をマージしました。Plutus Txコンパイラーにcase-of-known-constructorの最適化を追加しました。

**Marlowe**チームは、基底理論を追加することで[マークル化の形式化](https://github.com/input-output-hk/marlowe/pull/171)を行い、[Isabelleのセマンティック理論](https://github.com/input-output-hk/marlowe/pull/182)を文芸的プログラミングに再編成し、保証の章を仕様にリファクタリングしました。[Isabelleのバージョン](https://github.com/input-output-hk/marlowe/pull/185)を2022リリースに更新し、[Swap例](https://github.com/input-output-hk/marlowe/pull/166)にシナリオを追加し、ランタイムテストの[取り消しサポート](https://github.com/input-output-hk/marlowe-cardano/pull/564)を追加しました。

### Basho( スケーリング)

**Hydra**チームは、4月にレビュー会議を持ち、[4月のレポート](https://hydra.family/head-protocol/monthly/2023-04)を公開しました。このレポートには、毎月の進捗状況のまとめと、さらなる開発目標が掲載されています。リポジトリと[ウェブサイト](https://hydra.family/head-protocol/unstable/core-concepts/specification/)両方の仕様を更新し、一部のユーザーの問題を解決し、TUIピアリストを修正しました。依存関係を一部更新し、オークションのユースケースをテーマにしたTwitterスペースをホストし、テストを実行してソリューションを実装することでロールバックのバグに対処しました。 

**Mithril**チームは、アグリゲーターの新しい認証サービスの実装を完了しました。完全に不変なCardanoファイルスナップショットとMithrilステーク分布の認証を提供するために定義されたインターフェイスの実装も完了しました。アグリゲーターのマルチ署名者のリファクタリングも完了しました。

署名者登録で一部の署名者の署名フェーズ中のギャップの原因となっていたバグを修正し、MithrilテストネットとDevNetで使用されているCardanoノードをv.1.35.7にアップグレードしました。

### VOLTAIRE

今週、CIP-1694をめぐる会話はグローバルに展開しようとしています。[CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694)で説明されているCardanoのオンチェーンガバナンス提案に関するワークショップを開催するための資金調達の申請は、日本時間火曜日に締め切られました。世界中から、仮想会議と対面会議を合わせて75を超える応募がありました。まもなく、すべてのワークショップと参加方法の詳細が記載された最新情報がEssential Cardanoでリリースされます。

**MBO（Member-Based Organization）**から、MBOがCardanoエコシステム全体でオーケストレーションする内容を詳細に記した最新進捗情報が発表されました。MBOは、ブロックチェーンの将来の開発拠点となり、コミュニティガバナンスの集約ポイントとなります。MBOは5つの柱に焦点を当てて、以下を行います。  

1.  開発者に焦点を当てたカンファレンス、ハッカソン、イベントを開催することで、コミュニティがエコシステムを発展させられるように支援する
    
2.  CIP-1694によって実施されたCardanoのコミュニティ主導のガバナンスを管理、支持する
    
3.  コミュニティが承認したCardano技術ロードマップの配布を調整する
    
4.  システムの安定性を確保するために、Cardanoの定期メンテナンスを調整する
    
5.  Cardanoのコアテクノロジーのオープンソース開発を調整する
    

詳細情報および参加への関心を示すには、[こちら](https://cardanombo.org)をご覧ください。

CATALYST

**Project Catalyst**では、Catalystタウンホールで多くのチームによるプロジェクトの発表がコミュニティに向け行われました。こ[こ](https://www.youtube.com/live/zTmmbkbSoMs?feature=share)で、メインタウンホールからセグメントを再視聴できます。Catalystコミュニティは毎週タウンホールを開催しています。来週のタウンホールへの登録がまだの場合は、[こちらから登録](http://bit.ly/catalyst-townhall)してください。

Project Catalystの最新情報を入手するには、週刊ニュースレターの過去の号をブックマークに登録してください。詳しくは、[こちら](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)をご覧ください。
