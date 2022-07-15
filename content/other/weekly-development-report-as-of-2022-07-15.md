---
title: Weekly development report as of 2022-07-15
tags:
  - Weekly development updates
  - Development
  - Cardano
  - Statistics
url: ""
image: https://ucarecdn.com/99ff89ea-fc07-40d7-a150-ea095d0b73aa/
image_text: Statistics and headlines for the weekly development report as of 2022-07-15
---

## CORE TECHNOLOGY

The **node, ledger, and consensus** teams are now in the process of updating dependencies and working closely with SPOs and the community on testnet issue resolution. The teams created a few tags this week: the 1.35.1 node tag to solve a ledger issue, and the v.13.0.1 DB Sync tag, which is compatible with the latest node v.1.35.1. GraphQL, Rosetta, and Cardano Testnet Explorer will be upgraded following the new node and DB Sync tags. 

Work is ongoing on pipelining maintainability and the addition of tests for added confidence and regression prevention. 

The **networking** team continued working on TCP simulations and typed-protocols reviews. The new version of the cardano-node, which includes the typed-protocol design, has been operating well.

## WALLETS AND SERVICES 

This week, the **Daedalus** team added a warning icon that appears if non-recommended decimal settings are applied. The team also made some changes in how anonymous analytic data is collected on Daedalus. 

Regarding the **Lace** Desktop Wallet, the **Lace** team continues to set up an environment that enables **Lace** UI components to collect data from the cardano-wallet backend. The new cardano-node 1.35.1 has been successfully integrated into Daedalus-Testnet and will soon be released.

