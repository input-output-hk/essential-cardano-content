---
title: Weekly development report as of 2025-04-11
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/67566205-590c-4f2f-a741-eb2ce3f94bfe/
image_text: Weekly development report as of 2025-04-11
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano's ecosystem continues to progress with steady growth across technical, governance, and community fronts. There are now 1,990 projects building on the platform, alongside 1.33 million delegated wallets, reflecting stable engagement in staking. The network has processed over 108.36 million transactions, a 0.24% increase since the last update, while native token activity reached 10.75 million tokens and 211,632 token policies.

On the smart contract side, 130,282 Plutus scripts and 6,217 Aiken scripts have been deployed. Governance also continues to grow, with 1,238 DReps, including 930 active DReps, indicating a 0.65% rise in participation since last week.

This week, Input | Output (IO) attended Paris Blockchain Week, where teams explored the latest innovations, collaborated on emerging opportunities, and took meaningful steps to advance the ecosystem.

Charles Hoskinson, IO CEO, delivered the opening keynote on day two of Paris Blockchain Week. He spoke about the fourth generation of cryptocurrencies, highlighting the growing importance of blockchain infrastructure in today’s rapidly changing digital and economic landscape.

He also joined Midnight CEO Eran Barak for a fireside chat on Midnight’s vision and its significance for the broader Web3 landscape.

The week also featured a dedicated node diversity workshop, bringing together developers from across the Cardano ecosystem to share ideas and foster collaboration.

**Node diversity workshop**

At the start of Paris Blockchain Week, a group of Cardano node developers gathered at the Tweag offices in the city for a node diversity workshop. Over three days, from April 7 to 9, participants from the Cardano Foundation, Harmonic Labs, IO Engineering, Sundae Labs, Tweag, TxPipe, and other affiliations shared recent successes, exchanged new insights, and collaborated to address ongoing challenges.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXctO2s-TQMRUQS6cfxKvhK2RQ1weamJHSFyjAAEGxQR8o8dFVqmAgBLlILIrSZig_lAdVjULyoqFvO25NuJ1kISG7eAAl_R2GFXH3R03MpT3BETcE_67FOseaixSGmWfRKZJ__4RA?key=--w2SYF-pq_o6psNB-oMbqeo)

