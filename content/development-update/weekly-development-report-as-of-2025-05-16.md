---
title: Weekly development report as of 2025-05-16
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/12c6163b-6379-4936-b860-20be9ab07716/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano continues to show steady growth across ecosystem metrics. The number of projects building has reached 1,999, with delegated wallets holding steady at 1.33 million. On-chain activity also climbed, with 109.37 million transactions processed, and native assets reaching 10.79 million under 214,832 token policies.

Smart contract deployment remains strong, with 133,417 Plutus scripts and 6,640 Aiken scripts, showing a 0.49% increase in script activity since last week. Governance engagement has grown as well, with 1,305 DReps, including 954 active, up 1% from the previous count. Developer momentum is reflected in 224 GitHub commits, highlighting continued contributions across Cardano’s codebase.

In other news:

*   The Cardano [budget proposal](https://x.com/IntersectMBO/status/1922014219261587513) has been submitted on-chain as an info action, encompassing 39 individual proposals
    
*   [Flow DeFi](http://x.com/flowdefi/status/1922361617716515125) shared a sneak peek of their open-source lending protocol, with a public testnet expected in the coming weeks
    
*   [FluidTokens](https://x.com/Cardanians_io/status/1922908532967366702) has launched Babel fees on mainnet, enabling users to pay transaction fees in CNTs, wBTC, and other supported assets.
    

### CORE TECHNOLOGY

This week, the **consensus** team tackled Genesis‐related fixes and tooling improvements. They corrected an edge case in chain selection immediately after catch-up by merging an [edge-case fix](https://github.com/IntersectMBO/ouroboros-consensus/pull/1505) and ensured that [ChainSync jumping is disabled once a node is caught up](https://github.com/IntersectMBO/ouroboros-consensus/pull/1492). In collaboration with the Cardano Foundation, they discussed bespoke Antithesis tooling for node testing — see the details in [this Discord thread](https://discord.com/channels/1136727663583698984/1239889178938966016/1369693032957349890) — and continued assisting the Leios research team with open design questions.

Progress on Cardano Blueprint CDDL validation continued. The team’s latest update, [CDDL-spec validators](https://github.com/IntersectMBO/ouroboros-consensus/pull/1422), now confirms several golden CBOR files conform to the specification, with more tests on the way. To welcome new contributors, they also introduced an [automatic code formatter](https://github.com/IntersectMBO/ouroboros-consensus/pull/1500) for `ouroboros-consensus`, streamlining future development.

### WALLETS AND SERVICES

Brave and IO are partnering to integrate Cardano, including native assets, into the Brave wallet. This collaboration with Brave CEO Brendan Eich and his team aims to create a more secure, accessible, and user-respecting Web3. IO founder Charles Hoskinson highlighted the partnership's role in expanding wallet functionality for Cardano users in the on-chain governance era, while also protecting privacy and fostering active participation. For more information, refer to the [press release](https://iohk.io/en/newsroom/input-output-partners-with-brave-to-integrate-cardano-into-brave-wallet). 

### SMART CONTRACTS

Over the past two weeks, the **Plutus** team enhanced the Cardano blueprint's Plutus section by adding new documentation to guide developers in implementing alternative Plutus Core evaluators. The team also continued improving the Plutus language itself, completing cost- and property-based testing for the modular-exponentiation primitive, as well as costing for new [BuiltinArray functions](https://github.com/IntersectMBO/plutus/pull/6950). A bug in `expModInteger` was resolved, along with updates to its [property tests](https://github.com/IntersectMBO/plutus/pull/7066) and [costing](https://github.com/IntersectMBO/plutus/pull/7080). The team is currently evaluating different methodologies for the Bool case analysis, and the built-in values CIP is in review.

Significant progress in formal methods includes the integration of the certifier with the Plinth compiler, making it accessible as a [reusable library](https://github.com/IntersectMBO/plutus/pull/7067) via `plutus-metatheory`, the generation of [Agda certificates](https://github.com/IntersectMBO/plutus/pull/7081), and its integration into `plutus-tx-plugin`. These advancements were presented at the latest public Plutus working group meeting, which also featured demonstrations of the certifier and the new built-in arrays. Upcoming tasks involve developing conformance tests for modular exponentiation, creating landing-page and serialization documentation for the Blueprint, addressing two UPLC force/delay certifier tests, and incorporating an MSM primitive.

### SCALING

This week, the **Hydra** team focused on deposit fixes and incremental-commit handling, alongside UX and documentation tweaks prompted by collaboration with Glacier Drop operators. Ongoing efforts include deeper Blockfrost integration, event-log rotation, and additional user-experience refinements.

The **Mithril** team advanced the DMQ node implementation by finalizing the delayer and retrier decorators, enabling support for multiple signature publishers in the signer. They also implemented the signature consumer and processor in the aggregator to handle incoming signatures continuously.

The team re-implemented the GCP file uploader using a more robust library and addressed the [cleanup of unexpected immutable](https://github.com/input-output-hk/mithril/issues/2429) files downloaded in snapshot archives.

Finally, they improved Cardano node restoration tests to ensure reliable restarts and continued [refactoring the STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2369) for better clarity.

The **Leios** team focused on simulation analysis, security improvements, and protocol documentation. Using the Rust simulator, they executed the first high-throughput simulations of Leios at rates up to 1,000 TPS. Two new metrics were introduced to evaluate system performance _temporal efficiency_, which measures how many submitted transactions are included in the ledger (with near 100% considered optimal), and _spatial efficiency_, the ratio of transaction size to total ledger size (including IBs, EBs, and RBs), which reflects storage efficiency.

Recent revisions to Full and Short Leios configurations have led to notable improvements in both metrics. Simulations indicate an average transaction lifecycle of around 100 seconds from submission to ledger inclusion, highlighting the protocol’s progress toward scalable throughput and optimized resource use. 

For more detailed information about the simulations and analysis, please refer to the [analysis documentation](https://github.com/input-output-hk/ouroboros-leios/tree/main/analysis) and the [profitability analysis notebook](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/profitability-leios.ipynb).

### VOLTAIRE 

The Cardano community answered the call in the 2025 Q1 committee elections, with 522 members (27% of eligible voters) casting a total of 11,839 ballots among 119 candidates competing for 36 seats across eight committees. 

Intersect hosted a series of X Spaces as a facilitator where candidates could introduce themselves, and electors could inform their decisions. This strong turnout was a great result for the progress of Cardano governance.

The full details, including the names of the successful candidates, are available on the [Intersect website](https://www.intersectmbo.org/news/intersect-committee-election-results).

### CATALYST

**Catalyst** town halls return to Zoom and are livestreamed on [YouTube](https://www.youtube.com/live/1QgzVeGOuDs?si=TTDIhpxTdyElpQxb) and [X](https://x.com/Catalyst_onX/status/1922700616645869875), focusing on the future of Catalyst voting with research findings on alternative voting methods. Continued technical development of the Catalyst platform is a key priority in anticipation of a potential Fund14 deployment. The Catalyst Horizons report is available in [English](http://projectcatalyst.io/horizons2025) and [Japanese](https://projectcatalyst.io/reports/horizons2025-jp.pdf).

### EDUCATION

The education team is gearing up for Cardano Days at the [National Technical University of Athens](https://www.ntua.gr/en/) next Tuesday and Wednesday (May 20-21). [Registration is open](https://docs.google.com/forms/d/e/1FAIpQLSc6MR8PGMuufxiW0g9sph3_2wUSGSZTrLCxwlZbKmwJoSuz-A/viewform?fbzx=-6954144701218428857) for those interested in attending. Preparations are also underway for upcoming Cardano Days sessions at the Cardano community Azteca 2025 event in Mexico later this month. Furthermore, the team is updating the Cardano developer course and developing new educational materials focused on zero-knowledge proofs.  
  
![](https://ucarecdn.com/4f759aca-9775-4fcf-98e0-cfe0d2d9a841/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoはエコシステム指標全体で着実に成長を続けています。構築中のプロジェクト数は1,999に達し、委任済みウォレットは133万で安定しています。オンチェーンの活動も増加しています。1億937万件のトランザクションが処理され、21万4,832件のトークンポリシーの下でネイティブアセットは1,079万に達しています。

スマートコントラクトのデプロイは堅調で、Plutusスクリプトが13万3,417、Aikenスクリプトが6,640と、スクリプトアクティビティが先週から0.49%増加していることを示しています。ガバナンスへのエンゲージメントも増加し、Drepが1,305人（うち954人がアクティブ）と、前回の集計から1%増加しました。開発者の勢いは、259というGitHubコミット数に反映されており、Cardanoコードベース全体への継続的な貢献が浮き彫りにされています。

その他のニュース： 

*   Cardano[予算案](https://x.com/IntersectMBO/status/1922014219261587513)は、39の個別の提案を含む情報アクションとしてオンチェーンに提出
    
*   [Flow DeFi](http://x.com/flowdefi/status/1922361617716515125)はオープンソースのレンディングプロトコルのプレビューを公開。パブリックテストネットは数週間以内に公開される見込み
    
*   [FluidTokens](https://x.com/Cardanians_io/status/1922908532967366702)はメインネットでBabelフィーをローンチ。ユーザーはCNTやwBTCなど、サポートされている資産でトランザクション手数料の支払いが可能に
    

### コアテクノロジー

**コンセンサス**チームはGenesis関連の修正とツール改良に取り組みました。[エッジケース修正](https://github.com/IntersectMBO/ouroboros-consensus/pull/1505)をマージしてキャッチアップ直後のチェーン選択におけるエッジケースを修正し、 [ノードがキャッチアップされるとChainSyncジャンプが確実に無効になる](https://github.com/IntersectMBO/ouroboros-consensus/pull/1492)ようにしました。Cardano財団と協力してノードテストのためのオーダーメイドのアンチテーゼツールについて議論し（詳細は[このDiscordスレッド](https://discord.com/channels/1136727663583698984/1239889178938966016/1369693032957349890)を参照）、設計に関するオープン質問でLeios研究チームの支援を続けました。

Cardano Blueprint CDDLの検証は順調に進んでいます。最新の[CDDL-specバリデーター](https://github.com/IntersectMBO/ouroboros-consensus/pull/1422)によって、複数のCBORゴールデンファイルが仕様に適合していることが確認されました。今後さらに多くのテストが予定されています。新たなコントリビューターを歓迎するために、`ouroboros-consensus`用の[自動コードフォーマッター](https://github.com/IntersectMBO/ouroboros-consensus/pull/1500)を導入し、将来の開発を合理化しました。

### ウォレットとサービス

BraveとIOは、ネイティブアセットを含むCardanoをBraveウォレットに統合するために提携しています。Brave のBrendan Eich CEOが率いるチームとのコラボレーションは、より安全で、アクセスしやすく、ユーザーを尊重するWeb3の作成を目的としています。IO創立者のCharles Hoskinsonは、プライバシーを保護し、積極的な参加を促進しながら、オンチェーンガバナンス時代のCardanoユーザーのウォレット機能を拡大するこの提携の役割を強調しました。詳しくは[プレスリリース](https://iohk.io/jp/newsroom/input-output-partners-with-brave-to-integrate-cardano-into-brave-wallet)を参照してください。 

### スマートコントラクト

この2週間、**Plutus**チームはCardano BlueprintのPlutusセクション強化を目的に、開発者が代替のPlutus Core評価器を実装するのを支援するための新しいドキュメントを追加しました。Plutus言語自体の改善を続け、モジュラー指数演算プリミティブのコストベースおよびプロパティベースのテストを完了させました。同様に、[新しいBuiltinArray関数](https://github.com/IntersectMBO/plutus/pull/6950)のコスト評価も完了させました。`expModInteger`のバグを修正し、その [プロパティテスト](https://github.com/IntersectMBO/plutus/pull/7066)と [コスト評価](https://github.com/IntersectMBO/plutus/pull/7080)も更新しました。現在、ブールケース分析のためのさまざまな方法論を評価しており、組み込み値に関するCIPをレビューしています。

形式手法における重要な進捗には、証明器のPlinthコンパイラへーの統合（これにより`plutus-metatheory`を通じて[再利用可能なライブラリー](https://github.com/IntersectMBO/plutus/pull/7067)としてアクセス可能になったこと）、[Agda証明書](https://github.com/IntersectMBO/plutus/pull/7081)の生成、および`plutus-tx-plugin`への統合が含まれます。これらの進展は、最新の公開Plutusワーキンググループ会議で発表されました。この会議では、証明器と新しい組み込み配列のデモンストレーションも行われました。今後のタスクには、モジュラー指数演算の適合性テストの開発、Blueprintのランディングページとシリアル化に関するドキュメントの作成、2つのUPLC force/delay証明器テストへの対応、およびMSMプリミティブの組み込みが含まれます。

### スケーリング

**Hydra**チームは、Glacier Dropオペレーターとの協力によって促されたUXとドキュメントの微調整と並行して、デポジットの修正とインクリメンタルコミットメントの処理に注力しました。継続中の取り組みには、Blockfrost統合の深化、イベントログのローテーション、追加のユーザーエクスペリエンス改善が含まれます。

**Mithril**チームは、遅延処理と再試行処理のデコレーターを完成させてDMQノードの実装を進め、署名者においてマルチシグ発行者のサポートを可能にしました。アグリゲーターに署名コンシューマーとプロセッサーを実装し、受信する署名を継続的に処理できるようにしました。

堅牢なライブラリーを使用してGCPファイルアップローダーを再実装し、スナップショットアーカイブにダウンロードされた[予期しない不変ファイルのクリーンアップ](https://github.com/input-output-hk/mithril/issues/2429)に対処しました。

信頼性の高い再起動を保証するためにCardanoノードの復旧テストを改善し、明確性を高めるための[STM暗号ライブラリーのリファクタリング](https://github.com/input-output-hk/mithril/issues/2369)を継続しました。

**Leios**チームは、シミュレーション分析、セキュリティ向上、プロトコルドキュメントに重点を置きました。Rustシミュレーターを使用して、最大1000TPSの速度でLeios初の高スループットシミュレーションを実行しました。システムパフォーマンス評価のために、送信されたトランザクションのうち台帳に含まれる割合を測定した「時間効率」（ほぼ100%で最適と見なされる）、および、トランザクションサイズと総台帳サイズ（IB、EB、RBを含む）の比率でストレージ効率を示す「空間効率」という2つの新しい指標が導入されました。

Full LeiosとShort Leiosの構成に対する最近の改訂により、両方のメトリクスに著しい改善が見られました。シミュレーションでは、トランザクションが送信されてから台帳に含まれるまでの平均ライフサイクルが約100秒であることが示されており、スケーラブルなスループットと最適化されたリソース使用に向けたプロトコルの進捗が強調されています。 

シミュレーションや分析の詳細は、[分析資料](https://github.com/input-output-hk/ouroboros-leios/tree/main/analysis)および[収益性分析ノート](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/profitability-leios.ipynb)を参照してください。

### VOLTAIRE 

Cardanoコミュニティは2025年第1四半期の委員会選挙において呼びかけに応え、522名のメンバー（有権者の27%）が、8つの委員会にわたる36議席を争う119名の候補者に対して、合計11,839票を投じました。 

Intersectは、候補者が自己紹介を行い、有権者が意思決定の参考となる情報を得られる場として、一連のX Spacesを開催しました。この高い投票率は、Cardanoガバナンスの進展にとって素晴らしい結果となりました。

当選者の氏名を含む詳細情報は、[Intersectウェブサイト](https://www.intersectmbo.org/news/intersect-committee-election-results)で公開されています。

### CATALYST

**Catalystの**タウンホールはZoomに戻り、[YouTube](https://www.youtube.com/live/1QgzVeGOuDs?si=TTDIhpxTdyElpQxb)と[X](https://x.com/Catalyst_onX/status/1922700616645869875)でライブ配信されます。代替投票方法に関する調査結果に焦点を当て、Catalyst投票の未来について議論します。潜在的なFund14の展開を見据え、Catalystプラットフォームの継続的な技術開発が重要な優先事項です。Catalyst Horizonsレポートは[英語](http://projectcatalyst.io/horizons2025)と[日本語](https://projectcatalyst.io/reports/horizons2025-jp.pdf)で公開されています。

### 教育

教育チームは、来週火曜日と水曜日（5月20～21日）に[アテネ国立工科大学](https://www.ntua.gr/en/)で開催されるCardano Daysに向けて準備を進めています。参加希望者の[登録は受付中](https://docs.google.com/forms/d/e/1FAIpQLSc6MR8PGMuufxiW0g9sph3_2wUSGSZTrLCxwlZbKmwJoSuz-A/viewform?fbzx=-6954144701218428857)です。今月後半にメキシコで開催されるCardanoコミュニティのAzteca 2025でのCardano Daysセッションの準備も進めています。Cardano開発者コースを更新し、ゼロ知識証明に焦点を当てた新しい教材を開発しています。
