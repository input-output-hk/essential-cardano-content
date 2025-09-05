---
title: Weekly development report as of 2025-09-05
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/cd95ef41-9c5f-4bea-a8e9-4e22632627cd/
image_text: Weekly development report as of 2025-09-05
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to expand with 2,009 projects building on the network and 1.34 million delegated wallets. Asset activity also saw steady growth, with 10.90 million native tokens issued across 220,944 token policies. 

Governance participation also grew, with 1,465 DReps, including 1,002 active DReps. Developer contributions remain consistent, with 320 GitHub commits recorded.

In other news:

*   [MLabs](https://x.com/MLabs10/status/1963523921434583342) launched [feeswap.io](//feeswap.io), a platform that allows users to pay transaction fees in any Cardano native token (CNT)
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1961344507620069740) has rebuilt the developer portal, adding new guides, demos, and resources
    
*   [World Mobile Chain’s](https://x.com/wmchain/status/1963240798516039949) $WMTX token has started trading on KrakenFX.
    
*   [Tokeo](https://x.com/Tokeo_io/status/1962709249798349186) completed milestone 4 of their Catalyst-funded project CardanoKit, which is now in beta
    
*   [Fluid Tokens](https://x.com/FluidTokens/status/1962553691782672500) released the audit report for version 3 of their decentralized lending platform.
    

### CORE TECHNOLOGY

Over the past two weeks, the **consensus** team focused on contributing to the first public draft of the [Leios CIP](https://github.com/cardano-scaling/CIPs/pull/11), enhancements to LSM-tree support, and the integration and audit of the KES agent. The team released [cardano-lmdb-simple 0.8.1.0](https://chap.intersectmbo.org/package/cardano-lmdb-simple-0.8.1.0/), adding features for range-reading keys when Haskell and serialized orders differ, and refactored internal code to group snapshot functionality into a `SnapshotManager`. They also fixed leaking handles in uncommitted forkers, reducing the number of open handles that persist during queries. Work on KES agent integration and the accompanying audit is ongoing.

### SMART CONTRACT

The **Plutus** team made several performance and refactoring improvements to the evaluator and deserializer, including commits ([1](https://github.com/IntersectMBO/plutus/pull/7272),[2](https://github.com/IntersectMBO/plutus/pull/7281),[3](https://github.com/IntersectMBO/plutus/pull/7286),[4](https://github.com/IntersectMBO/plutus/pull/7287),[5](https://github.com/IntersectMBO/plutus/pull/7296)). They also added support for built-in units and pairs, a feature planned to activate at the next intra-era hard fork. In parallel, the team continued developing the [UPLC-CAPE benchmark](https://github.com/IntersectMBO/UPLC-CAPE) — designed to compare the performance of surface languages targeting UPLC — and presented progress at the Plutus working group meeting on September 2, 2025.

On the Plinth side, the team added a Plinth library function, [caseInteger](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Builtins-Internal.html#v:caseInteger), which compiles to integer case analysis in UPLC and will be enabled at the upcoming intra-era hard fork. They also improved compilation to fail earlier with a clearer error when unsupported Haskell language extensions are used. Finally, they enriched the Plinth compiler’s compilation trace (available via the `dump-compilation-trace` flag) with additional source-location details and improved failure messages.

### WALLETS AND SERVICES

Last week, the team released [Daedalus v.7.2.0](https://iohk.zendesk.com/hc/en-us/articles/49820147340825-Daedalus-7-2-0-release-notes). This release now links to the Project Catalyst proposal portal instead of IdeaScale and is compatible with cardano-node [v.10.2.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.2.1) and cardano-wallet v2025-03-31, enhancing overall efficiency.

Additionally, this version addresses a bug that impacted the ability to change the display currency in ‘Settings → Wallets’, allowing users to make this change smoothly now.

All Daedalus users are strongly encouraged to upgrade to this new version.

### SCALING

The **Mithril** team completed the implementation of the [mock DMQ node](https://github.com/input-output-hk/mithril/issues/2627) to support end-to-end testing of decentralized signature diffusion. They worked on updating the CIP of the DMQ protocol and its implementations in Pallas and Mithril nodes. They also worked on refactoring the new Cardano database verification command to provide better error messages. Additionally, the team continued collaborating with the innovation team on prototyping a SNARK proving circuit for Mithril certificates.

Finally, they kept [prototyping a Mithril/Cardano bundle](https://github.com/input-output-hk/mithril/issues/2616) in a Docker image and made progress refactoring the [STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2568).

The **Hydra** team addressed a TUI desynchronization with node state, published a new [tutorial on committing a script UTXO into a Hydra head](https://github.com/cardano-scaling/hydra/issues/1653), and introduced a [Grafana demo for monitoring a Hydra head](https://github.com/cardano-scaling/hydra/pull/2161). They also stabilized the [nightly CI process](https://github.com/cardano-scaling/hydra/issues/2191) and made small improvements to the [Blockfrost documentation](https://github.com/cardano-scaling/hydra/issues/2204).

Additionally, the team aims to release v.0.23, investigate a user-reported [Blockfrost bug](https://github.com/cardano-scaling/hydra/issues/2194), continue working on the [HTLC example](https://github.com/cardano-scaling/hydra/issues/2080), enable [deposit recovery when a head is closed](https://github.com/cardano-scaling/hydra/issues/1812), and ensure the node [stays up to date with the chain even without head-logic events](https://github.com/cardano-scaling/hydra/issues/2206).

The **Leios** team marked a significant milestone with the formal publication of the Ouroboros Leios CIP proposal, complemented by the release of the [second comprehensive technical report](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/technical-report-2.md) and extensive network performance analysis. The team successfully delivered the definitive protocol specification and supporting evidence to the Cardano Foundation for formal review. Find out more in [this report](https://leios.cardano-scaling.org/news/2025/09/01/weekly-progress-summary).

### VOLTAIRE

Intersect members are invited to stand for election to the Intersect governing board. The application period opened on September 1, 2025, at noon UTC and will close at the same time on September 12, 2025.

The board provides strategic oversight during one of the most exciting periods in Intersect's development. With Cardano’s new constitutional governance framework taking shape, the Intersect board will guide the organization that supports these transformative mechanisms.

Intersect board members will have the opportunity to:

*   **Shape strategic direction** – guide Intersect's role in supporting Cardano's governance evolution and ensuring the organization effectively serves the community's needs
    
*   **Ensure democratic accountability** - help maintain Intersect's commitment to transparency and member-driven decision making
    
*   **Support innovation** - oversee initiatives that advance Cardano's development and adoption while working to maintain decentralization
    
*   **Bridge communities** - connect different segments of the Cardano ecosystem - developers, entrepreneurs, researchers, and everyday users
    
*   **Build for the future** - help establish precedents that could influence decentralized systems far beyond Cardano.
    

To be eligible, applicants must:

*   Hold a paid Intersect membership (individual or higher)
    
*   Be at least 18 years of age
    
*   Consent to a background check (US requirement)
    
*   Demonstrate alignment with Intersect’s values of transparency, inclusivity, and decentralization.
    

Members who wish to stand as candidates must apply using the official form in the members’ area of the Intersect website. While explanations of this form are available on the [Intersect knowledge base](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/september-2025-board-elections/board-application-form) in several languages, including Spanish, Japanese, Sinhala, and Tamil, the form must be completed in English, as board meetings are conducted in that language.

An annual stipend of 35,000 USD, paid in fortnightly installments, is available to elected board members.

### CATALYST

**Project Catalyst** recently hosted [town hall #204](https://www.youtube.com/live/vQMty5Pn71U?si=-E3u_9unLdn7wI2l), welcoming guests from the Lovelace Academy. They shared their inspiring journey, detailing how they started and the passion that drives their work today. The academy now offers a growing library of tutorials, which have been translated into Portuguese, covering Plutus, Aiken, and Midnight. This makes these tools more accessible to learners in the community.

The community review stage is nearing its conclusion, with the deadline set for Friday at 6 am UTC. Participation has been outstanding, with a remarkable total of 64,593 reviews submitted so far. This reflects the dedication and involvement of the community.

Finally, keep an eye on Catalyst’s social channels, as we will soon be celebrating another anniversary of Project Catalyst. Exciting updates and celebrations are on the way!

### EDUCATION

This week, the **education** team analyzed community feedback on [Mastering Cardano](https://book.io/book/mastering-cardano/) and finalized modules for the self-paced Cardano education program.

The team is also preparing for the next Cardano Days event – a two-day in-person education event at the University of Wyoming on September 26-27, 2025. This event is a key component of the wider [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html). Registration is officially open on the[Luma page](https://lu.ma/g436so6c).  
  
![](https://ucarecdn.com/30e8c050-ef52-4991-ab3f-01439eee31ff/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは拡大を続けており、ネットワークに構築されているプロジェクト数は2,009、委任済みウォレット数は134万を数えます。資産の活動も着実に増加し、22万944のトークンポリシーの下で1,090万のネイティブトークンが発行されました。 

ガバナンスへ参加も増加し、DRep数は1,465、内1,002がアクティブDRepです。開発者による貢献も引き続き堅調で、320のGitHubコミットが記録されました。

その他のニュース：

*   [MLabs](https://x.com/MLabs10/status/1963523921434583342)は、ユーザーがCardanoネイティブトークン（CNT）でトランザクション手数料を支払うことを可能にするプラットフォーム、[feeswap.io](//feeswap.io)をリリース
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1961344507620069740)は開発者ポータルを再構築し、新しいガイド、デモ、リソースを追加
    
*   [World Mobile Chain](https://x.com/wmchain/status/1963240798516039949)の$WMTXトークンがKrakenFXで取引を開始
    
*   [Tokeo](https://x.com/Tokeo_io/status/1962709249798349186)はCatalyst資金提供プロジェクトCardanoKitのベータ版リリースで、マイルストーン4を完了
    
*   [Fluid Tokens](https://x.com/FluidTokens/status/1962553691782672500)は分散型貸付プラットフォームのバージョン3の監査レポートをリリース
    

### コアテクノロジー

この2週間、**コンセンサス**チームは[Leios CIP](https://github.com/cardano-scaling/CIPs/pull/11)の最初の公開ドラフト版への貢献、LSM-treeサポートの強化、KESエージェントの統合と監査に集中しました。[Cardano-lmdb-simple 0.8.1.0](https://chap.intersectmbo.org/package/cardano-lmdb-simple-0.8.1.0/)をリリースし、Haskellとシリアル化された順序が異なる場合にキーを範囲読み取りする機能を追加したほか、内部コードをリファクタリングしてスナップショット機能を`SnapshotManager`にまとめました。未コミットのフォーカーにおけるハンドルリークを修正し、クエリ中に残り続けるオープンハンドルの数を減らしました。KESエージェントの統合とそれに伴う監査作業は進行中です。

スマートコントラクト

**Plutus**チームは、評価器とデシリアライザーに対して、コミット（[1](https://github.com/IntersectMBO/plutus/pull/7272)、[2](https://github.com/IntersectMBO/plutus/pull/7281)、[3](https://github.com/IntersectMBO/plutus/pull/7286)、[4](https://github.com/IntersectMBO/plutus/pull/7287)、[5](https://github.com/IntersectMBO/plutus/pull/7296)）を含むパフォーマンス改善とリファクタリングを行いました。ビルトインユニットとペアのサポートも追加しました。この機能は、次回開発期内ハードフォークで有効になる予定です。UPLCを対象とした表面言語の性能を比較するために設計された[UPLC-CAPEベンチマーク](https://github.com/IntersectMBO/UPLC-CAPE)の開発も並行して続け、2025年9月2日のPlutusワーキンググループ会議で進捗状況を報告しました。

Plinthに関しては、Plinthライブラリー関数[caseInteger](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Builtins-Internal.html#v:caseInteger)を追加しました。この関数はUPLCで整数ケース解析にコンパイルされ、次回開発期内ハードフォークで有効化される予定です。サポートされていないHaskell言語拡張が使用された場合に、より明確なエラーとともにコンパイルが早期に失敗するように改善しました。Plinthコンパイラーのコンパイルトレース（`dump-compilation-trace`フラグで利用可能）を、ソースコードの位置の詳細を追加し、失敗時のメッセージを改善することで強化しました。

ウォレットとサービス

先週、チームは[Daedalus v.7.2.0](https://iohk.zendesk.com/hc/ja/articles/49820147340825)をリリースしました。このリリースでは、リンクをIdeaScaleからProject Catalyst提案ポータルに切り替え、Cardano-node [v.10.2.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.2.1)およびCardano-wallet v2025-03-31に対応させ、全体的な効率性を向上させています。

「設定→ウォレット」で表示通貨を変更する機能に影響を与えるバグを修正し、ユーザーがこの変更をスムーズに行えるようにしました。

すべてのDaedalusユーザーには、この新しいバージョンにアップグレードすることが強く推奨されています。

### スケーリング

**Mithril**チームは、分散型署名拡散のエンドツーエンドテストをサポートするための、[模擬DMQノードの実装](https://github.com/input-output-hk/mithril/issues/2627)を完了しました。DMQプロトコルのCIPの更新と、PallasとMithrilノードにおけるその実装に取り組みました。より良いエラーメッセージを提供するために、新しいCardanoデータベース検証コマンドのリファクタリングにも取り組みました。Mithril証明書のためのSNARK証明回路のプロトタイプ作成で、イノベーションチームとのコラボレーションを続けました。

[Dockerイメージでの](https://github.com/input-output-hk/mithril/issues/2568)[MithrilとCardanoバンドルのプロトタイプ作成](https://github.com/input-output-hk/mithril/issues/2616)を続け、[STM暗号ライブラリー](https://github.com/input-output-hk/mithril/issues/2568)のリファクタリングを進めました。

**Hydra**チームはノードステータスとのTUIの同期ずれに対処し、[スクリプトUTXOをHydraヘッドにコミットするための新しいチュートリアル](https://github.com/cardano-scaling/hydra/issues/1653)を公開し、[Hydraヘッドを監視するためのGrafanaデモ](https://github.com/cardano-scaling/hydra/pull/2161)を導入しました。[夜間に行われるCIプロセス](https://github.com/cardano-scaling/hydra/issues/2191)を安定化させ、[Blockfrostのドキュメント](https://github.com/cardano-scaling/hydra/issues/2204)に小さな改良を加えました。

さらに、v.0.23のリリース、ユーザーから報告された[Blockfrostのバグ](https://github.com/cardano-scaling/hydra/issues/2194)の調査、[HTLCの例](https://github.com/cardano-scaling/hydra/issues/2080)に関する作業の継続、[ヘッドがクローズされた際のデポジットの復元](https://github.com/cardano-scaling/hydra/issues/1812)を可能にすること、[ヘッドロジックイベントが発生しなくてもノードがチェーンを最新の状態に保つこと](https://github.com/cardano-scaling/hydra/issues/2206)を目指しています。

**Leios**チームはOuroboros Leios CIP提案の正式公開という重要なマイルストーンを達成したほか、[包括的な技術報告書第2版](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/technical-report-2.md)と広範なネットワークパフォーマンス分析をリリースしました。確定版のプロトコル仕様とそれを裏付ける証拠を、正式なレビューのためにCardano財団に無事提出しました。詳細は、[このレポート](https://leios.cardano-scaling.org/news/2025/09/01/weekly-progress-summary)で確認してください。

### VOLTAIRE

Intersectメンバーの、Intersect理事会選挙への立候補受付が始まりました。受付期間は日本時間2025年9月1日21時から2025年9月12日の同時刻までです。

この理事会は、Intersectの発展において最もエキサイティングな時期の1つに、戦略的な監督を提供します。Cardanoの新しい立憲ガバナンスフレームワークが形を成しつつある中で、Intersect理事会は、これらの変革的なメカニズムを支える本組織を導くことになります。

Intersect理事には、以下の機会が与えられます。

*   **戦略的方針の形成** – Cardanoガバナンスの進化を支える上でのIntersectの役割を導き、コミュニティのニーズに組織が効果的に応えられるようにする
    
*   **民主的な説明責任の確保** \- 透明性とメンバー主導の意思決定に対するIntersectのコミットメントを維持するのを助ける
    
*   **イノベーションのサポート** - 分散性を維持しながら、Cardanoの開発と普及を促進するイニシアチブを監督する
    
*   **コミュニティの橋渡し** - 開発者、起業家、研究者、一般ユーザーなど、Cardanoエコシステムのさまざまなセグメントをつなぐ
    
*   **未来に向けた構築** \- Cardanoをはるかに超えた分散型システムに影響を与えうる先例を確立するのを助ける
    

応募資格

*   有料のIntersectメンバーシップ（個人またはそれ以上）を保有している
    
*   18歳以上である
    
*   身元調査へ同意する（米国の要件）
    
*   Intersectの価値観である透明性、包括性、分散性との整合性を示す
    

立候補を希望するメンバーは、Intersect のウェブサイトにあるメンバーエリアの公式フォームを使用し、申請する必要があります。このフォームの説明は、スペイン語、日本語、シンハラ語、タミル語を含む複数の言語で [Intersect のナレッジベース](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/september-2025-board-elections/board-application-form)で利用可能です。ただし、理事会は英語で運営されるため、フォームは英語で記入する必要があります。

選出されたメンバーには、年額35,000ドルの手当てが隔週で支払われます。

### CATALYST

**Project Catalyst**は先日[第204回タウンホール](https://www.youtube.com/live/vQMty5Pn71U?si=-E3u_9unLdn7wI2l)を開催し、Lovelace Academyからのゲストを迎えました。彼らは、Lovelace Academy がどのように始まったのか、そして今日その活動を動かす情熱について詳しく語り、感動的な道のりを共有しました。同アカデミーは現在、Plutus、Aiken、Midnight を網羅する、チュートリアルのライブラリーを増やしており、これらはポルトガル語に翻訳されています。これにより、これらのツールがコミュニティの学習者にとって、より利用しやすくなります。

コミュニティレビュー段階は終盤を迎えており、日本時間金曜日の15時に締め切られます。これまでの参加状況は目覚ましく、合計で64,593件という驚くべき数のレビューが提出されました。これはコミュニティの献身と積極的な関与を反映しています。

まもなくProject Catalystの記念日を祝う予定ですので、Catalystのソーシャルチャンネルにご注目ください。ワクワクするような最新情報やお祝いのイベントがまもなく公開されます！

### 教育

**教育**チームは、『[Mastering Cardano](https://book.io/book/mastering-cardano/)』に関するコミュニティのフィードバックを分析し、自習型のCardano教育プログラムのコンテンツをまとめています。

2025年9月26日、27日にワイオミング大学で開催される2日間の対面イベント、Cardano Daysイベントの準備も進めています。これは、[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)の主要イベントです。登録は[Lumaページ](https://lu.ma/g436so6c)で公式に受付中です。
