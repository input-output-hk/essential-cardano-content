---
title: Weekly development report as of 2022-07-22
tags:
  - Development
  - Weekly development updates
  - Cardano
  - Statistics
url: ""
image: https://ucarecdn.com/020ab320-9bb3-483d-9b74-7a83808a49e2/
image_text: ""
---

### CORE TECHNOLOGY

The **node, ledger, and consensus** teams worked on the upcoming release of node v.1.35.2. This version will bring improvements and bug fixes found in the previous node versions during Vasil testing. 

The teams continue testing Vasil functionality, working closely with DApps and projects building on Cardano. The Plutus V2 cost model was temporarily removed from the Cardano testnet while a potential issue raised by the community was properly investigated. Plutus V2 testing has instead continued using the Vasil devnet. The V2 cost model will be restored to the Cardano testnet at the turn of the next testnet epoch on Saturday.  

Work is ongoing on UTXO HD development; the **ledger** team reduced the running time of the LMDB variant of the OnDisk state machine tests, fixed the query by address and query by TxIn commands, and worked on some disk usage enhancements.

The **networking** team continued working on the Gossip and Eclipse evasion design. They finished deployment automation of the networking mainnet and testnet nodes and continued working on diffusion simulation and dynamic block production. 

### WALLETS AND SERVICES 

This week, the **Daedalus** team fixed an issue related to funds delegation that occurred if the wallet was not fully synced. 

They also worked on the **Lace** desktop application by setting up the required libraries for Electron end-to-end testing. The team made progress mapping the address property of the ObservableWallet instance provided by cardano-js-sdk with the data from the cardano-wallet backend. They also integrated Chromatic into the CI process and set up the required linters for checking the code quality. The team continues investigating a new code structure to enable the Lace desktop and browser apps to reuse code between the repositories. Finally, they added a cardano-node sync status and Chrome DevTools to the Lace application so that developers can easily track and debug variables.

The **Adrestia** team prepared the Adrestia components for the upcoming Vasil hard fork. Specifically, they're working on cardano-js-sdk to get it production-ready, and finishing the implementation of the HTTP API on top of db-sync. Finally, they resumed work on the multisig feature for cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team worked on improving the ledger interoperability around new cost models and on the debugging experience for script authors. They released [plutus-apps v.0.1.0](https://github.com/input-output-hk/plutus-apps/releases), worked on updating the plutus-contract emulator to support Babbage transactions, and progressed on the PAB memory usage improvements when syncing with mainnet and testnet environments. Finally, they continued working on testing and documentation improvements.

The **Marlowe** team investigated database migration tools, created a detailed DB schema for Marlowe chain index, and wrote a filtered chain sync protocol specification. 

### BASHO (SCALING)

