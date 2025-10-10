---
title: Weekly development report as of 2025-10-10
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/04731ee1-e66c-4a47-a0eb-a5e50b065e45/
image_text: Weekly development report as of 2025-10-10
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned.  
  
_Cardano's ecosystem shows steady growth in development, governance, and on-chain activity. Delegated wallets increased slightly to 1.34 million, and native tokens grew to 10.93 million under 222,404 token policies. Total transactions on-chain reached 114.56 million.

Smart contract deployment is stable with 142,024 Plutus and 11,886 Aiken scripts active. Governance participation is rising, with 1,507 DReps (1,020 active). Developer engagement is strong, with 320 GitHub commits this week.

_In other news:_

*   [Candidate registration](https://www.intersectmbo.org/news/intersect-committee-elections-2025-applications-open-october-1st) for the [Intersect](https://intersectmbo.org/about-intersect) committee elections is ongoing. Intersect members can stand as candidates in the committee elections for all Intersect committees until October 24, 2025.
    
*   Input | Output (IO) concluded its Asia Tour at the [Tech For Impact Summit,](https://tech4impactsummit.com/) organized by [Socious](https://socious.io/about), in Tokyo, Japan. Charles Hoskinson gave a keynote, reflecting on a decade of progress and a mission to build systems that make equality and fairness part of the world’s design.
    
*   This week, IO presented the [‘Modal abstractions for smart contract validation’ paper](https://iohk.io/en/research/library/papers/modal-abstractions-for-smart-contract-validation/) at the MODELS 2025 conference in Grand Rapids, Michigan. The paper introduces a method that enables smart contract developers and auditors to create simplified models of contract behavior.
    
*   [Yoroi](https://x.com/YoroiWallet/status/1975961410359497137) launched v6.0, introducing support for DexHunter and Minswap, along with a new API powered by MuesliSwap.
    
*   [Midnight Network](https://x.com/MidnightNtwrk/status/1976289739201192087) and CSWAP have partnered to develop privacy-first DeFi solutions.
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1975595555674861590) announced the 10 finalists for its Battle of the Builders competition.
    
*   The [Hydra-node](https://x.com/LucasMacchia2/status/1976280377737286006) version 1.0.0 [pre-release](https://github.com/cardano-scaling/hydra/releases) is now live on GitHub.
    

###   
CORE TECHNOLOGY

The **ledger** team made solid progress on the implementation of [CIP-112 – Observe script type](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0112). The team defined a new type of native script that enforces the execution of a Plutus script during transaction validation, strengthening on-chain logic enforcement and improving composability between native and Plutus scripts.

Besides feature development, the team enhanced the ledger interface for downstream integration, reorganized the test suite for better maintainability, and applied several fixes to the CI/CD pipeline to improve reliability and build consistency.

###   
SMART CONTRACTS

The **Plutus** team completed the implementation of [CIP-0153](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0153), introducing the `Value` built-in type along with its associated functions. The team is now finalizing costing for these new built-ins, which will mark the last milestone before Plutus becomes ready for the upcoming intra-era hard fork. All other features planned for this upgrade have already been completed.

Performance improvements also landed this cycle — specifically, optimizations to flat decoding for built-in lists, resulting in significantly faster script deserialization. Benchmarks show some Plutus scripts now achieve double-digit percentage speed gains.

The team also updated the Plutus Core specification and Agda formalization to include the multi-scalar multiplication primitives defined in [CIP-0133](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0133) and added additional property-based and conformance tests to ensure the correctness and reliability of these primitives.

Looking ahead, the team is preparing for [UPLC 2025](https://services.iohk.io/uplc) — a dedicated event for developers and researchers in the Plutus ecosystem — scheduled to take place in approximately three weeks.

### SCALING

This week, the **Mithril** team focused on integrating the Haskell DMQ node with Mithril nodes and implementing the first phase of decentralizing the configuration parameters. They have also completed the support for multiple proof systems in the [STM library](https://github.com/input-output-hk/mithril/issues/2680). Additionally, they worked on some enhancements to the client library and CLI to provide access to [Cardano database incremental](https://github.com/input-output-hk/mithril/issues/2704) snapshots by epoch.

Finally, the team fixed some flakiness in the CI and made progress refactoring the STM cryptographic library.

The Input | Output Research (IOR) team invites everyone to attend an upcoming **Cardano R&D session on _Interchains_**, hosted in collaboration with the Intersect research working group (RWG) on Tuesday, October 14, at 3 PM UTC.

These monthly sessions bring together the Cardano community to explore research-driven themes with guest speakers from across the ecosystem. This month’s panel features:

*   Sheldon Hunt, founder and CEO, _Sundial_
    
*   Dr. Weijia Zhang, VP of engineering, _WanBridge_
    
*   Mauricio Magaldi, head of product, _Shielded Technologies_
    
*   Karmel Elshinnawi, head of product, _partner chains_, _Input | Output._
    

Why Interchains? A blockchain ecosystem gains tremendous value when it can interoperate seamlessly with other blockchains, legacy systems, and even the physical world. However, the bridges and protocols that enable this connectivity can introduce risks. Interoperability research is critical to ensure ecosystems and applications can communicate securely — preserving decentralization, security, and efficiency.

Join the team on October 14 to explore how these innovations are shaping the future of Cardano. [Register here](https://services.iohk.io/cardano-research-sessions?utm_campaign=8896168-IO%20Research&utm_medium=email&_hsenc=p2ANqtz-8ifc3mZdPELHBaQnnh0196VQQoMN5myRh7BwJIfVo43xHud0OhMW39z_ufDprZD0ovC3AqzidGyYkJz4A1AtZjO6HylQ&_hsmi=384275787&utm_content=384275787&utm_source=hs_email) to secure your spot!

### VOLTAIRE

Some major developments this week:

*   The candidate application deadline for committee elections is extended
    
*   Intersect is searching for a new executive director
    
*   The first project in the incubation program at Intersect open source
    
*   Intersect delivery assurance reviews vendor progress.
    

To give applicants some space after the Intersect board elections, people who wish to stand as candidates in the Intersect committee elections have more time to apply. The application phase will now run for ten days, closing on October 24 at 12 PM UTC. The voting duration will be unchanged at two weeks, but because the application phase was extended voting will now run from October 27 to November 7.

Help shape Intersect’s future - applications for the executive director role now open.

Learn more about the overall process and how you can apply or get involved in the nomination process:

*   [Apply](https://intersectmbo.typeform.com/ed-application)
    
*   [Nominate](https://intersectmbo.typeform.com/ed-nomination)
    
*   [Learn more](https://www.intersectmbo.org/news/help-shape-intersects-future-executive-director-applications-open).
    

Intersect’s open source committee (OSC) provides several services to Cardano developers, including an incubation program. The first project to enter the incubation program is Evolution SDK from [No Witness Labs](https://nowitnesslabs.com/).

Evolution SDK directly addresses one of Cardano’s most significant pain points: developer experience. It is already being adopted across multiple projects and provides a single, unified toolkit for building on the Cardano blockchain. [Learn more](https://www.intersectmbo.org/news/intersect-no-witness-labs-evolution-sdk-enters-incubation).

In case you missed it, Intersect has [posted on X](https://x.com/IntersectMBO/status/1975616969723326974) (formerly Twitter), providing details of the treasury-funded projects whose milestones are being monitored by the delivery assurance team. 

### EDUCATION

This week, the **education** team is collecting feedback on the recent Cardano Days event held at the University of Wyoming, as well as from their attendance at Token2049 in Singapore last week. They are also continuing translation work on ‘Mastering Cardano’ in both Spanish and Japanese. Additionally, preparations are underway for the next Cardano developer course, which will take place next month in Buenos Aires.  
  
![](https://ucarecdn.com/26afde9e-6e6f-492b-953d-a7a19e84b8d3/-/preview/-/format/auto/-/quality/smart/)  
  
エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。  
  
_Cardanoエコシステムは開発、ガバナンス、オンチェーン活動において堅調な成長を見せています。委任済みウォレットは134万に増加し、ネイティブトークンは1093万、トークンポリシーは22万2,404に上ります。オンチェーントランザクション数は1億1,456万に達しました。

スマートコントラクトのデプロイも安定しており、14万2,024のPlutusスクリプトと1万1,886のAikenスクリプトが稼働しています。ガバナンスへの参加は増加し、DRep数は1,507（アクティブDRep数は1,020）です。開発者エンゲージメントも強く、今週は320件のGitHubのコミットがありました。

_その他のニュース：_

*   [Intersect](https://intersectmbo.org/about-intersect)委員会選挙の[候補者登録](https://www.intersectmbo.org/news/intersect-committee-elections-2025-applications-open-october-1st)は現在受付中です。Intersectのメンバーは、2025年10月24日まで、Intersectのすべての委員会選挙に候補者として立候補することができます。
    
*   Input | Output (IO)は、東京で[Socious](https://socious.io/about)が主催した[Tech for Impact Summit](https://tech4impactsummit.com/)をもって、アジアツアーを終了しました。Charles Hoskinsonは基調講演で、10年にわたる進歩と、平等と公平が世界のデザインの一部となるようなシステムを構築するという使命について振り返りました。
    
*   IOはミシガン州グランドラピッズで開催されたMODELS 2025カンファレンスで[論文「Modal abstractions for smart contract validation（スマートコントラクト検証のためのモーダル抽象化）」](https://iohk.io/jp/research/library/papers/modal-abstractions-for-smart-contract-validation/)を発表しました。ここでは、スマートコントラクトの開発者と監査人が、コントラクトの動作の単純化モデルを作成することを可能にする方法を紹介しています。
    
*   [Yoroi](https://x.com/YoroiWallet/status/1975961410359497137)がv6.0をリリースし、DexHunterとMinswapのサポート、MuesliSwapを利用した新しいAPIを導入しました。
    
*   [Midnight Network](https://x.com/MidnightNtwrk/status/1976289739201192087)とCSWAPは、プライバシー優先のDeFiソリューションを開発するために提携しました。
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1975595555674861590)が、Battle of the Buildersコンペティションのファイナリスト10人を発表しました。
    
*   [Hydra-node](https://x.com/LucasMacchia2/status/1976280377737286006)バージョン1.0.0[プレリリース](https://github.com/cardano-scaling/hydra/releases)がGitHubで公開されています。
    

###   
コアテクノロジー

**台帳**チームは[CIP-112 – Observe script type](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0112)の実装を大幅に進めました。トランザクション検証中にPlutusスクリプトの実行を強制する新型のネイティブスクリプトを定義し、オンチェーンロジックの強制を強化し、ネイティブスクリプトとPlutusスクリプト間のコンポーザビリティを向上させました。

機能開発に加えて、下流統合のために台帳インターフェースを強化し、保守性を向上させるためにテストスイートを再編成し、信頼性とビルドの一貫性を向上させるためにCI/CDパイプラインにいくつかの修正を適用しました。

###   
スマートコントラクト

**Plutus**チームは[CIP-0153](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0153)の実装を完了し、組み込み型の`Value`と、これに関連する関数を導入しました。現在、これらの新しい組み込み型のコストを確定しており、これが期内ハードフォーク前の最後のマイルストーンとなります。このアップグレードで予定しているその他の機能はすべて完了しました。

今サイクルではパフォーマンスの改善も実現しました。特に、組み込みリストのFlatデコーディングの最適化により、スクリプトの逆シリアル化が大幅に高速化されました。ベンチマークによると、一部のPlutusスクリプトでは2桁の速度向上を達成しています。

Plutus Core仕様とAGDA形式化を、[CIP-0133](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0133)で定義されている多倍長スカラー乗算プリミティブを含むように更新し、これらのプリミティブの正確性と信頼性を確保するために、プロパティベーステストと適合性テストを追加しました。

今後の予定として、約3週間後に行われるPlutusエコシステムの開発者と研究者のための専用イベント[UPLC 2025](https://services.iohk.io/uplc)に向けた準備を行います。

### スケーリング

**Mithril**チームはHaskell DMQノードとMithrilノードの統合に焦点を当て、設定パラメーターの分散化の第1フェーズを実装しました。[STMライブラリー](https://github.com/input-output-hk/mithril/issues/2680)における複数証明システムのサポートも完了しています。エポックごとの[Cardanoデータベース増分](https://github.com/input-output-hk/mithril/issues/2704)スナップショットへのアクセスを提供するために、クライアントライブラリーとCLIの機能強化を行いました。

CIの脆弱性を修正し、STM暗号ライブラリーのリファクタリングを進めました。

Input | Output Research (IOR)チームは、日本時間10月15日水曜日午前0時にIntersect研究ワーキンググループ（RWG）と共同で開催される、**インターチェーンに関するCardano R&Dセッション**への参加を呼び掛けています。

毎月開催されるこのセッションではCardanoコミュニティが集い、エコシステムの各地から迎えられたゲストスピーカーと、研究主導型のテーマを探求します。今月は以下の人々がパネルとして招かれています。

*   Sheldon Hunt、_Sundial_創設者兼CEO
    
*   Weijia Zhang博士、WangridgeエンジニアリングVP
    
*   Mauricio Magaldi、_Shielded Technologies_プロダクト責任者
    
*   Karmel Elshinnawi、_Input | Output partner chains_プロダクト責任者
    

インターチェーンの重要性とは何でしょうか。ブロックチェーンエコシステムは、他のブロックチェーン、レガシーシステム、さらには物理的な世界とシームレスに相互運用できたときに真価を発揮します。しかし、この接続を可能にするブリッジやプロトコルはリスクをもたらす可能性があります。相互運用性の研究は、エコシステムとアプリケーションが安全に通信できるようにするために不可欠であり、分散性、セキュリティ、効率性を維持するものです。

これらのイノベーションがCardanoの未来をどのように形作っているかを探るために、10月14日のチームにぜひご参加ください。[ここから登録](https://services.iohk.io/cardano-research-sessions?utm_campaign=8896168-IO%20Research&utm_medium=email&_hsenc=p2ANqtz-8ifc3mZdPELHBaQnnh0196VQQoMN5myRh7BwJIfVo43xHud0OhMW39z_ufDprZD0ovC3AqzidGyYkJz4A1AtZjO6HylQ&_hsmi=384275787&utm_content=384275787&utm_source=hs_email)して、席を確保してください。

### VOLTAIRE

今週の主な出来事

*   委員会選挙の候補者申請期限延長
    
*   Intersectは新しいエグゼクティブディレクターを募集中
    
*   Intersectオープンソースのインキュベーションプログラムの最初のプロジェクト
    
*   Intersectデリバリー保証部門がベンダーの進捗状況をレビュー
    

Intersect理事会選挙後に候補者が一息つけるように、Intersect委員会選挙に立候補を希望する人々に、より多くの応募期間が与えられることになりました。応募期間は10日間延長され、日本時間10月24日午後9時に締め切られます。このため、投票期間は２週間のまま変更ありませんが、日程が10月27日から11月7日までにずれることになります。

Intersectの未来を形作る手助けを - 現在エグゼクティブディレクターを募集しています。

プロセス全体、応募方法、ノミネートプロセスへの関与方法についての詳細は以下を参照してください。

*   [応募](https://intersectmbo.typeform.com/ed-application)
    
*   [ノミネート](https://intersectmbo.typeform.com/ed-nomination)
    
*   [もっと知る](https://www.intersectmbo.org/news/help-shape-intersects-future-executive-director-applications-open)
    

Intersectオープンソース委員会（OSC）は、Cardano開発者にインキュベーションプログラムを含むさまざまなサービスを提供しています。インキュベーションプログラムに参加した最初のプロジェクトは[No Witness Labs](https://nowitnesslabs.com/)のEvolution SDKです。

Evolution SDKは、Cardanoの最重要な課題に数えられる開発者エクスペリエンスにダイレクトに取り組んでいます。すでに複数のプロジェクトで採用されており、Cardanoブロックチェーンに構築するための単一の統一されたツールキットを提供しています。[もっと知る](https://www.intersectmbo.org/news/intersect-no-witness-labs-evolution-sdk-enters-incubation)

見逃した場合に備えて、IntersectはX（旧Twitter）に[投稿](https://x.com/IntersectMBO/status/1975616969723326974)しています。そこでは、デリバリー保証チームがマイルストーンを監視している、トレジャリーから資金提供を受けているプロジェクトの詳細が提供されています。 

### 教育

**教育**チームは先だってワイオミング大学で開催されたCardano Daysイベントと、先週シンガポールで開催されたToken2049の参加者からのフィードバックを収集しています。『Mastering Cardano』のスペイン語および日本語の翻訳作業は継続しています。来月ブエノスアイレスで開催されるCardano開発者コースの準備も進められています。
