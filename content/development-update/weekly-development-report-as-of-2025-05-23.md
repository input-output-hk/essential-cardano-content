---
title: Weekly development report as of 2025-05-23
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/dd8e9208-05cb-4bcb-98b9-7f15821e8d30/
image_text: Weekly development report as of 2025-05-23
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano's ecosystem is experiencing steady growth in development, governance, and user activity. Currently, there are 1,999 projects in development. The number of delegated wallets has slightly increased to 1.33 million. Network usage is also up, with 109.73 million transactions processed. 

Asset activity remains positive, with 10.81 million native tokens issued across 215,665 policies. Smart contract adoption is on the rise, featuring 134,180 Plutus scripts and 6,752 Aiken scripts. Governance participation has grown to 1,316 delegated representatives (DReps), with 957 of them active. Additionally, developer engagement has increased significantly, with 391 commits on GitHub.

In other news:

*   Flow DeFi has released their [litepaper](https://x.com/flowdefi/status/1925257221530640520) and announced an integration with [Strike Finance](https://x.com/flowdefi/status/1924500743567839489).
    
*   [Trust Wallet](https://x.com/TrustWallet/status/1921930417336414348) has rolled out an update enabling in-app DRep delegation for Cardano users.
    
*   [Emurgo](https://x.com/bigpeyYT/status/1924475894514553287) has confirmed that it will no longer participate in Cardano governance using Genesis ADA.
    
*   [Liqwid Labs](https://x.com/liqwidfinance/status/1924518056073519533) announced a new integration between Begin Wallet and Liqwid Finance, improving accessibility for users interacting with DeFi on Cardano.
    

### CORE TECHNOLOGY

The core technology teams has released [node v.10.4.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.4.1), which introduces the UTXO-HD feature. UTXO-HD restructures the consensus layer, allowing the UTXO set to be stored either fully in memory (as in previous versions) or externally on storage media like SSD or HDD. While external storage reduces memory usage, it may slightly impact performance. The current UTXO-HD implementation uses an [LMDB backend](http://www.lmdb.tech/doc/), with a more optimized [LSM tree-based](https://en.wikipedia.org/wiki/Log-structured_merge-tree) backend planned for future releases. Further information is available on the [consensus website](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/utxo-hd/Overview).

This release also includes enhancements to the tracing system, improvements to LedgerDB configuration handling, updates to the node CLI and API, and an upgrade of the Plutus dependency to version 1.45.

Comprehensive system testing results for this release are available on the [tag testing page](https://tests.cardano.intersectmbo.org/test_results/node/tag_10_4_1.html), and detailed benchmarking reports can be found on the [Cardano updates](https://updates.cardano.intersectmbo.org/reports/2025-05-performance-10.4.1) site.

Over the past two weeks, the **ledger** team focused on preparatory work for upcoming major refactoring efforts related to Leios and nested transactions. This included the removal of support for older GHC versions and various code clean-ups. A key improvement involved refactoring protocol-parameter definitions to eliminate redundancy across different eras. This unification of serializers also simplifies the process of incorporating new parameters in the future.

Additional enhancements included deprecating `balance` in favor of the clearer [sumUTxO](https://github.com/IntersectMBO/cardano-ledger/pull/5028), renaming lenses such as [ppLens and ppuLens](https://github.com/IntersectMBO/cardano-ledger/pull/5034) for precision, removing the obsolete \`[ConwayNewEpochPredFailure](https://github.com/IntersectMBO/cardano-ledger/pull/5007)`, limiting` [BabbageNonDisjointRefInputs](https://github.com/IntersectMBO/cardano-ledger/pull/5011) `checks exclusively to` PlutusV3\` scripts, adjusting Byron EBBs to allow [zero-or-more stakeholder IDs](https://github.com/IntersectMBO/cardano-ledger/pull/5057), correcting [map-occurrence rules in Byron CDDL](https://github.com/IntersectMBO/cardano-ledger/pull/5066), and fixing the [COMPLETE pragma for \`NativeScript ShelleyEra](https://github.com/IntersectMBO/cardano-ledger/pull/5053)\`.

### WALLETS AND SERVICES

Input | Output (IO) has officially opened its new Buenos Aires office, establishing a presence in Argentina. The new space signals IO’s long-term commitment to building alongside the vibrant crypto community in Argentina and across Latin America. IO thanks the local Cardano community, partners, and team members who made this milestone possible and looks forward to accelerating regional innovation from its new LATAM hub.

### SCALING

This week, the **Mithril** team enabled incremental certification for the Cardano node [database (version 2)](https://github.com/input-output-hk/mithril/issues/2409) on the `release-mainnet` network.

They also continued working on the [DMQ node implementation](https://github.com/input-output-hk/mithril/issues/2470), completing the signature consumer and processor in the aggregator to support continuous signature handling, and added a mechanism to record the origin of each signature. The team also began adding support for UTXO-HD in the aggregator, signer, and client.

Finally, they addressed several bugs, improved CI workflows, and continued refactoring the [STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2369).

The **Leios** team made progress on trace verification, simulation tooling, and protocol analysis.

**Trace verification.** A revamped verifier now provides more detailed error messages and supports starting from non-initial states. It includes hand-crafted test suites and is integrated into Nix and CI, replacing the previous deterministic-conformance harness.

**Simulation improvements:**

*   _Haskell._ An extensive code-quality review, design audit, and refactoring plan are documented [here](https://github.com/input-output-hk/ouroboros-leios/pull/353). The review indicates that most future protocol adjustments will affect only a small portion of the code. Adding a mem-pool and transaction layer is estimated to take 100–200 hours.
    
*   _Rust._ New `tx-start-time` and `tx-stop-time` parameters eliminate warm-up bias. A `full-without-ibs` variant allows endorser blocks to directly reference transactions. Bugs related to shared-trace conformance were resolved, and visualizations were streamlined for the documentation site.
    

The legacy Leios report was relocated. Draft technical reports on network-spec and simulation confidence were added to CI. Rust simulator experiments achieved nearly 100% temporal efficiency (submitted transactions reaching the ledger) with updated Leios parameters, showing ~100s average latency. Spatial efficiency (transaction size/ledger size) was also tracked. Doubling/tripling IB capacity simulations indicated persistent transaction losses, suggesting other bottlenecks. Related materials are available [here](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w20/).

### CATALYST

The **Catalyst** town hall is now live-streamed on YouTube and X. [This week's session](https://youtube.com/live/bud9E55fsAY) focused on the Horizon report's findings and impact. The team is also transitioning from IdeaScale to the Catalyst platform. Catalyst-funded accelerators demonstrated strong progress at the [Draper Demo Day](https://x.com/draper_u/status/1923075910107816117) in Silicon Valley on May 19, showcasing the work of Cardano builders.

### EDUCATION

The **education** team is on the ground for Cardano Days at the [National Technical University of Athens](https://www.ntua.gr/en/) this week. Preparations are also underway for next week’s Cardano Days sessions at the Cardano community Azteca 2025 events in Tlaxcala and Puebla, Mexico, on May 27 and 29. [Registration](https://azteca.cardanomexicocommunity.com/) is now open for both events.  
  
Furthermore, the team is updating the Cardano developer course and developing new educational materials focused on zero-knowledge proofs.

![](https://ucarecdn.com/f1293d3c-cb85-4b50-a32a-78d91d86229c/-/preview/-/format/auto/-/quality/smart/)

### **エコシステム**

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは開発、ガバナンス、ユーザー活動において着実に成長しています。現在、1,999のプロジェクトが開発中です。委任されたウォレットの数はわずかに増加して133万。ネットワーク利用も増加し、処理されたトランザクションは1億973万に上ります。

資産の活動も堅調で、215,665のトークンポリシーにわたって、1,081万のネイティブトークンが発行されました。スマートコントラクトの利用は増加しており、13万4,180のPlutusスクリプトと6,752のAikenスクリプトが使用されています。ガバナンス参加者はDRepが1,316人に増加し、うち957人がアクティブです。さらに、GitHubでのコミット数は391と大幅に増加しました。

### その他のニュース：

*   Flow DeFiは[ライトペーパー](https://x.com/flowdefi/status/1925257221530640520)をリリースし、[Strike Finance](https://x.com/flowdefi/status/1924500743567839489)との統合を発表。
    
*    [Trust Wallet](https://x.com/TrustWallet/status/1921930417336414348)は、Cardanoユーザー向けにアプリ内でDRep委任を可能にするアップデートをリリース。
    
*   [Enurgo](https://x.com/bigpeyYT/status/1924475894514553287)は、Genesis ADAを使用したCardanoガバナンスに参加しないことを確認した。
    
*    [Liqwid Labs](https://x.com/liqwidfinance/status/1924518056073519533)は、Begin WalletとLiqwid Financeの新しい統合を発表し、CardanoでDeFiとやり取りするユーザーのアクセシビリティを改善。
    

### **コアテクノロジー**

コアテクノロジーチームは、UTXO-HD機能を導入した[ノードv.10.4.1を](https://github.com/IntersectMBO/cardano-node/releases/tag/10.4.1)リリースしました。UTXO-HDはコンセンサス層を再構築し、UTXOセットを完全にメモリー内に保存するか（以前のバージョンと同様）、またはSSDやHDDのようなストレージメディアに外部保存することを可能にします。外部ストレージはメモリー使用量を削減する一方で、パフォーマンスにわずかな影響を与える可能性があります。現在のUTXO-HDの実装では[LMDBバックエンド](http://www.lmdb.tech/doc/)を使用しており、将来のリリースではより最適化された[LSMツリーベース](https://en.wikipedia.org/wiki/Log-structured_merge-tree)のバックエンドが計画されています。詳しい情報は、[コンセンサスサイト](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/utxo-hd/Overview)を参照してください。

このリリースには、トレースシステムの強化、LedgerDB設定処理の改善、ノードCLIとAPIの更新、Plutus依存関係のバージョン1.45へのアップグレードも含まれています。

このリリースの包括的なシステムテスト結果は[タグテストページ](https://tests.cardano.intersectmbo.org/test_results/node/tag_10_4_1.html)で、詳細なベンチマークレポートは[Cardano更新情報](https://updates.cardano.intersectmbo.org/reports/2025-05-performance-10.4.1)サイトで確認できます。

この2週間、**台帳**チームはLeiosとネストされたトランザクションに関連する、今後の主要なリファクタリング作業に向けた準備に注力しました。これには古いGHCバージョンのサポート終了や、さまざまなコードのクリーンアップが含まれます。主な改善点はプロトコルパラメーター定義のリファクタリングであり、異なる開発期間の重複を排除しました。このシリアライザーの統一により、将来的に新しいパラメーターを組み込むプロセスが単純化されます。

その他の機能強化には、`balance`をより明確な[sumUTxO](https://github.com/IntersectMBO/cardano-ledger/pull/5028)に置き換えて非推奨としたこと、[ppLensやppuLens](https://github.com/IntersectMBO/cardano-ledger/pull/5034)など、レンズ名をより正確なものに変更したこと、旧式の\`[ConwayNewEpochPredFailure](https://github.com/IntersectMBO/cardano-ledger/pull/5007)`の削除、`[BabbageNonDisjointRefInputs](https://github.com/IntersectMBO/cardano-ledger/pull/5011)`チェックの`PlutusV3\`スクリプトへの制限、[0以上のステークホルダーID](https://github.com/IntersectMBO/cardano-ledger/pull/5057)を許可するための[Byron ebbs](https://github.com/IntersectMBO/cardano-ledger/pull/5053)の調整、[Byron CDDLにおけるマップ出現ルール](https://github.com/IntersectMBO/cardano-ledger/pull/5066)の修正、\`[NativeScript ShelleyEra](https://github.com/IntersectMBO/cardano-ledger/pull/5053)\`の[COMPLETEプラグマ](https://github.com/IntersectMBO/cardano-ledger/pull/5053)の修正が挙げられます。

### ウォレットとサービス

Input | Output (IO) はブエノスアイレスに新しいオフィスを公式に開設し、アルゼンチンにプレゼンスを確立しました。この新しいスペースは、アルゼンチンおよびラテンアメリカ全域で活気に満ちた暗号コミュニティと一緒に構築するというIOGの長期的なコミットメントを示すものです。IOGは、このマイルストンを可能にした地元のCardanoコミュニティ、パートナー、チームメンバーに感謝し、新しいLATAMハブから地域のイノベーションを加速することを楽しみにしています。

### スケーリング

**Mithril**チームは、`release-mainnet`ネットワーク上のCardanoノード[データベース（バージョン2）](https://github.com/input-output-hk/mithril/issues/2409)の増分認証を有効にしました。

[DMQノードの実装](https://github.com/input-output-hk/mithril/issues/2470)作業も続け、継続的な署名処理をサポートするために、アグリゲーター内の署名コンシューマーとプロセッサーを完成させ、各署名の発生元を記録するメカニズムを追加しました。アグリゲーター、サイナー、クライアントにおけるUTXO-HDのサポート追加を始めました。

バグの対処、CIワークフローの改善を行い、[STM暗号ライブラリー](https://github.com/input-output-hk/mithril/issues/2369)のリファクタリングを続けました。

**Leios**チームは、トレース検証、シミュレーションツール、プロトコル分析で前進しました。

**トレース検証：**刷新された検証ツールは、より詳細なエラーメッセージを提供するようになり、非初期状態からの検証開始をサポートします。これには手作業で作成されたテストスイートが含まれており、以前の決定性コンフォーマンスハーネスに代わり、NixおよびCIに統合されました。

**シミュレーションの改善**

*   _Haskell：_広範なコード品質レビュー、設計監査、リファクタリング計画が[ここ](https://github.com/input-output-hk/ouroboros-leios/pull/353)に文書化されています。レビューは、将来のプロトコル調整のほとんどがコードのごく一部にのみ影響することを示しています。メモリープールとトランザクション層を追加するための所要時間は100～200時間と見積もられています。
    
*   _Rust：_新しい`tx-start-time`および`tx-stop-time`パラメーターによってウォームアップバイアスが解消されました。`full-without-ibs`バリアントによって、エンドーサーブロックがトランザクションを直接参照することが可能になります。共有トレースの一致性に関連するバグを解決し、ドキュメントサイト向けに視覚化を効率化しました。
    

従来のLeiosレポートは移管されました。network-specとシミュレーションの確信度に関する技術レポートのドラフトがCIに追加されました。Rustシミュレーターの実験では、更新されたLeiosパラメーターを用いてほぼ100%の時間効率（提出されたトランザクションが台帳に到達する割合）を達成し、平均遅延は約100秒を示しました。空間効率（トランザクションサイズ/台帳サイズ）も追跡されました。IB容量を2倍、3倍にするシミュレーションでは、永続的なトランザクション損失が示され、他のボトルネックの存在が示唆されました。関連資料は[ここ](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w20/)を参照してください。

### CATALYST

Catalystタウンホールは現在、YouTubeとXでライブストリーミングされています。[今週のセッション](https://youtube.com/live/bud9E55fsAY)では、Horizonレポートの調査結果と影響に焦点が当てられました。IdeaScaleからCatalystプラットフォームへの移行も進んでいます。5月19日にシリコンバレーで開催された[Draper Demo Day](https://x.com/draper_u/status/1923075910107816117)では、Catalystが資金提供したアクセラレーターが堅調な進捗ぶりを披露し、Cardano開発者たちの取り組みが示されました。

### 教育

**教育**チームは今週、[アテネ国立工科大学](https://www.ntua.gr/en/)で開催のCardano Daysのために現地入りしています。来週開催されるCardano Daysセッションの準備も進めています。これは、5月27日と29日にメキシコのトラスカラとプエブラで開催されるCardanoコミュニティのAzteca 2025で開かれます。両イベントとも[登録](https://azteca.cardanomexicocommunity.com/)受付中です。  
  
Cardano開発者コースを更新し、ゼロ知識証明に焦点を当てた新しい教材を開発しています。
