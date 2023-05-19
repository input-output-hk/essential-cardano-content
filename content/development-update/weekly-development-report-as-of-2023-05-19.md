---
title: Weekly development report as of 2023-05-19
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/18c4e2d1-1f42-4c63-984e-fac6102e7940/
image_text: ""
---

日本語版はスクロールダウンしてください

### CORE TECHNOLOGY

This week, the **networking** team worked on a new way to switch between root and ledger peers and continued working on [Eclipse Evasion](https://input-output-hk.github.io/cardano-updates/2023-05-12-network/#detailed-summary). They also made changes to the handshake protocol, improved flaky tests, and added cddl specs for `NodeToNodeVersionData` and `NodeToClientVersionData`. Finally, the team improved the CI and automated the process of releasing new packages to CHaP.

During the past two weeks, the **consensus** team made more improvements to the Ouroboros Genesis design in collaboration with the research and networking teams. These improvements affect the Genesis selection rule, candidate rule, and root peers usage. See [this section](https://input-output-hk.github.io/cardano-updates/2023-05-17-consensus#genesis) for more details.

Regarding the UTXO-HD prototype, the team created a pull request that enhances the DB locking mechanism. They also began the process of porting the mempool fairness improvements from their main branch and integrated a new open source library that implements cancellative monoids. This integration simplifies the code and achieves a slight performance gain.

The team also made enhancements to their tooling by releasing an immutable [DB server](https://github.com/input-output-hk/ouroboros-consensus/pull/68). This server can be used for testing and benchmarking purposes. Finally, they developed a [db-truncater](https://github.com/input-output-hk/ouroboros-consensus/pull/70) program useful in recovery and benchmarking scenarios.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Daedalus** team finalized work on the proxy server to provide ada conversion rates from the CoinGecko API reliably. They are now preparing a Daedalus release that will switch to the new endpoint. 

The **Lace** team continued working on Trezor integration with the in-browser app, started working on the layout improvements in line with community requests, and worked on some open source features. The SDK used by Lace, the cardano-js-sdk, is open source and you can learn more about it in [this post](https://www.lace.io/blog/cardano-js-sdk-empowering-the-community-through-open-source).

Work is ongoing on desktop version development. The team has established the multi-delegation project framework and added the necessary components to integrate it with the build process (CI). Additionally, they enhanced the process of implementing [CIP-17](https://cips.cardano.org/cips/cip17/) in cardano-js-sdk.

The **Adrestia team** worked on separating the balance TX library, database enhancements, and on finalizing the multi-signature wallet delegation functionality.

### SMART CONTRACTS

This week, the **Plutus** tools team focused on resolving a bug in Marconi and verifying the correctness of the AddressUtxo indexer by comparing it with cardano-db-sync. The team is also investigating a regression in sync time within the AddressUtxo indexer. They worked on retrieving burned token events exclusively from the MintBurn indexer and explored the integration of the standalone emulator with Atlas. Finally, their objectives include developing a well-defined Haskell interface for the standalone emulator.

The Plutus core team implemented an optimization pass called Float Delay for Untyped Plutus Core, which led to significant improvements in program sizes and costs. They've also updated the Plutus Core specification for sums-of-products and kept working on formalizing sums-of-products in Agda.

The **Marlowe** team updated and retested the GHCI environment for Marlowe, ensuring its stability and functionality. They also implemented a [protocol](https://github.com/input-output-hk/marlowe-cardano/pull/574) to support incremental loading and merkleization of contracts, configured the cucumber testing framework for the Marlowe Playground repository, and created a version of Marlowe validators with minimal dependencies. 

Finally, they continued working on the new documentation site.

### BASHO (SCALING)

The **Hydra** team accomplished several milestones, notably the [release of the first mainnet-compatible Hydra node](https://twitter.com/ch1bo_/status/1656679454570340355) version. They also focused on addressing inconsistencies in rollback handling, added a [Hydra node architecture](https://hydra.family/head-protocol/core-concepts/architecture/) explainer to the website, and reduced log sizes using event IDs. Furthermore, the team engaged in productive discussions with researchers to outline plans for incremental commits/decommits and participated in a whiteboard session on DeFi and lending protocols.

This week, the **Mithril** team finalized the implementation of the framework to [sign generic types of data](https://github.com/input-output-hk/mithril/pull/908) in the [aggregator](https://mithril.network/doc/mithril/mithril-network/aggregator) and the [signer](https://mithril.network/doc/mithril/mithril-network/signer) nodes. They also updated the runtime of the aggregator to handle open messages associated with the available types, and evolved the REST API of the aggregator to [deliver the artifacts](https://github.com/input-output-hk/mithril/pull/924) for these types. Additionally, they have upgraded the network [explorer](https://mithril.network/explorer?aggregator=https%3A%2F%2Faggregator.release-preprod.api.mithril.network%2Faggregator) in order to [display the artifacts](https://github.com/input-output-hk/mithril/pull/928) and certificates for the different types of data.

Finally, the team started implementing the new [stake distribution computation](https://github.com/input-output-hk/mithril/pull/921) available from Cardano node v.8.0.0 (along with the backward compatibility for previous 1.35.x versions).

### VOLTAIRE

This week in **Voltaire**, the conversations on [CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md) continue with the first workshops starting this weekend!

The workshops, which will take place from May to July, will explore the latest developments in Cardano's on-chain governance proposed in CIP-1694. The in-person workshops will take place in over 20 locations worldwide, giving attendees the opportunity to network, confer, and collaborate with their local Cardano communities. On top of that, there will be over 25 virtual workshops, further opening opportunities to those who cannot attend in person.

An [interactive map](https://voltaire.essentialcardano.io/) and [further details](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) are available on Essential Cardano. 

### CATALYST

Last week, the **Project Catalyst** team held its 126th town hall meeting. You can watch a full [recording here](https://www.youtube.com/watch?v=z6hbCTpdNOs). During the meeting, the projects presented their latest completed work, including Ada Quest and the Decentralized Music Platform (DEMU) preview. If you're interested in joining the next town hall, they're held at 5pm every Wednesday on both [YouTube](https://www.youtube.com/playlist?list=PLnPTB0CuBOByRhpTUdALq4J89m_h7QqLk) and Zoom. You can find the [invitation link here](http://bit.ly/catalyst-townhall), and the next one is scheduled for May 24th. Additionally, if you're curious about the status of funded projects, you can check out [projectcatalyst.io/funds](//projectcatalyst.io/funds). 

### EDUCATION

This week, the **Education** team worked on preparing a feedback survey for participants in the 4th iteration of the Plutus Pioneer program, as well as an internal retrospective. They are also planning the next in-person Haskell course for later this year and preparing content for the Cardano Days workshops planned for the summer. Additionally, the team is focusing on writing sections for _Mastering Cardano_.

![](https://ucarecdn.com/de46e5ba-ef18-4405-8f1a-1cad62fa707d/)

### コアテクノロジー

**ネットワーキング**チームは、ルートピアと台帳ピアを切り替える新しい方法に取り組むとともに、[Eclipse回避](https://input-output-hk.github.io/cardano-updates/2023-05-12-network/#detailed-summary)への取り組みを続けました。ハンドシェイクプロトコルの変更、フレーキーテストの改良、NodeToNodeVersionDataとNodeToClientVersionDataのCDDL仕様の追加も行いました。CIを改良し、CHAPに新しいパッケージをリリースするプロセスを自動化しました。

この2週間、**コンセンサス**チームは研究チームやネットワークチームと協力して、Ouroboros Genesisの設計のさらなる改良に取り組んできました。これは、Genesis選択ルール、候補ルール、ルートピアの使用に影響します。詳しくは[このセクション](https://input-output-hk.github.io/cardano-updates/2023-05-17-consensus/#genesis)をご覧ください。

UTXO-HDプロトタイプに関しては、DBロックメカニズムを強化するプルリクエストを作成しました。メインブランチからメモリープールの公平性向上を移植するプロセスを開始し、キャンセル可能なモノイドを実装する新しいオープンソースライブラリーを統合しました。この統合によりコードが簡素化され、パフォーマンスがわずかに向上します。

不変[DBサーバー](https://github.com/input-output-hk/ouroboros-consensus/pull/68)をリリースすることで、ツールの機能強化を行いました。このサーバーは、テストとベンチマークに使用できます。リカバリーとベンチマークのシナリオに役立つ[db-truncater](https://github.com/input-output-hk/ouroboros-consensus/pull/70)プログラムを開発しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Daedalus**チームは、CoinGecko APIからのADA換算率を確実に提供するプロキシサーバーの作業を完了しました。現在、新しいエンドポイントに切り替えるDaedalusのリリースを準備しています。 

**Lace**チームは、Trezorとブラウザー内アプリとの統合に引き続き取り組み、コミュニティの要望に応じたレイアウトの改善に取り組み始め、一部のオープンソース機能に取り組みました。Laceで使用されているSDK、cardano-js-sdkはオープンソースです。詳細は、[この記事](https://www.lace.io/blog/cardano-js-sdk-empowering-the-community-through-open-source)をご覧ください。

デスクトップ版の開発作業は進行中です。マルチ委任プロジェクトのフレームワークを確立し、ビルドプロセス（CI）と統合するために必要なコンポーネントを追加しました。cardano-js-sdkで[CIP-17](https://cips.cardano.org/cips/cip17/)を実装するプロセスを強化しました。

**Adrestia**チームは、Balance TXライブラリーの分離、データベースの強化、マルチシグウォレット委任機能の仕上げに取り組みました。

### スマートコントラクト

**Plutus**ツールチームはMarconiのバグを解決し、AddressUtxoインデクサーの正確性をCardano-db-syncとの比較により検証することに焦点を当てました。AddressUtxoインデクサー内の同期速度の低下についても調査しています。バーンしたトークンのイベントをMintBurnインデクサーからのみ取得するようにし、スタンドアロンエミュレーターとAtlasの統合を検討しました。スタンドアロンエミュレーター用に明確に定義されたHaskellインターフェイスを開発することも目標に含まれています。

Plutus Coreチームは、型なしPlutus Coreに対してFloat Delayと呼ばれる最適化パスを実装し、プログラムのサイズとコストを大幅に改善しました。また、sums-of-productsのPlutus Core仕様を更新し、AGDAでsums-of-productsの形式化に取り組んでいます。

**Marlowe**チームはMarloweのGHCI環境を更新し、再テストし、安定性と機能性を確保しました。コントラクトのインクリメンタルロードとマークル化をサポートする[プロトコル](https://github.com/input-output-hk/marlowe-cardano/pull/574)を実装し、Marlowe Playgroundリポジトリ用のCucumberテストフレームワークを設定し、Marloweバリデーターのバージョンを最小限の依存関係で作成しました。 

新しいドキュメントサイトへの取り組みを続けました。

### Basho( スケーリング)

**Hydra**チームは複数のマイルストーンを達成しました。特筆すべきは、[最初のメインネット対応Hydraノードバージョンのリリース](https://twitter.com/ch1bo_/status/1656679454570340355)です。ロールバック処理の一貫性のなさに対処することに焦点を当て、ウェブサイトに[Hydraノードアーキテクチャー](https://hydra.family/head-protocol/core-concepts/architecture/)の説明を追加し、イベントIDを使用してログサイズを削減しました。インクリメンタルコミット/デコミットの計画を概説するために研究者との生産的な議論をし、DeFiとレンディングプロトコルに関するホワイトボードセッションに参加しました。

**Mithril**チームは、[アグリゲーター](https://mithril.network/doc/mithril/mithril-network/aggregator)ノードと[署名者](https://mithril.network/doc/mithril/mithril-network/signer)ノードで[汎用データ型に署名する](https://github.com/input-output-hk/mithril/pull/908)ためのフレームワークの実装を完了しました。利用可能な型に関連付けられたオープンメッセージを処理するようにアグリゲーターのランタイムを更新し、これらの型の[アーティファクトを配信](https://github.com/input-output-hk/mithril/pull/924)するよう、アグリゲーターのREST APIを進化させました。さまざまなデータ型の証明書と[アーティファクトを表示](https://github.com/input-output-hk/mithril/pull/928)するために、ネットワーク[エクスプローラー](https://mithril.network/explorer?aggregator=https%3A%2F%2Faggregator.release-preprod.api.mithril.network%2Faggregator)をアップグレードしました。

Cardanoノードv.8.0.0から利用可能な新しい[ステーク分布計算](https://github.com/input-output-hk/mithril/pull/921)の実装を始めました（前1.35.xバージョンとの下位互換性もあり）。

### VOLTAIRE

Voltaireについては、[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)に関するディスカッションが続いており、今週末には最初のワークショップが始まります。

5月から7月まで開催されるワークショップでは、CIP-1694で提案されたCardanoのオンチェーンガバナンスの最新の動向を検討します。対面式のワークショップは世界各地の20拠点で開催され、参加者は地元のCardanoコミュニティとのネットワーク作り、協議、コラボレーションの機会を得ることができます。さらに、25の仮想ワークショップも開催され、直接参加できない方々にもさらなる機会を提供します。

[インタラクティブマップ](https://voltaire.essentialcardano.io/)と[詳細情報](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up)は、Essential Cardanoをご覧ください。 

### CATALYST

**Project Catalyst**チームは126回目のタウンホールミーティングを開催しました。[詳細はこちら](https://www.youtube.com/watch?v=z6hbCTpdNOs)からご覧ください。ミーティングでは、Ada QuestやDEMU（分散型音楽プラットフォーム）のプレビューなど、最新の完了済みプロジェクトが発表されました。タウンホールは毎週日本時間木曜日の午前2時から、[YouTube](https://www.youtube.com/playlist?list=PLnPTB0CuBOByRhpTUdALq4J89m_h7QqLk)とZoomで開催されています。参加をご希望の方は、この[招待リンク](http://bit.ly/catalyst-townhall)から登録してください。次回は5月24日に予定されています。資金提供されたプロジェクトの進捗状況に興味がある場合は、[projectcatalyst.io/funds](//projectcatalyst.io/funds)で確認できます。 

### 教育

**教育**チームは、第4回Plutusパイオニアプログラムの参加者向けのアンケートと社内反省会の準備に取り組みました。今年後半には対面型Haskellコースを計画しており、夏に予定されているCardano Daysワークショップのコンテンツの準備も行っています。Mastering Cardano（Cardanoを極める）の各セクションの執筆にも注力しています。
