---
title: Weekly development report as of 2023-09-08
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/1942752b-d052-4a28-951c-fc8c2e375f8a/
image_text: Weekly development report as of 2023-09-08
---

### CORE TECHNOLOGY

The **networking** team continued working on [bootstrapping peers](https://github.com/input-output-hk/ouroboros-network/pull/4661), and refactored [networking test suites](https://github.com/input-output-hk/ouroboros-network/issues/4653). In particular, they split those into `io-tests`, which require to be run natively on all platforms (these tests mostly contain tests that require IO system calls), and `sim-tests`, which are platform independent. They also started rebasing `typed-protocols` refactoring branches, fixed some minor issues regarding peer sharing, and made progress on P2P adoption. For more details, see this [technical report](https://input-output-hk.github.io/cardano-updates/2023-09-01-network/).

The **consensus** team achieved a significant milestone by successfully conducting the first system-level benchmarks for the UTXO-HD implementation. However, they encountered an important regression in block forging performance, which requires attention before the UTXO-HD release. Additionally, the team revisited the implementation of query processing logic, necessary to address the performance regression identified in the query-by-address command. Preliminary performance results indicate that this query's performance aligns with the Cardano baseline version but needs further confirmation.

Regarding Genesis development, the team presented the grinding-aware safety argument to IOG researchers concerning the proposed historical Cardano Genesis windows.

Finally, Cardano node [v.8.3.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.3.0-pre) was released on September 5, 2023.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team continued working on CIP-95 functionality in SDK and Lace, setting up the collateral, focusing on enhancements, and SanchoNet functionality review. They also kept working on the implementation of Trezor support, finalized the ‘signing transaction’ flow, and worked on implementing fiat conversion and past transaction rendering in the ‘Activity’ tab.

### SMART CONTRACTS

The **Plutus** tools team has been focused on rewriting the Marconi EpochState indexers using the new simplified API, implementing and testing the new indexer resuming strategy for this updated API, and ensuring compatibility by updating the `cardano-api` version in `plutus-apps`.

The Plutus Core team introduced a significant enhancement in Plutus Tx, enabling the use of the Haskell language extension `Strict` to make bindings and patterns in Plutus Tx programs strict by default. This adjustment offers several advantages, which you can explore further in the [Plutus Tx documentation](https://plutus.readthedocs.io/en/latest/extensions-flags-pragmas.html).

The **Marlowe** team tested the withdrawal widget on mainnet, created a [starter kit lesson](https://github.com/input-output-hk/marlowe-starter-kit/pull/39) on using transaction safety analysis, added an [example](https://github.com/input-output-hk/marlowe-starter-kit/pull/40) of using Marlowe Runtime with a CIP-30 wallet, and added [a set of REST APIs](https://github.com/input-output-hk/marlowe-cardano/pull/697) for payouts, with support for filtering by contract ID or by role token. The team also implemented support for [withdrawals](https://github.com/input-output-hk/marlowe-cardano/pull/694) by payouts instead of role token, reviewed and tested the Marlowe starter kit documentation, and added support to [ts-sdk](https://github.com/input-output-hk/marlowe-ts-sdk/pull/22) for connecting to the token metadata registry.

### BASHO (SCALING)

This week, the **Hydra** team primarily focused on implementing changes required in the network layer and produced the initial draft document outlining the necessary design adjustments. Additionally, they enhanced the user experience by enabling commits using inline datums, engaged in discussions with researchers about off-chain governance, and made improvements to internal model tests.

This week, the **Mithril** team released a new distribution `2335.0`, which includes some optimizations and bug fixes. They also completed the implementation of the [zstandard](https://github.com/input-output-hk/mithril/issues/876) compression for snapshot archives and kept working on adding the [Cardano node version](https://github.com/input-output-hk/mithril/issues/948) to the snapshot artifacts. The team also completed the implementation of the second phase of the stress [test tool](https://github.com/input-output-hk/mithril/issues/1155) for benchmarking the aggregator and started identifying related bottlenecks. They made good progress in implementing [Cloudflare protection](https://github.com/input-output-hk/mithril/issues/986) for the aggregator infrastructure.

Finally, they started working on the nodes’ [error refactoring](https://github.com/input-output-hk/mithril/issues/798) and fixed a bug related to [snapshot restoration](https://github.com/input-output-hk/mithril/issues/1160) in the client.

### VOLTAIRE

This week in **Voltaire**, SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions completes the second phase of its roadmap. This phase brings online DRep registration, delegation, and voting on the SanchoNet testnet. The DRep plays a critical role in governance within CIP-1694. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org), a key institution for the ecosystem to shape and drive the future development of Cardano, celebrated its first town hall this week. Members received the latest update on the committees being formed and learned more about SanchoNet with a live demonstration. To attend next month’s town hall and get the latest news first, [join Intersect today](http://intersectmbo.org/). 

### CATALYST

This week in Project Catalyst, the spotlight is on Fund10 voting, which exceeded 155,000 individual votes as of this Wednesday. During the town hall, the team delved into the outcomes of the Fund9 funded projects' Milestone Module rollout and addressed new updates concerning the auditability of the Catalyst system. If you missed it, you can catch the recording of the Catalyst town hall [here](https://www.youtube.com/watch?v=zLbiBRZzxKc). Make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the technical side of Catalyst last week, the team:

*   Finalized the snapshot and extracted final metrics, revealing a +17% increase in registered ada compared to Fund9, totaling 4.48bn
    
*   Prepared and completed all Fund10 data
    
*   Implemented an initial version of the reviews importer to download reviews from IdeaScale
    
*   Addressed issues with the new post-Fund10 IdeaScale importer by fixing tests
    
*   Enhanced the dashboard by adding new events, editing existing events, and deleting events.
    

Finally, if you're looking to stay updated on everything happening in Project Catalyst, consider joining the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel.

### EDUCATION

This week, the **Education** team launched their internal Plutus training course and worked on the registrations and schedule for the _Cardano Days_ event at the University of Malta on September 19-20. Additionally, they are continuing to deliver the Haskell course with the African Blockchain Center.

  
![](https://ucarecdn.com/abf9fdef-fac4-4d7c-a609-e39d63f3d2bf/)

### コアテクノロジー

**ネットワーキング**チームは、[ピアのブートストラップ](https://github.com/input-output-hk/ouroboros-network/pull/4661)への取り組みを続け、[ネットワーキングテストスイート](https://github.com/input-output-hk/ouroboros-network/issues/4653)をリファクタリングしました。具体的には、これをプラットフォームでネイティブに実行する必要があるio-tests（IOシステムコールを必要とするテストがほぼ含まれる）と、プラットフォームに依存しないsim-testsに分けました。typed-protocolsリファクタリングブランチのリベースを開始し、ピア共有に関する軽微な問題を修正し、P2Pの普及を進めました。詳細は[技術レポート](https://input-output-hk.github.io/cardano-updates/2023-09-01-network/)をご覧ください。

**コンセンサス**チームは、UTXO-HD実装のための最初のシステムレベルのベンチマークを実施することに成功し、重要なマイルストンを達成しました。しかし、ブロック生成のパフォーマンスに重要な低下がみられ、UTXO-HDのリリース前に対応が必要となります。query-by-addressコマンドで特定されたパフォーマンスの低下に対処するために必要な、クエリ処理ロジックの実装を再検討しました。予備的なパフォーマンス結果は、このクエリのパフォーマンスがCardanoベースラインバージョンと一致していることを示していますが、さらなる確認が必要です。

Genesisの開発に関しては、提案されたCardano Genesisのウィンドウ履歴に関する研削を意識した安全性の議論をIOG研究者に提示しました。

2023年9月5日にCardanoノード[v.8.3.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.3.0-pre)をリリースしました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace** チームは、引き続きSDKとLaceのCIP-95機能、担保設定、機能強化、SanchoNet機能のレビューに取り組みました。Trezorサポートの実装への取り組みを続け、「署名トランザクション」フローを確定し、「アクティビティ」タブでフィアット換算と過去のトランザクションレンダリングの実装に取り組みました。

### スマートコントラクト

**Plutus**ツールチームは、簡素化されたAPIを使用したMarconi EpochStateインデクサーの書き直し、更新したこのAPIのための新インデクサーの再開戦略の実装とテスト、plutus-appsのcardano-apiのバージョン更新によって互換性を確保する作業を続けました。

Plutus CoreチームはPlutus Txの大幅な機能強化を導入し、Haskell言語拡張Strictを使用してPlutus Txプログラムのバインディングとパターンをデフォルトで厳密にすることを可能にしました。この調整にはいくつかの利点があります。詳細は[Plutus Txのドキュメント](https://plutus.readthedocs.io/en/latest/extensions-flags-pragmas.html)を参照してください。

**Marlowe**チームは、メインネットで引き出しウィジェットをテストし、トランザクションの安全性分析の使用に関する[スターターキットレッスン](https://github.com/input-output-hk/marlowe-starter-kit/pull/39)を作成し、CIP-30ウォレットでMarlowe Runtimeを使用する[例](https://github.com/input-output-hk/marlowe-starter-kit/pull/40)を追加し、支払いに[REST APIのセット](https://github.com/input-output-hk/marlowe-cardano/pull/697)を追加しました。ロールトークンの代わりに支払いによる[引き出し](https://github.com/input-output-hk/marlowe-cardano/pull/694)のサポートを実装し、Marloweスターターキットのドキュメントをレビューおよびテストし、トークンメタデータレジストリーへの接続のための[ts-sdk](https://github.com/input-output-hk/marlowe-ts-sdk/pull/22)のサポートを追加しました。

### Basho( スケーリング)

**Hydra**チームは主にネットワーク層に必要な変更を実装することに焦点を当て、必要な設計調整の概要を記載した最初のドラフト文書を作成しました。インラインデータムを用いたコミットを可能にすることでユーザーエクスペリエンスを向上させ、オフチェーンガバナンスについて研究者と議論し、内部モデルテストを改良しました。

**Mithril**チームは、新ディストリビューション[2335.0](https://github.com/input-output-hk/mithril/releases/tag/2335.0)をリリースしました。これには、いくつかの最適化とバグの修正が含まれます。スナップショットアーカイブ用の[zstandard](https://github.com/input-output-hk/mithril/issues/876)圧縮の実装も完了し、スナップショットアーティファクトに[Cardanoノードバージョン](https://github.com/input-output-hk/mithril/issues/948)を追加する作業を続けました。アグリゲーターのベンチマークを行うためのストレス[テストツール](https://github.com/input-output-hk/mithril/issues/1155)の実装第2フェーズを完了し、関連するボトルネックの特定に着手しました。アグリゲーターインフラのCloudflare保護の実装を大きく進展させました。

ノードの[エラーリファクタリング](https://github.com/input-output-hk/mithril/issues/798)の作業を開始し、クライアントでの[スナップショット復元](https://github.com/input-output-hk/mithril/issues/1160)に関連するバグを修正しました。

### VOLTAIRE

Voltaireに関しては、CIP-1694のオンチェーンガバナンスアクションのための進化型技術テストベッドであるSanchoNetが、ロードマップの第2段階を完了します。このフェーズでは、SanchoNetテストネットでDRepのオンライン登録、委任、および投票が行われます。DRepは、CIP-1694のガバナンスにおいて重要な役割を果たします。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。

Cardanoの将来の開発を形作り、推進するエコシステムのための重要な機関である[Intersect](https://intersectmbo.org)は、最初のタウンホールを開催しました。現在結成中である委員会の最新情報を発表したほか、SanchoNetの詳細をライブデモンストレーションで紹介しました。来月のタウンホールに出席して最新のニュースを最初に入手するには、[今すぐIntersectに参加して](http://intersectmbo.org/)ください。 

### CATALYST

Project CatalystではFund10の投票を注視しています。投票者数は、水曜日の時点で155,000人を超えました。タウンホールでは、Fund9で資金提供を受けたプロジェクトのマイルストンモジュールロールアウトの結果を掘り下げ、Catalystシステムの監査可能性に関する新しい更新情報に触れました。見逃した場合は、[ここ](https://www.youtube.com/watch?v=zLbiBRZzxKc)でCatalystタウンホールの録画を視聴できます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をお忘れなく。

Catalystの技術的更新情報は以下の通りです。

*   スナップショットを確定し、最終メトリクスを抽出した結果、Fund9と比較して登録ADAが17%増加し、合計44億8000万に
    
*   全Fund10データを準備、完了
    
*   IdeaScaleからレビューをダウンロードするためのレビューインポーターの初期バージョンを実装
    
*   テストの修正により、新しいポストFund10 IdeaScaleインポーターの問題を解決
    
*   新しいイベントの追加、既存のイベントの編集、イベントの削除によってダッシュボードを強化
    

Project Catalystの最新情報を入手するには、[Catalyst Telegram](https://t.me/cardanocatalyst)案内チャネルへの参加を検討してください。

### 教育

**教育**チームは社内のPlutusトレーニングコースを開始し、9月19、20日にマルタ大学で開催されるCardano Daysイベントの登録とスケジュールに取り組みました。African Blockchain Centerとの協力の下、Haskellコースの提供も続けています。
