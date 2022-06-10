---
title: Weekly development report as of 2022-06-10
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d51111a2-94f8-49b8-9419-03da0cd61fac/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus teams** continued preparing for the Vasil hard fork. Work is proceeding well and the teams’ operational focus remains on delivering the hard fork efficiently and seamlessly. They are working on the integration program to ensure that the node and other components (from DB Sync to third-party APIs) are upgraded to be Vasil-compatible. 

The teams released node v.1.35.0-rc2 and a CLI including new Plutus capabilities (script referencing). This enabled the developer testnet, which is being tested by circa 40 projects building on Cardano. Also, the teams continue addressing the remaining issues caught in the extensive ongoing testing program.

The **networking** team started scoping out the work needed for the implementation of Eclipse and the Gossip protocol following the completion of the design phase. They also continued developing the TCP model for input endorser simulations, addressed various Vasil-related issues, started work on a value-adding feature for SPOs, and continued working towards the upcoming release of Stake Driven Peer Discovery (P2P). 

### WALLETS AND SERVICES 

The **Daedalus** team finished preparing the next Daedalus release, which includes support for Ledger Nano S Plus and Trezor firmware v.2.5.1. They continued working on the modification of the mnemonic entry component that will improve the user experience for right-to-left writing systems. The team made progress on the Desktop Wallet project and the user interface integration with multiple backends.

