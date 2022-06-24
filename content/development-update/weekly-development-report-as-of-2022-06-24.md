---
title: Weekly development report as of 2022-06-24
tags:
  - Weekly development updates
  - Development
  - Cardano
  - Statistics
url: ""
image: https://ucarecdn.com/bbe6c820-3949-4f1e-afb4-6892777d20a8/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus teams** continued preparing for the Vasil hard fork. They tagged a new node v.1.35.0-rc4, which updates the ledger to the latest master, brings issue fixes, and includes Plutus V2 reference script types. This version of the node will likely be the version that will be used for the Cardano testnet hard fork. A go/no go decision on this will be made following this Friday’s weekly evaluation meeting. CIPs 31/32/33 are now integrated into CLI and the teams continued testing node functionality, running Plutus V2 tests, and testing cost model updates.

The teams also progressed work on pipelining and UTXO HD functionality. They resolved ledger dependencies in regards to UTXO HD, updated node configuration options, analyzed code coverage for the LedgerDB part of the Ouroboros storage component, and tested performance settings. Finally, they started auditing the UTXO HD mempool integration. 

This week, the team also added a new [`--disable-ledger` parameter to the DB Sync](https://github.com/input-output-hk/cardano-db-sync/blob/ceae179d6bc41008fc2b0f20d7b6fbd27a178941/doc/configuration.md#--disable-ledger) component. The upcoming DB Sync version will be compatible with node v.1.35.0-rc4, bringing an option to disable the ledger state (initially in beta). This means that users who don’t require syncing reward details, historical stake data, epoch parameters, etc. will be able to run a much lighter version of DB Sync. This will dramatically decrease DB Sync syncing times and RAM requirements. 

The **networking** team worked on a dynamic block production feature for Stake-Driven Peer Discovery (P2P) and on the implementation of MVars for IOSim. They also progressed in updating Gossip documentation and continued to help decipher an issue related to Windows PCs for the upcoming Vasil hard fork.

### WALLETS AND SERVICES 

This week, the **Daedalus** team tested cardano-node v.1.35 in preparation for the Vasil hard fork, and continued integrating the cardano-wallet backend with the Lace wallet. They finalized work on the Mnemonic component, which will be included in the upcoming release.

The **Lace** lightwallet platform received much positive feedback after its [presentation at Consensus](https://www.essentialcardano.io/video/lace-a-lightwallet-platform). Lace v.1.0 will be delivered this summer, don’t forget to [register your interest here](https://www.lace.io/?utm_campaign=Lace%20Platform&utm_source=Essential%20Cardano&utm_medium=blog%20post&utm_term=weekly%20dev%20report&utm_content=lace%20registration) to get the latest news.

The **Adrestia** team upgraded Adrestia components to be Vasil-compatible, continued preparing cardano-js-sdk for production, and made some improvements to a new HTTP API on top of DB Sync. 

### SMART CONTRACTS

This week, the **Plutus** team worked on the evaluation tests, set up generic test functions allowing users to test their input implementations, fixed several issues, and worked on documentation improvements. 

The **Marlowe** team prepared and published the Marlowe Pioneers lecture on assurance. They also ran the first Merkleized Marlowe contract on-chain, addressed the handling of minimum ada requirement for token swaps, and modified the form of Static Analysis to always show template parameters. 

### GOVERNANCE

This week, **Project Catalyst** continued accepting proposals for Fund9. With hundreds of proposals and challenge setting ideas posted already, there are some great initiatives awaiting community review. There's still time to get proposals in, Fund9 closes for submissions on June 30th. If you're interested in becoming a Proposal Assessor, make sure you've registered at [https://cardano.ideascale.com](https://cardano.ideascale.com) and look out for the prompt next week to sign-up. For those who missed Harris Warren, Governance Group Product Lead, discussing all things Project Catalyst, [watch this video](https://youtu.be/pOdOWDuoOlM).

This week also saw Charles Hoskinson discuss how Cardano is moving to an open source world with exciting opportunities and developments in the pipeline. To hear him talk in more detail, check out this [video about the Vasil upgrade](https://youtu.be/fxWfdd2MJOc?t=531).

### STATISTICS TO DATE

![](https://lh3.googleusercontent.com/Djc7xIqfwrSUNhfyCKKGNjsmvR5wFHzsnvFcNdUZEzG_usnOWdLbIQrVSqDjqQevLBBfoKcH7SMQMopf7Oodfn8QuF4YxyF36c8NnikaW1hu_nTmxW52AIq5WO1zvwlSXnHLo4cPYV5uD_41fQ)

### 週刊開発レポート　2022年06月24日

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilハードフォークの準備を続けました。台帳を最新のマスターに更新し、不具合を修正し、Plutus V2参照スクリプト型を含む新しいノードv.1.35.0-rc4をタグ付けしました。このノードバージョンは、Cardanoテストネットのハードフォークで使用される見通しです。実施か否かは、今週金曜に行われる週ごとの査定ミーティングで決定されます。CIP 31/32/33はCLIに統合され、現在ノード機能のテスト、Plutus V2テスト、コストモデル更新のテストを続けています。

また、パイプラインの設計およびUTXO HD機能の作業も進めました。UTXO HDに関する台帳の依存関係を解消し、ノードの設定オプションを更新し、OuroborosストレージコンポーネントのLedgerDB部分用のコードカバレッジを分析し、パフォーマンス設定のテストを行いました。UTXO HDメモリープール統合の監査を始めました。 

[DB Syncコンポーネントに新しい`--disable-ledger`パラメーターを追加](https://github.com/input-output-hk/cardano-db-sync/blob/ceae179d6bc41008fc2b0f20d7b6fbd27a178941/doc/configuration.md%23--disable-ledger)しました。配信予定のDB Syncバージョンはノードv.1.35.0-rc4対応で、台帳ステータスを無効にするオプションが提供されます（初期はベータ版）。これは、報酬の詳細、ステークデータ履歴、エポックパラメーターなどの同期を必要としないユーザーが、はるかに軽量なDB Syncバージョンを実行できるようになることを意味しています。これは、DB Syncの同期時間と必要なRAMを劇的に削減します。 

**ネットワーキング**チームは、Stake-Driven Peer Discovery（P2P）用の動的ブロック生成機能と、IOSim用MVarsの実装に取り組みました。Gossipドキュメントの更新を進め、予定されているVasilハードフォークでWindows PCに関連する不具合の解明のサポートを続けました。

### ウォレットとサービス 

**Daedalus**チームはVasilハードフォークに向けてcardano-node v.1.35のテストを行い、cardano-walletバックエンドとLaceウォレットの統合を継続しました。次回リリースに含まれる予定のMnemonicコンポーネントの作業を仕上げました。

**Lace**ライトウォレットプラットフォームは、[Consensusでのプレゼン](https://www.essentialcardano.io/video/lace-a-lightwallet-platform)後、たくさんの肯定的なフィードバックを受けました。Lace v.1.0は今夏配信予定です。最新情報を得るために[登録](https://www.lace.io/?utm_campaign=Lace%20Platform&utm_source=Essential%20Cardano&utm_medium=blog%20post&utm_term=weekly%20dev%20report&utm_content=lace%20registration)をお忘れなく。

**Adrestia**チームはAdrestiaコンポーネントをVasil対応にアップグレードし、cardano-js-sdkを本番環境にする準備を進め、新しいDB Sync上のHTTP APIの一部に改良を加えました。 

### スマートコントラクト

**Plutus**チームは評価テストに取り組み、ユーザーが自分の入力実装をテストできる汎用テスト機能を設定したほか、不具合の修正、ドキュメントの改良に取り組みました。 

**Marlowe**チームはMarloweパイオニアの保証に関する講義を準備し、公開しました。最初のマークル化したMarloweコントラクトをオンチェーンで実行し、トークンスワップの最小ADA要件の処理に対処し、テンプレートパラメーターが常に表示されるよう静的解析のフォームを変更しました。 

### ガバナンス

**Project Catalyst**はFund9の受け付けを続けました。すでに何百もの提案やチャレンジ設定アイデアが投稿され、複数の素晴らしいイニシアチブがコミュニティレビューを待っています。6月30日のFund9の提案受付締め切りまでまだ間があります。提案査定担当に関心がある方は、忘れずに[https://cardano.ideascale.comに登録し、来週のサインアップの指示にご注意ください。ガバナンスグループプロダクト担当のHarris](https://cardano.ideascale.comに登録し、来週のサインアップの指示にご注意ください。ガバナンスグループプロダクト担当のHarris) Warrenが語るProject Catalystに関する動画を見逃した方は、[こちら](https://youtu.be/pOdOWDuoOlM)をご覧ください。

Charles Hoskinsonも、Cardanoがパイプラインのエキサイティングなチャンスと開発によっていかにオープンソースの世界へ動いているかについて話しました。Charlesが語るVasilアップグレードの詳細は[こちらの動画](https://youtu.be/fxWfdd2MJOc?t=531)をご覧ください。

### 現時点の統計

![](https://lh4.googleusercontent.com/Kxtf5h8fPLNiMuajIAjS-kD9v6SiwypU7yCL5czb4qvLeLa1mMjy_maUTk4TweMQi4CuA0LmFCUov_5cuWNXSnz-YUrQJ5czDgvEKivH7zw1Bb6uWzhD0xNfyPfMn09mg5rxGHVyANFetzeIBQ)