This week, the **Hydra** team updated `abortTx` to enable the use of reference scripts. They are now working on testing, configuration, and tooling addition. The team created a semi-automated [smoke test](https://en.wikipedia.org/wiki/Smoke_testing_(software)) and successfully ran it in Vasil testnet and devnet environments. Finally, they continued working on documentation improvements and bug fixes. 

### GOVERNANCE

This week, **Project Catalyst** entered its final QA stage, where Veteran Proposal Assessors (vPAs) will review all assessments and any flags raised during the early QA stage. Project Catalyst has had over 1,000 proposals submitted for community consideration in Fund9, and we’re getting very excited to see which ones will make it through to funding.  

Project Catalyst is approaching the final stretch for Fund9. Voting starts on August 11th and will run for two weeks up to August 24th; an important reminder - voter registration ([Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&hl=en&gl=US) and [iOS](https://apps.apple.com/kw/app/catalyst-voting/id1517473397)) is now open and will close on August 4th (wallet snapshot). During registration, you will create a PIN and be prompted to download your QR code - make sure you remember your PIN and keep your QR code safe as you’ll need these to vote.   

### ![](https://lh5.googleusercontent.com/-PCTToG5yrAb5JuPmZz1psx4o7ogZAFMz4eIGpn87QwouCc4GVno4HkbJ11iOVJ8hEAHNqUntj2OJOSvaL3v0LoGm5109du0K9BfNta_WF_tqDAXtzv1YFPezm8-TX6setjwYe_d8oPe0Wur2Jf5-mk)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームは、予定されているノードv.1.35.2のリリースに取り組みました。本バージョンには改良と、Vasilテストの際に前ノードバージョンで見つかったバグの修正が施されています。 

各チームとも、Cardanoに構築されているDAppやプロジェクトと協力しながら、Vasil機能のテストを続けています。Plutus V2コストモデルは、コミュニティから提示された問題の可能性をしっかりと調査する間、一時的にCardanoテストネットから取り除かれました。Plutus V2のテストは、代わりにVasil DevNetで継続されます。V2コストモデルは、次のテストネットエポックの変わり目である土曜日に、Cardanoテストネットに復元されます。  

UTXO HD開発作業は進んでいます。**台帳**チームはOnDiskステートマシンテストのLMDBバリアントの実行時間を短縮し、アドレスによるクエリおよびTxInコマンドによるクエリを修正し、ディスク容量を高める作業を行いました。

**ネットワーキング**チームは、GossipとExlipse回避の設計を続けました。メインネットとテストネットのネットワーキングノードの自動化のデプロイを完了し、拡散シミュレーションと動的ブロック生成に関する作業を続けました。 

### ウォレットとサービス 

**Daedalus**チームは、ウォレットが完全に同期されていない場合に生じる、資金の委任に関する不具合を修正しました。 

**Lace**デスクトップアプリケーションで、Electronのエンドツーエンドテストに必要なライブラリーをセットアップしました。cardano-wallet backendからのデータとともにcardano-js-sdkによって提供されるObservableWalletインスタンスのアドレスプロパティのマッピングに進展が見られました。ChromaticをCIプロセスに統合し、コードクオリティの確認に必要なLinterを設定しました。Laceのデスクトップとブラウザーアプリがリポジトリ間でコードを再利用できるようにする新しいコード構造の調査は続けています。開発者が簡単に変数を追跡、デバッグできるように、cardano-node同期ステータスとChrome DevToolsをLaceアプリケーションに追加しました。

  
**Adrestia**チームは、予定されているVasilハードフォークに向け、Adrestiaコンポーネントを準備しました。具体的には、cardano-js-sdkを本番環境にするための作業を行っており、db-sync上のHTTP APIの実装を仕上げています。

cardano-walletのマルチシグ機能の作業を再開しました。

### スマートコントラクト

**Plutus**チームは、新しいコストモデルを中心とした台帳の相互運用性の改良と、スクリプト作成者のデバッグの操作性に取り組みました。[plutus-apps v.0.1.0](https://github.com/input-output-hk/plutus-apps/releases)をリリースし、Babbageトランザクションをサポートするためのplutus-contractエミュレーターの更新、メインネットとテストネット環境を同期する際のPABメモリー使用の改良に取り組みました。改良部分のテストとドキュメンテーションを継続しました。

**Marlowe**チームは、データベース移行ツールを調査し、Marloweチェーンインデックス用に詳細なDBスキーマを作成し、フィルタリングしたチェーン同期プロトコル仕様を作成しました。 

### Basho( スケーリング)

**Hydra**チームは、参照スクリプトを使用できるよう`abortTx`を更新しました。現在、テスト、設定、ツールの追加に取り組んでいます。半自動化した[スモークテスト](https://e-words.jp/w/%E3%82%B9%E3%83%A2%E3%83%BC%E3%82%AF%E3%83%86%E3%82%B9%E3%83%88.html%23:~:text=%E3%82%B9%E3%83%A2%E3%83%BC%E3%82%AF%E3%83%86%E3%82%B9%E3%83%88%E3%81%A8%E3%81%AF%E3%80%81%E9%96%8B%E7%99%BA,%E3%82%92%E3%81%96%E3%81%A3%E3%81%A8%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%80%82)を作成し、VasilテストネットとDevNet環境で無事に実行しました。ドキュメントとバグの修正作業は続けています。 

### ガバナンス

**Project Catalyst**は最終QA段階に入りました。ここではベテラン提案査定担当者（vPAs）がすべての査定結果と、初期のQA段階で発生したフラグを確認します。Project Catalyst Fund9では1,000を超える提案がコミュニティの考察を受けるために提出され、どの案が資金調達を得ることになるかが楽しみです。  

  
Project CatalystはFund9の最終局面に近づいています。投票は8月11日に開始され、締め切りは2週間後の8月24日です。有権者登録（[Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&hl=en&gl=US)および[iOS](https://apps.apple.com/kw/app/catalyst-voting/id1517473397)）は現在可能で、締め切りは8月4日（ウォレットスナップショット）です。登録時にはPINを作成し、QRコードのダウンロードが指示されます。投票時に必要となりますので、PINを忘れないようにし、QRコードは安全に保管してください。
