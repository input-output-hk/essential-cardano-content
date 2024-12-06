---
title: Weekly development report as of 2024-12-06
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/9167967f-4ce8-4a22-859a-f84da00ab11d/
image_text: Weekly development report as of 2024-12-06
---

### CORE TECHNOLOGY

This week, the **SRE** team worked on Cardano environment improvements and general maintenance. They released Cardano node [v.10.1.3](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.3) and DB Sync v.13.6.0.2 and v.13.6.0.4 to all environments, and configured mainnet bootstraps, enabling a shared dashboard.

The **ledger** team discovered and fixed a bug in the ledger that was backported in a patch release of `cardano-node-10.1.3`. The bug was in protocol version 10 and affected the DRep delegation. While it did not impact the mainnet, the patched version was necessary to ensure correct behavior in protocol version 10.

In addition to this bug fix, the team continued working on testing and addressing the technical debt. They also added a new ledger state query that allows nodes to provide the current DRep voting stake distribution.

### SCALING

This week, the **Mithril** team continued implementing the incremental certification of the Cardano database. They completed the computation of the message to sign and started working on creating and synchronizing the artifacts. The team also continued exploring solutions for signer registration in networks with multiple aggregators and progressed on developing a cache for [certificate verification in the WASM client](https://github.com/input-output-hk/mithril/issues/1484).

Finally, they [implemented a retry mechanism](https://github.com/input-output-hk/mithril/issues/2123) in the end-to-end tests within the CI to address flakiness and investigated methods to track the origin of client requests.

### VOLTAIRE

This week, the spotlight is on the [Constitutional Convention](https://cardanoconvention.com/) in Buenos Aires, Argentina, and Nairobi, Kenya. Many people from Input | Output are attending to support the elected delegates in deliberations and votes to ratify a new Cardano constitution.

The Cardano constitution is the cornerstone that will guide and anchor all the other processes and developments Cardano will need to provide a sustainable technological platform for Web3 products and services.

### CATALYST

The voting phase for Project Catalyst Fund13 is currently underway and will continue until December 12. So far, over 1.5bn  ada in voting power has been recorded. During the week of December 2-6, the Catalyst Pitch Fest events  showcased proposal videos from various submission categories through live streams on X ([@catalyst\_onX](https://x.com/catalyst_onx?s=21&t=7SbI7yDsj2JIR2fO_YZbCQ)) to encourage community support.

Additionally, the technical development of Voices is progressing steadily. Instead of the usual town hall meeting, this week will focus on the Pitch Fest and the global Constitutional Convention taking place in Argentina and Kenya, with an emphasis on encouraging voter engagement. Remember to [cast your votes](https://docs.projectcatalyst.io/current-fund/voting/how-to-vote) by December 12.

### EDUCATION

This week, members of the **education** team are on the ground in Buenos Aires for the [Constitutional Convention](https://cardanoconvention.com/), delivering a mix of theoretical and practical sessions, including Cardano Days tracks available in Spanish and English, and live node demonstrations using a new SPO mobile learning laboratory.

Additionally, the team supported the [Cardano Tech Week](https://lu.ma/jcsgq39k) community event last week, which featured a mix of theoretical and practical sessions, including a hackathon by CardanoSolar, a talk on extended UTXO, game theory by Dr. Lars Brünjes, a session focused on partner chains, and Cardano Days tracks in Spanish and English.

![](https://ucarecdn.com/37952a83-c022-4c22-8002-f1ea0df9499a/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**SRE**チームはCardanoの環境改善と一般的なメンテナンスに取り組みました。Cardanoノード[v.10.1.3](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.3)とDB Sync v.13.6.0.2およびv.13.6.0.4を全環境にリリースし、メインネットブートストラップを設定してダッシュボードの共有を有効にしました。

**台帳**チームはcardano-node-10.1.3のパッチリリースでバックポートされていた台帳のバグを発見し、修正しました。このバグはプロトコルバージョン10にあり、DRep委任に影響を与えていました。メインネットに影響はありませんでしたが、プロトコルバージョン10で正しい動作を保証するためにはパッチを適用したバージョンが必要でした。

このバグ修正に加えて、引き続きテストと技術負債への対処に取り組みました。ノードが現在のDRep投票ステーク分布を提供できるようにする新しい台帳ステータスクエリを追加しました。

スケーリング

**Mithril**チームは、Cardanoデータベースの増分認証の実装作業を続けました。署名するメッセージの計算を完了し、アーティファクトの作成と同期の作業を開始しました。複数のアグリゲーターを持つネットワークでの署名者登録のためのソリューションの調査を続け、[WASMクライアントの証明書検証用](https://github.com/input-output-hk/mithril/issues/1484)キャッシュの開発を進めました。

脆弱性への対処としてCI内のエンドツーエンドテストに[再試行メカニズムを実装](https://github.com/input-output-hk/mithril/issues/2123)し、クライアント要求の発信元を追跡する方法を調査しました。

### VOLTAIRE

今週は、アルゼンチンのブエノスアイレスとケニアのナイロビで開催される[憲法制定会議](https://cardanoconvention.com/)にスポットが当てられています。Input | Outputの多くのメンバーが、新しいCardano憲法を批准するための審議や投票に関し、選出された代表をサポートするために参加しています。

Cardano憲法は、Web3の製品やサービスにサステナブルな技術プラットフォームを提供するためにCardanoが必要とする、他のすべてのプロセスや開発を導き支えるための基礎となります。

### CATALYST

Project Catalyst Fund13の投票は現在受付中であり、12月12日に締め切られます。現時点で、15億ADA以上の投票権が記録されています。12月2日から6日の週には、Catalyst Pitch Festイベントが開催され、コミュニティのサポートを促すためにX（[@catalys\_onX](https://x.com/catalyst_onx?s=21&t=7SbI7yDsj2JIR2fO_YZbCQ)）のライブストリームを通じてさまざまなカテゴリーの提案動画が公開されました。

Voicesの技術開発も順調に進んでいます。今週は、通常のタウンホールミーティングの代わりに、アルゼンチンとケニアで開催されているPitch Festと世界憲法制定会議に焦点を当て、有権者に関与を促しています。12月12日までに忘れずに[投票](https://docs.projectcatalyst.io/current-fund/voting/how-to-vote)してください。

### 教育

**教育**チームのメンバーは[憲法制定会議](https://cardanoconvention.com/)のためにブエノスアイレスに入っており、スペイン語と英語によるCardano Daysトラックや、新しいSPOモバイル学習ラボを使用したライブノードデモなど、理論的なセッションと実践的なセッションを組み合わせて提供しています。

先週は[Cardano Tech Week](https://lu.ma/jcsgq39k)コミュニティイベントのサポートも行いました。このイベントでは、CardanoSolarによるハッカソン、拡張UTXOに関するトーク、Lars Brünjes博士によるゲーム理論、パートナーチェーンに焦点を当てたセッション、スペイン語と英語によるCardano Daysトラックなど、理論と実践が混在する多彩なセッションが提供されました。
