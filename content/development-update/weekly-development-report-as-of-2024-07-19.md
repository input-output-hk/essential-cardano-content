---
title: Weekly development report as of 2024-07-19
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/a68f4915-1043-425a-82c9-3a3a44f6fbeb/
image_text: Weekly development report as of 2024-07-19
---

### CORE TECHNOLOGY

As the **ledger** team awaits the Chang upgrade, the focus has shifted towards extensive testing. Current efforts are primarily dedicated to writing unit tests and conducting conformance testing. This thorough testing is crucial to ensure that all systems are robust and fully prepared for the upcoming transition to the Conway era.

### WALLETS AND SERVICES

This week, the **Lace** team is preparing for the release of Lace v.1.14, which is expected to be ready in the next couple of weeks.

Stay tuned for updates on the upcoming release and improvements on the [official Lace blog](https://www.lace.io/blog).

### SCALING

The **Hydra** team made significant progress on [incremental decommits by closing the last gaps](https://github.com/cardano-scaling/hydra/issues/1483) and refining the specification. They [gathered scenarios](https://github.com/cardano-scaling/hydra/issues/1484) and prepared for incremental commits, updated dependencies to ensure compatibility with Cardano node v.9.0.0, and continued to enhance the documentation. The team also worked on simplifying the process for [setting up the getting-started demo using `process-compose`](https://github.com/cardano-scaling/hydra/pull/1503)\`. In addition, they welcomed a new contributor, conducted an early design meeting on payment channels and Blockfrost, and further [developed the idea for the SDK wallet](https://github.com/cardano-scaling/hydra/issues/1509).

The **Mithril** team [released the new distribution 2428.0](https://github.com/input-output-hk/mithril/releases/tag/2428.0), which includes support for Cardano node v.9.0.0, as well as bug fixes and optimizations. They also continued implementing the certification of Cardano transactions in Mithril networks by [calibrating the signature parameters](https://github.com/input-output-hk/mithril/issues/1814) for mainnet, fixing a bug preventing the signature of the last block advertised as certified, optimizing a part of the artifact production that was blocking the certification, and starting removing the code reading transactions from the immutable files.

Finally, the team started working on the certification of the Cardano stake distribution and continued redacting a [CIP for the diffusion of Mithril signatures](https://github.com/input-output-hk/mithril/issues/1775) through the Cardano network.

### VOLTAIRE & SANCHONET

With the release of Cardano node v.9.0.0, all node users are encouraged to upgrade to this version of the node in preparation for the Chang upgrade. Check the Intersect [Chang readiness page](https://docs.intersectmbo.org/cardano/cardano-upgrades/hard-forks/chang-timeline-and-dependencies/chang-upgrade-1-readiness) for more details. 

Last week, the Intersect team [updated the community](https://www.intersectmbo.org/news/intersect-development-update-22-july-12th) ​​on the the latest Cardano node release and updates to the Chang timeline. Plus, they shared the confirmation of Intersect’s constitutional council, updates from the committees, community tooling, events, and more. 

For more details this week, make sure to check  the [latest Intersect news.](https://www.intersectmbo.org/news)

### CATALYST

[Fund12 results](https://projectcatalyst.io/funds/12/voting-results) are announced, with 258 new projects preparing for onboarding. [Town Hall 171](https://www.youtube.com/live/7ltU3aEQloM?si=ACiGLOn3HSt9x8iD) was held on Wednesday, July 17, at 5 pm UTC to celebrate the fund winners and participants. Catalyst reached a milestone of over 900 completed projects and allocated more than 100 million ada in funds.

### EDUCATION

This week, members of the **education** team are on the ground at the [UTN](https://utn.edu.ar/es/) in Buenos Aires, teaching the _Cardano Developer_ course to aspiring smart contract developers. They are also working on content updates for Mastering Cardano and supporting the in-person constitutional committee training sessions.  
  
![](https://ucarecdn.com/bbb37492-9c67-4fb6-ab7f-7509a00e7305/-/preview/-/format/auto/-/quality/smart/)

コアテクノロジー

台帳チームはChangアップグレードを控え、広範なテストに焦点を移しています。現在の取り組みは主にユニットテストの作成と適合性テストの実施に重点を置いています。この徹底的なテストは、すべてのシステムが堅牢であり、Conway期への移行準備が完全に整っていることを確認するために不可欠です。

ウォレットとサービス

Laceチームはレースv.1.14のリリースに向けて準備を進めています。このリリースは、数週間内を予定しています。

今後のリリースや改良点については、Lace公式ブログをご覧ください。

スケーリング

Hydraチームは、残りのギャップを埋めて仕様を改善したことにより、インクリメンタルデコミットに向けて大きく進展しました。インクリメンタルコミットのシナリオを集めて準備を行い、依存関係を更新してCardano-node v.9.0.0との互換性を確保し、ドキュメントの強化を続けました。入門デモの設定プロセスをprocess-composeを使用して簡素化する作業にも取り組みました。新しいコントリビューターを歓迎し、支払いチャネルとBlockfrostに関する早期の設計会議を行い、SDKウォレットのアイデアをさらに発展させました。

Mithrilチームは新しいディストリビューション2428.0をリリースしました。これには、Cardanoノードバージョン9.0.0のサポート、バグ修正、最適化が含まれています。MithrilネットワークでCardanoトランザクション認証の実装を続け、メインネットのシグネチャーパラメーターを調整し、認証済みとされた最後のブロックの署名を妨げるバグを修正し、認証をブロックしていたアーティファクト生成の一部を最適化し、不変ファイルからのコード読み取りトランザクションの削除を開始しました。

Cardanoステーク分布認証の取り組みを始め、Cardanoネットワークを介したMithril署名拡散のCIPの編集を継続しました。

VOLTAIRE & SANCHONET

ノードv.9.0.0のリリースに伴い、すべてのノードユーザーは、Changアップグレードの準備としてこのバージョンのノードにアップグレードすることが推奨されます。詳細は、Intersect Changの準備ページを確認してください。

Intersectチームは、Cardanoノードリリースの最新情報とChangタイムラインの更新情報をコミュニティに提供しました。Intersectの憲法評議会の確認、委員会からの最新情報、コミュニティツール、イベントなどの情報も公開しました。

今週の詳細情報は、Intersectの最新ニュースをチェックしてください。

CATALYST

Fund12の結果が発表され、258の新しいプロジェクトがオンボーディングの準備をしています。日本時間7月18日午前2時からタウンホール171が開催され、ファンドの受賞者と参加者を祝いました。Catalystは、900を超えるプロジェクトが完了し、1億ADA以上の資金を割り当てるというマイルストンを達成しました。

教育

教育チームのメンバーは、ブエノスアイレスのUTNで、スマートコントラクト開発者を目指す受講者にCardano開発者コースの講義を行っています。Mastering Cardanoのコンテンツの更新や、憲法委員会の対面トレーニングセッションのサポートにも取り組んでいます。
