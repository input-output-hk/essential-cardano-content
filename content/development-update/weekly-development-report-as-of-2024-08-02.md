---
title: Weekly development report as of 2024-08-02
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/34a3949e-fbb7-4f6f-87a5-2b83db427619/
image_text: Weekly development report as of 2024-08-02
---

### CORE TECHNOLOGY

This week, the **ledger** team continued focussing on Conway features and conformance testing. During this process, they discovered and fixed a bug that would have affected Conway functionality after the bootstrap phase. Additionally, the team also finished fully defining the Conway CDDL specification in Haskell.

### SCALING

This week, the **Hydra** team focused on refining and scoping work around network reliability, identifying specific faults to address first. They continued running the Hydra head on preview, [confirming that empty decommits](https://github.com/cardano-scaling/hydra/pull/1534) pose no significant issues. The team upgraded the Hydra head for [compatibility with the latest Cardano node](https://github.com/cardano-scaling/hydra/pull/1531) to ensure continuous operation during the upcoming hard fork. Additionally, they introduced a technical writing style guide to maintain consistency in documentation.  
  
The **Mithril** team released the new distribution \`[2430.0](https://github.com/input-output-hk/mithril/releases/tag/2430.0)`, which includes support for Cardano node version` 9.1.0`. They activated the certification of Cardano transactions in the` release-preprod `and` pre-release-preview\` networks, and also included bug fixes and performance improvements. The team continued their work on the certification of Cardano stake distribution, activated the certification in the test networks, and started working on implementing [new routes for the aggregator REST API.](https://updates.cardano.intersectmbo.org/2024-07-31-mithril#:~:text=aggregator%20REST%20API-,%231841,-Worked%20on%20the)

Finally, the team [benchmarked the signer's footprint on the SPO infrastructure](https://github.com/input-output-hk/mithril/issues/1826), thoroughly tested edge cases for Cardano transaction certification, and continued drafting a CIP for the diffusion of Mithril signatures through the Cardano network.

### VOLTAIRE & SANCHONET

With the release of [node v.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0), all users are encouraged to upgrade to this or a later version in preparation for the Chang upgrade. 

For more details, read this Intersect blog post and check the latest [Intersect news](https://www.essentialcardano.io/development-update/weekly-development-report-as-of-2024-07-26#:~:text=Chang%20upgrade%2C%20follow-,Intersect%20news,-.).

### CATALYST

Onboarding is progressing smoothly, with 91 percent of onboarding forms and 81 percent of statements of milestones submitted, and 36 percent of statements of milestones signed off by reviewers. [Town Hall 173](https://youtube.com/live/MKVT-UCU5N0) was held on Wednesday, July 31, marking the last town hall for Fund12. Upcoming town halls will be retrospective, gathering feedback from the community as we enter the Catalyst cooldown period. Additionally, the Catalyst voices user experience review took place in a breakout room during Town Hall 173, showcasing developments to the community.

### EDUCATION

This week, the **education** team completed a successful _CardanoDeveloper_ course at the [UTN](https://utn.edu.ar/es/) in Buenos Aires. They also organized a graduation event for over 20 aspiring smart contract developers who graduated from the course. Additionally, the team updated content for Mastering Cardano and supported training efforts for the Constitutional Committee.  
  
![](https://ucarecdn.com/f94a9392-ce0e-45dc-9b34-4528c5e1ac46/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームはConwayの機能テストと適合性テストに引き続き注力しました。このプロセスで、ブートストラップフェーズ後にConwayの機能に影響を与えるバグを発見し、修正しました。HaskellによるConway CDDL仕様の定義も完了しました。

### スケーリング

**Hydra**チームは、ネットワークの信頼性に関する作業の精緻化とスコープ設定に焦点を当て、最初に対処すべき具体的な障害を特定しました。引き続きHydraヘッドのプレビューを実行し、 [空デコミット](https://github.com/cardano-scaling/hydra/pull/1534)が重要な問題を引き起こさないことを確認しました。Hydraヘッドをアップグレードして[最新のCardanoノードに対応させ](https://github.com/cardano-scaling/hydra/pull/1531)、来たるハードフォーク中も継続的に動作するようにしました。ドキュメントの一貫性を維持するためのテクニカルライティングスタイルガイドを導入しました。  
  
**Mithril**チームは、Cardanoノードバージョン9.1.0のサポートを含む新しいディストリビューション[2430.0](https://github.com/input-output-hk/mithril/releases/tag/2430.0)をリリースしました。release-preprodとpre-release-previewネットワークでCardanoトランザクションの認証を有効にし、バグ修正とパフォーマンスの改良も加えました。引き続きCardanoステーク分布認証に取り組み、テストネットワークで認証を有効化し、[アグリゲーターREST APIの新しいルート](https://updates.cardano.intersectmbo.org/2024-07-31-mithril#:~:text=aggregator%20REST%20API-,%231841,-Worked%20on%20the)の実装に着手しました。

[SPOインフラにおける署名者のフットプリントをベンチマーク](https://github.com/input-output-hk/mithril/issues/1826)し、Cardanoトランザクション認証エッジケースの徹底的なテストを行い、Cardanoネットワークを介したMithril署名拡散のCIPの作成を続けました。

### VOLTAIRE & SANCHONET

[ノードv.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0)のリリースに伴い、すべてのユーザーはChangアップグレードの準備としてこのバージョンまたはそれ以降のノードにアップグレードすることが推奨されます。 

詳細は、Intersectブログの記事と最新の[Intersectニュース](https://www.essentialcardano.io/development-update/weekly-development-report-as-of-2024-07-26#:~:text=Chang%20upgrade%2C%20follow-,Intersect%20news,-.)をご覧ください。

### CATALYST

オンボーディングは順調に進行しており、オンボーディングフォームの91%、マイルストンステートメントの81%が提出され、レビュー担当者によって36%のマイルストンステートメントが承認されました。7月31日水曜日にFund12最後のタウンホール、[タウンホール173](https://youtube.com/live/MKVT-UCU5N0)が開催されました。Catalystはクールダウン期間に入るため、今後のタウンホールは、コミュニティからのフィードバックを収集したうえでの振り返りとなります。タウンホール173の分科会室ではCatalyst Voicesのユーザーエクスペリエンスレビューが行われ、開発状況がコミュニティに紹介されました。

### 教育

**教育**チームはブエノスアイレスの[UTN](https://utn.edu.ar/es/)で開催されていたCardano開発者コースを終了しました。コースを修了した20を超えるスマートコントラクト開発者の卵たちのための卒業イベントを開催しました。Mastering Cardanoのコンテンツを更新し、憲法委員会のトレーニングに関する取り組みを支援しました。
