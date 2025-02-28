---
title: Weekly development report as of 2025-02-28
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/2a33a282-9da6-49d6-a36f-4326cf681a1a/
image_text: Weekly development report as of 2025-02-28
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano's ecosystem continues to expand with incremental growth in key metrics. The number of projects building on the network has increased to 1,987, while 1.324 million delegated wallets actively participate in staking. The issuance of native tokens has reached 10.70 million, with 208,410 token policies.

Smart contract activity is also progressing, with 127,114 Plutus scripts deployed, marking a 0.53% increase since last week. On-chain transactions have risen to 108.80 million, a 2.17% increase since last week, indicating steady network usage. Governance participation remains active, with 1,147 decentralized representatives (DReps), reflecting continued engagement in Cardano's decentralized decision-making process.

In other news:

*   [Iagon](https://x.com/IagonOfficial/status/1894459616018272495) and [Andamio Platform](https://x.com/AndamioPlatform/status/1892975967544480251) have joined the Cardano Foundation’s Venture Hub
    
*   [Carlos Souza](https://x.com/caike/status/1894854012664479982) introduced ‘Xander’, an Elixir library for connecting to a Cardano node, along with a quick project demo
    
*   [Butane Synthetics](https://x.com/butaneprotocol/status/1894259331430060295) is nearing the launch of [Butane Oracles](https://x.com/ButaneMan365/status/1894435384991375644), Cardano’s first distributed, fault-resistant oracle, developed by Sundae Labs and funded by Butane Protocol.
    

### CORE TECHNOLOGY

The **performance and tracing** team conducted Plinth memory budget scaling benchmarks, UTXO-HD benchmarks to address a fixed regression, and Ouroboros Genesis benchmarks. They adjusted Ouroboros Genesis and UTXO-HD within the workbench and completed various maintenance tasks. On the infrastructure side, they removed outdated deployments, merged the Haskell profile definition, and continued simplifying the workbench. Meanwhile, C library development for trace forwarding remains ongoing, with feature implementation guided by community feedback, and the team has begun testing the removal of the old tracing system.

This week, the **ledger** team tackled technical debt by improving the entrypoint interface that consensus uses to interact with the ledger, reorganizing parts of the ledger state for a more type-safe distinction of changes introduced in the Conway era, and implementing alternative deserialization for on-chain types to enable faster, more accurate decoders in downstream components.

### WALLETS AND SERVICES

[Daedalus v.7.1.0](https://iohk.zendesk.com/hc/en-us/articles/43885605379865-Daedalus-7-1-0-release-notes) has been released as a security and maintenance update, ensuring compatibility with the Plomin hard fork and improving overall performance and stability. Notable updates include upgrading `cardano-node` to v.10.1.4 and `cardano-wallet` to v.2025-01-09 to address potential denial of service vulnerabilities post-Plomin. The release also provides [CIP-129](https://cips.cardano.org/cip/CIP-0129) DRep ID support, aligning Daedalus with the new on-chain governance features, and resolves a dynamic library loading issue on older macOS (10.15.x) systems.

### SCALING

This week, the **Mithril** team continued implementing incremental certification of the Cardano database, focusing on feature stabilization and production readiness. They also worked on supporting the Cardano node v.10.2 and documenting the certification process for each certifiable data type.

Finally, the team completed [cleaning up legacy code](https://github.com/input-output-hk/mithril/issues/2316) from the 'Thales' era and started [working on a slave mode](https://github.com/input-output-hk/mithril/issues/2334) for the aggregator signer registration.

This week in **Leios** development, [CPS-0018](https://github.com/cardano-foundation/CIPs/blob/master/CPS-0018/README.md) for improved transaction throughput was approved, along with improved Docker support for simulations and analysis of cross-simulation results. The team also examined input block production rates and their impact on network performance.

### VOLTAIRE 

Excitement is building as the time approaches for the second Intersect committee elections. Now that the community shapes the future of Cardano, all ada holders are encouraged to get involved in governance by joining Intersect and volunteering to be a member of a standing committee.

Candidacy applications will be open from March 17 to March 31, and voting will take place in April. To maintain continuity and corporate knowledge, only half the membership of each committee will be replaced every six-monthly election.

People with these attributes are encouraged to apply:

*   Passionately committed to the vision that created Cardano: empowering the powerless, banking the unbanked, and connecting the unconnected
    
*   Specific knowledge and skills in the domain of the particular committee
    
*   Available to spend about 20 hours weekly attending virtual meetings, participating in online chats, and processing emails.
    

More information is available on the [Intersect website](https://members.intersectmbo.org/dashboard).

### CATALYST

**Catalyst** has launched a new video series, [Under the Hood](https://x.com/Catalyst_onX/status/1894812548958167102), to promote transparency and provide insights into behind-the-scenes activities, while the [Catalyst town hall](https://x.com/Catalyst_onX/status/1894392945324728736) is now live on X, engaging the community in real-time discussions. The team has introduced a [community poll](https://x.com/Catalyst_onX/status/1894809124438732865) to gather input on topics for the next X Space. Meanwhile, the onboarding of Fund13 is ongoing, alongside the continued development of tooling and infrastructure in preparation for Fund14 changes.

### EDUCATION

This week, the **education** team are making progress with various refactoring updates and enhancements to the Cardano developer course and are completing additional lectures for the Haskell Bootcamp. They are also outlining  a stake pool operator course and a Midnight zero-knowledge proofs course. Additionally, they are preparing for a virtual presentation about Cardano for the Doctoral Consortium at Universidad Latinoamericana y del Caribe, in Venezuela, later this month.

![](https://ucarecdn.com/28fa4533-b192-4aaa-b72d-83206fa95096/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは拡大を続け、主要な指標は増加傾向を示しています。ネットワークで構築されたプロジェクトの数は1,987に増加し、133万4000の委任済みウォレットがステーキングに積極的に参加しています。ネイティブトークンの発行は1,070万、トークンポリシーは20万8,410に達しています。

スマートコントラクト活動も進行しており、Plutusスクリプトは先週比0.53%増の12万7,114がデプロイされました。オンチェーントランザクションは、先週比2.17%増の1億880万件に上り、安定したネットワーク利用を示しています。ガバナンスへの参加は、DRep数1,147人と依然活発であり、Cardanoの分散型意思決定プロセスへの継続的な関与を反映しています。

その他のニュース：

●    [Iagon](https://x.com/IagonOfficial/status/1894459616018272495)と[Andamio Platform](https://x.com/AndamioPlatform/status/1892975967544480251)がCardano財団のVenture Hubに参加

●    [Carlos Souza](https://x.com/caike/status/1894854012664479982)がCardanoノードに接続するためのElixirライブラリーXanderを、簡単なプロジェクトデモを付けて紹介

●    [Butane Synthetics](https://x.com/butaneprotocol/status/1894259331430060295)、Sundae Labs開発Butane Protocol資金提供のCardano初の分散型フォールト耐性Oracle、[Butane Oracles](https://x.com/ButaneMan365/status/1894435384991375644)をまもなく立ち上げ

### コアテクノロジー

**パフォーマンス&トレース**チームは、Plinthメモリーバジェットスケーリングのベンチマーク、固定回帰に対処するためのUTXO-HDベンチマーク、Ouroboros Genesisベンチマークを実施しました。ワークベンチでOutoboros GenesisとUTXO-HDを調整し、さまざまなメンテナンス作業を行いました。インフラに関しては、古いデプロイを削除し、Haskellプロファイル定義をマージし、ワークベンチの簡素化を続けました。トレース転送のためのCライブラリーの開発は継続しており、コミュニティからのフィードバックに基づいた機能の実装が行われています。古いトレースシステムを削除するためのテストを開始しました。

**台帳**チームは技術負債に取り組みました。コンセンサスが台帳とのインタラクションに使用するエントリーポイントインターフェイスを改良し、Conway期に導入された変更に関して区別の型安全性を高めるために台帳ステータスを部分的に再編成し、ダウンストリームコンポーネントでより速くより正確なデコーダーを可能にするためにオンチェーン型の代替逆シリアル化を実装しました。

### ウォレットとサービス

[Daedalus v.7.1.0](https://iohk.zendesk.com/hc/ja/articles/43885605379865)はセキュリティおよびメンテナンスアップデートとしてリリースされ、Plominハードフォークとの互換性を確保し、全体的なパフォーマンスと安定性を向上させました。特筆すべき更新として、Plomin後のDoS攻撃に対する潜在的な脆弱性に対処するために、cardano-nodeをv.10.1.4に、cardano-walletをv.2025-01-09にアップグレードしています。このリリースはまた、[CIP-129](https://cips.cardano.org/cip/CIP-0129) DRep IDサポートを提供してDaedalusを新しいオンチェーンガバナンス機能に準拠させている他、古いmacOS（10.15.x）システムでの動的ライブラリー読み込みの不具合を解決しています。

### スケーリング

**Mithril**チームは、機能の安定化と本番環境の準備に焦点を当てながら、Cardanoデータベース増分認証の実装を続けました。Cardanoノードv.10.2のサポートや、認証可能なデータ型ごとの認証プロセスの文書化にも取り組みました。

Thales期の[レガシーコードのクリーンアップ](https://github.com/input-output-hk/mithril/issues/2316)を完了し、アグリゲーター署名者登録のための[スレーブモードに関する作業](https://github.com/input-output-hk/mithril/issues/2334)を始めました。

**Leios**の開発に関しては、トランザクションスループットを向上させる[CPS-0018](https://github.com/cardano-foundation/CIPs/blob/master/CPS-0018/README.md)が承認され、シミュレーション、およびクロスシミュレーション結果分析のためのDockerサポートを改良しました。インプットブロックの生成率と、そのネットワークパフォーマンスへの影響についても調査しました。

### VOLTAIRE 

第2回Intersect委員会選挙が近づいており、興奮が高まっています。Cardanoの未来はコミュニティにより作られます。すべてのADA保有者はIntersectに参加し、常任委員会のメンバーになることでガバナンスに関与することが奨励されています。

立候補者届出期間は3月17日から3月31日までで、投票は4月に行われます。継続性と蓄積知識を維持するために、各委員会メンバーの半数のみが半年ごとに改選されます。

以下に当てはまる場合は、ぜひ応募してください。

*   力のない人々に力を与え、銀行口座を持たない人々に銀行機能を提供し、接続していない人々をつなぐという、Cardanoの創立ビジョンに情熱を傾けて取り組んでいる
    
*   特定の委員会の分野に関する専門知識やスキルを持つ
    
*   週に約20時間、オンライン会議への出席、オンラインチャットへの参加、電子メールの処理が可能
    

詳細は[Intersectのサイト](https://members.intersectmbo.org/dashboard)を参照してください。

### Catalyst

**Catalyst**は透明性を促進し、舞台裏の活動を紹介するために新しい動画シリーズ[Under the Hood](https://x.com/Catalyst_onX/status/1894812548958167102)の配信を始めました。[Catalystタウンホール](https://x.com/Catalyst_onX/status/1894392945324728736)は現在Xでライブで行われており、コミュニティはリアルタイムの議論に参加しています。次のXスペースのトピックに関する意見を集めるために、[コミュニティ投票](https://x.com/Catalyst_onX/status/1894809124438732865)を導入しました。Fund13のオンボーディングは続いており、Fund14の変更に備えたツールとインフラの開発も並行して進行中です。

### 教育

**教育**チームは、Cardano開発者コースのさまざまなリファクタリング、更新、強化を進め、Haskell Bootcampの追加講義を完了しています。ステークプールオペレーターコースとMidnightゼロ知識証明コースの概要も作成中です。今月後半、ベネズエラのラティノアメリカーナ・イ・デル・カリベ大学で開かれる博士コンソーシアムのために、Cardanoについてのバーチャルプレゼンテーションの準備をしています。