If you haven’t signed up for the **Lace** lightwallet platform updates, make sure to visit the [Lace website](https://www.lace.io/). 

The **Adrestia** team finished updating Adrestia components for the upcoming hard fork combinator event. The first Vasil-compatible version of cardano-wallet has been released. The team is now preparing for the release of cardano-rosetta and cardano-graphql. Finally, they are preparing the Cardano-js-sdk for production and designing a new simple HTTP API on top of db-sync.

## SMART CONTRACTS

This week, the **Plutus** team continued refining the conformance and mainnet regression tests. They’ve also begun working on a new draft for technical reports, and are investigating coverage and binary format tools.

The **Plutus Tools** team worked on updating the official cardano-node to version 1.35.1, and fixing bugs in the plutus-contract emulator.

The **Marlowe** team created a new project in marlowe-cardano called marlowe-runtime and tested Marlowe CLI against 1.35 Cardano Node Upgrade for the Babbage development stage.

The team also fixed static analysis to consider 'Close' contracts unreachable, prototyped revenue-based Marlowe loans for the upcoming RealFi MVP, and added additional property-based testing of Marlowe semantics.

## BASHO (SCALING)

This week, the **Hydra** team switched the code base to Babbage with all tests passing successfully. The team has also written & updated the contribution guidelines for Hydra, and created the quickcheck-dynamic repository, contributing guidelines, and proposed migration in plutus-apps.

Use cases for reference scripts and inputs were designed and some of these are explained on the [Hydra website](https://hydra.family/head-protocol/use-cases). 

The team is delighted to announce that there is now [an integrated Japanese translation of its documentation](https://hydra.family/head-protocol/ja/).

## GOVERNANCE

This week, **Project Catalyst** entered its second Quality Assurance (QA) stage - where project proposers can review their assessments. After this short period, we will move into the third and final QA stage, where Veteran Proposal Assessors will work to bring all assessments to a strong quality benchmark.  
  
The QA stage is one of the most important times during each fund cycle - ensuring every proposal meets minimum thresholds and has at the very least five reviews. Thanks to the army of Proposal Assessors working in the Project Catalyst ecosystem, Fund9 now has eight reviews per proposal - that’s over 19,000 reviews in total! 

Voter registration to participate in Fund9 is open and will remain so until the wallet snapshot on August 4th. For more information, join the [mailing list](https://bit.ly/3dSZJvx) and download the voting app ([Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&hl=en&gl=US) and [iOS](https://apps.apple.com/kw/app/catalyst-voting/id1517473397)).

**週刊開発レポート　2022年07月15日**

## コアテクノロジー

**ノード、台帳、コンセンサス**チームは、現在依存関係の更新中であり、SPOやコミュニティと協力してテストネットの不具合の解消に取り組んでいます。台帳の不具合を解消するための1.35.1ノードタグ、最新ノードv.1.35.1対応のv.13.0.1 DB Syncタグなど、いくつかのタグを作成しました。GraphQL、Rosetta、Cardanoテストネットエクスプローラーは、新しいノードおよびDB Syncタグに従ってアップグレードされる予定です。 

パイプラインの保守性と、信頼性とデグレ防止を強化するためのテストの追加に関する作業が進行中です。 

**ネットワーキング**チームは、TCPシミュレーションの作業と型付きプロトコルの査読を続けました。型付きプロトコルの設計を含むcardano-node新バージョンは順調に進んでいます。

## ウォレットとサービス 

**Daedalus**チームは、非推奨の小数点設定が適用されている場合に表示するための警告アイコンを追加しました。匿名の分析データをDaedalusに集める方法に変更を加えました。 

**Lace**デスクトップウォレットに関しては、引き続き**Lace** UIコンポーネントによるcardano-walletバックエンドからのデータ収集を可能にする環境設定を行いました。新しいcardano-node 1.35.1は無事にDaedalusテストネットに統合され、まもなくリリースされます。

**Lace**ライトウォレットプラットフォームの更新情報に未登録の場合は、[Laceウェブサイト](https://www.lace.io/)をご覧ください。 

**Adrestia**チームは、予定されているハードフォークコンビネーターイベントに向けた、Adrestiaコンポーネントの更新を完了しました。cardano-walletの初回Vasil対応バージョンをリリースしました。現在、cardano-rosettaとcardano-graphqlのリリース準備を行っています。cardano-js-sdkを本番環境にする準備、db-sync上に構築する新しいシンプルなHTTP APIの設計も行っています。

## スマートコントラクト

**Plutus**チームは適合性テストとメインネットのリグレッションテストの改良を続けました。技術レポートの新たな草稿への取り組み、カバレッジおよびバイナリーフォーマットツールの調査は継続中です。

**Plutus Tools**チームは公式のcardano-nodeをversion 1.35.1へ更新し、plutus-contractエミュレーターのバグを修正しました。

**Marlowe**チームは、marlowe-cardanoでmarlowe-runtimeという新しいプロジェクトを作成し、Babbage開発期に向けてMarlowe CLIを1.35 Cardano Node Upgradeでテストしました。

静的解析を修正して「Close」コントラクトを到達不能とみなすようにし、予定されているRealFi MVPのために収益ベースのMarloweローンをプロトタイプ化し、Marloweセマンティックのプロパティベースのテストを追加しました。

## Basho( スケーリング)

**Hydra**チームはコードベースをBabbageに切り替え、テストも無事パスしました。Hydraのコントリビューションガイドラインを作成、更新し、quickcheck-dynamicリポジトリを作成し、plutus-appsの移行を提案しました。

参照スクリプトとインプットのユースケースを設計しました。一部は[Hydraウェブサイト](https://hydra.family/head-protocol/use-cases)に説明があります。 

嬉しいことに、ここには現在[ドキュメントの日本語訳](https://hydra.family/head-protocol/ja/)が統合されています。

## ガバナンス

**Project Catalyst**は2番目のQA段階に入りました。ここでは、プロジェクトの提案者が査定を確認できます。この短い期間の後、3番目にして最終のQA段階に入ります。ここでは、ベテランの提案査定担当者がすべての査定結果をまとめて、強力なクオリティベンチマークを提供します。  
  
QA段階は、各ファンドサイクルの中で最も重要な時期に数えられます。すべての提案が確実に最低閾値を満たすようにし、少なくとも5つのレビューを得るようにします。Project Catalystエコシステムで働く提案査定担当者たちのおかげで、Fund9は現在提案ごとに8つのレビュー、トータルで19,000を超えるレビューを得ています。 

Fund9に参加するための有権者登録は現在受付中で、受付期間は8月4日のウォレットスナップショットまでとなります。詳細は、[メーリングリスト](https://bit.ly/3dSZJvx)に登録して投票アプリをダウンロードしてください（[Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&hl=en&gl=US)または[iOS](https://apps.apple.com/kw/app/catalyst-voting/id1517473397)）。

  
![Statistics and headlines for the weekly development report as of 2022-07-15 in Japanese](https://ucarecdn.com/46d3ebf2-7624-407f-8294-46fc039942f8/)
