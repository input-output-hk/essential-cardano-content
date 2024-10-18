---
title: Weekly development report as of 2024-10-18
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/fddf4a20-d3c4-4c70-8417-f34def2cab7e/
image_text: Weekly development report as of 2024-10-18
---

### CORE TECHNOLOGY

This week, the consensus team released new versions of the `diff-containers-1.3.0.0`, `fingertree-rm-1.0.0.3`, `cardano-lmdb-0.4.0.2`, and `cardano-lmdb-simple-0.7.0.1` packages. Improvements to [IOSim](https://github.com/input-output-hk/io-sim/pull/176) included adding `MonadLabelledMVar` and enhancing the [Show instance for ScheduleMod](https://github.com/input-output-hk/io-sim/pull/175). The team also released consensus packages for `Node 10.0` and worked on simplifying [Cardano hard fork triggers](https://github.com/IntersectMBO/ouroboros-consensus/pull/1282). Additionally, they reduced the clock skew for headers from five to two seconds.

The ledger team focused on implementing final improvements and fixes for the Conway era, set to be effective during the bootstrap period. Here are the details:

*   **New features**: implemented protection against deposit loss, ensured DReps exist before delegation, updated SPO vote thresholds, and improved well-formedness checks. Additionally, two new rules —[Mempool](https://github.com/IntersectMBO/cardano-ledger/pull/4642) and [HardFork](https://github.com/IntersectMBO/cardano-ledger/pull/4657)— were added for future processing flexibility.
    
*   **Refinements**: dropped pointers for Conway, improved predicate failure reporting, and added both unit and conformance tests.
    
*   **Additional updates**: multiple improvements, including fixes to issues like [addressing CDDL specification](https://github.com/IntersectMBO/cardano-ledger/pull/4553) and [enhancing voting behavior testing](https://github.com/IntersectMBO/cardano-ledger/pull/4603).
    

### SMART CONTRACTS

The **Plutus** team has made further enhancements to the Plutus user guide. Make sure to check out the updated [Working with Scripts](https://plutus.cardano.intersectmbo.org/docs/category/working-with-scripts) and [Delve Deeper](https://plutus.cardano.intersectmbo.org/docs/category/delve-deeper) sections.

### SCALING

Over the past few weeks, the **Hydra** team made significant user-facing improvements, particularly in incremental commits and using [Aiken as the commit validator](https://github.com/cardano-scaling/hydra/pull/1680#issue-2565734963), yielding size and cost savings. The update also supports PlutusV3 validators and aligns with [cardano-api 9.4](https://github.com/cardano-scaling/hydra/pull/1706). A breaking change was made to server output [SnapshotConfirmed](https://github.com/cardano-scaling/hydra/pull/1685) to simplify handling signed snapshots. The Blockfrost integration made progress with a new option to track the chain through Blockfrost, instead of directly using a `cardano-node`.

**Key achievements**

*   Added [raw CBOR datum](https://github.com/cardano-scaling/hydra/issues/1543) to transaction outputs.
    
*   Completed [documentation updates for incremental commits](https://github.com/cardano-scaling/hydra/pull/1704).
    
*   Implemented the off-chain user journey for [incremental commits](https://github.com/cardano-scaling/hydra/issues/1522).
    

**Next steps**

*   Further work on [incremental commits](https://github.com/cardano-scaling/hydra/issues/199) and [memory usage improvements](https://github.com/cardano-scaling/hydra/issues/1618).
    
*   Planning the [0.20.0 release](https://github.com/cardano-scaling/hydra/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.20.0).
    

The **Mithril** team completed decentralizing the signature orchestration of the Mithril network, completed refactoring the Prometheus metrics in the signer, and started implementing them in the aggregator. Additionally, the team kept working on supporting the new Pythagoras Mithril era and created the new distribution pre-release [2442.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2442.0-pre).

Finally, they kept implementing optimizations on the node logs and enhanced the release creation workflow in the CI.

### VOLTAIRE

Following completion of the Chang #1 upgrade, members of the Intersect organization are currently voting to select members for seven committees and the Intersect board. The voting deadline is Sunday, October 20, so time is running out. Each member, whether individual or enterprise, gets one vote, regardless of their stake.

Preparations for the Chang #2 upgrade are well underway, and the [upgrade readiness page](https://cardanoupgrades.docs.intersectmbo.org/) is regularly updated with the latest status. These upgrades will propel Cardano into the era of Voltaire, fully implementing [CIP-1694](https://github.com/cardano-foundation/CIPs/blob/master/CIP-1694/README.md).

### EDUCATION

This week, the education team held their team meetup in Madrid, Spain. Some team members are also traveling to Buenos Aires to support the Argentinian Cardano Summit event.

  
  
![](https://ucarecdn.com/c208ba47-c58b-426d-8159-9791e1c12ded/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コンセンサスチームはdiff-containers-1.3.0.0、fingertree-rm-1.0.0.3、cardano-lmdb-0.4.0.2、cardano-lmdb-simple-0.7.0.1の各パッケージの新バージョンをリリースしました。[IOSim](https://github.com/input-output-hk/io-sim/pull/176)の改善には、MonadLabeledMVarの追加と [ScheduleMod用Showインスタンス](https://github.com/input-output-hk/io-sim/pull/175)の強化が含まれます。Node 10.0用のコンセンサスパッケージをリリースし、[Cardanoハードフォークトリガー](https://github.com/IntersectMBO/ouroboros-consensus/pull/1282)の簡素化にも取り組みました。ヘッダーのクロックスキューを5秒から2秒に短縮しました。

台帳チームは、ブートストラップ期間中に有効化するように設定されたConway期の最終改良と修正の実装に焦点を当てました。詳細は以下のとおりです。

*   **新機能**：デポジット損失に対する保護を実装し、委任前にDRepが存在することを保証し、SPO投票しきい値を更新し、適格性チェックを改良。 [](https://github.com/IntersectMBO/cardano-ledger/pull/4657)将来の処理の柔軟性のために2つの新しいルール[メモリープール](https://github.com/IntersectMBO/cardano-ledger/pull/4642)と[HardFork](https://github.com/IntersectMBO/cardano-ledger/pull/4657)を追加。
    
*   **改良**：Conwayのポインターの削除、述語障害レポートの改善、ユニットテストと適合性テストの追加。
    
*   **その他の更新**：[CDDL仕様への対応](https://github.com/IntersectMBO/cardano-ledger/pull/4553)や[投票行動テストの強化](https://github.com/IntersectMBO/cardano-ledger/pull/4603)などの問題の修正を含む、複数の改善。
    

### スマートコントラクト

**Plutus**チームはPlutusユーザーガイドにさらなる改訂を加えました。更新された「[Working with Scripts」](https://plutus.cardano.intersectmbo.org/docs/category/working-with-scripts)セクションと「[Delve Deeper](https://plutus.cardano.intersectmbo.org/docs/category/delve-deeper)」セクションをチェックしてみてください。

### スケーリング

ここ数週間、**Hydra**チームはユーザー向けの大幅な改善に取り組みました。特にインクリメンタルコミットや[コミットバリデーターとしてのAiken](https://github.com/cardano-scaling/hydra/pull/1680#issue-2565734963)の使用関連で、サイズとコストを削減しました。この更新はPlutusV3バリデーターもサポートしており、[cardano-api 9.4](https://github.com/cardano-scaling/hydra/pull/1706)に準拠しています。署名付きスナップショットの処理を簡素化するために、サーバーアウトプット[SnapshotConfirmed](https://github.com/cardano-scaling/hydra/pull/1685)に重大な変更を加えました。Blockfrostの統合は、cardano-nodeを直接使用するのではなく、Blockfrostを通してチェーンを追跡する新しいオプションで進展しました。

**主な成果**

*   トランザクション出力に[未加工のCBORデータム](https://github.com/cardano-scaling/hydra/issues/1543)を追加
    
*   [インクリメンタルコミットのドキュメントの更新](https://github.com/cardano-scaling/hydra/pull/1704)を完了
    
*   [インクリメンタルコミット](https://github.com/cardano-scaling/hydra/issues/1522)のためのオフチェーンユーザージャーニーを実装
    

**次のステップ**

*   [インクリメンタルコミット](https://github.com/cardano-scaling/hydra/issues/199)と[メモリー使用量の改善](https://github.com/cardano-scaling/hydra/issues/1618)に関するさらなる作業
    
*   [0.20.0リリース](https://github.com/cardano-scaling/hydra/issues?q=is%3Aopen+is%3Aissue+milestone%3A0.20.0)のプランニング
    

**Mithril**チームは、Mithrilネットワークの署名オーケストレーションの分散化を完了し、署名者のPrometheusメトリクスのリファクタリングを完了し、アグリゲーターでの実装を開始しました。新しいPythagoras Mithril期をサポートする作業を続け、プレリリース版[2442.0-PRE](https://github.com/input-output-hk/mithril/releases/tag/2442.0-pre)を作成しました。  

ノードログの最適化の実装を続け、CIでのリリース作成ワークフローを強化しました。

### VOLTAIRE

Chang #1のアップグレードの完了後、Intersectのメンバーは現在、7つの委員会と理事会のメンバーを選出するために投票を行っています。投票の締め切りは10月20日（日）に迫っています。各メンバーは、個人メンバーも企業メンバーもステーク数を問わず1票を持っています。

Chang #2アップグレードの準備は順調に進んでおり、[アップグレード準備の進捗情報ページ](https://cardanoupgrades.docs.intersectmbo.org/)は定期的に最新のステータスで更新されています。これらのアップグレードによりCardanoはVoltaire期に突入し、[CIP-1694](https://github.com/cardano-foundation/CIPs/blob/master/CIP-1694/README.md)がフル実装されることになります。  

### 教育

教育チームはスペインのマドリードでチームミートアップを開催しました。アルゼンチンで開催されるCardanoサミットを支援するために、ブエノスアイレスにもメンバーが数人渡航しています。
