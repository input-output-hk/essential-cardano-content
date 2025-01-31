---
title: Weekly development report as of 2025-01-31
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d21c8495-b45a-468e-8a9d-aaee5ad295b8/
image_text: Weekly development report as of 2025-01-31
---

### CORE TECHNOLOGY

This week, the **core technology** teams, in collaboration with the community and Intersect working groups, finalized work on the Conway ledger era, successfully delivering the Plomin hard fork. See more details in the Voltaire section. 

Over the past weeks, the **ledger** team also focused on minor improvements across implementation and testing. They removed the [cardano-prelude dependency](https://github.com/IntersectMBO/cardano-ledger/pull/4841), dropped the [era type parameter from MemoBytes](https://github.com/IntersectMBO/cardano-ledger/pull/4844), introduced a [NonZero data type](https://github.com/IntersectMBO/cardano-ledger/pull/4837), and made [predicate failure and environment fields lazy](https://github.com/IntersectMBO/cardano-ledger/pull/4857). They also added the \`[genSizedList](https://github.com/IntersectMBO/cardano-ledger/pull/4827)\` method in the [Foldy class](https://github.com/IntersectMBO/cardano-ledger/pull/4827), bumped the [spec version](https://github.com/IntersectMBO/cardano-ledger/pull/4839), updated [conformance imp test comments](https://github.com/IntersectMBO/cardano-ledger/pull/4853), enabled [imp-conformance for ENACT](https://github.com/IntersectMBO/cardano-ledger/pull/4829), refined the \`[GenT\` monad structure](https://github.com/IntersectMBO/cardano-ledger/pull/4838), and added [randomized certificates for imp-tests](https://github.com/IntersectMBO/cardano-ledger/pull/4830). On the infrastructure side, they pinned the Cabal version for Haddocks in a [GitHub Pages workflow](https://github.com/IntersectMBO/cardano-ledger/pull/4845), reordered directories in \`[RELEASING.md](https://github.com/IntersectMBO/cardano-ledger/pull/4843)\``,` switched from \`[cryptonite](https://github.com/IntersectMBO/cardano-ledger/pull/4859)\` to \`[crypton](https://github.com/IntersectMBO/cardano-ledger/pull/4859)\`, and added a [changelog for \`cardano-node-10.2](https://github.com/IntersectMBO/cardano-ledger/pull/4858)\`.

### WALLETS AND SERVICES

The **Lace** team has released [Lace v.1.19.0](https://www.lace.io/blog/lace-1-19-0-release), introducing significant performance, compatibility, and feature enhancements. This update makes the wallet faster, more versatile, and even easier to use.  
Key updates include:

*   **DApp explorer**. Users can now discover and connect with decentralized applications (DApps)directly within Lace. The explorer, powered by DappRadar, ranks DApps by popularity (unique active wallets). Developers can [register their DApps](https://dappradar.com/blog/how-to-list-your-dapps-on-dappradar-for-free) to be automatically included in the Lace DApp explorer. If a DApp does not yet support Lace, users can tag the DApp development team on **X** to request integration.
    
*   **Performance improvements**:
    
    *   **Cached chain history and UTXO requests**. Lace now caches chain history and UTXO network requests. This reduces duplicate calls to Blockfrost, lowers network load, and boosts wallet speed.
        
    *   **Snappier UI**. Enhanced responsiveness ensures a smoother, faster user experience.
        

### SCALING

This week, the **Mithril** team continued [implementing the incremental certification](https://github.com/input-output-hk/mithril/issues/2247) of the Cardano database. They enhanced the implementation of artifact production and upload, worked on the implementations of the client library and the [WASM client](https://github.com/input-output-hk/mithril/issues/2247), and kept adapting the explorer. Additionally, they have been preparing for the upcoming [transition to the next 'Pythagoras' Mithril era](https://github.com/input-output-hk/mithril/issues/2034), which is scheduled to occur in the following weeks.

Finally, the team optimized the compilation times of TLS dependencies in the nodes and started  working on updating the CI pipeline runners following their deprecation.

The **Leios** team progressed in both the Haskell and Rust implementations to enhance performance and simulation fidelity. In Haskell, they improved parameter handling by introducing disk-based configurations and added a generate-topology command for random setups. Additionally, they aligned the Leios sortition algorithm with established benchmarks. A comparison with a benchmark cluster indicated that adoption times were within 10% of the measured values.

On the Rust side, the team completed an initial block-level visualization, included baked-in latencies in topology files, and improved output formatting. These enhancements enable more consistent comparisons across simulations.

In terms of research and analysis, the team conducted a detailed investigation of the ‘fiat accompli’ sortition scheme for 500-vote committees. They discovered a combination of deterministic and random voters that significantly reduces the size of certificates. They also initiated a downstream impact assessment to identify potential effects on indexers, explorers, SDKs, APIs, DApps, and wallets, particularly concerning transaction construction and memory pool sharding. Furthermore, a DeltaQ analysis was performed to ensure that diffusion models matched across simulations and implementations. It is important to note that the Haskell simulation accounts for bandwidth constraints, with a delay of 328 ms per hop at 1 MB/s, while the Rust simulation currently does not include these constraints.

### VOLTAIRE

On January 29, 2025, Cardano achieved the transition to full community governance with the enactment of the **Plomin hard fork**.

The upgrade was enacted on-chain after the hard fork was approved by stake pool operators (SPOs) and the interim constitutional committee. This is a truly momentous achievement, not only for Cardano but for the entire blockchain industry.

This is the first hard fork in blockchain's relatively short history to be decided, approved, and enacted with the full involvement of the community rather than by a central authority. The decision began with [CIP-1694](https://cips.cardano.org/cip/CIP-1694), which was developed over two years and included global community workshops. It is also the only hard fork to date to make such an epochal change to blockchain governance.

Henceforth, the future of the Cardano blockchain is determined by governance actions. Any ada holder can raise a governance action, and all ada holders can vote to accept or reject it. They can do this as individuals or by [delegating their voting power](https://www.intersectmbo.org/news/delegating-to-vote-in-cardano) to delegated representatives (DReps).

The enactment was so smooth it was almost an anticlimax, largely as a result of the dedication and skill of the core team developers that made it happen.

### EDUCATION

This week, the **education** team attended internal workshops and continued their work on updates to the Cardano developer course. They also moved forward with planning for Midnight education.

### ![](https://ucarecdn.com/0c425897-d283-45b3-bf5f-ca49fe0594db/-/preview/-/format/auto/-/quality/smart/)コアテクノロジー

**コアテクノロジー**チームは、コミュニティとIntersectワーキンググループと協力して、Conway台帳期の作業を仕上げ、Plominハードフォークを実施しました。詳細はVoltaireセクションをご覧ください。 

過去数週間にわたり、**台帳**チームは実装とテスト全体の軽微な改良にも注力してきました。[cardano-prelude依存関係](https://github.com/IntersectMBO/cardano-ledger/pull/4841)を削除し、[MemoBytesから開発期型パラメーター](https://github.com/IntersectMBO/cardano-ledger/pull/4844)を削除し、[NonZeroデータ型](https://github.com/IntersectMBO/cardano-ledger/pull/4837)を導入し、 [述語障害フィールドと環境フィールドを遅延評価](https://github.com/IntersectMBO/cardano-ledger/pull/4857)にしました。[FoldyクラスにgenSizedListメソッド](https://github.com/IntersectMBO/cardano-ledger/pull/4827)を追加し、[仕様バージョン](https://github.com/IntersectMBO/cardano-ledger/pull/4839)を更新し、[適合性impテストコメント](https://github.com/IntersectMBO/cardano-ledger/pull/4853)を更新し、[ENACTのimp-conformance](https://github.com/IntersectMBO/cardano-ledger/pull/4829)を有効にし、[GenTモナド構造](https://github.com/IntersectMBO/cardano-ledger/pull/4838)を改良し、[imp-testsのランダム化証明書](https://github.com/IntersectMBO/cardano-ledger/pull/4830)を追加しました。インフラ面では、[GitHub Pagesワークフロー](https://github.com/IntersectMBO/cardano-ledger/pull/4845)でHaddocks用のCabalバージョンを固定し、[RELEASING.md](https://github.com/IntersectMBO/cardano-ledger/pull/4843)でディレクトリを並べ替え、[cryptoniteからcrypton](https://github.com/IntersectMBO/cardano-ledger/pull/4859)に切り替え、[cardano-node-10.2](https://github.com/IntersectMBO/cardano-ledger/pull/4858)の[変更ログ](https://github.com/IntersectMBO/cardano-ledger/pull/4858)を追加しました。

### ウォレットとサービス

**Lace**チームはLace [v.1.19.0](https://www.lace.io/blog/lace-1-19-0-release)をリリースし、大幅なパフォーマンス、互換性、機能強化を導入しました。この更新により、ウォレットの速度と汎用性が高まり、さらに使いやすくなりました。

主な更新内容は次のとおりです。

*   **DAppエクスプローラー**：ユーザーはLace内で分散型アプリケーション（DApp）を直接検出して接続できるようになりました。DappRadarを搭載したエクスプローラーは、人気（ユニークなアクティブウォレット）でDAppをランク付けします。開発者はLace DAppエクスプローラーに自動的に含まれるように[DAppを登録](https://dappradar.com/blog/how-to-list-your-dapps-on-dappradar-for-free)することができます。DAppがまだLaceをサポートしていない場合、ユーザーは**X**上でDAppの開発チームをタグ付けして統合を申請することができます。
    
*   **パフォーマンスの向上**
    
    *   **キャッシュされたチェーン履歴とUTXOリクエスト：**Laceはチェーン履歴とUTXOネットワークリクエストをキャッシュするようになりました。これにより、Blockfrostへの重複呼び出しが減少し、ネットワーク負荷が低下し、ウォレット速度が向上します。
        
    *   **Snappier UI**：応答性の向上により、よりスムーズで高速なユーザー体験を実現します。
        

### スケーリング

**Mithril**チームは、Cardanoデータベースの[増分認証の実装作業](https://github.com/input-output-hk/mithril/issues/2247)を続けました。アーティファクトの生成とアップロードの実装を強化し、クライアントライブラリーと[WASMクライアント](https://github.com/input-output-hk/mithril/issues/2247)の実装に取り組み、エクスプローラーの適応を続けました。数週間以内に予定されている、[次のPythagoras Mithril期への移行](https://github.com/input-output-hk/mithril/issues/2034)の準備も進めています。

ノード内のTLS依存関係のコンパイル時間を最適化し、CIパイプラインランナーの廃止に伴い更新作業を開始しました。

**Leios**チームはパフォーマンスとシミュレーションの精度を高めるためにHaskellとRustの実装を進めました。Haskellでは、ディスクベースの設定を導入することでパラメーター処理を改善し、ランダム設定のためのgenerate-topologyコマンドを追加しました。Leiosの選抜アルゴリズムを既存のベンチマークと整合させました。ベンチマーククラスターとの比較では、採用時間は測定値の10%以内でした。

Rustに関しては、最初のブロックレベル視覚化を完了し、トポロジーファイルにベイクインされたレイテンシーを含め、アウトプットフォーマットを改良しました。これらの強化により、シミュレーション間でより一貫性のある比較が可能になります。

調査と分析の観点から、チームは500票委員会の「フィアット実績」選抜スキームの詳細な調査を実施しました。証明書のサイズを大幅に減らす、決定的投票者とランダム投票者の組み合わせを発見しました。インデクサー、エクスプローラー、SDK、API、DApp、ウォレット、特にトランザクション構築とメモリープールシャーディングに関する潜在的な影響を特定するための下流影響評価も開始しました。拡散モデルがシミュレーションと実装間で一致することを保証するためにDeltaQ解析を実行しました。Haskellシミュレーションでは帯域幅の制約が考慮されており、1MB/sの遅延がホップあたり328msですが、Rustシミュレーションでは現在これらの制約が含まれていないことに注意が必要です。

### VOLTAIRE

2025年1月29日、Cardanoは**Plominハードフォーク**の制定により完全なコミュニティガバナンスへの移行を達成しました。

アップグレードは、ハードフォークがステークプールオペレーター（SPO）と暫定憲法委員会による承認後に、オンチェーンで制定されました。これは、Cardanoだけでなくブロックチェーン業界全体にとっても、真に重要な功績です。

これはブロックチェーンの比較的短い歴史の中で、中央当局ではなくコミュニティの全面的な関与によって決定、承認、制定された最初のハードフォークです。この決定は[CIP-1694](https://cips.cardano.org/cip/CIP-1694)から始まりましたが、これは、グローバルなコミュニティワークショップなどを通じて2年かけて開発されました。これはまた、ブロックチェーンガバナンスに画期的な変化をもたらす現時点で唯一のハードフォークでもあります。

この時点より、Cardanoブロックチェーンの未来はガバナンスアクションによって決められることになります。ADA保有者はガバナンスアクションを提起することができ、すべてのADA保有者はそれを受け入れるか拒否するかを投票することができます。彼らは個人として、または委任された代表（DRep）に[投票権を委任すること](https://www.intersectmbo.org/news/delegating-to-vote-in-cardano)によってこれを実行できます。

制定は非常にスムーズで、むしろあっけない程でしたが、これは主にそれを実現させたコアチーム開発者の献身とスキルの賜物です。

### 教育

**教育**チームは社内ワークショップに参加したほか、Cardano開発者コースの更新作業を継続しました。Midnightの教育計画も進めました。
