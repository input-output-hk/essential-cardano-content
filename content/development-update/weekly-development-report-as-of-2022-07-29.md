---
title: Weekly development report as of 2022-07-29
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/680fdbeb-a6c0-4c8c-8e2c-ec72728dd958/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams worked on bug fixes found in node v.1.35.2 and are now preparing for node v.1.35.3 release. They also continued working on cryptographic primitives implementation after the Plutus cost model was updated on the Vasil testnet. 

Work is ongoing on UTXO HD integration tests. The **ledger** team reduced the running time of the LMDB variant of the OnDisk state machine tests, changed the default ledger backend for the node to be in-memory, and started elaborating an anti-difference prototype that should provide an alternative method for keeping track of sequences of differences. 

The **networking** team continued working on the Gossip and Eclipse evasion design. They also made progress working on typed-protocol re-design, diffusion tests, and deployment automation. Finally, they started preparing a single relay release and completed a review of the IOSim timeout API implementation.

### WALLETS AND SERVICES 

This week, the **Daedalus** team improved the anonymous analytics tracking and the new mnemonics entry. They are now working on the upcoming Daedalus release, which will include the latest node version. 

Work is ongoing on **Lace** desktop development. The team integrated Chromatic into the CI process, worked on the ‘Send’ and ‘Coin selection’ screens, and added a new ‘Wallet selection’ menu. 

### SMART CONTRACTS

This week, the **Plutus** team worked on improving new ledger interoperability cost models, debugging experience for script authors, and made progress on testing and documentation updating. 

They also updated the Plutus Tools to the latest node version, created a pre-release for plutus-apps v.1.0.0-rc1, and updated the plutus-contract emulator to work with Babbage era transactions. Finally, they worked on the PAB performance improvements.

The **Marlowe** team created scripts for Isabelle proof of editing and checking, implemented ACTUS contract type CEC, and connected the Marlowe chain index to the Cardano node. Finally, they created an outline of the Marlowe Core specification. 

### BASHO (SCALING)

This week, the **Hydra** team worked on issues uncovered after running a Hydra smoke test suite against the public testnet. They discovered some issues related to time handling, especially as the time to slot conversions have become stricter. The team is also working on the implementation of reference script usage and protocol specification updates with the research team. 

### GOVERNANCE

**Project Catalyst** is fast approaching the voting window for Fund9. Voting registration is still open but will close on August 4 when wallet snapshots are taken. To register to vote, download the Catalyst Voting App ([iOS](https://apps.apple.com/kg/app/catalyst-voting/id1517473397) and [Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&hl=en&gl=US)) and remember to keep both your pin and QR code safe as you’ll need them to cast your votes. Voting starts on August 11 and will be open for two weeks. There are over 1,000 proposals to vote on in Fund9. 

Governance updates are featured in July’s edition of Cardano’s 360, where we [dive into more detail about Project Catalyst](https://www.youtube.com/watch?v=mHHVaxkHFrE&t=666s) and the introduction of Liquid Democracy and dReps.

### ![](https://lh3.googleusercontent.com/s2AtuqEYti_pswZAdp1zLvzwnDVsDtXUH37UdSlPHNumR0WpAba0CJM-2-hNU6NdNfJjAZoQHZj8e3MEioaHpIoredPgh-vSg1YJjG6Bc25jmytIg1MvPMOdmzSRhLDCBJ3NtDXyC3uAak25J3OxQS8)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームは、ノードv.1.35.2で見つけたバグを修正し、現在ノードv.1.35.3のリリース準備に入っています。VasilテストネットのPlutusコストモデル更新後の暗号プリミティブ実装作業は続いています。 

UTXO HD統合テストは進んでいます。**台帳**チームはOnDiskステートマシンテストのLMDBバリアントの実行時間を短縮し、ノードのデフォルト台帳バックエンドをインメモリーに変更し、差異防止プロトタイプの作成を開始しました。これは差異のシーケンスを追跡するための代替方法を提供することになります。 

**ネットワーキング**チームは、GossipとExlipse回避の設計を続けました。型付きプロトコルの再設計、拡散テスト、デプロイ自動化の作業は進行しています。シングルリレーリリースの準備を始め、IOSimタイムアウトAPI実装のレビューを終えました。

### ウォレットとサービス 

**Daedalus**チームは匿名分析追跡と新しいニーモニック入力を改良しました。現在最新ノードバージョンを含むDaedalusリリースに取り組んでいます。 

**Lace**デスクトップの開発作業は進行中です。ChromaticをCIプロセスに統合し、「送信」と「コイン選定」画面に関する作業を行い、「ウォレット選択」メニューを新たに追加しました。 

### スマートコントラクト

**Plutus**チームは新しい台帳相互運用性コストモデルの改良、スクリプト作成者の操作性のデバッグに取り組み、テストとドキュメントの更新を進めました。 

Plutus Toolsを最新ノードバージョンに更新し、plutus-apps v.1.0.0-rc1のプレリリースを作成し、plutus-contractエミュレーターをBabbage期のトランザクションで作動するように更新しました。PABのパフォーマンス改良にも取り組みました。

**Marlowe**チームはIsabelleの編集および確認証明用スクリプトを作成し、ACTUSコントラクトタイプCECを実装し、MarloweチェーンインデックスをCardanoノードに接続しました。Marlowe Core仕様の概要を作成しました。 

### Basho( スケーリング)

**Hydra**チームは、パブリックテストネットにおけるHydraスモークテストスイートの実行で明らかになった問題に取り組みました。とくにスロット変換までの時間が厳しくなったため、時間処理に関する問題が発見されました。研究チームとともに、参照スクリプトの使用の実装とプロトコル仕様の更新作業にも取り組みました。 

### ガバナンス

**Project Catalyst**はFund9の投票がまもなく開始されます。有権者登録はまだ受付中ですが、ウォレットスナップショットが実施される8月4日（日本時間5日）に締め切られます。有権者登録をするには、Catalyst Votingアプリ（[iOS](https://apps.apple.com/kg/app/catalyst-voting/id1517473397)と[Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&hl=en&gl=US)）をダウンロードしてください。PINとQRコードを必ず安全な場所に保管してください。投票時に必要になります。投票期間は8月11日から2週間です。Fund9では1,000を超える提案が投票対象です。 

  
ガバナンスの更新情報は、7月のCardano360で紹介されました。ここでは[Project Catalystの詳細](https://www.youtube.com/watch?v=mHHVaxkHFrE&t=666s)、そして液体民主主義とdRepの導入について紹介しています。ぜひご覧ください。
