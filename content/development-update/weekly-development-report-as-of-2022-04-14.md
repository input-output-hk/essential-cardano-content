---
title: Weekly development report as of 2022-04-14
tags:
  - Weekly development updates
  - Development
url: ""
image: ""
image_text: ""
---

### CORE TECHNOLOGY

This week, the team continued working on the block diffusion pipelining and node performance improvements. They also ran property tests for UTXO HD and fixed several errors. They are now working on refining and adapting more tests, refactoring the code to accommodate the fixes, and assessing the performance of the in-memory backend. April’s [mid-month development update](https://www.youtube.com/watch?v=B0tojqvMgB0) is going live on Thursday (April, 14th), featuring the latest progress on ledger development. 

The networking team reviewed node-to-node and node-to-client protocol versions and removed obsolete ones. They updated the cardano-ping mini-protocol to support available versions and continued working on IOSim timeouts and typed-protocols refactorization. 

They also identified (and designed a fix for) a security issue within IPv6 deployments and communicated it to the SPO community. Finally, the team continued working on the design of the Gossip Protocol and Eclipse Evasion, which will drive forward a more robust and decentralized P2P network.

### WALLETS AND SERVICES 

This week, the Daedalus team released Daedalus v.4.9.1. They also updated some packages and resolved several vulnerability issues. The team converted the Daedalus Nix infrastructure to use Nix Flakes, which assures compatibility with the cardano-wallet, and also migrated the Daedalus project to Webpack 5, allowing for faster reload when coding new features. They also polished the analytics integration to be used in future versions of Daedalus, and fixed a bug to allow for the correct deletion of the Daedalus installer file after the upgrade.

The Adrestia team continued working on a new transaction workflow to add token minting and burning, and also worked on DB layer redesign and the addition of a ‘light’ mode to cardano-wallet. Finally, work is still ongoing on cardano-js-sdk MVP.

### SMART CONTRACTS

This week, the Plutus team continued working on Plutus Cardano Improvement Proposals (CIPs) and updated documentation. They also made improvements to the chain index and updated the [contract model tutorial](https://github.com/input-output-hk/plutus-apps/commit/03ba6b7e8b9371adf352ffd53df8170633b6dffa) within Plutus apps. 

The Marlowe team added test support for contract timeouts, fixed some duplicated contract cards, and added unit testing to the front-end execution model. They also fixed the contract carousel in the Marlowe dashboard when reopening and deployed a copy of Cardano Explorer that points to the testnet. Finally, the team made several changes to contracts to correctly reflect balances and metadata. 

### BASHO (SCALING)

The Hydra team worked on measuring script cost execution of the various on-chain scripts driving the Hydra protocol. A new command-line option was also added to the Hydra node to allow starting a Head from a point in the past - previously, Hydra nodes would only start from the most recent chain tip. This gives ways for users to restart their Hydra node and recover some state in the past if needed.

The team also worked to provide more resilience to chain forks (e.g. due to on-chain slot battles). Information on the blockchain is only eventually immutable and because of the distributed nature of the protocol, recent information received from a node may be overridden non-predictably. DApps such as Hydra must therefore acknowledge those changes and react accordingly to maintain an internally consistent state.

### GOVERNANCE

Fund8 is entering its voting stage next Thursday (21st April), where ada holders will vote on hundreds of projects ranging from big to small, spanning dozens of countries. 

![](https://lh5.googleusercontent.com/6TOh49hGcucr2mh7H0P6-WVnI4mJB3kHLtzbEur8UZv3wgZbuzEIMsFWjOtWvyJRrdyRh9DC9P2Omqqlr7848sLir8lQY1I4Ds75lU4PjVASWNjWdD0px5ZqMaASHciULP_F9UqT)

Applications to join the first cohort of dReps reopened and will stay open for a further week. Starting in early May, the team will be hosting a series of workshops to share and discuss what it means to be a dRep and how it will work. The first cohort will be delegation pioneers. Users can register their interest now by [joining the first dRep cohort](https://bit.ly/3rSyHvP) or find out more details in the recent [blog post](https://iohk.io/en/blog/posts/2022/04/11/introducing-the-concept-of-delegate-representatives-dreps/). 

### STATISTICS TO DATE

![](https://lh6.googleusercontent.com/98DYtmgygS3ynRAdoSgA4SYoR3C-5lvRuEkLeHIMOuxD8Nuf6ZI5hXtyBKaooNW_edb8Nrlc1bYJIzgZ2PcAjSGEMxvGRKmKMYY2MKRIHTxZofxL5fKI8324VEcHIwrBjwcIOXm1)

### 週刊開発レポート　2022年04月14日

### コアテクノロジー

引き続き、ブロック拡散パイプラインとノードパフォーマンスの改善に取り組みました。UTXO HDのプロパティテストを実行し、複数のエラーを修正しました。現在は、より多くのテストの調整と適用、修正に合わせたコードのリファクタリング、インメモリーバックエンドのパフォーマンス評価に取り組んでいます。4月の[月半ば開発更新情報](https://www.youtube.com/watch?v=B0tojqvMgB0)は4月14日木曜に公開されます。ここでは台帳開発の最新進捗情報が紹介されています。 

ネットワーキングチームは、node-to-nodeとnode-to-clientのプロトコルバージョンをレビューし、使用されなくなったものを削除しました。利用可能なバージョンをサポートするようcardano-pingミニプロトコルを更新したほか、引き続きIOSimタイムアウトと型付きプロトコルのリファクタリングに取り組みました。 

IPv6開発内のセキュリティ問題を特定（および修正を設計）し、SPOコミュニティにこの旨を知らせました。ゴシッププロトコルとEclipse回避への取り組みも続けました。これはP2Pネットワークの堅牢性と分散性を促進します。

### ウォレットとサービス 

DaedalusチームはDaedalus v.4.9.1をリリースしました。いくつかのパッケージを更新し、一部の脆弱性を解消しました。Daedalus Nixフレークを使用するためにDaedalus Nixのインフラを変更し、cardano-walletとの互換性を確保しました。DaedalusプロジェクトをWebpack 5に移行して、新機能をコーディングした際のリロード速度を上げました。将来のDaedalusバージョンで使用できるようにアナリティクス統合を強化し、Daedalusのアップグレード後にインストーラーファイルを正しく削除できるよう、バグを修正しました。

Adrestiaチームは、トークンのミントとバーンを加えた新しいトランザクションワークフローに関する作業を続け、DB層の再設計とcardano-walletへの「ライト」モードを追加する作業に取り組みました。cardano-js-sdk MVPへの取り組みはいまだ進行中です。

### スマートコントラクト

Plutusチームは、引き続きPlutus CIP（Cardano改善提案）に取り組み、ドキュメントを更新しました。チェーンインデックスを改良し、plutus-appsの[コントラクトモデルチュートリアル](https://github.com/input-output-hk/plutus-apps/commit/03ba6b7e8b9371adf352ffd53df8170633b6dffa)を更新しました。 

Marloweチームは、コントラクトタイムアウトのテストサポートを追加し、コントラクトカードの重複を修正し、フロントエンドの実行モデルにユニットテストを追加しました。Marloweダッシュボードを再開したときのコンタクトカルーセルを修正し、テストネットを指定するCardanoエクスプローラーのコピーをデプロイしました。残高とメタデータを正しく反映するよう、コントラクトに複数の変更を加えました。 

### Basho( スケーリング)

Hydraチームは、Hydraプロトコルを動かすさまざまなオンチェーンスクリプトの実行コストの測定に取り組みました。新しいコマンドラインオプションもHydraノードに追加し、これまで最後のチェーンチップからしか起動できなかったHydraノードを過去の任意の点から起動できるようにしました。これでユーザーは、必要に応じてHydraノードを再起動し、過去のステータスを復元することができるようになります。

チェーンフォークの回復力を向上させる取り組みを行いました（オンチェーンのスロットバトルのためなど）。ブロックチェーンの情報は最終段階で初めて不可変となり、分散しているというプロトコルの性質上、ノードから最近受け取った情報は予想外に上書きされる場合があります。したがって、HydraのようなDAppは、内的に一貫したステータスを維持するために、こうした変更を通知し適切に反応させる必要があります。

### ガバナンス

Fund8は来週木曜（4月21日）に投票段階に入り、ADA保有者は数十か国にもわたる大小合わせて数百を数えるプロジェクトに投票することになります。 

![](https://lh6.googleusercontent.com/QdtmegtsNxLAY-ZhRjAfvhyhC9POCyDr8NxCuOMKWudywVEwLaxfd3TckiFhgiMGffsutZmC6evi0CvB7Idbb7jYvpsHWFpyQ8G0hU5hZm2EOvevClK7gOGHRqonta3x1Gajnxc6)

dReps初回コホートへの参加申請受付を再開し、もう1週間受け付けます。5月初頭に開始し、一連のワークショップでdRepsになることの意義と仕組みに関する説明と話し合いを行います。初回コホートは代表者パイオニアとなります。現在、ユーザーは[最初のdRepsコホートへの参加](https://bit.ly/3rSyHvP)意思を登録することができます。詳細は最近の[ブログ記事](https://iohk.io/jp/blog/posts/2022/04/11/introducing-the-concept-of-delegate-representatives-dreps/)をご覧ください。 

### 現時点の統計

![](https://lh5.googleusercontent.com/e0SZBls-dctAq4qffdnaP9a0N9jxuwrfdJdFP6r8ateiWh_PbMWbDrl1sTfBShd3SINyLy9dGxDGGSx2CxvclJKYcaeNiRNNyUYXZaCtXpEMINXyb5lkVCuiJLO6lhlDak7YoY4t)
