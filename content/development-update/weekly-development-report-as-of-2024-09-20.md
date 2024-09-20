---
title: Weekly development report as of 2024-09-20
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/ecc483f2-37b1-47f2-91d7-7cc0d76cb2e9/
image_text: Weekly development report as of 2024-09-20
---

### CORE TECHNOLOGY

This week, the **consensus** team focused on various areas:

*   They have identified the UTXO set as a primary cause of [performance degradation during ledger snapshots](https://github.com/IntersectMBO/ouroboros-consensus/issues/86). Together with the ledger team, [they have proposed](https://github.com/IntersectMBO/cardano-ledger/issues/4634) a solution to reduce memory allocations when serializing the ledger state.
    
*   The team drafted scripts to estimate the necessary bandwidth to ensure the CPU is the [bottleneck during syncing](https://github.com/IntersectMBO/ouroboros-consensus/pull/1240), informing refinements to the `BlockFetch` process.
    
*   On the UTXO-HD front, the team:
    
    *   Addressed benchmarking issues, after which the `utxo-hd-9.1` branch showed good results, with memory and CPU usage nearly matching the `9.1` node.
        
    *   Provided a new [tool](https://github.com/IntersectMBO/ouroboros-consensus/pull/1222) that allows users to convert ledger state snapshots from pre-UTXO-HD to UTXO-HD without replaying the chain.
        
    *   Once the quality engineering team finalizes work on integration tests on the `utxo-hd-9.1` branch, the consensus team will update documentation and prepare the branch for merging.
        

Note that this UTXO-HD release utilizes an LMDB backend and also provides an in-memory backend. The LSM-tree backend is expected to be available in Q1 2025. The UTXO-HD release also represents the first phase in transitioning parts of the ledger state to disk storage, significantly reducing memory requirements and contributing to Cardano’s long-term sustainability.

### SMART CONTRACTS

This week, the **Plutus** team continued improving the user documentation, with significant updates made to the following pages: [Troubleshooting](https://plutus.cardano.intersectmbo.org/docs/troubleshooting), [Plutus Core and Plutus Tx](https://plutus.cardano.intersectmbo.org/docs/essential-concepts/plutus-core-and-plutus-tx), [Glossary](https://plutus.cardano.intersectmbo.org/docs/glossary), and [Producing a Plutus contract blueprint](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/producing-a-blueprint). They also fixed a bug related to the generation of Plutus contract blueprints.

### SCALING

This week, the **Hydra** team [released version 0.19.0](https://github.com/cardano-scaling/hydra/releases/tag/0.19.0) of the hydra-node, which [upgrades the ledger to Conway](https://github.com/cardano-scaling/hydra/issues/1178) while maintaining compatibility with [Babbage transactions](https://github.com/cardano-scaling/hydra/pull/1608). They made small improvements to the TUI, and initial investigations into [‘Head-in-Head’ operations](https://github.com/cardano-scaling/hydra/issues/1590), where one Hydra head could launch another, were conducted. Although not yet supported, this feature is under  consideration for future development. Moving forward, the team will continue work on incremental commits, explore a Blockfrost chain layer, enhance core networking, and plan upcoming Hydra Doom-related work.

The **Mithril** team continued working on decentralizing the signature orchestration of the Mithril network. They kept [implementing a buffer store](https://github.com/input-output-hk/mithril/issues/1900) for individual signatures that may arrive before being processed by an aggregator, worked on [refactoring the signer state machine](https://github.com/input-output-hk/mithril/issues/1922), and started developing a mechanism to support specific configurations for signing Cardano transactions. Additionally, they fixed the panics occurring in the signer and aggregator during [Cardano chain rollbacks](https://github.com/input-output-hk/mithril/issues/1840).

Finally, the team continued preparing the next distribution and investigated a problem preventing the consistent certification of Cardano transactions in the `pre-release-preview` network.

### VOLTAIRE

Now that Intersect has completed the first stage of the Chang upgrade, elections are underway for seven committees and the membership board. There are more applicants than seats for all positions, so the election will be meaningful and enthusiastically contested.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfgOJz7oLhfxDRG9b9XC7ozs6Dz89bmpMLfMA9TyVN0zZoKlhFZWyAiEXNFvVVKnSTw4oUuSSPo_T1Qi-sz0XTZabFdvj8sEWJAalTyuQkgtrZ5yUD6NU7CUlZCki-xzXrY2wH6ckK4rqw7TrG6IChkq2mx?key=9xNlJLW3i8x7y-acDdHn7w)

Annual members’ meetings will be held worldwide in early October, followed by a virtual town hall.

### CATALYST

This week in **Catalyst**, town hall 175 was held, and Fund13 will be officially launched during next week's town hall. Meanwhile, technical development of Hermes/Athena continues, and the support of Fund13 parameters and guardrails is ongoing.

### EDUCATION

This week, the **education** team made their final preparations for the [Cardano Days event in Wyoming](https://www.uwyo.edu/acct-fin/cbdi/stampede/) on Saturday, September 21, and are organizing the Cardano Days event in Santander, Spain. They were also on the ground supporting the [constitutional committee workshop in Mongolia](https://lu.ma/282924xd) and worked on educational content for Voltaire.

![](https://ucarecdn.com/13a7a9bc-a3dd-4853-9b93-78391326100b/)  
コアテクノロジー

**コンセンサス**チームは複数の主要分野に焦点を当てました。

*   [台帳スナップショット中のパフォーマンス低下](https://github.com/IntersectMBO/ouroboros-consensus/issues/86)の主な原因としてUTXOセットを特定。台帳チームと協力して、台帳ステータスをシリアル化する際のメモリー割り当てを減らすソリューションを[提案](https://github.com/IntersectMBO/cardano-ledger/issues/4634)した。
    
*   CPUが[同期中に確実にボトルネックになる](https://github.com/IntersectMBO/ouroboros-consensus/pull/1240)ようにするために必要な帯域幅を見積もるスクリプトを作成し、BlockFetchプロセスに改良を通知した。
    
*   UTXO-HD関連では、以下を実施。
    
    *   ベンチマークの不具合に対処。その後、utxo-HD-9.1ブランチの結果は良好で、メモリーとCPUの使用率は9.1ノードとほぼ一致。
        
    *   ユーザーが、台帳ステータスのスナップショットをUTXO-HD以前からUTXO-HDにチェーンのリプレイなしに変換できる新しい[ツール](https://github.com/IntersectMBO/ouroboros-consensus/pull/1222)を提供。
        
    *   品質エンジニアリングチームがutxo-HD-9.1ブランチの統合テストの作業を完了したら、コンセンサスチームがドキュメントを更新し、ブランチのマージを準備する。
        

このUTXO-HDリリースではLMDBバックエンドを活用しており、インメモリーバックエンドも提供しています。LSM-treeバックエンドは2025年第1四半期に利用可能になる見込みです。UTXO-HDリリースは台帳ステータスの一部をディスクストレージに移行する第一段階でもあり、メモリー要件を大幅に削減することで、Cardanoの長期的なサステナビリティに貢献しています。

### スマートコントラクト

**Plutus**チームはユーザードキュメントの改訂を続け、[トラブルシューティング](https://plutus.cardano.intersectmbo.org/docs/troubleshooting)、[Plutus CoreとPlutus Tx](https://plutus.cardano.intersectmbo.org/docs/essential-concepts/plutus-core-and-plutus-tx)、[用語集](https://plutus.cardano.intersectmbo.org/docs/glossary)、[Plutusコントラクトのブループリントの作成](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/producing-a-blueprint)を大幅に更新しました。Plutusコントラクトのブループリントの生成に関連するバグを修正しました。

### スケーリング

**Hydra**チームはhydra-nodeの[バージョン0.19.0をリリース](https://github.com/cardano-scaling/hydra/releases/tag/0.19.0)しました。これは、[Babbageトランザクション](https://github.com/cardano-scaling/hydra/pull/1608)との互換性を維持しながら、[台帳をConwayにアップグレード](https://github.com/cardano-scaling/hydra/issues/1178)するものです。TUIに軽微な改良を施し、1つのHydraヘッドが別のヘッドを立ち上げることができる[Head-in-Headオペレーション](https://github.com/cardano-scaling/hydra/issues/1590)の初期調査が実施されました。この機能はまだサポートされておらず、今後の開発のために検討中です。今後は、インクリメンタルコミットに取り組み、Blockfrostチェーンレイヤーを調査し、コアネットワーキングを強化し、Hydra Doom関連の作業計画を立てます。

**Mithril**チームは、Mithrilネットワークの署名オーケストレーションの分散化への取り組みを続けました。アグリゲーターが処理する前に到着する可能性のある個々の署名の[バッファストアの実装](https://github.com/input-output-hk/mithril/issues/1900)を続け、[署名者のステートマシンのリファクタリング](https://github.com/input-output-hk/mithril/issues/1922)に取り組み、Cardanoトランザクションに署名するための特定の設定をサポートするメカニズムの開発を開始しました。[Cardanoチェーンのロールバック](https://github.com/input-output-hk/mithril/issues/1840)中に署名者とアグリゲーターで発生するパニックを修正しました。

次のディストリビューションの準備を続け、pre-release-previewネットワークでCardanoトランザクションの一貫した認証が妨げられるという問題を調査しました。

### VOLTAIRE

IntersectはChangアップグレードの第一段階を終え、現在7つの委員会と理事会の選挙が進行中です。このすべてで議席数よりも応募者数が上回っており、選挙は有意義であり、熱戦になることが予想されます。

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeBchtJKsK5bXET34wS0SzHJbOeNYu2Dlq8AfhYDt81XGEQmoMRDgYBTr7dm8ty-n4gDMO56U8D-KnCWJyEBExyWdN_TgdSnsDcCjYRptk6zwuwYyLlzucb4f6j9tc2sPBzMYASlfrXcVF8ZT2VnqifBSHo?key=Gmd_qP3L_jQrRdhW6fjczQ)

10月上旬には世界各地で年次総会が開催され、その後バーチャルタウンホールが開かれます。

### CATALYST

**Catalyst**ではタウンホール175が開催されました。来週のタウンホールでFund13が正式にスタートします。Hermes/Athenaの技術開発は継続中で、Fund13パラメーターとガードレールのサポートが進行中です。

### 教育

**教育**チームは9月21日土曜日に[ワイオミングで開催されるCardano Daysイベント](https://www.uwyo.edu/acct-fin/cbdi/stampede/)の最終準備を行い、スペインのサンタンデールのCardano Daysイベントの手配を行っています。[モンゴルでの憲法委員会ワークショップ](https://lu.ma/282924xd)を支援し、Voltaireの教育コンテンツにも取り組みました。
