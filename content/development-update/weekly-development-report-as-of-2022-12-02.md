---
title: Weekly development report as of 2022-12-02
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/1990908a-0119-45ad-b3ff-f248d87890d8/
image_text: ""
---

### CORE TECHNOLOGY

Over the past couple of weeks, the **networking** team worked on the stake-driven data diffusion release for relays with robust and optimized peer selection, also known as P2P. It has been determined that the earlier communicated performance regression affects block producers only, so running this release on such nodes _is not recommended_. Further investigation is required to find the cause of this regression. On IOG's benchmarking cluster, the team has seen good performance improvements in block propagation. The cluster is running a static topology with valency 6 (each node is connected to 6 other nodes), where each of the 50 nodes is a block producer. The setup of this network is the same as on mainnet. Overall, there is a 40-50% performance improvement in block propagation compared to the same cluster deployed with the same topology with non-P2P nodes. 

Finally, the team worked on several bug fixes, reviewed peer-sharing functionality, and held a guest lecture on ‘Avoiding System Catastrophes’ at [UCLouvain](https://uclouvain.be/en/index.html).

The **consensus** team merged improvements to the monadic cursor API needed to implement LMDB range reads, which is in turn required for implementing the UTXO HD feature. They added tables to several tests in the UTXO HD feature, increasing confidence in the correctness of the prototype. The mempool property tests are close to being completed, and the team also finished the LSM tree-tuning algorithm.

Work is ongoing on the Genesis design. The team started simplifying the BlockFetch logic taking into account CSJ-specific workloads.

Finally, they documented the block diffusion pipelining feature, and added a high-level overview of consensus to the top level documentation of [ouroboros-network](https://github.com/input-output-hk/ouroboros-network/#readme).

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team continued working on the Cicero migration.

Work is ongoing on the **Lace** desktop development. The team successfully tested transaction submission via a local node and progressed on the start and stop feature in the settings page of the cardano-node. Additionally, they ran Wingsrider-DApp in the Lace desktop application connecting to the internal wallet and successfully performing a swap transaction.

The **Adrestia** team released cardano-rosetta v.2.0.0-beta.1. This release bumps cardano-serialization-lib to v.11.1.1.

The team continues working on getting cardano-js-sdk ready for production, and also on implementing the multisig (shared wallets) feature, and the first implementation of the build-balance library (balanceTx) in cardano-wallet.

Finally, they're working on updating cardano-wallet to support node 1.35.4.

### SMART CONTRACTS

This week, the **Plutus** team worked on the completion of SECP-256k1 builtin for Plutus, script capacity increase, and the Plutus debugger MVP. The tools team created a release for plutus-apps that supports all Babbage features. They are now continuing building indexers with Marconi and are also working on technical debt by supporting cardano-api in the emulator.

The **Marlowe** team worked on endpoints for the REST API. Particularly, they created: POST /contracts for building an unsigned contract creation transaction; GET /contracts/:contractId for getting contract state; PUT /contracts/:contractId for submitting a signed creation transaction for a contract; GET /contracts/:contractId/transactions for obtaining the transaction history for a contract; and POST /contracts/:contractId/transactions for creating an unsigned transaction to interact with a contract. 

The team also added a unit property-based test for solveInitialTxBodyContent, kind annotation to protocol tags, and tests for marlowe-protocol messages serialization.

### BASHO (SCALING)

Last week, the **Hydra** team attended the Cardano Summit in Lausanne, where Sebastian Nagel, technical manager of Hydra at IOG, gave a presentation about Hydra, and the whole team connected with the Cardano community. After the public event, the team also conducted a workshop, which provided room for a retrospective and various planning sessions discussed collaboratively on different ideas.

The **Mithril** team worked on finalizing the release process by adding new features: publishing their cryptographic library to the Rust community, adding node versions manifest in the release notes, and signing the binaries embedded in the distributions. They also deprecated the declarative signer node registration that will be decommissioned in a few weeks, and completed the automatic store upgrade process for the signer and aggregator nodes.

Finally, the team continued working on the redaction of the CIP that will allow the decentralization of Mithril by using the Cardano node networking layer.

### GOVERNANCE

This week **Project Catalyst**’s Town Halls restarted. Over 100 attendees joined directly to hear the latest from the team, participate in conversations about the Voltaire CIP-1694 and discuss ideas for improving proposal assessment. 

With 2023 on the horizon, the complexity of Project Catalyst, and the importance of the funds it distributes, much consideration is needed on how processes should work to support future growth. It doesn’t make sense to attempt to rebuild the ship as it sails. Given the above, and ahead of the next funding cycle, some time is needed to streamline some of the Catalyst processes and procedures to ensure Catalyst's stable and continued growth within the Cardano ecosystem. This means Fund9 accounts for the last fund of 2022, with Fund10 expected to launch around Q1 2023.  
  
That being said, the conversations never stop. Town Halls continue up to December 14th, 2022 before taking a festive break and restarting in the New Year. Register [here](https://bit.ly/3rCicSR) to join the next two Town Halls on December 7th and 14th.

![](https://lh3.googleusercontent.com/ShUWNUUROR1FDwPf_wJZIgYxPYYm-nuOKLiy8z8lz0i3H8MkqX7_iDGTPSizijWiifMwa18u4Qia7jFCO3CgH9ArDtL6T8PoHTT6ORUPGma_ViriEAfG8YbZ1ETRzUKwYm0ZiruNyC8V6X3HRr8JTVOh31tT9kqRhs29gRxVHmwfjyP1XqZ-A7yZlEdt-aha)

### コアテクノロジー

この数週間、**ネットワーキング**チームは、堅固で最適化されたピア選定を伴うリレー用ステーク駆動型データ拡散、別名P2Pのリリースに取り組みました。以前に報告されたパフォーマンスの低下はブロック生成者のみに影響を与えることが判明したため、このリリースをそのようなノードで実行することは_推奨されません_。この低下の原因を見つけるには、さらなる調査が必要です。IOGのベンチマーククラスターでは、ブロック伝播にパフォーマンスの改善が見られました。クラスターは、バレンシー6の静的トポロジーを実行しており（各ノードは他の6つのノードに接続）、50個のノードのそれぞれがブロック生成者です。このネットワーク設定は、メインネットと同じです。全体的に、非P2Pノードの同じトポロジーでデプロイされた同じクラスターと比較して、ブロック伝播に40～50%のパフォーマンスの改善が見られています。 

複数のバグを修正し、ピア共有機能をレビューし、[UCLouvain](https://uclouvain.be/en/index.html)で「システム大惨事の回避」についてゲスト講義を行いました。

コンセンサスチームは、LMDB範囲読み取りの実装に必要なモナディックカーソルAPIの改善をマージしました。これは、UTXO HD機能の実装に必要です。UTXO HD機能のいくつかのテストにテーブルを追加し、プロトタイプの正確さに対する信頼を高めました。メモリープールプロパティテストは最終段階に入っており、LSMツリー調整アルゴリズムも完成させました。

Genesisの設計作業は進行中です。CSJ固有のワークロードを考慮しつつ、BlockFetchロジックの簡素化を開始しました。

ブロック拡散パイプライン機能を文書化し、[ouroboros-network](https://github.com/input-output-hk/ouroboros-network/%23readme)のトップレベルのドキュメントにハイレベルのコンセンサス概要を追加しました。

通常通り、異なるチームからの詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、引き続きCiceroの移行に取り組みました。

**Lace**デスクトップの開発作業は進行中です。ローカルノード経由でのトランザクション送信テストを成功させ、cardano-nodeのセッティングページでスタートおよびストップ機能を進めました。内部ウォレットと接続したLaceデスクトップアプリケーションでWingsrider-DAppを実行し、スワップトランザクションを無事に実行しました。

**Adrestia**チームはcardano-rosetta v.2.0.0-beta.1をリリースしました。本リリースでは、cardano-serialization-libがv.11.1.1にバンプされます。

cardano-js-sdkを本番環境にする作業、マルチシグ（共有ウォレット）機能の実装作業、build-balanceライブラリー（balanceTx）のcardano-walletへの初回実装は継続しています。

cardano-walletをサポートノード1.35.4に更新しています。

### スマートコントラクト

**Plutus**チームはPlutus用SECP-256k1ビルトインの仕上げ、スクリプト容量の増加、PlutusデバッガーMVPに取り組みました。ツールチームは、Babbage全機能をサポートするplutus-appsのリリースを作成しました。引き続きMarconiインデクサーの構築を続け、エミュレーターでcardano-apiをサポートすることによって技術負債に取り組んでいます。

**Marlowe**はREST APIのエンドポイントに取り組みました。とくに以下を作成しました。POST /contracts 未署名のコントラクト作成トランザクションの構築、GET /contracts/:contractId コントラクトの状態を取得、PUT /contracts/:contractId コントラクト用に署名済み作成トランザクションの送信、GET /contracts/:contractId/transactions コントラクト用のトランザクション履歴を取得、POST /contracts/:contractId/transactions コントラクトとやり取りする未署名トランザクションの作成。 

solveInitialTxBodyContentのプロパティベースのユニットテスト、プロトコルタグの種類の注釈、marlowe-protocolメッセージのシリアル化のテストを追加しました。

### Basho( スケーリング)

**Hydra**チームはローザンヌでCardanoサミットに参加し、IOGのHydraテクニカルマネージャーのSebastian NagelがHydraのプレゼンテーションを行い、チーム全員がCardanoコミュニティと繋がりました。パブリックイベント後、ワークショップも主催し、さまざまなアイデアについて協力して話し合う振り返りセッションやさまざまなプランニングセッションの場を提供しました。

**Mithril**チームはリリースプロセスの最終段階に取り組みました。ここでは、Rustコミュニティに暗号理論ライブラリーを公開する、リリースノートにノードバージョンのマニフェストを追加する、ディストリビューションに組み込まれたバイナリに署名するという新機能を加えています。数週間で廃止される宣言的な署名者ノード登録を非推奨にし、署名者ノードとアグリゲーターノードの自動ストアアップグレードプロセスを完了しました。

Cardanoノードネットワーク層を使ってMithrilの分散化を可能にするCIPの改訂に引き続き取り組みました。

### ガバナンス

**Project Catalyst**のタウンホールが再開されました。100人を超える参加者は、チームからの最新情報を直接耳にし、Voltaire [CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694)についての話し合いに参加し、提案の評価を改善するアイデアについて議論しました。 

2023年が近づく中、Project Catalystの複雑性とこれが分配する資金を考えると、今後の成長を支えるためにどのようにプロセスが機能するべきかを熟考することが必要です。航海中に船を再構築しようとするのは理屈に合いません。上記を考慮し、次のファンドサイクルに先立って、Cardanoエコシステム内におけるCatalystの安定した継続的な成長を確保するために、Catalystのプロセスと手順の一部を合理化するには、ある程度の時間が必要です。これは、Fund9が2022年最後のファンドとなり、Fund10は2023年第1四半期に開始される予定であることを意味します。  
  
とは言え、会話が途切れることはありません。タウンホールは2022年12月14日まで続き、その後年末年始の休みを経て新年に再開されます。12月7日、14日のタウンホールに参加するには、[こちら](https://bit.ly/3rCicSR)で登録してください。