This week, Charles Hoskinson presented the demo of the **Lace** light wallet v.1.0 during the Community Event in Austin, TX. Visit the [Lace website](https://www.lace.io/?utm_campaign=Lace%20Platform&utm_source=Essential%20Cardano&utm_medium=blog%20post&utm_term=weekly%20dev%20report&utm_content=lace%20registration) to register your interest and find out when the wallet becomes available. 

The **Adrestia** team updated Adrestia components for the upcoming hard fork combinator event. They also prepared cardano-js-sdk for production and designed a new simple HTTP API on top of db-sync.

### SMART CONTRACTS

This week, the **Marlowe** team updated the Marlowe Run documentation, fixed the ‘Send To Simulator’ button issue in the Marlowe Playground, and improved timestamps’ presentation in the Playground. They also resolved the issue with decimal editing in the Marlowe Playground and changed default parameters for static analysis to match the simulator. 

Finally, they worked on the Marlowe Hackathon material and supported Marlowe Pioneers during the Q&A session on Discord. 

### BASHO (SCALING)

The **Hydra** team fixed abort validator issues, including some validator refactoring. They also made UX improvements by adding a contestation period timer to the TUI and allowing for manual fanout. Finally, they continued testing the Vasil developer testnet, investigated some bugs reported by the community, and triaged feature ideas into the backlog of tasks. 

### GOVERNANCE

This week, **Project Catalyst** has opened submissions for Fund9. If you have a great idea for a project and would like to explore funding opportunities, join the next [Town Hall](https://bit.ly/3rCicSR) or check out the innovation platform [here](https://cardano.ideascale.com). Submissions for both projects and challenge settings for Fund9 will close at the end of June. If you want to get involved but are not sure where to start, you can also play an important role in Project Catalyst’s governance by becoming a Proposal Assessor. As a reminder, there’s $16m ada available for innovation grants and ecosystem rewards in Fund9.

The **Project Catalyst** team is in Austin for Consensus this weekend. If you’re in town or attending Consensus, we’d love to meet you at the Cardano booth.

### STATISTICS TO DATE

![](https://lh4.googleusercontent.com/gf4--ip-O0jh178f6wxGWBaVD_yhQrMpR9616AFfzVDtqbt6bImc_uIq3MGppgFaERLxxRzounUTQhxdiV67KgyROGY555WkqxSfJSfXmgB7fEIwioQCcM-OuhYxG_IHXfYIesAhUOLcVS6B7Q)

### 週刊開発レポート　2022年06月10日

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilハードフォークの準備を続けました。作業は順調に進んでおり、業務上の焦点はハードフォークを効率的かつシームレスに実行することに当てられています。ノードと他のコンポーネント（DB SyncからサードパーティAPIまで）をVasil対応にアップグレードするための統合プログラムに取り組んでいます。 

ノードv.1.35.0-rc2と、新しいPlutus機能（スクリプト参照）を含むCLIをリリースしました。これは開発者テストネットで有効化され、Cardanoで構築されているc.40プロジェクトで査定されています。同時に、進行中の広範囲にわたるテストプログラムで特定された、残る不具合への対応も続けています。

**ネットワーキング**チームは、設計段階を完了したEclipseとGossipプロトコルの実装に必要な作業の検討に入りました。インプットエンドーザー用TCPモデルの開発を続け、Vasil関連のさまざまな問題に対処し、SPOの付加価値機能の作業を開始し、予定されているStake Driven Peer Discovery（P2P）に向けた作業を続けました。 

### ウォレットとサービス 

**Daedalus**チームは次回Daedalusリリースの準備を終えました。これには、Ledger Nano S PlusとTrezorファームウェアv.2.5.1のサポートが含まれます。引き続き、ニーモニック入力コンポーネントで、右から左に書く言語使用者の操作性を高めるための変更に取り組みました。Desktop Walletプロジェクト、およびユーザーインターフェイスと複数のバックエンドを統合する作業を進めました。

Charles Hoskinsonは、テキサス州オースティンでのコミュニティイベントで、**Lace**ライトウォレットv.1.0の実演を行いました。関心のある方は、[Laceウェブサイト](https://www.lace.io/?utm_campaign=Lace%20Platform&utm_source=Essential%20Cardano&utm_medium=blog%20post&utm_term=weekly%20dev%20report&utm_content=lace%20registration)に登録し、ウォレットの配信情報をお受け取りください。 

**Adrestia**チームは、予定されているハードフォークコンビネーターイベントに向け、Adrestiaコンポーネントを更新しました。cardano-js-sdkを本番環境にする準備、db-sync上に構築する新しいシンプルなHTTP APIの設計も行いました。

### スマートコントラクト

**Marlowe**チームはMarlowe Runのドキュメントを更新し、Marlowe Playgroundの「Send To Simulator」ボタンの不具合を修正し、Playgroundのタイムスタンプ表示を改良しました。Marlowe Playgroundで小数点の設定に関する問題を解消し、静的解析の初期設定パラメーターをシミュレーターに合わせて変更しました。 

Marloweハッカソンの資料に取り組み、DiscordのQ&AセッションでMarloweパイオニアをサポートしました。 

### Basho( スケーリング)

**Hydra**チームは、バリデーターのリファクタリングを含む、バリデーターに関する諸問題を修正しました。TUIにコンテステーション期間タイマーを追加し、手動ファンアウトを可能にしてUXを向上させました。Vasil開発者テストネットのテストを続け、コミュニティが報告したバグを調査し、機能のアイデアをタスクのバックログにトリアージしました。 

### ガバナンス

**Project Catalyst**はFund9の受付を開始しました。プロジェクト案があり、資金調達の機会に挑戦したい場合は、次回[タウンホール](https://bit.ly/3rCicSR)に参加するか、[こちら](https://cardano.ideascale.com)のイノベーションプラットフォームをチェックしてください。プロジェクトの提出とFund10のチャレンジ設定はともに6月末に締め切られます。参加したいがどこから始めていいかわからない場合は、提案審査員になることでProject Catalystのガバナンスにおける重要な役割を果たすこともできます。繰り返しますが、Fund9では、イノベーション資金とエコシステムの報酬に1600万ADAが用意されています。

**Project Catalyst**はこの週末オースティンで開催されているConsensusに参加しています。現地にいる方、Consensusに参加される方は、ぜひCardanoブースにお立ち寄りください。

### 現時点の統計

![](https://lh3.googleusercontent.com/et6VQL8tiA7cNr5Usd_GF2nENxkzz8Nc9NE_HdLPK3iTfqEsYpMKhDbiLIpIFDF44xZQn2NfMahEFxllbtN_19x2vWbn0joOhkpSFHzFTnnh7nmpOURZ1CyVFY-StuXJ3wT2epQCKBudGfklRw)
