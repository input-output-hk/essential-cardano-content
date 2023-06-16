---
title: Weekly development report as of 2023-06-16
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/069ba966-1268-4626-9dba-649f5f4b019d/
image_text: ""
---

### CORE TECHNOLOGY

Over the past few weeks, the **networking** team implemented a new [light peer sharing feature](https://github.com/input-output-hk/ouroboros-network/issues/3596), which allows the inclusion of inbound peers into the outbound governor's known peers.

This is the primary method for new unregistered nodes to join the network, which can then be shared through peer sharing. Note that peer sharing is an experimental feature that is currently disabled until the implementation of Genesis and Eclipse Evasion is complete.

The team also made progress in reviewing [Eclipse Evasion](https://github.com/input-output-hk/ouroboros-network/issues/3886), fixed some bugs in [local root peers](https://github.com/input-output-hk/ouroboros-network/pull/4583), and resumed working on dynamically [enabling block forging](https://github.com/input-output-hk/ouroboros-network/issues/3159), which will enable the release of [P2P for block-producing nodes](https://github.com/input-output-hk/ouroboros-consensus/pull/140). 

Finally, the team prepared [cardano-ping and cardano-cli ping releases.](https://input-output-hk.github.io/cardano-updates/2023-06-12-network/#new-cardano-ping--cardano-cli-ping-release)

The **consensus** team had a productive meeting with IOG researchers to discuss the transition between Byron and TPraos eras when Genesis is rolled out. They agreed that era checkpointing is not necessary for the MVP and are currently assessing the threat that historical short forks pose for Genesis. Additionally, they are collaborating further with researchers to ensure that when Genesis is implemented, there will be a bound on how long an adversary can delay the overall sync time.

In terms of development, the team has been working on the UTXO HD feature. They rebased the prototype branch onto the latest ouroboros-consensus main branch and integrated it with cardano-node 8.1.1-pre. As a result, the recently released mempool fairness fix is now incorporated into UTXO-HD. They successfully ran a UTXO-HD-enabled node and addressed a race condition in the prototype. Additionally, they started conducting UTXO-HD ad-hoc benchmarks for cardano-node, which revealed a performance regression in the network component when using GHC-9.2/9.4. They are currently working on resolving this issue.

In terms of support activities, the team released fs-sim-0.2.0.0 and is in the process of preparing the node v.8.2 release. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team implemented [Brave support](https://twitter.com/lace_io/status/1668605376273498117) in Lace v.1.1.1. Work is ongoing on cardano-js-sdk, the team updated TxBuilder to add support for multi-delegation and a new input selection algorithm for partitioning UTXOs according to users’ staking preferences. They are also finalizing the HD wallet import feature. 

Finally, the team continued working on Lace browser UI components for a new staking page.

The **Adrestia** team continued working on updating the cardano-wallet to support node v.8.0.x, multi-signature wallet delegation, and DB layer enhancements.

### SMART CONTRACTS

This week, the **Plutus** tools worked on finalizing the Marconi `GetUtxoFromAddress` and `GetTokenBurnEvent` indexers, compared those with cardano-db-sync, and updated the marconi-sidechain JSON-RPC request. They also added an `AssetId` filter to the marconi-sidechain CLI.

The Plutus core team improved the Untyped Plutus Core inliner, making it more efficient at identifying inlining opportunities. They also improved the pretty printer for Plutus Core and Plutus IR, making the printed programs more compact and readable.

The **Marlowe** team worked on Marlowe Runtime improvements by diagnosing some issues in advancing Marlowe contract and fixing a [transaction submission](https://github.com/input-output-hk/marlowe-cardano/pull/600) feature in marlowe-apps. They also benchmarked Marlowe Runtime for tagging a release candidate, added edge [test cases](https://github.com/input-output-hk/marlowe-cardano/pull/598), and fixed some options in marlowe-runtime-cli.

The team also worked on E2E test scenarios automation for Marlowe Playground, added new designs to Marlowe Explorer, and worked on Marlowe Run Lite token minting support. 

### BASHO (SCALING)

This week, the **Hydra** team completed their investigation into Hydra head issues on mainnet and reactivated their persistent head instance. Additionally, they resolved the issue with the monthly report publication process on the website and began brainstorming ideas for future enhancements. The team is currently in the final stages of delivering a new feature that will enable parties to commit funds from external wallets. 

Finally, they initiated efforts to optimize the performance of their benchmarks.

This week, the **Mithril** team completed the implementation of the new sub-command for [restoring](https://github.com/input-output-hk/mithril/issues/896) Mithril stake distribution in the client. They also updated the client’s [developer documentation](https://github.com/input-output-hk/mithril/issues/897) and [architecture documentation](https://github.com/input-output-hk/mithril/issues/898), and did some [refactoring](https://github.com/input-output-hk/mithril/issues/960) on the client. Additionally, they completed and deployed [infrastructure](https://github.com/input-output-hk/mithril/issues/930) enhancements on the test Mithril networks.

Finally, the team worked on fixing a bug on the [client multi-platform test](https://github.com/input-output-hk/mithril/issues/956) and some [flakiness](https://github.com/input-output-hk/mithril/issues/954) on the CI.

### VOLTAIRE

This week in **Voltaire**, conversations continue on [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) to establish an initial Minimum Viable Governance (MVG) framework. This framework is crucial for the advancement of participatory governance within the Cardano ecosystem. By collecting feedback from community members, diverse viewpoints can be incorporated to ensure the governance system aligns with the community’s needs and desires. 

The following workshops, hosted this week, yielded some valuable feedback:

*   Tokyo, Japan by EMURGO
    
*   Philadelphia, PA, U.S. by NOODZ#9108 (Jun 17)
    
*   Toronto, Ontario, Canada by lley154#5195 
    
*   Taipei, Taiwan by willhuang#9734 and EricTsai#8963
    
*   Virtual by Juana#4728 (Jun 17)
    
*   Virtual by Bboaz#5475 (Jun 17)
    

[Check out workshops](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) happening near you and join the conversations.

[CIP-30](https://cips.cardano.org/cips/cip30/) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) are mechanisms proposed in [Cardano Improvement Proposals (CIPs)](https://cips.cardano.org/) to empower ada holders with voting capabilities. These proposals, once implemented by wallet providers, will enable community members to express their democratic consent for governance actions.

It's essential for community members to actively participate in providing feedback for [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509). By voicing opinions and suggestions, you can help shape the future of governance within Cardano. This collaborative approach ensures that the governance mechanisms implemented best represent the community's needs.  

### CATALYST

During [this week’s town hall](https://www.youtube.com/watch?v=v2X8vPeSZiY), the **Catalyst** team provided an overview of the Fund10 budget parameters. Make sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

Moving on to the technical side of Catalyst last week:

*   The team initiated another dry run of the voting app. Several branching issues from the previous version of the voting app were identified and solved.
    
*   Compatibility testing with external wallets regarding the latest changes required for Fund10 registration is ongoing. 
    
*   Outputs of the Earthly build were cleaned up to prepare work on event orchestration for the continuous testnet.
    
*   Initial development on the first set of APIs for the new Catalyst Data Service was completed and has entered the testing phase.
    
*   The tally recovery tool was refactored to reduce the time required to run from 24 hours down to 10 minutes.
    
*   Last but not least, the team started work to merge snapshots from pre-production to mainnet to enable the ‘Check my voting power’ tool.
    

Watch out for more information on how you can participate, which we will share in the coming days!

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram announcement channel](https://t.me/cardanocatalyst).

### EDUCATION

This week, the **Education** team delivered a very successful _Cardano Days_ workshop at the [University of Celaya](https://www.udec.edu.mx/en/), Mexico. This two day in-person event presented Cardano to a mainly non-technical audience. The feedback has been very positive and will help us shape similar events in the future.

The team also published [lesson 14](https://www.youtube.com/watch?v=AvpMOMSSZHs) of the Haskell Bootcamp and continued making progress with content for _Mastering Cardano_.

### コアテクノロジー

この数週間、**ネットワーキング**チームは新しい[ライトピア共有機能](https://github.com/input-output-hk/ouroboros-network/issues/3596)の実装に取り組んできました。これは、インバウンドピアをアウトバウンドガバナーの既知のピアに含めることを可能にする機能です。

これは、新規の未登録ノードがネットワークに参加するための主要な方法であり、その後、ピア共有を通じて共有できます。ピア共有は実験的機能であり、GenesisとEclipse回避の実装が完了するまで無効化されています。

[Eclipse回避](https://github.com/input-output-hk/ouroboros-network/issues/3886)のレビューを進め、[ローカルルートピア](https://github.com/input-output-hk/ouroboros-network/pull/4583)のバグを修正し、動的な[ブロック作成を可能に](https://github.com/input-output-hk/ouroboros-network/issues/3159)する取り組みも再開しました。これにより、[ブロック生成ノード用のP2P](https://github.com/input-output-hk/ouroboros-consensus/pull/140)のリリースが可能になります。 

[cardano-pingおよびcardano-cli pingリリース](https://input-output-hk.github.io/cardano-updates/2023-06-12-network/#new-cardano-ping--cardano-cli-ping-release)の準備を行いました。

**コンセンサス**チームは、Genesisがロールアウトされた際のByron期からTPraos期への移行について、IOG研究者と有意義な議論を交わしました。ここでは、MVPに開発期チェックポイントが不要であることで合意し、現在は、これまでのショートフォークがGenesisにもたらす脅威について評価しています。Genesisが実装されたときに敵対者が遅延させることができる全体的な同期時間の長さを確実に制限できるよう、研究者と協力しています。

開発面では、UTXO HD機能に取り組みました。プロトタイプブランチをouroboros-consensusのメインブランチにリベースし、これをcardano-node 8.1.1-preと統合しました。その結果、最近リリースされたメモリープールの公平性修正がUTXO-HDに組み込まれました。UTXO-HD対応ノードの実行に成功し、プロトタイプの競合状態に対処しました。cardano-nodeのUTXO-HDアドホックベンチマークの実施を始めたところ、GHC-9.2/9.4を使用した際のネットワークコンポーネントにおけるパフォーマンス低下が明らかになりました。現在、この問題の解決に取り組んでいます。

サポートに関しては、fs-sim-0.2.0.0をリリースし、ノードv.8.2のリリース準備を進めています。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、Lace v.1.1.1に[Braveサポート](https://twitter.com/lace_io/status/1668605376273498117)を実装しました。cardano-js-sdkの作業は進行中で、TxBuilderを更新してマルチ委任のサポートと、ユーザーのステーキング設定に従ってUTXOを分割するための新しいインプット選択アルゴリズムを追加しました。HDウォレットのインポート機能を仕上げました。 

LaceのブラウザーUIコンポーネントで新しいステーキングページへの取り組みを続けました。

**Adrestia**チームは、ノードv.8.0.xとマルチシグウォレット委任をサポートし、DB層を強化するようcardano-walletを更新しました。

### スマートコントラクト

Plutusツールチームは、MarconiのGetUtxoFromAddressおよびGetTokenBurnEventインデクサーの仕上げに取り組み、これらをcardano-db-syncと比較し、marconi-sidechain JSON-RPCリクエストを更新しました。marconi-sidechain CLIにAssetIdフィルターを追加しました。

Plutus Coreチームは、Untyped Plutus Coreインライナーを改良し、インライン化の機会をより効率的に特定できるようにしました。Plutus CoreとPlutus IRのプリティプリンタを改良して、プリントされたプログラムをよりコンパクトで読みやすくしました。

**Marlowe**チームは、Marlowe Runtimeの改良に取り組み、Marloweコントラクトを進める際の不具合を診断し、marlowe-appsの[トランザクション送信機能](https://github.com/input-output-hk/marlowe-cardano/pull/600)を修正しました。Marlowe Runtimeをベンチマークしてリリース候補にタグ付けし、エッジ[テストケース](https://github.com/input-output-hk/marlowe-cardano/pull/598)を追加し、marlowe-runtime-cliのオプションを修正しました。

Marlowe PlaygroundのE2Eテストシナリオの自動化に取り組み、Marloweエクスプローラーに新設計を追加し、Marlowe Run Liteのトークンミントサポートに取り組みました。 

### Basho( スケーリング)

**Hydra**チームはメインネットのHydraで生じたヘッドの不具合の調査を完了し、永続的なヘッドインスタンスを再び有効化しました。ウェブサイトに月次レポートを公開するプロセスに関する問題も解消し、今後の強化のためのブレインストームを始めました。現在、パーティが外部ウォレットから資金をコミットできるようにする新機能の配信は最終段階に入っています。 

ベンチマークのパフォーマンスを最適化する取り組みに着手しました。

**Mithril**チームは、クライアントでMithrilステーク分布を[復元](https://github.com/input-output-hk/mithril/issues/896)する新しいサブコマンドの実装を完了しました。クライアントの[開発ドキュメント](https://github.com/input-output-hk/mithril/issues/897)と[アーキテクチャードキュメント](https://github.com/input-output-hk/mithril/issues/898)を更新し、クライアントで[リファクタリング](https://github.com/input-output-hk/mithril/issues/960)を行いました。Mithrilテストネットワークで[インフラ](https://github.com/input-output-hk/mithril/issues/930)強化を完了し、デプロイしました。

[クライアントのマルチプラットフォームテスト](https://github.com/input-output-hk/mithril/issues/956)のバグ修正と、CIの[不安定性](https://github.com/input-output-hk/mithril/issues/954)に取り組みました。

### VOLTAIRE

**Valtaire**に関しては、初期MVG（最小実行可能ガバナンス）フレームワークを確立するための[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)に関する話し合いが続いています。このフレームワークは、Cardanoエコシステムの参加型ガバナンスを進めるうえで不可欠です。コミュニティメンバーからフィードバックを収集することで、多様な視点を取り入れ、コミュニティのニーズと要望に沿ったガバナンスシステムを構築することができます。 

今週は以下のワークショップが開催され、貴重なフィードバックが得られました。

*   東京 - EMURGO主催
    
*   米国フィラデルフィア - NOODZ#9108主催（6月17日）
    
*   カナダ、トロント - lley154#5195主催 
    
*   台北 - willhuang#9734およびTsai#8963主催
    
*   仮想ワークショップ - Juana#4728主催（6月17日）
    
*   仮想ワークショップ - Bboaz#5475主催（6月17日）
    

近くで開催される[ワークショップをチェック](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up)して、話し合いに参加してください。

[CIP-30](https://cips.cardano.org/cips/cip30/)および[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)は、[CIP（Cardano改善提案）](https://cips.cardano.org/)でADA保有者に投票権を与えるべく提案されたメカニズムです。この提案がウォレットプロバイダーにより実装されると、コミュニティメンバーはガバナンスアクションについて民主的に同意を表明することができるようになります。

コミュニティメンバーが、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)や[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)に積極的にフィードバックを提供することは極めて重要です。意見や提案を表明することは、Cardanoのガバナンスの未来を形作るのに役立ちます。この協調的なアプローチにより、実装されたガバナンスメカニズムがコミュニティのニーズを代表するようになります。  

### CATALYST

今週のタウンホールで、**Catalyst**チームはFund10予算パラメーターの概要を発表しました。[今後のタウンホール](http://bit.ly/catalyst-townhall)へ参加登録を行い、最新情報を入手してください。

Catalystの技術的側面は以下の通りです。

*   投票アプリのドライランを再度開始しました。投票アプリの前バージョンで生じた分岐問題を特定し、解消しました。
    
*   Fund10の登録に必要な最新の変更に関して、外部ウォレットの互換性テストを実施中です。 
    
*   継続的テストネットのイベントオーケストレーションの作業を準備するために、Earthlyビルドのアウトプットをクリーンアップしました。
    
*   新しいCatalyst Data Serviceの初回APIセットの初期開発が完了し、テスト段階に入りました。
    
*   タリー復元ツールをリファクタリングし、必要な実行時間を24時間から10分に短縮しました。
    
*   「Check my voting power」ツールを有効にするために、プリプロのスナップショットをメインネットにマージする作業を始めました。
    

参加方法の詳細は、近日中にお知らせします。

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。

### 教育

**教育**チームは、メキシコの[セラヤ大学](https://www.udec.edu.mx/en/)でCardano Daysワークショップを開催し、大成功を収めました。この2日間にわたる対面型イベントでは、主に非技術系の聴衆にCardanoが紹介されました。フィードバックは非常に肯定的であり、今後の類似イベントの企画に役立ちます。

Haskellブートキャンプの[レッスン14](https://www.youtube.com/watch?v=AvpMOMSSZHs)も公開し、『Mastering Cardano』の執筆も進んでいます。
