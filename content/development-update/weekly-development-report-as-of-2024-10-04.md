---
title: Weekly development report as of 2024-10-04
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/33ac76da-c10c-49ba-8468-dc52e22761ec/
image_text: Weekly development report as of 2024-10-04
---

### CORE TECHNOLOGY

Over the past two weeks, the consensus team has been working to establish a baseline for the c[onsensus quantitative timeliness agreements(QTA](https://github.com/IntersectMBO/ouroboros-consensus/issues/1256)). This helps inform discussions on sync performance goals with the networking team, particularly improvements related to Genesis. Additionally, the team rebased UTXO-HD atop `main`, with all [tests successfully passing](https://tests.cardano.intersectmbo.org/test_results/node/utxo_hd_9_1_1.html). Finally, they worked on enhancing the robustness and security of the consensus layer.

### SMART CONTRACTS

The **Plutus** team revamped the [Using Plutus TX](https://plutus.cardano.intersectmbo.org/docs/category/using-plutus-tx/) section of the user guide and submitted two CIPs on built-in [arrays](https://github.com/cardano-foundation/CIPs/pull/915) and [maps](https://github.com/cardano-foundation/CIPs/pull/921).

### SCALING

The **Hydra** team made progress on [incremental commits](https://github.com/cardano-scaling/hydra/issues/199) and [Blockfrost integration](https://github.com/cardano-scaling/hydra/issues/1305). Experiments to improve CI build times showed promise, and a successful trial [using Raft for the networking layer](https://github.com/cardano-scaling/hydra/issues/1591) was conducted. Key achievements include updating networking documentation, progressing with Blockfrost in the Hydra node, and transitioning to \`[cardano-node\` 9.2.0](https://github.com/cardano-scaling/hydra/pull/1651). Looking ahead, the team will continue enhancing [incremental commits](https://github.com/cardano-scaling/hydra/issues/1522) and Blockfrost integration, improving memory efficiency, and transitioning to PlutusV3, alongside work on CBOR datum on transaction outputs.

The **Mithril** team continued working on decentralizing the signature orchestration of the Mithril network. They completed the development of a mechanism to support specific configurations for signing Cardano transactions and kept implementing the autonomous computation of the messages [to be signed by the signer](https://github.com/input-output-hk/mithril/issues/1925). They also activated the [certification of the Cardano transactions](https://mithril.network/doc/dev-blog/2024/07/30/cardano-transaction-certification) on the `release-mainnet` network.

Finally, they started creating a new Mithril era and prepared to [upgrade to Cardano node version](https://github.com/input-output-hk/mithril/issues/1968) `9.2.1`.

### VOLTAIRE

This week, the annual members’ meetings (AMMs) of the Intersect member-based organization began in Tokyo. Six AMMs and a special online town hall will be held in October.

The events will begin with a reception, followed by a welcome and introduction to set the tone for the day. Next, attendees will hear about Intersect’s vision for 2025, outlining key goals and initiatives for the year, and beyond. A retrospective will follow, starting with a review of significant milestones and lessons learned. 

The focus will then shift to the committee and board elections, a key highlight of the day. The event will close with a farewell celebration. If interested, [register here](https://lu.ma/9ydajznf).  
  
If you’d like to attend any events, you can [read more and RSVP](https://docs.intersectmbo.org/annual-member-meetings/2024-annual-member-meetings) to an event near you. Also, check out the [AMM Q&A session](https://www.youtube.com/watch?v=YYa9snx3lZg) on [Intersect’s YouTube channel](https://www.youtube.com/@Intersectmbo) - don’t forget to like and subscribe!

### CATALYST

This week in **Catalyst**, town hall 177 premiered. Proposal submissions for Fund13 remain open until October 10, 2024. The voting threshold has been reduced to 25 ada to boost governance participation. New voter registration starts the second week of October, and the [launch guide is available](http://projectcatalyst.io/f13launchguide). The total completed Catalyst projects are approaching 1,000, with ongoing technical development of Hermes and Catalyst Voices.

### EDUCATION

The **education** team is preparing for the next Cardano Days event, which will take place in Santander, Spain on October 19. You can register [here](https://lu.ma/sgmyg5li). They are also attending the Cardano Constitution event in Oslo, Norway this week.

![](https://ucarecdn.com/8da88786-7c98-4bef-b7cc-2544df863678/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは、過去2週間にわたり、[コンセンサス定量適時性合意（QTA）](https://github.com/IntersectMBO/ouroboros-consensus/issues/1256)のベースライン確立に取り組んできました。これは、ネットワーキングチームとの同期パフォーマンス目標についての議論、特にGenesisに関連する改善に役立ちます。mainにUTXO-HDをリベースし、すべての[テストは正常にパス](https://tests.cardano.intersectmbo.org/test_results/node/utxo_hd_9_1_1.html)しました。コンセンサス層の堅牢性と安全性の強化に取り組みました。

### スマートコントラクト

**Plutus**チームはユーザーガイドの[Using Plutus TX](https://plutus.cardano.intersectmbo.org/docs/category/using-plutus-tx/)セクションを改訂し、組み込みの[アレイ](https://github.com/cardano-foundation/CIPs/pull/915)と[マップ](https://github.com/cardano-foundation/CIPs/pull/921)に関する2つのCIPを提出しました。

### スケーリング

**Hydra**チームは、[インクリメンタルコミット](https://github.com/cardano-scaling/hydra/issues/199)と[Blockfrost統合](https://github.com/cardano-scaling/hydra/issues/1305)を進めました。CIのビルド時間を改善するための実験が有望な結果を示し、[ネットワーク層にRaftを使用](https://github.com/cardano-scaling/hydra/issues/1591)した実験が成功しました。主な成果としては、ネットワークドキュメントの更新、HydraノードでのBlockfrostの進展、[Cardano-node 9.2.0](https://github.com/cardano-scaling/hydra/pull/1651)への移行などが挙げられます。今後も、[インクリメンタルコミット](https://github.com/cardano-scaling/hydra/issues/1522)とBlockfrost統合の強化、メモリー効率の向上、PlutusV3への移行、トランザクションアウトプットのCBORデータに関する作業を継続する予定です。

**Mithril**チームは、Mithrilネットワークの署名オーケストレーションの分散化への取り組みを続けました。Cardanoトランザクションに署名するための特定の設定をサポートするメカニズムの開発を完了し、[署名者が署名](https://github.com/input-output-hk/mithril/issues/1925)するメッセージの自律的な計算の実装を続けました。release-mainnetネットワーク上で[Cardanoトランザクションの認証](https://mithril.network/doc/dev-blog/2024/07/30/cardano-transaction-certification)を有効化しました。

新しいMithril期の作成を開始し、[Cardanoノードバージョン9.2.1へのアップグレード](https://github.com/input-output-hk/mithril/issues/1968)準備を行いました。

### VOLTAIRE

東京で会員制組織Intersectの年次総会（AMM）が始まりました。10月には6つのAMMと、オンラインスペシャルタウンホールが開催されます。

イベントは受け付けから始まり、歓迎の辞と、その日の基調を定めるイントロダクションが続きます。次に、2025年に向けたIntersectのビジョンについて、その一年とそれ以降の主な目標とイニシアチブの概要が述べられます。それから重要なマイルストンと教訓のレビューから始まるレトロスペクティブが持たれます。 

その後、焦点は委員会と理事会の選挙に移りますが、これがその日の重要なハイライトとなります。イベントは送別の言葉で締めくくられます。興味がある場合は、[ここで登録](https://lu.ma/9ydajznf)してください。  
  
イベントへの参加を希望する場合は、[詳細を読み、近くのイベントに参加申し込み](https://docs.intersectmbo.org/annual-member-meetings/2024-annual-member-meetings)をしてください。[IntersectのYouTubeチャンネル](https://www.youtube.com/%40Intersectmbo)で[AMM Q&Aセッション](https://www.youtube.com/watch?v=YYa9snx3lZg)もチェックしてみてください。

### CATALYST

今週の**Catalyst**では、タウンホール177が開催されました。Fund13の提案は2024年10月10日まで受け付けています。ガバナンスへの参加を促進するため、投票の閾値はADA 25に引き下げられました。新しい有権者登録は10月の第2週に始まります。また、ローンチガイドは公開されています。完了したCatalystプロジェクトの総数は1,000に近づいており、HermesとCatalyst Voicesの技術開発も進行中です。

### 教育

**教育**チームは、10月19日にスペインのサンタンデールで開催される次回Cardano Daysに向けた準備を進めています。登録は[こちら](https://lu.ma/sgmyg5li)から行えます。今週ノルウェーのオスロで開催されるCardano Constitutionイベントにも参加しています。
