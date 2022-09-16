---
title: Weekly development update as of 2022-09-16
tags:
  - Cardano
  - Weekly development updates
  - vasil
  - Lace
  - Marlowe
  - Hydra
  - Project Catalyst
url: ""
image: https://ucarecdn.com/0a2d51e4-695f-4b6f-ab60-711243c45105/
image_text: a graphic showing weekly development updates on Cardano
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams continued preparing for the Vasil upgrade.

The pre-production environment will hard fork on the 19th, before the mainnet hard fork on the 22nd.

The new node v.1.35.3 currently mints over 95% of SPO blocks, with the leading DApp projects also on track for the upgrade. Exchange liquidity is around 55% and good progress continues to be made toward the targeted 80%.

Track the latest status of these metrics through [this ecosystem readiness page](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade).

### WALLETS AND SERVICES

This week, the **Daedalus** team tested the new Trezor firmware. The team is adding more decimals in the sync message while syncing the blockchain.

Development work is ongoing on the Lace desktop features. The **Lace** team is finalizing a proof of concept where cardano-wallet generates a typed API for Typescript from Haskell. Since lace-desktop supports multiaddress, the team has implemented an address rotation with unused addresses on the Receive page.

The **Adrestia** team kept working to get cardano-js-sdk ready for production. They're also working on the implementation of multisig (shared wallets) and "light" mode features in cardano-wallet.

### SMART CONTRACTS

The **Plutus** team continues to work on documentation improvements, Hackage improvements, API improvements, and further testing.

The team also continues to add Babbage era support, adding test cases for the constraints library, and fully committing to cardano-ledger validation rules in the emulator.

The **Marlowe** team tested Marlowe’s Plutus validators in a mock testing environment and implemented a coin-selection and transaction-balancing algorithm for Marlowe.

The team also merged updates from the Marlowe Cookbook into the main branch and ran marlowe-cli/run-nonpab-tests.sh in the Babbage era’s public testnet.

Finally, the **Marlowe** team added FundWallet, AutoExecute, and Mint commands to the testing DSL, while also tailoring the Template command.

### BASHO (SCALING)

This week, the **Hydra** team worked on setting up a long-lived network of Hydra nodes with a Hydra collaborative application that runs on top of the network. This experiment led to the team addressing a known issue, namely that conflicting transactions could put each node into a livelock.

### GOVERNANCE

**Project Catalyst** continues to accept votes on over 1,000 proposals in Fund9. Voting closes this coming Monday (19/09) at 15:00 UTC.

If you are registered to vote make sure you participate. Voter rewards are available to every wallet that casts a vote!

Over the past few months, the team has been quietly building delegation features - enabling ada holders to delegate their voting power to Delegated Representatives (dReps) who would vote on the community’s behalf. For some of you, it’s not been so quiet. IOG has held four workshops across two time zones for the first cohort of dReps - taking feedback and engaging with those seeking to be the first dReps in **Project Catalyst**. There are over 200 candidates in the first cohort who are paving the way for a successful first delegation iteration in Fund10.

In Fund10, all ada holders will be able to delegate their voting power (with no minimum ada holding requirements) to their chosen dReps. If you’d like to review the workshop material, [Quality Assurance DAO (QA-DAO)](https://quality-assurance-dao.github.io/docs/) have published all the documentation and workshop recordings [here](https://quality-assurance-dao.gitbook.io/community-governance-oversight/dreps-delegated-voting/delegated-voting-drep/workshop-2-demo-and-walkthrough).

![a Japanese language graphic showing weekly development updates on Cardano](https://ucarecdn.com/bdd126d8-60fd-4dd3-9a5d-50599398799c/)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilアップグレードの準備を続けました。

プリプロ環境のハードフォークは、22日に予定されているメインネットのハードフォークに先立ち19日に実施されます。

新ノードv.1.35.3は現在SPOブロックの95%をミントしており、主要なDAppプロジェクトも順調にアップグレードを進めています。取引所の流動性はおよそ55%で、目標の80%に向けて順調に進んでいます。

最新の進捗状況は[このエコシステム進捗情報ページ](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade)をご覧ください（現在英語のみ）。

### ウォレットとサービス

**Daedalus**チームは新しいTrezorファームウェアのテストを行いました。また、ブロックチェーンの同期中の同期メッセージに小数点を追加しています。

**Lace**デスクトップ機能の開発作業は進行中です。Laceチームは、cardano-walletがHaskellからTypescript用の型付きAPIを生成する実証概念の最終段階に入っています。lace-desktopがマルチアドレスをサポートするため、Receiveページに未使用アドレスを使ったアドレスローテーションを実装しています。

**Adrestia**は引き続きcardano-js-sdkを本番環境にするための作業を進めています。cardano-walletへマルチシグ（ウォレットの共有）機能と「ライト」モード機能を実装する作業も進行中です。

### スマートコントラクト

**Plutus**チームは、引き続きドキュメント、Hackage、APIの改良と、さらなるテストに取り組んでいます。

Babbage期のサポートを追加する作業を続けており、制約ライブラリーのテストケースを追加したほか、エミュレーターにcardano-ledgerの検証ルールを完全にコミットしています。

**Marlowe**チームは、模擬のテスト環境でMarloweのPlutusバリデーターをテストし、 Marloweのcoin-selectionおよびtransaction-balancingアルゴリズムを実装しました。

Marlowe Cookbookの更新をメインブランチにマージし、Babbage期のパブリックテストネットでmarlowe-cli/run-nonpab-tests.sh を実行しました。

テストDSLにFundWallet、AutoExecute、Mintコマンドを追加し、Templateコマンドを調整しました。

### Basho( スケーリング)

**Hydra**チームは、ネットワーク上で実行されるHydraコラボラティブアプリケーションを使った、長期のHydraネットワークのセットアップに取り組みました。この実験により、競合するトランザクションが各ノードをライブロックに陥れる可能性があるという既知の問題に対処することになりました。

### ガバナンス

**Project Catalyst**は引き続きFund9の1,000を超える提案への投票を受け付けています。投票は、日本時間の火曜日（9/20）午前0時に締め切られます。

有権者登録を済ませた場合は、忘れずに参加してください。投票したウォレットごとに、投票報酬が獲得できます。

この数か月、チームは静かに委任機能を構築してきました。これは、ADA保有者が、コミュニティの代わりに投票するdReps（委任代表団）に投票権を委任できるようにするものです。一部の人にとっては、静かな動きというわけではありませんでした。IOGは、最初のdRepsコホートのために2つのタイムゾーンにわたって4つのワークショップを開催し、フィードバックを受け取り、**Project Catalyst**の最初のdRepsとなることを目指している人々と交流しました。最初のコホートには200人を超える候補者がおり、Fund10での最初の委任イテレーションへ向けて努力しています。

Fund10では、すべてのADA保有者が自分の選んだdRepsに投票権を委任できるようになります（ADA保有額の下限無し）。ワークショップの詳細については、[Quality Assurance DAO（QA-DAO）](https://quality-assurance-dao.github.io/docs/)がすべてのドキュメントとワークショップの録画を公開しています。[こちら](https://quality-assurance-dao.gitbook.io/community-governance-oversight/dreps-delegated-voting/delegated-voting-drep/workshop-2-demo-and-walkthrough)をご覧ください。
