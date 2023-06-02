---
title: Weekly development report as of 2023-06-02
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/e920ef77-b4ae-49c3-a6a0-ef8fb8276aad/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams worked on the upcoming node v.8.1.0, which will introduce more Conway era support, epoch boundary optimizations, and new network packages, among other improvements.

The **ledger** team made progress on the Conway ledger era, designing and working on implementing new certificates, and refactoring some of the data structures to support DRep actions. They also cleaned up the serialization format and renamed items to clarify the differences with Shelley.

Finally, the team completed integration work for node v.8.1.0 and continued  addressing technical debt.

The **consensus** team worked on drafting [an implementation path](https://github.com/input-output-hk/ouroboros-consensus/issues/101) to be used for backing the network's ledger peer selection, which concludes that a node is synced. They also conducted a thorough investigation into the feasibility of applying the Genesis rule to certain historical parts of the chain.

On the UTXO-HD front, the team is working on improving the design of the ledger tables and finalizing the enhanced DB locking mechanism. Finally, they [released some packages](https://input-output-hk.github.io/cardano-updates/2023-05-31-consensus#utxo-hd) required by UTXO-HD.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, [Lace went open source](https://twitter.com/lace_io/status/1663937036057706500). The team also focused on cardano-js-sdk, making updates to TxBuilder to accommodate the CIP-17 object. They worked on stake distribution reporting and prepared a new input selection algorithm to align with CIP-17 preferences. The team are also working on the upcoming v.1.2 release. 

The **Adrestia** team worked on separating the balance TX library, enhancing the database layer, and closing out the multi-signature wallet delegation functionality. The team is also preparing MBO repositories and updating cardano-wallet to support node v.8.0.x.

### SMART CONTRACTS

This week, the **Plutus** tools team worked on finalizing the Marconi EpochSDD and MintBurn indexer for the sidechains project. They also worked on fixing resuming logic of Marconi indexers and on separating the mocked node from plutus-pab. 

The **Marlowe** web-based platform to build and run smart contracts launched on mainnet this week. Marlowe’s set of open source tools is designed to simplify the creation, testing, and deployment of secure smart contracts on the Cardano blockchain. It caters to developers, regardless of their expertise in software development, by offering intuitive solutions to create, utilize, and monetize smart contracts with ease. Check out [the website](https://marlowe.iohk.io/) and [documentation](https://docs.marlowe.iohk.io/docs/introduction) for more information.

The team also worked on the setup and deployment of [Marlowe Playground](https://play.marlowe.iohk.io/), `GetContract` [query](https://github.com/input-output-hk/marlowe-cardano/pull/585), and [marlowe-loader](https://github.com/input-output-hk/marlowe-cardano/pull/578) services. They automated an end-to-end test scenario for Playground, connected its frontend tests to CI, and added the [contract for difference (CFD)](https://github.com/input-output-hk/marlowe/pull/191) to the examples suite. 

Finally, the team proofread the specs and validated Marlowe contracts for valid addresses. 

### BASHO (SCALING)

The **Hydra** team held their monthly review meeting and drafted the May report to be published on the [website](https://hydra.family/head-protocol/monthly). They also made progress on implementing the first end-to-end journey for external commits using 'Option A' for regular UTXOs, while still considering 'Option B'. The team integrated a Spanish translation contributed by the community, created micro-benchmarks for transaction validation and deserialization, and made improvements to the version reporting of the Hydra node. 

Finally, they implemented the ability to commit multiple UTXOs to a head at once.

This week, the **Mithril** team released a new [2321.1](https://github.com/input-output-hk/mithril/releases/tag/2321.1) distribution that fully implements the mechanism developed to sign generic data. They completed the [upgrade of the Cardano node](https://github.com/input-output-hk/mithril/pull/922) in the Mithril networks to v.8.0.0, and the [refactoring of the state machines](https://github.com/input-output-hk/mithril/pull/934) of the signer and aggregator. Additionally, they worked on adapting the client and implementing a [new sub-command](https://github.com/input-output-hk/mithril/pull/951) for restoring the Cardano immutable file snapshots.

Finally, the team worked on adding a new [certificate list route](https://github.com/input-output-hk/mithril/pull/949) in the aggregator REST API, and started [enhancing the infrastructure](https://github.com/input-output-hk/mithril/issues/930) of the Mithril networks.

### VOLTAIRE

This week in **Voltaire**, the conversations continue on [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) to establish an initial Minimum Viable Governance (MVG) framework. This framework is crucial for the advancement of participatory governance within the Cardano ecosystem. By collecting feedback from community members, diverse viewpoints can be incorporated to ensure the governance system aligns with the community’s needs and desires. The following workshops were hosted to collect feedback this week:

*   Addis Ababa, Ethiopia by nebast#9398
    
*   Monterey, California, USA by TheRealAdamDean#3458, bayareaeagle#3314, and Rod.G#1645
    
*   Zug, Switzerland by the Cardano Foundation (June 3rd)
    

[Check out workshops](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) happening near you and join in the conversation.

[CIP-30](https://cips.cardano.org/cips/cip30/) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) are mechanisms proposed by the [Cardano Improvement Proposals (CIPs)](https://cips.cardano.org/) to empower ada holders with voting capabilities. These proposals, once implemented by wallet providers, will enable community members to express their democratic consent for governance actions. By involving the broader Cardano community in decision-making processes, the ecosystem becomes more decentralized and inclusive.

It's essential for community members to actively participate in providing feedback for [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509). By voicing opinions and suggestions, you can help shape the future of governance within Cardano. This collaborative approach ensures that the governance mechanisms implemented are representative and responsive to the community's needs. 

### CATALYST

This week in Project Catalyst, the Catalyst team presented an overview of the continuous testnet during [this week’s town hall](https://www.youtube.com/watch?v=CaKQAhnOKbE). Catalyst’s Lead Architect, walked through the details and roadmap, and demoed how the community can start to interact with the testnet, watch [it here for more details](https://youtu.be/CaKQAhnOKbE?t=1819). If you aren’t already make sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

Diving in deeper on the development of the Catalyst testnet and other updates:

*   The Catalyst core team completed the integration of importer services into the continuous deployment framework, unlocking updates in configurable intervals for voting power and proposal details for frontend clients.
    
*   The team kicked off refactoring database relations in the new EventDB, in preparation to enable voting via Catalyst OpenAPIs.
    
*   There was continued investigation of the tally recovery tool and cryptography behind the encrypted tally, laying the groundwork for independently verifiable voting results. 
    
*   A dry run for Fund10 was initiated to begin taking inventory of bugs and to begin making necessary fixes before going live. As well as continued wallet testing for compatibility with CIP-36 and new Catalyst registration format, enabling Catalyst DReps and more seamless reward payouts. 
    

Finally, to stay up to date with everything happening in Project Catalyst, bookmark the past issues of the weekly newsletter [here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

### EDUCATION

This week, the **Education** team focused on writing content for Mastering Cardano and organizing some contributions. They were also busy finalizing the content for the Cardano Days event in the University of Celaya and planning for other in-person training events over the next few months. 

Additionally, they finished lessons 12 and 13 of the Haskell Bootcamp and spent time as a team learning about effective course design.

  
![](https://ucarecdn.com/dc549bd3-07bb-4b74-bd35-8630c05565e9/)

### コアテクノロジー

コアテクノロジーチームは、予定されているノードv.8.1.0の作業を進めました。これは、Conway期のサポートを拡充し、エポック境界を最適化し、新しいネットワークパッケージ、その他の改良を導入します。

**台帳**チームはConway台帳期の作業を進めました。新しい証明書の設計と実装作業のほか、DRepのアクションをサポートするためにデータ構造のリファクタリングに取り組みました。Shelleyとの違いを明確にするためにシリアル化形式をクリーンアップし、アイテム名を変更しました。

ノードv.8.1.0の統合作業を完了し、技術負債への取り組みを続けました。

**コンセンサス**チームは、ネットワーク台帳のピア選択をサポートするために使用する[実装パス](https://github.com/input-output-hk/ouroboros-consensus/issues/101)の草稿に取り組みました。これは、ノードが同期されたと結論付けるものです。Genesisルールを特定のチェーン履歴に適用することの実現可能性についての徹底的な調査も行いました。

UTXO-HDに関しては、台帳テーブルの設計を改良し、DBロックメカニズムの強化を仕上げました。UTXO-HDに必要な[パッケージをリリース](https://input-output-hk.github.io/cardano-updates/2023-05-31-consensus#utxo-hd)しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

[Laceはオープンソース化](https://twitter.com/lace_io/status/1663937036057706500)されました。cardano-js-sdkに焦点を当て、CIP-17オブジェクトに対応するためにTxBuilderを更新しました。ステーク分布レポートに取り組み、CIP-17に合わせて新しいインプット選択アルゴリズムを準備しました。来るv.1.2リリースにも取り組んでいます。 

**Adrestia**チームは、Balance TXライブラリーの分離、データベース層の強化、マルチシグウォレット委任機能の仕上げに取り組みました。現在MBOリポジトリを準備し、ノードv.8.0.xをサポートするようcardano-walletを更新しています。

### スマートコントラクト

**Plutus**ツールチームは、サイドチェーンプロジェクト用のMarconi EpochSDDとMintBurnインデクサーの仕上げに取り組みました。Marconiインデクサーの再開ロジックの修正と、モックされたノードをplutus-pabから切り離す作業も進めました。 

スマートコントラクトを構築、実行するウェブベースの**Marlowe**プラットフォームは、今週メインネットでリリースされました。Marloweの一連のオープンソースツールは、Cardanoブロックチェーンでの安全なスマートコントラクトの作成、テスト、デプロイを簡素化するように設計されています。ソフトウェア開発の専門知識に関係なく、スマートコントラクトを簡単に作成、利用、収益化するための直感的なソリューションを開発者に提供します。詳細は、[ウェブサイト](https://marlowe.iohk.io/)と[ドキュメント](https://docs.marlowe.iohk.io/docs/introduction)を参照してください。

[Marlowe Playground](https://play.marlowe.iohk.io/)のセットアップとデプロイ、GetContract[クエリ](https://github.com/input-output-hk/marlowe-cardano/pull/585)、[marlowe-loader](https://github.com/input-output-hk/marlowe-cardano/pull/578)サービスにも取り組みました。Playgroundのエンドツーエンドテストシナリオを自動化し、フロントエンドテストをCIに接続し、サンプルスイートに[CFD（差金決済取引）](https://github.com/input-output-hk/marlowe/pull/191)を追加しました。 

仕様を校正し、有効なアドレスについてMarloweコントラクトを検証しました。 

### Basho( スケーリング)

**Hydra**チームは月例のレビュー会議を行い、[ウェブサイト](https://hydra.family/head-protocol/monthly)に公開する5月報告書の草稿を作成しました。外部コミットの最初のエンドツーエンドジャーニーの実装を進めました。この際、通常のUTXOに「オプションA」を使用していますが、「オプションB」も検討しています。コミュニティによるスペイン語訳を統合し、トランザクションの検証および逆シリアル化用マイクロベンチマークを作成し、Hydraノードのバージョンレポートを改良しました。 

複数のUTXOを1つのヘッドに一度にコミットする機能を実装しました。

**Mithril**チームは、汎用データに署名するよう開発されたメカニズムを完全実装した新ディストリビューション[2321.1](https://github.com/input-output-hk/mithril/releases/tag/2321.1)をリリースしました。Mithrilネットワークの[Cardanoノードをv.8.0.0にアップグレード](https://github.com/input-output-hk/mithril/pull/922)し、署名者とアグリゲーターの[ステートマシンのリファクタリング](https://github.com/input-output-hk/mithril/pull/934)を完了しました。クライアントの適応と、Cardanoの普遍ファイルスナップショットを復元する[新しいサブコマンド](https://github.com/input-output-hk/mithril/pull/951)の実装にも取り組みました。

新しい[証明書リストルート](https://github.com/input-output-hk/mithril/pull/949)をアグリゲーターREST APIに追加する作業に取り組み、Mithrilネットワークの[インフラ強化](https://github.com/input-output-hk/mithril/issues/930)に着手しました。

### VOLTAIRE

**Valtaire**に関しては、初期MVG（最小実行可能ガバナンス）フレームワークを確立するための[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)に関する議論を続けました。このフレームワークは、Cardanoエコシステムの参加型ガバナンスを進めるうえで不可欠です。コミュニティメンバーからフィードバックを収集することで、多様な視点を取り入れ、コミュニティのニーズと要望に沿ったガバナンスシステムを構築することができます。今週は、以下のワークショップが開催され、フィードバックが収集されました。

*   エチオピア、アディスアベバ - nebast#9398主催
    
*   米国カリフォルニア州モントレー - TheRealAdamDean#3458、bayareaeagle#3314、Rod.G#1645主催
    
*   スイス、ツーク - Cardano財団主催（6月3日）
    

近くで開催される[ワークショップをチェック](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up)して、議論に参加してください。

[CIP-30](https://cips.cardano.org/cips/cip30/)および[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)は、[CIP（Cardano改善提案）](https://cips.cardano.org/)によってADA保有者に投票権を与えるべく提案されたメカニズムです。この提案がウォレットプロバイダーにより実装されると、コミュニティメンバーはガバナンスアクションについて民主的に同意を表明することができるようになります。より広範なCardanoコミュニティを意思決定プロセスに巻き込むことによって、エコシステムの分散性と包摂性は高まります。

コミュニティメンバーが、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)や[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)に積極的にフィードバックを提供することは極めて重要です。意見や提案を表明することは、Cardanoのガバナンスの未来を形作るのに役立ちます。この協調的なアプローチにより、実装されたガバナンスメカニズムがコミュニティのニーズを代表し、これに対応できるようになります。 

### CATALYST

Project Catalystに関しては、[タウンホール](https://www.youtube.com/watch?v=CaKQAhnOKbE)でCatalystチームが継続的なテストネットの概要を発表しました。Catalystのリードアーキテクトが詳細とロードマップを説明し、コミュニティがテストネットとインタラクションする方法を実演しました。[詳細はこちら](https://youtu.be/CaKQAhnOKbE?t=1819)をご覧ください。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録して最新情報を入手してください。

Catalystテストネットおよびその他の更新情報の詳細

*   Catalystのコアチームがインポーターサービスを継続的デプロイフレームワークに統合する作業を完了し、投票権とフロントエンドクライアント向けの提案の詳細の更新を設定可能な間隔でアンロックしました。
    
*   Catalyst OpenAPI経由の投票を可能にする準備のため、新しいEventDBにおけるデータベース関係のリファクタリングを開始しました。
    
*   暗号化された集計を支える集計復元ツールと暗号の調査が続けられ、独自に検証可能な投票結果の基礎が築かれました。 
    
*   Fund10の試運転が開始され、バグのインベントリを作成し、本番前に必要な修正を開始しました。CIP-36および新しいCatalyst登録形式との互換性に関するウォレットテストを継続するとともに、Catalyst DRepとよりシームレスな報酬の支払いを可能にしました。 
    

[ここから](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)週刊ニュースレターの過去の号をブックマークして、Project Catalystのすべての情報を入手してください。

### 教育

**教育**チームは『Mastering Cardano』の執筆と投稿の整理に集中しました。セラヤ大学で開催されるCardano Daysイベント内容の最終決定や、今後数か月に行われる他の対面型トレーニングイベントの計画にも取り組みました。 

Haskellブートキャンプのレッスン12、13を終了し、チームとして効果的なコース設計について学びました。
