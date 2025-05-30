---
title: Weekly development report as of 2025-05-30
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/9411e248-9278-4931-8b05-dad59a24e484/
image_text: Weekly development report as of 2025-05-30
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano has reached a significant milestone, now supporting a total of 2,002 projects on its network. The number of delegated wallets remains stable at 1.33 million, reflecting a slight increase of 0.02% and indicating continued user engagement. 

On the asset side, 10.81 million native tokens have been issued under 215,713 token policies. Development activity is on the rise, with 134,286 Plutus scripts and 6,817 Aiken scripts deployed. Governance participation has also expanded, with a total of 1,331 delegated representatives (DReps), including 963 active DReps, which reflects a 1.14% increase since last week. Developer contributions remain strong, with 305 GitHub commits, indicating a sustained increase of 23.73% in activity.

In other news:

*   [Bitcoin Ordinals](https://x.com/IOHKMedia/status/1927730600565170548) have been bridged to Cardano for the first time using BitVMX, marking a new interoperability milestone
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1754960760512680060) and UNHCR have launched the world’s first crypto-backed ETP to support refugee aid initiatives
    
*   [Tempo](https://x.com/tempo_vote/status/1927644555870134291) has released a governance action dashboard, enabling real-time tracking of voting results and the creation of community polls
    
*   [Artifex Labs](https://x.com/artifex_labs/status/1924859785574326297) launched Reverse DJED, their first open-source public project, expanding open participation in stablecoin research.
    

### CORE TECHNOLOGY

This week, the **performance and tracing** team completed feature benchmarks for the new `ledger-metrics tracer` and the \`InboundGovernor optimizations**\`**, providing fresh performance data for both components. The team also merged Ledger metrics into the codebase, and two hotfixes were issued for the legacy tracing path to keep existing dashboards stable.

On infrastructure, the team drafted a migration plan for on-disk benchmarks — covering both LMDB and the forthcoming LSM-tree backend — and produced an initial impact analysis for Leios. In the new tracing stack, the tracer service was decoupled from the node, and forwarding over TCP is now supported, enabling more flexible deployment topologies.

The **consensus** team onboarded to the **Leios simulator**, joining research working sessions to share feedback and clarify open questions. To prepare for the upcoming LSM-tree backend, they resolved two key V2 `LedgerDB` issues (an edge-case bug and its patch) and fixed problems in `db-analyser --store-ledger` with a [specific solution](https://github.com/IntersectMBO/ouroboros-consensus/pull/1512).

Furthermore, as part of publishing formal CDDLs for consensus, the team patched several ledger CDDL specification commits ([1](https://github.com/IntersectMBO/cardano-ledger/pull/5079),[2](https://github.com/IntersectMBO/cardano-ledger/pull/5073),[3](https://github.com/IntersectMBO/cardano-ledger/pull/5066),[4](https://github.com/IntersectMBO/cardano-ledger/pull/5057)).

Finally, the team began integrating the new [lsm-tree storage layer](https://github.com/IntersectMBO/ouroboros-consensus/issues/1526).

### SMART CONTRACTS

Over the past two weeks, the **Plutus Core** team made advancements in language features, tooling, and documentation. Specifically, they completed [conformance tests for the modular-exponentiation primitive](https://github.com/IntersectMBO/plutus/pull/7090), integrated [built-in arrays into the Plutus Core specification](https://github.com/IntersectMBO/plutus/pull/7054), and enhanced CEK-machine diagnostics by implementing [richer error reporting](https://github.com/IntersectMBO/plutus/pull/7106). Additionally, Plinth now supports more idiomatic pattern-matching on integer literals using [integer equality with](https://github.com/IntersectMBO/plutus/pull/7108) `(==)` [from base](https://github.com/IntersectMBO/plutus/pull/7108), enabling constructs like `f 5 = …`.

The team also expanded documentation, enriched Haddocks for built-in functions in \`[PlutusTx.Builtins.Internal](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Builtins-Internal.html)\`, added a new [Plutus landing page](https://cardano-scaling.github.io/cardano-blueprint/plutus/index.html) to the Cardano Blueprint, and updated the [built-ins overview](https://github.com/IntersectMBO/plutus/blob/master/plutus-core/docs/BuiltinsOverview.md) to reflect recent changes. Current work includes case analysis on booleans and integers, CEK evaluation of `CompiledCode`, and the development of script-serialization documentation and an MSM primitive in private branches.

### WALLETS AND SERVICES

The **Lace** team launched its Bitcoin DeFi page in conjunction with the Bitcoin conference. They are developing a trust-minimized protocol for DeFi applications, which will soon enable users to lend, swap, and trade bitcoin ordinals, UTXOs, and more. Sign up [here](https://www.lace.io/bitcoin) for updates.

### SCALING

The **Hydra** team took a major step toward a lightweight node by completing the full [Blockfrost chain-following layer](https://github.com/cardano-scaling/hydra/issues/1305). Deposit handling was tightened with a [new validation check](https://github.com/cardano-scaling/hydra/issues/1951), and the explorer now tracks v.0.21 thanks to an [update to hydra-explorer](https://github.com/cardano-scaling/hydra-explorer/issues/45). User experience improvements included displaying the failing transaction for `PostTx` errors, with [event-log rotation](https://github.com/cardano-scaling/hydra/issues/1581) nearing completion. Furthermore, development of a [head-status endpoint](https://github.com/cardano-scaling/hydra/issues/1957) and [simplified script discovery](https://github.com/cardano-scaling/hydra/issues/1441) is underway. 

Future plans involve merging the final [deposit-logic adjustments](https://github.com/cardano-scaling/hydra/pull/1978), finishing event-log rotation, streamlining script discovery, and improving `etcd` diagnostics through [better error surfaces](https://github.com/cardano-scaling/hydra/issues/2026) and [connection-handling fixes](https://github.com/cardano-scaling/hydra/issues/1937). Completing the [head-status query](https://github.com/cardano-scaling/hydra/issues/1957) remains a key priority as Hydra advances towards its Glacier-ready release.

The **Mithril** team focused on supporting Cardano node v.10.4.1 and UTXO-HD in the aggregator, signer, and client. They continued working on the DMQ node implementation, advancing the implementation of the local message submission and local message notification node-to-client mini-protocols in the Pallas library. They also worked on extending the aggregator metrics to record the usage of different client types.

Finally, they fixed a [bug in the Cardano DB v2 snapshot](https://github.com/input-output-hk/mithril/issues/2519) that prevented full restoration and continued [refactoring the STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2369).

The **Leios** team focused on improving simulation capabilities, enhancing transaction processing, and expanding the test coverage. The team made significant progress in addressing transaction inclusion rates and developing a comprehensive conformance testing framework. See [this update](https://leios.cardano-scaling.org/news/2025/05/19/weekly-progress-summary) for more details.

### VOLTAIRE

[GovTool](https://gov.tools) is an open-source application that allows ada holders to register as DReps, vote on proposals, submit new governance actions, and review results, all through a clean and intuitive interface.

In the latest budget cycle, GovTool’s funding proposal was not approved by the community. Some found the original budget too high. Others were unaware of the tool’s deeper value or misunderstood its scope. A few raised concerns about the user experience or questioned whether a single tool should be responsible for such a significant portion of the governance process.

These concerns were heard – and they’re being acted on. It’s important to clarify. GovTool will not vanish immediately without funding.

A revised proposal is now in development, featuring a tighter scope, reduced costs, and a more precise articulation of its value to both users and builders within the ecosystem. The goal is to maintain and improve what already works while addressing concerns and building trust.

### CATALYST

The **Catalyst** global interactive map launched this week, offering a user-friendly way to explore funded projects worldwide and promote ecosystem visibility and collaboration. [Town hall 190](https://x.com/Catalyst_onX/status/1927772968278708375), streamed on YouTube and X, highlighted the [interactive map](https://projectcatalyst.io/global-map). The Catalyst app transition is progressing, preceding Ideascale's deprecation with the Fund14 launch.

### EDUCATION

The **education** team delivered Cardano Days sessions at the [Cardano community Azteca 2025 event](https://azteca.cardanomexicocommunity.com/) in Mexico and gathered feedback on the Cardano Days event held at the [National Technical University of Athens](https://www.ntua.gr/en/) the previous week. The team is also in the process of updating the Cardano developer course and developing educational content on zero-knowledge proofs.

### ![](https://ucarecdn.com/d71ba188-56e1-482e-8521-fd8e8597dd1b/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoは重要なマイルストンに達し、現在ネットワークでは合計2,002のプロジェクトがサポートされています。委任済みウォレット数はわずかに0.02%増の133万と安定しており、ユーザーエンゲージメントの継続が示されています。

アセットに関しては、21万5,713のトークンポリシーの下で1,081万のネイティブトークンが発行されており、どちらも漸進的な成長を示しています。開発活動は増加しており、13万4,286のPlutusスクリプトと6,817のAikenスクリプトがデプロイされています。ガバナンスへの参加も拡大し、963人のアクティブメンバーを含むDRep総数は1.14%増の1,331人となっています。開発者の貢献は引き続き強力で、GitHubコミット数は23.73%増の305件と、活動の堅調な伸びを示しています。

その他のニュース：

*   [Bitcoin Ordinals](https://x.com/IOHKMedia/status/1927730600565170548)は初めてBitVMX使用したCardanoとのブリッジを実現し、相互運用性の新たなマイルストンを達成
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1754960760512680060)とUNHCRは、難民支援イニシアチブをサポートするために、世界初の暗号資産に裏打ちされたETPを立ち上げ
    
*   [Tempo](https://x.com/tempo_vote/status/1927644555870134291)は投票結果のリアルタイム追跡とコミュニティ投票の作成を可能にするガバナンスアクションダッシュボードをリリース
    
*   [Artifex Labs](https://x.com/artifex_labs/status/1924859785574326297)は最初のオープンソースパブリックプロジェクトであるReverse DJEDを立ち上げ、ステーブルコイン研究へのオープン参加を拡大
    

### コアテクノロジー

**パフォーマンス&トレース**チームは、新しい’ledger-metrics tracer'と'InboundGovernor optimizations'の機能ベンチマークを完了し、両コンポーネントの最新パフォーマンスデータを提供しました。Ledgerメトリクスをコードベースにマージし、既存のダッシュボードを安定稼働させるため、従来のトレースパス向けに2つのホットフィックスを発行しました。

インフラ面では、オンディスクベンチマーク（LMDBと今後のLSMツリーバックエンドの両方に対応）の移行計画を策定し、Leiosに関する初期影響分析を作成しました。新しいトレーススタックでは、トレーサーサービスをノードから分離し、TCP経由での転送をサポートしたことで、より柔軟なデプロイトポロジーが可能になりました。

**コンセンサス**チームは**Leiosシミュレータ**ーにオンボーディングし、研究ワーキングセッションに参加してフィードバックを共有し、未解決の疑問点を明確にしました。今後のLSMツリーバックエンドに備え、V2 `LedgerDB`の2つの主要な問題（エッジケースのバグとそのパッチ）を解決し、`db-analyzer --store-ledger`における問題を[特定の解決策](https://github.com/IntersectMBO/ouroboros-consensus/pull/1512)を使って修正しました。

コンセンサス用の正式なCDDLを公開する一環として、複数の台帳CDDL仕様コミット（[1](https://github.com/IntersectMBO/cardano-ledger/pull/5079)、[2](https://github.com/IntersectMBO/cardano-ledger/pull/5073)、[3](https://github.com/IntersectMBO/cardano-ledger/pull/5066)、[4](https://github.com/IntersectMBO/cardano-ledger/pull/5057)）にパッチを適用しました。

新しい[lsmツリーストレージ層](https://github.com/IntersectMBO/ouroboros-consensus/issues/1526)の統合を開始しました。

### スマートコントラクト

この2週間で、**Plutus Core**チームは言語機能、ツール、ドキュメントにおいて進展しました。具体的には、[冪剰余プリミティブの適合性テスト](https://github.com/IntersectMBO/plutus/pull/7090)を完了し、[組み込み配列をPlutus Core仕様](https://github.com/IntersectMBO/plutus/pull/7054)へ統合し、[より豊富なエラー報告](https://github.com/IntersectMBO/plutus/pull/7106)を実装することでCEKマシン診断機能を強化しました。Plinthでは、[baseの](https://github.com/IntersectMBO/plutus/pull/7108)`(==)`を用いた整数リテラルのより慣用的なパターンマッチングをサポートして、`f5=...`のような構文を可能にしました。

ドキュメントを拡充し、'[PlutusTx.Builtins.Internal](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Builtins-Internal.html)'内の組み込み関数に関するHaddocksを充実させ、Cardano Blueprintに新しい[Plutusランディングページ](https://cardano-scaling.github.io/cardano-blueprint/plutus/index.html)を追加し、最近の変更を反映するために[組み込みの概要](https://github.com/IntersectMBO/plutus/blob/master/plutus-core/docs/BuiltinsOverview.md)を更新しました。現在の作業にはブール型と整数型のケース分析、`CompiledCode`のCEK評価、スクリプトのシリアル化に関するドキュメントとプライベートブランチにおけるMSMプリミティブの開発が含まれます。

### ウォレットとサービス

**Lace**チームは、ビットコインカンファレンスと併せてBitcoin DeFiページを立ち上げました。DeFiアプリケーション向けにミニマムトラストのプロトコルを開発しており、これによりユーザーはまもなく、ビットコイン、オーディナル、UTXOなどを、管理権を保持したままレンディング、スワップ、取引できるようになります。最新情報を入手するには、[こちらでサインアップ](https://www.lace.io/bitcoin)してください。

### スケーリング

**Hydra**チームは、完全な[Blockfrostチェーン追跡層](https://github.com/cardano-scaling/hydra/issues/1305)を完成させることで軽量ノードに向けた大きな一歩を踏み出しました。[新しい検証チェック](https://github.com/cardano-scaling/hydra/issues/1951)でデポジット処理が強化され、[hydra-explorerの更新](https://github.com/cardano-scaling/hydra-explorer/issues/45)により、エクスプローラーはv.0.21を追跡できるようになりました。ユーザーエクスペリエンスの改善としては、`PostTx`エラーで失敗したトランザクションを表示されるようにしたこと、[イベントログのローテーション](https://github.com/cardano-scaling/hydra/issues/1581)が完了に近づいていることが含まれます。[head-statusエンドポイント](https://github.com/cardano-scaling/hydra/issues/1957)の開発と[スクリプトディスカバリの簡素化](https://github.com/cardano-scaling/hydra/issues/1441)が進められています。Midnight Glacierドロップもサポートしました。

今後の計画としては、最終的な[デポジットロジック調整](https://github.com/cardano-scaling/hydra/pull/1978)のマージ、イベントログのローテーション完了、スクリプト検出の合理化、[エラー表示の改善](https://github.com/cardano-scaling/hydra/issues/2026)と[接続処理の修正](https://github.com/cardano-scaling/hydra/issues/1937)による`etcd`診断の改善が含まれます。HydraがGlacier対応リリースに向けて進む中で、[head-statusクエリ](https://github.com/cardano-scaling/hydra/issues/1957)の完了は、依然として主要優先事項です。

**Mithril**チームは、アグリゲーター、サイナー、クライアントにおけるCardanoノードv.10.4.1とUTXO-HDのサポートに注力しました。DMQノード実装の作業を続け、Pallasライブラリーにおけるローカルメッセージ送信とローカルメッセージ通知のnode-to-clientミニプロトコルの実装を進めました。さまざまなクライアントタイプの使用状況を記録するために、アグリゲーターのメトリクス拡張にも取り組みました。

完全な復元を妨げていた[Cardano DB v2スナップショットのバグ](https://github.com/input-output-hk/mithril/issues/2519)を修正し、[STM暗号ライブラリーのリファクタリング](https://github.com/input-output-hk/mithril/issues/2369)を継続しました。

**Leios**チームは、シミュレーション機能の改善、トランザクション処理の強化、テストカバレッジの拡大に注力しました。トランザクション取り込み率の課題への対処と、包括的な適合性テストフレームワークの開発において大きく進展しました。詳細は、[この更新情報](https://leios.cardano-scaling.org/news/2025/05/19/weekly-progress-summary)を参照してください。

### VOLTAIRE

[GovTool](https://gov.tools)は、ADA保有者がDRepとして登録し、提案への投票、新しいガバナンスアクションの提出、結果の確認を、クリーンで直感的なインターフェイスを通じて行うことができるオープンソースアプリケーションです。

最新の予算サイクルにおいて、GovToolの資金調達提案はコミュニティの承認を得られませんでした。当初の予算が高すぎると感じる人もいましたし、ツールのより深い価値を認識していなかったり、その範囲を誤解していた人もいました。中には、ユーザーエクスペリエンスに対する懸念を表明したり、単一のツールがガバナンスプロセスのこれほど重要な部分を担うべきか疑問を呈する声もありました。

これらの懸念は聞き入れられ、現在それに基づいて行動しています。はっきりさせておきたいのですが、資金調達ができなくても、GovToolが直ちに消滅することはありません。

現在改訂案を作成中です。ここでは、範囲を絞り、コストを削減し、エコシステム内のユーザーとビルダーの両方にその正確な価値を明確化しています。目標は、既存の機能でうまくいっている点を維持、改善しつつ、懸念に対処し、信頼を築くことです。

### CATALYST

**Catalyst**グローバルインタラクティブマップが公開されました。資金提供を受けた世界中のプロジェクトを探索し、エコシステムの可視性とコラボレーションを促進するユーザーフレンドリーなツールです。YouTubeとXでストリーミングされた[タウンホール190](https://x.com/Catalyst_onX/status/1927772968278708375)では、[インタラクティブマップ](https://projectcatalyst.io/global-map)が特集されました。Fund14の開始に伴うIdeascaleの非推奨化に先立ち、Catalystアプリへの移行も進行中です。

### 教育

**教育**チームは、メキシコで開催された[CardanoコミュニティAzteca 2025イベント](https://azteca.cardanomexicocommunity.com/)でCardano Daysセッションを行い、前週[アテネ国立工科大学](https://www.ntua.gr/en/)で開催されたCardano Daysイベントへのフィードバックを収集しました。Cardano開発者コースを更新し、ゼロ知識証明に関する教育コンテンツを開発しています。
