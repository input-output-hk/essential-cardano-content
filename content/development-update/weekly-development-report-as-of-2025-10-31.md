---
title: Weekly development report as of 2025-10-31
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d94a649f-018f-4d79-924d-d256e0f55f53/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem shows consistent growth, with key network metrics remaining strong. The total number of native tokens remains steady at 10.94 million, while the number of token policies has risen to 223,149.

Smart contract activity continues its expansion, with 142,896 Plutus scripts and 12,154 Aiken scripts now deployed, indicating sustained developer engagement. Governance participation also remains robust, with 1,519 DReps, 1,021 of which are active, underscoring the community's commitment to decentralized decision-making.

In other news:

*   IO has recently published a developer deep dive into [Ouroboros Phalanx,](https://iohk.io/en/blog/posts/2025/10/22/introducing-ouroboros-phalanx-breaking-the-economics-of-grinding-attacks/?utm_source=chatgpt.com) a mechanism to break the economics of grinding attacks. Phalanx is a Praos extension that strengthens slot leader selection randomness with verifiable delay functions to deter grinding and improve settlement times. Also, see a [non-technical explainer](https://www.essentialcardano.io/article/how-ouroboros-phalanx-enhances-network-protection) on Essential Cardano.
    
*   William Shatner [announced the launch of $BILL token](https://x.com/WilliamShatner/status/1982938034615292403) on Cardano and Solana.
    
*   Anzens announced [the launch of $USDA minting, burning, and off-ramp capabilities](https://x.com/AnzensOfficial/status/1983950416690700546) to BRL in Brazil through local partners.
    
*   Kucoin [listed Iagon](https://x.com/kucoincom/status/1983037232010461692) ($IAG) on October 28.
    
*   Patrick Tobler shared [the first x402 proof-of-concept memecoin mint](https://x.com/kucoincom/status/1983037232010461692). X402 is Coinbase's HTTP-based payment protocol, launched in May 2025.
    
*   [The Scavenger Mine phase of Midnight’s Glacier Drop](https://x.com/midnightfdn/status/1983570567597814185) began on October 30, with 22K+ pre-registered participants.
    

### CORE TECHNOLOGY

The **ledger** team finalized [CIP-118: nested transactions](https://github.com/cardano-foundation/CIPs/pull/862) (Babel fees), drastically simplifying the design by relying on [CIP-112: observe script type](https://github.com/cardano-foundation/CIPs/pull/749) and a CDDL-backed transaction specification. The proposal is now ready for final reviews. Once merged, it will close the remaining item in the first milestone of the nested transactions roadmap. 

In parallel, the team implemented a clear distinction between sub-transactions and the top-level transaction, enabling reuse of existing ledger validation across levels. This delivers the core of the second milestone, which the team expects to finalize in the coming days. Beyond nested transactions, they prevented invalid serialization in several edge-case scenarios, reduced technical debt, and expanded the test suite.

This week, the **consensus** team [showcased a Leios prototype](https://github.com/IntersectMBO/ouroboros-consensus/issues/1701) during the monthly demo. For Peras, the [October demo](https://github.com/tweag/cardano-peras/blob/main/demo/README.md#2025-10-27) is now available. The team also published [consensus patches for cardano-node v.10.6](https://github.com/IntersectMBO/ouroboros-consensus/pull/1729), which include making [Dijkstra genesis optional](https://github.com/IntersectMBO/ouroboros-consensus/pull/1725) and [streaming ledger tables in the snapshot converter](https://github.com/IntersectMBO/ouroboros-consensus/pull/1728).  
Separately, they [released \`resource-registry 0.2.0.0](https://github.com/IntersectMBO/io-classes-extra/pull/11)`, adding` [transferRegistry](https://github.com/IntersectMBO/io-classes-extra/pull/9)\` and [releasing threads before closing](https://github.com/IntersectMBO/io-classes-extra/pull/10). In CHaP, the team [prevented future-dated package releases](https://github.com/IntersectMBO/cardano-haskell-packages/pull/1159). Work is ongoing to enable randomized snapshot delays.

### SCALING

This week, the **Mithril** team prepared the [pre-release](https://github.com/input-output-hk/mithril/releases/tag/2543.0-pre) for the `2543.0-pre` distribution. This version introduces support for the default incremental backend (v2) for Cardano database restoration, enhanced integrity verification that reports any tampered or missing files in case of failure, and various bug fixes and improvements.

The team also completed the [integration of the Haskell DMQ](https://github.com/input-output-hk/mithril/issues/2674) node into the end-to-end tests to enable decentralized signature diffusion. They implemented a simple aggregator discovery mechanism and continued work on the first phase of [decentralizing configuration parameters](https://github.com/input-output-hk/mithril/issues/2692). Additionally, they advanced the design of certificate snarkification.

Finally, they adapted the project to the latest NPM security changes for publishing packages and refactored the aggregator's HTTP client.

The Hydra team announced **Hydra v1**, marking the protocol as production-ready for building low-latency, off-chain Cardano applications while preserving layer 1 security. The release delivers a feature-complete Hydra Head protocol with improved stability, interoperability, and API improvements, and it has been validated through real-world use in Midnight’s Glacier Drop environment. For more information, see the [Scaling Cardano applications with Hydra](https://iohk.io/en/blog/posts/2025/10/27/scaling-cardano-applications-with-hydra/) blog post.

### VOLTAIRE

The Intersect committee elections have been in full swing since voting opened on Monday, October 27. With 98 candidates standing for 36 available seats, there is a good talent pool to choose from.

Voting closes on Friday, November 7, at noon UTC, and the results will be announced on November 14, following an independent external audit.

### CATALYST

It’s been an exciting week as the **Catalyst** team gears up for Fund15! During their 212th town hall, founder and CEO of Fida Finance Rodolfo Hansen showcased to attendees the decentralized transfer protocol built on Cardano. This innovative solution transforms insurance contracts into on-chain assets, making coverage, investment, and management more transparent, efficient, and accessible.

If you missed the session, don’t worry — you can [catch up on it](https://www.youtube.com/live/Hr-4f-VGQKI?si=ynrwnxS_uEt479yf).

And speaking of what’s next — **Fund 15 officially launches next week, on Wednesday, November 5, at 3 PM UTC**!

Be sure to [sign up for the next town hall](https://projectcatalyst.io/news/town-hall) so you don’t miss any of the exciting updates and announcements (rumor has it, there might even be a new category unveiled!)

### EDUCATION

This week, the **education** team is preparing for next week’s Cardano developer course. This course starts on Monday, November 3, at the Universidad de Buenos Aires. It is a blended learning course designed for maximum flexibility and engagement. Week one will be entirely online, followed by a fully in-person second week. All sessions will be recorded. The team will also support the local hackathon.

Members of the team are currently in Edinburgh attending the UPLC conference. This is a small, focused workshop at the University of Edinburgh concentrating on the future development and enhancements of the Untyped Plutus Core programming language.

Additionally, work is ongoing on the translation of 'Mastering Cardano' into both Spanish and Japanese.

![](https://ucarecdn.com/ed22f205-451f-4a9f-a13b-66cd7fc117b0/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは着実に成長を続け、主要なネットワークメトリクスは強力なままです。ネイティブトークンの総数は1,094万で安定していますが、トークンポリシー数は22万3,149に増えています。

スマートコントラクトも引き続き増加傾向にあり、現在14万2,286のPlutusスクリプトと1万2,154のAikenスクリプトがデプロイされるなど、開発者エンゲージメントが維持されていることが示されています。ガバナンスへの参加も引き続き堅調で、1,519人のDRepのうち1,021人が積極的に活動しており、分散型意思決定に対するコミュニティのコミットメントが浮き彫りにされています。

その他のニュース：

*   IOは最近、グラインディング攻撃の経済性を粉砕するメカニズムである[Ouroboros Phalanx](https://iohk.io/jp/blog/posts/2025/10/22/introducing-ouroboros-phalanx-breaking-the-economics-of-grinding-attacks/?utm_source=chatgpt.com)を開発者に向けて解説したブログ記事を公開しました。Phalanxは、検証可能な遅延関数でスロットリーダー選定におけるランダム性を強化し、グラインディング攻撃を抑制し、決済時間を短縮するPraos拡張機能です。Essential Cardanoに投稿された[非技術者向け解説](https://www.essentialcardano.io/article/how-ouroboros-phalanx-enhances-network-protection)も参照してください。
    
*   William ShatnerがCardanoとSolanaで[$BILLトークンのローンチを発表](https://x.com/WilliamShatner/status/1982938034615292403)
    
*   Anzensは現地パートナーと提携し、ブラジル国内で[$USDAのミント、バーン、BRLへのオフランプ機能の提供開始](https://x.com/AnzensOfficial/status/1983950416690700546)を発表
    
*   Kucoinが10月28日に[Iagon（$IAG）を上場](https://x.com/kucoincom/status/1983037232010461692)
    
*   Patrick Toblerは[最初のx402概念実証ミームコインのミント](https://x.com/kucoincom/status/1983037232010461692)を発表（X402は2025年5月に立ち上げられたCoinbaseのHTTP型支払いプロトコル）
    
*   [Midnight Glacier DropのScavenger Mineフェーズ](https://x.com/midnightfdn/status/1983570567597814185)が10月30日にスタート、2万2000強が事前参加登録済み
    

### コアテクノロジー

**台帳**チームは[CIP-118：ネストされたトランザクション](https://github.com/cardano-foundation/CIPs/pull/862)（Babelフィー）を完成させました。これは、[CIP-112：監視スクリプトタイプ](https://github.com/cardano-foundation/CIPs/pull/749)とCDDLに裏打ちされたトランザクション仕様に依存することで、設計を大幅に簡素化するものです。この提案は現在、最終レビューの準備ができており、マージされれば、ネストされたトランザクションのロードマップにおける最初のマイルストーンの残りの項目が完了します。 

並行して、サブトランザクションとトップレベルのトランザクションを明確に区別する実装を行いました。これにより、既存の台帳検証を異なるレベル間で再利用することが可能になりました。この成果は、数日中に完了する予定の第2マイルストーンの核を形成するものとなります。ネストされたトランザクションの他には、エッジケースシナリオにおける無効なシリアル化を防止し、技術負債を削減し、テストスイートを拡張しました。

**コンセンサス**チームは月例デモコールで[Leiosのプロトタイプを紹介](https://github.com/IntersectMBO/ouroboros-consensus/issues/1701)しました。Peras関連では、[10月のデモコール](https://github.com/tweag/cardano-peras/blob/main/demo/README.md#2025%E5%B9%B410%E6%9C%8827%E6%97%A5)が視聴できます。[Cardano-node v.10.6のコンセンサスパッチ](https://github.com/IntersectMBO/ouroboros-consensus/pull/1729)をリリースしました。これには[Dijkstraジェネシスのオプション化](https://github.com/IntersectMBO/ouroboros-consensus/pull/1725)や、[スナップショットコンバーターの台帳テーブルストリーミング](https://github.com/IntersectMBO/ouroboros-consensus/pull/1728)が含まれます。

これとは別に、`resource-registry 0.2.0.0`[をリリース](https://github.com/IntersectMBO/io-classes-extra/pull/11)しました。これには\`[transferRegistry](https://github.com/IntersectMBO/io-classes-extra/pull/9)\`の追加と[クローズ前のスレッドの解放](https://github.com/IntersectMBO/io-classes-extra/pull/10)が含まれています。CHaPでは、[未来の日付が設定されたパッケージのリリースを防ぐ措置](https://github.com/IntersectMBO/cardano-haskell-packages/pull/1159)を講じました。ランダム化されたスナップショット遅延を可能にするための作業が進行中です。

### スケーリング

**Mithril**チームは`2543.0-pre`ディストリビューションの[プレリリース](https://github.com/input-output-hk/mithril/releases/tag/2543.0-pre)を準備しました。このバージョンではCardanoデータベースの復元のためにデフォルトの増分バックエンド（v2）のサポートが導入されました。また、障害発生時に改ざんされたファイルや不足しているファイルを報告するように整合性検証が強化された他、バグ修正と改善も含まれています。

分散型署名拡散を可能にするための、エンドツーエンドテストへの[Haskell DMQノードの統合](https://github.com/input-output-hk/mithril/issues/2674)を完了しました。シンプルなアグリゲーター発見メカニズムを実装し、[設定パラメーターの分散化](https://github.com/input-output-hk/mithril/issues/2692)の第1フェーズに関する作業を続けました。証明書のSNARK化の設計も進めています。

パッケージ公開のための最新のNPMセキュリティ変更にプロジェクトを適合させ、アグリゲーターのHTTPクライアントをリファクタリングしました。

Hydraチームは**Hydra v1を**発表しました。これは、レイヤー1のセキュリティを維持しつつ、低遅延のオフチェーンCardanoアプリケーションを構築するための本番環境対応プロトコルとしての節目となるものです。このリリースは、安定性、相互運用性、APIの改善を伴う機能完全なHydra Headプロトコルを提供し、MidnightのGlacier Drop環境における実世界での使用を通じて検証されています。詳細は、ブログ記事[HydraによるCardanoアプリケーションのスケーリング](https://iohk.io/jp/blog/posts/2025/10/27/scaling-cardano-applications-with-hydra/)を参照してください。

### VOLTAIRE

10月27日（月）の投票開始以来、Intersect委員会の選挙は本格化しています。36の議席に98人が立候補しており、豊富な人材の中から選ぶことができます。

投票は日本時間11月7日（金）午後9時に締め切られます。結果は独立した外部監査を経て、11月14日に発表される予定です。

### CATALYST

**Catalyst**チームがFund15に向けて準備を進める中、今週もエキサイティングな1週間になりました。第212回タウンホールでは、Fida Financeの創設者兼CEOのRodolfo Hansen氏がCardanoに構築された分散型移転プロトコルを紹介しました。この革新的なソリューションは、保険契約をオンチェーン資産に変換することで、カバレッジ、投資、管理の透明性、効率性、アクセス可能性を向上させます。

セッションを見逃された方もご心配なく。[録画でキャッチアップ](https://www.youtube.com/live/Hr-4f-VGQKI?si=ynrwnxS_uEt479yf)できます。

今後の予定に関しては、**日本時間の来週11月6日（木）午前0時、Fund15が公式に開始されます。**

刺激的な最新情報や発表（新しいカテゴリーが発表されるという噂もあります！）を見逃さないように、[タウンホールへのサインアップ](https://projectcatalyst.io/news/town-hall)をお忘れなく。

### 教育

**教育**チームは来週のCardano開発者コースに向けた準備を進めています。このコースは11月3日（月）にブエノスアイレス大学で開講されます。最大限の柔軟性とエンゲージメントを考慮して設計されたブレンド型学習コースになっており、第1週は完全にオンラインで、第2週は完全に対面で行われます。また、すべてのセッションが録画されます。現地のハッカソンの支援もする予定です。

チームのメンバーは現在、エディンバラで開催中のUPLCカンファレンスに出席しています。これはエディンバラ大学で行われるUntyped Plutus Coreプログラミング言語の将来的な開発と強化に焦点を当てた、小規模で集中的なワークショップです。

『Mastering Cardano』のスペイン語版と日本語版への翻訳作業が進行中です。
