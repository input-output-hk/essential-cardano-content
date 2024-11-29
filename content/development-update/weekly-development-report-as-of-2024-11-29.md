---
title: Weekly development report as of 2024-11-29
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/8e2612e3-40fb-49e1-a83e-c896702e03e2/
image_text: Weekly development report as of 2024-11-29
---

### CORE TECHNOLOGY

This week, the **consensus** team began preparing a proposal for the technical steering committee (TSC) addressing chain growth violations. They also authored a document on the Cardano-specific implementation of the [Praos protocol theorem](https://github.com/IntersectMBO/ouroboros-consensus/pull/1320/files).

The **DB Sync** team released [v.13.6.0.2](https://github.com/IntersectMBO/cardano-db-sync/releases/tag/13.6.0.2), which is compatible with node v.10.1.2 

and includes rollback speed improvements. 

### WALLETS AND  SERVICES

This week, the **Lace** team released Lace v.1.17.5, introducing performance enhancements and bug fixes based on user feedback.

Key updates include:

*   Faster syncing and transaction data fetching
    
*   Resolved issues related to Nami mode
    
*   Improvements for the Conway era support
    
*   Fixes for shared wallet functionality.
    

The team is committed to ongoing performance enhancements and appreciates the community's input to help improve the Lace platform. Users are encouraged to provide feedback on the new update.

### SMART CONTRACTS

This week, the **Plutus** team has been working on a CIP for adding modules to Untyped Plutus Core, plus fixing tech debt and continuing the investigation of ways to make the Plutus Core language more efficient.

### SCALING

Over the past few weeks, the **Hydra** team has been finalizing [work on incremental commits](https://github.com/cardano-scaling/hydra/issues/199), focusing on tests and upcoming specification changes. They integrated the core functionality into the TUI and added a new feature allowing API filtering by UTXO addresses to the WebSocket API. The team moved the `hydra-explorer` out of the mono repo and continued experimenting with [customized ledgers](https://github.com/cardano-scaling/hydra/issues/1727), enhancing the `hydra-explorer`, and supporting the upcoming Hydra Doom tournament.

This week, the **Mithril** team released a new one-line installer for the pre-built Mithril binaries, simplifying the update process for SPO signers. They also published an overview of the protocol [security](https://mithril.network/doc/mithril/mithril-protocol/security) on the documentation website. The team began implementing a new type of certification for the Cardano database to enable differential updates, scaffolding a new signed entity type, and progressing on the computation of the message to sign.  Additionally, they adapted the WASM client npm package to support NodeJS and started working on a cache for certificate verification in the WASM client.

The team also held their monthly open meeting to discuss [Ouroboros Leios](https://drive.google.com/file/d/1W4iu4MwOXILXes1Zi43MeM505KAOHXso/view?usp=sharing).

Finally, they completed the removal of legacy store adapters from the codebase and explored solutions for signer registration in networks with multiple aggregators.

### VOLTAIRE

A governance action has been submitted by the hard fork working group to name the second hard fork in the Chang upgrade the [Plomin hard fork](https://youtu.be/o2fBzHWhS5o?t=3522), honoring Matthew Plomin, the president and co-founder of USDM, who sadly passed away suddenly this month.

As part of the next phase in the implementation of the Voltaire development, the [Cardano constitutional convention](https://cardanoconvention.com/) will take place in Buenos Aires, Argentina, and Nairobi, Kenya, from December 4 to December 6, 2024. For the latest updates on governance, be sure to check out this month’s edition of [Essential Cardano360](https://www.youtube.com/watch?v=o2fBzHWhS5o).

### CATALYST

This week in **Catalyst**, [town hall 185](https://www.youtube.com/watch?v=KDFZmLFJB3s) showcased community-led idea fest initiatives from Europe, Africa, and Asia ahead of the upcoming voting period. They also published a [shortlist](https://docs.projectcatalyst.io/current-fund/proposal-submission/cardano-partners/cardano-partners-shortlist) for the partner category, featuring tier-one global companies involved in Catalyst.

Fund13 voting begins on November 28. Instructions on how to vote are available [here for those participating](https://docs.projectcatalyst.io/current-fund/voting/how-to-vote). The Fund13 community moderation phase concluded, with statistics available [here](https://docs.google.com/presentation/d/1xyZeCzNUza5U5rk80fY6lkbF3INL84VZRrPmoBS524I/edit#slide=id.g319be3e4f41_2_18440).

While the focus remains on the technical development of Catalyst Voices, Fund13 voters can expect small iterative changes to the voting app. More information is available [here](https://docs.google.com/presentation/d/1xyZeCzNUza5U5rk80fY6lkbF3INL84VZRrPmoBS524I/edit#slide=id.g319be3e4f41_0_12). Additionally, the Catalyst Pitch Fest will be streamed live on X during the week of December 2, with further details to be provided soon.

### EDUCATION

This week, members of the **education** team are on the ground in Buenos Aires for the [Cardano Tech Week](https://lu.ma/jcsgq39k) community event, which features a mix of theoretical and practical sessions, including a hackathon by CardanoSolar, a talk on extended UTXO, game theory by Dr. Lars Brünjes, a session focused on partner chains, and Cardano Days tracks available in Spanish and English.

Additionally, the team is reflecting on the Cardano Days event delivered on Saturday in collaboration with Universidad de Cantabria in Santander, Spain.

![](https://ucarecdn.com/3d90b6db-96ed-463b-9bff-c62b44771e60/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは、チェーン成長違反に対処する技術運営委員会（TSC）に向けた提案の準備を始めました。Cardano固有の[Praosプロトコル定理](https://github.com/IntersectMBO/ouroboros-consensus/pull/1320/files)の実装に関するドキュメントを作成しました。

**DB Sync**チームは、ノードv.10.1.2対応の[v.13.6.0.2](https://github.com/IntersectMBO/cardano-db-sync/releases/tag/13.6.0.2)をリリースしました。 

これには、ロールバック速度の向上も含まれます。 

ウォレットとサービス

**Lace**チームは、ユーザーからのフィードバックに基づいてパフォーマンスの強化とバグ修正を導入したLace v.1.17.5をリリースしました。

主な更新内容は次のとおりです。

*   同期とトランザクションデータフェッチの高速化
    
*   Namiモードに関連する問題を解決
    
*   Conway期サポートの改善
    
*   共有ウォレット機能の修正
    

チームは継続的なパフォーマンス向上に取り組んでおり、Laceプラットフォームの改善に寄与するコミュニティの意見に感謝しています。本更新についてもぜひフィードバックをお寄せください。

### スマートコントラクト

**Plutus**チームは、Untyped Plutus Coreにモジュールを追加するCIPに取り組んでいるほか、技術負債を修正し、Plutus Core言語の効率性を上げる方法の調査を続けています。

### スケーリング

ここ数週間、**Hydra**チームはテストと今後の仕様変更に焦点を当て、[インクリメンタルコミットの作業](https://github.com/cardano-scaling/hydra/issues/199)の仕上げに入っています。TUIにコア機能を統合し、WebSocket APIにUTXOアドレスによるAPIフィルタリングを可能にする新機能を追加しました。hydra-explorerをモノレポから外し、[カスタマイズした台帳](https://github.com/cardano-scaling/hydra/issues/1727)で実験を続け、hydra-explorerを強化し、近日開催予定のHydra Doomトーナメントをサポートしました。

**Mithril**チームは、ビルド済みMithrilバイナリ用の新しいワンラインインストーラーをリリースし、SPO署名者の更新プロセスを簡素化しました。プロトコル[セキュリティ](https://mithril.network/doc/mithril/mithril-protocol/security)の概要をドキュメントサイトに公開しました。差分更新を可能にするためにCardanoデータベースの新しい認証タイプの実装を開始し、新しい署名済みエンティティタイプの足場を作り、署名するメッセージの計算を進めました。  NodeJSをサポートするためにWASMクライアントNPMパッケージを適合させ、WASMクライアントで証明書検証用のキャッシュに関する作業を開始しました。

[Ouroboros Leios](https://drive.google.com/file/d/1W4iu4MwOXILXes1Zi43MeM505KAOHXso/view?usp=sharing)について議論するための公開マンスリーミーティングも開催しました。

コードベースからレガシーストアアダプターを削除する作業を完了し、複数のアグリゲーターを持つネットワークで署名者を登録するためのソリューションを検討しました。

### VOLTAIRE

今月急逝されたUSDMの社長兼共同創設者であるMatthew Plomin氏を追悼し、Changアップグレードの2番目のハードフォークを[Plominハードフォーク](https://youtu.be/o2fBzHWhS5o?t=3522)と改称するためのガバナンスアクションがハードフォークワーキンググループによって提出されました。

[Cardano憲法制定会議](https://cardanoconvention.com/)は、Voltaire開発の次の段階の一環として、2024年12月4日から12月6日までアルゼンチンのブエノスアイレスとケニアのナイロビで開催されます。ガバナンスに関する最新情報は、今月の[Essential Cardano360](https://www.youtube.com/watch?v=o2fBzHWhS5o)をぜひチェックしてください。

### CATALYST

**Catalyst**に関しては、[第185回タウンホール](https://www.youtube.com/watch?v=KDFZmLFJB3s)で、ヨーロッパ、アフリカ、アジアのコミュニティ主導による投票期間に先駆けたアイデアフェストのイニシアチブが紹介されました。Catalystに関与しているティア1のグローバル企業を特集したパートナーカテゴリーの[候補リスト](https://docs.projectcatalyst.io/current-fund/proposal-submission/cardano-partners/cardano-partners-shortlist)も公開されました。

Fund13の投票は、11月28日に開始されます。参加者のための投票方法案内は[こちら](https://docs.projectcatalyst.io/current-fund/voting/how-to-vote)をご覧ください。Fund13コミュニティの調整フェーズは終了しました。統計は[ここ](https://docs.google.com/presentation/d/1xyZeCzNUza5U5rk80fY6lkbF3INL84VZRrPmoBS524I/edit#slide=id.g319be3e4f41_2_18440)でご覧ください。

Catalyst Voicesの技術開発に引き続き焦点が当てられる中、Fund13の有権者はこの投票アプリに小さな変更を期待できます。詳細は[こちら](https://docs.google.com/presentation/d/1xyZeCzNUza5U5rk80fY6lkbF3INL84VZRrPmoBS524I/edit#slide=id.g319be3e4f41_0_12)をご覧ください。Catalyst Pitch Festは、12月2日からの週にXでライブ配信される予定です。詳細は近日中に提供されます。

### 教育

**教育**チームのメンバーは、[Cardano Tech Week](https://lu.ma/jcsgq39k)コミュニティイベントのためにブエノスアイレスにいます。このイベントでは、CardanoSolarによるハッカソン、拡張UTXOに関するトーク、Lars Brünjes博士によるゲーム理論、パートナーチェーンに焦点を当てたセッション、Cardano Daysトラックなど、理論的および実践的なセッションが混在し、スペイン語と英語で提供されます。

土曜日にスペインのサンタンデールにあるカンタブリア大学と協力して行われたCardano Daysイベントの振り返りも行っています。
