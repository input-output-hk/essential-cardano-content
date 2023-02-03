---
title: Weekly development report as of 2023-02-03
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/2cf5014b-51ba-456f-a724-04c1ff924eb8/
image_text: ""
---

### CORE TECHNOLOGY

This week, the teams continued preparing for the upcoming Valentine (SECP) upgrade. Last week, the teams released a new node [v.1.35.5](https://github.com/input-output-hk/cardano-node/releases/tag/1.35.5), followed by the [Rosetta v.2.1.0](https://github.com/input-output-hk/cardano-rosetta/releases/tag/2.1.0) release. For the latest progress, track this [upgrade readiness page](https://iohk.zendesk.com/hc/en-us/articles/14669691361433-Ecosystem-readiness-for-the-SECP-upgrade) and see the [compatibility matrix](https://docs.cardano.org/tools/comp-matrix) to stay up to date with the latest releases.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team tested and integrated cardano-node UTXO-HD, a node that stores UTXOs on disk instead of RAM.

Work is ongoing on **Lace** desktop development. The team made UI/UX improvements to DApp link entries and also enhanced the process of local node management. Finally, they fixed several issues after upgrading the new [cardano-js-sdk](https://github.com/input-output-hk/cardano-js-sdk#readme).

If you’re testing Lace in the pre-production testing environment, note that network switching will soon be available. All users will be automatically switched to mainnet at launch, which means that users' wallets will be on Cardano mainnet without having to lift a finger! [Download Lace now](https://www.lace.io/) and get access to mainnet immediately.

The **Adrestia** team released cardano-rosetta 2.1.0. This component is now compatible with the latest Node version (1.35.5). They're also finalizing work to update GraphQL to the latest Node and DBSync versions.

The team is also continuing preparations to release cardano-js-sdk to production.

Finally, they're extending the multi-signature feature with delegation functionality in cardano-wallet and working on DBLayer refactoring to improve performance and memory usage.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the Plutus debugger, script capacity increase (with sums and products also adding [Plutonomy](https://github.com/well-typed/plutonomy#readme) optimizations), and source code built-in documentation. The Plutus tools team kept on building indexers for the [sidechains](https://www.essentialcardano.io/glossary/sidechain-toolkit) project with Marconi, and addressed some technical debt by supporting cardano-api in the emulator. 

This week, the **Marlowe** team added better [error handling](https://github.com/input-output-hk/marlowe-actus-labs/pull/11) for [CIP-30](https://cips.cardano.org/cips/cip30/). They also improved the chain index by [fixing](https://github.com/input-output-hk/marlowe-cardano/pull/437) incorrect output index for a multi-asset output and collateral, and a problem that caused chain index redeemers to sometimes omit or add one byte. The team also analyzed transaction failures from the Marlowe Runtime scalability test, fixed some issues with metadata, documented the [attack surface of Marlowe deployments](https://github.com/input-output-hk/marlowe-cardano/pull/431/files), and implemented a [MarloweSync server](https://github.com/input-output-hk/marlowe-cardano/pull/438) along with persistence for Marlowe Sync. 

Work is ongoing on the [ACTUS](https://play.marlowe-finance.io/doc/marlowe/tutorials/actus-marlowe.html) standards implementation. The team provided information about the ACTUS Labs prototype and ACTUS contract types in the app, and added a simulation of ACTUS contract terms before submitting a contract. They also implemented a long polling for transactions feature, created wireframe low-fidelity documentation pages, and added an ‘Indicator’ option to show the progress of a deployed ACTUS contract.

### BASHO (SCALING)

The **Hydra** team held a monthly review meeting with stakeholders, contributors, and the community. They published a monthly report for [January 2023](https://hydra.family/head-protocol/monthly/2023-01) summarizing the main takeaways and development progress. The team also continued working on the Hydra V1 specification incorporating suggested changes from reviewers. Finally, they started to compute and publish script information on every pull request and on the [website](https://hydra.family/head-protocol/benchmarks/transaction-cost/#script-summary).

The **Mithril** team released a new [2304.1](https://github.com/input-output-hk/mithril/releases/tag/2304.1) distribution that enables the backward/forward compatibility mechanism implemented for seamlessly rolling out soft updates to  Mithril networks. During the qualification phase of this distribution, they identified and fixed a bug that prevented some signers from contributing to multi-signatures. They have also started refactoring the internal stores of the nodes to a relational design.

Finally, the team continued implementing the era behavior switch mechanism that will be used to handle breaking changes that require synchronous updates of the signer nodes.

Work continues on the proof of concept **EVM sidechain testnet,** which will enable developers to [create and deploy](https://www.essentialcardano.io/glossary/sidechain-toolkit) Solidity smart contracts and DApps as well as move test tokens between the environments. To stay tuned, join this [Discord channel](https://discord.gg/inputoutput) and read [this recent blog post](https://iohk.io/en/blog/posts/2023/01/12/iog-launches-a-toolkit-for-developing-custom-sidechains-on-cardano/). The team will also be hosting a sidechains webinar in a few weeks so keep an eye out for that!

  

![](https://lh3.googleusercontent.com/thhqSzGFa2HcMYh9UCF1SVQ4qr78HCLQ0jx8S5QEYCT661HwsrTK65nWHI19s-carW0kCudqXJHuQrhrgX-wOXV_F4CjzRrtEKdydUZCLY909a8E0w4-KYJWk7F0ni13eHIm1RKPTKRJ)

### コアテクノロジー

予定されているバレンタイン（SECP）アップグレードの準備を続けました。先週は、ノード[v.1.35.5](https://github.com/input-output-hk/cardano-node/releases/tag/1.35.5)、続いて[Rosetta v.2.1.0](https://github.com/input-output-hk/cardano-rosetta/releases/tag/2.1.0)をリリースしました。最新の進捗状況は、[アップグレード準備の進捗情報ページ](https://iohk.zendesk.com/hc/en-us/articles/14669691361433-Ecosystem-readiness-for-the-SECP-upgrade)を、また、最新リリース情報は[互換性マトリックス](https://docs.cardano.org/tools/comp-matrix)をチェックしてください。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**は、UTXOをRAMの代わりにディスクに保存するノード、cardano-node UTXO-HDのテストと統合を行いました。

**Lace**デスクトップの開発作業は進行中です。DAppのリンクエントリーのUI/UXを改良し、ローカルノード管理のプロセスを強化しました。新[cardano-js-sdk](https://github.com/input-output-hk/cardano-js-sdk%23readme)のアップグレード後に生じたいくつかの不具合を修正しました。

プリプロテスト環境でLaceをテストしている場合、まもなくネットワークの切り替えが可能になります。全ユーザーは、立ち上げとともに自動的にメインネットに切り替わります。つまり、ユーザーのウォレットは、何の操作をせずともCardanoメインネットに置かれることになります。[いますぐLaceをダウンロード](https://www.lace.io/)して、メインネットに即座にアクセスしましょう。

**Adrestia**チームはcardano-Rosetta 2.1.0をリリースしました。このコンポーネントは、最新のノードバージョン（1.35.5）に対応しています。GraphQLを最新のノードおよびDBSyncバージョンに更新する作業も完了しました。

cardano-js-sdkを本番環境にリリースする準備は続けられています。

cardano-walletのマルチシグ機能を委任機能で拡張し、パフォーマンスとメモリー使用量を改善するためにDBLayerのリファクタリングに取り組みました。

### スマートコントラクト

**Plutus**チームは、引き続きPlutusデバッガー、スクリプト容量の増加（SumとProductで[Plutonomy](https://github.com/well-typed/plutonomy%23readme)の最適化も追加）、ソースコードビルトインの文書化にも取り組みました。Plutusツールチームは、[サイドチェーン](https://www.essentialcardano.io/glossary/sidechain-toolkit)プロジェクト用のMarconiインデクサーの構築を続け、エミュレーターでcardano-apiをサポートすることによって技術負債に対処しました。 

**Marlowe**チームは、[CIP-30](https://cips.cardano.org/cips/cip30/)の[エラー処理](https://github.com/input-output-hk/marlowe-actus-labs/pull/11)を改良しました。マルチ資産アウトプットと担保の不正確なアウトプットインデックス、そして、チェーンインデックスリディーマーが1バイトを省略または追加する場合があるという問題を[修正](https://github.com/input-output-hk/marlowe-cardano/pull/437)してチェーンインデックスを改良しました。Marlowe Runtimeスケーラビリティテストのトランザクション失敗を分析し、メタデータの不具合を修正し、[Marloweデプロイの攻撃対象領域](https://github.com/input-output-hk/marlowe-cardano/pull/431/files)を文書化し、Marlowe Syncの永続性とともに[MarloweSyncサーバー](https://github.com/input-output-hk/marlowe-cardano/pull/438)を実装しました。 

[ACTUS](https://play.marlowe-finance.io/doc/marlowe/tutorials/actus-marlowe.html)標準実装の作業は進行中です。ACTUS LabsのプロトタイプとACTUSコントラクトタイプについての情報をアプリに提供し、コントラクトの送信前にACTUSコントラクト条件のシミュレーションを追加しました。トランザクション機能にロングポーリングを実装し、ローファイワイヤーフレームのドキュメントページを作成し、デプロイされたACTUSコントラクトの進行状況を表示する「Indicator」オプションを追加しました。

### Basho( スケーリング)

**Hydra**チームは、関係者、コントリビューター、コミュニティとのマンスリーレビューミーティングを持ちました。主要点や開発の進捗情報をまとめた[2023年1月](https://hydra.family/head-protocol/monthly/2023-01)の月間報告書を公開しました。レビュワーから提案された変更を盛り込んだ、Hydra V1仕様への取り組みも続けました。すべてのプルリクエストと[ウェブサイト](https://hydra.family/head-protocol/benchmarks/transaction-cost/%23script-summary)で、スクリプト情報の計算と公開を始めました。

**Mithril**チームは、新しい[2304.1](https://github.com/input-output-hk/mithril/releases/tag/2304.1)ディストリビューションをリリースしました。これは、Mithrilネットワークにソフトアップデートをシームレスにロールアウトするために実装された後方/前方互換性を持つメカニズムを有効にするものです。このディストリビューションの認定段階で、一部の署名者がマルチシグに署名できないようになっていたバグを特定し、修正しました。ノートの内部ストアをリレーショナルデザインにリファクタリングする作業も始めました。

署名者ノードの同時更新を必要とする重要な変更を処理するために使用されることになる、開発期動作切り替えメカニズムの実装を続けました。

**EVMサイドチェーンテストネットの**実証概念に関する作業は継続しています。これで、開発者によるSolidityのスマートコントラクトやDAppsの[作成およびデプロイ](https://www.essentialcardano.io/glossary/sidechain-toolkit)、テストトークンの環境間移動が可能になります。情報は、[Discordチャネル](https://discord.gg/inputoutput)に参加するとともに、[最近投稿されたこちらのブログ記事](https://iohk.io/jp/blog/posts/2023/01/12/iog-launches-a-toolkit-for-developing-custom-sidechains-on-cardano/)をご覧ください。数週間以内にサイドチェーンウェビナーも開催予定です。どうぞお見逃しなく。
