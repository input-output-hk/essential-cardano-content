---
title: Weekly development report as of 2024-06-7
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/dc182f88-0783-4cb1-a8a2-5f6328c36f50/
image_text: Weekly development report as of 2024-06-7
---

### CORE TECHNOLOGY

This week, the **ledger** team [enhanced the correctness of the CDDL specification](https://github.com/IntersectMBO/cardano-ledger/pull/4357) and improved safety by restricting certain protocol parameter types. The team also introduced tools for controlling test case distribution, worked on the `UTXO` predicate failure tests, enabled the retrying of flaky tests in nightly CI, and made further fixes and improvements.

For more updates related to Conway development, see the Voltaire and SanchoNet section below. 

### WALLETS AND SERVICES

The **Lace** team released v.1.12, which comes packed with improvements and a major new feature – a fiat on-ramp with Banxa, a third party service. Users can now choose fiat currencies to fund their wallet via this service.

The release also enables multi-delegation for supported hardware wallets and an improved staking pool search. Learn more in this [blog post](https://www.lace.io/blog/lace-1-12-0-release).

### SMART CONTRACTS

This week, the **Plutus** team released version 1.29.0.0 of the Plutus libraries. This is the first Conway-ready Plutus release , and it includes implementation of CIP-69 and CIP-117, among other features and improvements. 

### SCALING

This week, the **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks. They improved the throughput of the prover route of the aggregator by using resource pooling and made progress on low-latency [certification by transitioning to a chain point-based beacon](https://github.com/input-output-hk/mithril/issues/1697), which allows for faster transaction signing. They also kept [investigating prover performance bottlenecks](https://github.com/input-output-hk/mithril/issues/1730), worked on fixing a bug that caused unsigned transactions to appear as signed, and continued implementing the import of transactions with the ChainSync mini-protocol and Pallas.

Additionally, the team started preparing the threat modeling explainer for the documentation website and kept [investigating some Cardano node error messages](https://github.com/input-output-hk/mithril/issues/1632) that could be caused by how the Pallas client handles connections to mini-protocols.

### VOLTAIRE & SANCHONET

This week, the **ledger** team continued testing the Conway era and improving conformance tests (commits [1](https://github.com/IntersectMBO/cardano-ledger/pull/4338),[2](https://github.com/IntersectMBO/cardano-ledger/pull/4354)). Through extensive testing, they identified and fixed several [bugs related to DRep expiry](https://github.com/IntersectMBO/cardano-ledger/pull/4358) and the correct threshold for committee voting. An important feature implemented was ignoring the minimum committee size during the bootstrap phase to avoid deadlock if enough committee members were to resign. 

[Last week’s Intersect update](https://www.intersectmbo.org/news/intersect-development-update-16-may-31st) covered the interim constitutional committee elections, the opening of applications for global constitutional workshops, and more about Intersect joining Hyperledger and the Linux Foundation. For this week’s update, follow [Intersect news.](https://www.intersectmbo.org/news)

### CATALYST

This week in **Catalyst**, town hall 165 took place and several important updates were shared. The community review period for LV0s and LV1s has ended, and the next phase for LV2 moderation will begin on June 13. Additionally, the deadline for submissions to the partners and real-world integration category was June 6.

During the meeting, the alternative voting mechanism, developed by the IOG research Catalyst team and Photrek, achieved milestone 1. The mechanism was successfully completed and presented to the community in a breakout room during town hall 165.

### EDUCATION

This week, the **education** team continued working on Mastering Cardano and supporting  the DRep Pioneer Program. They also continued preparing for the next Cardano Developer course.  
  
![](https://ucarecdn.com/6d621cc7-a7f8-43fd-b674-f247155672d9/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームは、[CDDL仕様の正確性を高め](https://github.com/IntersectMBO/cardano-ledger/pull/4357)、特定のプロトコルパラメータータイプを制限することで安全性を向上させました。テストケースの分布を制御するツールを導入し、UTXO述語障害テストに取り組み、Nightly CIでのフレーキーテストの再試行を可能にし、さらなる修正と改良を行いました。

Conway開発に関するその他の更新情報は、下のVoltaire ＆ SanchoNetのセクションを参照してください。 

### ウォレットとサービス

**Lace**チームはv.1.12をリリースしました。これには、さまざまな改良に加えて、サードパーティのサービスであるBanxaのフィアットオンランプという主要な新機能が搭載されています。ユーザーはこのサービス経由でウォレットに入れる法定通貨を選ぶことができるようになりました。

本リリースでは、サポートされているハードウェアウォレットでマルチ委任が可能になり、ステークプール検索も改良されました。詳細は、こちらの[ブログ記事](https://www.lace.io/blog/lace-1-12-0-release)をご覧ください。

### スマートコントラクト

**Plutus**チームはPlutusライブラリーのバージョン1.29.0.0をリリースしました。これは最初のConway対応Plutusリリースであり、CIP-69、CIP-117の実装、その他の機能や改良が含まれています。 

### スケーリング

**Mithril**チームは、MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。リソースプールを使用してアグリゲーターのプルーバールートのスループットを向上させ、[チェーンポイントベースビーコンに移行](https://github.com/input-output-hk/mithril/issues/1697)することで低レイテンシー認証を進めてトランザクション署名を高速化しました。[プルーバーパフォーマンスのボトルネックの調査](https://github.com/input-output-hk/mithril/issues/1730)を続け、未署名トランザクションを署名済みと表示するバグを修正し、ChainSyncミニプロトコルとPallasを使用したトランザクションのインポートの実装を継続しました。

ドキュメントサイト用の脅威モデリングの説明書の準備を開始し、Pallasクライアントによるミニプロトコルへの接続の処理方法によって引き起こされ得る[Cardanoノードのエラーメッセージの調査](https://github.com/input-output-hk/mithril/issues/1632)を続けました。

### VOLTAIRE & SANCHONET

**台帳**チームはConway期のテストを継続し、適合性テスト（[1](https://github.com/IntersectMBO/cardano-ledger/pull/4338)[2](https://github.com/IntersectMBO/cardano-ledger/pull/4354)）に改良を加えました。広範なテストを通じて、DRepの任期に関連するバグと委員会投票の正しいしきい値を特定し、修正しました。重要な機能の実装により、十分な委員会メンバーが辞任した場合のデッドロックを回避するために、ブートストラップ段階で最小委員会サイズが無視されました。 

[先週のIntersectの最新情報](https://www.intersectmbo.org/news/intersect-development-update-16-may-31st)では、暫定憲法委員会選挙、世界的な憲法ワークショップの申請開始、HyperledgerとLinux FoundationへのIntersectの参加について説明しました。今週の更新情報は、[Intersectニュース](https://www.intersectmbo.org/news)をフォローしてください。

### CATALYST

Catalystに関しては、タウンホール165が開催され、いくつかの重要な更新情報がもたらされました。LV0とLV1のコミュニティレビュー期間は終了し、6月13日から次フェーズであるLV2の調整フェーズが開始されます。パートナーと実世界統合カテゴリーへの提出期限は6月6日でした。

ミーティングでは、IOGの研究CatalystチームとPhotrekが開発した代替投票メカニズムがマイルストン1を達成しました。このメカニズムは無事完成し、タウンホール165のブレイクアウトルームでコミュニティに紹介されました。

### 教育

**教育**チームはMastering Cardanoに関する作業とDRepパイオニアプログラムへの取り組みを続けました。次回Cardano開発者コースの準備も続行しました。
