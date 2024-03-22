---
title: Weekly development report as of 2024-03-22
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/1692ebb9-050f-4914-993c-8394b634dc22/
image_text: Weekly development report as of 2024-03-22
---

### CORE TECHNOLOGY

Over the past few weeks, the **site reliability engineering (SRE)** team has continued working on Cardano environment improvements and general maintenance. They have successfully deployed `cardano-node` v.8.9.0 to all environments, and have created a new `profile-cardano-db-sync-snapshots nixosModule`, which is now available for snapshotting `db-sync` state.

The **consensus** team [merged](https://github.com/input-output-hk/fs-sim/pull/46) an alternative `fs-api` interface for input/output using user-supplied buffers. This feature defines lower-level primitives for the file system API, which opens up more use cases and more efficient input/output operations (for instance when implementing `lsm-tree`, which is part of the efforts to move the ledger state to disk). Work on this feature is ongoing. They have also implemented a new [diffusion pipelining criterion](https://github.com/IntersectMBO/ouroboros-consensus/pull/955) and released consensus packages with backports for node v.8.9.1. Currently, a part of the team is working on fixing tests for `ouroboros-consensus` in the `UTXO-HD` branch.

### SMART CONTRACTS

This week, the **Plutus** team merged a new optimization pass for Untyped Plutus Core `UPLC` that reduces the number of unnecessary `forces` and `delays`. They also improved the documentation of `PlutusTx.AssocMap`.

### SCALING

This week, the **Hydra** team worked on aligning the specification with the current incremental de-commit implementation and added de-commit to model-based tests. Furthermore, the team discussed with researchers the incremental commit protocol extension. The team also updated to `cardano-api` v.8.40 and tested against `cardano-node` v.8.9.0, which unblocked a possible release and re-enabled smoke tests on public networks. In addition, they worked on grooming a new `/commit` endpoint interface that a user suggested.

The **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks. They focused on scaling the signature and proof generation for `mainnet`, completed UI improvements for the explorer, provided metadata about the point of the chain used during the verification process, and investigated a bug in the block parser that prevents some Conway transactions from being signed. Additionally, they began prototyping the [implementation of a more versatile beaconing mechanism](https://github.com/input-output-hk/mithril/issues/1562) to sign transactions with low latency. Finally, the team started implementing some community-requested features to verify the output folder structure made by the client and [fixed a source of flakiness](https://github.com/input-output-hk/mithril/issues/1558) in the CI end-to-end test.

### VOLTAIRE & SANCHONET

This week, the teams updated [SanchoNet resources](https://sancho.network/tools-resources/resources) with the latest compatible components. 

As always, if you’re interested in helping test CIP-1694 governance functionality, [join the community](https://sancho.network/get-started/discord). 

To learn more about progress on governance features, follow the [Intersect development updates](https://www.intersectmbo.org/news). 

### CATALYST

This week in **Project Catalyst**, the community learned about the results from the first-ever non-funding vote event. If you’re unsure what it was all about - read [this initial Cardano Forum post](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326) to catch up. Competition of cities for the official launch event was tough - all amazing locations - but **Barcelona** came out on top this time around. If you’d like to learn more, the organizing team visited _Cardano Over Coffee_ to announce these results and you can rewatch/listen to key [moments here](https://x.com/coc_space/status/1769819781417300235?s=20) or tweet about the announcement [here](https://x.com/danny_cryptofay/status/1769727134157734172?s=20). Key message? Fund12 is set to launch with a live event at the end of April. Stay tuned for more information.

### EDUCATION

This week, the **Education** team resumed the online Cardano Developer Course with ABC and is supporting the Voltaire team with their plans for the constitutional committee training.  
  
  
![](https://ucarecdn.com/8e97b093-9e8a-41d0-bbfc-89ff2704aa5e/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

この数週間、**SRE**（サイト信頼性エンジニアリング）チームは、Cardanoの環境の改善と総合的なメンテナンスに取り組んできました。cardano-node v.8.9.0を全環境に無事デプロイし、新しいprofile-cardano-db-sync-snapshots nixosModuleを作成しました。これは、現在db-syncステータスのスナップショットに使用できます。

**コンセンサス**チームは、ユーザーが提供するバッファを使用して、出入力用の代替fs-apiインターフェイスを[マージ](https://github.com/input-output-hk/fs-sim/pull/46)しました。この機能は、ファイルシステムAPIの下位レベルのプリミティブを定義します。これにより、より多くのユースケースとより効率的な入出力操作が可能になります（たとえば、台帳ステータスをディスクに移動するための取り組みの一部であるlsm-treeを実装する場合など）。この機能に関する作業は進行中です。新しい[拡散パイプライン基準](https://github.com/IntersectMBO/ouroboros-consensus/pull/955)を実装し、ノードv.8.9.1のバックポート付きのコンセンサスパッケージをリリースしました。現在、チームの一部は、UTXO-HDブランチでouroboros-consensusの修正テストに取り組んでいます。

スマートコントラクト

**Plutus**チームは、不要な「強制力」と「遅延」の数を減らす、型指定されていないPlutus Core UPLCの新しい最適化パスをマージしました。PlutusTx.AssocMapのドキュメントも改訂しました。

### スケーリング

**Hydra**チームは、仕様を現在のインクリメンタルデコミットの実装と整合させる作業に取り組み、モデルベースのテストにデコミットを追加しました。インクリメンタルコミットプロトコルの拡張について研究者と議論しました。cardano-api v.8.40に更新し、Cardano-node v.8.9.0に対してテストを行いました。これにより、可能なリリースのブロックが解除され、パブリックネットワークでスモークテストが再度可能になりました。ユーザーが提案した新しい/commitエンドポイントインターフェイスのグルーミングにも取り組みました 。

**Mithril**チームは、MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。mainnetの署名と証明生成のスケーリングに焦点を当て、エクスプローラーのUI改善を仕上げ、検証プロセス中に使用されたチェーンのポイントに関するメタデータを提供し、Conwayトランザクションの署名を妨げるブロックパーサのバグを調査しました。低レイテンシでトランザクションに署名するための、[より汎用性の高いビーコンメカニズムの実装](https://github.com/input-output-hk/mithril/issues/1562)のプロトタイプを開始しました。コミュニティからリクエストされた、クライアントが作成した出力フォルダー構造を検証するための機能の実装を開始し、CIエンドツーエンドテストでの[脆弱性の原因を修正](https://github.com/input-output-hk/mithril/issues/1558)しました。

### VOLTAIRE & SANCHONET

SanchoNetリソースを、互換性のある最新コンポーネントで更新しました。 

通常通り、CIP-1694ガバナンス機能のテストに関心がある場合は、[コミュニティに参加](https://sancho.network/get-started/discord)してください。 

ガバナンス機能の進捗状況の詳細は、[Intersectの開発更新情報](https://www.intersectmbo.org/news)を参照してください。 

### CATALYST

Project Catalystでは、ファンド以外で初となる投票イベントの結果が発表されました。この投票イベントについて不明な場合は、[Cardanoフォーラムに投稿された最初の案内](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326)を参照してください。公式ローンチイベントのための候補地はすべて素晴らしい都市であったため激しい競争となりましたが、今回は**バルセロナ**がトップとなりました。詳細は、担当チームがCardano Over Coffeeに参加して結果発表を行った[主要箇所](https://x.com/coc_space/status/1769819781417300235?s=20)を再視聴するか、[ここ](https://x.com/danny_cryptofay/status/1769727134157734172?s=20)で発表に関するツイートをご覧ください。ここで重要な点は、Fund12は、4月末にライブイベントで開始される予定ということです。更新情報をお見逃しなく。

教育

**教育**チームはABCとのCardano開発者オンラインコースを再開し、憲法委員会トレーニング計画でVoltaireチームをサポートしています。
