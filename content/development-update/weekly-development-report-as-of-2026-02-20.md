---
title: Weekly development report as of 2026-02-20
tags:
  - Development
  - Weekly development updates
  - Ecosystem
  - Statistics
url: ""
image: https://ucarecdn.com/cce6e5ce-6f2b-4ac2-bd6d-b1f9a42c25e1/
image_text: Weekly development report as of 2026-02-20
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   [Blockdaemon](https://x.com/IOGroup/status/2024211546445172787) is now a Midnight federated mainnet validator
    
*   Catch up on all the [announcements](https://x.com/IOGroup/status/2022090622795129048) made at Consensus Hong Kong
    
*   The Cardano Foundation and Paris Blockchain Week [announced the ‘Institutional Adoption Track’](https://x.com/ParisBlockWeek/status/2014670497083163059) of the ‘Start In Block’ startup competition, targeting blockchain startups focused on enterprise-scale solutions
    
*   Coinbase [expands on-chain loans](https://x.com/coinbureau/status/2024287821347815577) to include ADA, XRP, and LTC as collateral
    
*   Messari releases the [State of Cardano Q4 2025 report](https://x.com/MessariCrypto/status/2024547859551703225).
    

### CORE TECHNOLOGY

This week, the **core technology** teams released [node v.10.6.2](https://github.com/IntersectMBO/cardano-node/releases/tag/10.6.2), focusing on structural improvements, tracing enhancements, and preparation for upcoming protocol upgrades.

The release further strengthens the new tracing system, improving observability and diagnostics across components. It also removes the legacy networking stack, simplifying the architecture and reducing technical debt, and introduces a major refactor of the API module structure to improve long-term maintainability.

Additionally, foundational work was added to support the upcoming intra-era hard fork (protocol version 11) and the future Dijkstra era (protocol version 12), preparing the node for the next phase of protocol evolution.

Additional highlights include expanded Plutus built-in functionality scheduled for activation in protocol version 11, stability improvements across networking and mempool handling, CLI updates including transaction fee estimation, and arm64 support for release artifacts and OCI images.

See [release notes](https://github.com/IntersectMBO/cardano-node/releases/tag/10.6.2) for more details.

The **ledger** team resolved several issues required for Cardano node v.10.6.2 release and focused on preparations for Cardano node v.10.7.0 release and the intra-era hard fork to protocol version 11. 

The team also continued work on [CIP-118](https://github.com/polinavino/CIPs/blob/polina/CIP0118/CIP-0118/README.md) (nested transactions), including formalizing ledger rules for sub-transactions and restructuring UTXO update handling to support this functionality. They completed renaming for CIP-159 (account address enhancement, phase one) to reflect the promotion of reward accounts to full accounts, and introduced a new ‘balance intervals’ field in the transaction body.

Finally, work on [CIP-165](https://github.com/cardano-foundation/CIPs/pull/1083) (canonical ledger state) progressed, with three namespaces implemented, which establishes the structural foundation for the broader canonical ledger state framework.

### SCALING

This week, the **Mithril** team focused on implementing new succinct proofs. The team worked on [pre-aggregation SNARK primitives](https://github.com/input-output-hk/mithril/issues/2792) in the STM library, completed bridging between CPU and circuit implementations, and worked on [lottery target pre-computation](https://github.com/input-output-hk/mithril/issues/2974). They also continued to adapt the certificate chain for SNARK-friendliness and to implement signer authentication for SNARK verification keys.

Additionally, the team continued work on the new certification for Cardano blocks and transactions. This included implementing the prover, proof routes in the aggregator REST API, and the diffusion of the [signing configuration](https://github.com/input-output-hk/mithril/issues/2971).

Finally, they continued working on static builds for Mithril nodes, fixed some CI bugs, and implemented [support](https://github.com/input-output-hk/mithril/issues/2790) for Cardano node v.10.6.2.

The **Hydra** team relaunched monthly [Hydra working group sessions](https://www.iog.io/news/hydra-adoption-phase) with a stronger focus on real-world users and production feedback. The core team shared updates on the upcoming v.1.3 release, including fee calculation fixes, snapshot improvements, memory optimizations, and progress on partial fan-out.

Key use cases, including DeltaDeFi and Masumi, presented their experience using Hydra as a scaling solution. Production hardening and developer experience improvements were identified as the key focus areas for the next iteration. 

The **Leios** team made steady progress on both prototype implementation and parameter consolidation:

*   The prototype is now minting and diffusing endorser blocks (EBs) — including large blocks with hundreds of transactions — under mempool load in a three-node protodevnet setup. The Linear Temporal Logic (LTL) trace verifier is production-ready and will be integrated into the demo. A dedicated session was held to define key verification properties, with stable operation targeted by the end of the month.
    
*   Architecture refinements: the C4 model, a popular way to visualize and document software architecture, was updated to include explicit state tracking for announcement flows, supporting equivocation detection and deduplication. For security, the EB store must retain all known but not yet certified EBs in volatile storage. Even in worst-case scenarios, volatile storage requirements remain manageable at tens of gigabytes over a 36-hour window. An immutable and volatile storage split is recommended to optimize disk usage.
    
*   On the research side, the team conducted combinatorial analysis and realistic network simulations to study mempool fragmentation and transaction propagation under overload, including regular random and expander graph topologies. This work is being aligned with the mempool inconsistency model and the optimistic performance analysis, with particular focus on transaction retention time. The team remains on track to deliver a joint summary document in early March that consolidates findings on safe protocol parameters.
    

Overall, the prototype demonstrates clear end-to-end behavior, while research and modeling efforts are rapidly converging.

### VOLTAIRE

Intersect is gearing up for committee elections in April. Applications open in March — keep an eye out for more details soon.

### RESEARCH 

The **Input Output Research (IOR)** team is planning the cryptographic tools for the blockchain workshop, affiliated with Eurocrypt 2026, in May. This workshop aims to bring together researchers working on cryptographic problems in different ecosystems to discuss the latest approaches and results. Proposal submissions remain open on the [CTB website](https://www.ctb-workshop.org/) until February 27.

![](https://ucarecdn.com/27859957-56d4-43e5-bc2a-92857f40c78b/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

今週のエコシステム更新情報

*   [Blockdaemon](https://x.com/IOGroup/status/2024211546445172787)がMidnightの連合型メインネットバリデーターに
    
*   香港Consensusで発表された全[告知](https://x.com/IOGroup/status/2022090622795129048)
    
*   Cardano財団とParis Blockchain Weekは、スタートアップコンペティションのStart In Blockで、企業規模のソリューションに焦点を当てたブロックチェーンスタートアップを対象とした[Institutional Adoption（機関採用）トラックを発表](https://x.com/ParisBlockWeek/status/2014670497083163059)
    
*   Coinbaseが[オンチェーンローンを拡張](https://x.com/coinbureau/status/2024287821347815577)し、ADA、XRP、LTCをコラテラルに追加
    
*   Messariが[Cardanoの現状：2025年第4四半期レポート](https://x.com/MessariCrypto/status/2024547859551703225)を公開
    

### コアテクノロジー

**コアテクノロジー**チームはCardano[ノードv.10.6.2](https://github.com/IntersectMBO/cardano-node/releases/tag/10.6.2)をリリースしました。このリリースでは、構造的な改善、トレーシング機能の強化、今後のプロトコルアップグレードへの準備に焦点を当てています。

このリリースにより新しいトレーシングシステムがさらに強化され、各コンポーネントにおける可観測性と診断機能が向上しました。レガシーネットワークスタックを削除することでアーキテクチャーを簡素化して技術負債を削減し、APIモジュール構造の大規模なリファクタリングを実施して長期的な保守性を高めました。

次回の開発期内ハードフォーク（プロトコルバージョン11）および将来のDijkstra期（プロトコルバージョン12）をサポートするための基礎作業を追加し、プロトコル進化の次段階に向けた準備を整えました。

その他のハイライトとして、バージョン11で有効化予定のPlutus組み込み機能の拡張、ネットワークおよびメモリープール処理の安定性向上、トランザクション手数料見積もりを含むCLIの更新、arm64サポートが挙げられます。

詳細は[リリースノート](https://github.com/IntersectMBO/cardano-node/releases/tag/10.6.2)をご覧ください。

**台帳**チームは、Cardanoノードv.10.6.2のリリースに必要な諸問題を解決し、ノードv.10.7.0およびプロトコルバージョン11への開発期内ハードフォークに向けた準備に注力しました。 

[CIP-118](https://github.com/polinavino/CIPs/blob/polina/CIP0118/CIP-0118/README.md)（ネストされたトランザクション）に関する作業を継続し、サブトランザクションのための台帳ルールの形式化や、この機能をサポートするためのUTXO更新処理の再構築を行いました。CIP-159（アカウントアドレス強化フェーズ1）に関連して、報酬アカウントをフルアカウントへ昇格させることに伴う名称変更を完了し、トランザクションボディに新たに‘balance intervals’フィールドを導入しました。

[CIP-165](https://github.com/cardano-foundation/CIPs/pull/1083)（標準台帳状態）の作業が進展しました。ここでは3つの名前空間を実装して、より広範な標準台帳状態フレームワークの構造的基盤を確立しました。

### スケーリング

**Mithril**チームは新しい簡潔な証明の実装に注力しました。STMライブラリーにおける[集約前SNARKプリミティブ](https://github.com/input-output-hk/mithril/issues/2792)に取り組み、CPU実装と回路実装のブリッジ作業を完了し、[抽選ターゲットの事前計算](https://github.com/input-output-hk/mithril/issues/2974)にも着手しました。SNARKとの親和性を高めるための証明書チェーンの適応作業や、SNARK検証鍵のための署名者認証の実装も継続しています。

Cardanoブロックおよびトランザクションのための新しい認証に関する作業を継続しました。具体的には、証明者、アグリゲーターREST APIにおける証明ルート、[署名設定](https://github.com/input-output-hk/mithril/issues/2971)の伝播機能の実装などが挙げられます。

Mithrilノードの静的ビルド、CIバグの修正、Cardanoノードv.10.6.2の[サポート](https://github.com/input-output-hk/mithril/issues/2790)を実装しました。

**Hydra**チームは、実際のユーザーや本番環境からのフィードバックへ改めて重点を置きながら、月例のHydraワーキンググループセッションを再開しました。コアチームは、手数料計算の修正、スナップショットの改善、メモリー最適化、部分的なファンアウトの進捗など、次期v.1.3リリースの更新情報を共有しました。

DeltaDeFiやMasumiといった主要なユースケースにおける、スケーリングソリューションとしてのHydraの使用経験が発表されました。次のイテレーションの主要な重点分野として、本番環境での堅牢化と開発者エクスペリエンスの向上が特定されました。 

**Leios**チームは、プロトタイプ実装とパラメーターの集約の両面で着実に進展しました。

*   3ノードのプロトタイプ開発ネット環境にて、メモリープールに負荷がかかった状態で、数百のトランザクションを含む大きなブロックを持つエンドーサーブロック（EB）のミントと伝播に成功しました。LTL（線形時相論理）トレース検証ツールが本番利用可能な状態となりました。これは、デモに統合される予定です。主要な検証プロパティを定義するための専用セッションが開催され、今月末までの安定稼働を目指しています。
    
*   アーキテクチャーの精査：ソフトウェアアーキテクチャーを視覚化および文書化する一般的な方法であるC4モデルを更新し、アナウンスメントフローに明示的な状態追跡を追加して、二重署名の検出と重複排除をサポートしました。セキュリティ上の理由から、EBストアは未認証の既知の全EBを揮発性ストレージに保持する必要があります。最悪のシナリオでも、36時間のウィンドウで数十GB程度という管理可能な範囲に収まります。ディスク使用量最適化のため、不変ストレージと揮発性ストレージの分割が推奨されています。
    
*   研究に関しては、組合せ分析と現実的なネットワークシミュレーションを実施し、正則ランダムグラフやエキスパンダーグラフといったトポロジーを用いて、過負荷時におけるメモリープールの断片化とトランザクション伝播を調査しました。この作業は、メモリープールの不整合モデルや楽観的パフォーマンス分析と整合を図っており、特にトランザクションの保持時間に焦点を当てています。安全なプロトコルパラメーターに関する知見をまとめた共同サマリー文書は、3月上旬の提供予定に向けて順調に進んでいます。
    

プロトタイプは一連の動作が設計通りに機能することを実証しており、研究とモデリングの取り組みは急速に収束しつつあります。

### VOLTAIRE

Intersectは、4月に開催される委員会選挙の準備を進めています。3月より立候補の受付が開始されますので、今後の更新情報にご注目ください。

### 研究 

**Input Output Research（IOR）**チームは、5月に開催されるEurocrypt 2026に併設されるブロックチェーンワークショップのための暗号ツールの計画を進めています。このワークショップは、異なるエコシステムで暗号に関する問題に取り組む研究者を集め、最新のアプローチや結果について議論することを目的としています。提案の提出は[CTBのウェブサイト](https://www.ctb-workshop.org/)で2月27日まで受け付けています。
