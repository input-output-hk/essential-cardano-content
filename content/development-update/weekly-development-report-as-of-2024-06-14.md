---
title: Weekly development report as of 2024-06-14
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/566c7262-60be-45ed-8c95-c9e0e7c0ae5a/
image_text: Weekly development report as of 2024-06-14
---

### CORE TECHNOLOGY

This week, the **consensus** team continued working on different workstreams – Ouroboros Leios, Ouroboros Genesis, UTXO-HD, and LSM. They were also busy addressing the tech debt. Stay tuned for more updates next week.

### WALLETS AND SERVICES

This week, the **Lace** integration with the on-ramp service by Banxa was enhanced to support Apple Pay and Google Pay. This new feature allows users to fund their wallets more conveniently using these popular payment methods.

### SCALING

This week, the **Hydra** team updated the [node to be compatible with](https://github.com/input-output-hk/hydra/pull/1439) `cardano-node 8.11-pre`. The team continued work on incremental decommits, investigating adversarial attacks on the smart contract, and preparing it for merging. They also held discussions regarding options for incremental commit work, including designs for a `hydra-ledger`.

The **Mithril** team released the new distribution \`[2423.0](https://github.com/input-output-hk/mithril/releases/tag/2423.0)`, which includes the removal of the` snapshot\` command from the client CLI, as well as bug fixes and optimizations. They also continued implementing the certification of Cardano transactions in Mithril networks and improved the throughput of the prover route of the aggregator by [fixing some bottlenecks](https://github.com/input-output-hk/mithril/issues/1730) in the Merkle proof computation. Additionally, the team made progress on low-latency certification by working on the retrieval of the transactions with the chain sync mini-protocol and Pallas, as well as the handling of chain rollbacks.

Finally, they kept working on the [threat modeling explainer](https://github.com/input-output-hk/mithril/issues/1350) for the documentation website and provided [support for multiple TLS implementations](https://github.com/input-output-hk/mithril/issues/1737) in the client library thanks to a community contribution.

### VOLTAIRE & SANCHONET

This week, there are some ongoing improvements to the SanchoNet resources page, including updated links to diverse reference material. 

[Last week’s Intersect update](https://www.intersectmbo.org/news/intersect-development-update-17-june-7th) covered spotlights on Cardano’s roadmap, constitution call-to-actions, working group updates from Plutus and consensus groups, DRep Pioneer workshops, Intersect events, and community hubs.

Make sure to check [Intersect news](https://www.intersectmbo.org/news) for the latest update this week.

### CATALYST

Project Catalyst level 2 community moderation stage is open until June 20, allowing community members to participate in the review process. Town hall 166 was held, providing updates and discussions on various topics. Additionally, the ‘Partners and Real World’ category is progressing into the next phases.  
  
![](https://ucarecdn.com/4b4e927e-8dfd-4d1e-9c0b-50293f9a0cca/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは、Ouroboros Leios、Ouroboros Genesis、UTXO-HD、LSMなど、さまざまなワークストリームに加えて、技術負債への対処にも取り組んでいます。来週の更新情報にご期待ください。

### ウォレットとサービス

**Lace**とBanxaのオンランプサービスの統合が強化され、Apple PayとGoogle Payのサポートが実現しました。この新機能により、ユーザーはこれらの一般的な支払い方法を使用して、より便利にウォレットに資金を供給することができます。

### スケーリング

**Hydra**チームは、[Cardano-node 8.11-preに対応させるようノード](https://github.com/input-output-hk/hydra/pull/1439)を更新しました。インクリメンタルデコミットへの取り組みを続け、スマートコントラクトに対する敵対的攻撃を調査し、マージの準備を続けました。hydra-ledgerの設計を含むインクリメンタルコミット作業のオプションについて議論しました。

**Mithril**チームは新ディストリビューション[2423.0](https://github.com/input-output-hk/mithril/releases/tag/2423.0)をリリースしました。ここではクライアントCLIからsnaphotコマンドを削除し、バグの修正、最適化を行っています。MithrilネットワークへのCardanoトランザクション認証の実装を継続し、マークル証明計算の[ボトルネックを修正](https://github.com/input-output-hk/mithril/issues/1730)することでアグリゲーターの証明ルートのスループットを改善しました。チェーン同期ミニプロトコルやPallasとのトランザクションの取得や、チェーンロールバックの処理にも取り組み、低レイテンシー認証の開発を進めました。

引き続きドキュメントサイト用の[脅威モデリングの説明](https://github.com/input-output-hk/mithril/issues/1350)に取り組み、コミュニティの協力のもと、クライアントライブラリーで[複数のTLS実装のサポート](https://github.com/input-output-hk/mithril/issues/1737)を提供しました。

### VOLTAIRE & SANCHONET

SanchoNetリソースページは改良作業が続けられており、さまざまな参考資料へのリンクが更新されました。 

[先週のIntersect更新情報](https://www.intersectmbo.org/news/intersect-development-update-17-june-7th)では、Cardanoのロードマップ、憲法に関する行動喚起、Plutusとコンセンサスグループからのワーキンググループ最新情報、DRepパイオニアワークショップ、Intersectイベント、コミュニティハブなどが取り上げられました。

今週の最新情報は、[Intersectニュース](https://www.intersectmbo.org/news)をチェックしてください。

### CATALYST

Project Catalystレベル2コミュニティ調整段階は6月20日まで開かれており、コミュニティメンバーはレビュープロセスに参加できます。タウンホール166が開催され、さまざまなトピックに関する最新情報やディスカッションが行われました。Partners and Real Worldカテゴリーは次の段階に進んでいます。
