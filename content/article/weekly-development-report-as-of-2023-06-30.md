---
title: Weekly development report as of 2023-06-30
tags:
  - "#cardano"
  - Weekly development updates
url: ""
image: https://ucarecdn.com/b1f08571-81ac-4617-8c32-0f6347d92345/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on node, networking, consensus, and ledger components.

The consensus team working on the Genesis implementation continued to engage with the researchers, which resulted in various simplifications of the correctness argument for the historical Genesis window. They also decided on an approach for a syncing node to decide that it is (no longer) caught up. This functionality was requested by the networking team.

The team working on the UTXO-HD implementation ran ad-hoc benchmarks that showed performance issues, which are being investigated. They also merged several improvements required for the first UTXO-HD release, and added a package for easing integration with other downstream components.

Regarding our support activities, we integrated the latest Ledger changes into Consensus in preparation for node 8.2 release.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** teams made progress on a tool to simulate a multi delegation wallet by testing different coin-selection algorithms.

Also, a new cardano-js-sdk has been integrated, and all necessary compatibility changes to support it in the browser have been implemented. They're also working on the creation of new UI components for the multi-delegation flow, and have fixed some bugs related to HD wallet.

Additionally, the team is working on DApp connection improvements, and have also begun integrating Posthog for analytics events.

Finally, they're preparing the next release of Daedalus to support updated voter registration for Catalyst Fund10, and have almost finished a workaround for responsiveness when the Lace browser extension is resized.

The **Adrestia** team focused on updating cardano-wallet to support node v.8.1.1 and updating GHC to 9.2.8, while also progressing enhancements to the DB layer.

### SMART CONTRACTS

