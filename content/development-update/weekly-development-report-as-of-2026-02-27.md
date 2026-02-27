---
title: Weekly development report as of 2026-02-27
tags:
  - Weekly development updates
  - Statistics
  - Ecosystem
  - Development
url: ""
image: https://ucarecdn.com/bc3a9927-ae31-4489-835a-ab9fd20314be/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   [MoneyGram](https://x.com/midnightfdn/status/2026323874753683744) is now a federated node operator for Midnight Network
    
*   [The Yoroi staking pool](https://x.com/YoroiWallet/status/2025827992988250309) will offer dual rewards, allowing stakers to earn night tokens alongside ada
    
*   [The Cardano Foundation](https://x.com/Catalyst_onX/status/2026268218290028946) will assume stewardship of Project Catalyst going forward
    
*   [The Pyth and Cardano hackathon](https://x.com/coinbureau/status/2025658103447068840) will take place in Argentina in March
    
*   [COTI Network](https://x.com/COTInetwork/status/2024806635697229989) will collaborate with Artifi Labs to support the long-term development of Djed stablecoin.
    

### CORE TECHNOLOGY

This week, the **performance and benchmarking** team released benchmarks for node versions 10.5.4 and 10.6.2, including parallel GC benchmarks, and prepared a new PlutusV3 baseline. The performance cluster now has a custom, isolated Nix cache to ensure safe benchmarking of security-critical changes. They also improved tracing robustness by forcing lazy values in controlled sections of code. In Leios, the LTL Trace Verifier is complete and awaiting integration. For node diversity, the formal trace schema definition has entered the validation phase, while trace forwarding in native Rust is moving into testing. For more details, see this [technical update](https://updates.cardano.intersectmbo.org/2026-02-25-performance-and-tracing).

### SCALING

This week, the **Mithril** team continued implementing new succinct proofs. They completed the [lottery target value computation](https://github.com/input-output-hk/mithril/issues/2974) for SNARK, [updated protocol parameters](https://github.com/input-output-hk/mithril/issues/2969) to SNARK-friendly values, prepared the SNARK circuit refactoring, and removed the off-circuit module from the Halo2 circuit. Work also progressed on SNARK pre-aggregation primitives, signer authentication for SNARK, the full review of the recursive circuit prototype, and the [technical report](https://github.com/input-output-hk/mithril/issues/2981) for the recursive Halo2 circuit.

Additionally, the team advanced the new certification for Cardano blocks and transactions, implementing the transaction membership prover and proof routes in the aggregator REST API. Preparation for the [2608 distribution release](https://github.com/input-output-hk/mithril/issues/2967) also began.

Finally, they fixed a bug caused by a breaking change in the snapshot converter for Cardano node v.10.6.2 and resolved flaky unit tests in the SNARK circuit.

The **Hydra** team focused on stability, correctness, and improved diagnostics. They resolved several consensus-related issues, including a [race condition](https://github.com/cardano-scaling/hydra/issues/2500) affecting decommits, a [stuck-node scenario](https://github.com/cardano-scaling/hydra/pull/2491) around commits, and an infinite [AckSn loop](https://github.com/cardano-scaling/hydra/pull/2510) linked to commit and decommit handling. The team also fixed a bug involving [deposits and chain rollbacks](https://github.com/cardano-scaling/hydra/issues/2488), addressed user-reported issues related to [contract computation time](https://github.com/cardano-scaling/hydra/issues/2162) on the `hydra-node`, and improved error reporting for missing script witnesses, making troubleshooting more straightforward. Logging around chain synchronization status was enhanced to provide clearer operational visibility.

Finally, the team made great progress on the [partial fanout](https://github.com/cardano-scaling/hydra/issues/1667) development. 

The **Leios** team held their [February monthly review session](https://www.youtube.com/watch?v=5uAJ-XBAysY&list=PLnPTB0CuBOBzWWpnojAK3ZaFy9RdofP6l), focusing on enhancing Cardano’s blockchain throughput. They presented a working prototype capable of producing endorser blocks and handling high transaction loads within a simulated network. Critical design discussions addressed resource management, balancing memory and disk usage to ensure Leios did not compromise the existing Ouroboros Praos security model. The team also reviewed sophisticated testing frameworks, including deterministic simulations, to evaluate network behavior under fault and adversarial conditions. The update concluded with formal cryptographic specifications and new voting models to maintain protocol integrity as the project progresses toward a public testnet.

### RESEARCH 

The **Input Output Research (IOR)** team is accepting proposals for the cryptographic tools for the blockchain workshop, affiliated with Eurocrypt 2026, in May. Proposal submissions remain open on the [CTB website](https://www.ctb-workshop.org/) until February 27.

![](https://ucarecdn.com/23fd19d6-3639-44a7-88c1-cf092a8d07ca/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

今週のエコシステム更新情報

*   [MoneyGram](https://x.com/midnightfdn/status/2026323874753683744)がMidnightネットワークの連合型ノードオペレーターに
    
*   [Yoroiステークプール](https://x.com/YoroiWallet/status/2025827992988250309)が二重報酬を提供、ADAとNIGHTトークンの同時獲得が可能に
    
*   [Cardano財団が](https://x.com/Catalyst_onX/status/2026268218290028946)がProject Catalystの運営を継承
    
*   [PythとCardanoのハッカソン](https://x.com/coinbureau/status/2025658103447068840)、アルゼンチンで3月開催
    
*   [COTI Network](https://x.com/COTInetwork/status/2024806635697229989)がArtifi LabsとDjedステーブルコインの長期開発で提携
    

### コアテクノロジー

**パフォーマンス&ベンチマーク**チームは、並列GCベンチマークを含むノードバージョン10.5.4および10.6.2のベンチマークをリリースし、PlutusV3の新しいベースラインを準備しました。パフォーマンスクラスターには、セキュリティ上重要な変更のベンチマークを安全に行うため、隔離されたカスタムのNixキャッシュが導入されました。制御されたコードセクションで遅延評価を強制することにより、トレーシングの堅牢性を向上させました。Leiosでは、LTLトレース検証器が完成し、統合を待っています。ノードの多様性については、形式的なトレーススキーマ定義が検証フェーズに入り、Rustネイティブによるトレース転送はテスト段階に移行しています。詳細は[テクニカル更新情報](https://updates.cardano.intersectmbo.org/2026-02-25-performance-and-tracing)をご覧ください。

### スケーリング

**Mithril**チームは新しい簡潔な証明の実装を続けました。SNARK用の[抽選ターゲット値計算](https://github.com/input-output-hk/mithril/issues/2974)を完了し、[プロトコルパラメーターをSNARK適正値へ更新](https://github.com/input-output-hk/mithril/issues/2969)し、SNARK回路のリファクタリングを準備し、Halo2回路からオフサーキットモジュールを削除しました。SNARKの集約前プリミティブ、SNARK用の署名者認証、再帰的回路プロトタイプのフルレビュー、再帰的Halo2回路に関する[テクニカルレポート](https://github.com/input-output-hk/mithril/issues/2981)の作成も進展しました。

Cardanoのブロックおよびトランザクションに関する新しい認証に関する作業も進展しており、アグリゲーターREST APIに、トランザクションメンバーシッププルーバーおよび証明ルートを実装しました。[2608ディストリビューションリリース](https://github.com/input-output-hk/mithril/issues/2967)の準備も開始しました。

Cardanoノードv.10.6.2のスナップショットコンバーターにおける破壊的変更に起因するバグを修正し、SNARK回路の不安定なユニットテストも解決しました。

**Hydra**チームは、安定性、正確性、診断機能の改善に注力しました。デコミットに影響を与える[競合状態](https://github.com/cardano-scaling/hydra/issues/2500)や、コミット周りで[ノードが停止するシナリオ](https://github.com/cardano-scaling/hydra/pull/2491)など、コンセンサス関連の複数の課題を解決した他、コミットおよびデコミットの処理に関連する[AckSnの無限ループ](https://github.com/cardano-scaling/hydra/pull/2510)問題も解消しました。[デポジットとチェーンロールバック](https://github.com/cardano-scaling/hydra/issues/2488)に関するバグを修正し、ユーザーから報告された`hydra-node`上での[コントラクトの計算時間](https://github.com/cardano-scaling/hydra/issues/2162)に関する不具合に対処し、トラブルシューティングを明確化することによってwitnessスクリプト欠如時のエラー報告を改善しました。チェーン同期ステータスに関するロギングを強化し、運用の可視性を向上させました。

[部分的ファンアウト](https://github.com/cardano-scaling/hydra/issues/1667)の開発も大きく進展しています。 

**Leios**チームは、Cardanoのスループット向上に焦点を当てた[2月の月例レビューセッション](https://www.youtube.com/watch?v=5uAJ-XBAysY&list=PLnPTB0CuBOBzWWpnojAK3ZaFy9RdofP6l)を開催しました。シミュレーションネットワークでエンドーサーブロックを生成し、高負荷のトランザクションを処理できる動作プロトタイプを提示しました。設計議論では、既存のOuroboros Praosのセキュリティモデルを損なうことのないようにメモリーとディスク使用量のバランスをとるリソース管理に焦点が当てられました。決定論的シミュレーションを含む高度なテストフレームワークを検討し、障害発生時や敵対的な条件下でのネットワークの挙動評価を行いました。セッションの締めくくりとして、パブリックテストネットに向けた、プロトコルの整合性を維持するための形式的な暗号仕様や新しい投票モデルが提示されました。

### 研究 

**Input Output Research（IOR）**チームは、5月に開催されるEurocrypt 2026に併設されるブロックチェーンワークショップのための暗号ツールの提案を受付中です。提案の提出は[CTBのウェブサイト](https://www.ctb-workshop.org/)で2月27日まで受け付けています。
