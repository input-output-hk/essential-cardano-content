---
title: Weekly development report as of 2026-02-13
tags:
  - Development
  - Weekly development updates
  - Statistics
  - Ecosystem
url: ""
image: https://ucarecdn.com/4070a617-c4eb-4ba0-a534-8bf0fdcf3906/
image_text: Weekly development report as of 2026-02-13
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   [Midnight Network](https://x.com/MidnightNtwrk/status/2021769584743702745) has announced that its mainnet launch is scheduled for the end of March 2026; also, keep an eye on the upcoming [Midnight city simulation](https://x.com/MidnightNtwrk/status/2021775937055134055)
    
*   [LayerZero integration](https://x.com/IntersectMBO/status/2021767246712893509) is coming to Cardano, enabling connectivity to more than 150 blockchains
    
*   [CswapDEX](https://x.com/CswapDEX/status/2021647768545374309) is rolling out native Bitcoin staking on the public testnet
    
*   Cardano is participating in the Africa Tech Summit this week – read the highlights [here](https://x.com/LallyMcClay/status/2021864381563162625)
    
*   [Amplify Cardano](https://x.com/RareNetworkWeb3/status/2020246701869826335) is sponsoring five booths for five projects at RareEvo, offering Web3 developers an opportunity to showcase their work.
    

### CORE TECHNOLOGY

Over the past few weeks, the **networking team** focused on enhancing the robustness of the diffusion layer by releasing [Cardano node v.10.5.4](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.4), which includes essential patches following the [November incident](https://www.intersectmbo.org/news/cardano-mainnet-incident-facts-at-a-glance). They also [optimized connectivity](https://github.com/IntersectMBO/ouroboros-network/issues/4381) for peers behind firewalls and implemented [support for WASM](https://github.com/IntersectMBO/ouroboros-network/pull/5229). Additionally, the team improved [diffusion stability](https://github.com/IntersectMBO/ouroboros-network/pull/5253) by enforcing a maximum number of reconnection attempts and adjusting ChainSync timeouts for trusted local root peers. They progressed on Leios development by creating a [network mux demo](https://github.com/IntersectMBO/ouroboros-network/issues/5261) and simulations to analyze traffic alongside Praos. The team further enhanced the `dmq-node` by moving it to a dedicated repository, refining validation logic, and fixing mempool bugs. Finally, they addressed technical debt by removing duplicate trace events and implementing networking adjustments for the new tracing system.

The **consensus** team continued working on node v.10.7 integration, integrated network packages up to `ouroboros-network-0.22.6` (#[1819](https://github.com/IntersectMBO/ouroboros-consensus/pull/1819); #[1865](https://github.com/IntersectMBO/ouroboros-consensus/pull/1865)), [incorporated](https://github.com/IntersectMBO/ouroboros-consensus/pull/1762) the latest ledger changes, and [integrated](https://github.com/IntersectMBO/ouroboros-consensus/pull/1819) `kes-agent-1.1`. As part of the node maintenance and support initiative, the team also delivered several node improvements. They [enhanced observability](https://github.com/IntersectMBO/ouroboros-consensus/pull/1826) by exposing the reason for chain switches in the `ChainSel` tracer, [added support](https://github.com/IntersectMBO/ouroboros-consensus/pull/1794) for the new `GetDRepDelegations` ledger state query in `NodeToClientV_23`, and [fixed an exception](https://github.com/IntersectMBO/ouroboros-consensus/pull/1842) caused by a resource mix-up in the V2 LedgerDB. Additional updates include [minor code cleanup](https://github.com/IntersectMBO/ouroboros-consensus/pull/1854) and new [documentation](https://github.com/IntersectMBO/ouroboros-consensus/pull/1830) clarifying the consensus and ledger interaction.

Finally, the team continued developing the Leios prototype: they [refactored](https://github.com/IntersectMBO/ouroboros-consensus/pull/1859) the design to use `EbHash` instead of `EbId`, [simplified](https://github.com/IntersectMBO/ouroboros-consensus/pull/1846) the codebase to monomorphic types to enable faster iteration, and [implemented](https://github.com/IntersectMBO/ouroboros-consensus/pull/1837) an in-memory `LeiosDb` to support `ThreadNet` tests.

### SCALING

This week, the **Mithril** team focused on implementing new succinct proofs. The team worked on pre-aggregation SNARK primitives in the STM library, completed [golden master tests](https://github.com/input-output-hk/mithril/issues/2912) for the non-recursive SNARK circuit, and worked on bridging CPU and circuit implementations. They also began adapting the certificate chain for SNARK-friendliness.

Additionally, the team continued work on the new certification for Cardano blocks and transactions. This included implementing the signable builder, along with the artifact and [proof routes](https://github.com/input-output-hk/mithril/issues/2956) in the aggregator REST API.

Finally, they worked on [static builds](https://github.com/input-output-hk/mithril/issues/2989) for Mithril nodes and fixed bugs in the hash-to-curve implementation of the Schnorr signature.

The **Leios** team continued steady progress across research, simulation, and tooling.

They proposed producing a concise joint summary report, targeted for early March, to reconcile protocol parameter findings from mainnet measurements, the TypeScript simulator, mathematical models, delta-Q analysis, and prior research, with the goal of aligning recommendations.

Work advanced on Leios-related components in the TypeScript simulator, with a demo expected shortly. In parallel, the team developed a supporting tool to reverse-engineer on-chain DApps by decompiling UPLC to Aiken and using a large language model to infer readable variable names.

They also progressed documentation and development tracker consolidation, refined the migration plan, and collaborated across research, engineering, and web teams to resolve outstanding technical questions and confirm migration timelines.

Following the February 10 working session, they completed the safety property statement and initiated the corresponding proof. Additional updates included formalizing sort-voting and certificate processes, clarifying the feta-comply method, extending the TypeScript MEV simulation with a simplified EBS model, and advancing Antithesis testing infrastructure using instrumented Go-based Leios demo nodes.

### RESEARCH 

The **Input Output Research (IOR)** team is focused on Work Package 26 planning and reviewing proposal submissions.

They are also planning the cryptographic tools for the blockchain workshop, affiliated with Eurocrypt 2026, in May. This workshop aims to bring together researchers working on cryptographic problems in different ecosystems to discuss the latest approaches and results. Proposal submissions remain open until February 27 on the [CTB website](https://www.ctb-workshop.org/).

![](https://ucarecdn.com/b991b0b6-c84e-4ad2-ac20-e6b329999b0d/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

今週のエコシステム更新情報

*   [Midnight Network](https://x.com/MidnightNtwrk/status/2021769584743702745)は、メインネットローンチを2026年3月末に予定していると発表、また、来る[Midnightシティシミュレーション](https://x.com/MidnightNtwrk/status/2021775937055134055)にも注目
    
*   [LayerZero](https://x.com/IntersectMBO/status/2021767246712893509)がCardano統合へ、150を超えるブロックチェーンとの接続が可能に
    
*   [CswapDEX](https://x.com/CswapDEX/status/2021647768545374309)がパブリックテストネットでのネイティブビットコインステーキングを展開
    
*   Cardanoは今週Africa Tech Summitに参加 - ハイライトは[こちら](https://x.com/LallyMcClay/status/2021864381563162625)
    
*   [Amplify Cardano](https://x.com/RareNetworkWeb3/status/2020246701869826335)がRareEvoで5つのプロジェクトのための5つのブースを後援、Web3開発者に成果を披露する機会を提供 
    

### コアテクノロジー

ここ数週間、**ネットワーキング**チームは伝播層の堅牢性強化に注力しており、[11月のインシデント](https://www.intersectmbo.org/news/cardano-mainnet-incident-facts-at-a-glance)を受けた必須パッチを含む[Cardanoノードv.10.5.4](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.4)をリリースしました。ファイアウォールの背後にあるピアの[接続性を最適化](https://github.com/IntersectMBO/ouroboros-network/issues/4381)し、[WASMのサポート](https://github.com/IntersectMBO/ouroboros-network/pull/5229)を実装しました。再接続試行回数に上限を設け、信頼されたローカルルートピアのChainSyncタイムアウトを調整することで、[伝播の安定性](https://github.com/IntersectMBO/ouroboros-network/pull/5253)を向上させました。Leiosの開発も進展しています。Praosと並行してトラフィックを分析するための[ネットワークmuxデモ](https://github.com/IntersectMBO/ouroboros-network/issues/5261)とシミュレーションを作成しました。`dmq-node`を専用リポジトリに移行し、検証ロジックを改良し、メモリープールのバグを修正することで、その機能を強化しました。重複するトレースイベントを削除し、新しいトレーシングシステム向けにネットワーク調整を行うことで、技術負債に対処しました。

**コンセンサス**チームは、ノードv.10.7の統合に向けた作業を継続し、ouroboros-network-0.22.6までのネットワークパッケージを統合し（#[1819](https://github.com/IntersectMBO/ouroboros-consensus/pull/1819)、 #[1865](https://github.com/IntersectMBO/ouroboros-consensus/pull/1865)）、最新の台帳の変更を[取り入れ](https://github.com/IntersectMBO/ouroboros-consensus/pull/1762)、`kes-agent-1.1`を[統合](https://github.com/IntersectMBO/ouroboros-consensus/pull/1819)しました。ノードのメンテナンスおよびサポートイニシアチブの一環として、ノードの改良も行いました。具体的には、`ChainSel`トレーサーでチェーンスイッチの理由を公開することで[可観測性を向上](https://github.com/IntersectMBO/ouroboros-consensus/pull/1826)させ、`NodeToClientV_23`に新しい`GetDRepDelegations`台帳ステートクエリの[サポートを追加](https://github.com/IntersectMBO/ouroboros-consensus/pull/1794)し、V2 LedgerDBでのリソースの取り違えによって引き起こされる[例外エラーを修正](https://github.com/IntersectMBO/ouroboros-consensus/pull/1842)しました。その他の更新には、[軽微なコードのクリーンアップ](https://github.com/IntersectMBO/ouroboros-consensus/pull/1854)や、コンセンサスと台帳の相互作用を明確にする新しい[ドキュメント](https://github.com/IntersectMBO/ouroboros-consensus/pull/1830)が含まれます。

Leiosプロトタイプの開発を継続しました。設計を[リファクタリング](https://github.com/IntersectMBO/ouroboros-consensus/pull/1859)して`EbId`の代わりに`EbHash`を使用するようにし、コードベースを単相型に[簡素化](https://github.com/IntersectMBO/ouroboros-consensus/pull/1846)してイテレーションを高速化し、`ThreadNet`テストをサポートするためにインメモリー`LeiosDb`を[実装](https://github.com/IntersectMBO/ouroboros-consensus/pull/1837)しました。

### スケーリング

**Mithril**チームは新しい簡潔な証明の実装に注力しました。STMライブラリにおける事前集約SNARKプリミティブに取り組み、非再帰的SNARK回路の[ゴールデンマスターテスト](https://github.com/input-output-hk/mithril/issues/2912)を完了し、CPU実装と回路実装のブリッジ作業を行いました。SNARKとの親和性を高めるための証明書チェーンの適応作業も開始しました。

Cardanoブロックおよびトランザクションのための新しい認証に関する作業を継続しました。これには、署名可能なビルダーの実装に加え、アグリゲーターREST APIにおけるアーティファクトおよび[証明ルート](https://github.com/input-output-hk/mithril/issues/2956)の実装が含まれます。

Mithrilノードの[静的ビルド](https://github.com/input-output-hk/mithril/issues/2989)に取り組み、シュノア署名のhash-to-curve実装におけるバグを修正しました。

**Leios**チームは、研究、シミュレーション、ツール開発において着実な進展を続けました。

3月11日の期限を前に推奨事項の足並みを揃えるため、3月上旬を目標とした簡潔な共同サマリーレポートの作成を提案しました。このレポートは、メインネットでの測定値、TypeScriptシミュレーター、数学的モデル、Delta-Qの分析結果、およびこれまでの研究から得られたプロトコルパラメーターに関する知見を集約するためのものです。

TypeScriptシミュレーター内のLeios関連コンポーネントの開発が進んでおり、間もなくデモが公開される予定です。並行して、UPLCをAikenに逆コンパイルし、LLMを使用して可読性の高い変数名を推論することで、オンチェーンDAppをリバースエンジニアリングする支援ツールも開発しました 。

ドキュメントおよび開発トラッカーの統合を進め、移行計画を精査した他、リサーチ、エンジニアリング、Webの各チーム間で連携し、未解決の技術的課題を解決して移行スケジュールを確定させました。

2月10日のセッション以降、安全性プロパティ記述を完了し、対応する証明を開始しました。その他、ソート投票と認証プロセスの形式化、feta-complyメソッドの明確化、EBS簡易モデルを使用したTypeScript MEVシミュレーションの拡張、計測機能を備えたGo言語ベースのLeiosデモノードを使用したAntithesisテストインフラも進めています。

### 研究 

**Input Output Research（IOR）**チームは、Work Package 26の計画策定と提案書のレビューに注力しています。

5月に開催されるEurocrypt 2026に併設される、ブロックチェーンワークショップのための暗号ツールの計画も進めています。このワークショップは、異なるエコシステムで暗号に関する問題に取り組む研究者を集め、最新のアプローチや結果について議論することを目的としています。提案の提出は[CTBのウェブサイト](https://www.ctb-workshop.org/)で2月27日まで受け付けています。
