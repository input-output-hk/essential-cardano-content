---
title: Weekly development report as of 2025-11-28
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/9acf949c-9b89-4469-9b35-428a7c375aa5/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week, the Cardano ecosystem saw continued growth, with 2,020 projects building on the network (836 non-NFT and 1,184 NFT), 1.34 million delegated wallets, 11.02 million native tokens, and 224,241 token policies. Network activity reached 115.48 million transactions, while the number of DReps increased to 1,533. Finally, this week's GitHub activity reached 322 commits.

In other news:

*   Input | Output launched the [Leios development tracker](https://x.com/InputOutputHK/status/1993661935544639553) this week – learn more in the scaling section
    
*   Cardano’s founding entities and the Midnight Foundation submitted a joint budget info action for [critical integrations](https://x.com/IntersectMBO/status/1994134372648173933)
    
*   [Farmroll.io](//Farmroll.io), built on Cardano, is now live – the tool lets users create and trade AI agents
    
*   [Midnight](https://x.com/midnightfdn/status/1993006370602287202) has been nominated for BeInCrypto’s breakthrough of the year award, and [voting](https://awards.beincrypto.com/#vote) is now open
    
*   The [Cardano Foundation’s info action](https://x.com/Cardano_CF/status/1993606467711095090) to secure generic top-level domains has been approved.
    

### CORE TECHNOLOGY

This week, the **networking** team worked on the upcoming Cardano node v.10.6, resolving some issues affecting `cardano-tracer`, published an updated network framework, and addressed edge cases in [topology parsing](https://github.com/IntersectMBO/cardano-node/issues/6304). The release will ship with P2P-only networking. Work continued on `dmq-node`, including a successful end-to-end test using the Mithril Rust client, a fix in the annotated driver, and availability of a static build for `x86_64-linux-musl`. Integration with `cardano-tracer` is underway to ensure familiar monitoring for SPOs.

Additionally, the team improved peer selection by fixing discrepancies and enhancing test coverage, contributed partial WASM support to `ouroboros-network`, and made progress on reducing technical debt. This included restructuring the `ouroboros-network` package for easier maintenance, simplifying diffusion-related components, and completing outstanding tasks in the consensus diffusion package. See [this development update](https://updates.cardano.intersectmbo.org/2025-10-24-network) for more details.

The **benchmarking** team completed node [v.10.6 pre-release benchmarking](https://updates.cardano.intersectmbo.org/reports/2025-11-performance-10.6.0-pre/) and continued compiler performance testing with GHC 9.12. Development progressed on the queryable timeseries prototype and the message-based API for `cardano-tracer`, alongside infrastructure work to optimize trace forwarding.

The team also delivered new quality-of-life tracing features, including Prometheus service discovery, while removing a significant amount of technical debt. In parallel, they advanced Leios efforts by refining the process specification for conformance and performance testing and revisiting simulation results. Finally, work continued on node diversity with a new system-conformance testing framework based on linear temporal logic.

The **consensus** team participated in the November 2025 incident response, providing analysis on potential intervention scenarios and tracking chain progression metrics. They also merged documentation of the [Leios protocol burst attack threat model](https://github.com/input-output-hk/ouroboros-leios/pull/624), strengthening the protocol's security foundation ahead of load testing and mitigation strategy development. Finally, the team prepared for the Leios November demo, making significant progress on observability infrastructure using [Grafana](https://github.com/IntersectMBO/ouroboros-consensus/issues/1766) and Prometheus and on [demo packaging](https://github.com/IntersectMBO/ouroboros-consensus/issues/1759) to streamline deployment. 

### SCALING

This week, the **Leios** team released a new public development tracker that showcases continuous global progress on Ouroboros Leios. The tracker provides a consolidated space for monitoring project activity, enabling tighter resource coordination to drive improved development cadence. For more details, read the [blog post](https://iohk.io/en/blog/posts/2025/11/26/leios-24-7-development-tracker-launches/), check out the [tracker](https://engineering.iog.io/leios), and see a [walkthrough video](https://www.youtube.com/watch?v=sifvsGPj1cw).

The **Mithril** team focused on the SNARK-friendly STM library, completing its [architecture design](https://github.com/input-output-hk/mithril/issues/2763), [refactoring error handling](https://github.com/input-output-hk/mithril/issues/2764), and implementing the [Schnorr](https://github.com/input-output-hk/mithril/issues/2756) signature scheme. They also made good progress preparing the [specifications](https://github.com/input-output-hk/mithril/issues/2797) for the non-recursive SNARK circuit, prototyping the recursive SNARK solution, and experimenting with a Jubjub curve implementation in the BLST library.

Additionally, they continued implementing a simple [aggregator discovery mechanism](https://github.com/input-output-hk/mithril/issues/2726), worked on improvements to the protocol security page, and enhanced the [end-to-end tests](https://github.com/input-output-hk/mithril/issues/2781) to better support the introduction of new features.

Finally, they fixed an [incident](https://github.com/input-output-hk/mithril/issues/2805) with certification that stopped on mainnet and preview networks, and started upgrading to Cardano node v.10.6.

### CATALYST

The moment has arrived! The submission window for **Project Catalyst** Fund15 closed on November 27 at 6 AM UTC. The review period begins on December 2.

This week’s town hall included an overview of GovChain Lab’s work to support participation in Brazil through focused education initiatives. The Catalyst team also presented upcoming changes to the milestone module and provided a first look at key improvements. Read more about the [module updates here](https://docs.projectcatalyst.io/catalyst-tools/milestone-module/latest-changes-in-the-milestone-module).

If you missed the town hall, [watch the recording](https://www.youtube.com/watch?v=mgzLn1g6ftk&t=2502s) or review the full [presentation deck](https://docs.google.com/presentation/d/1a8CJKtd_8myj6QDOqq9bi6C98rmCnDH0ccor4yH38gc/edit?usp=sharing).

### VOLTAIRE

The big news in governance this week is the **Intersect** annual members’ meeting, which will run for 24 hours beginning at 12.01 am UTC on Saturday, November 29.

To truly connect the global membership, spanning continents and time zones, Intersect will host this year's event in the Intersect Virtual Hub. This digital environment will break down geographical barriers and create a truly inclusive experience where every member, regardless of where they are in the world, can participate fully and feel connected to the community. The virtual hub will run for a full 24 hours across 12 time zones, starting in Australia with AEDT. A welcome address, followed by a regional session, is scheduled for each time zone.

Participants are encouraged to join the event at any time throughout its duration to experience other regional perspectives. These cross-regional connections are often where some of the most innovative ideas and strongest partnerships emerge from.

Find out more on the [registration page](https://luma.com/4tjuiufo).  
  
EDUCATION

The **education** team is preparing for next week’s in-person lectures at Florida International University in Miami. The team will present a learning session on Aiken and smart contracts, as well as a Cardano node workshop, to students and faculty staff.

Additionally, preparations are underway to launch the self-paced Cardano education program, and work continues on translations of Mastering Cardano into Spanish and Japanese.

![](https://ucarecdn.com/a02ddbfb-cfb5-475a-b19b-33ff8200a22b/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

今週も、Cardanoエコシステムは引き続き成長傾向にありました。2,020件のプロジェクトがネットワークで構築されており（非NFT836、NFT1,184）、委任済みウォレット数は134万、ネイティブトークンは1,102万、トークンポリシーは22万4,241に上ります。ネットワークアクティビティは1億1,548万トランザクションに達し、DRep数は1,533に増加しました。GitHubアクティビティは322コミットに達しています。

その他のニュース：

*   Input | Outputは今週[Leios開発トラッカー](https://x.com/InputOutputHK/status/1993661935544639553)を公開。詳細はスケーリングセクションを参照
    
*   Cardano設立諸団体とMidnight Foundationが、[重要な統合](https://x.com/IntersectMBO/status/1994134372648173933)のための予算情報アクションを共同提出
    
*   Cardanoに構築された、AIエージェントの作成、取引きツール[Farmroll.io](//Farmroll.io)が稼働開始
    
*   [Midnight](https://x.com/midnightfdn/status/1993006370602287202)がBeInCryptoの年間最優秀賞ブレイクスルー賞にノミネート。現在[投票](https://awards.beincrypto.com/#vote)投票受付中
    
*   gTLDを保護するための[Cardano財団の情報アクション](https://x.com/Cardano_CF/status/1993606467711095090)が承認される
    

### コアテクノロジー

**ネットワーク**チームはCardanoノードv.10.6に取り組み、`Cardano-tracer`に影響を与えている問題を解決し、更新したネットワークフレームワークを公開し、[トポロジー解析](https://github.com/IntersectMBO/cardano-node/issues/6304)におけるエッジケースに対処しました。このリリースは、P2P専用ネットワークに付属する予定です。Mithril Rustクライアントを使ったエンドツーエンドテストの成功、注釈付きドライバーの修正、`x86_64-linux-musl`用の静的ビルドの利用など、`mq-node`に関する作業を続けました。SPOが使い慣れた監視機能を使えるようにするために、`Cardano-tracer`との統合を進めています。

不一致を修正してテストカバレッジを強化することでピア選択を改善し、WASMの部分的なサポートで`ouroboros-network`に貢献し、技術負債の削減を進めました。これには、メンテナンスを容易にするための`ouroboros-network`パッケージの再構築、伝播関連のコンポーネントの単純化、コンセンサス伝播パッケージにおける未完タスクの完了が含まれます。詳細は、[開発更新情報](https://updates.cardano.intersectmbo.org/2025-10-24-network)を参照してください。

**ベンチマーク**チームはノード[v.10.6プレリリースのベンチマーク](https://updates.cardano.intersectmbo.org/reports/2025-11-performance-10.6.0-pre/)を完了し、GHC 9.12でコンパイラーのパフォーマンステストを継続しました。クエリ可能な時系列のプロトタイプとメッセージベース`cardano-tracer`用APIの開発を進め、トレース転送を最適化するためのインフラを整備しました。

PrometheusのサービスディスカバリーなどのQOLトレース機能を新たに提供し、技術負債を大幅に削減しました。並行して、適合性テストとパフォーマンステストのためのプロセス仕様を精緻化し、シミュレーション結果を再検討するなど、Leios関連の作業も進めました。線形時相論理に基づく新しいシステム適合性テストフレームワークを用いて、ノード多様性に関する作業を続けました。

**コンセンサス**チームは、2025年11月のインシデント対応に参加し、潜在的な介入シナリオに関する分析を提供し、チェーンの進行メトリクスを追跡しました。[Leiosプロトコルバースト攻撃の脅威モデル](https://github.com/input-output-hk/ouroboros-leios/pull/624)ドキュメントをマージし、負荷テストと緩和戦略の開発に先んじてプロトコルのセキュリティ基盤を強化しました。Leiosの11月のデモに向けて準備を行い、[Grafana](https://github.com/IntersectMBO/ouroboros-consensus/issues/1766)とPrometheusを使用した可観測性インフラと、デプロイを合理化するための[デモパッケージ](https://github.com/IntersectMBO/ouroboros-consensus/issues/1759)で大きく前進しました。 

### スケーリング

**Leios**チームは、世界各地で継続的に行われるOuroboros Leiosの開発を示す新しい開発トラッカーを公開しました。このトラッカーは、プロジェクトの活動を監視するための統合されたスペースを提供し、より緊密なリソース調整を可能にして、開発ケイデンスの改善を促します。詳細は、[ブログ記事](https://iohk.io/jp/blog/posts/2025/11/26/leios-24-7-development-tracker-launches/)を読み、[トラッカー](https://engineering.iog.io/leios)をチェックし、[ウォークスルー動画](https://www.youtube.com/watch?v=sifvsGPj1cw)をご覧ください。

**Mithril**チームはSNARKに適したSTMライブラリーに焦点を当て、[アーキテクチャー設計](https://github.com/input-output-hk/mithril/issues/2763)を完成させ、 [エラー処理をリファクタリング](https://github.com/input-output-hk/mithril/issues/2764)し、[Schnorr](https://github.com/input-output-hk/mithril/issues/2756)署名方式を実装しました。非再帰的SNARK回路の[仕様](https://github.com/input-output-hk/mithril/issues/2797)を準備し、再帰的SNARKソリューションのプロトタイプを作成し、BLSTライブラリーにおけるJubjub曲線の実装を実験するなど、大きく進展しました。

シンプルな[アグリゲーター発見メカニズム](https://github.com/input-output-hk/mithril/issues/2726)の実装を継続し、プロトコルセキュリティページの改善に取り組み、新しい機能の導入をより良くサポートするために[エンドツーエンドテスト](https://github.com/input-output-hk/mithril/issues/2781)を強化しました。

メインネットとプレビューネットワークで停止していた証明に関する[インシデント](https://github.com/input-output-hk/mithril/issues/2805)を修正し、Cardanoノードv.10.6へのアップグレードを開始しました。

### CATALYST

**Project Catalyst** Fund15の提出受付は日本時間11月27日午後3時に締め切られました。審査期間は12月2日に始まります。

今週のタウンホールでは、焦点を絞った教育イニシアチブを通じてブラジルにおける参加を支援するGovChain Labの活動の概要が紹介されました。Catalystチームはまた、マイルストーンモジュールの今後の変更点を提示し、主要な改善点の最初のプレビューを提供しました。モジュールの更新についての詳細は[こちら](https://docs.projectcatalyst.io/catalyst-tools/milestone-module/latest-changes-in-the-milestone-module)をご覧ください。

タウンホールに参加しなかった場合は、[録画](https://www.youtube.com/watch?v=mgzLn1g6ftk&t=2502s)や[プレゼンテーション資料](https://docs.google.com/presentation/d/1a8CJKtd_8myj6QDOqq9bi6C98rmCnDH0ccor4yH38gc/edit?usp=sharing)をチェックしてください。

### VOLTAIRE

今週のガバナンスのビッグニュースは、Intersectの年次総会が日本時間11月29日土曜日午前09:01から24時間にわたって開催されることです。

複数の大陸やタイムゾーンにグローバルにまたがるメンバーを真に結びつけるために、Intersectは今年のイベントをIntersect Virtual Hubで開催します。このデジタル環境は、地理的な障壁を打ち破り、世界のどこにいても、すべてのメンバーが完全に参加し、コミュニティとのつながりを感じることができる真に包摂的な体験を創出します。この仮想ハブは、12のタイムゾーンにわたって24時間稼働を続けます。オーストラリアのAEDTからスタートし、各タイムゾーンで、歓迎の挨拶と地域的なセッションが予定されています。

この間、参加者はいつでもイベントに参加し、他の地域の視点を体験することができます。こうした地域をまたぐつながりから、もっとも革新的なアイデアや強力なパートナーシップが生まれることはままあります。

詳細は、[登録ページ](https://luma.com/4tjuiufo)を参照してください。  
  
教育

**教育**チームは来週マイアミのフロリダ国際大学で行われる対面講義の準備をしています。Aikenとスマートコントラクトに関する学習セッションと、Cardanoノードワークショップを学生と教職員に提供します。

自習型のCardano教育プログラムの立ち上げ準備が進められているほか、『Mastering Cardano』のスペイン語と日本語への翻訳作業も続けられています。
