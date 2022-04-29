---
title: Weekly development report as of 2022-04-29
tags:
  - Development
  - Weekly development updates
  - Cardano
  - Statistics
url: ""
image: ""
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node and consensus** teams prepared Ouroboros for the Vasil hard fork upcoming in June. The teams continued working on the UTXO HD performance properties along with diffusion pipelining tests and benchmarking. 

An important update has taken place - the block size has been increased from 80KB to 88KB to allow more transactions and scripts in one block. 

The **networking** team worked on IOSim timeout API benchmarking, found and fixed a bug in the mock implementation of the DNS query component, and finalized the development of the DNS recoverability test. 

Finally, the team continued working on the typed protocols’ refactoring and the Gossip protocol design.

### WALLETS AND SERVICES 

This week, the **Daedalus** team tested and integrated the new cardano-node v.1.34.1 with Daedalus, and fixed and tested some Windows issues related to Ledger hardware wallets. The team is now working on the basic architecture of the new desktop wallet.

The **Adrestia** team prepared a big update for the cardano-wallet, including the introduction of a "Light" mode, addition of token minting and burning, fee minimization, coin selection refactoring, DB refactoring, and bug fixing.

The team is also working on adding multisig features and redesigning the DB layer.

Finally, they also continued working on the cardano-js-sdk.

### SMART CONTRACTS

This week, the **Plutus** team spent time working on dependencies and fixed some bugs, improved the start time for Nix, and made incremental updates to the documentation. Finally, they added initial support for SECP256k1 verification.

The **Marlowe** team ran their first Marlowe contract on mainnet. They also added WalletCompanion testing capability, support for bech32 formats, and transaction metadata to the marlowe-cli framework. Issues with failed wallet refunds were also addressed. 

Within the Marlowe Playground, they added time input slots and resolved some issues. Also, a new loading indicator display feature was added when restoring or creating a new wallet in Marlowe Run.

### BASHO (SCALING)

This week, the **Hydra** team completed work on the feature enabling [rollbacks handling](https://github.com/input-output-hk/hydra-poc/issues/184) and published relevant [documentation](https://hydra.family/head-protocol/core-concepts/rollbacks/) on the Hydra website. They also improved Hydra Heads properties in terms of funds safety, and continued working on transaction benchmarking as part of a move to use proper multi-signatures.

### GOVERNANCE

This week, **Project Catalyst** is entering its final voting phase with only a week left to cast votes on over 1,000 proposals. Once all voting is in, the results will be tallied and shared the following week. Hundreds of successful projects are going to be onboarded soon.  

Fund9 will open in early June - users are encouraged to get involved early. In the meantime, users can [register](https://bit.ly/3rCicSR) for the Town Hall meet-ups or [watch this week’s recording here](https://www.youtube.com/watch?v=fCGifAkW-yM&t=28s). 

### STATISTICS TO DATE

![](https://lh6.googleusercontent.com/aJX4XZ9nNosOXvM6MNOLH6jT0lvgQoit6cSCb1TbtuXXgh-6j9YmlZdjIVGQzHiV4_0fDFrj4F7AsQjocv8n5AqV07YPRNG6_NSqOKKkBe8NmnrJlU4SI3ECW1Y90j7yCW4iHGcD)

### 週刊開発レポート　2022年04月29日

### コアテクノロジー

**ノード＆コンセンサス**チームは6月のVasilハードフォークに向けてOuroborosの準備を行いました。UTXO HDパフォーマンスプロパティ、拡散パイプラインのテストとベンチマークへの取り組みを続けました。

1つのブロックにより多くのトランザクションとスクリプトを含むことができるように、ブロックサイズを80KBから88KBに拡大させる重要な更新も行いました。

**ネットワーキング**チームはIOSimタイムアウトAPIのベンチマークに取り組み、DNSクエリコンポーネントの模擬実装でバグを発見、修正し、DNS復元性テストの開発を仕上げました。 

型付きプロトコルのリファクタリングとGossipプロトコルの設計は継続しています。

### ウォレットとサービス 

**Daedalus**チームは新しいcardano-node v.1.34.1をテストし、Daedalusに統合しました。また、Ledgerハードウェアウォレットに関するWindowsの不具合を修正し、テストしました。現在、新しいデスクトップウォレットの基本アーキテクチャに取り組んでいます。

**Adrestia**チームはcardano-walletの大規模な更新を準備しました。これには、「ライト」モードの導入、トークンミントとバーンの追加、手数料最小化、コイン選定のリファクタリング、DBのリファクタリング、バグの修正が含まれます。

マルチシグ機能の追加とDB層の再設計にも取り組んでいます。

cardano-js-sdkの作業も継続しています。

### スマートコントラクト

**Plutus**チームは依存関係に取り組み、いくつかのバグを修正し、Nixの起動時間を向上させ、ドキュメントの更新を行いました。 

SECP256k1検証の初期サポートを追加しました。

**Marlowe**チームはメインネットで最初のMarloweコントラクトを実行しました。marlowe-cliフレームワークにWalletCompanionのテスト機能、bech32形式のサポート、トランザクションメタデータを追加しました。ウォレット返金が失敗する不具合にも対処しました。 

Marlowe Playgroundにタイム入力スロットを追加し、不具合を解消しました。Marlowe Runでウォレットの復元や新規作成時に新しいロードインジケーター表示機能を追加しました。

### Basho( スケーリング)

**Hydra**チームは[ロールバック処理](https://github.com/input-output-hk/hydra-poc/issues/184)を可能にする機能を完了し、Hydraウェブサイトに[関連ドキュメント](https://hydra.family/head-protocol/core-concepts/rollbacks/)を公開しました。Hydra Headで資金の安全性に関するプロパティを改良し、適切なマルチシグの使用へ向けた一環としてトランザクションのベンチマークに取り組みました。

### ガバナンス

**Project Catalyst**は最終投票段階に入りました。1,000を超える提案への投票期間は、残すところあと1週間となりました。すべての投票が終了したら、集計およびその結果発表は翌週に行われます。数多くの勝利プロジェクトがまもなく開始されます。 

Fund9は6月初めに開始されます。ユーザーの早期参加が奨励されます。その間、ユーザーはタウンホールミートアップに[登録](https://bit.ly/3rCicSR)するか、[今週の録画](https://www.youtube.com/watch?v=fCGifAkW-yM&t=28s)をご覧ください。

### 現時点の統計

![](https://lh6.googleusercontent.com/tBcTsUuuEJFuP-1QAd74owcXrGjgh7ElWAqq6Fh-JcdoJhkWyo05wQGGcFAer6g-Es4fvlUUMrXKNPQeLNzLbol18_Pb-GLPLb0IhRms8G-bP2ZAEVcxZf9_I7DYyA10cQRGkmZLQ7WDzaQf2A)
