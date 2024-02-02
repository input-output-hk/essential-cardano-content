---
title: Weekly development report as of 2024-02-02
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/c99fa6af-50de-4f8f-b634-8f3c8d2f1ac8/
image_text: Weekly development report as of 2024-02-02
---

### CORE TECHNOLOGY

This week, the **DB Sync** team prepared and tested a new `db-sync` version for mainnet and continued integrating Conway functionality also extending its modularity.

As always, see [this technical development report](https://updates.cardano.intersectmbo.org/archive) for more details from different teams.

### SMART CONTRACTS

This week, the **Marlowe** team continued working on `marlowe-cardano` by creating a [non-SRE process for running benchmarks](https://github.com/input-output-hk/marlowe-cardano/pull/811) to enhance performance evaluation, [utilizing the provided state](https://github.com/input-output-hk/marlowe-cardano/pull/806) when running safety analysis, and resolving the [Wolfram oracle](https://github.com/input-output-hk/marlowe-cardano/pull/608) references. They also profiled Marlowe Runtime for optimization and [merged the real-world-marlowe and marlowe-hackathons repositories](https://github.com/input-output-hk/awesome-marlowe/pull/5) into the contracts folder. The team deprecated several modules –`marlowe-streamer` , `marlowe-signing`, `marlowe-scaling`, and `marlowe-finder`(commit: [1](https://github.com/input-output-hk/marlowe-cardano/commit/b71cb6b9f), [2](https://github.com/input-output-hk/marlowe-cardano/commit/9d2f10819), [3](https://github.com/input-output-hk/marlowe-cardano/commit/6b336c0e5)) – as part of the project's efforts. In addition, the team assessed the feasibility of supporting impactful CIPs to prioritize future development efforts, tested the sync time of both Marlowe indexer and chain indexer for performance optimization, updated the Marlowe security document with the [latest script hashes](https://github.com/input-output-hk/marlowe-cardano/pull/808) and the [CF developer](https://github.com/cardano-foundation/developer-portal/pull/1195) document accordingly to ensure security compliance. The team added comprehensive documentation for [role tokens](https://github.com/input-output-hk/marlowe-doc/pull/205/files#diff-c49fa4a978dfd4e9fbf34c1144484c9994361505169bcfdec59939ca8eb424a2) and created an accompanying video explaining role tokens and open roles for better understanding and adoption. 

Finally, they created [tests for the atomic swap contract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/175) and [implemented checks](https://github.com/input-output-hk/marlowe-playground/pull/66) in Marlowe Playground to ensure contracts do not mix mainnet and testnet addresses.

### SCALING

This week, the **Hydra** team conducted yearly roadmapping sessions, introduced a breaking API change to [eliminate JSON encoding of transactions](https://github.com/input-output-hk/hydra/issues/1213), completed implementing [off-chain logic](https://github.com/input-output-hk/hydra/pull/1223) for incremental decommits, and implemented a `hydra-explorer` [backend](https://github.com/input-output-hk/hydra/pull/1235). Read the [January monthly report here](https://hydra.family/head-protocol/monthly/2024-01/).

The **Mithril** team continued implementing a new data type for certifying Cardano transactions within Mithril networks. They completed the [signature of the transactions set](https://github.com/input-output-hk/mithril/issues/1436) and implemented the [aggregator route](https://github.com/input-output-hk/mithril/issues/1467), responsible for generating proofs of membership for a list of Cardano transactions. Additionally, they finalized the [manual workflow to test the NPM](https://github.com/input-output-hk/mithril/issues/1408) client package in the CI and enhanced the resilience of computing the list of immutable files in a Cardano node database. The team also expanded the coverage of [end-to-end tests](https://github.com/input-output-hk/mithril/issues/1464) in the CI to accommodate multiple versions of the Cardano node and various hard fork scenarios. 

Finally, they completed the enhanced [node communications](https://github.com/input-output-hk/mithril/issues/1315) between Mithril and Cardano for retrieving UTXOs and kept working on the [threat modeling and risk analysis](https://github.com/input-output-hk/mithril/issues/1350) for P2P networking.

### VOLTAIRE & SANCHONET

This week, the team developed an important Conway feature, which enables stake pool operators to vote on select security-relevant protocol parameter updates. They also organized a proposal hierarchy and tested it for accuracy and effectiveness.

Additionally, the team fixed some important bugs:

*   Rectified the issues that allowed constitutional committee members to vote on governance actions they shouldn't have access to.
    
*   Implemented safeguards to prevent deposits from appearing in orphaned reward accounts after staking credentials have been unregistered but before the proposal procedure deposit has been returned.
    
*   Ensured `Sets` are encoded in CBOR with `tag 258` by default.
    

The Intersect MBO is also [polling](https://twitter.com/adamrusch/status/1752476568939589913?s=46&t=vb2zIbDj3TjfyZ1HuL7tNw) parameter settings for CIP-1694, and the governance parameter committee is looking for community input on determining the initial settings. [Learn more here](https://mvg1694.smmn.app/home).

### CATALYST

This week, Project Catalyst is entering the second week of voting in Fund11. Collectively, almost 5,000 wallets have already cast more than 150,000 votes across 920 proposals seeking community funding. It’s an amazing testament to the community-driven desire to fund innovation on Cardano. If you are a registered voter in Fund11, you can cast your final votes until February 8, 11 AM UTC. Results are expected to be available around February 15.

February 4th is also the last chance to apply to run a Catalyst working group. Read [this blog post](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap) to learn more about the concepts. 

In other news, the community also held its [fourth town hall of the year](https://www.youtube.com/watch?v=54F8xq2ISgo&list=PLnPTB0CuBOByRhpTUdALq4J89m_h7QqLk). Once again, selection of recently completed projects were featured as well as the latest updates from the Catalyst Team. The next meeting is scheduled for the following week and then every Wednesday thereafter, always at 5 PM UTC. You can [register here](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform). 

### EDUCATION

The **education** team is planning the second iteration of the Cardano developer training course in collaboration with the Africa Blockchain Center [(ABC)](https://www.theafricablockchaincenter.com/). They are also continuing to update further lessons of the Haskell Bootcamp course.

![](https://ucarecdn.com/67b09eed-1b8a-46da-bcf0-0d2e8b0aa010/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**DB Sync**チームはメインネット用の新しいdb-syncバージョンを準備してテストし、モジュール性を拡張するConway機能をの統合を続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://updates.cardano.intersectmbo.org/archive)をご覧ください。

### スマートコントラクト

**Marlowe**チームは、パフォーマンス評価を強化する[ベンチマークを実行するための非SREプロセス](https://github.com/input-output-hk/marlowe-cardano/pull/811)を作成し、安全性分析を実行するときに[提供されたステータスを利用](https://github.com/input-output-hk/marlowe-cardano/pull/806)し、[Wolfram Oracle](https://github.com/input-output-hk/marlowe-cardano/pull/608)の参照を解決するなど、marlowe-cardanoへの取り組みを続けました。最適化のためにMarlowe Runtimeをプロファイルし、[real-world-marloweとmarlowe-hackathonsリポジトリをcontractsフォルダにマージ](https://github.com/input-output-hk/awesome-marlowe/pull/5) しました。プロジェクトの取り組みの一環として、一部のモジュール、marlowe-streamer、marlowe-signing、marlowe-scaling、marlowe-finder（コミット[1](https://github.com/input-output-hk/marlowe-cardano/commit/b71cb6b9f)、[2](https://github.com/input-output-hk/marlowe-cardano/commit/9d2f10819)、[3](https://github.com/input-output-hk/marlowe-cardano/commit/6b336c0e5)）を廃止しました。将来の開発努力を優先するために影響力のあるCIPをサポートする実現可能性を査定し、パフォーマンスの最適化のためにMarloweインデクサーとチェーンインデクサーの同期時間をテストし、Marloweセキュリティドキュメントを[最新のスクリプトハッシュ](https://github.com/input-output-hk/marlowe-cardano/pull/808)で更新し、それに応じて[CF開発者](https://github.com/cardano-foundation/developer-portal/pull/1195)ドキュメントを更新してセキュリティコンプライアンスを確保しました。[ロールトークン](https://github.com/input-output-hk/marlowe-doc/pull/205/files#diff-c49fa4a978dfd4e9fbf34c1144484c9994361505169bcfdec59939ca8eb424a2)に関する包括的なドキュメントを追加し、それに合わせたロールトークンとオープンロールを説明する動画を作成して、理解と普及を深めました。 

[アトミックスワップコントラクトのテスト](https://github.com/input-output-hk/marlowe-ts-sdk/pull/175)を作成し、コントラクトがメインネットとテストネットのアドレスを混在させないようにMarlowe Playgroundに[チェックを実装](https://github.com/input-output-hk/marlowe-playground/pull/66)しました。

### スケーリング

**Hydra**チームは例年通りロードマップセッションを開催し、[トランザクションのJSONエンコーディングを排除](https://github.com/input-output-hk/hydra/issues/1213)するためにAPIの画期的な変更を導入し、インクリメンタルデコミットの[オフチェーンロジック](https://github.com/input-output-hk/hydra/pull/1223)の実装を完了し、hydra-explorer[バックエンド](https://github.com/input-output-hk/hydra/pull/1235)を実装しました。[1月の月次レポートはこちら](https://hydra.family/head-protocol/monthly/2024-01/)をご覧ください。

**Mithril**チームは、Mithrilネットワーク内でのCardanoトランザクションを認証するための新しいデータ型の実装を継続しました。[トランザクションセットの署名](https://github.com/input-output-hk/mithril/issues/1436)を完了し、Cardanoトランザクションのリストのメンバーシップ証明の生成を管理する[アグリゲータールート](https://github.com/input-output-hk/mithril/issues/1467)を実装しました。CI内の[NPMクライアントパッケージをテストするための手動ワークフロー](https://github.com/input-output-hk/mithril/issues/1408)を完成させ、Cardanoノードデータベース内の不変ファイルのリストを計算する回復力を強化しました。Cardanoノードの複数のバージョンとさまざまなハードフォークシナリオに対応させるために、CIの[エンドツーエンドテスト](https://github.com/input-output-hk/mithril/issues/1464)の対象範囲を拡大しました。 

UTXOを取得するためにMithrilとCardano間の[ノード通信](https://github.com/input-output-hk/mithril/issues/1315)の強化を完了し、P2Pネットワーキングの[脅威モデリングとリスク分析](https://github.com/input-output-hk/mithril/issues/1350)への取り組みを続けました。

### VOLTAIRE & SANCHONET

ステークプールオペレーターが、セキュリティ関連のプロトコルパラメーター更新に関して投票できるようにする、重要なConway機能を開発しました。提案の階層を整理し、その正確性と有効性をテストしました。

一部の重要なバグの修正も行いました。

*   憲法委員会のメンバーが、アクセスできないはずのガバナンスアクションに投票できる問題を修正しました。
    
*   ステーキングクレデンシャルが登録解除された後、提案手続きのデポジットが返却される前に、放棄された報酬アカウントにデポジットが表示されるのを防ぐためのセーフガードを実装しました。
    
*   SetsがCBORでデフォルトで確実にtag 258でエンコードされるようにしました。
    

Intersect MBOはCIP-1694のパラメーター設定も[ポーリング](https://twitter.com/adamrusch/status/1752476568939589913?s=46&t=vb2zIbDj3TjfyZ1HuL7tNw)しており、ガバナンスパラメーター委員会は初期設定を決定するにあたりコミュニティからのインプットを求めています。[詳細はこちらをご覧ください](https://mvg1694.smmn.app/home)。

### CATALYST

Project CatalystはFund11投票の2週目に入ります。全体として、およそ5,000のウォレットから、コミュニティの資金提供を求める920提案に対し、すでに150,000以上の票が投じられています。これは、Cardanoのイノベーションに資金を提供したいというコミュニティが主導する願望の驚くべき証です。Fund11の登録有権者は、日本時間2月8日午後8時まで投票を行うことができます。結果発表は2月15日頃を予定しています。

2月4日は、Catalystワーキンググループの運営に応募する最後の機会でもあります。[このブログ記事](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap)を読んで、コンセプトの詳細を確認してください。 

コミュニティは、[今年4回目のタウンホール](https://www.youtube.com/watch?v=54F8xq2ISgo&list=PLnPTB0CuBOByRhpTUdALq4J89m_h7QqLk)を開催しました。ここでも、最近完了したプロジェクトのセレクションと、Catalystチームからの最新情報が紹介されました。次回のミーティングは来週予定されており、以降毎週水曜5時UTC（日本時間木曜午前2時）に開催されます。登録は[こちら](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform)から行えます。 

### 教育

**教育**チームは、アフリカブロックチェーンセンター（[ABC](https://www.theafricablockchaincenter.com/)）と協力して、Cardano開発者トレーニングコースの第2弾を企画しているほか、Haskell Bootcampコースにさらにレッスンを追加しています。
