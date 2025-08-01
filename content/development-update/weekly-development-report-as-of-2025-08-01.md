---
title: Weekly development report as of 2025-08-01
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/02525125-44a2-42ec-b6c4-a573573cee0d/
image_text: Weekly development report as of 2025-08-01
---

### ECOSYSTEM UPDATES

Cardano continues to demonstrate significant growth across key metrics. There are currently 2,006 active projects building on the blockchain, and delegated wallets have increased to 1.34 million. Transaction volume reached 112.13 million, marking a 0.24% increase from the previous week.

Smart contract deployment is advancing, with 140,294 Plutus scripts and 8,864 Aiken scripts now active. Governance participation has also increased to 1,409 DReps, including 984 active DReps. Developer activity remains strong, with 358 GitHub commits this week.

In other news:

*   [Quantum Hosky](https://x.com/hoskytoken/status/1950950552378151267) officially launched their website this week
    
*   Snek token is now listed on the [crypto.com](//crypto.com) exchange
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1948717545692737952) introduced Tool Compass, a platform designed to help developers easily identify suitable tools for their Cardano projects
    
*   The [Midnight tokenomics](https://x.com/midnightfdn/status/1937145594901901761) and incentives whitepaper is now live.
    

### CORE TECHNOLOGY

The **ledger** team completed a major refactoring of how reward account state is represented within the ledger codebase. This change completely removed pointers in the Conway era, reduced complexity, and improved ledger performance. This refactoring also enhances extensibility, paving the way for upcoming features such as the Leios protocol updates, the transition to a full Chimeric ledger by promoting reward accounts to proper accounts, and allowing multi-asset storage in the treasury along with asset-specific treasury withdrawals via governance actions.

Additionally, the team progressed working on upcoming features planned for the next intra-era hard fork and the subsequent Dijkstra era. They introduced a long-requested feature that reports the pre-image of the script integrity hash when validation failures occur, significantly [improving the user experience](https://github.com/IntersectMBO/cardano-ledger/pull/5172). For Dijkstra, the team implemented new [protocol parameters](https://github.com/IntersectMBO/cardano-ledger/pull/5172) and started defining the [CDDL specification](https://github.com/IntersectMBO/cardano-ledger/pull/5192). The team also improved test coverage commits([1](https://github.com/IntersectMBO/cardano-ledger/pull/5059),[2](https://github.com/IntersectMBO/cardano-ledger/pull/5193)), addressed technical debt, and improved parts of the ledger codebase.

### SCALING

This week, the **Leios** team made progress on CIP development, refined validation timing analysis with improved methodologies, and achieved high-throughput validation milestones. The team completed major components of the CIP specification, proposed improved throughput metrics for better comparability, and demonstrated a 1,000 TPS capability with specific protocol variants. Read [this report](https://leios.cardano-scaling.org/news/2025/07/21/weekly-progress-summary) for more details.

### VOLTAIRE

It’s election season at [Intersect](https://www.intersectmbo.org/), a period of heightened community engagement and decision-making that includes the nomination and voting phases for Intersect’s board of directors and the third election for Intersect’s committees, as well as the announcement of results and the subsequent transition of leadership.

In September, Intersect members will elect four members to the Intersect board, following the [recent decision](https://board.docs.intersectmbo.org/) to expand the board to seven seats, with four to be filled by members. This expansion isn't just about numbers. It’s about ensuring that diverse perspectives, innovative ideas, and community wisdom guide Cardano’s strategic direction. 

Applications are open from Monday, September 1, to Friday, September 12. Voting starts on Monday, September 15, and finishes on Friday, September 26. Results will be announced at the end of the month. [More details here.](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/september-2025-board-elections)

October brings an even more transformative milestone in the form of elections for all Intersect committees, with elected members filling every single committee seat. 

Applications open on Monday, October 1, and close on Tuesday, October 14. Voting will start on Thursday, October 16, and finish on Wednesday, October 29, with results announced on Monday, November 3. [More details here.](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/october-2025-committee-elections)

### CATALYST

This week’s town hall #199 featured a special guest appearance by [Storm Partners](https://www.youtube.com/watch?v=KohtrMT1ehE), who shared updates about their recently completed Catalyst-funded project. The **Catalyst** team also presented a live demo of the highly anticipated Catalyst key chain, alongside a clear breakdown of Fund14 timelines and what to expect in the upcoming weeks.

As a reminder, while Fund14 proposal submissions open this week, no proposal reviews, voting, or funding decisions will occur until DReps approve the treasury withdrawal governance action.

Heading to [Rare Evo](https://rareevo.io/) next week? Be sure to connect with the Catalyst team as there might be some special surprises in store!

For clarity and confidence in navigating Fund14, don't forget to explore the official [Fund14 launch guide](https://docs.projectcatalyst.io/).

### EDUCATION

This week, the **education** team is heavily focused on _Mastering Cardano_, advancing the content and ensuring its accuracy. They are also preparing for the upcoming node workshops and events at Rare Evo next week.

Looking ahead, the team are excited to announce the next _Cardano Days_ event. This two-day in-person education event will take place at the [University of Wyoming](https://www.uwyo.edu/index.html) on September 26 and 27, 2025. This event is a key component of the wider [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html) event. Registration is now open on the [Luma page](https://lu.ma/g436so6c).

![](https://ucarecdn.com/61b2463b-affa-4558-8d05-f90135bcb5a0/-/preview/-/format/auto/-/quality/smart/)  
  
エコシステム

Cardanoは主要な指標全体で着実に成長を続けています。現在、ブロックチェーン上で構築されているプロジェクトは2,006件、委任済みウォレットは134万件に増加しています。トランザクション量は前週比0.24%増の1億1213万に達しました。

スマートコントラクトのデプロイも進み、現在14万0,294のPlutusスクリプトと8,864のAikenスクリプトが稼働しています。ガバナンスへ参加もDRep数が1,409、内984がアクティブDRepと増加しています。開発者の活動も引き続き活発で、今週は358件のGitHubのコミットがありました。

その他のニュース：

*   [Quantum Hosky](https://x.com/hoskytoken/status/1950950552378151267)は今週公式ウェブサイトを開設
    
*   取引所の[crypto.com](//crypto.com)がSnekトークンを上場
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1948717545692737952)は、開発者がCardanoプロジェクトに適したツールを簡単に特定できるように設計されたプラットフォームTool Compassを紹介
    
*   [Midnight](https://x.com/midnightfdn/status/1937145594901901761)がTokenomics and incentiveホワイトペーパーを公開
    

### コアテクノロジー

**台帳**チームは、台帳コードベースにおける報酬アカウントステータスの表現方法の主要なリファクタリングを完了しました。この変更により、Conway期のポインターが完全に削除され、複雑さが軽減され、台帳パフォーマンスが向上しました。このリファクタリングにより拡張性も強化され、Leiosプロトコルの更新、報酬アカウントから正規アカウントへ昇格させることによる完全なChimeric台帳への移行、トレジャリーのマルチアセットストレージの有効化とともに、ガバナンスアクションによる特定のアセットのトレジャリー引き出しを可能にするなどの今後の機能への道が開かれました。

次の開発期内ハードフォークとそれに続くDijkstra期のために計画されている機能の開発を進めました。待望されていた、検証に失敗したときにスクリプト整合性ハッシュの事前イメージを報告する機能を導入し、[ユーザーエクスペリエンスを大幅に向上](https://github.com/IntersectMBO/cardano-ledger/pull/5172)させました。Dijkstraでは、新しい[プロトコルパラメーター](https://github.com/IntersectMBO/cardano-ledger/pull/5172)を実装し、[CDDL仕様](https://github.com/IntersectMBO/cardano-ledger/pull/5192)の定義を開始しました。テストカバレッジのコミット（[1](https://github.com/IntersectMBO/cardano-ledger/pull/5059)、[2](https://github.com/IntersectMBO/cardano-ledger/pull/5193)）を改良し、技術負債に対処し、台帳コードベースを一部改善しました。

### スケーリング

**Leios**チームはCIP開発を進め、方法論を見直して検証タイミング解析を洗練させ、高スループット検証のマイルストーンを達成しました。CIP仕様の主要コンポーネントを完成させ、比較可能性強化のためにスループットメトリックを改善することを提案し、特定のプロトコルバリアントで1,000 TPSの機能性を実証しました。詳細は、この[レポート](https://leios.cardano-scaling.org/news/2025/07/21/weekly-progress-summary)をご覧ください。

### VOLTAIRE

[Intersect](https://www.intersectmbo.org/)に選挙シーズンが到来し、コミュニティの関与と意思決定が活発化しています。これには、Intersect理事会の指名と投票フェーズ、Intersect委員会の第3回選挙、さらに、結果発表とそれに続く交代が含まれます。

9月には、Intersectのメンバーが4人の理事を選出します。これは、理事会を7名に拡大する[最近の決定](https://board.docs.intersectmbo.org/)を受けてのことで、4名はIntersectメンバーから選出されます。この拡大は単に数字だけの問題ではありません。これはまた、多様な視点、革新的なアイデア、コミュニティの知恵がCardanoの戦略的方向性を導くことを保証することを意味しています。 

応募期間は9月1日（月）から9月12日（金）までです。投票開始は9月15日（月）、終了は9月26日（金）で、結果は月末に発表されます。[詳細はこちらをご覧ください。](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/september-2025-board-elections)

10月には、Intersect全委員会の選挙という形でさらに大きな節目が訪れます。選出された委員が委員会のすべての席を占めることになります。 

応募受付は10月1日（月）から10月14日（火）まで。投票期間は10月16日（木）から10月29日（水）で、結果発表は11月3日（月）です。[詳細はこちらをご覧ください。](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/october-2025-committee-elections)

### CATALYST

今週の第199回タウンホールでは、特別ゲストとして[Storm Partners](https://www.youtube.com/watch?v=KohtrMT1ehE)が登場し、最近完了したCatalystプロジェクトの最新情報を共有しました。**Catalyst**チームはまた、待望のCatalystキーチェーンのライブデモを公開するとともに、Fund14の詳細なスケジュールと今後数週間の予定を発表しました。

Fund14の提案提出は今週開始されましたが、DRepがトレジャリーの引き出しガバナンスアクションを承認するまで、提案のレビュー、投票、資金調達の決定は実施されないことに注意してください。

来週の[Rare Evo](https://rareevo.io/)に参加予定の方は、Catalystチームにぜひ連絡してください。ストアでスペシャルサプライズがあるかもしれません。

Fund14を確実に安心して進めるために、公式の[Fund14ローンチガイド](https://docs.projectcatalyst.io/)にぜひ目を通しておいてください。

### 教育

**教育**チームは書籍『Mastering Cardano』に注力し、コンテンツを進め、正確性の確保に重点を置きました。来週開催が予定されているRare Evoでのノードワークショップやイベントに向けた準備も進めています。  
次回_Cardano Days_イベントの開催も決定しました。この2日間の対面式教育イベントは、2025年9月26日と27日に[ワイオミング大学](https://www.uwyo.edu/index.html)で開催されます。このイベントは、[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)の主要イベントです。現在[Lumaページ](https://lu.ma/g436so6c)で登録受付中です。