Using the [Open Space Technology](https://en.wikipedia.org/wiki/Open_space_technology) workshop format, the  25 participants set their agenda after an introductory session focused on sharing expectations. In total, around 25 sessions took place across up to three concurrent tracks. Topics ranged from demonstrations, status updates, and experience reports to Q&A sessions on new Cardano node implementations and tools — including a look at [testing practices in Ethereum](https://github.com/ethereum/tests). Other sessions focused on upcoming features, such as Leios, and on building consensus around client interfaces, file formats, and test vectors. A recurring theme was the importance of sharing knowledge through [CIPs](https://github.com/cardano-foundation/CIPs) and the newer [Cardano Blueprint](https://github.com/cardano-scaling/cardano-blueprint) initiative. Attendees identified the next steps for drafting CIPs and blueprints as outcomes of these discussions.

Judging by feedback from the closing sessions, the workshop was a resounding success. Participants appreciated the open exchange of ideas, with organizational hierarchies fading during lively discussions. A full report, including session proceedings, will be published soon. In the meantime, a [dedicated Discord channel](http://discord.gg/sn2HMm8eYs) serves as interim forum for ongoing collaboration on node diversity.

In other news:

*   [Draper University](https://x.com/draper_u/status/1909388809818849337) has selected 20 builders for its residency program, run in collaboration with the Cardano Foundation.
    
*   [Zekret Protocol](https://x.com/ZekretProtocol) announced that they will be building on the Cardano blockchain.
    
*   [Eternl wallet](https://x.com/eternlwallet/status/1909595690482774314) has released a new version featuring a redesigned UI, multi-sig support, and additional improvements.
    
*   [zkFold](https://x.com/zkFold/status/1909524663408918945) has launched ‘Smart Wallet’, an all-in-one API library for implementing a Cardano wallet.
    

### CORE TECHNOLOGY

The ledger **team** tackled major technical debt items over the past two weeks. They finalized the adjustment of how original transaction bytes are retained during deserialization, a step crucial for the upcoming [nested transactions](https://github.com/cardano-foundation/CIPs/pull/862) feature. They completed changes to `CertState` for better clarity between pre- v post-Conway eras. The team also introduced a minor performance boost for transaction size calculations, made the `MemoBytes` interface safe, and renamed `AccountState` to `ChainAccountState` to pave the way for future Leios-related expansions.

Beyond these structural changes, the team simplified the constraint-based generation framework, fixed example Plutus scripts in the testing pipeline, and removed redundant Byron test packages. This cleanup reduces overhead and duplication, contributing to a more maintainable ledger codebase overall. They also introduced new features in testing, updated the specification code location, and continued refining infrastructure by converting Byron test packages into sublibraries and exposing Byron CDDLs for easier downstream usage.

### SCALING 

This week, some members of the **Mithril** team attended a workshop on the Cardano node diversity in Paris. They also continued [adapting the infrastructure](https://github.com/input-output-hk/mithril/issues/2391) to support the aggregator’s prototype ‘follower’ mode and focused on signing ancillary files in the Cardano database snapshots with an [IOG key](https://github.com/input-output-hk/mithril/issues/2362). Additionally, they completed the implementation for recording the origin of requests made to the aggregator API.

Finally, the team continued [refactoring the STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2369) to improve clarity and maintainability and started implementing a proof of concept for the Mithril/ALBA aggregation proof system.

The **Leios** team held an in-person workshop in Edinburgh to refine their protocol and simulation capabilities, making progress on several aspects. 

On [day one](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/workshop/day-1-recap.md), they discussed ledger design, trade-offs, and linking formal specifications to simulations, exploring options like labeled UTXOs and accounts, and addressing fees and conflict prevention. They also reviewed conformance testing approaches.

On [day two](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/workshop/day-2-recap.md), they estimated the costs of running a Leios node, analyzing resource usage across TPS levels, from 10 TPS to 1k TPS. They found that while overhead is significant at low throughput, efficiency improves at higher levels. Some cost items, like IOPS and memory cost, remain to be finalized this month.

On the [final day](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/workshop/day-3-recap.md), the team narrowed down options for optimistic validation of input blocks, defining three candidates and favoring one. Their goal was to enable transaction chaining within Leios by determining a 'point in time' for subsequent transactions based on local knowledge of input blocks.

### CATALYST

Catalyst has released the global Horizons report, which highlights the project's impact and international reach. You can read the full report [here](https://projectcatalyst.io/reports/horizons2025.pdf). This week's Town Halls on X focused on presenting the report to the community and gathering initial feedback. Meanwhile, technical development on the Catalyst platform is ongoing, with users expected to benefit from improved user experiences and new features. You can catch the latest episode of ‘Under the Hood’ [here](https://x.com/Catalyst_onX/status/1907931121389809958).

### VOLTAIRE 

This was the last week for interested community members to join and register as candidates for Intersect committees. There are now more candidates than available seats in every committee, and the next step is for Intersect members to vote for their preferred candidates. Voting will be open from noon UTC on April 16, 2025 until noon UTC on May 7, 2025.

For more information, visit the [members’ area](https://members.intersectmbo.org/) at the [Intersect website](https://intersectmbo.org/).

### EDUCATION

This week, the **education** team is gathering feedback from the recent Cardano Days event at [Florida International University](https://www.fiu.edu/) and are busy organizing similar future events. They are also creating content for various modules of the Midnight Pioneer program and have completed more work on some Haskell Bootcamp lectures.  
  
![](https://ucarecdn.com/9f981178-913f-453d-a897-7d15270370fc/-/preview/-/format/auto/-/quality/smart/)  
  
エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは技術面、ガバナンス面、コミュニティ面で着実な成長を続けています。現在、1,990のプロジェクトがプラットフォーム上に構築されています。委任されているウォレット数は133万に上り、ステーキングへの安定した関心を反映しています。ネットワークは1億836万件以上のトランザクションを処理しており、前回の更新情報から0.24%の増加を見せています。一方、ネイティブトークンアクティビティは1,075万トークンに達し、トークンポリシーは21万1,632に上っています。

スマートコントラクトに関しては、これまでに13万282のPlutusスクリプトと6,217のAikenスクリプトがデプロイされました。ガバナンスも成長を続けており、DRep数は930人のアクティブDRepを含む1,238人で、前週比0.65%増となっています。

今週、Input | Output（IO）はParis Blockchain Weekに出席し、最新のイノベーションを探求し、新たな機会について協力し、エコシステムを前進させるための有意義な措置を講じました。

IOのCharles Hoskinson CEOは、Paris Blockchain Weekの2日目に開会基調講演を行いました。ここで第4世代の暗号通貨に言及した際に、今日の急速に変化するデジタルおよび経済の状況において、ブロックチェーンインフラの重要性が高まってることを強調しました。

彼はまた、MidnightのEran Barak CEOと、Midnightのビジョンと広範なWeb3界におけるその重要性についてファイアサイドチャットを行いました。

ノードの多様性に関する専用ワークショップも開催され、Cardanoエコシステム全体の開発者が集まり、アイデアを共有し、コラボレーションを促進しました。

**ノードダイバーシティワークショップ**

Paris Blockchain Weekの始まりに、Cardanoノード開発者のグループがパリのTweagオフィスに集まり、ノードダイバーシティワークショップが開催されました。4月7日から9日までの3日間、Cardano財団、Harmonic Labs、IO Engineering、Sundae Labs、Tweag、TxPipeなどの参加者が、最新の成果を共有し、新しい洞察を交換し、懸案課題に対処するために協力しました。

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcwlWY7XDmH2AGVreFZnp0eQgZNeOVk1ob2HVuAvnNic0aWHNB1qJXZ5DioH20aTVaZP9MRPr9Izt37n005YjHJat21PdFjMSXqksSidkwEC9uFvrTNWCq4g0BlW6HFPcohmn21762wBNzwg39_kPQ?key=U8TEj8m2SWPuNuYQh1hpw2-x)

25名の参加者は、[オープンスペーステクノロジー](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%83%BB%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%83%BB%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC)ワークショップ形式を用いて、導入セッションで期待するものを共有した後にアジェンダを設定しました。最大3つの同時トラックで、合計25程のセッションが行われました。トピックはデモンストレーション、ステータス更新、体験レポートから、新しいCardanoノードの実装とツールに関するQ&Aセッションまで多岐にわたっており、[イーサリアムでのプラクティステスト](https://github.com/ethereum/tests)の考察も含まれていました。他のセッションではLeiosなどの今後の機能、そして、クライアントインターフェイス、ファイル形式、テストベクトルに関するコンセンサスを構築することに焦点が当てられました。繰り返し採り上げられたテーマは、[CIP](https://github.com/cardano-foundation/CIPs)と新しい[Cardano Blueprint](https://github.com/cardano-scaling/cardano-blueprint)イニシアチブを通じて知識を共有することの重要性です。議論の結果、参加者は、CIPとブループリントを起草するための次のステップを特定しました。

クロージングセッションからのフィードバックから判断すると、ワークショップは大成功でした。参加者は、活発な議論の間に組織の壁が薄れていき、オープンな意見交換が行われたことを評価しました。セッション議事録を含めたフルレポートは近日中に公開される予定です。[専用のDiscordチャンネル](http://discord.gg/sn2HMm8eYs)は、ノードの多様性に関する進行中のコラボレーションの暫定的なフォーラムとして機能しています。

その他のニュース：

*   [ドレイパー大学](https://x.com/draper_u/status/1909388809818849337)は、Cardano財団と共同運営するレジデンスプログラムのためのビルダー20人を選出しました。

*   [Zekret Protocol](https://x.com/ZekretProtocol)はCardanoブロックチェーンに構築すると発表しました。

*   [Eternlウォレット](https://x.com/eternlwallet/status/1909595690482774314)は、UIを再設計し、マルチシグのサポート、追加の改善施した新バージョンをリリースしました。

*   [zkFold](https://x.com/zkFold/status/1909524663408918945)は、Cardanoウォレットを実装するためのオールインワンAPIライブラリー、Smart Walletを立ち上げました  

### コアテクノロジー

**台帳**チームはこの2週間、主要な技術債務に取り組みました。逆シリアル化中に元のトランザクションバイトを保持する方法の調整の仕上げを行いました。これは、今後の[ネスト型トランザクション](https://github.com/cardano-foundation/CIPs/pull/862)機能にとって重要なステップです。V以前Conway以降の端境期をより明確にするための、CertStateへの変更を完了しました。トランザクションサイズ計算のパフォーマンスを若干向上させ、MemoBytesインターフェイスを安全にし、将来のLeios関連の拡張をしやすくするためにAccountStateをChainAccountStateに改名しました。

こうした構造的な変更に加えて、制約ベースの生成フレームワークを簡素化し、テストパイプラインのPlutusスクリプトサンプルを修正し、Byronテストパッケージの冗長を削除しました。このクリーンアップはオーバーヘッドと重複を減らし、台帳コードベース全体の保守性を向上させます。テストに新機能を導入し、仕様コードの場所を更新し、Byronテストパッケージをサブライブラリーに変換し、下流での利用を容易にするためにByron CDDLを公開するなど、インフラの改良を続けました。

### スケーリング 

**Mithril**チームのメンバー数名は、パリで開催されたCardanoノードの多様性に関するワークショップに参加しました。アグリゲーターのプロトタイプ「フォロワー」モードをサポートするために[インフラの調整](https://github.com/input-output-hk/mithril/issues/2391)を続け、[IOG鍵](https://github.com/input-output-hk/mithril/issues/2362)を使用したCardanoデータベーススナップショット内の補助ファイルへの署名に注力しました。アグリゲーターAPIに対するリクエストの発生源を記録するための実装を完了しました。

明快さと保守性を向上させるための[STM暗号ライブラリーのリファクタリング](https://github.com/input-output-hk/mithril/issues/2369)を続け、Mithril/ALBAアグリケーション証明システムの概念実証の実装を始めました。

**Leios**チームは、プロトコルとシミュレーション機能を改良するためにエディンバラで対面ワークショップを開催し、複数の点で進展しました。 

[初日](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/workshop/day-1-recap.md)は、台帳の設計、トレードオフ、形式仕様記述とシミュレーションのリンクについて議論し、ラベル付きのUTXOやアカウントのようなオプションを模索し、手数料や紛争防止に対処しました。適合性テストのアプローチについてもレビューしました。

[2日目](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/workshop/day-2-recap.md)は、Leiosノードを実行するコストを見積もり、10TPSから1000TPSのレベル別にリソース使用量を分析し、スループットが低い場合はオーバーヘッドが大きく、レベルが高くなると効率が向上することを発見しました。IOPSやメモリーコストなどのいくつかのコスト項目は、今月中に確定される予定です。

[最終日](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/workshop/day-3-recap.md)は、入力ブロックのオプティミスティック検証のための選択肢を絞り込み、3つの候補を定義し、優先する1つを特定しました。目標は、入力ブロックのローカルな知識に基づいて後続のトランザクションの「ポイントインタイム」を決定することによって、Leios内でトランザクションチェーンを可能にすることです。

### CATALYST

Catalystは、このプロジェクトの影響と国際的なリーチに焦点を当てたグローバルなHorizonsレポートを公開しました。フルレポートは[こちら](https://projectcatalyst.io/reports/horizons2025.pdf)をご覧ください。Xで開催されたタウンホールは、レポートをコミュニティに提示し、最初のフィードバックを集めることに焦点が当てられました。Catalystプラットフォームの技術開発は進行中であり、ユーザーは、ユーザーエクスペリエンスの向上と新機能の恩恵を受けることが期待できます。『Under the Hood』の最新エピソードは[ここ](https://x.com/Catalyst_onX/status/1907931121389809958)から視聴できます。  
  
### VOLTAIRE 

今週は、関心のあるコミュニティメンバーが参加し、Intersect委員会の候補者として登録するための最後の週でした。現在、各委員会では空き議席数よりも多くの候補者が存在します。次のステップはIntersectメンバーが希望する候補者に投票することです。投票期間は、日本時間2025年4月16日午後9時から2025年5月7日午後9時までです。

詳しくは、[Intersectウェブサイト](https://intersectmbo.org/)の[メンバーセクション](https://members.intersectmbo.org/)を参照してください。

### 教育

**教育**チームは[フロリダ国際大学](https://www.fiu.edu/)で最近開催されたCardano Daysイベントからのフィードバックを集めており、今後の同種のイベント開催準備に邁進しています。Midnightパイオニアプログラムのさまざまなモジュールのコンテンツを作成しており、Haskell Bootcampレクチャーに関する作業もいくつか完了しました。
