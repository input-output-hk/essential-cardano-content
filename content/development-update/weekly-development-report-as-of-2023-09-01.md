---
title: Weekly development report as of 2023-09-01
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/fc543b22-664a-4e2e-bd51-2653f5c168a9/
image_text: Weekly development report as of 2023-09-01
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team concluded benchmarking activities for node v.8.2.1 and worked on the creation of benchmarking setups for GHC9.6 and UTXO-HD. They also focused on infrastructure enhancements, which led to a reduction in the memory footprint of the analysis pipeline. The team merged a new batch of optimizations into the tracing system and continued working on namespace consistency guarantees. 

Finally, the team worked on the Nomad backend, conducting and analyzing various validation runs on the newly deployed hardware cluster.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team continued working on Metadex integration, the filtering of user-owned and trading tokens, and some bug fixing. Additionally, the team worked on testing native token minting and the creation of custom liquidity pools for decentralized exchanges, created an end-to-end test for swapping native tokens, and performed some load/performance testing. 

The team also fixed hardware wallet transactions with the DApp connector, finalized setting the collateral in a round-trip action, extended CIP-30 to clear a path for enabling with additional extensions, and added more automation tests for Lace.

### SMART CONTRACTS

The **Plutus** tools team continued rewriting the Marconi indexers, implementing and testing the new indexer, resuming strategy for the new API, and updating the `cardano-api` version in `plutus-apps`.

The Plutus Core team published `plutus-ledger-api-1.11.0.0`, which includes the `ScriptContext` data type for Plutus v3 and is subject to minor revisions in future releases.

