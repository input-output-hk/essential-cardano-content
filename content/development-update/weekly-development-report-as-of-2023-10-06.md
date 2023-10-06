---
title: Weekly development report as of 2023-10-06
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/a444ed3a-53b1-4a33-8064-ac954314a960/
image_text: Weekly development report as of 2023-10-06
---

### CORE TECHNOLOGY

This week, the **ledger** team achieved several milestones in Conway-related development. They fully implemented the constitutional committee, addressed governance actions related to treasury withdrawals, ensuring they now operate as expected, and enforced compliance with transaction rules by verifying the current treasury amount. They also implemented a mechanism to delay the expiration of delegate representative (DRep) positions when no proposals are available for voting, and changed the semantics of how `CostModels` are updated with protocol parameters to allow for individual Plutus language version updates, rather than requiring a complete replacement of all CostModels. They also made a range of [performance and testing improvements](https://input-output-hk.github.io/cardano-updates/2023-09-29-ledger/#performance).

The **consensus** team confirmed that the value-only workload benchmarks showed that the mempool forging regression observed in the UTXO-HD branch was fixed by the latest patch. Despite the increased resource requirements, key metrics like forging, peer-propagation, and end-to-end propagation show no regression when utilizing the UTXO-HD version of the Cardano node with the in-memory backend.

On the Genesis development, researchers continued their review of various design aspects, with particular attention to the Genesis rule's selection of the Cardano historical chain.

Finally, the consensus team merged a fix for the [Babbage to Conway transition](https://github.com/input-output-hk/ouroboros-consensus/pull/366) and released a new version of consensus.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team worked on the upcoming Lace v.1.6 release running tests against the new Cardano services, which will include portfolio persistence. They fixed some bugs related to portfolio and stake management, finalized implementing basic Trezor support, and started the internal security audit. 

### SMART CONTRACTS

This week, the **Plutus tools** team continued working on exposing the queries of the new Marconi API via a JSON-RPC server. Additionally, they conducted tests using the new cardano-node-emulator within the Marconi environment for integration purposes, and implemented a strategy of deferring the creation of SQL indices in Marconi, aimed at enhancing synchronization times. Finally, the team conducted experiments involving the transition of Marconi to function as a Cardano node, simultaneously managing indexing tasks.

The **Plutus Core** team released version [1.14.0.0](https://github.com/input-output-hk/plutus/releases/tag/1.14.0.0), introducing two static binaries – `pir` and `uplc`, tailored for x86-64 Linux. The `pir` binary encompasses functionalities like pretty-printing, optimizing PIR programs, and compiling PIR programs to UPLC. The `uplc` binary handles tasks such as pretty-printing, optimization, and evaluation of UPLC programs. This marks the initial publication of these binaries, and moving forward, each release will include an updated version.

The **Marlowe** team created Docker images for [marlowe-withdrawals](https://github.com/input-output-hk/marlowe-payouts/pull/8) and [Marlowe Runner](https://github.com/input-output-hk/marlowe-runner/pull/11), [re-benchmarked Runtime](https://github.com/input-output-hk/marlowe-cardano/pull/718) resources and syncing on mainnet, preview, and pre-production networks, and made changes to the API to [support open roles](https://github.com/input-output-hk/marlowe-cardano/commit/5ba9739a7). They also fixed some Marlowe Runtime issues and released Marlowe Runtime version [0.0.5](https://github.com/input-output-hk/marlowe-cardano/releases/tag/runtime%40v0.0.5). The team [updated](https://github.com/input-output-hk/marlowe-cardano/pull/720) `marlowe-cli run initialize` not to write open roles validator to the Marlowe file, improved the [OpenAPI document](https://github.com/input-output-hk/marlowe-cardano/pull/719) to be friendlier to ecosystem tooling, and [updated](https://github.com/input-output-hk/marlowe-ts-sdk/commit/c792293) `marlowe-payouts` with the `ts-sdk` 0.0.2-alpha-0 version. 

Finally, the team continued working on Marlowe Runner, making functionality and design improvements.

### BASHO (SCALING)

This week, the **Hydra** team primarily focused on developing a reliable new network layer and outlined its anticipated behavior in a new [architectural decision record](https://github.com/input-output-hk/hydra/pull/1082/files). They also released Hydra version [0.13.0](https://github.com/input-output-hk/hydra/releases/tag/0.13.0), which fixes a few security vulnerabilities.

Additionally, the team reviewed the [security policy and vulnerability disclosure](https://github.com/input-output-hk/hydra/pull/1088) policy for handling security vulnerabilities within Hydra, specifically addressing ‘silent fixes’, leading to the publication and fixing of [three new security advisories](https://github.com/input-output-hk/hydra/security/advisories).

The [September development report](https://hydra.family/head-protocol/monthly/2023-09/) is now published on the Hydra website.

The **Mithril** team updated a proposal for implementing Mithril in a light wallet and created a [relevant discussion](https://github.com/input-output-hk/mithril/discussions/1273) to receive feedback and contributions from the community.

They also completed a [proof of concept](https://github.com/input-output-hk/mithril/issues/1254) to run a Mithril client in a browser with WASM and worked on enhancing the explorer [UI with SPO tickers](https://github.com/input-output-hk/mithril/issues/1185) displayed next to the pool IDs. Additionally, the team finalized a tool for [benchmarking aggregator performance](https://github.com/input-output-hk/mithril/issues/1220) over a range of signer and client loads and for visualizing the results of these benchmarks.

Finally, they added a root page to the aggregator endpoint, created a status page for the Mithril networks, and added a section about [KES key rotation](https://github.com/input-output-hk/mithril/issues/1267) in the signer documentation for SPOs.

### VOLTAIRE

In case you missed it, [learn more about the GovTool](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd), which was presented previously to test the governance features on SanchoNet. This tool allows ada holders to register on SanchoNet to become a delegate representative (DRep) and delegate voting power to other DReps. 

Community ownership is integral to governance tooling. Intersect, aided by its committees and working groups, will assume a significant role in hosting and maintaining these tools, subject to community approval. Together with various community builders, the goal is to establish the initial foundation layer, supporting essential off-chain governance processes for complete on-chain voting via CIP-1694. Once this foundation is set, the community can continue enhancing these tools by maintaining existing features, introducing new ones, or exploring entirely new areas. This can be done independently or with support from awards and grants administered by Intersect.

To find out about the progress made on CIP-1694 development, read this blog post about the [advancement of CIP-1694 to a ballot](https://www.intersectmbo.org/news/the-advancement-of-cip-1694-to-a-ballot).

To get involved in shaping the future of Cardano governance, make sure to [join Intersect](http://intersectmbo.org/), visit the [SanchoNet](https://sancho.network) website, and join the conversations on [Discord](https://sancho.network/get-started/discord). 

### CATALYST

This week, **Project Catalyst** saw the start of the onboarding process for projects successfully selected in Fund10. You can review the stats for Fund10 and download a full copy of the results [here](https://projectcatalyst.io/funds/10).  
  
Project onboarding consists of a number of critical steps that include a comprehensive guide on how to proceed for both challenge teams and funded projects, onboarding calls, proof of life statements, and milestone submissions to provide realistic expectations to the community about each team’s capacity to deliver. You can learn more about the onboarding process [here](https://docs.projectcatalyst.io/catalyst-basics/project-onboarding).  
  
During this onboarding phase, Project Catalyst enters the scheduled cooldown period before entering the next funding cycle. Stay tuned for news in the coming weeks. In case you missed it, you can check out the recording of the Catalyst town hall [here](https://youtu.be/dvCute40GNw).  
  
On the technical side of Catalyst last week, the team:

*   finalized UX for ‘already voted’ and ‘themes’ filters
    
*   started implementing continuous snapshots in the mobile app, including updates to `cat-data-service`
    
*   started mobile app dry run to test the latest improvements on proposal loading times and max batch size
    
*   started work to implement the new load testing framework
    
*   continued automating artifact generation with GitHub actions and Earthly.
    

Finally, to stay updated with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, the **Education** team continued delivering and supporting the Haskell course with ABC. They are also working with the Marlowe team to define learning assets.

![](https://ucarecdn.com/38b9e7f7-bf88-443d-be4e-e86707fe12f0/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームはConway関連の開発においていくつかのマイルストンを達成しました。憲法委員会を完全実装し、トレジャリーの引き出しに関するガバナンスアクションに対処し、想定どおりに機能することを確認し、現在のトレジャリー額を検証することでトランザクションルールの遵守を強化しました。投票準備が整った提案がない場合にDRep（デリゲーター代表）の役職の満了を遅らせるメカニズムを実装し、プロトコルパラメーターでCostModelsを更新する方法のセマンティクスを変更して、すべてのCostModelsを完全に置き換えるのではなく、個々のPlutus言語バージョンの更新を可能にしました。[パフォーマンスとテストの改善](https://input-output-hk.github.io/cardano-updates/2023-09-29-ledger/#%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9)も幅広く実施しました。

**コンセンサス**チームは、UTXO-HDブランチで確認されたメモリープール作成に関する不具合が最新のパッチで修正されたことを、値のみのワークロードベンチマークで確認しました。リソース要件が増加しているにもかかわらず、インメモリーバックエンドを備えたCardanoノードのUTXO-HDバージョンを使用した場合、フォージング、ピア伝播、エンドツーエンド伝播などの主要なメトリクスは退行を示しません。

Genesisの開発に関しては、研究者たちは設計面から多角的なレビューを続けましたが、特にGenesisルールによるCardanoの履歴チェーンの選択に注意を払いました。

[BabbageからConwayへの移行](https://github.com/input-output-hk/ouroboros-consensus/pull/366)の修正をマージし、コンセンサスの新バージョンをリリースしました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、Lace v.1.6リリースに向け、ポートフォリオの永続性を含む新たなCardanoサービスに対するテストを実行しました。ポートフォリオ管理やステーク管理に関するバグを修正し、基本的なTrezorサポートの実装を仕上げ、内部セキュリティ監査を開始しました。 

### スマートコントラクト

**Plutusツール**チームは、JSON-RPCサーバーを介した新しいMarconi APIのクエリ公開への取り組みを継続しました。Marconi環境内で新しいCardanoノードエミュレーターを使用した統合テストを実施し、同期時間の向上を目的として、MarconiでSQLインデックスの作成を延期する戦略を実装しました。MarconiをCardanoノードとして機能するように遷移させ、インデックス作成タスクを同時に管理する実験を行いました。

**Plutus Core**チームはバージョン[1.14.0.0](https://github.com/input-output-hk/plutus/releases/tag/1.14.0.0)をリリースし、x86-64 Linux用に調整した2つの静的バイナリー、pirとUPLCを導入しました。pirバイナリーには、pretty-printing、PIRプログラムの最適化、PIRプログラムのUPLCへのコンパイルなどの機能が含まれています。uplcバイナリーは、pretty-printing、最適化、uplcプログラムの評価などのタスクを処理します。これは、これらのバイナリーの初回公開であり、今後、各リリースには更新されたバージョンが含まれることになります。

**Marlowe**チームは、[marlowe-withdrawals](https://github.com/input-output-hk/marlowe-payouts/pull/8)と[Marlowe Runner](https://github.com/input-output-hk/marlowe-runner/pull/11)のDockerイメージを作成し、 メインネット、プレビュー、プリプロのネットワークで[Runtimeリソースのベンチマークを再作成](https://github.com/input-output-hk/marlowe-cardano/pull/718)し、[オープンロールをサポート](https://github.com/input-output-hk/marlowe-cardano/commit/5ba9739a7)するためにAPIに変更を加えました。Marlowe Runtimeの問題を修正し、Marlowe Runtimeバージョン[0.0.5](https://github.com/input-output-hk/marlowe-cardano/releases/tag/runtime%40v0.0.5)をリリースしました。オープンロールバリデーターをMarloweファイルに書き込まないようにmarlowe-cli run initializeを[更新](https://github.com/input-output-hk/marlowe-cardano/pull/720)し、[OpenAPIドキュメント](https://github.com/input-output-hk/marlowe-cardano/pull/719)をエコシステムツールで使いやすいものにし、marlowe-payoutsをts-sdk 0.0.2-alpha-0バージョンに[更新](https://github.com/input-output-hk/marlowe-ts-sdk/commit/c792293)しました。 

Marlowe Runnerの開発を続け、機能性と設計の改良に取り組みました。

### Basho( スケーリング)

**Hydra**チームは、主に信頼性の高い新しいネットワーク層の開発に焦点を当て、新しい[アーキテクチャーの決定記録](https://github.com/input-output-hk/hydra/pull/1082/files)で予測される動作を概説しました。セキュリティ上の脆弱性を修正したHydraバージョン[0.13.0](https://github.com/input-output-hk/hydra/releases/tag/0.13.0)もリリースしました。

Hydra内のセキュリティ脆弱性を処理するために[セキュリティポリシーと脆弱性開示](https://github.com/input-output-hk/hydra/pull/1088)ポリシーを見直し、特に「サイレントフィックス」に対処した結果、[3つの新しいセキュリティアドバイザリー](https://github.com/input-output-hk/hydra/security/advisories)の公開と修正につながりました。

[9月の開発レポート](https://hydra.family/head-protocol/monthly/2023-09/)は、現在Hydraのウェブサイトで公開されています。

**Mithril**チームは、ライトウォレットにMithrilを実装するための提案を更新し、コミュニティからのフィードバックと貢献を受け取るために[ディスカッション](https://github.com/input-output-hk/mithril/discussions/1273)を作成しました。

WASMを使用してブラウザーでMithrilクライアントを実行するための[概念実証](https://github.com/input-output-hk/mithril/issues/1254)を完了し、プールIDの横に[SPOティッカー](https://github.com/input-output-hk/mithril/issues/1185)を表示させてエクスプローラーUIを強化しました。サイナーとクライアントの負荷の範囲にわたって[アグリゲーターのパフォーマンスをベンチマーク](https://github.com/input-output-hk/mithril/issues/1220)し、これらのベンチマークの結果を視覚化するためのツールを完成させました。

アグリゲーターのエンドポイントにルートページを追加し、Mithrilネットワークのステータスページを作成し、SPOのサイナードキュメントに[KESキーローテーション](https://github.com/input-output-hk/mithril/issues/1267)のセクションを追加しました。

### VOLTAIRE

見逃した場合は、 SanchoNetのガバナンス機能をテストするために[以前に紹介されたGovToolについてご覧ください](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd)。このツールを使用すると、ADA保有者はSanchoNetに登録してDRep（デリゲーター代表）になったり、投票権を他の代表者に委任したりすることができます。 

コミュニティのオーナーシップは、ガバナンスツールに不可欠です。Intersectは、委員会やワーキンググループの支援を受け、コミュニティの承認を条件に、これらのツールのホスティングと保守において重要な役割を果たすことが期待されています。さまざまなコミュニティビルダーと協力して、最初の基盤となるレイヤーを確立し、CIP-1694による完全なオンチェーン投票に不可欠なオフチェーンガバナンスプロセスをサポートすることが目標です。この基盤が確立されると、コミュニティは既存の機能を維持したり、新しい機能を導入したり、まったく新しい領域を探索したりすることで、これらのツールを強化し続けることができます。これは独立して行うことも、Intersectが管理する賞や助成金からの支援を受けて行うこともできます。

CIP-1694開発の進捗状況については、ブログ記事[The Advancement of CIP-1694 to a Ballot](https://www.intersectmbo.org/news/the-advancement-of-cip-1694-to-a-ballot)を参照してください。

Cardanoガバナンスの未来を形作るために、ぜひ[Intersectに参加](http://intersectmbo.org/)し、[SanchoNet](https://sancho.network)のサイトにアクセスし、[Discord](https://sancho.network/get-started/discord)の会話に参加してください。 

### CATALYST

**Project Catalyst**では、Fund10で選ばれたプロジェクトのオンボーディングプロセスが開始されました。[ここ](https://projectcatalyst.io/funds/10)でFund10の統計を確認し、結果のフルコピーをダウンロードできます。  
  
プロジェクトのオンボーディングには、チャレンジチームと資金を受けたプロジェクトの両方の進行方法に関する包括的なガイド、オンボーディングコール、ライフステートメントの証明、マイルストンの提出など、いくつかの重要なステップが含まれています。これにより、各チームの提供能力についてコミュニティに現実的な見通しを提供できます。オンボーディングプロセスの詳細については、[こちら](https://docs.projectcatalyst.io/catalyst-basics/project-onboarding)をご覧ください。  
  
このオンボーディングの期間中、Project Catalystは次の資金調達サイクルに入る前の、既定のクールダウン期間に入っています。今後数週間のニュースをお楽しみください。見逃した場合は、[ここ](https://youtu.be/dvCute40GNw)でCatalystタウンホールの録画を視聴できます。  
  
Catalystの技術的更新情報は以下の通りです。

*   「投票済み」フィルターと「テーマ」フィルターのUXを仕上げ
    
*   cat-data-serviceの更新を含む、モバイルアプリでの継続的スナップショットの実装を開始
    
*   モバイルアプリのドライランを開始し、提案されたロード時間と最大バッチサイズに関する最新の改良をテスト
    
*   新しい負荷テストフレームワークの実装作業を開始
    
*   GitHubアクションとEarthlyを使用してアーティファクトの生成自動化作業を継続
    

[Catalyst Telegram](https://t.me/cardanocatalyst)案内チャネルに登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、ABCとHaskellバーチャルコースの提供とサポートを続けました。Marloweチームと協力して学習アセットの定義にも取り組んでいます。
