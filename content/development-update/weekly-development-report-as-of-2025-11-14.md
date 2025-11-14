---
title: Weekly development report as of 2025-11-14
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/150a6499-1bc3-41fc-b5ee-dd09cb555b3c/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team started troubleshooting the 'bufferbloat' issue observed during the October 2025 Leios demo by [opening an issue](https://github.com/IntersectMBO/ouroboros-consensus/issues/1756). They also focused on resource management and stability by integrating [additional LSM-tree changes](https://github.com/IntersectMBO/ouroboros-consensus/pull/1715) into `cardano-node`.

The team resolved race conditions and issues with double read-lock acquisitions in `LedgerDb`, while also enhancing its resource management commits([1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1737),[2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1741)). Finally, they [improved memory management](https://github.com/IntersectMBO/ouroboros-consensus/pull/1731) by preventing the retention of the genesis ledger state, which is particularly crucial for benchmarking.  
  
### SCALING

This week, the **Mithril** team released the `2543.1` [hotfix distribution](https://github.com/input-output-hk/mithril/releases/tag/2543.1-hotfix) to address some signing issues. The team has nearly completed the first phase of decentralizing configuration parameters and continued implementing a simple aggregator discovery mechanism. They also advanced work on the [SNARK-friendly](https://github.com/input-output-hk/mithril/issues/2763) STM library by designing its architecture, implementing the Schnorr signature scheme, refactoring error handling, and experimenting with a Jubjub curve implementation in the BLST library.

Finally, they worked on refactoring the interface used by the signer to interact with the aggregator and improved the protocol security page.  
  
This week, the **Hydra** team delivered several key improvements. They enhanced the [partial fanout functionality](https://github.com/cardano-scaling/hydra/issues/1468) and improved [logging for failed HTTP requests](https://github.com/cardano-scaling/hydra/issues/2315). A new [API endpoint was added](https://github.com/cardano-scaling/hydra/issues/2316) to retrieve the time when a head was opened. A significant safety feature, the ‘SafeClose’ client input, was developed to [prevent accidental closures when unburned minted tokens](https://github.com/cardano-scaling/hydra/issues/2330) are still present. Furthermore, they made progress on [chain synchronization](https://github.com/cardano-scaling/hydra/issues/2286) to keep heads aligned with the network state. Finally, the team showcased the new [VTech Hydra SDK](https://hydrasdk.com/) for ecosystem builders.

### VOLTAIRE
The Intersect committee election results have been compiled and audited. The number of candidates and the voter turnout both exceeded expectations, and the future of decentralized governance at Intersect looks assured. The full results are posted on the [Intersect knowledge base](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/october-2025-committee-elections/april-2025-committee-election-results).

### CATALYST
[Fund15](https://projectcatalyst.io/funds/15) launched last week, and proposal submission is now officially open! This round introduces a brand new category, [Midnight: Compact DApps](https://app.projectcatalyst.io/discovery/category/0199802c-21b4-7161-a16e-a77af492780f), sponsored by [Midnight Foundation](http://midnight.foundation) along with three Cardano-focused categories: Cardano Partners, Cardano Use Cases, and Cardano Open. Launch Guide [here](https://projectcatalyst.io/f15launchguide.pdf).  
  
The Midnight category will fund open-source proof-of-concept (PoC) DApps that showcase real-world applications of Midnight’s privacy technology.  
  
Fund15 takes Catalyst to a new chapter: evolving from a Cardano-centric program into a multichain accelerator that empowers builders across ecosystems. By leveraging Catalyst’s community-driven infrastructure and voting framework, the initiative aims to identify promising projects and accelerate the development of practical, privacy-focused tools for developers.

**Submission deadline:** 6AM on November 27, 2025

#### Midnight category

**Compact DApps**

To accelerate developer adoption of Midnight by funding essential open-source reference DApps. This category is seeking reference DApps, and the Midnight Foundation will sponsor funding.  
  
**Budget available:** $USDM 250,000.00  
**Proposal range:** From $USDM 2,500 to $USDM 10,000.  
**Details:** [here](https://projectcatalyst.io/funds/15/midnight-compact-dapps)


#### Cardano categories

**Cardano partners: tier-1 enterprise integrations**  
This specialized funding category is designed to forge strategic alliances by supporting ambitious Cardano-based proposals that pilot real-world solutions with Tier-1 enterprises, driving adoption, high-impact R&D, and meaningful co-marketing opportunities.  
  
**Budget available:** ₳10,000,000  
**Proposal range:** From ₳250,000 to ₳750,000  
**Details:** [here](https://projectcatalyst.io/funds/15/cardano-partners-tier-1-enterprise-integrations)

#### **Cardano use cases: prototype and launch**  
This category funds entrepreneurial teams and developers — whether experienced in Cardano or new to it—providing the resources to build and launch novel on-chain prototypes that accelerate the growth and utility of the Cardano ecosystem.  
  
**Budget available:** ₳6,000,000  
**Proposal range:** From ₳15,000 to ₳200,000  
**Details:** [here](https://projectcatalyst.io/funds/15/cardano-use-cases-prototype-and-launch)

#### Cardano open: ecosystem
This category will fund non-technical initiatives that drive grassroots ecosystem growth, education, research, and community engagement to broaden Cardano’s reach. This category focuses on building the creative capacity of our passionate global community.  
  
**Budget available:** ₳2,500,000  
**Proposal range:** ₳15,000 to ₳60,000  
**Details:** [here](https://projectcatalyst.io/funds/15/cardano-open-ecosystem)  
  
### EDUCATION
The **education** team is concentrating its efforts in Buenos Aires, Argentina, this week, where it is driving a critical developer initiative and conducting significant educational outreach.

Team members are currently on site at the UTN in Buenos Aires, Argentina, for the in-person component of the Cardano developer course. This course is designed to empower participants to build on Cardano and has over 50 registered attendees. Simultaneously, the team is working at the IO booth as part of the broader [Argentina Tech Week](https://www.tecweek.com.ar/), promoting IO education activities and Mastering Cardano, and supporting the local hackathon.

In parallel with the on-site activities, the team has successfully completed the remaining modules of phase 1 of the self-paced Cardano education program. The team encourages the community to watch this space for details on where to start your learning journey with the newly completed content.  
  
  
![](https://ucarecdn.com/c4e9a95b-045a-43d7-977d-bb6e21148414/-/preview/-/format/auto/-/quality/smart/)  
  
コアテクノロジー

**コンセンサス**チームは2025年10月のLeiosデモで観察されたバッファブロート問題に関して、[Issueを作成](https://github.com/IntersectMBO/ouroboros-consensus/issues/1756)してトラブルシューティングを開始しました。[追加のLSMツリーの変更](https://github.com/IntersectMBO/ouroboros-consensus/pull/1715)を'cardano-node'に統合するなど、リソース管理と安定性にも注力しました。`LedgerDb`における競合状態や二重読み取りロック取得に関する問題を解決する傍ら、リソース管理コミット（[1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1737)、[2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1741)）を強化しました。特にベンチマークにとって重要なジェネシス台帳ステートの保持を防ぐことによって、[メモリー管理を改善](https://github.com/IntersectMBO/ouroboros-consensus/pull/1731)しました。  
  
### スケーリング

**Mithril**チームは署名問題に対処するための[ホットフィックスディストリビューション](https://github.com/input-output-hk/mithril/releases/tag/2543.1-hotfix)`2543.1`をリリースしました。

設定パラメーターの分散化の第1フェーズをほぼ完了し、単純なアグリゲーター検出メカニズムの実装を継続しました。[SNARKに適した](https://github.com/input-output-hk/mithril/issues/2763)STMライブラリーのアーキテクチャー設計、Schnorr署名スキームの実装、エラー処理のリファクタリング、BLSTライブラリーにおけるJubjub曲線実装の実験などを進めました。

署名者がアグリゲーターと対話するために使用するインターフェイスのリファクタリングに取り組み、プロトコルセキュリティページを改善しました。  
  
**Hydra**チームはいくつかの進歩を遂げました。[部分的なファンアウト機能](https://github.com/cardano-scaling/hydra/issues/1468)を改善し、[失敗したHTTPリクエストのログ機能](https://github.com/cardano-scaling/hydra/issues/2315)を強化し、ヘッドが開かれた時間を取得する[APIを追加](https://github.com/cardano-scaling/hydra/issues/2316)しました。未焼却のミントされたトークンが存在する場合にクローズを防止するための‘SafeClose’クライアントインプットを開発しました。チェーン同期に関しても進捗し、ヘッドがネットワークと整合した状態にあることが保証されるようになりました。ビルダー向けに新しいVTech Hydra SDKを公開しました。

### VOLTAIRE

インターセクト委員会の選挙結果は集計、監査を終えました。候補者数と投票率はどちらも予想を上回り、Intersectにおける分散型ガバナンスの将来は確実なものと思われます。結果の詳細は[Intersectナレッジベース](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/october-2025-committee-elections)に掲載されています。

### CATALYST

Fund15は先週立ち上げられ、提案書の提出が正式に開始されました。このラウンドでは、[Midnight Foundation](http://midnight.foundation)がスポンサーとなる新しいカテゴリー「[Midnight: Compact DApps」](https://app.projectcatalyst.io/discovery/category/0199802c-21b4-7161-a16e-a77af492780f)が導入されました。  
  
この新しいカテゴリーは、Midnightのプライバシー技術の実世界におけるユースケースを示すオープンソースの概念実証となるDAppに資金を提供するものです。  
  
Fund15で、Catalystは新しい章へと進んでいます。Cardano中心のプログラムから複数のエコシステムのビルダーを支援するマルチチェーンアクセラレーターへと進化していきます。このイニシアチブは、Catalystのコミュニティ主導のインフラと投票フレームワークを活用することで、有望なプロジェクトを特定し、開発者向けの実用的でプライバシーに焦点を当てたツールの開発を加速することを目指しています。

**提出期限**：**2025年11月27日**

#### **Midnight Category**
**Compact DApps**
重点分野

*   **ガバナンス**：加者のプライバシーを保護しつつ、公平性と監査可能性を確保する市民プラットフォーム
    
*   **AI**：パフォーマンスを損なうことなくユーザーの同意を確実にし、データを責任を持って扱うプライバシー対応AIシステム
    
*   **医療**：プライバシー保護インフラ上に構築された、患者所有のデータシステム、研究ネットワーク、遠隔医療ツール
    
*   **ファイナンス**：プログラム可能なプライバシーを活用したコンプライアンス対応の金融プロダクトで、プライベートな信用市場、規制されたDeFiレール、革新的なデジタルバンキングソリューションなど
    
*   **斬新なコンセプト**：Midnightのプライバシー機能を独自の方法で活用する、他の業界における革新的なアプリケーション
    
各DAppは、スコープは小規模でありながら完全に機能し、再利用可能なコード、ドキュメント、他の開発者がプロジェクトをローカルで実行し、適合させられるような動作するデモUIを備える必要があります。  
  
**利用可能な予算**：**$USDM 250,000.00** 
**提案範囲**：**$USDM 2,500～$USDM 10,000**

#### **Cardano Categories**  
**Cardano Partners：Tier-1 Enterprise Integrations**  
戦略的提携を構築するために設計されたこの専門的な資金提供カテゴリーは、Cardanoエコシステムを世界の主要な組織と結びつけます。これは特に、業界の巨人が抱える実世界の課題を解決するために、Cardanoベースのソリューションを実装し、試験的に導入する野心的な提案を支援します。   世界的に認知されている一流（Tier 1）企業が主導または協力する、影響力の高いR&Dの試験導入と統合に資金を提供し、Cardanoの一般採用を促進し、重要な共同マーケティングの機会を創出します。  
  
**利用可能な予算**：₳10,000,000  
**提案の範囲**：₳250,000～₳750,000  
  
**Cardano Use Cases：Prototype & Launch**  
このカテゴリーは、Cardanoエコシステムを構築するテクニカルクリエイターに資金を提供することに特化しています。起業家チームやエンジニア、Cardanoネイティブまたは新規参加を問わず経験豊富なブロックチェーン開発者、そして新しいオンチェーンユーティリティのアイデアとそれを構築するスキルを持つ小規模でアジャイルなチームを探しています。    基盤となる研究と設計をすでに経た斬新なプロトタイプを構築し、立ち上げるためのリソースを起業家個人やチームに提供して、Cardanoのための新しいオンチェーンユーティリティの提供を加速します。  
**利用可能な予算**：₳6,000,000  
**提案の範囲**：₳250,000～₳750,000  
  
### 教育

**教育**チームは、アルゼンチンのブエノスアイレスで、重要な開発者イニシアチブの推進と、重要な教育アウトリーチの実施に邁進しました。

チームメンバーは現在、UTNでのCardano開発者コースの対面講義のためにブエノスアイレスに行っています。このコースは、参加者がCardanoで構築できるようなプログラムになっており、50人以上の参加者が登録しています。同時に、[Argentina Tech Week](https://www.tecweek.com.ar/)の一環として設置されたIOブースで、IOの教育活動と『Mastering Cardano』の宣伝活動を行い、地元のハッカソンを支援しています。

現場での活動と並行して、自習型のCardano教育プログラムのフェーズ1の残りのモジュールを無事完了しました。コミュニティには、新しいコンテンツを含めた学習方法の詳細を、このスペースで確認することが奨励されています。
