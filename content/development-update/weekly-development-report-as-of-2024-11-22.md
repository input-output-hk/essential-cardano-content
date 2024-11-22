---
title: Weekly development report as of 2024-11-22
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/3a7188b7-e3ef-4930-ba63-b290e4a899e5/
image_text: Weekly development report as of 2024-11-22
---

### CORE TECHNOLOGY

This week, the core technology teams, in collaboration with the Cardano Foundation, released several components compatible with the latest Cardano node version – Cardano DB Sync, Cardano GraphQL, Cardano Rosetta servers, and Cardano wallet. This means that the latest node version is compatible with all components. For more details, see [release notes](https://docs.cardano.org/developer-resources/release-notes/release-notes/) and the [compatibility matrix](https://docs.cardano.org/developer-resources/release-notes/comp-matrix/). 

The **ledger** team worked on extracting a testing framework called [ImpSpec](https://github.com/input-output-hk/ImpSpec), which was developed to test the ledger implementation. This involved extracting reusable functionality, packaging it into a separate library, and [releasing it on Hackage](https://hackage.haskell.org/package/ImpSpec) for broader community use

The team continues to focus on enhancing tests and working on conformance testing to ensure the ledger's robustness and compliance with specifications.

The **performance and tracing** team worked on further benchmarking for governance actions and voting on node v.10.0. They also added a new prototype for a database-backed persistence layer to the analysis tool _locli_. The workbench has been improved with more fine-grained genesis caching and the ability to export cluster topology for Ouroboros Leios simulation. In tracing, they completed the final round of metrics alignment and prepared for the typed-protocols-0.3 bump. The new tracing system will roll out starting with node v.10.2.

Finally, the **quality assurance** team published [a new blog post](https://iohk.io/en/blog/posts/2024/11/20/quality-engineering-at-io-bridging-research-and-reality-in-software-development/), highlighting their commitment to delivering high-quality software that makes a real difference. 

### SCALING

This week, the **Mithril** team released a new version of the [Protocol Insights dashboard](https://lookerstudio.google.com/s/mbL23-8gibI). They also completed implementing the new status route in the aggregator and upgraded the explorer to display its information. Additionally, the team completed the [refactoring of the beacon](https://github.com/input-output-hk/mithril/issues/2075) used to snapshot the Cardano database and started working on the activation of the Pythagoras Mithril era on the `pre-release-preview` network.

Finally, they worked on [removing the legacy store adapters](https://github.com/input-output-hk/mithril/issues/2118) in the signer and aggregator and explored solutions for signer registration when multiple aggregators are running on a Mithril network.

[The Hydra Doom tournament](https://x.com/InputOutputHK/status/1858846429663408158) qualifiers kick off on December 3, and if you’re interested in participating, make sure to check out the [Hydra Doom website](https://doom.hydra.family/) for more details.

### VOLTAIRE

The hard fork working group, including members from Input | Output, agreed to propose renaming the Chang #2 hard fork to the Plomin hard fork to honor Matthew Plomin, a prominent and much-respected community member who passed away unexpectedly on November 14, 2024. The community will consider the decision in an on-chain vote.

In less than two weeks, the Cardano community will gather in Buenos Aires and Nairobi for the [Constitutional Convention](https://x.com/InputOutputHK/status/1859574033739624852), taking place from December 3-6. Delegates and contributors worldwide will vote on the Cardano constitution, a milestone in decentralized governance shaped by the global community’s input. This event reflects the collaborative efforts of ada holders, Intersect members, DReps, SPOs, and the interim constitutional committee to establish a shared vision for Cardano’s future.

The most recent draft of the constitution is [available here](https://x.com/IntersectMBO/status/1859322771278373101). Additional information regarding the Constitutional Convention, scheduled for December 3-6, can be [found here](https://2024constitutionalconvention.intersectmbo.org/).

### CATALYST

In the past two weeks, several significant milestones have been achieved in Catalyst. Voting registration for Fund13 closed on November 20, marking an important step in the ongoing funding cycle. Additionally, [Town Hall 184](https://www.youtube.com/live/a4k3pEEs4cw?si=pqVMQu2HOU0XQQdT) was held, providing updates and fostering community engagement among participants.

The moderation phase for community reviews concludes on November 21, with total reviews reaching an impressive 56,592. This high level of participation reflects the community's active involvement in shaping and evaluating proposals.

Technical development of Catalyst Voices continues, aiming to enhance community interaction and participation within the ecosystem. In line with this, the Catalyst team is organizing an upcoming Pitch Fest to showcase Fund13 ideas. Community members are invited to submit two-minute pitch videos, which will be live-streamed via Twitter (X) to the wider community. If you have a Fund13 proposal, [you can submit your pitch video here](https://forms.gle/ijdKrGS5DMXEwt677?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8RFYJKXO5CFe1h3rKHHZOBo1tQT4ykryyE7m67HRmiFO1vrXFHh0WnT2yCjJruxxXnY_B5).

Looking ahead, voting for Fund13 begins on November 28, signaling the next phase in the funding process. These developments highlight the continued growth and innovation within the Catalyst community as it advances with Fund13 initiatives.

### EDUCATION

This week, the **education** team is finalizing the content for the education sessions at the [Cardano Tech Week](https://lu.ma/jcsgq39k) community event in Buenos Aires, which will take place next week, and for the Constitutional Convention scheduled in early December. The Cardano Tech Week will feature a mix of theoretical and practical sessions, including a hackathon, a talk on extended UTXO and game theory by Dr. Lars Brünjes, a session focused on partner chains, and Cardano Days tracks available in Spanish and English.

Additionally, the team is preparing for the Cardano Days event in collaboration with Universidad de Cantabria in Santander, Spain, on Saturday, November 23. [Registration](https://lu.ma/sgmyg5li) for this event is now open!

  
  
![](https://ucarecdn.com/42f4dab5-8ee7-4224-bf6c-44defb264022/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コアテクノロジーチームは、Cardano財団と協力して、最新のCardanoノードバージョン対応のコンポーネント、Cardano DB Sync、Cardano GraphQL、Cardano Rosettaサーバー、Cardanoウォレットをリリースしました。これで、最新ノードバージョンはすべてのコンポーネントとの互換性が確立されました。詳細は、[リリースノート](https://docs.cardano.org/developer-resources/release-notes/release-notes/)および[互換性マトリクス](https://docs.cardano.org/developer-resources/release-notes/comp-matrix/)を参照してください。 

**台帳**チームは、台帳の実装をテストするために開発された[ImpSpec](https://github.com/input-output-hk/ImpSpec)と呼ばれるテストフレームワークの抽出に取り組みました。これには再利用可能な機能を抽出して別のライブラリーにパッケージ化し、より広範なコミュニティが利用できるよう[Hackage上へリリース](https://hackage.haskell.org/package/ImpSpec)することも含まれます。

台帳の堅牢性と仕様への準拠を保証するため、テストの強化と適合性テストに関する作業に引き続き注力しています。

**パフォーマンス＆トレース**チームは、ガバナンスアクションのベンチマークとノードv.10.0での投票に取り組みました。データベースに基づく永続化レイヤーの新しいプロトタイプを分析ツー_locli_に追加しました。よりきめ細かいジェネシスキャッシュとOuroboros Leiosのシミュレーション用にクラスタートポロジーをエクスポートする機能でワークベンチを改良しました。トレースに関しては、メトリクスアライメントの最終ラウンドを完了し、typed-protocols-0.3バンプの準備に取り組みました。新しいトレースシステムのロールアウトはノードv.10.2から開始されます。

**品質保証**チームは[新しいブログ記事](https://iohk.io/jp/blog/posts/2024/11/20/quality-engineering-at-io-bridging-research-and-reality-in-software-development/)を公開し、真の違いを生み出す高品質のソフトウェア提供へのコミットメントを強調しました。 

### スケーリング

**Mithril**チームは[Protocol Insightsダッシュボード](https://lookerstudio.google.com/s/mbL23-8gibI)の新バージョンをリリースしました。アグリゲーターで新しいステータスルートの実装を完了し、この詳細を表示するようエクスプローラーをアップグレードしました。Cardanoデータベースのスナップショットに使用される[ビーコンのリファクタリング](https://github.com/input-output-hk/mithril/issues/2075)を完了し、pre-release-previewネットワーク上でPythagoras Mithril期のアクティベーションに関する作業を開始しました。

署名者とアグリゲーターから[レガシーストアアダプターを削除](https://github.com/input-output-hk/mithril/issues/2118)し、複数のアグリゲーターがMithrilネットワーク上で実行されている場合の署名者登録の解決策を検討しました。

[Hydra Doomトーナメント](https://x.com/InputOutputHK/status/1858846429663408158)予選は12月3日にスタートします。参加に興味がある方は、[Hydra Doomのサイト](https://doom.hydra.family/)をご覧ください。

### VOLTAIRE

Input | Outputのメンバーを含むハードフォークワーキンググループは、2024年11月14日に急逝した著名で敬愛を受けていたコミュニティメンバー、Matthew Plomin氏に敬意を表し、Chang #2ハードフォークをPlominハードフォークに改名する提案に同意しました。コミュニティはこの決定について、オンチェーン投票で検討することになります。

あと2週間足らずで、Cardanoコミュニティがブエノスアイレスとナイロビに集い、[憲法制定会議](https://x.com/InputOutputHK/status/1859574033739624852)が開催されます。開催期間は12月3日から6日です。代表者やコントリビューターたちは、グローバルコミュニティの意見によって形成された分散型ガバナンスのマイルストンとなるCardano憲法に投票します。このイベントは、ADA保有者、Intersectメンバー、DRep、SPO、暫定憲法委員会による、Cardanoの未来に向けた共通のビジョンを確立するための協力的な取り組みを反映しています。

憲法草案の最新版は[こちら](https://x.com/IntersectMBO/status/1859322771278373101)を、12月3日～6日に予定されている憲法制定会議の詳細は[こちら](https://2024constitutionalconvention.intersectmbo.org/)をご覧ください。.

### CATALYST

この2週間で、Catalystでいくつかの重要なマイルストンが達成されました。Fund13の投票登録は11月20日に修了し、進行中の資金調達サイクルの重要な一歩となりました。[第184回タウンホール](https://www.youtube.com/live/a4k3pEEs4cw?si=pqVMQu2HOU0XQQdT)が開催され、最新情報が提供されたほか、参加者間でコミュニティの関与が促されました。

コミュニティレビューのための調整フェーズは11月21日に終了し、総レビュー数は56,592に達しました。この参加レベルの高さは、提案形成と評価に対するコミュニティの積極的な関与を反映しています。

Catalyst Voicesの技術開発は続いており、エコシステム内でのコミュニティのインタラクションと参加の向上を目指しています。これに合わせて、CatalystチームはFund13のアイデアを紹介するためのPitch Festを企画しています。ここでは、コミュニティメンバーが投稿する2分間のピッチ動画が、Twitter（X）でコミュニティに広くライブストリーミングされます。Fund13の提案がある場合には、[ここからピッチ動画を提出](https://forms.gle/ijdKrGS5DMXEwt677?utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-8RFYJKXO5CFe1h3rKHHZOBo1tQT4ykryyE7m67HRmiFO1vrXFHh0WnT2yCjJruxxXnY_B5)できます。

Fund13への投票は11月28日から始まります。これで、資金調達プロセスは次の段階に進むことになります。こうした展開は、CatalystコミュニティがFund13のイニシアチブを進めていく中で、継続的な成長と革新を際立たせるものです。

### 教育

**教育**チームは、ブエノスアイレスで来週開催される[Cardano Tech Week](https://lu.ma/jcsgq39k)コミュニティイベントと12月の憲法制定会議における教育セッションのコンテンツの仕上げにかかっています。Cardano Tech Weekでは、ハッカソン、Lars Brünjes博士による拡張UTXOとゲーム理論に関するトーク、パートナーチェーンに焦点を当てたセッション、Cardano Daysのトラックといった、理論と実践のセッションがスペイン語と英語で提供されます。

11月23日土曜にスペイン、サンタンデールのカンタブリア大学と共催するCardano Daysイベントに向けた準備も進められています。このイベントへの[参加登録](https://lu.ma/sgmyg5li)は現在受付中です。
