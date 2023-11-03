---
title: Weekly development report as of 2023-11-03
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/7aa4afc1-c7b9-4f1c-b6d7-46aef0b2980e/
image_text: Weekly development report as of 2023-11-03
---

### CORE TECHNOLOGY

This week, many IOG teams are at the Cardano Summit 2023, contributing to the annual event with keynotes, panels, masterclasses, and a strong booth lineup of products and services on display. Read this [blog post](https://iohk.io/en/blog/posts/2023/11/02/input-output-global-at-cardano-summit-2023/) for more details. 

The **networking** team continued working on [bootstrapping peers](https://github.com/input-output-hk/ouroboros-network/pull/4555), investigated CI processes, tested protocols and connection manager functionality, and released a new version of the ouroboros-network packages to [CHaP](https://github.com/input-output-hk/cardano-haskell-packages/pull/547).

The **consensus** team focused on two primary areas. Firstly, they addressed the [survivable eclipse duration](https://github.com/input-output-hk/ouroboros-consensus/pull/422), a part of their work related to [supporting Genesis delivery](https://github.com/input-output-hk/ouroboros-consensus/issues/427). Secondly, they focused on enhancing the [handling of blocks](https://github.com/input-output-hk/ouroboros-network/issues/4251) from the future. The team also made progress with the UTXO-HD branch development by successfully operating a node with [legacy blocks](https://github.com/input-output-hk/ouroboros-consensus/issues/344), which currently syncs with the mainnet up to the Alonzo era.

Finally, they [investigated](https://github.com/input-output-hk/ouroboros-consensus/issues/465#issuecomment-1788685122) a regression in mempool snapshotting. This issue was resolved through a ledger update and is planned to be fixed in the upcoming node v.8.6 release.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, **Lace** says hello to Nami! Nami, the non-custodial wallet platform created by Alessandro Konrad in 2021, has joined the Input Output Global product family. For more details, [read this blog post](https://www.lace.io/blog/lace-says-hello-to-nami?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog).

Additionally, the team [updated](https://twitter.com/lace_io/status/1719988643652059169?s=20) some data fetching issues – to better support token conversions in any chosen currency. 

The Lace team is on the ground at the Cardano Summit 2023, where they are looking to engage with community members. Stay tuned for more updates.

### SMART CONTRACTS

This week, the **Plutus** tools team kept working on Marconi API queries, cardano-node-emulator testing, and user documentation improvements. The Plutus Core team made the equality comparison on PlutusTx value more efficient.

The **Marlowe** team created several versions of transactions in TS-SDK, including \`[getWithdrawalById](https://github.com/input-output-hk/marlowe-ts-sdk/pull/49)`,` [createWithdrawal](https://github.com/input-output-hk/marlowe-ts-sdk/pull/46)`,` [getWithdrawals](https://github.com/input-output-hk/marlowe-ts-sdk/pull/48)`,` [submitWithdrawal](https://github.com/input-output-hk/marlowe-ts-sdk/pull/47)`, and` [createTransactionForContract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/43)\`. They also measured build-related query performance on mainnet, evaluated Aiken-based Marlowe [validators](https://github.com/input-output-hk/marlowe-plutus/pull/3), and looked into [Lace support](https://github.com/input-output-hk/marlowe-ts-sdk/pull/52). Additionally, the team released the [Runtime web 0.0.5.1](https://github.com/input-output-hk/marlowe-cardano/releases/tag/marlowe-runtime-web%40v0.0.5.1) hotfix, set the [API call](https://github.com/input-output-hk/marlowe-vesting/pull/10) for config JSON needed for dynamic setting of Marlowe Runtime web URL, and [cross-indexed](https://github.com/input-output-hk/marlowe-doc/pull/180) the starter-kit videos on the main Marlowe Docs tutorials page. 

Finally, they added the [contract ID and Marlowe Scan links](https://github.com/input-output-hk/marlowe-vesting/pull/15) to the vesting DApp, improved Marlowe Playground [functionality](https://github.com/input-output-hk/marlowe-playground/pull/52) by adding the `GET` [endpoint](https://github.com/input-output-hk/marlowe-playground/pull/51), and [enabled](https://github.com/input-output-hk/marlowe-playground/pull/54) going to Blockly after loading the contract from the URL.

The Marlowe team will conduct two workshops at the Cardano Summit this week. The first workshop happening on November 3, ‘Marlowe deep dive: build a DApp in 90 minutes’, will explore Marlowe’s suite of tools and safety features, demonstrating DApp creation. The second one, to be held on November 4, is ‘Marlowe 101: turn ideas into smart contracts’. This workshop will offer a beginner-friendly introduction to creating and executing smart contracts while discussing business case ideation and technical architecture.

### SCALING

This week, the **Hydra** team fixed the \`[gen-hydra-keys](https://github.com/input-output-hk/hydra/issues/1136)\` command to avoid overwriting existing keys and resolved issues related to the rewritten hydra-tui. They also worked on a ‘dirt road’ implementation for the ‘ignored init tx’ notification, improving the robustness of the system.

The team finalized their [preparations](https://github.com/input-output-hk/hydra/issues/1109) for the Cardano Summit presentation, including implementing the \`[hydra-poll](https://github.com/cardano-scaling/hydra-poll)\` example DApp.

If you are at the Cardano Summit 2023 in Dubai, make sure to check out Hydra’s masterclass ‘Developing Hydra and Mithril for scaling Cardano’ today (November 3) at 14:00-15:30 local time in the ‘Al Dar’ room.

The **Mithril** team kept working on decentralizing the Mithril networks with the peer-to-peer (P2P) networking [proof of concept](https://github.com/input-output-hk/mithril/issues/1300). They progressed with the adaptation of the [Mithril client](https://github.com/input-output-hk/mithril/issues/1311) as a library, and worked on its full [WASM](https://github.com/input-output-hk/mithril/issues/1284) compatibility in a proof of concept. Additionally, the team kept working on the deterministic computation of transactions from immutable files, and fixed some unreachability issues on the release-mainnet aggregator.

Finally, they implemented new [Docker images](https://github.com/input-output-hk/mithril/issues/1272) that build the Mithril nodes on the devnet faster and fixed some regressions in the Mithril client CLI.

### CATALYST

This week in Project Catalyst, the team has been busy gearing up for Fund11 and preparing for participation at the Cardano Summit. More details on this will follow next week, so stay tuned! In case you missed it, you can check out the recording of the Catalyst town hall [here](https://youtu.be/WVD8u3ZM60M?list=PLnPTB0CuBOByRhpTUdALq4J89m_h7QqLk). If you haven’t already, register your wish to attend the next [town hall](http://bit.ly/catalyst-townhall).  
  
The technical updates for Catalyst this week include:

*   Preparation of the mobile app and backend for Fund11
    
*   Implementation of a new load testing framework to enhance testing capabilities
    
*   Open-source repositories setup for the new Catalyst Voices and Hermes projects.
    

Finally, to stay updated with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, members of the **Education** team are attending the Cardano Summit. The team are also gathering feedback on the recent Haskell course with ABC.

![](https://ucarecdn.com/4fb0ff52-7d92-4eb0-83e9-cae886f458e4/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

今週は多くのIOGチームがCardanoサミット2023に参加し、基調講演、パネル、マスタークラス、そして、豊富な製品やサービスを展示するブースで、この毎年恒例のイベントに貢献しています。詳しくは[こちらのブログ記事](https://iohk.io/jp/blog/posts/2023/11/02/input-output-global-at-cardano-summit-2023/)をご覧ください。 

**ネットワーキング**チームは[ブートストラップピア](https://github.com/input-output-hk/ouroboros-network/pull/4555)への取り組みを続け、CIプロセスを調査し、プロトコルと接続マネージャー機能をテストし、ouroboros-networkパッケージの新バージョンを[CHaP](https://github.com/input-output-hk/cardano-haskell-packages/pull/547)にリリースしました。

**コンセンサス**チームは2つの主要分野に焦点を当てました。まず、[生存可能なエクリプス期間](https://github.com/input-output-hk/ouroboros-consensus/pull/422)に対処しました。これは、[Genesis配信のサポート](https://github.com/input-output-hk/ouroboros-consensus/issues/427)に関する作業の一環です。次に、未来からの[ブロックの処理](https://github.com/input-output-hk/ouroboros-network/issues/4251)の強化に焦点を当てました。Alonzo期までメインネットと同期している[レガシーブロック](https://github.com/input-output-hk/ouroboros-consensus/issues/344)を使用したノードの運用に成功し、UTXO-HDブランチの開発を進めました。

メモリープールのスナップショットにおける不具合も[調査](https://github.com/input-output-hk/ouroboros-consensus/issues/465%23#issuecomment-1788685122)しました。この不具合は、台帳の更新を通じて解消され、予定されているノードv.8.6リリースで修正される予定です。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**はNamiを迎えました。2021年にAlessandro Konradが作成したノンカストディアル型ウォレットプラットフォームNamiは、Input Output Globalの製品ファミリーに加わりました。詳細は、[このブログ記事](https://www.lace.io/blog/lace-says-hello-to-nami?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog)をご覧ください。

選択した通貨へのトークン換算のサポートを向上させるために、データ取得の問題を一部[更新](https://twitter.com/lace_io/status/1719988643652059169?s=20)しました。 

LaceチームはCardanoサミット2023に参加し、コミュニティメンバーとの交流を目指しています。更新情報をお楽しみに。

### スマートコントラクト

**Plutus**ツールチームは、Marconi API、cardano-node-emulatorのテスト、ユーザードキュメントの改訂への取り組みを続けました。Plutus Coreチームは、Plutus Txの等価比較の効率を上げました。

**Marlowe**チームは、[getWithdrawalById](https://github.com/input-output-hk/marlowe-ts-sdk/pull/49)、[createWithdrawal](https://github.com/input-output-hk/marlowe-ts-sdk/pull/46)、[getWithdrawals](https://github.com/input-output-hk/marlowe-ts-sdk/pull/48)、[submitWithdrawal](https://github.com/input-output-hk/marlowe-ts-sdk/pull/47)、[createTransactionForContract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/43)を含むトランザクションバージョンをTS-SDKで複数作成しました。メインネットでビルド関連クエリのパフォーマンスを測定し、AikenベースのMarlowe[バリデーター](https://github.com/input-output-hk/marlowe-plutus/pull/3)を評価し、[Laceのサポート](https://github.com/input-output-hk/marlowe-ts-sdk/pull/52)を検討しました。[Runtime web 0.0.5.1](https://github.com/input-output-hk/marlowe-cardano/releases/tag/marlowe-runtime-web%40v0.0.5.1)ホットフィックスをリリースし、Marlowe RuntimeウェブURLに必要なJSON設定用[API 呼び出し](https://github.com/input-output-hk/marlowe-vesting/pull/10)を設定し、 Marlowe Docsのメインチュートリアルページでスターターキット動画の[クロスインデックス](https://github.com/input-output-hk/marlowe-doc/pull/180)を作成しました。 

べスティングDAppに[コントラクトIDとMarlowe Scanのリンク](https://github.com/input-output-hk/marlowe-vesting/pull/15)を追加し、[GETエンドポイント](https://github.com/input-output-hk/marlowe-playground/pull/51)を追加してMarlowe Playgroundの[機能](https://github.com/input-output-hk/marlowe-playground/pull/52)を改良し、URLからコントラクトをロードした後にBlocklyに移動[できるように](https://github.com/input-output-hk/marlowe-playground/pull/54)しました。

Marloweチームは今週Cardanoサミットで2つのワークショップを開催します。11月3日に行われる最初のワークショップ「Marlowe deep dive: build a DApp in 90 minutes（Marloweの詳細：DAppを90分で構築する）」では、DApp作成を実演しながらMarloweのツールスイートと安全機能を詳しく紹介します。2つ目のワークショップは「Marlowe 101: turn ideas into smart contracts（アイデアをスマートコントラクトに変換しよう）」で、11月4日に開かれます。このワークショップでは、ビジネスケースの観念化と技術アーキテクチャーについて議論しながら、スマートコントラクトの作成と実行について初心者にわかりやすく説明します。

### スケーリング

**Hydra**チームは既存の鍵の上書きを避けるために[gen-hydra-keys](https://github.com/input-output-hk/hydra/issues/1136)コマンドを修正し、書き換えられたhydra-tuiに関する問題を解消しました。ignored init tx通知用のdirt roadの実装にも取り組み、システムの堅牢性を向上させました。

[hydra-poll](https://github.com/cardano-scaling/hydra-poll)例用DAppの実装を含む、Cardanoサミットプレゼンの[準備](https://github.com/input-output-hk/hydra/issues/1109)を終えました。

ドバイのCardanoサミット2023に参加されるなら、現地時間本日（11月3日）14:00～15:30にAl Darルームで開かれる、Hydraマスタークラス「Developing Hydra and Mithril for scaling Cardano（HydraとMithrilの開発でCardanoをスケーリング）」をぜひチェックしてみてください。

**Mithril**チームは、P2P（ピアツーピア）ネットワークの[概念実証](https://github.com/input-output-hk/mithril/issues/1300)を使用したMithrilネットワークの分散化に引き続き取り組みました。ライブラリーとしての[Mithrilクライアント](https://github.com/input-output-hk/mithril/issues/1311)の適用を進め、概念実証で[WASM](https://github.com/input-output-hk/mithril/issues/1284)完全対応に取り組みました。不変ファイルからのトランザクションの決定的計算への取り組みを続け、release-mainnetアグリゲーターの到達不能性の問題を修正しました。

devnetでMithrilノードの構築を高速化する新しい[Dockerイメージ](https://github.com/input-output-hk/mithril/issues/1272)を実装し、MithrilクライアントCLIの不具合を修正しました。

### CATALYST

Project Catalystでは、Fund11の準備とCardanoサミットへの参加準備に追われました。詳細は来週以降となりますので、どうぞお楽しみに！見逃した場合は、[ここ](https://youtu.be/WVD8u3ZM60M?list=PLnPTB0CuBOByRhpTUdALq4J89m_h7QqLk)でCatalystタウンホールの録画を視聴できます。次回[タウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。  
  
Catalyst技術面の更新情報は次のとおりです。

*   Fund11用モバイルアプリとバックエンドの準備
    
*   テスト機能を強化するための新しい負荷テストフレームワークの実装
    
*   新しいCatalyst VoicesとHermesの各プロジェクト用にオープンソースリポジトリをセットアップ
    

[Catalyst Telegram](https://t.me/cardanocatalyst)案内チャネルに登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームはCardanoサミットに出席しています。ABCとのHaskellコースのフィードバックの収集も行っています。
