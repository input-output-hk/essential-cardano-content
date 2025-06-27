---
title: Weekly development report as of 2025-06-27
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/e4fc0f20-ded7-473b-8b09-bcb163cca8c7/
image_text: Weekly development report as of 2025-06-27
---

### ECOSYSTEM UPDATES

Cardano has reached another development milestone with 2,004 projects now building on the platform. Transaction volume also saw a steady rise, surpassing 110.84 million, representing a 0.19% growth in on-chain activity.

On the development front, the network now supports 10.83 million native tokens under 217,242 token policies. Smart contract infrastructure continues to mature, with 138,683 Plutus scripts deployed. Governance also saw an uptick, with 1,374 DReps, including 974 active DReps. Notably, developer activity surged this week, with 353 GitHub commits, a sharp 68% rise.

In other news:

*   [NMKR](https://x.com/nmkr_io/status/1938251126110921067) launched Sokosumi, an AI agent marketplace.
    
*   [Midnight](https://x.com/MidnightNtwrk/status/1937150983366225942)’s tokenomics paper has been published, offering new insights into the network’s economic model.
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1936046670468289015) confirmed that the Cardano Summit 2025 will be held this November in Berlin.
    

### CORE TECHNOLOGY

This week, the **Consensus** team enhanced the Haskell implementation of the Leios simulator by adding support for [late input block inclusion](https://github.com/input-output-hk/ouroboros-leios/pull/413). They also held the [Consensus Working Group call](https://drive.google.com/file/d/1k5POQe05Ov2G0JKZdlB_tO-I_N04FADO/view?usp=sharing), discussing the [proposed tie-breaker](https://github.com/IntersectMBO/ouroboros-consensus/pull/1548) change, which is now pending review by the Technical Steering Committee.

Additionally, the team released [cuddle](https://hackage.haskell.org/package/cuddle) on Hackage, a helpful utility library. They made significant improvements to resource management in UTXO-HD, optimizing [handle usage](https://github.com/IntersectMBO/ouroboros-consensus/pull/1563) and exposing a configurable option for setting the maximum number of [open handles](https://github.com/IntersectMBO/cardano-node/pull/6256). They incorporated further [resource management enhancements](https://github.com/IntersectMBO/ouroboros-consensus/pull/1564) in UTXO-HD.

Lastly, they implemented new queries: one retrieves the [maximum supported](https://github.com/IntersectMBO/ouroboros-consensus/pull/1562) major protocol version, and another updates the \`[GetPoolDistr](https://github.com/IntersectMBO/ouroboros-consensus/pull/1540) `and` [GetStakeDistribution](https://github.com/IntersectMBO/ouroboros-consensus/pull/1540)\` queries to provide additional information.

### WALLETS AND SERVICES

The Lace team has released [Lace v.1.24](https://www.lace.io/blog/lace-1-24-0-release), delivering three headline upgrades that move the wallet closer to a seamless, multichain, user-centric experience:

*   Bitcoin mainnet support. After a successful external audit, you can now hold and transact BTC directly in Lace with the same security model that protects your ada.
    
*   Handle support. Full integration with Handles eliminates copy-and-paste address errors when sending and receiving assets.
    
*   Tempo.vote integration. Lace now supports delegation and voting through [Tempo.vote](https://tempo.vote/), making Cardano governance just a few clicks away.
    

Update today to manage BTC, user-friendly payment handles, and cast on-chain votes, all from one wallet.

### SCALING

This week, the Mithril team focused on implementing the publisher and consumer for the DMQ network using the \`[n2c local message submission](https://github.com/input-output-hk/mithril/issues/2539) `and` [n2c local message notification](https://github.com/input-output-hk/mithril/issues/2540)\` mini-protocols from the Pallas library. The team also focused on [stabilizing the Cardano database v2](https://github.com/input-output-hk/mithril/issues/2577) backend within the Mithril client CLI and library. Additionally, they initiated the implementation of certificate chain synchronization in the follower aggregator and completed refactoring the `mithril-common` crate.

Finally, they started upgrading the repository to Rust 2024 edition and continued refactoring the STM cryptographic library.

The **Hydra** team released [Hydra v.0.22.0](https://github.com/cardano-scaling/hydra/releases/tag/0.22.0), added Blockfrost-compatible smoke tests, and introduced a convenience flag that derives the `hydra-scripts-tx-id` parameter directly from the `--network` argument. While mapping out the [2025–2026 roadmap](https://chatgpt.com/c/6722a516-6f74-800b-9ae0-cfc54b6e5b61#:~:text=mapping%20out%20the-,2025%E2%80%932026%20roadmap,-and%20continuing%20Glacier) and continuing Glacier-drop support, the team encountered a challenging [deadlock issue when loading large state](https://github.com/cardano-scaling/hydra/issues/2089) and opened a follow-up [issue tracking this problem](https://github.com/cardano-scaling/hydra/issues/2086). They are preparing a patch release, v.0.22.1, to address the newly identified issues.

### VOLTAIRE

The community of ada owners has voted in favor of the governance action regarding the Intersect budget. The next step is to initiate treasury withdrawals. As the smart contract framework continues to advance, the Intersect developers are finalizing the configurations necessary to submit the treasury withdrawal governance actions. Feedback and discussion are welcome through the Intersect [Discord](https://mpc.intersectmbo.org/e3t/Ctc/ZX+113/d5bx9l04/VVvNZ27TWlt0W6gNp7r4ryLvQW197v5Z5y1LfgN1vWRrH3lYMRW69sMD-6lZ3plW7QPxWK2TWq1ZW3wYnrh7JJNbFW4ZxJ2X9hVvYfVy9Kym6VdPv-W2whbDH7VclJpW8mflGF1Sj0jPW1r8dd45VhZ_vW3WpDl44tfpKNN2q6QbZyYTRdW69JKw33FvYG3N3p0pRbyTrgqW93BdpS3RKwWHW2STF2X3RTJpKW5zgbXx82pjxWN5KfPcS9mtznW1ZWfY134KTKgW1qlBrD121P73W1shn6C3S9N-SN74ryBdmJ2_MW5PHrg05hwLPFf7y37Y004) server, [Twitter (X](https://mpc.intersectmbo.org/e3t/Ctc/ZX+113/d5bx9l04/VVvNZ27TWlt0W6gNp7r4ryLvQW197v5Z5y1LfgN1vWRrH3lYMRW69sMD-6lZ3kRW1-fyps2dBnK3W2r8vWL7xMBTQW68BpGm7P9W68W99kvgG8PymjGVg2sL751VRTgW4WHTpZ2gYTtYW5-lKP075r1-MW8DS-SX8wLWMJW75kxCc3CfLxZW2FfJJf4n5q-QW19cw8G5zDsWQW3k9VJr88ttg-N4vmKg3F-bXTW5Jlf5q60rQTYW6PrSgd1Rgz4bW4zwhNq2zwQDvW1npXj735B873W5qvBtj7vn0_TVbvB8K4t-T9vW1Y6KYv2bNX3YdsPNB204)), and [LinkedIn](https://mpc.intersectmbo.org/e3t/Ctc/ZX+113/d5bx9l04/VVvNZ27TWlt0W6gNp7r4ryLvQW197v5Z5y1LfgN1vWRr45kvg0W50kH_H6lZ3nBW5Zb1dj50pX8SW6yKFYn772q99W8jFTy263LZ6XW5qT7058W26_0W5lrLqs7t7JzBN9bJ2zzwNsZzW223B3N1qV4TFW1b1sfp7BZwtDW3qP-Zz3cMs7rW3cd3BH2ZdyBmN12mw2s_slBkW7V8CH_1scZRDW672s-v8BBlXWVl2KBB6hrpq2W8V2c2p2HcZ_yW58sgXg155Y5lVrQZ_t7HJBpCW6kF7wj5TJGHTVP98zV1lcXVBW4YB14j3yb6xRVQ74D69l7YDcW7LFLYM1XVNB8W4HfNG23zw7S8W8F1g8v4SXX6VW3lvbBk7zc3X_W4xjb4K7_wSdxW9hV01n6g-xGjW3byHfq3x_wnQW95MHhX3GZqSqW1BnsYb6pm7fSW5Shdr03rkhf_W6HfnzS618v2kdhQpNT04). Your input is crucial in shaping the governance infrastructure to best serve the community.

### CATALYST

The team is just six Town Halls away from reaching the milestone of 200. This week, the Catalyst team hosted Town Hall #194 and welcomed a special guest: Janis Aguilar, Head of the Acceleration Program at CV VC. Their Fund13 proposal aims to address the shortage of entrepreneurial talent in the Cardano ecosystem. Janis joined to discuss the progress of the program and what to expect in the future.

The team also shared important Fund14 updates, including the release of the much-anticipated category briefs. These cover:

*   Cardano open: Ecosystem
    
*   Cardano open: Developers
    
*   Cardano use cases: Concepts
    
*   Cardano use cases: Partners and products.
    

The update also outlined the funding amounts allocated for each category, along with helpful tips on what to do and what to avoid when preparing proposals. A [recording of the session is available](https://x.com/Catalyst_onX/status/1937919142486806927), or you can refer to the [Fund14 launch guide](https://projectcatalyst.io/f14launchguide.pdf) for more information.

### EDUCATION

This week, the education team successfully hosted the Cardano Days event at the Institute of Science Tokyo. They will also participate in the local Cardano Community event on Friday, June 27. 

Work is ongoing for the Mastering Cardano initiative and the Cardano Education Program (CEP). This program will consist of a series of self-paced learning modules that cover all aspects of Cardano, including recommended learning paths and optional additional modules.

![](https://ucarecdn.com/7c027dc8-e0e8-4e04-bb1b-10c8fc31a859/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

Cardanoで構築されているプロジェクト数は2,004となり、新たなマイルストンを達成しました。トランザクション数も堅調な伸びを見せ、オンチェーンアクティビティで0.19%増の1億1,084万を超えました。

開発では、現在ネットワークがサポートするネイティブトークンは1,083万で、21万7,242のトークンポリシーが発行されています。スマートコントラクトのインフラも成長を続け、13万8,683のPlutusスクリプトがデプロイされました。ガバナンスも伸びており、DRepは1,374人、うちアクティブなDRepは974人を数えます。開発者の活動も、GitHubコミット数353、68%増という目覚ましい伸びを見せました。

その他のニュース：

●    [NMKR](https://x.com/nmkr_io/status/1938251126110921067)AIエージェントマーケットプレイスSokosumiを立ち上げ

●    [Midnight](https://x.com/MidnightNtwrk/status/1937150983366225942)のトークノミクスに関する論文公開、このネットワークの経済モデルに関する新たな洞察を提供

●    [Cardano財団](https://x.com/Cardano_CF/status/1936046670468289015)が11月ベルリンでのCardanoサミット2025開催を公布

### コアテクノロジー

**コンセンサス**チームは[遅延したインプットブロックの包含](https://github.com/input-output-hk/ouroboros-leios/pull/413)のサポートを追加してLeiosシミュレーターのHaskell実装を強化しました。[コンセンサスワーキンググループ会議](https://drive.google.com/file/d/1k5POQe05Ov2G0JKZdlB_tO-I_N04FADO/view?usp=sharing)を開き、[提案されたタイブレーカー](https://github.com/IntersectMBO/ouroboros-consensus/pull/1548)の変更を議論しました。これは現在TSC（技術運営委員会）によるレビューを待っています。

有用なユーティリティライブラリーのHackageに[cuddle](https://hackage.haskell.org/package/cuddle)をリリースしました。UTXO-HDにおけるリソース管理を大幅に改良しました。[ハンドルの使用](https://github.com/IntersectMBO/ouroboros-consensus/pull/1563)を最適化し、[オープンハンドル](https://github.com/IntersectMBO/cardano-node/pull/6256)の最大数を設定できる設定可能なオプションを公開しました。UTXO-HDにさらなる[リソース管理強化](https://github.com/IntersectMBO/ouroboros-consensus/pull/1564)を組み込みました。

新しいクエリを実装しました。1つは[サポートされる最大](https://github.com/IntersectMBO/ouroboros-consensus/pull/1562)メジャープロトコルバージョンを取得するもので、もう1つは、追加情報を提供するために\`[GetPoolDistr](https://github.com/IntersectMBO/ouroboros-consensus/pull/1540)`と`[GetStakeDistribution](https://github.com/IntersectMBO/ouroboros-consensus/pull/1540)\`を更新するクエリです。

ウォレットとサービス

Laceチームは[Lace v.1.24](https://www.lace.io/blog/lace-1-24-0-release)をリリースしました。このバージョンでは、ウォレットをシームレスなマルチチェーンの、ユーザー中心のエクスペリエンスへとさらに近づける、3つの主要なアップグレードが提供されています。

*   ビットコインのメインネットサポート。外部監査が成功したことで、LaceウォレットでBTCを直接保持し、取引できるようになりました。ADAを保護しているのと同じセキュリティモデルで、BTCも安全に扱えます。
    
*   ハンドルサポート。Handlesの完全な統合により、資産を送受信時におけるアドレスのコピーアンドペーストに伴うエラーを排除します。
    
*   Tempo.voteの統合。Laceは[Tempo.vote](https://tempo.vote/)を介して委任と投票をサポートするようになりました。Cardanoガバナンスに数クリックで参加できます。
    

今すぐ更新して、BTCの管理、ユーザーフレンドリーな支払いハンドル、オンチェーン投票のすべてを1つのウォレットから行ってください。

### スケーリング

Mithrilチームは、DMQネットワーク用のパブリッシャーとコンシューマーの実装に注力しました。これには、Pallasライブラリーの\`[n2c local message submission](https://github.com/input-output-hk/mithril/issues/2539)`と`[n2c local message notification](https://github.com/input-output-hk/mithril/issues/2540)\`ミニプロトコルが使用されています。MithrilクライアントCLIとライブラリにおける[Cardano database v2](https://github.com/input-output-hk/mithril/issues/2577)バックエンドの安定化にも取り組みました。フォロワーアグリゲーターでの証明書チェーン同期の実装を開始し、`mithril-common`クレートのリファクタリングを完了しました。

リポジトリのRust 2024エディションへのアップグレードを開始し、STM暗号ライブラリーのリファクタリングを継続しました。

**Hydra**チームは[Hydra v.0.22.0](https://github.com/cardano-scaling/hydra/releases/tag/0.22.0)をリリースしました。ここでは、Blockfrost対応のスモークテストを追加し、`hydra-scripts-tx-id`パラメーターを`--network`引数から直接抽出する便利なフラッグを導入しています。[2025–2026ロードマップ](https://chatgpt.com/c/6722a516-6f74-800b-9ae0-cfc54b6e5b61#:~:text=mapping%20out%20the-,2025%E2%80%932026%20roadmap,-and%20continuing%20Glacier)をマッピングしGlacierドロップのサポートを続ける一方、[大規模なステートをロードする際に厄介なデッドロック](https://github.com/cardano-scaling/hydra/issues/2089)を発見し、その[追跡をイシューとして](https://github.com/cardano-scaling/hydra/issues/2086)開始しました。新たに特定された不具合に対処するためにv.0.22.1のパッチリリースを準備しています。

### VOLTAIRE

ADA保有者コミュニティはIntersect予算に関するガバナンスアクションを承認しました。次のステップはトレジャリーからの引き出しを始めることです。スマートコントラクトフレームワークの進展に伴い、Intersectの開発者たちは、このトレジャリー引き出しのためのガバナンスアクションを提出するために必要な設定の最終調整を行っています。Intersectの[Discord](https://mpc.intersectmbo.org/e3t/Ctc/ZX+113/d5bx9l04/VVvNZ27TWlt0W6gNp7r4ryLvQW197v5Z5y1LfgN1vWRrH3lYMRW69sMD-6lZ3plW7QPxWK2TWq1ZW3wYnrh7JJNbFW4ZxJ2X9hVvYfVy9Kym6VdPv-W2whbDH7VclJpW8mflGF1Sj0jPW1r8dd45VhZ_vW3WpDl44tfpKNN2q6QbZyYTRdW69JKw33FvYG3N3p0pRbyTrgqW93BdpS3RKwWHW2STF2X3RTJpKW5zgbXx82pjxWN5KfPcS9mtznW1ZWfY134KTKgW1qlBrD121P73W1shn6C3S9N-SN74ryBdmJ2_MW5PHrg05hwLPFf7y37Y004)サーバー、[Twitter（X）](https://mpc.intersectmbo.org/e3t/Ctc/ZX+113/d5bx9l04/VVvNZ27TWlt0W6gNp7r4ryLvQW197v5Z5y1LfgN1vWRrH3lYMRW69sMD-6lZ3kRW1-fyps2dBnK3W2r8vWL7xMBTQW68BpGm7P9W68W99kvgG8PymjGVg2sL751VRTgW4WHTpZ2gYTtYW5-lKP075r1-MW8DS-SX8wLWMJW75kxCc3CfLxZW2FfJJf4n5q-QW19cw8G5zDsWQW3k9VJr88ttg-N4vmKg3F-bXTW5Jlf5q60rQTYW6PrSgd1Rgz4bW4zwhNq2zwQDvW1npXj735B873W5qvBtj7vn0_TVbvB8K4t-T9vW1Y6KYv2bNX3YdsPNB204)および[LinkedIn](https://mpc.intersectmbo.org/e3t/Ctc/ZX+113/d5bx9l04/VVvNZ27TWlt0W6gNp7r4ryLvQW197v5Z5y1LfgN1vWRr45kvg0W50kH_H6lZ3nBW5Zb1dj50pX8SW6yKFYn772q99W8jFTy263LZ6XW5qT7058W26_0W5lrLqs7t7JzBN9bJ2zzwNsZzW223B3N1qV4TFW1b1sfp7BZwtDW3qP-Zz3cMs7rW3cd3BH2ZdyBmN12mw2s_slBkW7V8CH_1scZRDW672s-v8BBlXWVl2KBB6hrpq2W8V2c2p2HcZ_yW58sgXg155Y5lVrQZ_t7HJBpCW6kF7wj5TJGHTVP98zV1lcXVBW4YB14j3yb6xRVQ74D69l7YDcW7LFLYM1XVNB8W4HfNG23zw7S8W8F1g8v4SXX6VW3lvbBk7zc3X_W4xjb4K7_wSdxW9hV01n6g-xGjW3byHfq3x_wnQW95MHhX3GZqSqW1BnsYb6pm7fSW5Shdr03rkhf_W6HfnzS618v2kdhQpNT04)でフィードバックや議論を歓迎します。コミュニティに最善となるガバナンスインフラを形作るうえで、皆さんからのインプットは不可欠です。

### CATALYST

タウンホールが200回まであと6回となりました。今週開催されたTown Hall #194では、CV VCのAcceleration Program責任者であるJanis Aguilar氏が特別ゲストとして参加しました。彼らのFund13提案は、Cardanoエコシステムにおける起業家的人材の不足に対処することを目的としています。氏はプログラムの進捗状況と今後の展望について議論するために登壇しました。

待望のFund14のカテゴリー概要の発表を含む、Fund14の重要な更新情報も共有されました。カテゴリーは以下をカバーしています。

*   Cardanoオープン：エコシステム
    
*   Cardanoオープン：開発者
    
*   Cardanoユースケース：コンセプト
    
*   Cardanoユースケース：パートナーと製品
    

今回の更新情報では、各カテゴリーに割り当てられた資金の額が示されたほか、提案書作成の際に何をすべきか、何を避けるべきかについての役立つヒントも紹介されました。[セッションの録画は視聴可能](https://x.com/Catalyst_onX/status/1937919142486806927)です。詳細は[Fund14ローンチガイド](https://projectcatalyst.io/f14launchguide.pdf)も併せて参照してください。

### 教育

教育チームが東京科学大学で開催したCardano Daysイベントは成功しました。6月27日には地元のCardanoコミュニティイベントにも参加しました。 

Mastering CardanoイニシアチブおよびCEP（Cardano教育プログラム）の作業は進行中です。このプログラムは自分のペースで学習できるモジュールシリーズで、Cardanoのあらゆる側面がカバーされており、学習パスの提案や追加的なオプションモジュールも含まれています。
