---
title: Weekly development report as of 2023-03-24
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/0b1b8e77-a859-496f-92f2-35e52d851c21/
image_text: Weekly development report as of 2023-03-24
---

### CORE TECHNOLOGY

Last week, the **networking** team released node v.1.35.6, which brings Dynamic P2P networking to mainnet. Dynamic P2P enables SPO relays to automatically connect to each other, replacing the current manual configuration process. See [this blog post](https://www.essentialcardano.io/article/dynamic-p2p-is-available-on-mainnet) for more details.

The **ledger** team made progress on the Conway era implementation by expanding the ledger API and including multiple governance features. They also kept working on the specification and Haskell implementation, continued integrating ledger packages into cardano-node, and addressed technical debt.

The **consensus** team continued working on the UTXO-HD prototype refactoring and Genesis design and testing. They also extracted the fs-sim package, which provides a file-system abstraction layer that can be used for testing and simulation. This makes the consensus code base smaller while providing a package that the community can reuse and contribute to. 

Finally, they fixed a failing property test related to iterators and continued working on mempool and VRF improvements.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team worked on the application’s starting screen improvements to show a more precise sync progress with decimals. 

Work is ongoing on the **Lace** desktop development. The team improved the DApp Connector’s browser navigation and transaction drawer logic and fixed minor UI issues to improve the overall user experience. 

Finally, they finalized and implemented a simple onboarding mechanism for the local node feature.

The **Adrestia** team worked on extending the multi-signature feature with delegation functionality in cardano-wallet. They also worked on extracting the transaction balancing library and did some refactoring of the DBLayer to improve performance and memory usage. 

Finally, they continued working on performance optimization of cardano-services in cardano-js-sdk.

### SMART CONTRACTS

The **Marlowe** team [fixed](https://github.com/input-output-hk/marlowe-cardano/pull/523) the inclusion of the stake address in the Marlowe address, removed trace statements from the Marlowe validator, and assessed [options](https://github.com/input-output-hk/marlowe-cardano/pull/521) for preventing double satisfaction. The team also assessed various conditions in the Marlowe semantics validator: adding a check for the positivity of accounts for the output state, guarding against [duplicate accounts](https://github.com/input-output-hk/marlowe-cardano/pull/519), guarding [balance postcondition](https://github.com/input-output-hk/marlowe-cardano/pull/517), and guarding [against negative deposits](https://github.com/input-output-hk/marlowe-cardano/pull/512) in the validator. They also [documented](https://github.com/input-output-hk/marlowe-cardano/pull/514) the rationale for allowing multiple outputs to an address, fixed `Eq` instance for `ReduceWarning`, added missing [specification tests](https://github.com/input-output-hk/marlowe-cardano/pull/526) for validator semantics, and addressed [minor issues](https://github.com/input-output-hk/marlowe-cardano/pull/527) related to the validator and its spec.

Finally, they implemented a [transaction detail view](https://github.com/input-output-hk/marlowe-explorer/pull/31) for Marlowe Explorer, displayed ada amounts in a more readable way, and implemented a [paginated index](https://github.com/input-output-hk/marlowe-explorer/pull/27) of all Marlowe contracts.

### BASHO (SCALING)

The **Hydra** team continued working on hydra-node mainnet compatibility, added a golden test suite for Hydra Plutus scripts and some detection of hydra-node misconfiguration, established a mainnet limit of 100 ada per commit (for now), and addressed smaller tasks in preparation for the mainnet beta release. 

The **Mithril** team continued implementing the migration of the aggregator stores to a relational design and completed the adaptation and migration of the stake pool store. They also worked on refactoring the multi-signer to enable it to sign multiple concurrent messages. Additionally, they finished implementing the automatic handling of API versions switch at era transition.

Finally, the team successfully completed the tests to create certificates and snapshots on a network running on the Cardano mainnet and fixed issues related to deadlocks on the SQLite connections. 

### GOVERNANCE 

If you haven’t had a chance to review the updates to [CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md), IOG encourages you to! You can contribute directly to GitHub and continue the conversation on various community channels.

Following on from the earlier **CIP-1694** workshop in Colorado, IOG would like to invite all community members to a Zoom conversation on March 30. It will be an opportunity to recap the workshop with attendees, hear more about CIP-1694, as well as discuss future workshops and the next steps towards the age of Voltaire. [RSVP here](https://www.addevent.com/event/TZ16421227) if you’d like to join. 

This week in **Project Catalyst,** the team introduced a proposed iteration for the community assessment stage coming into Fund10. You can rewatch the segment from the main town hall [here](https://youtu.be/lkTZkf7tKxI?t=2507). There will be more information shared in the coming weeks, make sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

Also, the Special Voting Event introduced during this week’s 360 segment is coming soon. More details will be announced soon, but you can register via the usual [voter registration in Catalyst](https://iohk.zendesk.com/hc/en-us/articles/900005679386-Catalyst-registration-and-voting-guide) to participate in the upcoming voting event.

Lastly, if you’re trying to stay up to date with everything that's happening in Project Catalyst, bookmark the past issues of the weekly newsletter. Check [it out here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

  

![](https://lh5.googleusercontent.com/Pa6mk3JIOVkik5H6l-ngeeYQs_sTk4ME3_dPnbUXKvPVzRo4LpZr29Nad6J14sHy9RZbnM3Op186LcuqeABrr7do6saQkeramIqPPyIQw9oy8QhHm79fD9JoCKBB2BWd7azPVs4ai6rjJO4A389d-8M)

### コアテクノロジー

**ネットワーキング**チームは、ダイナミックP2Pネットワーキングをメインネットにもたらすノードv. 1.35.6をリリースしました。ダイナミックP2Pを使用すると、SPOリレーが自動的に相互接続され、現在の手動設定プロセスが置き換えられます。詳しくは[こちらのブログ記事](https://iohk.io/jp/blog/posts/2023/03/16/dynamic-p2p-is-coming-to-cardano/)をご覧ください。

台帳チームは、台帳APIを拡張し、複数のガバナンス機能を含めるなど、Conway期の実装を進めました。仕様とHaskell実装に関する作業、Cardanoノードへ台帳パッケージを統合する作業を続け、技術債務に対処しました。

**コンセンサス**チームは、UTXO-HDプロトタイプのリファクタリング、およびGenesisの設計とテストに引き続き取り組みました。テストやシミュレーションに使用できるファイルシステム抽象化レイヤーを提供するfs-simパッケージの抽出も行いました。これによりコンセンサスコードベースが小さくなり、コミュニティが再利用して貢献できるパッケージが提供されます。 

失敗したイテレーター関連のプロパティテストを修正し、メモリープールとVRFの改善への取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、小数を使用して同期の進行状況表示の正確性を高めるという、アプリケーション起動画面の改良に取り組みました。 

**Lace**デスクトップの開発作業は進行中です。DAppコネクターのブラウザーナビゲーションとトランザクションドロワーロジックを改善し、ユーザーエクスペリエンス全体を向上させるために、UIの軽微な不具合を修正しました。 

ローカルノード機能の簡単なオンボーディングメカニズムを完成させて実装しました。

**Adrestia**チームは、cardano-walletのマルチシグ機能を委任機能で拡張する作業に取り組みました。トランザクション残高ライブラリーの抽出作業、パフォーマンスとメモリー使用量を改善するためのDBLayerのリファクタリングも行いました。 

cardano-js-sdkにおけるcardano-servicesのパフォーマンス最適化作業を続けました。

### スマートコントラクト

**Marlowe**チームは、Marloweアドレスにステークアドレスが含まれていることを[修正](https://github.com/input-output-hk/marlowe-cardano/pull/523)し、Marloweバリデーターからトレースステートメントを削除し、二重満足を防ぐための[オプション](https://github.com/input-output-hk/marlowe-cardano/pull/521)を評価しました。アウトプットステータスに対するアカウントのポジティブ性のチェックの追加、[重複アカウント](https://github.com/input-output-hk/marlowe-cardano/pull/519)に対する保護、[残高事後条件](https://github.com/input-output-hk/marlowe-cardano/pull/517)の保護、バリデーターの[負のデポジット](https://github.com/input-output-hk/marlowe-cardano/pull/512)に対する保護など、Marloweセマンティクスバリデーターのさまざまな条件を評価しました。1つのアドレスへ複数のアウトプットを許可する論理的根拠を[文書化](https://github.com/input-output-hk/marlowe-cardano/pull/514)し、ReduceWarningのEqインスタンスを修正し、バリデーターセマンティクスの不足している[仕様テスト](https://github.com/input-output-hk/marlowe-cardano/pull/526)を追加し、バリデーターとその仕様に関する[軽微な問題](https://github.com/input-output-hk/marlowe-cardano/pull/527)を解決しました。

Marloweエクスプローラーに[トランザクション詳細ビュー](https://github.com/input-output-hk/marlowe-explorer/pull/31)を実装し、ADAの金額表示を読みやすくし、すべてのMarloweコントラクトの[ページ分割インデックス](https://github.com/input-output-hk/marlowe-explorer/pull/27)を実装しました。

### Basho( スケーリング)

**Hydra**チームは、引き続きhydra-nodeのメインネット互換性に取り組み、Hydra Plutusスクリプトのゴールデンテストスイートとhydra-nodeの設定ミス検出を追加し、コミットごとの100ADAのメインネット制限を確立し（暫定）、メインネットベータリリースに向けて小規模なタスクに対処しました。 

**Mithril**チームは、アグリゲーターストアのリレーショナル設計への移行の実装を続け、ステークプールストアの適応と移行を完了しました。複数の同時メッセージに署名できるように、マルチ署名者のリファクタリングにも取り組みました。開発期移行時のAPIバージョン切り替えの自動処理の実装も完了しました。

Cardanoメインネットで実行されているネットワーク上で証明書とスナップショットの作成テストを完了し、SQLite接続のデッドロックに関する不具合を修正しました。 

### ガバナンス 

[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)の更新を未確認の場合は、ぜひ実行してください。GitHubに直接貢献し、さまざまなコミュニティチャネルで会話を続けることができます。

コロラド州で開催されたCIP-1694ワークショップに続き、IOGでは3月30日のZoomミーティングにコミュニティメンバー全員の参加を希望しています。参加者とともにワークショップを振り返り、CIP-1694についての詳細を聞き、ヴォルテール期に向け今後のワークショップと次のステップについて話し合う機会となります。参加をご希望の場合は、[こちらからお申込みください](https://www.addevent.com/event/TZ16421227)。 

今週の**Project Catalyst**では、Fund10に導入されるコミュニティ評価段階のイテレーション案が紹介されました。[ここ](https://youtu.be/lkTZkf7tKxI?t=2507)で、メインタウンホールからセグメントを再視聴できます。今後数週間のうちに、さらに情報が更新される予定です。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をしてください。

今週の360セグメントで紹介されたスペシャル投票イベント（SVE）も近日中に開催されます。詳細は近日中に発表されますが、[Catalystの通常の有権者登録](https://iohk.zendesk.com/hc/en-us/articles/900005679386-Catalyst-registration-and-voting-guide)から登録し、次の投票イベントに参加することができます。

週刊ニュースレターの過去の号をブックマークに登録して、Project Catalystの最新情報を入手してください。詳しくは、[こちら](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)をご覧ください。
