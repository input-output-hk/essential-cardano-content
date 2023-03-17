---
title: Weekly development report as of 2023-03-17
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/02f0108e-c846-4964-986a-c16a1b490d5c/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on node, ledger, and networking improvements.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

Work is ongoing on the **Lace** desktop development. The team improved the error handling of CIP-30 DApps operations, fixed issues with signing CIP-30 transactions using hardware wallets, and added a friendly onboarding screen for users who want to use the local node to send transactions.

The **Adrestia** team worked on extending the multi-signature feature with delegation functionality in cardano-wallet. They also worked on extracting the transaction balancing library and did some refactoring of the DBLayer to improve performance and memory usage.

The team is currently working on performance optimization of cardano-services in cardano-js-sdk.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the Marconi MVP development. They created a dedicated repository for it and evaluated and implemented Marconi notifications. They also added test performance optimizations for cardano-api and Plutus end-to-end testing, and evaluated the need for building a standalone emulator that doesn’t require a contract monad. 

Work is ongoing on the Plutus debugger, script capacity increase, and documentation improvements. 

The **Marlowe** team made significant [improvements](https://github.com/input-output-hk/marlowe-cardano/pull/529) to the golden tests for the Marlowe validator to make them more comprehensive and fixed an [issue](https://github.com/input-output-hk/marlowe-playground/pull/21) with incorrect build instructions for the Marlowe Playground. They also rewrote a theorem to support multiple token asset preservation, resolved a discrepancy with division rounding between the Isabelle specification and PureScript, and updated content for the [Getting Started](https://github.com/input-output-hk/marlowe-doc/tree/main/docs/getting-started) pages. 

Finally, the team [added the escrow](https://github.com/input-output-hk/marlowe/pull/163) contract to the examples suite in the specification and set up the end-to-end CLI tests infrastructure. 

### BASHO (SCALING)

The **Hydra** team addressed issues with committing complex UTXOs into a Hydra head, prepared the Hydra node to support mainnet, and improved the test suite of the Hydra Plutus scripts. Also, work is ongoing on the Hydra V1 specification, the team improved the specification on the reviewers' feedback, and refined the graphical notation to be more transaction focused.

The **Mithril** team are running the last milestones to make the Mithril beta version available on mainnet. The signer and aggregator parts of the system are thoroughly tested thanks to the enthusiastic participation of the SPO community, and a security audit will soon be undertaken on the more sensitive parts of the system. 

The team released a new [2310.0](https://github.com/input-output-hk/mithril/releases/tag/2310.0) distribution that activates the era switch mechanism. They also started implementing the migration of the aggregator stores to a relational design with the first adaptation of the stake pool store. Additionally, they worked on automatically handling the network API version from the Open API specifications, optimized the stake distribution computation that now happens only once per epoch, and also enhanced the client multi-platform workflow to test the Docker images.

The team is now seeking more feedback and testing from a client perspective.

If you are used to spinning up Cardano nodes on preview and pre-production testing environments and would like to significantly reduce the sync time, you can benefit from using a Mithril Client to download a certified snapshot of the node DB:

*   [Clients are available](https://github.com/input-output-hk/mithril/releases) for Linux, OS X, Windows, and as Docker images
    
*   [Documentation](https://mithril.network/doc/manual/welcome/) is available on the Mithril website
    
*   Share your feedback in [Discord](https://discord.gg/5kaErDKDRq) or [GitHub](https://github.com/input-output-hk/mithril/discussions) discussions
    

### GOVERNANCE 

The publication of CIP-1694, describing Cardano’s future on-chain governance system, has been received with anticipation and excitement. In February 2023, IOG, the Cardano Foundation, and Emurgo hosted a community workshop at IOG’s offices in Longmont, Colorado. The workshop sparked deep engagement and insight gathering, which captured inputs from a broad spectrum of community interests and experiences.  

This week a large update to [CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md) was pushed on GitHub. CIP-1694 continues to spark conversations and thoughts across the community and we encourage you to engage and comment directly in GitHub.

  

![](https://lh6.googleusercontent.com/wGKb7b4obvUymt0bav1pzWB1L4P_7n2QmWfLDvc2xk68nwH7EzU-85RyLIvDqmtmxhOKrxeEhbQeUpKx7xk0HldSiRhWHwdGKPFEIgZboa8hy75xKayJvsNpC9ryi5Ji0VACwNsULGnVG4J-KVvOSvI)

### コアテクノロジー

コアテクノロジーチームは、ノード、台帳、ネットワークの改良への取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**デスクトップの開発作業は進行中です。CIP-30 DApp操作のエラー処理を改善し、ハードウェアウォレットを使用してCIP-30トランザクションに署名する際の問題を修正し、ローカルノードを使用してトランザクションを送信したいユーザーのための使いやすいオンボーディング画面を追加しました。

**Adrestia**チームは、cardano-walletのマルチシグ機能を委任機能で拡張する作業に取り組みました。トランザクション残高ライブラリーの抽出作業、パフォーマンスとメモリー使用量を改善するためのDBLayerのリファクタリングも行いました。

現在、Cardano-js-sdkにおけるcardano-servicesのパフォーマンス最適化に取り組んでいます。

### スマートコントラクト

**Plutus**チームはMarconi MVPの開発作業を続けました。専用リポジトリを作成し、Marconi通知を評価して実装しました。ｃardano-apiとPlutusのエンドツーエンドテストテストのテストパフォーマンスの最適化を追加し、Contractモナドを必要としないスタンドアロンエミュレーターの構築の必要性を評価しました。 

Plutusデバッガー、スクリプト容量の増加、ドキュメントの改善の各作業は進行中です。 

**Marlowe**チームはMarloweバリデーターのゴールデンテストを大幅に[改良](https://github.com/input-output-hk/marlowe-cardano/pull/529)して包括性を高め、Marlowe Playgroundのビルド手順が不正確だった[問題](https://github.com/input-output-hk/marlowe-playground/pull/21)を修正しました。複数のトークン資産の保存をサポートするように定理を書き直し、Isabelle仕様とPureScriptの除算丸めの不一致を解決し、[Getting Started](https://github.com/input-output-hk/marlowe-doc/tree/main/docs/getting-started)ページの内容を更新しました。 

仕様のサンプルスイートに[エスクロー契約を追加](https://github.com/input-output-hk/marlowe/pull/163)し、エンドツーエンドのCLIテストインフラをセットアップしました。 

### Basho( スケーリング)

**Hydra**チームは、複雑なUTXOをHydra Headにコミットする際の不具合に対処し、Hydraノードのメインネットサポート準備を進め、Hydra Plutusスクリプトのテストスイートを改良しました。Hydra V1仕様の作業も進行中です。レビュワーからのフィードバックに関する仕様を改善し、トランザクションに焦点を当てるようにグラフィック表記を改良しました。

**Mithril**チームは、Mithrilベータ版のメインネットリリースに向け、最後のマイルストンを実行しています。SPOコミュニティの熱心な参加のおかげで、システムの署名者とアグリゲーターの部分は徹底的にテストされ、システムの機密性の高い部分についてセキュリティ監査がまもなく実施されます。 

開発期スイッチメカニズムを有効にする新しい[2310.0](https://github.com/input-output-hk/mithril/releases/tag/2310.0)ディストリビューションをリリースしました。アグリゲーターストアのリレーショナル設計への移行の実装も開始し、ステークプールストアの初回適応を実施しました。Open API仕様からのネットワークAPIバージョンの自動処理に取り組み、現在エポックごとに1回しか発生しないステーク分布計算を最適化し、Dockerイメージをテストするためのクライアントマルチプラットフォームワークフローを強化しました。

現在、クライアントの観点から、より多くのフィードバックとテストを求めています。

プレビューおよびプリプロテスト環境でCardanoノードをスピンアップすることに慣れており、同期時間を大幅に短縮したい場合は、Mithril Clientを使用してノードDBの認定スナップショットをダウンロードすることをお勧めします。

*   [クライアントは、Linux、OS X、Windows、およびDockerイメージとして使用できます](https://github.com/input-output-hk/mithril/releases)
    
*   [ドキュメント](https://mithril.network/doc/manual/welcome/)はMithrilのウェブサイトで入手できます
    
*   [Discord](https://discord.gg/5kaErDKDRq)または[GitHub](https://github.com/input-output-hk/mithril/discussions)ディスカッションでフィードバックをお寄せください
    

### ガバナンス 

Cardanoの将来のオンチェーンガバナンスシステムを説明するCIP-1694の公開は、期待と興奮を持って受け入れられました。2023年2月、IOG、Cardano財団、Emurgoは、コロラド州ロングモントにあるIOGのオフィスでコミュニティワークショップを開催しました。ワークショップは、コミュニティの幅広い関心や経験からのインプットを捉え、深いエンゲージメントと洞察の収集を促しました。  

  
今週、[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)の大規模な更新がGitHubにプッシュされました。CIP-1694はコミュニティ全体で会話や考えを巻き起こし続けています。ぜひGitHubで直接コメントしてください。
