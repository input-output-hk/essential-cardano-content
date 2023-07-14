---
title: Weekly development report as of 2023-07-14
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/c5849e46-7149-48d6-a4ae-1e72217a2fd4/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team working on UTXO-HD discovered a space leak in the peer metrics code which was communicated to the networking team who proposed [a fix](https://github.com/input-output-hk/ouroboros-network/pull/4620) for it. The team also conducted UTXO-HD benchmarks using a local immutable DB server, which demonstrated promising memory and time performance. However, they still plan to assess the performance of a memory-constrained machine.

Work is ongoing on the Genesis design, the team started onboarding the team of engineers to implement the new Genesis protocol. They are also finalizing the statistical model for historical Genesis feasibility.

On the support front, the team [drafted](https://github.com/input-output-hk/ouroboros-consensus/pull/200) an information exchange requirement (IER) for the networking team to safely and efficiently control peer load.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

The **Lace** team [released v.1.3](https://twitter.com/lace_io/status/1678711101838487554), which introduces ‘ADA Handle’ support for the regular and personalized handle, which users can test in the preview testing environment. Additionally, the update includes improvements in browser viewing responsiveness and the option to recover multi-address HD wallets. 

The team continued working on Trezor support and on the creation of new UI components for the multi-delegation flow. They also worked on the Metadex UI, which is now deployed to the pre-production testing environment.

Finally, work is ongoing on cardano-js-sdk – the team released the import HD wallet feature and worked on input selection algorithm improvements for the multi-delegation feature.

### SMART CONTRACTS

This week, the **Plutus** tools team continued working on setting up the runtime monitoring for the Marconi sidechain, adding value and epochNo response fields to the getUtxosForAddress indexer and the afterTx query field for the getBurnTokenEvents indexer. Finally, they investigated how to make the standalone emulator usable with a real Cardano node socket client.

Over the past two weeks, the **Marlowe** team added [stake credential support](https://github.com/input-output-hk/marlowe-cardano/pull/646) to Marlowe Runtime CLI and REST API, expanded the [testing](https://github.com/input-output-hk/marlowe-cardano/pull/647) of Plutus failures for safety analyses, added more data feeds to the [Marlowe oracle](https://github.com/input-output-hk/marlowe-cardano/pull/641), and fixed some bugs in the Marlowe starter kit. The team also updated the contract details page, improved styling and descriptions of the apply input steps, and provided a timestamp in Marlowe Run Lite UI instead of `blockNo`.

Finally, the team implemented a user interface for the generative-art Marlowe contract (see commits [1](https://github.com/input-output-hk/marlowe-cardano/commit/d46825d3b), [2](https://github.com/input-output-hk/marlowe-cardano/commit/ec7dc140a), [3](https://github.com/input-output-hk/marlowe-cardano/commit/560e6568c), [4](https://github.com/input-output-hk/marlowe-cardano/commit/f022ac609)). 

### BASHO (SCALING)

This week, the **Hydra** team continued securing the layer 2 network by implementing [authentication of messages](https://github.com/input-output-hk/hydra/issues/727) sent between peers in the Hydra Head protocol. In the process, they also managed to separate [HeartBeat messages](https://github.com/input-output-hk/hydra/pull/969) from the protocol ones which improved code quality. The team also finished work related to sending only transaction IDs in [ReqSn](https://github.com/input-output-hk/hydra/issues/728) messages, fixed an issue in the [smoke tests](https://github.com/input-output-hk/hydra/pull/967), and improved [benchmark publishing](https://github.com/input-output-hk/hydra/pull/947) on the website.

This week, the **Mithril** team focused on preparing the beta launch on mainnet: they prepared an [SPO on-boarding guide](https://mithril.network/doc/manual/getting-started/SPO-on-boarding-guide), kept working on the deployment of the `mainnet` [infrastructure](https://github.com/input-output-hk/mithril/issues/988), and worked on enhancing the [monitoring](https://github.com/input-output-hk/mithril/pull/1046) of the Mithril networks infrastructure. They also kept working on the implementation of a [simple stress test tool](https://github.com/input-output-hk/mithril/issues/991) for benchmarking the aggregator. Additionally, the team completed the [refactoring of the interface](https://github.com/input-output-hk/mithril/issues/669) to the cryptographic library.

Finally, they fixed a bug in the [epoch gap detection](https://github.com/input-output-hk/mithril/issues/952) of the certificate chain in the aggregator, fixed some [flakiness](https://github.com/input-output-hk/mithril/issues/1023) in the CI, and worked on multiple other optimizations.

### VOLTAIRE

This week in **Voltaire**, representatives from around the globe gathered together to advance [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) as a proposal for Minimum Viable Governance (MVG) framework. Over the last six months, over 50 workshops took place that involved nearly 1,000 passionate community members globally discussing the details of the proposal. That collection of feedback was discussed this week to ensure the governance system aligns with the community’s needs and desires. A consensus is forming around the frame proposed in [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) and with it, a community-led proposal for MVG will be available to all ada holders.

Wallet providers gathered together in a hybrid hackathon to review [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) this week. CIP-95 proposes mechanisms that empower ada holders with voting capabilities. This proposal fundamentally elevates wallet providers to an integral infrastructure provider for the Cardano ecosystem. They are a key enabler for community members to express their democratic consent for governance actions.

As [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) moves to its final form, the community will have the opportunity to vote on whether this MVG is an acceptable way to move forward together. Several voting opportunities will be presented ensuring the community continues to guide the governance mechanism that best represents the community's needs. This represents a powerful option for the crucial advancement of participatory governance within the Cardano ecosystem.

Lastly, [Intersect](https://intersectmbo.org) was announced this week, as a key institution for the ecosystem, bringing together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. It will be a steward of the underlying blueprints and technology for the community beginning with the Cardano node, core Cardano libraries and components required to operate the protocol, and all of its accompanying documentation, knowledge, and contributors.

As such Intersect will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol.

All participants in the Cardano ecosystem are welcome to become Intersect members. Made up of a distributed group of participants, including the foremost experts on Cardano and current ecosystem contributors, Intersect will facilitate healthy discussions and sound decision-making amongst its members, and the community at large, to uncover pain points, while championing successes. To join as a founding member, [click here](http://intersectmbo.org/).  

### CATALYST

This week in **Project Catalyst,** the proposal submission phase ended. Everyone who submitted a proposal is now working hard to make final edits before the proposal finalization period ends on July 17 at 11am UTC. During [this week's town hall](https://www.youtube.com/watch?v=oq0EfVBQxoE), more projects presented the great work they have been doing, and the Catalyst team gave a talk on how to improve proposals during the finalization period. Make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the Catalyst technical side, the team:

*   prepared the Snapshot Module UI for test deployment, pending backend enablers
    
*   completed the initial development of the merged snapshot tool, which integrates with the development environment
    
*   tested the changes to Daedalus rewards address and are currently waiting for the wallet team to merge them
    
*   continued making improvements and conducting tests on Catalyst Data Services, auditability tools, and snapshot tools
    
*   finished designing the app changes to align with process changes and have commenced development.
    

Finally, to stay up to date with everything happening in Project Catalyst, join the Catalyst Telegram announcement channel. Check [it out here](https://t.me/cardanocatalyst).

### EDUCATION

This week, the **Education** team delivered a successful webinar for the [Milken Institute](https://milkeninstitute.org/) to a group of their alumni on _Blockchain Fundamentals_. The team is also planning the curriculum for the Haskell Course taking place next month.

![](https://ucarecdn.com/75060485-8948-4ed8-8739-2876719ae9d6/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

UTXO-HDに取り組んでいる**コンセンサス**チームは  、ピアメトリクスコードにスペースリークがあることを発見しました。これは、[修正](https://github.com/input-output-hk/ouroboros-network/pull/4620)を提案したネットワークチームに伝えられました。ローカルの不変DBサーバーを使用してUTXO-HDベンチマークを実施し、メモリーと時間のパフォーマンスが有望であることを実証しました。ただし、メモリーに制約のあるマシンのパフォーマンスの評価も今後実施する予定です。

Genesisの設計作業は進行中であり、新しいGenesisプロトコルを実装するためにエンジニアチームのオンボーディングを開始しました。また、Genesisの実現可能性履歴の統計モデルを完成させています。

サポート面では、ネットワーキングチームがピアの負荷を安全かつ効率的に制御するための情報交換要件（IER）の[草稿](https://github.com/input-output-hk/ouroboros-consensus/pull/200)を作成しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは[v.1.3をリリース](https://twitter.com/lace_io/status/1678711101838487554)し、通常のパーソナライズされた処理のためのADA Handleサポートが導入されました。これは、ユーザーがプレビューテスト環境でテストできます。この更新には、ブラウザーの表示応答性の向上と、マルチアドレスHDウォレットを復元するオプションも含まれています。 

Trezorサポートに関する作業、マルチ委任フロー用の新しいUIコンポーネントの作成作業を継続しました。Metadex UIの開発にも取り組みました。このUIは現在、プリプロテスト環境にデプロイされています。

cardano-js-sdkの作業は進行中です。インポートHDウォレット機能をリリースし、マルチ委任機能のインプット選択アルゴリズムの改良に取り組みました。

### スマートコントラクト

**Plutus**ツールチームは、getUtxosForAddressインデクサーと、getBurnTokenEventsインデクサーのafterTxクエリフィールドに値とepochNo応答フィールドを追加する、Marconiサイドチェーンのランタイム監視の設定への取り組みを続けました。スタンドアロンエミュレーターを実際のCardanoノードソケットクライアントで使用可能にする方法について調査しました。

この2週間で、**Marlowe**チームはMarlowe Runtime CLIとREST APIに[ステーククレデンシャルサポート](https://github.com/input-output-hk/marlowe-cardano/pull/646)を追加し、安全性分析のためのPlutus障害の[テスト](https://github.com/input-output-hk/marlowe-cardano/pull/647)を拡張し、[Marlowe Oracle](https://github.com/input-output-hk/marlowe-cardano/pull/641)にデータフィードを追加し、Marloweスターターキットのバグを修正しました。コントラクトの詳細ページを更新し、スタイリングとインプット適用ステップの説明を改善し、blockNoの代わりにMarlowe Run Lite UIでタイムスタンプを提供しました。

Marloweのジェネレーティブアートコントラクト用ユーザーインターフェースを実装しました（コミット[1](https://github.com/input-output-hk/marlowe-cardano/commit/d46825d3b)、[2](https://github.com/input-output-hk/marlowe-cardano/commit/ec7dc140a)、[3](https://github.com/input-output-hk/marlowe-cardano/commit/560e6568c)、[4](https://github.com/input-output-hk/marlowe-cardano/commit/f022ac609)を参照）。 

### Basho( スケーリング)

**Hydra**チームは、Hydra Headプロトコルにピア間で送信されるメッセージの認証を実装することで、レイヤー2ネットワークのセキュリティを確保する作業を続けました。この過程で、プロトコルメッセージから[HeartBeatメッセージ](https://github.com/input-output-hk/hydra/pull/969)を分離することもでき、コードの質が向上しました。[ReqSn](https://github.com/input-output-hk/hydra/issues/727)メッセージ内のトランザクションIDのみの送信に関する作業を完了し、[スモークテスト](https://github.com/input-output-hk/hydra/pull/967)の不具合を修正し、ウェブサイトでの[ベンチマーク公開](https://github.com/input-output-hk/hydra/pull/947)を改善しました。

Mithrilチームは  メインネットでのベータ版の立ち上げ準備に注力しました。[SpOオンボーディングガイド](https://mithril.network/doc/manual/getting-started/SPO-on-boarding-guide)を作成し、[Mainnetインフラ](https://github.com/input-output-hk/mithril/issues/988)のデプロイに取り組み、Mithrilネットワークインフラの[監視](https://github.com/input-output-hk/mithril/pull/1046)強化に取り組みました。ベンチマーキングとアグリゲーター用の[単純なストレステストツール](https://github.com/input-output-hk/mithril/issues/991)の実装作業を続けました。暗号理論ライブラリーの[インターフェイスのリファクタリング](https://github.com/input-output-hk/mithril/issues/669)は完了しました。

アグリゲーターでの証明書チェーンの[エポックギャップ検出](https://github.com/input-output-hk/mithril/issues/952)のバグを修正し、CIの[脆弱性](https://github.com/input-output-hk/mithril/issues/1023)を修正した他、さまざまな最適化やバグに取り組みました。

### VOLTAIRE

**Voltaire**では、世界各地の代表者が集まり、MVG（最小実行可能ガバナンス）の枠組みを提案する[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)を前進させました。この半年、1,000人近い熱心なコミュニティメンバーが世界各地で50を超えるワークショップを開き、提案の詳細について議論してきました。このフィードバックをまとめて、ガバナンスシステムがコミュニティのニーズと希望に合うよう議論されました。[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)で提案されているフレームを中心にコンセンサスが形成されており、それに伴い、コミュニティ主導のMVG案がすべてのADA保有者に公開されます。

ウォレットプロバイダーが[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)をレビューするためのハイブリッドハッカソンに集まりました。CIP-95は、ADA保有者に投票能力を提供するメカニズムを提案しています。この提案は根本的に、ウォレットプロバイダーをCardanoエコシステムにとって不可欠なインフラプロバイダーに昇格させるものです。コミュニティのメンバーがガバナンスアクションに民主的な同意を表明するための重要なイネーブラーです。

[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)が最終形態に移行するにつれて、コミュニティはこのMVGが協力して前進するための方法として受け入れられるものであるかどうかを投票する機会が得られます。コミュニティがガバナンスメカニズムをコミュニティのニーズをきちんと反映したものにできるよう、投票の機会は複数設けられます。これは、Cardanoエコシステムの参加型ガバナンスを進めるうえで強力なオプションを示します。

Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関、[Intersect](https://intersectmbo.org)（インターセクト）が発表されました。Cardanoノード、プロトコルの操作に必要なコアCardanoライブラリーとコンポーネント、およびそれに付随するすべてのドキュメント、知識、貢献者をはじめとする、コミュニティの基盤となる設計図と技術を管理します。

すなわち、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。

Cardanoエコシステムのすべての参加者は、Intersectメンバーになることを歓迎します。Cardanoの第一人者や現在のエコシステムの貢献者を含む分散化された参加者グループで構成されているIntersectは、メンバーとコミュニティ全体の間で健全な議論と健全な意思決定を促進し、成功を擁護しながら、ペインポイントを明らかにします。設立メンバーとして参加するには、[ここをクリック](http://intersectmbo.org/)してください。  

### CATALYST

**Project Catalyst**は提案受付を締め切りました。提案提出者たちは、日本時間7月17日午後7時の最終案作成期間が締め切られるまで、編集作業に励んでいます。今週の[タウンホール](https://www.youtube.com/watch?v=oq0EfVBQxoE)では、さらなるプロジェクトによってこれまで行ってきた素晴らしい仕事が紹介され、Catalystチームが最終案作成期間にどのように提案を改善するかについて話しました。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をお忘れなく。

Catalystの技術面は以下の通りです。

*   テストデプロイ用のスナップショットモジュールUIを準備し、バックエンドイネーブラを保留
    
*   マージしたスナップショットツールの初期開発を完了、これは開発環境と統合
    
*   Daedalusの報酬アドレスの変更をテストし、現在ウォレットチームによるマージ待ち
    
*   Catalyst Data Services、監査ツール、スナップショットツールの改良とテストの実施を継続
    
*   プロセスの変更に合わせたアプリケーションの変更設計を完了、開発を開始
    

Catalyst Telegram案内チャネルに登録して、Project Catalystの最新情報を入手してください。詳しくは、[こちら](https://t.me/cardanocatalyst)をご覧ください。

### 教育

**教育**チームは、[Milken Institute](https://milkeninstitute.org/)の卒業生グループにBlockchain Fundamentalsに関するウェビナーを提供しました。来月開催されるHaskellコースのカリキュラムも企画しています。
