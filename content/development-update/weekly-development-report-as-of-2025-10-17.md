---
title: Weekly development report as of 2025-10-17
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/a84ae885-5978-40c1-b51d-86af33f0400b/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to advance steadily across multiple fronts. The number of projects building remains at 2,013. On-chain activity remains healthy, with 114.80 million transactions processed.

Smart contract activity shows stable expansion, with 142,286 Plutus scripts and 12,070 Aiken scripts now deployed. Governance participation also grew slightly, reaching 1,508 DReps, including 1,020 active DReps, reflecting ongoing engagement in the Voltaire era. Developer activity stayed consistent, with 322 GitHub commits recorded over the past week._  
  
In other news:_

*   Intersect and the Cardano Foundation co-designed [a new framework](https://www.intersectmbo.org/news/building-a-better-budget-process-for-2026-proposing-a-multi-step-framework) that proposes a more transparent and collaborative approach to funding.
    
*   Cardano community member and builder, Matthias Benkort, released the [State of the Cardano developer ecosystem 2025](https://state-of-the-developer-ecosystem.cardano.org/) survey for the blockchain’s developer community to complete. Since its inaugural release in 2022, this annual survey has offered a method for evaluating the broader technical environment while uncovering potential disparities.
    
*   The Input | Output Research team presented two papers at the International Conference on Functional Programming (ICFP): [A layered certifying compiler architecture](https://t.co/KulJoT99NW) and [Plinth: a plugin-powered language built on Haskell (experience report)](https://t.co/l1rJCtDNTg).
    
*   [Bitrue](https://x.com/BitrueOfficial/status/1977275224921178308) announced that it will delegate a portion of the ada it holds in custody to five stake pool operators (SPOs).
    
*   The [Hoskinson Government and Policy Center](https://x.com/WyomingHGPC/status/1978574329131470944) was officially launched this week.
    
*   Diffusion’s staking baskets have reached a [TVL of 633k](https://x.com/bigpeyYT/status/1977582863265730807) ada, distributed across 50 SPOs simultaneously.
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1978807556752482695) launched a new 'What Is Open Source?' course on Cardano Academy.
    

### CORE TECHNOLOGY

This week, the **consensus** team defined the scope for the [first consensus Leios demo](https://github.com/IntersectMBO/ouroboros-consensus/issues/1701) and began prototyping its mini-protocols, components, and demo infrastructure using the actual node as the base for the prototype. They updated `ThreadNet` tests to prepare for Peras testing and verify forking [into the Dijkstra era](https://github.com/IntersectMBO/ouroboros-consensus/pull/1689). Most of the LSM tree integration into consensus has been merged (commits: [1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1700),[2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1653),[3](https://github.com/IntersectMBO/ouroboros-consensus/pull/1652),[4](https://github.com/IntersectMBO/ouroboros-consensus/pull/1603),[5](https://github.com/IntersectMBO/ouroboros-consensus/pull/1572)), with node integration expected to require only minor consensus changes (for example, exposing new symbols). The team also advanced Peras, merging a second change set and submitting another for review.

### SMART CONTRACTS

A friendly reminder: [UPLC 2025](https://services.iohk.io/uplc), a dedicated event for developers and researchers in the Plutus ecosystem, is less than two weeks away! Make sure you're ready for this exciting event. Additionally, the team has published a new deep-dive report on [formal verification](https://iohk.io/en/blog/posts/2025/10/14/always-secure-and-safer-than-ever-thanks-to-next-level-smart-contract-verification-on-cardano/) – be sure to check it out.

### WALLETS AND SERVICES

The **Lace** team released [v.1.30](https://x.com/lace_io/status/1976315072939958762?s=46&t=KH7Ar_LX82ElBgTR404n8g) with full Spanish localization, making the wallet more accessible to a global audience. To switch languages, go to **Main Menu → Language**. Additional translations are planned for future releases.

### SCALING

This week, the **Mithril** team successfully [integrated the Haskell DMQ](https://github.com/input-output-hk/mithril/issues/2728) node with Mithril nodes in the end-to-end tests. They continued implementing the first phase of [decentralizing configuration](https://github.com/input-output-hk/mithril/issues/2692) parameters. They also worked on some enhancements to the client library and CLI to provide access to Cardano database incremental snapshots by epoch. Additionally, they updated the signer to ensure it has a unique protocol initializer for each epoch.

Finally, the team fixed some bugs in the CI and completed the first refactoring of the STM cryptographic library that enhances its readability.  
  
The **Hydra** team released [v.1.0.0](https://github.com/cardano-scaling/hydra/releases), added tests to capture the current maximum UTXO limit before [fanout](https://github.com/cardano-scaling/hydra/issues/2270) becomes impossible, and fixed [partial token](https://github.com/cardano-scaling/hydra/issues/2285) deposit handling.

### VOLTAIRE

Intersect members are invited to apply as candidates for seats on seven committees until October 24, 2025. Voting will happen from October 27 to November 7, with results announced on November 14 after an independent audit.

As a token of appreciation to recognize the volunteer time, effort, and expertise contributed by members in fulfilling their committee member duties, all elected members can avail of service rewards of 500 ada per month, with an additional 500 ada per month for committee chairs. These amounts may be reviewed annually.  
Members are needed for the following committees:

| **Committee** | **Available seats** |
| --- | --- |
| Intersect steering (ISC) | 2 |
| Cardano budget (CBC) | 5 |
| Civics (CC) | 4 |
| Technical steering (TSC) | 5 |
| Open source (OSC) | 5 |
| Cardano product (CPC) | 5 |
| Membership and community (MCC) | 5 |
| Growth and marketing (GMC) | 5 |

Find complete instructions and more information in the [news section](https://www.intersectmbo.org/news/intersect-committee-elections-2025-applications-open-october-1st) of the Intersect website.

As part of its continuous process improvement, Intersect, in conjunction with the Cardano Foundation, is proposing a new budget process, also detailed on the [news section](https://www.intersectmbo.org/news/building-a-better-budget-process-for-2026-proposing-a-multi-step-framework) of the Intersect website.

### CATALYST

Fund14 results are live! 131 proposals have been funded across four categories, showcasing the diversity and innovation within the Cardano ecosystem:

*   Cardano open developers: 41 proposals funded
    
*   Cardano use cases – product and partners: 17 proposals funded
    
*   Cardano open ecosystem: 34 proposals funded
    
*   Cardano use cases – concept: 39 proposals funded.
    

Continuous improvement sits at the heart of Project Catalyst, and community feedback is vital in shaping what comes next. Over the coming weeks, we invite the community to discuss, reflect, and share perspectives on Fund14.

🗳️ Have your say: Please take a few minutes to complete our brief feedback survey — open for one week. Your insights will directly inform future improvements and will be shared publicly. Link to [survey](https://docs.google.com/forms/d/e/1FAIpQLScc230YCLjmaCJIh5SbqQsEhhnmax_edTk2dYgT57hJD-Jikg/viewform).

We spotlighted three incredible projects demonstrating Cardano’s real-world impact:

*   💡 WADA Hub Hackathon – empowering African developers to create local, Cardano-powered solutions
    
*   ♻️ Plastic Credit ReFi Protocol – leveraging stablecoins to fund real plastic recovery initiatives
    
*   📣 Ecosystem Amplification Campaign – content creators amplifying Cardano’s voice across digital spaces.
    

As Fund14 concludes, excitement is already building for Fund15 — bringing fresh ideas, new partnerships, and bold innovations to life. 🚀

📺 Catch the replay: [Watch here](https://www.youtube.com/live/CigiBqwtooU?si=tBNGWe_2wL3t36jt)

### EDUCATION

This week, the **education** team is focused on collecting feedback from two major recent events: the **Cardano Days event** held at the University of Wyoming and attendance at **Token2049 in Singapore**.

The team is also continuing translation work for the **'Mastering Cardano'** ebook, with progress being made on both the Spanish and Japanese versions.

Additionally, preparations are well underway for the next **Cardano developer course**, which is scheduled for next month in **Buenos Aires**. The team is exploring options to include an online component for wider reach, so please watch this space for more information on registration and course details.

![](https://ucarecdn.com/1f2e038b-623f-4d1c-a59d-7f856ffa78c2/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムはさまざまな面で着実に前進を続けています。構築されたプロジェクト数は2,013で変わりません。オンチェーンの活動は、トランザクション数1億1480万と健全です。

スマートコントラクトも安定した増加傾向にあり、現在14万2,286のPlutusスクリプトと1万2,070のAikenスクリプトがデプロイされています。ガバナンスへの参加もわずかに増加し、DRep数は1,508人に達し、そのうちアクティブDRepは1,020人を数えます。これは、Voltaire期における継続的なエンゲージメントを反映しています。開発者の活動も一定で、先週は322件のGitHubコミットが記録されました。

_その他のニュース：_

*   IntersectとCardano財団は、資金調達に対して透明性を高めた協力的なアプローチを提案する[新しいフレームワーク](https://www.intersectmbo.org/news/building-a-better-budget-process-for-2026-proposing-a-multi-step-framework)を共同で設計。
    
*   CardanoコミュニティのメンバーでありビルダーであるMatthias Benkortは、ブロックチェーンの開発者コミュニティに向けて[Cardano開発者エコシステムの現状2025](https://state-of-the-developer-ecosystem.cardano.org/)調査をリリース。この年次調査は、2022年の初公開以来、潜在的な格差を明らかにしながら、より広範な技術環境を評価する方法を提供しています。
    
*   Input | Output Researchチームは、国際関数型プログラミング会議（ICFP）で、[A layered certifying compiler architecture（階層認証コンパイラーアーキテクチャー）](https://t.co/KulJoT99NW)と、[Plinth: a plugin-powered language built on Haskell（Haskellに構築されたプラグイン駆動言語Plinth：体験レポート）](https://t.co/l1rJCtDNTg)の2つの論文を発表。
    
*   [Bitrue](https://x.com/BitrueOfficial/status/1977275224921178308)は保有するADAの一部を5つのSPOに委任すると発表。
    
*   [Hoskinson Government and Policy Center](https://x.com/WyomingHGPC/status/1978574329131470944)、今週正式に発足。
    
*   Diffusionのステーキングバスケットは同時に50のSPOに分散され、[TVLは633k](https://x.com/bigpeyYT/status/1977582863265730807) ADAに到達。
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1978807556752482695)がCardanoアカデミーで新コース「オープンソースとは何か」開講。
    

### コアテクノロジー

[コンセンサス](https://github.com/IntersectMBO/ouroboros-consensus/issues/1701)チームは[最初のコンセンサスLeiosデモ](https://github.com/IntersectMBO/ouroboros-consensus/issues/1701)の範囲を定義し、実際のノードをプロトタイプのベースとして使用したミニプロトコル、コンポーネント、デモインフラのプロトタイピングを開始しました。Perasテストの準備と[Dijkstra期](https://github.com/IntersectMBO/ouroboros-consensus/pull/1689)へのフォークを検証するために`ThreadNet`テストを更新しました。コンセンサスへのLSMツリー統合のほとんどはマージされており（コミット[1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1700)、[2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1653)、[3](https://github.com/IntersectMBO/ouroboros-consensus/pull/1652)、[4](https://github.com/IntersectMBO/ouroboros-consensus/pull/1603)、[5](https://github.com/IntersectMBO/ouroboros-consensus/pull/1572)）、ノード統合はコンセンサスの軽微な変更だけ（例えば、新しいシンボルを公開するなど）で済むと予想されています。Perasの作業を進め、2つ目の変更セットをマージして、もう1つの変更セットをレビューのために送信しました。

### スマートコントラクト

Plutusエコシステムの開発者と研究者のための特別イベント[UPLC 2025](https://services.iohk.io/uplc)開催まで、あと2週間を切りました。このエキサイティングなイベントをぜひお見逃しなく。[形式検証](https://iohk.io/jp/blog/posts/2025/10/14/always-secure-and-safer-than-ever-thanks-to-next-level-smart-contract-verification-on-cardano/)についての新しい詳細なレポートが公開されました。こちらもぜひチェックしてください。

### ウォレットとサービス

**Lace**チームは[v.1.30](https://x.com/lace_io/status/1976315072939958762?s=46&t=KH7Ar_LX82ElBgTR404n8g)の完全スペイン語版をリリースしました。希望者は世界中からアクセスできます。言語を切り替えるには、**Main** **MenuからLanguage in Laceに**移動します。今後のリリースでは追加の翻訳版も予定されています。

### スケーリング

**Mithril**チームは、エンドツーエンドテストで[Haskell DMQ](https://github.com/input-output-hk/mithril/issues/2728)ノードとMithrilノードを無事[統合](https://github.com/input-output-hk/mithril/issues/2728)しました。[設定パラメーターの分散化](https://github.com/input-output-hk/mithril/issues/2692)の第1フェーズの実装を続けました。エポックごとのCardanoデータベース増分スナップショットへのアクセスを提供するために、クライアントライブラリーとCLIの機能強化も行いました。エポックごとに一意なプロトコル初期化子を持つように、署名者を更新しました。

CIのバグを修正し、可読性を高めるためのSTM暗号ライブラリーの最初のリファクタリングを完了しました。  
  
**Hydra**チームは[v.1.0.0を](https://github.com/cardano-scaling/hydra/releases)リリースし、[ファンアウト](https://github.com/cardano-scaling/hydra/issues/2270)が不可能になる前に現在の最大UTXO制限を捕捉するためのテストを追加し、[部分的なトークン](https://github.com/cardano-scaling/hydra/issues/2285)デポジットの処理に関する不具合を修正しました。

### VOLTAIRE

Intersectのメンバーは、2025年10月24日までの7つの委員会の議席に立候補できます。投票は10月27日から11月7日まで行われ、結果は独立監査後11月14日に発表されます。

委員会メンバーとしての職務遂行を通じてボランティアとして貢献されている時間、努力、および専門知識を評価し、その感謝の印として、すべての選出メンバーは、毎月500ADAのサービス報酬を利用することができます。また、委員会委員長には、毎月さらに500ADAが加算されます。これらの金額は毎年見直すことができます。

募集する委員会と議席数は以下のとおりです。

| **委員会** | **議席数** |
| --- | --- |
| Intersectステアリング（ISC） | 2 |
| Cardano予算（CBC） | 5 |
| シビック（CC） | 4 |
| テクニカルステアリング（TSC） | 5 |
| オープンソース（OSC） | 5 |
| Cardanoプロダクト（CPC） | 5 |
| メンバーシップとコミュニティ（MCC） | 5 |
| 成長とマーケティング（GMC） | 5 |

募集要項および詳細情報は、Intersectionサイトの[ニュースセクション](https://www.intersectmbo.org/news/intersect-committee-elections-2025-applications-open-october-1st)をご覧ください。

継続的なプロセス改善の一環として、IntersectはCardano財団と共同で新しい予算プロセスを提案しています。こちらに関しても、詳細はIntersectサイトの[ニュースセクション](https://www.intersectmbo.org/news/building-a-better-budget-process-for-2026-proposing-a-multi-step-framework)をご覧ください。

### CATALYST

Fund14の結果が公開されました。資金調達を受けるのは4つのカテゴリーにまたがる131の提案で、Cardanoエコシステムの多様性とイノベーションが示されています。

*   Cardanoオープンデベロッパー：41提案に資金調達
    
*   Cardanoユースケース - プロダクトとパートナー：17提案に資金調達
    
*   Cardanoオープンエコシステム：34提案に資金調達
    
*   Cardanoユースケース - コンセプト：39提案に資金調達
    

Project Catalystの中心には継続的な改善があり、コミュニティからのフィードバックは今後を形作る上で不可欠です。今後数週間にわたり、コミュニティにはFund14について議論し、考え、意見を共有してもらうようお願いします。

🗳️意見を聞かせてください：数分でできる簡単なフィードバックアンケートにご協力ください。受付期間は1週間です。皆さんの洞察は、今後の改善の直接的な指針となり、一般に公開されます。[アンケートへはこちらから](https://docs.google.com/forms/d/e/1FAIpQLScc230YCLjmaCJIh5SbqQsEhhnmax_edTk2dYgT57hJD-Jikg/viewform)。

Cardanoの現実世界への影響を示す3つの素晴らしいプロジェクトにスポットライトを当てました。

*   💡Wada Hub Hackathon – アフリカの開発者がCardanoを活用した地元のためのソリューションを作成できるようにする
    
*   ♻️Plastic Credit Refi Protocol – ステーブルコインを活用して実際のプラスチック回収イニシアチブに資金を提供
    
*   📣エコシステム増幅キャンペーン – デジタル空間全体でCardanoの声を増幅するコンテンツクリエイター
    

Fund14は終了しますが、Fund15の興奮がすでに高まっています。ここでは新たなアイデア、新たなパートナーシップ、大胆なイノベーションがもたらされることが期待されます。🚀

📺動画で確認：[こちらからご覧ください](https://www.youtube.com/live/CigiBqwtooU?si=tBNGWe_2wL3t36jt)

### 教育

**教育**チームは、ワイオミング大学で開催された**Cardano Daysイベント**と**シンガポールで**開催された**Token2049**への参加という最近行われた2つの主要イベントからのフィードバックを収集することに焦点を当てています。

電子書籍『**Mastering Cardano』**の翻訳作業も継続しており、スペイン語版と日本語版の両方で進展が見られています。

来月**ブエノスアイレス**で開催される**Cardano開発者コース**の準備も進められています。リーチを拡大するためにオンラインコンポーネントを含めるオプションを模索しています。登録とコースの詳細については、このスペースを参照してください。
