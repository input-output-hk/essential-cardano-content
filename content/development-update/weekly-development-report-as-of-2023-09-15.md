---
title: Weekly development report as of 2023-09-15
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/b4a20edd-f48a-428e-871d-900960834760/
image_text: Weekly development report as of 2023-09-15
---

### CORE TECHNOLOGY

This week in core technology, the **performance and tracing team** performed and analyzed feature benchmarks for UTXO-HD and the current P2P stack, made various improvements to the analysis pipeline, and implemented tracing namespace consistency checks along with a curated configuration for benchmarking.

Work is ongoing on node, networking, and consensus improvements. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team released version 1.5, which introduces a multi-delegation feature enabling users to delegate ada to up to five stake pools. This version also adds more Ledger support for Ledger hardware wallets to interact with DApps and smart contracts. Check out this [blog post](https://www.lace.io/blog/lace-1-5-release?utm_source=twitter&utm_medium=social&utm_campaign=new%20release&utm_content=blog-post) for more details.

Work is ongoing on test coverage for Trezor support in Lace, collateral setup, CIP-95 features implementation, and release enhancements. 

### SMART CONTRACTS

This week, the **Plutus** tools team has been focused on rewriting the Marconi EpochState indexers using the new simplified API, implementing and testing the new indexer resuming strategy for this updated API, and ensuring compatibility by updating the `cardano-api` version in `plutus-apps`.

The Plutus Core team merged a change that makes it much easier to use Plutus data to encode custom data types in Plutus Tx. This can significantly reduce the costs of many scripts written in Plutus Tx. It will be available in the upcoming release, and the team will update the documentation with usage instructions.

The **Marlowe** team worked on setting up [unit testing](https://github.com/input-output-hk/marlowe-ts-sdk/pull/24/files) for the wallet package in `ts-sdk`, added a method to install [wallet extensions](https://github.com/input-output-hk/marlowe-ts-sdk/commit/516dc9d) to `ts-sdk`, and also enhanced the [formatting of pre-commits](https://github.com/input-output-hk/marlowe-ts-sdk/commit/66fe2ba). Additionally, they worked on the [print list of commands](https://github.com/input-output-hk/marlowe-cardano/pull/700) when the Marlowe CLI is invoked without a command, improved [REST API error reporting](https://github.com/input-output-hk/marlowe-cardano/pull/698), and added the dynamic [listing](https://github.com/input-output-hk/marlowe-ts-sdk/pull/25/commits/516dc9d8d5183d1ce3c79ea7be10ccd72be5ad38#diff-5b5366ab42f1604dd09519400d2f0c6e3c77519acd8961abcb7e875b223f8d95R47-R57) of installed wallet extensions.

### BASHO (SCALING)

This week, the **Hydra** team improved the commit process with support for [inline datums](https://github.com/input-output-hk/hydra/issues/1043) and simplified the chain layer by refactoring the [chain state persistency](https://github.com/input-output-hk/hydra/pull/1049). They also updated the [Hydra tutorial](https://github.com/input-output-hk/hydra/issues/997) by adding CI workflow checking to keep it up-to-date. The team engaged in discussions with researchers about incremental commits and decommits, and drafted an architectural decision record for a resource-based API. Finally, they explored simpler solutions for the upcoming network resilience feature.

This week, the **Mithril** team kept working on the [refactoring and standardization](https://github.com/input-output-hk/mithril/issues/798) of the errors in the Mithril nodes. They also worked on a refactoring of the terraform deployments workflows in GitHub actions, and the implementation of snapshot compression parameters in [deployments](https://github.com/input-output-hk/mithril/issues/1200). Additionally, they continued working on the implementation of [Cloudflare](https://github.com/input-output-hk/mithril/issues/1207) protection for the aggregator infrastructure.

Finally, they started identifying and investigating the aggregator’s [performance bottlenecks](https://github.com/input-output-hk/mithril/issues/1207).

### VOLTAIRE

This week in **Voltaire**, [Intersect](https://intersectmbo.org) is a key institution for the ecosystem to shape and drive the future development of Cardano. Members receive the latest update at the monthly town hall and a bi-weekly newsletter. [Join Intersect today](http://intersectmbo.org/) to attend the next town hall next week.  

SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions, continues progress on the features roadmap. Blockfrost, a Cardano API provider, now provides access to SanchoNet as well. It is an exciting time to test out governance actions and roles within the MVG framework in CIP-1694. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord). 

### CATALYST

This week in **Project Catalyst,** Fund10 voting came to a close. The Catalyst team took part in a Twitter space along with the other fund operation proposers to discuss their proposals. You can listen to the recording [here](https://twitter.com/unpopularel/status/1701612053012922497?s=46&t=dwwd3s971mANXwcNrW)knQ). During the town hall this week, other great projects presented the work they have done so far and the team gave an update to the community on the status of voting. In case you missed it, you can check out the recording of the Catalyst town hall [here](https://www.youtube.com/watch?v=M68LnM7FLps). If you haven’t already, make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the technical side of Catalyst last week, the team:

*   Worked on community reproduction and analysis of the Fund10 snapshot
    
*   Made progress reviewing importer automation, including allocations
    
*   Continued testing on new IdeaScale importer
    
*   Voting is live; the volume is similar to the previous fund so far
    
*   Live vote count being displayed on the community site, using the Catalyst archiver
    
*   Worked on automation for building block0 given the snapshot data
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram announcement channel](https://t.me/cardanocatalyst). 

### EDUCATION

This week, the **Education** team is preparing for the _Cardano Days_ event at the University of Malta next week. They are also continuing to deliver the virtual Haskell course with ABC.

  
![](https://ucarecdn.com/ee0078c3-3d38-4ad0-a6e4-d3ac22e3c632/)

### コアテクノロジー

**パフォーマンス＆トレースチーム**は、UTXO-HDと現在のP2Pスタックの機能ベンチマークを実施および分析し、分析パイプラインにさまざまな改良を加え、トレースの名前空間整合性チェックを、ベンチマーク用にキュレーションした設定とともに実装しました。

ノード、ネットワーキング、コンセンサスの改良作業は進行中です。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームはバージョン1.5をリリースしました。本バージョンでは、ユーザーがADAを最大5つのステークプールに委任できるマルチ委任機能が導入されたほか、LedgerハードウェアウォレットでDAppやスマートコントラクトとインタラクションするためのLedgerサポートも追加されています。詳しくはこちらの[ブログ記事](https://www.lace.io/blog/lace-1-5-release?utm_source=twitter&utm_medium=social&utm_campaign=new%20release&utm_content=blog-post)をご覧ください。

LaceのTrezorサポートのテストカバレッジ、担保セットアップ、CIP-95機能の実装、リリース強化に関する作業も進行中です。 

### スマートコントラクト

**Plutus**ツールチームは、簡素化されたAPIを使用したMarconi EpochStateインデクサーの書き直し、更新したこのAPIのための新インデクサーの再開戦略の実装とテスト、plutus-appsのcardano-apiのバージョン更新によって互換性を確保する作業を続けました。

Plutus Coreチームは、Plutusデータを使用してPlutus Txでカスタムデータ型をエンコードするのがはるかに簡単になるように変更をマージしました。これにより、Plutus Txで記述された多くのスクリプトのコストを大幅に削減できます。これは今後のリリースで利用可能になる予定であり、チームはドキュメントに使用方法を記載することになります。

**Marlowe**チームは、ts-sdkのウォレットパッケージの[ユニットテスト](https://github.com/input-output-hk/marlowe-ts-sdk/pull/24/files)の設定に取り組み、ts-sdkに[ウォレット拡張機能](https://github.com/input-output-hk/marlowe-ts-sdk/commit/516dc9d)のインストール方法を追加し、[プレコミットのフォーマット](https://github.com/input-output-hk/marlowe-ts-sdk/commit/66fe2ba)を強化しました。Marlowe CLIがコマンドなしで呼び出されたときの[印刷コマンドリスト](https://github.com/input-output-hk/marlowe-cardano/pull/700)、[REST APIエラーレポート](https://github.com/input-output-hk/marlowe-cardano/pull/698)の改善、インストール済みウォレット拡張機能の動的な[リスト](https://github.com/input-output-hk/marlowe-ts-sdk/pull/25/commits/516dc9d8d5183d1ce3c79ea7be10ccd72be5ad38#Diff-5b5366ab42f1604dd09519400d2f0c6e3c77519acd8961abcb7e875b223f8d95R47-R57)の追加に取り組みました。

### Basho( スケーリング)

**Hydra**チームは、[インラインデータム](https://github.com/input-output-hk/hydra/issues/1043)のサポートでコミットプロセスを改良し、[チェーンステータスの永続性](https://github.com/input-output-hk/hydra/pull/1049)をリファクタリングすることでチェーンレイヤーを簡素化しました。CIワークフローチェックを追加して最新の状態に保つように、[Hydraチュートリアル](https://github.com/input-output-hk/hydra/issues/997)を更新しました。インクリメンタルコミットとデコミッションについて研究者と議論し、リソースベースのAPIのアーキテクチャー上の決定記録を作成しました。今後のネットワーク回復性のためのよりシンプルなソリューションを検討しました。

**Mithril**チームは、引き続きMithrilノードのエラーの[リファクタリングと標準化](https://github.com/input-output-hk/mithril/issues/798)に取り組みました。GitHubアクションのテラフォームデプロイワークフローのリファクタリングや、[デプロイ](https://github.com/input-output-hk/mithril/issues/1200)におけるスナップショット圧縮パラメーターの実装にも取り組みました。アグリゲーターインフラの[Cloudflare](https://github.com/input-output-hk/mithril/issues/1207)保護の実装にも引き続き取り組みました。

アグリゲーターの[パフォーマンスボトルネック](https://github.com/input-output-hk/mithril/issues/1207)の特定と調査を開始しました。

### VOLTAIRE

**Voltaire**に関して、[Intersect](https://intersectmbo.org)は、Cardanoの将来の開発を形作り、推進するエコシステムのための重要な機関です。会員は、毎月開催されるタウンホールと、各州のニュースレターで最新情報を受け取ります。[今すぐIntersectに参加](http://intersectmbo.org/)して、来週開催されるタウンホールに出席してください。  

CIP-1694のオンチェーンガバナンスアクションのための進化する技術テストベッドSanchoNetは、引き続き機能ロードマップを進めています。Cardano APIプロバイダーのBlockfrostは、SanchoNetへのアクセスも提供するようになりました。CIP-1694のMVGフレームワーク内でガバナンスのアクションと役割をテストするという、エキサイティングな時を迎えています。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。 

### CATALYST

**Project Catalyst**では、の投票が終了しました。Catalystチームは、他のファンド運用提案者と一緒にTwitterスペースに参加し、提案について議論しました。[ここ](https://twitter.com/unpopularel/status/1701612053012922497?s=46&t=dwwd3s971mANXwcNrW)knQ)で録音をチェックできます。タウンホールでは、他の素晴らしいプロジェクトがこれまでに行った仕事を発表し、チームは投票の状況についてコミュニティに最新情報を提供しました。見逃した場合は、[ここ](https://www.youtube.com/watch?v=M68LnM7FLps)でCatalystタウンホールの録画を視聴できます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。

Catalystの技術的更新情報は以下の通りです。

*   コミュニティの再現とFund10スナップショットの分析に取り組む
    
*   割り当てを含むインポーターの自動化のレビューが進捗
    
*   新しいIdeaScaleインポーターでのテスト継続
    
*   投票進行中、現時点で投票数は前回のファンドと同程度
    
*   Catalyst Archiverを使用して、投票数はコミュニティサイトでライブ表示
    
*   スナップショットデータを基にブロック0を構築するための自動化に取り組む
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、来週マルタ大学で開催されるCardano Daysイベントに向けて準備を進めています。ABCとのHaskell仮想コースの提供も継続しています。
