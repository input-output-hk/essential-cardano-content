---
title: Weekly development report as of 2025-06-06
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/a0aaa668-d9e7-4498-a40e-5ee2faf9fef3/
image_text: Weekly development report as of 2025-06-06
---

### WALLETS AND SERVICES

This week, the **Lace** team released [Lace v.1.23](https://www.lace.io/blog/lace-1-23-1-release), addressing one of the community’s top requests: more accurate pricing for Cardano native tokens. The wallet now obtains token prices from a more reliable data provider, offering users real-time, precise valuations of their portfolios.

What's new in Lace v.1.23?

*   Upgraded pricing feed brings sharper, more current valuations for all Cardano native tokens
    
*   Enhanced dashboard accuracy means portfolio totals now mirror live market rates
    
*   Community-driven update delivered in direct response to user feedback.
    

This release is part of a larger roadmap that will bring even greater accuracy, usability, and multichain capabilities — including mobile v2, Midnight, and BTC DeFi integrations over the coming months. Keep the feedback coming, and watch for more feature drops soon.

### SCALING

This week, the **Mithril** team delivered support for Cardano node v.10.4.1 and UTXO-HD in the aggregator, signer, and client.

They completed the implementation of the [local message submission](https://github.com/input-output-hk/mithril/issues/2515) and local message notification node-to-client mini-protocols in the Pallas library for the DMQ node. They also continued extending the aggregator metrics to record the usage of different client types. Additionally, they worked on [stabilizing the Cardano DB v2 client](https://github.com/input-output-hk/mithril/issues/2493) commands in the CLI and API in the library, ensuring readiness for production use.

Finally, the team began [switching the protocol message encoding](https://github.com/input-output-hk/mithril/issues/2536) to binary and continued refactoring the STM cryptographic library.

The **Leios** team finalized an in-depth analysis of overcollateralization models and made substantial progress in developing their Rust-based simulation framework. Their efforts also centered on evaluating transaction duplication and conflict likelihood in shardless scenarios, coupled with enhancements to simulation tools for improved tracking of transaction lifecycle milestones.

### VOLTAIRE

A budget info governance action is a formal on-chain governance step that allows DReps and the constitutional committee to review and ratify an aggregate budget before any treasury funds can be released. Intersect has a budget info action under review on-chain covering a budget of 275m ada. It reflects the outcome of a community-driven process, where proposals were submitted, refined, and signaled on by DReps. It covers 39 proposals remaining after 194 proposals were reviewed.

No funds will be released as a result of passing the budget info action, as that would require corresponding treasury withdrawal governance actions, which have a higher threshold for approval.

### CATALYST

**Catalyst** town hall 191 was held this week, featuring a special guest from the ‘Partners’ category of Fund13: the United Nations Development Programme (UNDP). During the town hall, the team provided more details about what to expect from the UNDP x Cardano accelerator. [Watch the session](https://x.com/Catalyst_onX/status/1930308819776905231) now if you missed it.  
All hands on deck towards a smooth transition to the Catalyst platform ahead of Fund14.

Additionally, Catalyst recently submitted a [proof of achievement](https://x.com/Catalyst_onX/status/1929861672094560311) for completed milestones as part of its commitment to the community regarding its previously funded project.

In case you missed it, explore the [Catalyst Global interactive map](http://projectcatalyst.io/global-map). 

### EDUCATION

The **education** team gathered feedback on the Cardano Days sessions at the [Cardano Community Azteca 2025 event](https://azteca.cardanomexicocommunity.com/) in Mexico and is analyzing lessons learned from the three May events. Updates to the Cardano developer course are underway, alongside the development of educational content on zero-knowledge proofs.

![](https://ucarecdn.com/fd6adc64-63ea-4f63-b55e-acefa29329ed/-/preview/-/format/auto/-/quality/smart/)

### ウォレットとサービス

**Lace**チームは[Lace v.1.23](https://www.lace.io/blog/lace-1-23-1-release)をリリースしました。これは、コミュニティから強く望まれている、Cardanoネイティブトークンの表示価格の精度の向上に対処しています。Laceはより信頼のおけるデータプロバイダーからトークン価格を取得し、ユーザーにポートフォリオの正確な評価額をリアルタイムで提供します。

Lace v.1.23の新機能

*   価格フィードのアップグレードにより、全Cardanoネイティブトークンの評価額がより精微で最新のものに
    
*   ダッシュボードの精度の強化により、ポートフォリオの合計額がリアルタイムの市場レートを反映
    
*   ユーザーフィードバックに直接答える形で提供された、コミュニティ主導の更新
    

本リリースは、さらなる正確さ、ユーザビリティ、マルチチェーン機能をもたらす、より大きなロードマップの一部です。これには、今後数か月で予定されているmobile V2、Midnight、BTC DeFi統合が含まれます。フィードバックは引き続き受け付けています。さらなる更新情報に注目してください。

### スケーリング

**Mithril**チームは、アグリゲーター、サイナー、クライアントで、Cardanoノードv.10.4.1およびUTXO-HDのサポートを提供しました。

DMQノードに向けた、Pallasライブラリーの[ローカルメッセージ送信](https://github.com/input-output-hk/mithril/issues/2515)およびローカルメッセージ通知のノードツークライアントミニプロトコル実装を完了しました。さまざまなクライアントタイプの使用状況を記録するための、アグリゲーターのメトリクス拡張を継続しました。ライブラリーのCLIとAPIの[Cardano DB v2クライアントコマンドを安定させ](https://github.com/input-output-hk/mithril/issues/2493)、本番環境での利用準備を整えました。

[プロトコルメッセージエンコーディングのバイナリーへの切り替え](https://github.com/input-output-hk/mithril/issues/2536)を開始し、STM暗号ライブラリーのリファクタリングを続けました。

Leiosチームは過剰担保モデルの詳細な分析を完了し、Rustベースのシミュレーションフレームワークの開発で実質的な進捗を遂げました。非シャーディング型シナリオにおけるトランザクション重複や競合の可能性の評価にも注力し、トランザクションのライフサイクルにおけるマイルストン追跡の精度を上げるよう、シミュレーションツールも強化しました。

### VOLTAIRE

予算情報ガバナンスアクションは、トレジャリーの資金がリリースされる前に、DRepと憲法委員会が集計された予算を審査し、承認することを可能にする、正式なオンチェーンガバナンスステップです。2億7,500万ADAの予算を対象としたIntersectの予算情報アクションは、現在オンチェーンで審査中です。これは、コミュニティ主導のプロセス、すなわち、提案が提出され、洗練され、DRepsが意見を表明した結果を反映しています。これは、審査を受けた194提案から残った40の提案を対象としています。

予算情報アクションが審査を通過しても資金はリリースされません。資金のリリースには、これに対応するトレジャリー引き出しガバナンスアクションが必要であり、その承認しきい値はより高く設定されています。

### CATALYST

**Catalyst**タウンホール191が開催され、特別ゲストとしてFund13の「パートナー」カテゴリーからUNDP（国連開発計画）が参加しました。タウンホールの間に、UNDPとCardanoアクセラレーターからどのような成果が期待できるかについて、より詳細な情報が提供されました。セッションを見逃した場合は、[こちら](https://x.com/Catalyst_onX/status/1930308819776905231)から視聴できます。  
Fund14に先立ち、Catalystプラットフォームへのスムーズな移行に向けて、全員が協力して取り組んでいます。  
  
Catalystは最近、コミュニティへのコミットメントの一環として、以前資金提供を受けたプロジェクトに関し、達成したマイルストンの[達成証明](https://x.com/Catalyst_onX/status/1929861672094560311)を提出しました。詳細は[こちら](https://x.com/Catalyst_onX/status/1929861672094560311)をご覧ください。

[Catalystグローバルインタラクティブマップ](http://projectcatalyst.io/global-map)をまだ目にしていない方は、ぜひご覧ください。

### 教育

**教育**チームは、メキシコの[CardanoコミュニティAzteca 2025](https://azteca.cardanomexicocommunity.com/)イベントで行われたCardano Daysに関するフィードバックを集め、５月に開催された3つのイベントから得られた教訓を分析しています。Cardano開発者コースの更新が進行中であり、並行してゼロ知識証明に関する教育コンテンツの開発も進められています。
