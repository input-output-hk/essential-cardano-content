---
title: Weekly development report as of 2022-07-08
tags:
  - Weekly development updates
  - Development
  - Cardano
  - Statistics
url: ""
image: https://ucarecdn.com/6118877b-ba91-4399-a5d5-44b75bdd1f8a/
image_text: Weekly development report as of 2022-07-08
---

### CORE TECHNOLOGY

This week, on July 3 at 20:20 UTC the **IOG teams** hard forked the Cardano testnet to Vasil functionality. You can find out more about Vasil features by going to [Cardano Testnets](https://testnets.cardano.org/en/testnets/cardano/about/testnet-introduction/).

The **node, ledger, and consensus** teams are now in the process of updating dependencies and working closely with SPOs and the community on testnet issue resolution. The teams released DB Sync v.13.0.0, which is compatible with the latest node v.1.35.0, and pre-released a new wallet-backend. They are also working on a new node v.1.35.1, which fixes an issue with snapshot replay.  GraphQL, Rosetta, and Cardano Testnet Explorer will be upgraded following the new node and DB Sync tags. 

Work is ongoing on pipelining maintainability and the addition of tests for added confidence and regression prevention. The **consensus** team also worked on the improvements of BlockFetch and ChainSync client tests and started progress on integration tests for UTXO HD with Daedalus and the Cardano node.

The **networking** team continued working on TCP simulations and typed-protocols reviews. The new version of the cardano-node, which includes the typed-protocol design, has been operating well. Finally, the team reviewed some exit policies and continued improving diffusion tests. 

### WALLETS AND SERVICES 

This week, the **Daedalus** team were preparing for the next Daedalus release supporting Vasil functionality. They also worked on the connection between Lace UI components and the Lace desktop version investigating ways of effective code sharing between Lace’s browser and desktop applications. 

If you haven’t signed up for the **Lace** lightwallet platform updates, make sure to visit the [Lace website](https://www.lace.io/). You will also find the Lace v.1.0 demo explaining how the wallet works. The roadmap includes the development of Lace desktop and mobile versions. 

The **Adrestia** team finished updating Adrestia components for the upcoming hard fork combinator event. The first Vasil-compatible version of cardano-wallet has been released. The team is now preparing for the release of cardano-rosetta and cardano-graphql. Finally, they are preparing the Cardano-js-sdk for production, and designing a new simple HTTP API on top of db-sync.

### SMART CONTRACTS

This week, the **Plutus** team continued refining conformance and mainnet regression tests. They also began working on a new draft of the technical report and investigated coverage and binary format tools. The team is currently updating the Plutus node dependency to create a release candidate v.1.0.0-rc1. Finally, they worked on fixing bugs in the plutus-contract emulator and documenting design decisions.

The **Marlowe** team added a new version to the Marlowe extended source code and a new test framework for ACTUS which works using the corresponding Marlowe contracts. The team added circa 80 new property-based tests for Marlowe semantics and improved the ‘component and modify’ modal in the Marlowe Playground. 

### BASHO (SCALING)

This week, the **Hydra** team mostly worked on upgrading the hydra-node to be fully compatible with the Babbage era (Vasil functionality). Additionally, they prepared for the upcoming release of hydra-node v.0.7.0, which will work on the hard-forked testnet.  

### GOVERNANCE

This week, **Project Catalyst** is in the quality assurance stage, where Proposal Assessors (PA’s) are taking their time to review nearly 1,000 proposals submitted in Fund9. There is still time to participate as a PA in Fund9, if you’re interested sign up [here](https://cardano.ideascale.com).

### 週刊開発レポート　2022年7月8日

### コアテクノロジー

日本時間7月4日5時20分、**IOGチーム**はCardanoテストネットをVasil機能へとハードフォークしました。Vasilの機能の詳細は、[Cardanoテストネット](https://testnets.cardano.org/en/testnets/cardano/about/testnet-introduction/)で確認できます。

**ノード、台帳、コンセンサス**チームは、現在依存関係の更新中であり、SPOやコミュニティと協力してテストネットの不具合の解消に取り組んでいます。最新のノードv.1.35.0対応のDB Sync v.13.0.0をリリースし、新しいwallet-backendをプレリリースしました。スナップショットリプレイに関する不具合を解消する新しいノードv.1.35.1にも取り組みました。GraphQL、Rosetta、Cardanoテストネットエクスプローラーは、新しいノードおよびDB Syncタグに従ってアップグレードされる予定です。

パイプラインの保守性と、信頼性とデグレ防止を強化するためのテストの追加に関する作業が進行中です。**コンセンサス**チームはBlockFetchとChainSyncのクライアントテストの改良に取り組み、UTXO HDのテストとDaedalusおよびCardanoノードとを統合する作業を進めました。

**ネットワーキング**チームは、TCPシミュレーションの作業と型付きプロトコルの査読を続けました。型付きプロトコルの設計を含むcardano-node新バージョンは順調に進んでいます。一部の出口戦略のレビューを行い、拡散テストの改良も続けました。 

### ウォレットとサービス 

**Daedalusチーム**は、Vasil機能をサポートする次のDaedalusリリースを準備しました。Lace UIコンポーネントとLaceデスクトップバージョンとの接続に取り組み、Laceのブラウザーとデスクトップアプリケーション間で効率よくコードを共有する方法について調査しました。 

**Lace**ライトウォレットプラットフォームの更新情報に未登録の場合は、[Laceウェブサイト](https://www.lace.io/)をご覧ください。ここには、ウォレットの使い方を説明するLace v.1.0の実演動画も掲載されています。ロードマップには、Laceデスクトップバージョンとモバイルバージョンの開発が含まれます。 

**Adrestia**チームは、予定されているハードフォークコンビネーターイベントに向けた、Adrestiaコンポーネントの更新を完了しました。cardano-walletの初回Vasil対応バージョンをリリースしました。 

現在、cardano-rosettaとcardano-graphqlのリリース準備を行っています。

cardano-js-sdkを本番環境にする準備、db-sync上に構築する新しいシンプルなHTTP APIの設計も行っています。

### スマートコントラクト

**Plutus**チームは適合性テストとメインネットのリグレッションテストの改良を続けました。技術レポートの新たな草稿に取り組み、カバレッジおよびバイナリーフォーマットツールの調査を行いました。現在、リリース候補版v.1.0.0-rc1を作成するために、Plutusノードの依存関係を更新しています。plutus-contractエミュレーターのバグの修正と設計上の決定の文書化に取り組みました。

**Marlowe**チームは、Marlowe拡張ソースコードに新バージョンを加え、対応するMarloweコントラクトを使用して機能するACTUS用に新しいテストフレームワークを追加しました。およそ80のMarloweセマンティックにプロパティベーステストを加え、Marlowe Playgroundの「component and modify」モーダルを改良しました。 

### Basho( スケーリング)

**Hydra**チームは、主にhydra-nodeをBabbage期（Vasil機能）完全対応にアップグレードする作業に取り組みました。ハードフォーク後のテストネットで作動するhydra-node v.0.7.0のリリースに向けた準備も行いました。  

### ガバナンス

**Project Catalyst**はQA段階で、提案査定担当者（PA）がFund9に提出された1,000近くの提案を時間をかけてレビューしています。Fund9でPAとして参加する機会はまだあります。関心のある方は[こちら](https://cardano.ideascale.com)から登録してください。
