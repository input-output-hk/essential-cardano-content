---
title: Weekly development report as of 2022-05-27
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/23ddc836-54b6-4c88-8745-6a7f6debacd4/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams deployed a closed Vasil testnet to assess its functionality with a small group of DApps and users.

They continued preparing for the Vasil hard fork combinator (HFC) event in June and worked on consensus-specific upgrades. They also carried out UTXO HD performance analysis, implemented pipelining improvements, and made progress on the block-fetch client tests.

The **networking** team continued working on node deployment automation and typed-protocols redesign. They also fixed some issues in the testing architecture for diffusion, worked on outbound-governor features, and completed coverage tests for the diffusion test suite. 

Finally, they started writing a document reflecting on the development of ‘Stake-Driven Peer Discovery with Robust Optimized Peer Selection’ and uploaded a [P2P initiative update on YouTube](https://www.youtube.com/watch?v=wnv7VCa79eo).

### WALLETS AND SERVICES 

The **Daedalus** team worked on providing compatibility between Daedalus and the latest Trezor Firmware update. They are now focused on finalizing the translation module between cardano-wallet and light-wallet UI components.

The **Adrestia** team prepared the Adrestia components for the upcoming hard fork combinator event.

The team is currently working on the cardano-js-sdk to get it production-ready, and is also designing a new simple HTTP API on top of db-sync.

Finally, they continue working on tech debt, and are adding multisig features and a "light" mode to cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team configured protocol parameters and added the TimeValidity emulator test for different protocol versions. They also worked on cost model parameters for two Plutus versions, added a Haskell style guide to clarify various aspects of how to write Haskell code when contributing to Plutus, and improved Plutus testing outputs.

The **Marlowe** team worked on Marlowe on-chain contracts, particularly, on [Atala operation](https://portal-ppp.atalaprism.io/operations/a8c6ee2d9f525ef7f549a5ae389a7909ae3f64151a92bb10c6971abc2313de12), [Cardano transaction](https://explorer.cardano-testnet.iohkdev.io/en/transaction?id=61e51ce924d710f492ade85ddf42d8284307cf52c9b480e0b3856d60e48e4484), and the first [Djed stablecoin contract](https://github.com/input-output-hk/marlowe-cardano/blob/9fd9ec3d15bd4bc3516a06aa7dfb49a1fa6c7682/marlowe-cli/examples/djed-example.ipynb) on testnet. They also fixed some UI issues in Marlowe Run, added a `datetime` picker for timeouts to Blockly in Marlowe Playground, and improved key handling in Marlowe CLI. 

Finally, they published the first lecture for the Marlowe Pioneers Program.

### BASHO (SCALING)

This week, the **Hydra** team finalized the contestation validator and logic and completed evaluating Babbage features on the babbage-preview branch. They are now focused on running contestation tests and supporting verification of the Vasil testnet using hydra-nodes from the Babbage branch. 

### GOVERNANCE

This week, **Project Catalyst** completed the onboarding of over 300 successful Fund8 projects. Along with onboarding, all participants in the governance for Fund8 will receive their ecosystem incentives this week. If you’d like to submit a proposal for funding or play a role in governance for Project Catalyst, tune into the launch of Fund9 on June 1st where Charles Hoskinson will kick off the [Town Hall](https://bit.ly/3rCicSR).

Liquid Democracy and voter delegation will be coming to Project Catalyst in the near future. Voter delegation will introduce the ability for an individual ada wallet to delegate their voting power to one or many Delegate Representatives (dReps) for each fund. There are now over 200 expressions of interest to join the first cohort of dReps and the team have sent out invites to the first workshop happening in early June. [Read more](https://iohk.io/en/blog/posts/2022/04/11/introducing-the-concept-of-delegate-representatives-dreps/) about Liquid Democracy and delegation. 

### STATISTICS TO DATE

![](https://lh5.googleusercontent.com/0PT9HhYqElnoQJZEz7ENHBnfpu5kGHqKcZjArVNBf7AK_DncdZcq83coXlJ4N-vUVWO4mX-n2TBpO948rZGt6YBzjiLWg9OdKDy8Jfklw8AaVyzAwcpYDg3BRVu0Y_gbvZxo2YnOcsJW-fYmNA)

### 週刊開発レポート　2022年05月27日

### コアテクノロジー

**ノード、台帳、コンセンサス**チームは、非公開のVasilテストネットをデプロイし、小グループのDAppおよびユーザーと機能を査定しました。

引き続き6月のVasilハードフォークコンビネーター（HFC）イベントの準備を進め、consensus-specificのアップグレードに取り組みました。また、UTXO HDパフォーマンス分析を実行し、パイプラインの改良を実装し、block-fetchクライアントのテストを進めました。

**ネットワーキング**チームは、ノードデプロイの自動化と型付きプロトコルの再設計への取り組みを続けました。拡散用アーキテクチャのテストの不具合を修正し、outbound-governor機能に取り組み、拡散テストスイートのカバレッジテストを完了しました。 

「Stake-Driven Peer Discovery with Robust Optimized Peer Selection（堅牢な最適化されたピア選定によるステーク推進型のピアディスカバリー）」の開発を反映したドキュメントの作成を開始し、[YouTubeにP2Pイニシアチブの更新情報](https://www.youtube.com/watch?v=wnv7VCa79eo)をアップロードしました。

### ウォレットとサービス 

**Daedalus**チームは、Daedalusと最新のTrezorファームウェア更新に互換性を提供する作業を行いました。現在、cardano-walletとlight-walletのUIコンポーネント間の翻訳モジュールの仕上げに集中しています。

**Adrestia**チームは、予定されているハードフォークコンビネーターイベントに向け、Adrestiaコンポーネントを準備しました。

現在、cardano-js-sdkを本番環境にするための作業を進めるとともに、db-sync上の新しいシンプルなHTTP APIの設計を行っています。

技術負債への取り組み、cardano-walletへマルチシグ機能と「ライト」モードを追加する作業は継続中です。

### スマートコントラクト

**Marlowe**チームはMarloweオンチェーンコントラクトに取り組みました。ここでは特に、[Atalaの使用](https://portal-ppp.atalaprism.io/operations/a8c6ee2d9f525ef7f549a5ae389a7909ae3f64151a92bb10c6971abc2313de12)、[Cardanoトランザクション](https://explorer.cardano-testnet.iohkdev.io/en/transaction?id=61e51ce924d710f492ade85ddf42d8284307cf52c9b480e0b3856d60e48e4484)、そして、テストネットで初の[Djedステーブルコインコントラクト](https://github.com/input-output-hk/marlowe-cardano/blob/9fd9ec3d15bd4bc3516a06aa7dfb49a1fa6c7682/marlowe-cli/examples/djed-example.ipynb)があげられます。Marlowe RunでUIの不具合を修正し、Marlowe PlaygroundでBlocklyにタイムアウト用の`datetime`ピッカーを追加し、Marlowe CLIで鍵処理を改良しました。 

Marloweパイオニアプログラムの初回講義を公開しました。

### Basho( スケーリング)

**Hydra**チームはコンテステーションバイデーターとロジックに関する作業を仕上げ、babbage-previewブランチでBabbage機能の評価を完了しました。現在、コンテステーションテストの実行と、Babbageブランチのhydra-nodesを使用したVasilテストネットの検証のサポートに集中しています。 

### ガバナンス

**Project Catalyst**は300を超えるFund8プロジェクトのオンボーディングを終えました。オンボーディングとともに、Fund8のすべてのガバナンス参加者は、今週エコシステムインセンティブを受け取ります。資金調達のための提案を提出したり、Project Catalystのガバナンスに参加したい場合には、6月1日[タウンホール](https://bit.ly/3rCicSR)のCharles HoskinsonによるFund9立ち上げにご参加ください。

近いうちに、液体民主主義と投票委任が**Project Catalyst**に導入されます。投票委任は、ファンドごとに個々のADAウォレットの投票権を1人以上の委任代表団（dReps）に委任することができる機能です。現在dRepsの初回コホートへの参加希望者は200人を超えており、6月初期の初回ワークショップの招待状が送付されました。液体民主主義と委任の詳細は[こちら](https://iohk.io/jp/blog/posts/2022/04/11/introducing-the-concept-of-delegate-representatives-dreps/)をご覧ください。 

### 現時点の統計

![](https://lh6.googleusercontent.com/tgRNYn7WtoErU3j1opG6ne8IxJupgDt6-HhfXtc7XX1FEOJJ8xMK9w0u1SCKGqQLfZDhmMTRnb7N7PUMoitPTyGSoZ0dGspitA0GGvdVYV6wIqwT8aGEMunePTOp-VxQHV_pdGp_d1m4A-AKfw)