This week, the **Plutus Tools** team worked mostly on Marconi for sidechain. They fixed a few discrepancies between Marconi’s JSON answers and the specification ([PR-79](https://github.com/input-output-hk/marconi/pull/79)), added some newly requested fields ([PR-78](https://github.com/input-output-hk/marconi/pull/78)), cleaned up the logging ([PR-81](https://github.com/input-output-hk/marconi/pull/81)) and fixed some bugs ([PR-76](https://github.com/input-output-hk/marconi/pull/76), [PR-81](https://github.com/input-output-hk/marconi/pull/81)).

On the plutus-apps side, they continued refactoring to reduce the dependencies of the node-emulator ([PR-1091](https://github.com/input-output-hk/plutus-apps/pull/1091)), and reviewed & merged the first external contribution in a few months ([PR-1092](https://github.com/input-output-hk/plutus-apps/pull/1092)).

The **Plutus Core** team worked on finishing off the changes to builtins in the metatheory started last week (a prerequisite for making the builtins machinery of Plutus faster and simpler): [PR](https://github.com/input-output-hk/plutus/pull/5397). They also worked to finish off an optimization speeding up on-chain decoding of variables: [PR](https://github.com/input-output-hk/plutus/pull/5401).

Additionally, they worked on improving accuracy of benchmarks: [PR](https://github.com/input-output-hk/plutus/pull/5409), adding useful constants related to BLS builtins to the standard library of Plutus Tx: [PR](https://github.com/input-output-hk/plutus/pull/5404), resolving issues with continuous integration: [PR](https://github.com/input-output-hk/plutus/pull/5400), and adding BLS builtins to the specification: [PR](https://github.com/input-output-hk/plutus/pull/5405).

The Marlowe teams had a busy week. They added the HTTP SSE server for Marlowe transactions (PLT-6224; PR: [#610](https://github.com/input-output-hk/marlowe-cardano/pull/610)) and also added starter-kit lesson on CIP-30 (PLT-6336; PR: [#21](https://github.com/input-output-hk/marlowe-starter-kit/pull/21)). They also implemented batching of Marlowe transaction responses (PLT-6327; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/6a185fc6e)) and a random contract generator for demonstration (PLT-6302; PR: [#617](https://github.com/input-output-hk/marlowe-cardano/pull/617)).

**Marlowe Runtime**

The Marlowe Runtime team fixed an incompatibility between integration tests and safety checks (PLT-5817; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/2ed972558), [2](https://github.com/input-output-hk/marlowe-cardano/commit/854bf1fa0), [3](https://github.com/input-output-hk/marlowe-cardano/commit/dbf8e67c6), [4](https://github.com/input-output-hk/marlowe-cardano/commit/0ab9f5f1a), [5](https://github.com/input-output-hk/marlowe-cardano/commit/10451d25e), [6](https://github.com/input-output-hk/marlowe-cardano/commit/379c53fe3)). Also, tags now allow metadata longer than 64 characters. (PLT-6076; PR: [#627](https://github.com/input-output-hk/marlowe-cardano/pull/627)).

They also added a Status API to Marlowe Runtime (PLT-5378; PR: [#621](https://github.com/input-output-hk/marlowe-cardano/pull/621)), created Marlowe Runtime all-in-one executable (PLT-6179; PR: [#609](https://github.com/input-output-hk/marlowe-cardano/pull/609)), added marlowe-cli analyze functions inside Marlowe Runtime / Web server (PLT-3564; PR: [#622](https://github.com/input-output-hk/marlowe-cardano/pull/622)), added analysis timeout parameter to marlowe-tx (PLT-6073; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/208159256)), and also added safety report information to Runtime CLI create command (PLT-6072; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/e8b3b9745)).

Finally, they integrated safety report information into REST API (PLT-6071; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/5170f210c)) and added a safety report to Create command (PLT-6070; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/48eaf5791), [2](https://github.com/input-output-hk/marlowe-cardano/commit/fefcbfda3), [3](https://github.com/input-output-hk/marlowe-cardano/commit/6a3aa6765), [4](https://github.com/input-output-hk/marlowe-cardano/commit/ca3da93d9))

**Marlowe Explorer**

The Marlowe Explorer team added a skin to transaction detail in Marlowe Explorer (PLT-6159; PR: [#49](https://github.com/input-output-hk/marlowe-explorer/pull/49)) and also to contract view in Marlowe Explorer (PLT-6156; PR: [#47](https://github.com/input-output-hk/marlowe-explorer/pull/47)).

They also split the transaction page in two and add skin to transaction index in Marlowe Explorer (PLT-6158 and PLT-6157; PR: [#48](https://github.com/input-output-hk/marlowe-explorer/pull/48))

### BASHO (SCALING)

This week, the **Hydra** team shared progress updates during the monthly review meeting and began experimenting on a preview network with the new commit from external wallet feature.

This week, the **Mithril** team completed the design of the [signer deployment models](https://github.com/input-output-hk/mithril/issues/961) for the SPOs to run Mithril on their Cardano `mainnet` infrastructure, and implemented the associated [Mithril Relay](https://github.com/input-output-hk/mithril/issues/1018) in the Mithril networks. They kept working on the design and implementation of a simple [stress test tool](https://github.com/input-output-hk/mithril/issues/991) for benchmarking the aggregator. They also worked on implementing a new “tool” command in the aggregator, and its first [sub-command](https://github.com/input-output-hk/mithril/issues/1001) that helps avoiding the need for re-genesis of the certificate chain when the structure of the certificate is upgraded. Additionally, they worked on implementing some [monitoring](https://github.com/input-output-hk/mithril/issues/987) for the Mithril infrastructure, and worked on a [retry mechanism](https://github.com/input-output-hk/mithril/issues/984) for the artifacts creation of the aggregator.

Finally, the team fixed a bug related to the [computation of the master certificate](https://github.com/input-output-hk/mithril/issues/1006) of an epoch that prevented the aggregator from resuming signing certificates when a re-genesis occurred during an already certified epoch.

### VOLTAIRE

This week in **Voltaire**, conversations continued on [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) to establish an initial Minimum Viable Governance (MVG) framework. This framework is crucial for the advancement of participatory governance within the Cardano ecosystem. By collecting feedback from community members, diverse viewpoints can be incorporated to ensure the governance system aligns with the community’s needs and desires. 

The following workshops, hosted this week, yielded some valuable feedback:

*   Williamsburg, New York, U.S. by quantumplation#3141
    
*   Lagos, Nigeria by Ubiodee#9502
    
*   London, England by Chris \[UPSTR\]#5848 (7/1)
    
*   Sao Paulo, Brazil by Otávio - [CardanoFeed.com#5640](//CardanoFeed.com#5640) (7/1)
    
*   Virtual by Seo4u#6254
    
*   Virtual by jerrybnj#9863 (7/1)
    

[Check out workshops](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) happening near you and join the conversations.

[CIP-30](https://cips.cardano.org/cips/cip30/) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) are mechanisms proposed in [Cardano Improvement Proposals (CIPs)](https://cips.cardano.org/) to empower ada holders with voting capabilities. These proposals, once implemented by wallet providers, will enable community members to express their democratic consent for governance actions.

It's essential for community members to actively participate in providing feedback for [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509). By voicing opinions and suggestions, you can help shape the future of governance within Cardano. This collaborative approach ensures that the governance mechanisms implemented best represent the community's needs. 

### CATALYST

This week in **Project Catalyst,** the team presented the voter registration and the community review registration processes at [this week’s town hall](https://youtu.be/1R2_K1AQcfw). Guides to both of these processes can be found in the [Catalyst gitbook](https://projectcatalyst.gitbook.io/sve-documentation/how-to-participate-in-the-special-voting-event/wallet-registration-guide). Finally, some of the Catalyst projects presented some of the great work they have been doing to impact the community. If you aren’t already make sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

Moving on to the technical side of Catalyst last week:

*   Pushed registration release of mobile app to apple and android stores; apple in review, android approved
    
*   Continued adding to release documentation, including backend settings, app store tagline, change log, and release notes
    
*   Tested hardware wallets for compatibility with most recent changes to registration
    
*   Finalized documentation for Fund10-supported wallets, including rewards eligibility
    
*   Started work to add regression tests to the snapshot importer tool
    
*   Completed initial build for merged snapshot; preparing data for testing
    
*   Completed first iteration of Snapshot Module (check my voting power) and identified remaining work to be done
    
*   Added new field to registration endpoint to expose rewards eligibility
    
*   Discussed approach for updating CIP15/CIP36 to address ambiguity in existing registration/delegation tx needed for GVC; CIP revisions drafted
    
*   Continued implementing tests for Catalyst Data Services
    
*   Continued progress on plans to sunset vit-ss post-Fund10, including adding endpoints for backward compatibility to the new service for old clients
    
*   Delivered enabling work for GVC testing, including methods for extracting Fund9 vote plans (ie historical proposal data) and inserting them into devnet databases
    
*   Completed initial investigation of tally and recovery tools
    
*   Initiated work to enable technical users to replay the entire Fund10 voting round on their local machine, using auditable scripts and neatly packaged with earthly
    
*   Troubleshooting feature branching issues to enable load testing of voting ledger in next dry run
    
*   Identified test case for next dry run related to restarting leader nodes and impact to tally
    
*   Completed PoC for admin dashboard that allows users to sign in and view key details across all active and planned funds in the eventDB
    
*   Beta of continuous delivery was finished and is being tested.
    

Watch out for more information on how you can participate, which we will share in the coming weeks!

Lastly, if you’re trying to stay up to date with everything happening in Project Catalyst, join the Catalyst Telegram announcement channel. [Check it out here.](https://t.me/cardanocatalyst)

### EDUCATION

This week, the **Education** team began planning the next Cardano Days event at the [ITESO University of Guadalajara](https://www.iteso.mx/). They also worked with some internal tribes to discuss developer needs and tools, and wrapped up the Plutus Pioneer Playbook.

### コアテクノロジー

コアテクノロジーチームは、ノード、ネットワーク、コンセンサス、台帳コンポーネントへの取り組みを続けました。

Genesisの実装に取り組んでいるコンセンサスチームは、引き続き研究者と協力し、Genesisの履歴ウィンドウの正当性議論をさまざまに単純化しました。同期しているノードが（もはや）追いついていないと判断するためのアプローチも決定しました。この機能は、ネットワーキングチームからリクエストされました。

UTXO-HDの実装に取り組んでいるチームはアドホックのベンチマークを実行しました。これはパフォーマンスの不具合を示したため、現在調査しています。UTXO-HDの初回リリースに必要な複数の改良をマージし、他のダウンストリームコンポーネントとの統合を容易にするパッケージを追加しました。

サポート関連では、ノード8.2リリースの準備としてLedgerの最新の変更をコンセンサスに統合しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは、さまざまなコイン選定アルゴリズムをテストすることによって、マルチ委任ウォレットをシミュレーションするツールの開発を進めました。

新しいcardano-js-sdkを統合し、これをブラウザーでサポートするために必要な互換性に関する変更をすべて実装しました。マルチ委任フローのための新しいUIコンポーネントの作成に取り組み、HDウォレットに関するバグを修正しました。

DApp接続の改良に取り組み、分析イベント用Posthogの統合に着手しました。

Catalyst Fund10用に更新された有権者登録をサポートする次回Daedalusリリースを準備しており、Laceブラウザー拡張機能のサイズが変更されたときの応答性の次善策はほぼ終了しました。

**Adrestia**チームは、cardano-walletをノードv.8.1.1をサポートするよう更新し、GHCを9.2.8に更新する作業に注力しながら、DB層の強化も進めました。

### スマートコントラクト

**Plutusツール**チームは主にサイドチェーン用Marconiに取り組みました。MarconiのJSON応答と仕様の齟齬を修正し（[PR-79](https://github.com/input-output-hk/marconi/pull/79)）、新たに要求されたフィールドを追加し（[PR-78](https://github.com/input-output-hk/marconi/pull/78)）、ログをクリーンアップし（[PR-81](https://github.com/input-output-hk/marconi/pull/81)）、バグを修正しました（[PR-76](https://github.com/input-output-hk/marconi/pull/76)、[PR-81](https://github.com/input-output-hk/marconi/pull/81)）。

plutus-appsに関しては、ノードエミュレーターの依存関係を減らすためのリファクタリングを継続し（[PR-1091](https://github.com/input-output-hk/plutus-apps/pull/1091)）、この数か月間で初の外部からの貢献をレビュー、マージしました（[PR-1092](https://github.com/input-output-hk/plutus-apps/pull/1092)）。

**Plutus Core**チームは、先週始めたメタ理論のビルトインへの変更の仕上げに取り組みました（Plutusのビルトインマシンを高速化、簡素化するための前提条件、[PR](https://github.com/input-output-hk/plutus/pull/5397)）。オンチェーンの変数デコードをスピードアップする最適化も完了しました（[PR](https://github.com/input-output-hk/plutus/pull/5401)）。

ベンチマークの向上にも取り組み（[PR](https://github.com/input-output-hk/plutus/pull/5409)）、Plutus Txの標準ライブラリーへのBLSビルトインに関連する便利な定数を追加し（[PR](https://github.com/input-output-hk/plutus/pull/5404)）、継続的統合に関する不具合を解消し（[PR](https://github.com/input-output-hk/plutus/pull/5400)）、仕様にBLSビルトインを追加しました（[PR](https://github.com/input-output-hk/plutus/pull/5405)）。

**Marlowe**チームにとっては、忙しない週となりました。Marloweトランザクション用のHTTP SSEサーバーを追加し（PLT-6224、PR：[#610](https://github.com/input-output-hk/marlowe-cardano/pull/610)）、CIP-30のスターターキットレッスンも追加しました（PLT-6336、PR：[#21](https://github.com/input-output-hk/marlowe-starter-kit/pull/21)）。また、Marloweトランザクション応答のバッチ処理（PLT-6327、コミット：[1](https://github.com/input-output-hk/marlowe-cardano/commit/6a185fc6e)）と、デモ用のランダムコントラクトジェネレーター（PLT-6302、PR：[#617](https://github.com/input-output-hk/marlowe-cardano/pull/617)）も実装しました。

**Marlowe Runtime**

Marlowe Runtimeチームは、統合テストとセーフティチェックの間の互換性の問題を修正しました（PLT-5817、コミット：[1](https://github.com/input-output-hk/marlowe-cardano/commit/2ed972558)、[2](https://github.com/input-output-hk/marlowe-cardano/commit/854bf1fa0)、[3](https://github.com/input-output-hk/marlowe-cardano/commit/dbf8e67c6)、[4](https://github.com/input-output-hk/marlowe-cardano/commit/0ab9f5f1a)、[5](https://github.com/input-output-hk/marlowe-cardano/commit/10451d25e)、[6](https://github.com/input-output-hk/marlowe-cardano/commit/379c53fe3)）。タグでは、64文字を超えるメタデータが許可されるようになりました。（PLT-6076、PR：[#627](https://github.com/input-output-hk/marlowe-cardano/pull/627)）。

また、Marlowe RuntimeにStatus APIを追加し（PLT-5378、PR：[#621](https://github.com/input-output-hk/marlowe-cardano/pull/621)）、Marlowe Runtime All-in-One実行可能ファイルを作成し（PLT-6179、PR：[#609](https://github.com/input-output-hk/marlowe-cardano/pull/609)）、Marlowe Runtime/Webサーバー内にmarlowe-cli解析関数を追加し（PLT-3564、PR：[#622](https://github.com/input-output-hk/marlowe-cardano/pull/622)）、marlowe-txに解析タイムアウトパラメーターを追加し（PLT-6073、コミット：[1](https://github.com/input-output-hk/marlowe-cardano/commit/208159256)）、Runtime CLI Createコマンドに安全性レポート情報を追加しました（PLT-6072、コミット：[1](https://github.com/input-output-hk/marlowe-cardano/commit/e8b3b9745)）。

安全性レポート情報をREST APIに統合し（PLT-6071、コミット：[1](https://github.com/input-output-hk/marlowe-cardano/commit/5170f210c)）、Createコマンドに安全性レポートを追加しました（PLT-6070、コミット：[1](https://github.com/input-output-hk/marlowe-cardano/commit/48eaf5791)、[2](https://github.com/input-output-hk/marlowe-cardano/commit/fefcbfda3)、[3](https://github.com/input-output-hk/marlowe-cardano/commit/6a3aa6765)、[4](https://github.com/input-output-hk/marlowe-cardano/commit/ca3da93d9)）。

**Marloweエクスプローラー**

Marloweエクスプローラーチームは、Marloweエクスプローラーのトランザクション詳細にスキンを追加し（PLT-6159、PR：#[49](https://github.com/input-output-hk/marlowe-explorer/pull/49)）、Marloweエクスプローラーのコントラクトビューにもスキンを追加しました（PLT-6156、PR：[#47](https://github.com/input-output-hk/marlowe-explorer/pull/47)）。

トランザクションページを2つに分割し、Marloweエクスプローラーのトランザクションインデックスにスキンを追加しました（PLT-6158およびPLT-6157、PR：[#48](https://github.com/input-output-hk/marlowe-explorer/pull/48))。

### Basho( スケーリング)

**Hydra**チームは月例レビュー会議で進捗状況を報告し、プレビューネットワークで外部ウォレット機能からの新たなコミットの実験を始めました。

**Mithril**チームは、SPOが自分のCardano mainnetインフラでMithrilを稼働させるための[署名者デプロイモデル](https://github.com/input-output-hk/mithril/issues/961)の設計を終え、関連する[Mithril Relay](https://github.com/input-output-hk/mithril/issues/1018)をMithrilネットワークに実装しました。ベンチマーキングとアグリゲーター用の単純な[ストレステストツール](https://github.com/input-output-hk/mithril/issues/991)の設計と実装への取り組みを続けました。アグリゲーターに新しいtoolコマンドと、証明書の構造がアップグレードされた場合に証明書チェーンの再生成の必要性を回避するのに役立つ最初の[サブコマンド](https://github.com/input-output-hk/mithril/issues/1001)を実装する作業にも取り組みました。Mithrilインフラの[監視](https://github.com/input-output-hk/mithril/issues/987)の実装、アグリゲーターのアーティファクト作成のための[再試行メカニズム](https://github.com/input-output-hk/mithril/issues/984)に取り組みました。

すでに証明されたエポック中に再生成が生じた際、アグリゲーターが証明書へ署名するのを妨げていた、エポックの[マスター証明書の計算](https://github.com/input-output-hk/mithril/issues/1006)に関連するバグを修正しました。

### VOLTAIRE

**Valtaire**に関しては、初期MVG（最小実行可能ガバナンス）フレームワークを確立するための[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)に関する話し合いを続けました。このフレームワークは、Cardanoエコシステムの参加型ガバナンスを進めるうえで不可欠です。コミュニティメンバーからフィードバックを収集することで、多様な視点を取り入れ、コミュニティのニーズと要望に沿ったガバナンスシステムを構築することができます。 

今週は以下のワークショップが開催され、貴重なフィードバックが得られました。

*   米国ニューヨーク州ウィリアムズバーグ - quantumplation#3141主催
    
*   ナイジェリア、ラゴス - Ubiodee#9502主催
    
*   英国ロンドン - Chris \[UPSTR\]#5848主催
    
*   ブラジル、サンパウロ - Otávio - [CardanoFeed.com#5640](//CardanoFeed.com#5640)主催（7月1日）
    
*   仮想ワークショップ - Seo4u#6254主催
    
*   仮想ワークショップ - jerrybnj#9863主催（7月１日）
    

近くで開催される[ワークショップをチェック](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up)して、話し合いに参加してください。

[CIP-30](https://cips.cardano.org/cips/cip30/)および[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)は、[CIP（Cardano改善提案）](https://cips.cardano.org/)でADA保有者に投票権を与えるべく提案されたメカニズムです。この提案がウォレットプロバイダーにより実装されると、コミュニティメンバーはガバナンスアクションについて民主的に同意を表明することができるようになります。

コミュニティメンバーが、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)や[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)に積極的にフィードバックを提供することは極めて重要です。意見や提案を表明することは、Cardanoのガバナンスの未来を形作るのに役立ちます。この協調的なアプローチにより、実装されたガバナンスメカニズムがコミュニティのニーズを代表するようになります。  

### CATALYST

**Project Catalyst**チームは、[タウンホール](https://youtu.be/1R2_K1AQcfw)で有権者登録とコミュニティレビュー登録プロセスを発表しました。両プロセスのガイドは、[Catalyst gitbook](https://projectcatalyst.gitbook.io/sve-documentation/how-to-participate-in-the-special-voting-event/wallet-registration-guide)をご覧ください。コミュニティに影響を与える素晴らしい業績が、いくつかのCatalystプロジェクトから紹介されました。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録して最新情報を入手してください。

Catalystの技術的側面は以下の通りです。

*   AppleおよびAndroidストアへのモバイルアプリの登録リリースをプッシュ。Appleはレビュー中、Androidは承認済み
    
*   バックエンド設定、アプリストアのタグライン、変更ログ、リリースノートなどのリリースドキュメントへの追加を継続
    
*   ハードウェアウォレットをテストし、登録に関する最新の変更との互換性を確認
    
*   Fund10がサポートするウォレットのドキュメントを完了（報酬の対象を含む）
    
*   スナップショットインポーターツールへのリグレッションテスト追加作業開始
    
*   マージされたスナップショットの初期ビルドを完了し、テスト用のデータを準備中
    
*   Snapshot Module（check my voting power）の初回イテレーションを完了し、残りの作業を特定
    
*   登録エンドポイントに新しいフィールドを追加して、報酬の適格性を公開
    
*   GVCに必要な既存の登録/委任txのあいまいさに対処するためにCIP15/CIP36を更新するためのアプローチについて議論、CIPリビジョンの草稿作成
    
*   Catalyst Data Servicesのテストの実装を継続
    
*   旧クライアント向けの新しいサービスに下位互換性を持たせるためのエンドポイントの追加など、Fund10後のvit-ssを終了させる計画は引き続き前進
    
*   Fund9投票プラン（提案履歴データ）を抽出してDevNetデータベースに挿入する方法など、GVCテストを可能にする作業を提供
    
*   タリーツールとリカバリーツールの初期調査を完了
    
*   テクニカルユーザーが、監査可能なスクリプトを使用して、ローカルマシンでFund10投票ラウンド全体を再生できるようにする作業を開始
    
*   次回ドライランで投票台帳のロードテストを可能にする機能分岐の問題のトラブルシューティング
    
*   リーダーノードの再起動と集計への影響に関連する次回ドライランのテストケースを特定
    
*   ユーザーがサインインしてeventDB内のすべてのアクティブな資金と計画されている資金の主な詳細表示を可能にする管理者ダッシュボードのPoCを完了
    
*   連続配信のベータ版完了、現在テスト中
    

参加方法の詳細は、今後数週間内にお知らせします。

Project Catalystの最新情報を入手するには、Catalyst Telegram案内チャネルへ参加してください。詳しくは、[こちら](https://t.me/cardanocatalyst)をご覧ください。

### 教育

**教育**チームは、メキシコの[ITESOグアダラハラ大学](https://www.iteso.mx/)で開催される次回Cardano Daysイベントの企画を始めました。社内トライブと開発者のニーズやツールについて話し合い、Plutus Pioneer Playgookをまとめました。

[https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/a/e/aefc810c1899555190b9287c5bde5c338a4760dc.png](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/a/e/aefc810c1899555190b9287c5bde5c338a4760dc.png)

# TECNOLOGÍA DE NODOS

Enlace a la Infografía traducida al español.

Durante esta semana, los equipos de tecnología de nodos siguieron trabajando en los componentes de nodos, redes, consenso y ledger.

Los responsables del equipo de consenso que trabaja en la implementación de Génesis siguieron dialogando con los investigadores, lo que dio lugar a varias simplificaciones del argumento de corrección de la ventana histórica de Génesis. Asimismo, decidieron un enfoque para que un nodo de sincronización decida que (ya) no está al día. Esta funcionalidad fue solicitada por el equipo de redes.

Gracias al equipo que trabaja en la implementación de UTXO-HD, se realizaron pruebas de rendimiento ad hoc que mostraron problemas de rendimiento, que se están investigando. Por otra parte, fusionaron varias mejoras necesarias para la primera versión de UTXO-HD y añadieron un paquete para facilitar la integración con otros componentes posteriores.

En cuanto a nuestras actividades de soporte, integramos los últimos cambios del ledger en Consensus como preparación para el lanzamiento del nodo 8.2.

Vea, al igual que siempre, [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# LAS WALLETS Y OTROS SERVICIOS

Los equipos de **Lace** avanzaron esta semana en una herramienta para simular una wallets multi delegación probando diferentes algoritmos de selección de criptomonedas.

También se ha integrado un nuevo cardano-js-sdk y se han implementado todos los cambios de compatibilidad necesarios para soportarlo en el navegador. Además, están trabajando en la creación de nuevos componentes de interfaz de usuario para el flujo de multidelegación, y han corregido algunos errores relacionados con Las wallets HD.

Adicionalmente, el equipo está trabajando en mejoras de la conexión DApp, y también han empezado a integrar Posthog para los eventos de análisis.

Por último, están preparando la próxima versión de Daedalus para que admita el registro actualizado de votantes para el Fondo 10 de Catalyst, y casi han terminado una solución para la capacidad de respuesta cuando se cambia el tamaño de la extensión del navegador Lace.

El equipo de **Adrestia** se centró en la actualización de cardano-wallets para soportar node v.8.1.1 y en la actualización de GHC a 9.2.8, al tiempo que avanzaba en las mejoras de la capa DB.

#CONTRATOS INTELIGENTES

A lo largo de esta semana, el equipo de **Plutus Tools** ha trabajado principalmente en Marconi para sidechains. Arreglaron algunas discrepancias entre las respuestas JSON de Marconi y la especificación ([PR-79](https://github.com/input-output-hk/marconi/pull/79)), añadieron algunos campos solicitados recientemente ([PR-78](https://github.com/input-output-hk/marconi/pull/78)), limpiaron el registro ([PR-81](https://github.com/input-output-hk/marconi/pull/81)) y arreglaron algunos errores ([PR-76](https://github.com/input-output-hk/marconi/pull/76), [PR-81](https://github.com/input-output-hk/marconi/pull/81)).

Por el lado de plutus-apps, continuaron con la refactorización para reducir las dependencias del nodo-emulador ([PR-1091](https://github.com/input-output-hk/plutus-apps/pull/1091)), y revisaron y fusionaron la primera contribución externa en unos meses ([PR-1092](https://github.com/input-output-hk/plutus-apps/pull/1092)).

El equipo de **Plutus Core** trabajó en la finalización de los cambios en los builtins de la metateoría iniciados la semana pasada (un requisito previo para que la maquinaria de builtins de Plutus sea más rápida y sencilla): [PR](https://github.com/input-output-hk/plutus/pull/5397). También trabajaron para terminar una optimización que acelera la decodificación en cadena de variables: [PR](https://github.com/input-output-hk/plutus/pull/5401).

Adicionalmente, trabajaron en la mejora de la precisión de los puntos de referencia: [PR](https://github.com/input-output-hk/plutus/pull/5409), en la adición de constantes útiles relacionadas con BLS builtins a la biblioteca estándar de Plutus Tx: [PR](https://github.com/input-output-hk/plutus/pull/5404), resolviendo problemas con la integración continua: [PR](https://github.com/input-output-hk/plutus/pull/5400), y añadiendo BLS builtins a la especificación: [PR](https://github.com/input-output-hk/plutus/pull/5405).

Los equipos de Marlowe tuvieron una semana ajetreada. Añadieron el servidor HTTP SSE para las transacciones Marlowe (PLT-6224; PR: [#610](https://github.com/input-output-hk/marlowe-cardano/pull/610)) y también añadieron la lección starter-kit sobre CIP-30 (PLT-6336; PR: [#21](https://github.com/input-output-hk/marlowe-starter-kit/pull/21)). También implementaron el procesamiento por lotes de respuestas de transacciones Marlowe (PLT-6327; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/6a185fc6e)) y un generador de contratos aleatorios para demostración (PLT-6302; PR: [#617](https://github.com/input-output-hk/marlowe-cardano/pull/617)).

# Marlowe Runtime

El equipo de Marlowe Runtime ha solucionado una incompatibilidad entre las pruebas de integración y las comprobaciones de seguridad (PLT-5817; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/2ed972558), [2](https://github.com/input-output-hk/marlowe-cardano/commit/854bf1fa0), [3](https://github.com/input-output-hk/marlowe-cardano/commit/dbf8e67c6), [4](https://github.com/input-output-hk/marlowe-cardano/commit/0ab9f5f1a), [5](https://github.com/input-output-hk/marlowe-cardano/commit/10451d25e), [6](https://github.com/input-output-hk/marlowe-cardano/commit/379c53fe3)). Además, ahora las etiquetas permiten metadatos de más de 64 caracteres. (PLT-6076; PR: [#627](https://github.com/input-output-hk/marlowe-cardano/pull/627)).

También añadieron una API de estado a Marlowe Runtime (PLT-5378; PR: [#621](https://github.com/input-output-hk/marlowe-cardano/pull/621)), crearon el ejecutable todo en uno de Marlowe Runtime (PLT-6179; PR: [#609](https://github.com/input-output-hk/marlowe-cardano/pull/609)), añadieron las funciones de análisis marlowe-cli dentro de Marlowe Runtime / servidor web (PLT-3564; PR: [#622](https://github.com/input-output-hk/marlowe-cardano/pull/622)), añadieron el parámetro de tiempo de espera de análisis a marlowe-tx (PLT-6073; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/208159256)), y también se añadió información sobre el informe de seguridad al comando de creación CLI en tiempo de ejecución (PLT-6072; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/e8b3b9745)).

Por último, integraron la información del informe de seguridad en la API REST (PLT-6071; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/5170f210c)) y añadieron un informe de seguridad al comando Crear (PLT-6070; Commits: [1](https://github.com/input-output-hk/marlowe-cardano/commit/48eaf5791), [2](https://github.com/input-output-hk/marlowe-cardano/commit/fefcbfda3), [3](https://github.com/input-output-hk/marlowe-cardano/commit/6a3aa6765), [4](https://github.com/input-output-hk/marlowe-cardano/commit/ca3da93d9))

# Marlowe Explorer

El equipo de Marlowe Explorer ha añadido un skin al detalle de transacciones en Marlowe Explorer (PLT-6159; PR: [#49](https://github.com/input-output-hk/marlowe-explorer/pull/49)) y también a la vista de contratos en Marlowe Explorer (PLT-6156; PR: [#47](https://github.com/input-output-hk/marlowe-explorer/pull/47)).

Dividen también la página de transacciones en dos y añaden skin al índice de transacciones en Marlowe Explorer (PLT-6158 y PLT-6157; PR: [#48](https://github.com/input-output-hk/marlowe-explorer/pull/48)).

# BASHO (ESCALADO)

Los miembros del equipo **Hydra** han compartido los avances realizados durante la reunión de revisión mensual y han comenzado a experimentar en una red preliminar con la nueva función de confirmación desde wallets externos.

Durante esta semana, el equipo **Mithril** completó el diseño de los [modelos de despliegue de firmantes](https://github.com/input-output-hk/mithril/issues/961) para que los SPO ejecuten Mithril en su infraestructura `mainnet` de Cardano, e implementó el [Relevo Mithril](https://github.com/input-output-hk/mithril/issues/1018) asociado en las redes Mithril. Asimismo, siguieron trabajando en el diseño y la implementación de una sencilla [herramienta de prueba de estrés](https://github.com/input-output-hk/mithril/issues/991) para la evaluación comparativa del agregador. Trabajaron también en la implementación de un nuevo comando “herramienta” en el agregador, y su primer [subcomando](https://github.com/input-output-hk/mithril/issues/1001) que ayuda a evitar la necesidad de volver a generar la cadena de certificados cuando se actualiza la estructura del certificado. Adicionalmente, trabajaron en la implementación de algún [monitoreo](https://github.com/input-output-hk/mithril/issues/987) para la infraestructura Mithril, y trabajaron en un [mecanismo de reintento](https://github.com/input-output-hk/mithril/issues/984) para la creación de artefactos del agregador.

Por último, el equipo corrigió un error relacionado con el [cálculo del certificado maestro](https://github.com/input-output-hk/mithril/issues/1006) de una época que impedía al agregador reanudar la firma de certificados cuando se producía una re-génesis durante una época ya certificada.

# VOLTAIRE

Esta semana en **Voltaire**, continuaron las conversaciones sobre [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) para establecer un marco inicial de Gobernanza Mínima Viable (MVG). Se trata de un marco esencial para el avance de la gobernanza participativa dentro del ecosistema de Cardano. Al recoger las opiniones de los miembros de la comunidad, se pueden incorporar diversos puntos de vista para garantizar que el sistema de gobernanza se ajuste a las necesidades y deseos de la comunidad.

En los siguientes talleres, celebrados esta semana, se obtuvieron valiosos comentarios:

*   Williamsburg, Nueva York, EE.UU. por quantumplation#3141
    
*   Lagos, Nigeria por Ubiodee#9502
    
*   Londres, Inglaterra por Chris \[UPSTR\]#5848 (7/1)
    
*   Sao Paulo, Brasil by Otávio - [CardanoFeed.com#5640](//CardanoFeed.com#5640) (7/1)
    
*   Virtual por Seo4u#6254
    
*   Virtual por jerrybnj#9863 (7/1)
    

[Consulte los talleres](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) que se celebran cerca de usted y únase a las conversaciones.

[CIP-30](https://cips.cardano.org/cips/cip30/) y [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) son mecanismos propuestos en [Propuestas de mejora de Cardano (CIP)](https://cips.cardano.org/) para dotar a los titulares de ada de capacidad de voto. Estas propuestas, una vez implementadas por los proveedores de wallets, permitirán a los miembros de la comunidad expresar su consentimiento democrático para las acciones de gobierno.

Resulta imprescindible que los miembros de la comunidad participen activamente ofreciendo su opinión sobre [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) y [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509). Al expresar sus opiniones y sugerencias, pueden ayudar a dar forma al futuro de la gobernanza dentro de Cardano. Este planteamiento colaborativo garantiza que los mecanismos de gobernanza implementados representen de la mejor manera posible las necesidades de la comunidad.

# CATALYST

En esta semana del **Proyecto Catalyst,** el equipo ha presentado los procesos de registro de votantes y de revisión de la comunidad en [el ayuntamiento de esta semana](https://youtu.be/1R2_K1AQcfw). Las guías de ambos procesos pueden encontrarse en el [gitbook de Catalyst](https://projectcatalyst.gitbook.io/sve-documentation/how-to-participate-in-the-special-voting-event/wallet-registration-guide). Por último, algunos de los proyectos Catalyst presentaron parte del gran trabajo que han estado realizando para repercutir en la comunidad. Si aún no lo está, asegúrese de estar al tanto y registre su asistencia al [próximo ayuntamiento](http://bit.ly/catalyst-townhall).

En cuanto al aspecto técnico de Catalyst, la semana pasada:

*   Impulsó la publicación del registro de la aplicación móvil en las tiendas apple y android; apple en revisión, android aprobada
    
*   Seguimos añadiendo a la documentación de la versión, incluidos los ajustes del backend, el eslogan de la tienda de aplicaciones, el registro de cambios y las notas de la versión
    
*   Probadas las hardware wallets para comprobar su compatibilidad con los cambios más recientes en el registro
    
*   Finalizada la documentación para las wallets compatibles con el Fondo 10, incluida la elegibilidad para las recompensas
    
*   Iniciado el trabajo para añadir pruebas de regresión a la herramienta de importación de instantáneas
    
*   Completada la construcción inicial para la instantánea fusionada; preparando los datos para las pruebas
    
*   Completada la primera iteración del módulo de instantáneas (comprobar mi poder de voto) e identificado el trabajo que queda por hacer
    
*   Añadido un nuevo campo al punto final de registro para exponer la elegibilidad de las recompensas
    
*   Discutido el enfoque para actualizar CIP15/CIP36 para abordar la ambigüedad en el registro/delegación tx existente necesario para GVC; revisiones CIP redactadas
    
*   Continuación de la realización de pruebas para los servicios de datos Catalyst
    
*   Continuaron los progresos en los planes para poner fin a vit-ss después del Fondo 10, incluida la adición de puntos finales para la compatibilidad con el nuevo servicio para los clientes antiguos
    
*   Realizado el trabajo de habilitación para las pruebas de GVC, incluidos los métodos para extraer los planes de votación del Fondo9 (es decir, los datos históricos de las propuestas) e insertarlos en las bases de datos devnet
    
*   Finalizada la investigación inicial de las herramientas de recuento y recuperación
    
*   Inició el trabajo para permitir a los usuarios técnicos reproducir toda la ronda de votaciones del Fondo 10 en su máquina local, utilizando las secuencias de comandos auditables y empaquetadas ordenadamente con earthly
    
*   Resolución de problemas de bifurcación de funciones para permitir la prueba de carga del ledger de votación en la próxima ronda seca
    
*   Identificado el caso de prueba para el próximo simulacro relacionado con el reinicio de los nodos líderes y el impacto en el recuento
    
*   Finalizada la PoC para el panel de administración que permite a los usuarios iniciar sesión y ver los detalles clave de todos los fondos activos y planificados en la eventDB
    
*   Se terminó la beta de la entrega continua y se está probando.
    

Permanezca a la espera de más información sobre cómo puede participar, ¡que compartiremos en las próximas semanas!

Finalmente, si desea mantenerse al día de todo lo que ocurre en el Proyecto Catalyst, únase al canal de anuncios de Telegram de Catalyst. [Compruébelo aquí.](https://t.me/cardanocatalyst)

# EDUCACIÓN

El equipo de **Educación** empezó esta semana a planificar el próximo evento Cardano Days en el [ITESO Universidad de Guadalajara](https://www.iteso.mx/). También trabajaron con algunas tribus internas para discutir las necesidades y herramientas de los desarrolladores, y terminaron el Plutus Pioneer Playbook.
