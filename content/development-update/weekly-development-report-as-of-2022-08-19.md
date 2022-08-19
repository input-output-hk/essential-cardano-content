---
title: Weekly development report as of 2022-08-19
tags:
  - Weekly development updates
  - Statistics
  - Development
url: ""
image: https://ucarecdn.com/194fe60b-1d9b-4e17-95b3-a44e9a7c604b/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams continued preparing for the Vasil upgrade. Following up the node v.1.35.3 release, the teams also deployed DB Sync v.13.0.4, Cardano Rosetta v.1.8.1, Cardano Addresses v.3.12.0, and Cardano Wallet v.2022-08-16. The serialization library is ready, and the teams continue upgrading other components, including token registry, GraphQL, and Cardano Explorer. Vasil functionality testing is ongoing in the devnet, preview, and pre-production [environments](https://docs.cardano.org/cardano-testnet/getting-started/#environments). The developer community is encouraged to upgrade their nodes and other components to the [latest versions](https://docs.cardano.org/tools/comp-matrix) in preparation for the mainnet release. 

Work is ongoing on UTXO HD development. The team re-implemented in-memory settings, worked on benchmarking and mempool properties investigation, and added test coverage reports for the UTXO HD codebase. Finally, the team started working on the implementation of ChainSync Jumping within the Genesis work scope. 

### WALLETS AND SERVICES 

This week, the **Daedalus** team worked on regression tests using the latest node v.1.35.3 to release the upcoming versions for new testing and production environments (pre-production, preview, and mainnet).  

Development work is ongoing on the **Lace** desktop features. The team is finalizing the transaction flow in the full-node mode and ‘Balance’ screen improvements. They also worked on the implementation of the stake pool provider.

The **Adrestia** team worked on updating Adrestia components for the upcoming hard fork. They released Cardano Rosetta v.1.8.1 and are in the process of releasing Vasil-compatible versions of cardano-wallet and GraphQL. Finally, they kept preparing the cardano-js-sdk for production, implementing multisig (shared wallets) and light mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the support for multiple language versions, testing, and documentation improvements. They also extended the transaction library with Babbage features, added integration tests for constraints, and fully replaced the custom ledger validation rules with those from cardano-ledger. 

The **Marlowe** team created the on-chain transaction specification for Marlowe and finished drafting the Isabelle specification. They also worked on the design of Marlowe contract history, explored alternatives for template constraints extension for Extended Marlowe, added development Nix shells to `marlowe-cardano`, and more tests for `MarloweParams`/`IntervalError`. Finally, the team updated Marlowe and Actus test suites on the cardano-1.35 branch and ran the first Marlowe contracts in Babbage on the public testnet. 

### BASHO (SCALING)

This week, the **Hydra** team continued working on code updates following the reference script implementation. They also made progress in getting ‘dynamically configurable peers’ in the system. The team extended the network layer with a `modifyPeer` function, which allows the addition or removal of network peers dynamically, effectively restarting all network connections. Finally, they worked on adding some meta-information to each page of the user manual to keep translations up-to-date.

  
![](https://ucarecdn.com/666622d8-3f65-4613-931e-d38c557f0771/)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilアップグレードの準備を続けました。ノードv.1.35.3のリリースに続き、DB Sync v.13.0.4、Cardano Rosetta v.1.8.1、Cardano Addresses v.3.12.0、Cardano Wallet v.2022-08-16をデプロイしました。シリアル化ライブラリーは準備を終え、トークンレジストリ、GraphQL、Cardanoエクスプローラーなど、その他のコンポーネントのアップグレードを進めています。Vasil機能のテストは、DevNet、プレビュー、プリプロの[各環境](https://docs.cardano.org/cardano-testnet/getting-started/%23environments)で進行中です。開発者コミュニティには、メインネットリリースに向けて、ノードや他のコンポーネントを[最新バージョン](https://docs.cardano.org/cardano-testnet/getting-started/%23environments)にアップグレードすることが推奨されています。 

UTXO HD開発作業は進行中です。インメモリー設定を再実装し、ベンチマークおよびメモリープールプロパティの調査に取り組み、UTXO HDコードベースのテストカバレッジレポートを追加しました。Genesisの作業領域にChainSync Jumpingを実装する作業も始めました。 

### ウォレットとサービス 

**Daedalus**チームは、予定されている新しいテストおよび本番環境（プリプロ、プレビュー、メインネット）用バージョンリリースのため、最新ノードv.1.35.3を使用したリグレッションテストに取り組みました。  

**Lace**デスクトップ機能の開発作業は進行中です。フルノードモードのトランザクションフローと「残高」画面の改良は仕上げに入っています。その他、ステークプールプロバイダーの実装作業にも取り組みました。

**Adrestia**チームはハードフォークに向けたAdrestiaコンポーネントの更新に取り組みました。Cardano Rosetta v.1.8.0をリリースし、現在cardano-walletとGraphQLのVasil対応バージョンのリリース準備を進めています。本番環境のcardano-js-sdk、cardano-walletへマルチシグ（ウォレットの共有）機能とライトモード機能を実装する準備も引き続き進めています。

### スマートコントラクト

**Plutus**チームは、多言語バージョンのサポート、テスト、ドキュメントの改良に取り組みました。transactionライブラリーをBabbage機能で拡張し、制約用の統合テストを加え、カスタム台帳の検証ルールをcardano-ledgerのものに完全に置き換えました。 

**Marlowe**チームはMarloweのオンチェーントランザクション仕様を作成し、Isabelle仕様のドラフトを仕上げました。Marloweコントラクト履歴の設計に取り組み、 Extended Marlowe用のテンプレート制約拡張の代替案を検討し、開発Nixシェルをmarlowe-cardanoに追加し、MarloweParams/IntervalErrorのテストを追加しました。cardano-1.35ブランチのMarloweとActusテストスイートを更新し、パブリックテストネットでBabbageにおける最初のMarloweコントラクトを実行しました。 

### Basho( スケーリング)

**Hydra**チームは、参照スクリプト実行を受け、コードの更新作業を続けました。システムに「動的に設定可能なピア」を取得する作業も進んでいます。ネットワーク層をmodifyPeer関数で拡張しました。これは、ネットワークピアの動的な追加または削除を可能にし、実質的にすべてのネットワーク接続を再起動するものです。翻訳を最新に保つために、ユーザーマニュアルの各ページにメタ情報を追加する作業を行いました。
