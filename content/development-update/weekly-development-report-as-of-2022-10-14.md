---
title: Weekly development report as of 2022-10-14
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/b4ebaeff-023b-4291-a643-9135fb23425c/
image_text: A graphic displaying highlights from the weekly development report
  as of 2022-10-14
---

### CORE TECHNOLOGY

This week, the teams continued working on the node, ledger, consensus, and networking improvements.

For a detailed overview, see this [technical development report](https://input-output-hk.github.io/cardano-updates/).

### WALLETS AND SERVICES

This week, the **Daedalus** team added the latest cardano-wallet version to the upcoming release, which solves the minimum fee calculation issue. 

Work is ongoing on **Lace** desktop development. The team worked on connecting the dots back to cardano-js-sdk to avoid unnecessary complexity in building the bridge to cardano-wallet. They are now working on the differentiation of incoming transactions between rewards and regular transactions as well as fixing issues with collateral transactions and Electron closing.

The **Adrestia** team focused on getting cardano-js-sdk production-ready and worked on post-Vasil improvements and bug-fixing. The team released an update for cardano-wallet addressing some issues, and is also working on the implementation of multisig (shared wallets) and ‘light’ mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the SECP release process, starting with the main exploratory parts of the program increment (PI).

They also made progress on Babbage support implementation and Marconi MVP development. Finally, they kept designing a multi-scenario node testing framework and planning for the following PI.

The **Marlowe** team explored the feasibility of developing an execution cost model and exported Haskell code from the Isabelle specification. They also implemented constraint generation for payouts and completed some parts of constraint-solving transaction creation by specifically building a new transaction body that satisfies constraints, adjusts outputs to cover minUTXO requirements, verifies the script output doesn’t change, and performs coin selection. Additionally, the team improved `faucet` and `mint` commands in the Marlowe CLI, added balance assertions and a withdrawing feature to the testing DSL, and implemented a tool that analyzes Marlowe contracts for on-chain vulnerabilities. Finally, they tested the Guaranteed Coupon Bond contract on mainnet, using reference scripts and measuring execution costs. 

### BASHO (SCALING)

This week, the **Hydra** team worked on automatic L1 transaction resubmission, which resulted in improving error reporting when posting failed transactions. The team also fixed some Flaky tests and an issue with querying the chain data, improved client UX, and implemented a first step towards the backup & restoring of the Hydra Head state. 

The **Mithril** team released the hybrid registration for the Mithril network SPOs with a new experimental ‘certified’ mode. Following this release, they have been actively monitoring the current Mithril test environment, which is run with pioneer SPOs. Finally, the team started implementing the new version of the release process and decommissioned the store migrator tools for the aggregator and signer nodes.

### GOVERNANCE

This week, **Project Catalyst** continues onboarding successful Fund9 projects. Over 200 projects are now going through a proof of live process, agreeing on project deliverables. 

All successful Fund9 projects, which were awarded over $75k or were in the Products, DApps, and Integrations Challenge now have to go through more rigorous reporting requirements. This involves documenting milestones for the entire project and when these are met, projects will have their next funding tranche unlocked. The community are part of the auditing process, providing feedback on projects’ milestones and working with each project to support their project delivery. 

As with all projects, funding is always sent in batches, dependent on receiving monthly progress reports, as well as milestone reports (if applicable).

![A graphic in Japanese displaying highlights from the weekly development report as of 2022-10-14](https://ucarecdn.com/7da7723d-3b38-4370-9c80-588652382928/)

### コアテクノロジー

ノード、台帳、コンセンサス、ネットワークの改良作業を続けました。

詳細は[技術開発レポート](https://input-output-hk.github.io/cardano-updates/)をご覧ください。

### ウォレットとサービス

**Daedalus**チームは最新のcardano-walletバージョンを次回リリース版に追加しました。これは、最小手数料計算の不具合を解消するものです。 

**Lace**デスクトップの開発作業は進行中です。cardano-wallet へのブリッジを構築する際に不要な複雑性を避けるため、cardano-js-sdkにドットを接続し直す作業を行いました。現在、入金トランザクションで報酬と通常のトランザクションを区別する作業と、担保トランザクションとElectron決済に関する修正作業を行っています。

**Adrestia**チームはcardano-js-sdkを本番環境にする作業に集中したほか、Vasil後の改良とバグの修正に取り組みました。cardano-walletの不具合に対処した更新版をリリースしました。また、マルチシグ（ウォレットの共有）機能と「ライト」モード機能を追加する作業にも取り組んでいます。

### スマートコントラクト

**Plutus**チームはSECPリリースプロセスの作業を続け、 プログラム増分（PI）の主要な調査部分を開始しました。

Babbageサポートの実装とMarconi MVP開発作業も進行中です。マルチシナリオのノードテストフレームワークの設計を続け、続くPIのプランを立てました。

**Marlowe**チームは実行コストモデルの開発の実行可能性を調査し、Isabelle仕様からHaskellコードをエクスポートしました。支払いのための制約生成を実装し、特に新しいトランザクションボディを構築することにより、制約解決トランザクション作成の一部を完了しました。このトランザクションボディは制約を満たし、アウトプットを調整してminUTXO要件をカバーし、スクリプトアウトプットが変更されないことを確認し、コインの選択を実行します。Marlowe CLIの「faucet」コマンドと「mint」コマンドを改良し、テストDSLに残高アサーションと引き出し機能を追加し、Marloweコントラクトのオンチェーン脆弱性を分析するツールを実装しました。メインネットで、参照スクリプトを使用してGuaranteed Coupon Bondコントラクトをテストし、実行コストを測定しました。 

### Basho( スケーリング)

**Hydra**チームは、L1トランザクション自動再送信に取り組みました。これにより、失敗したトランザクションを投稿するときのエラーレポートが改良されました。Flakyテスト、ならびにチェーンデータのクエリに伴う不具合を修正し、クライアントUXを改良し、Hydra Headの状態のバックアップおよび復元に向けた最初のステップを実装しました。 

**Mithril**チームは、MithrilネットワークSPO用に新しく実験的な「Certified（認証済み）」モードを加えたハイブリッド登録をリリースしました。このリリース後、現在パイオニアSPOとともに実行しているMithrilテスト環境を慎重に監視しています。リリースプロセスの新バージョンの実装を始め、アグリゲーターノードと署名ノードのストア移行ツールを廃止しました。

### ガバナンス

**Project Catalyst**はFund9通過プロジェクトのオンボーディングを続けています。200を超えるプロジェクトがライブプロセスの証明を経て、プロジェクトの成果物に同意しています。 

75000ドル以上の賞金を獲得した、またはProduct、DApps、Integrationチャレンジに参加したすべてのFund9通過プロジェクトは、より厳格な報告要件に応える必要があります。これには、プロジェクト全体のマイルストンを文書化することが含まれ、これらが達成されると、次の資金トランシェが解除されます。コミュニティは監査プロセスの一部であり、プロジェクトのマイルストンにフィードバックを提供し、各プロジェクトと協力してプロジェクトの配信をサポートします。 

全プロジェクトとも、資金は常に、月ごとの進捗レポートおよびマイルストン報告（該当する場合）の受信に応じてバッチで送信されます。
