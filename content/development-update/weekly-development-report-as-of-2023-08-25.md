---
title: Weekly development report as of 2023-08-25
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/86359b40-1d6a-4145-9394-dadf91ea4f1c/
image_text: Stats and highlights from the Cardano weekly development report as
  of 2023-08-25
---

### CORE TECHNOLOGY

This week, the **ledger** team continued working on the Conway era functionality. Downstream components can now utilize voting for delegate representatives (DReps) and stake pool operators. The team introduced new ledger state queries that enable the verification of governance state changes, including vote placement, governance proposal submission, inspection of DRep stake distribution, and more. 

Finally, the team integrated treasury withdrawals, marking the completion of all governance actions' enactment, except for hard fork initiation.

The **DB Sync** team integrated multiple new Conway era features allowing `db-sync` to sync with SanchoNet, and continued testing and improving the new db-sync options.

The **networking** team released a new version of the ouroboros-network package (v.0.9.0.0), which includes the [big ledger peers feature](https://github.com/input-output-hk/ouroboros-network/issues/3886) to defend against eclipses. They aligned the CDDL specs for network codec with the highly polymorphic implementation, enhancing the clarity of specifications. The team also introduced a redesigned API in the ouroboros-network-framework package, streamlining communication between ouroboros-consensus and the network layer. 

Finally, they conducted a major review of their Nix setup, resulting in an optimized `flake.nix` file that enables cross-compilation and provides a comprehensive shell with essential build tools. 

The **consensus** team worked on the UTXO-HD reaching an important milestone, where they handed over the implementation for benchmarking and testing. They are now working on addressing the issues found during the integration tests. Within the Genesis development, they are finalizing the argument that justifies the exclusion checkpoints for the initial release, while also providing support for this argument. The team also worked on the new node release and several improvements to the code base.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team continued working on Posthog analytics implementation

and basic support for Trezor model T devices. They also kept working on improving hardware wallet transactions with the DApp connector, setting up the collateral in a round-trip action, extending CIP-30 to clear the path for enabling additional extensions, and adding more automation tests.

Finally, they started working on extending the SDK for Voltaire functionality and implementing CIP-95 features. 

Work is ongoing on Metadesk functionality. The team created E2E tests for swapping native tokens, added instrumentation for metrics and traces, implemented filters by token name or ID, and worked on swap functionality. 

### SMART CONTRACTS

The **Plutus** tools team continued rewriting the Marconi indexers using a new simplified API, implementing and testing the new indexer resuming strategy for the new API, and updating the cardano-api version in plutus-apps.

The Plutus Core team added an optimization to Plutus IR that makes more bindings strict, which can improve the performance of Plutus scripts. They also fixed an issue in the Plutus Tx compiler that can cause exponential behavior when compiling Plutus Tx code in rare circumstances.

The **Marlowe** team:

*   [Updated the Jupyter notebooks](https://github.com/input-output-hk/marlowe-starter-kit/pull/27) to work with the new environment
    
*   [Added payment information](https://github.com/input-output-hk/marlowe-cardano/pull/691) to Runtime’s REST API
    
*   [Generalized era usage](https://github.com/input-output-hk/marlowe-cardano/pull/690) in Runtime
    
*   Released [Runtime 0.0.4](https://github.com/input-output-hk/marlowe-cardano/releases/tag/runtime%40v0.0.4)
    
*   [Prepared integration](https://github.com/input-output-hk/marlowe-ts-sdk/pull/14) with Wallet Connection Widget
    
*   [Reduced the size of the library components](https://github.com/input-output-hk/marlowe-ts-sdk/pull/16)
    
*   [Changed Cardano Serialization Lib](https://github.com/input-output-hk/marlowe-ts-sdk/pull/17) to reduce the size of the lib
    
*   [Added access to Runtime (Legacy)](https://github.com/input-output-hk/marlowe-ts-sdk/pull/12)
    
*   [Fixed e2e tests](https://github.com/input-output-hk/marlowe-ts-sdk/pull/15)
    
*   [Configured changelog management](https://github.com/input-output-hk/marlowe-ts-sdk/pull/13) for marlowe-ts-sdk repo
    
*   [Added Marlowe-to-JSON conversion to marlowe-cli](https://github.com/input-output-hk/marlowe-cardano/pull/687)
    

### BASHO (SCALING)

This week, the **Hydra** team released version 0.12.0, a significant update that brings support for Cardano node version 8.1.2, along with performance enhancements and various API improvements. The team also onboarded a new contributor, who is now actively participating in operating a Hydra head. They took part in a meeting of the Intersect open source committee and prepared the Hydra master class for RareEvo, an educational initiative for the community.

If you happen to be at RareEvo, register for the Hydra master class [using this form](https://docs.google.com/forms/d/1Q9KIxwKeyZeNrKDBiYWceYjnbxIxaEwC8Eo5LWxSa2g/viewform?edit_requested=true). The team aims to make this a hybrid session and will announce more details on the [Discord Hydra announcements](https://discord.gg/Qq5vNTg9PT) channel.

This week, the **Mithril** team focused on performing cleanup tasks. They enhanced the clarity and reduced verbosity of the logs for the signer and aggregator nodes. They also streamlined the process of verifying the [registration status](https://mithril.network/doc/manual/getting-started/run-signer-node/#verify-your-signer-is-registered) of a signer. 

### VOLTAIRE

This week in **Voltaire**, participatory governance advances with the first iteration of SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions. It is a new playground for the Cardano community to experience CIP-1694 in a controlled testnet environment. New governance roles, such as future delegate representatives (DReps), will be available to the community to experience and weigh in on the advancement of participatory governance. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org) is a key institution for the ecosystem that brings together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such, it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol. [Join Intersect today](http://intersectmbo.org/) as a founding member to receive an exclusive newsletter with a first look at the latest highlights and monthly town halls.          

### CATALYST

This week in **Project Catalyst,** the community has been gearing up for the voting phase to begin next Thursday, August 31. If you haven’t already, make sure to check out the Catalyst proposal and proposal pitch videos [here](https://fund10.catalystcats.io/who-we-are/out-team). Michael Madoff, the Group Product Manager for Voltaire, joined Kriss Baird to discuss the relationship between Catalyst and Voltaire, you can catch the recording of that [here](https://www.youtube.com/watch?v=2f7v0x6xal0&t=2548s). If you haven’t already make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

Moving on to the technical side of Catalyst last week:

*   Updated supported wallets gitbook with latest updates
    
*   Completed integration of snapshot data with autodeployment / orchestration framework for continuous voting events
    
*   Multiple community version of “check my voting power” built against testnet APIs
    
*   Optimizing snapshot service to eliminate manual downstream work (eg remove delegation tx, take latest registration as valid), and clean up testing framework
    
*   Defined work required to automate reviews importer and calculation, including integration with moderation module - aiming to have importer process mimic users posting reviews directly to backend from any interface
    
*   Created tutorial for using interactive API dashboard for testnet data service
    
*   Completed final dry run on voting app - no significant issues uncovered, completed several optimizations based on findings
    
*   Pending deployment to stores
    
*   App now pointing to [Project Catalyst - Innovation grants to build on Cardano](http://projectcatalyst.io/) for proposal details
    
*   Aligned with team on plan for monitoring active voting; made sure everyone has access
    

Lastly, if you’re trying to stay up to date with everything happening in Project Catalyst, join the Catalyst Telegram announcement channel. Check [it out here](https://t.me/cardanocatalyst).

### EDUCATION

This week, the **Education** team is continuing the virtual delivery of their Haskell course with [the African Blockchain Center](https://www.theafricablockchaincenter.com/), teaching the fundamentals of Haskell and smart contracts to local aspiring blockchain developers. Also, members of the team are on site hosting a _Cardano Days_ event on Thursday and Friday at [ITESO](https://www.iteso.mx/) in Guadalajara, Mexico. The team are also planning the next in the series of these events at the [University of Malta](https://www.um.edu.mt/) in September. If you are part of the local Cardano community in Malta and would like to attend this _Cardano Days_ event, please send us an [email](mailto:education@iohk.io). 

Additionally, some of the team have been invited to take part in a panel session to deliver a virtual conference as part of the _Breaking Barriers: Women Pioneers and Frontiers in Web3_ event.

![Stats and highlights in Japanese from the Cardano weekly development report as of 2023-08-25](https://ucarecdn.com/b52af369-1809-4871-a24f-94694cbfd695/)

### コアテクノロジー

**台帳**チームはConway期の機能への取り組みを続けました。ダウンストリームコンポーネントは、DRep（デリゲーター代表団）およびステークプールオペレーターの投票を利用できるようになりました。投票の配置、ガバナンス提案の提出、DRepのステーク分布の検査など、ガバナンスステータスの変更の検証を可能にする新しい台帳ステータスクエリを導入しました。 

トレジャリーの引き出しを統合し、ハードフォークの開始を除くすべてのガバナンスアクションの制定が完了しました。

**DB Sync**チームは、 db-syncがSanchoNetと同期できるようにするConway期の複数の新機能を統合し、新しいdb-syncオプションのテストと改良を継続しました。

**ネットワーキング**チームは、ouroboros-networkパッケージの新バージョン（v.0.9.0.0）をリリースしました。これには、エクリプス攻撃から守るための[ビッグレジャーピア](https://github.com/input-output-hk/ouroboros-network/issues/3886)機能が含まれています。ネットワークコーデックのCDDL仕様を高度なポリモーフィック実装と整合させ、仕様の明確性を高めました。ouroboros-network-frameworkパッケージに再設計したAPIを導入し、ouroboros-consensusとネットワーク層間の通信を合理化しました。 

Nixのセットアップを大幅に見直し、クロスコンパイルを可能にし、必要なビルドツールを備えた包括的なシェルを提供する最適化したflake.nixファイルを作成しました。 

**コンセンサス**チームは、UTXO-HDに取り組み、重要なマイルストンを達成したところでベンチマークとテストの実装を引き渡しました。現在、統合テスト中に発見された問題に取り組んでいます。Genesisの開発では、初回リリースの除外チェックポイントを正当化する議論をまとめつつ、この議論をサポートしています。新しいノードリリースとコードベースの改良にも取り組みました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、Posthog分析の実装とTrezorモデルTデバイスの基本的なサポートに引き続き取り組みました。DAppコネクターを使用したハードウェアウォレットトランザクションの改善、ラウンドトリップアクションでの担保設定、追加拡張を有効にするためのパスをクリアするためのCIP-30の拡張、および自動化テストの追加にも取り組みました。

Voltaire機能用SDKの拡張と、CIP-95機能の実装への取り組みにも着手しました。 

Metadesk機能に関する作業は進行中です。ネイティブトークンのスワップ用にE2Eテストを作成し、メトリックとトレースのインストルメンテーションを追加し、トークン名またはIDによるフィルターを実装し、スワップ機能に取り組みました。 

### スマートコントラクト

Plutusツールチームは、簡素化されたAPIを使用したMarconiインデクサーの書き直し、新APIのための新インデクサーの再開戦略の実装とテスト、plutus-appsのcardano-apiのバージョン更新作業を続けました。

Plutus CoreチームはPlutus IRに最適化を追加しました。これにより、より厳密なバインディングが可能になり、Plutusスクリプトのパフォーマンスが向上します。まれな状況でPlutus Txコードをコンパイルするときに指数関数的な動作を引き起こす可能性があるPlutus Txコンパイラーの問題を修正しました。

**Marlowe**チームの更新情報は以下のとおりです。

●   新しい環境で動作するように[Jupyterノートブックを更新](https://github.com/input-output-hk/marlowe-starter-kit/pull/27)

●   RuntimeのREST APIに[支払情報を追加](https://github.com/input-output-hk/marlowe-cardano/pull/691)

●   Runtimeで[開発期の使用を汎用化](https://github.com/input-output-hk/marlowe-cardano/pull/690)

●   [Runtime 0.0.4](https://github.com/input-output-hk/marlowe-cardano/releases/tag/runtime%40v0.0.4)リリース

●   ウォレット接続ウィジェットとの[統合を準備](https://github.com/input-output-hk/marlowe-ts-sdk/pull/14)

●   [ライブラリーコンポーネントのサイズを縮小](https://github.com/input-output-hk/marlowe-ts-sdk/pull/16)

●   [Cardanoシリアル化ライブラリーを変更](https://github.com/input-output-hk/marlowe-ts-sdk/pull/17)してサイズを縮小

●   [Runtime（レガシー）へのアクセスを追加](https://github.com/input-output-hk/marlowe-ts-sdk/pull/12)

●   [E2Eテストを修復](https://github.com/input-output-hk/marlowe-ts-sdk/pull/15)

●   [marlowe-ts-sdkリポジトリの変更ログ管理を設定](https://github.com/input-output-hk/marlowe-ts-sdk/pull/13)

●   [Marlowe-to-JSON変換をmarlowe-cliに追加](https://github.com/input-output-hk/marlowe-cardano/pull/687)

### Basho( スケーリング)

Hydraチームは、パフォーマンスの強化とさまざまなAPIの改良とともに、Cardanoノードバージョン8.1.2のサポートをもたらす重要な更新である、バージョン0.12.0をリリースしました。新たなコントリビューターがオンボーディングを終え、現在Hydraヘッドの運営に積極的に参加しています。Intersectオープンソース委員会の会議に参加し、コミュニティのための教育イニシアチブであるRareEvoのHydraマスタークラスを準備しました。

RareEvoに参加する場合には、[このフォーム](https://docs.google.com/forms/d/1Q9KIxwKeyZeNrKDBiYWceYjnbxIxaEwC8Eo5LWxSa2g/viewform?edit_requested=true)からHydraマスタークラスに登録してください。ハイブリッドセッションにする予定ですが、詳細は[Discord Hydraアナウンスチャネル](https://discord.gg/Qq5vNTg9PT)で紹介します。

**Mithril**チームはパフォーマンスのクリーンアップ作業に集中しました。サイナーノードとアグリゲーターノードのログの明確さを高め、冗長性を削減しました。サイナーの[登録ステータス](https://mithril.network/doc/manual/getting-started/run-signer-node/#verify-your-signer-is-registered)の検証プロセスも合理化しました。 

### VOLTAIRE

**Voltaire**に関しては、CIP-1694のオンチェーンガバナンスアクションのための進化型テストベッドであるSanchoNetの初回イテレーションによって、参加型ガバナンスが前進します。これはCardanoコミュニティが制御されたテストネット環境でCIP-1694を体験するための新しい遊び場です。参加型ガバナンスの進歩を経験し、検討するために、将来のDRep（デリゲーター代表団）のような新しいガバナンスの役割を利用できるようになります。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。

[Intersect](https://intersectmbo.org)は、Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関です。これは、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。設立メンバーとして[今すぐIntersectに参加](http://intersectmbo.org/)すると、最新情報をまとめたニュースレターとマンスリータウンホール情報が配信されます。           

### CATALYST

**Project Catalyst**では、来週8月31日木曜から始まる投票フェーズに向けてコミュニティが準備を進めています。Catalystの提案および提案のプレゼン動画をチェックしていない場合は[こちら](https://fund10.catalystcats.io/who-we-are/out-team)をご覧ください。VoltaireのグループプロダクトマネージャーのMichael Madoff、ガバナンスVPのNigel HemsleyがKriss BairdとともにCatalystとVoltaireの関係について議論しました。録画は[ここ](https://www.youtube.com/watch?v=2f7v0x6xal0&t=2548s)で視聴できます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。

Catalystの技術的側面は以下の通りです。

*   サポートしているウォレットのGitBookを最新情報で更新
    
*   継続的投票イベントのためのスナップショットデータと自動デプロイ/オーケストレーションフレームワークの統合を完了
    
*   テストネットAPIに対して、「Check my voting power（議決権の確認）」の複数のコミュニティバージョンを構築
    
*   スナップショットサービスを最適化して、手動によるダウンストリーム作業（委任txの削除、最新の登録を有効にするなど）を排除し、テストフレームワークをクリーンアップ
    
*   レビューのインポーターと計算を自動化するために必要な定義済みの作業（モデレーションモジュールとの統合を含む）- ユーザーが任意のインターフェイスからバックエンドに直接レビューを投稿するのをインポータープロセスが真似することを意図
    
*   テストネットデータサービス用インタラクティブAPIダッシュボードを使用するためのチュートリアルを作成
    
*   投票アプリの最終ドライランを完了- 重大な問題は発見されず、調査結果に基づいた最適化を完了
    
*   ストアへのデプロイを保留中
    
*   アプリで、詳細の参照先を[Project Catalyst - Innovation grants to build on Cardano](http://projectcatalyst.io/)に指定
    
*   全員がアクセスできるようにするために、アクティブな投票を監視するための計画についてチームと連携
    

Project Catalystの最新情報を入手するには、Catalyst Telegram案内チャネルへ参加してください。詳しくは、[こちら](https://t.me/cardanocatalyst)をご覧ください。

### 教育

**教育**チームは、引き続き[African Blockchain Center](https://www.theafricablockchaincenter.com/)と協力してHaskellのバーチャルコースを配信し、Haskellとスマートコントラクトの基礎を地元の意欲的なブロックチェーン開発者に教えています。チームの一部は、メキシコのグアダラハラの[ITESO](https://www.iteso.mx/)で木曜と金曜に開催されるCardano Daysイベントを主催するために現地入りしています。9月に[マルタ大学](https://www.um.edu.mt/)で開催する一連のイベントの企画も行っています。マルタのCardanoコミュニティメンバーで、Cardano Daysイベントに参加を希望する場合は、[メール](mailto:education@iohk.io)でご連絡ください。 

Breaking Barriers: Women Pioneers and Frontiers in Web3イベントの一環として、バーチャルカンファレンスのパネルセッションに招待されました。