The **Marlowe** team worked on their presentation for the CryptoPall workshop. They also added a [survey contract exercise](https://github.com/input-output-hk/marlowe-starter-kit/pull/34) to the lessons folder, a [script to generate keys](https://github.com/input-output-hk/marlowe-starter-kit/pull/30) from the mnemonic phrase, and a [mechanism for acquiring token metadata](https://github.com/input-output-hk/marlowe-ts-sdk/pull/19).

In addition to this, they resolved [setup issues](https://github.com/input-output-hk/marlowe-starter-kit/commit/d9d9a4b) in Demeter Run with version 0.0.4 and the new scripts and environment. The team also focused on the withdrawal widget, designed to facilitate the withdrawal of payments made to Roles in Marlowe contracts while accommodating transaction limits. This widget is intended for reuse within other DApps, providing an easy and flexible solution for DApp users to conveniently perform withdrawals. The team also added a [draft README.md](https://github.com/input-output-hk/marlowe-ts-sdk/pull/18/commits/9b5ab855b22ab7c3cf5fdfa6103c5c5bbe849f8b) to the marlowe-ts-sdk repo, and wrote specs and user flows for the withdrawal widget. 

Finally, they implemented `sprintf` for tokens and worked on changing current workspace configurations.

### BASHO (SCALING)

This week, the **Hydra** team conducted the [monthly review meeting for August](https://hydra.family/head-protocol/monthly/2023-08/), which continuously ensures transparent communication and project evaluation.

In terms of community engagement, the Hydra team held a Hydra master class at the RareEvo workshop as an educational initiative for the community. Additionally, the team updated the Hydra demo and the tutorial to include Mithril and the latest release changes. They also focused on exploring the Hydra network resilience to improve hydra-node availability for improved user experience.

This week, the **Mithril** team worked on the implementation of the second phase of the [stress test tool](https://github.com/input-output-hk/mithril/issues/1155) for benchmarking the aggregator. They also made improvements to the client, implemented the [simultaneous download and extraction](https://github.com/input-output-hk/mithril/issues/1115) of the snapshot archive, and added [machine readable progress information](https://github.com/input-output-hk/mithril/issues/1095) to it. Additionally, they started implementing a proof of concept on using the [zstandard](https://github.com/input-output-hk/mithril/issues/876) compression for snapshot archives.

Finally, the team strengthened the [verification](https://github.com/input-output-hk/mithril/issues/1160) of the produced snapshot archives, and worked on adding the [Cardano node version](https://github.com/input-output-hk/mithril/issues/948) used to create the snapshot archive to its metadata. 

### VOLTAIRE

This week in **Voltaire**, SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions, completes the second phase of its roadmap. This phase brings online DRep registration, delegation, and voting. The DRep plays a critical role in governance within CIP-1694. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org), a key institution for the ecosystem to shape and drive the future development of Cardano, celebrated its first town hall this week. Members received the latest update on the committees being formed and learned more about SanchoNet with a live demonstration. To attend next month’s town hall and get the latest news first, [join Intersect today](http://intersectmbo.org/).

### CATALYST

This week in **Project Catalyst,** the Catalyst team held a Fund10 Twitter space on Tuesday and invited a very special guest. Charles Hoskinson attended the Twitter Space with the team to discuss the Catalyst roadmap and where the team sees Catalyst moving forward. You can check out the AMA recording [here](https://twitter.com/i/spaces/1mnxeRgElLqKX). Additionally, at the weekly town hall, Mike McNulty and Steven Johnson previewed some of the new features to the voting app for Fund10, you can catch the recording of that here. Make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the technical side of Catalyst last week, the team:

*   Updated supported wallets in GitBook 
    
*   Completed integration of snapshot data with auto deployment/orchestration framework for continuous voting events
    
*   Built the community version of ‘check my voting power’ against testnet APIs
    
*   Optimized snapshot service to eliminate manual downstream work (eg, remove delegation tx, take the latest registration as valid) and cleaned up the testing framework
    
*   Defined work required to automate reviews importer and calculation, including integration with moderation module - aiming to have importer process mimic users posting reviews directly to the backend from any interface
    
*   Created tutorial for using interactive API dashboard for testnet data service
    
*   Enabled the app to point to [Project Catalyst - Innovation grants to build on Cardano](http://projectcatalyst.io/) for proposal details
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, the **Education** team worked with the Marlowe team on defining learning journeys for users. They are also planning for the next _Cardano Days_ event in Malta later this month, and continued work on Mastering Cardano.

![](https://ucarecdn.com/b6b0494e-dbd5-44ce-b368-66b3766a8417/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**パフォーマンス＆トレース**チームは、ノードv.8.2.1のベンチマークアクティビティを終了し、GHC9.6とUTXO-HDのベンチマーク設定の作成に取り組みました。インフラ強化にも注力し、分析パイプラインのメモリーフットプリントの削減を実現しました。新しい最適化のバッチをトレースシステムにマージし、引き続き名前空間の一貫性の保証に取り組みました。 

Nomadバックエンドに取り組み、新しく導入されたハードウェアクラスターでさまざまな検証ランを実行および分析しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、Metadexの統合、ユーザー所有トークンや取引トークンのフィルタリング、バグ修正に取り組みました。ネイティブトークンのミントのテストと分散型取引所用のカスタム流動性プールの作成に取り組み、ネイティブトークンをスワップするエンドツーエンドテストを作成し、負荷/パフォーマンステストを実行しました。 

DAppコネクターを使用したハードウェアウォレットトランザクションの修復、ラウンドトリップアクションでの担保設定の仕上げ、追加拡張を有効にするためのパスをクリアするためのCIP-30の拡張、および自動化テストの追加にも取り組みました。

### スマートコントラクト

**Plutus**ツールチームは、Marconiインデクサーの書き直し、新APIのための新インデクサーの再開戦略の実装とテスト、plutus-appsのcardano-apiのバージョン更新作業を続けました。

Plutus Coreチームはplutus-ledger-api-1.11.0.0を公開しました。これには、Plutus v3のScriptContextデータ型が含まれていますが、今後のリリースでマイナーな改訂が行われる可能性があります。

**Marlowe**チームは、CryptoPolワークショップのプレゼンテーションに取り組みました。[調査コントラクト](https://github.com/input-output-hk/marlowe-starter-kit/pull/34)の演習をレッスンフォルダーに追加したほか、ニーモニックフレーズから[鍵を生成するスクリプト](https://github.com/input-output-hk/marlowe-starter-kit/pull/30)、[トークンメタデータを取得するメカニズム](https://github.com/input-output-hk/marlowe-ts-sdk/pull/19)を追加しました。

Demeter Runバージョン0.0.4で新しいスクリプトおよび環境とのセットアップの問題を解決しました。引き出しウィジェットにも焦点を当てました。これは、Marloweコントラクトでロールへの支払いの引き出しを容易にしつつトランザクション制限にも対応できるよう設計したものです。このウィジェットは、他のDAppでの再利用を念頭に置き、DAppユーザーが便利に引き出しを行えるように、簡単でフレキシブルなソリューションを提供しています。

marlowe-ts-sdkリポジトリに[README.mdのドラフト](https://github.com/input-output-hk/marlowe-ts-sdk/pull/18/commits/9b5ab855b22ab7c3cf5fdfa6103c5c5bbe849f8b)を追加し、引き出しウィジェットの仕様とユーザーフローを作成しました。 

トークンにprintfを実装し、現在のワークスペース設定の変更に取り組みました。

### Basho( スケーリング)

**Hydra**チームは、[8月の月例レビュー会議](https://hydra.family/head-protocol/monthly/2023-08/)を開催しました。これは、コミュニケーションの透明性を高めプロジェクトを正しく評価するための継続的な取り組みです。

コミュニティエンゲージメントに関しては、コミュニティのための教育イニシアチブとしてRareEvoワークショップでHydraマスタークラスを開催しました。Hydraデモとチュートリアルを更新して、Mithrilと最新リリースによる変更を追加しました。Hydraノードの可用性を改善してユーザーエクスペリエンスを向上させるために、Hydraネットワークの回復性調査にも焦点を当てました。

**Mithril**チームは、アグリゲーターのベンチマーク用[ストレステストツール](https://github.com/input-output-hk/mithril/issues/1155)実装の第2フェーズに取り組みました。クライアントも改良しました。スナップショットアーカイブの[同時ダウンロードと抽出](https://github.com/input-output-hk/mithril/issues/1115)を実装し、そこに[マシンで読み取り可能な進行状況情報](https://github.com/input-output-hk/mithril/issues/1095)を追加しました。スナップショットアーカイブに[zstandard](https://github.com/input-output-hk/mithril/issues/876)圧縮を使用することについて、概念実証の実装を開始しました。

作成したスナップショットアーカイブの[検証](https://github.com/input-output-hk/mithril/issues/1160)を強化し、スナップショットアーカイブの作成に使用された[Cardanoノードバージョン](https://github.com/input-output-hk/mithril/issues/948)をメタデータに追加する作業を行いました。 

### VOLTAIRE

Voltaireに関しては、CIP-1694のオンチェーンガバナンスアクションのための進化型技術テストベッドであるSanchoNetが、ロードマップの第2段階を完了します。このフェーズでは、DRepのオンライン登録、委任、および投票が行われます。DRepは、CIP-1694のガバナンスにおいて重要な役割を果たします。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。

Cardanoの将来の開発を形作り、推進するエコシステムのための重要な機関である[Intersect](https://intersectmbo.org)は、最初のタウンホールを開催しました。現在結成中である委員会の最新情報を発表したほか、SanchoNetの詳細をライブデモンストレーションで紹介しました。来月のタウンホールに出席して最新のニュースを最初に入手するには、[今すぐIntersectに参加して](http://intersectmbo.org/)ください。

### CATALYST

**Project Catalyst**では**、** Catalystチームが火曜日に特別ゲストを招いてFund10 Twitterスペースを開催しました。参加したのはCharles Hoskinsonで、Catalystのロードマップと、Catalystが今後どのように進むのかについてチームと話し合いました。AMAの録音は[ここ](https://twitter.com/i/spaces/1mnxeRgElLqKX)でチェックできます。ウィークリータウンホールでは、Mike McNultyとSteven Johnsonが、Fund10の投票アプリの新機能をプレビューしました。録画はここで視聴できます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をお忘れなく。

Catalystの技術的更新情報は以下の通りです。

*   GitBookでサポートしているウォレットを更新 
    
*   継続的投票イベントのためのスナップショットデータと自動デプロイ/オーケストレーションフレームワークの統合を完了
    
*   テストネットAPIに対して、「Check my voting power（議決権の確認）」のコミュニティバージョンを構築
    
*   スナップショットサービスを最適化して、手動によるダウンストリーム作業（委任txの削除、最新の登録を有効にするなど）を排除し、テストフレームワークをクリーンアップ
    
*   レビューのインポーターと計算を自動化するために必要な定義済みの作業（モデレーションモジュールとの統合を含む）- ユーザーが任意のインターフェイスからバックエンドに直接レビューを投稿するのをインポータープロセスが真似することを意図
    
*   テストネットデータサービス用インタラクティブAPIダッシュボードを使用するためのチュートリアルを作成
    
*   アプリで、詳細の参照先を[Project Catalyst - Innovation grants to build on Cardano](http://projectcatalyst.io/)に指定
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームはMarloweチームと協力してユーザーの学習過程を定義しました。今月後半にマルタで開催されるCardano Daysイベントを企画している他、Mastering Cardanoの作業も進めました。
