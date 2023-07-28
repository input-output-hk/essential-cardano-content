---
title: Weekly development report as of 2023-07-28
tags:
  - Weekly development updates
  - cardano
url: ""
image: https://ucarecdn.com/706290d5-27aa-4226-9b33-0b408c6a19ae/
image_text: null
---

### CORE TECHNOLOGY

This week, the core technology teams released node [v.8.1.2](https://github.com/input-output-hk/cardano-node/releases/tag/8.1.2), which brings updates to the Plutus interpreter. 

The **ledger** team focused on the implementation of Conway features into the ledger. Team members took part in the CIP-1694 workshop and had an in-person meeting discussing further steps for Conway era implementation. They also investigated some transaction validation issues on the preview testing environment relevant to the new node release, did some work to define the needed types for Plutus v3, and progressed on constraint-based generators, which now generate valid transactions and ledger state. 

This week, the DB Sync team confirmed that the adaptor module provided by the **consensus** team for UTXO-HD integration shows no performance degradation. Other clients interested in integrating with UTXO-HD, without using on-disk storage, can currently use the mentioned adaptor module.

The team also focused on completing tracing support for UTXO-HD in cardano-node. They are working on UTXO-HD documentation, catering to both downstream consumers and the general public, and on further implementation generalization. 

Work is ongoing on Genesis design; the team decided to make a Genesis-motivated change to the epoch structure. They collaborated with researchers to produce a self-contained description of the statistical model for historical Genesis windows and eclipse durations. A couple of small improvements have already been merged into the ChainSync client.

Finally, the consensus team investigated an issue on the Sanchonet (the Conway ledger testnet), which resulted in long syncing pauses. They identified a ledger bug and promptly collaborated with the ledger team to fix it.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team worked on some fixes to support hardware wallet use within the DApp connector, refactored complex parts of the codebase, and ran a semi-automatic collateral setup to simplify DApp interactions. They also improved test automation, made some local development improvements, and continued working on Trezor support.

### SMART CONTRACTS

This week, the **Plutus** tools team worked on improving error reports for Marconi, bug fixes when storing `LedgerStates` on disk for the `marconi-sidechain`, and on completing the `cardano-node-emulator` demo.

The Plutus core team added new built-ins for Keccak-256, which will enhance compatibility with Ethereum. Additionally, they included Black2b-224 as a new built-in, enabling on-chain computation of PubKeyHash within Plutus. These additions will be available in Plutus v3.

The **Marlowe** team created a [developer Docker](https://github.com/input-output-hk/marlowe-starter-kit/pull/25) image with Runtime and Jupyter notebooks, worked on Marlowe Runtime testing pre-launch for mainnet, filtered contracts by role token in Marlowe Run Lite, and added role payout support to the runtime client.

### BASHO (SCALING)

This week, the **Hydra** team updated the specification to align with recent off-chain protocol changes and completed the refactoring of the snapshot emission in preparation for event-sourced protocol logic. They also updated to GHC 9.2.7, which resulted in improved compiling times and slightly smaller Plutus scripts.

This week, the **Mithril** team released a new distribution [2329.0](https://github.com/input-output-hk/mithril/releases/tag/2329.0). The team launched [Mithril protocol’s mainnet beta](https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch): the `release-mainnet` network is now open for signer registrations, and its genesis certificate has been created. The team is monitoring the network, and expects it to start producing certificates during the next Cardano epoch. They also kept working on the implementation of the [stress test tool](https://github.com/input-output-hk/mithril/issues/991) for benchmarking the aggregator. Additionally, the team kept working on the refactoring of the [serialization/deserialization](https://github.com/input-output-hk/mithril/issues/668) of the entities of the cryptographic library.

Finally, they have worked on fixing installation bugs of the [binary artifacts](https://github.com/input-output-hk/mithril/issues/1073) produced in the CI, and on enhancing the [documentation](https://github.com/input-output-hk/mithril/issues/1080) for onboarding SPOs and setting up a Mithril signer.

### VOLTAIRE

This week in **Voltaire**, the feedback collected from the [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) workshop is being reviewed and considered. An update will be published shortly. As [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) moves to its final form, the community will have the opportunity to vote on whether this MVG is an acceptable way to move forward together. This represents a powerful option for the crucial advancement of participatory governance within the Cardano ecosystem.

[Intersect](https://intersectmbo.org) was announced earlier this month, as a key institution for the ecosystem, bringing together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol.

All participants in the Cardano ecosystem are welcome to become Intersect members. Made up of a distributed group of participants, including the foremost experts on Cardano and current ecosystem contributors, Intersect will facilitate healthy discussions and sound decision-making amongst its members, and the community at large, to uncover pain points, while championing successes. To join as a founding member, [click here](http://intersectmbo.org/).

### CATALYST

This week in **Project Catalyst,** the level 0 and level 1 community review stage is ongoing until next Thursday, August 3. Following that, the level 2 community review process will begin. The [recent town hall](https://www.youtube.com/watch?v=IK43DGMF7pM) featured a fireside chat led by Kriss Baird, the Catalyst group product lead, and Nigel Hemsley, the VP of governance. The chat aimed to address community questions about the Catalyst Fund operations proposal submitted by the Catalyst team. Make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the Catalyst technical side, the team:

*   Created a script for weekly registration reporting from the snapshot service
    
*   Worked on bug fixes for the new snapshot importer
    
*   Updated supported wallets page with the latest information from Yoroi, Daedalus, and Typhon
    
*   Investigated the Flint wallet registration issue 
    
*   Implemented a workaround solution to add new data fields to the vit-servicing-station without modifying the db schema (relevant links and open source flag provided)
    
*   Refactored the community reviews calculator and considered its integration with the Ideascale importer
    
*   Continued working on test automation for cat-data-service APIs
    
*   Started testing the moderation module
    
*   Completed analysis of existing load testing tools and aligned on an approach for testing in Fund10, scheduled to begin in the next dry run
    
*   Continued working on community documentation for new auditing tools
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel.

### EDUCATION

This week, the **Education** team prepared the content for the in-person Haskell training course happening in early August in Nairobi, Kenya in conjunction with the [Africa Blockchain Center](https://theafricablockchaincenter.com/). They also published [lesson 15](https://www.youtube.com/watch?v=QkUCHFG1hK8&list=PLNEK_Ejlx3x1D9Vq5kqeC3ZDEP7in4dqb&index=18) of the Haskell Bootcamp which focuses on error handling.

![](https://ucarecdn.com/ebb1ddb5-31e5-4fb0-a431-90136858a233/)

### コアテクノロジー

コアテクノロジーチームは、Plutusインタープリターを更新したノード[v.8.1.2](https://github.com/input-output-hk/cardano-node/releases/tag/8.1.2)をリリースしました。 

**台帳**チームはConway機能を台帳に実装する作業に専念しました。CIP-1694ワークショップに参加し、Conway期実装ステップの詳細を対面で話し合いました。新ノードリリースに関してプレビューテスト環境で生じたトランザクション検証の問題を調査し、Plutus v3に必要な型を定義するための作業を行い、制約ベースのジェネレーターを進めました。これは現在有効なトランザクションと台帳のステータスを生成しています。 

DB Syncチームは**コンセンサス**チームからUTXO-HD統合用に提供されたアダプターモジュールがパフォーマンスの低下を示さないことを確認しました。ディスク上のストレージを使用しないUTXO-HDとの統合に関心のある他のクライアントは、現在前述のアダプターモジュールを使用することができます。

Cardano-nodeでUTXO-HDのトレースサポートを完了することにも焦点を当てました。ダウンストリーム消費者と一般ユーザーの両方を対象としたUTXO-HDドキュメントの作成と、実装のさらなる汎用化に取り組んでいます。 

Genesisの設計は進行中で、エポック構造にGenesisを発端とする変更を加えることを決定しました。Genesisウィンドウとエクリプス期間の統計モデルの説明を生成するために、研究者と協力しました。ChainSyncクライアントには、いくつかの軽微な改良がすでにマージされています。

コンセンサスチームは、同期の一時停止が長くなるというSanchonet（Conway台帳テストネット）の不具合を調査しました。台帳のバグを特定し、速やかに台帳チームと協力して修正しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは、DAppコネクター内でハードウェアウォレットの使用をサポートするための修正に取り組み、コードベースの複雑な部分をリファクタリングし、DAppとのインタラクションを簡素化するための半自動の担保設定を実行しました。テストの自動化を改良し、ローカル開発を改善し、Trezorサポートへの取り組みを続けました。 

### スマートコントラクト

**Plutus**ツールチームはMarconiのエラーレポートの改良、marconi-sidechainのディスク上にLedgerStatesを保存するときのバグの修正、cardano-node-emulatorデモの仕上げに取り組みました。

Plutus Coreチームは、イーサリアムとの互換性を強化するKeccak-256用の新しいビルトインを追加しました。Black2b-224を新たに組み込み、Plutus内でPubKeyHashのオンチェーン計算を可能にしました。これらの追加機能はPlutus v3で利用可能になります。

**Marlowe**チームは、RuntimeとJupyterノートブックを使用して[開発者用Docker](https://github.com/input-output-hk/marlowe-starter-kit/pull/25)イメージを作成し、Marlowe Runtimeのメインネットリリース前テストを行い、Marlowe Run Liteでコントラクトをロールトークンでフィルタリングし、ランタイムクライアントにロールペイアウトのサポートを追加しました。

### Basho( スケーリング)

**Hydra**チームは最近のオフチェーンプロトコルの変更に合わせて仕様を更新し、イベントソースのプロトコルロジックに備えてスナップショットエミッションのリファクタリングを完了しました。GHC 9.2.7に更新した結果、コンパイル時間が短縮され、Plutusスクリプトがやや縮小されました。

**Mithril**チームは新ディストリビューション[2329.0](https://github.com/input-output-hk/mithril/releases/tag/2329.0)をリリースしました。[Mithrilプロトコルのメインネットベータ版](https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch)を立ち上げました。現在release-mainnetネットワークでサイナー登録が可能であり、ジェネシス証明書の作成は開始されています。ネットワークは監視しており、次のCardanoエポック中に証明書の作成が開始される見込みです。ベンチマーキングとアグリゲーター用の[ストレステストツール](https://github.com/input-output-hk/mithril/issues/991)の実装作業を続けました。引き続き、暗号理論ライブラリーのエンティティの[シリアル化、逆シリアル化](https://github.com/input-output-hk/mithril/issues/668)のリファクタリングに取り組みました。

CIで生成された[バイナリアーティファクト](https://github.com/input-output-hk/mithril/issues/1073)のインストールバグの修正や、SPOのオンボーディングとMithrilサイナーの設定のための[ドキュメント](https://github.com/input-output-hk/mithril/issues/1080)の強化に取り組みました

### VOLTAIRE

**Voltaire**では、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)ワークショップで収集したフィードバックのレビューと検討を行っています。更新情報はまもなく公開されます。[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)が最終形態に移行するにつれて、コミュニティはこのMVGが協力して前進するための方法として受け入れられるものであるかどうかを投票する機会が得られます。これは、Cardanoエコシステムの参加型ガバナンスを進めるうえで強力なオプションを示します。

Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関、[Intersect](https://intersectmbo.org)（インターセクト）が今月上旬に発表されました。これは、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。

Cardanoエコシステムのすべての参加者は、Intersectメンバーになることを歓迎します。Cardanoの第一人者や現在のエコシステムの貢献者を含む分散化された参加者グループで構成されているIntersectは、メンバーとコミュニティ全体の間で健全な議論と健全な意思決定を促進し、成功を擁護しながら、ペインポイントを明らかにします。設立メンバーとして参加するには、[ここをクリック](http://intersectmbo.org/)してください。    

### CATALYST

Project Catalystでは、コミュニティレビューのレベル0とレベル1が来週8月3日木曜まで続きます。その後、コミュニティレビューレベル2が始まります。最近の[タウンホール](https://www.youtube.com/watch?v=IK43DGMF7pM)では、CatalystグループプロダクトリーダーのKriss Bairdと、ガバナンスバイスプレジデントのNigel Hemsleyのリードでファイアサイドチャットが行われました。このチャットの目的は、Catalystチームが提出した[Catalystファンドの運用提案](https://fund10.catalystcats.io/our-catalyst-proposals/catalyst-fund-operations-by-iog-catalyst-team)に対する質問に対応することです。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をお忘れなく。

Catalystの技術面は以下の通りです。

*   毎週スナップショットサービスから登録をレポートするためのスクリプトを作成
    
*   新しいスナップショットインポーターのバグを修正
    
*   サポートしているウォレットページをYoroi、Daedalus、Typhonの最新情報で更新
    
*   Flintウォレットの登録に関する不具合を調査 
    
*   dbスキーマを変更せずに、新しいデータフィールドをvit-servicing-stationに追加する回避策を実装（関連リンクとオープンソースフラグを提供）
    
*   コミュニティレビュー計算機をリファクタリングし、Ideascaleインポーターとの統合を検討
    
*   cat-data-service APIのテスト自動化の作業を継続
    
*   モデレーションモジュールのテストを開始
    
*   既存の負荷テストツールの分析を完了し、次のドライランで開始する予定のFund10でのテストアプローチに合わせて調整
    
*   新しい監査ツールのコミュニティドキュメントの作成を継続
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、[アフリカブロックチェーンセンター](https://www.youtube.com/watch?v=QkUCHFG1hK8&list=PLNEK_Ejlx3x1D9Vq5kqeC3ZDEP7in4dqb&index=18)と協力して、ケニアのナイロビで8月上旬に開催される対面式のHaskellトレーニングコースのコンテンツを準備しました。エラー処理に焦点を当てたHaskellブートキャンプの[レッスン15](https://www.youtube.com/watch?v=QkUCHFG1hK8&list=PLNEK_Ejlx3x1D9Vq5kqeC3ZDEP7in4dqb&index=18)を公開しまし
