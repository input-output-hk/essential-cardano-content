---
title: Weekly development report as of 2025-03-28
tags:
  - Development
  - Weekly development updates
  - Statistics
  - Ecosystem
url: ""
image: https://ucarecdn.com/54d64d4f-5d8a-410b-9b77-d1ef1b6422e5/
image_text: Weekly development report as of 2025-03-28
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to grow, with 1,989 projects currently building – 807 non-NFT and 1,182 NFT-related. The number of delegated wallets saw a slight 0.03% decrease week-over-week, now at 1.328 million. Native tokens increased to 10.73 million, while token policies now total 210,988. Plutus scripts grew by 0.29% since last week, reaching 129,745, and total transactions rose by 0.20% to 107.90 million. Meanwhile, the number of DReps expanded by 0.58% to 1,224, with 922 currently active.

In other ecosystem news, the [March edition of Essential Cardano360](https://www.youtube.com/watch?v=rJ0GI3TqEz4) went live, featuring updates on Cardano’s evolving governance landscape. The Intersect committee elections are underway – Valeria Devaux and Terence McCutcheon discussed their significance for the community. Project Catalyst remains a driver of innovation – Kriss Baird, Janis Aguilar (CV VC), and Chris Joannou (Draper University) explored the impact of Fund13’s growth and acceleration category. Brandon Wolf provided insights into Lace’s latest developments, including its upcoming mobile release and multichain capabilities. The episode also highlighted community voices, with Josh from Late Game Crypto and a discussion on inclusivity in blockchain featuring Lily Brody and Julia Nagy. Finally, Matthew Capps caught up with [VyFinance](https://youtu.be/rJ0GI3TqEz4?t=2498) and [Orcfax](https://youtu.be/rJ0GI3TqEz4?t=3069) to showcase their progress within the ecosystem.

### CORE TECHNOLOGY

This week, the **ledger** team prepared for the upcoming node v.10.3 release. They also worked on enabling backward compatibility [updates for the Conway era](https://github.com/IntersectMBO/cardano-ledger/pull/4924), removing redundant complexity from existing code structures, and implementing additional tests. This involved adding required [CBOR instances](https://github.com/IntersectMBO/cardano-ledger/pull/4933), removing unnecessary bytestring references from block types, and optimizing cryptographic witness key handling. The team also expanded test coverage for [Alonzo UTXO workflows](https://github.com/IntersectMBO/cardano-ledger/pull/4944) and introduced additional continuous integration checks through GitHub workflows.

### SCALING

This week, the **Mithril** team created the pre-release for the \`[2513.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2513.0-pre)\` distribution, which provides support for Cardano node v.10.2.1 and includes various bug fixes and improvements.

They implemented the aggregator's prototype ‘slave’ mode to support signer registration across multiple aggregators and started adapting the infrastructure to support it. They also focused on [signing ancillary files](https://github.com/input-output-hk/mithril/issues/2362) in the Cardano database snapshots with an IOG key and worked on recording the origin of requests made to the aggregator API.

Finally, the team enhanced the handling of some aggregator functional errors to improve signer metrics accuracy and kept refactoring the [cryptographic library](https://github.com/input-output-hk/mithril/issues/2369) for better clarity and maintainability.

The **Leios** team made significant progress in protocol development, focusing on improving simulation capabilities and analyzing protocol behavior under various network conditions. A comparison of Haskell and Rust simulations across [18 scenarios](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w12/analysis.ipynb) demonstrated that the Leios protocol scales effectively to mainnet-sized networks. However, congestion occurs when the input block rate reaches 30 IB/s.

For more details, see [Leios weekly updates](https://leios.cardano-scaling.org/news).

###   
CATALYST

The second episode of ‘Under the Hood’ will be released soon, with a [snippet](https://x.com/Catalyst_onX/status/1904292145223422204) already shared on social media platforms. The [Catalyst town halls](https://x.com/Catalyst_onX/status/1904517360708427895), conducted on X, continue every Wednesday at 5pm  UTC, featuring discussions about the 2025 Catalyst roadmap.

Technical development continues on the Catalyst native platform. The March secondary funding distribution has been completed across various project cohorts. The Catalyst team has also submitted proof of achievement for Milestone Five (M5), which relates to its community-funded fund administration proposal.  
  
Finally, Catalyst will participate in the [CV Labs London Crypto Valley](https://x.com/CV_Labs/status/1904880630363472277) mixer event on March 31 through a fireside chat session.

### EDUCATION

This week, the **education** team prepared for the Cardano Days event at [Florida International University](https://www.fiu.edu/) on March 31. They are also supporting the associated Code Crunch event this weekend, for which participants can register [here](https://lu.ma/bmy8bdfm).

Additionally, the team focused on creating content for the first module of the Midnight Pioneer program and updating the remaining Haskell Bootcamp lectures.

  
![](https://ucarecdn.com/17e46e53-9806-466c-a2a5-14195ceb79ff/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは成長を続けており、現在1,989のプロジェクトが構築されています。そのうち807が非NFT、1,182がNFT関連です。委任されたウォレットの数は、前週比わずかに0.03%減の132万8000になりました。ネイティブトークンは1,073万に増加し、トークンポリシーは合計210,988に達しています。Plutusスクリプトは前週比0.29%増の12万9,745、総トランザクション数は0.20%増の1億790万となりました。一方、DRepの数は0.58%増の1,224人で、現在アクティブなのは922人です。

エコシステムに関するその他のニュースでは、進化するCardanoガバナンスの状況に関する最新情報を特集した[Essential Cardano360の3月版](https://www.youtube.com/watch?v=rJ0GI3TqEz4)が公開されました。Intersect委員会選挙が進行中であり、Valeria DevauxとTerence McCutcheonがコミュニティにおける重要性について語っています。Project Catalystは引き続きイノベーションを推進しており、Kriss Baird、Janis Aguilar（CV VC）、Chris Joannou（ドレイパー大学）は、Fund13の成長と加速のカテゴリーの影響を調査しました。Brandon Wolfは、予定されているモバイルリリースやマルチチェーン機能など、Laceの最新開発についての情報を提供しました。このエピソードではまた、Late Game CryptoのJoshや、Lily BrodyとJulia Nagyをフィーチャーしたブロックチェーンへの包摂性に関する議論など、コミュニティの声を強調しています。Matthew Cappsは[VyFinance](https://youtu.be/rJ0GI3TqEz4?t=2498)と[Orcfax](https://youtu.be/rJ0GI3TqEz4?t=3069)に関する動画でエコシステムでの彼らの進歩を紹介しました。

### コアテクノロジー

**台帳**チームは、ノードv.10.3のリリース準備に取り組みました。[Conway期用の更新](https://github.com/IntersectMBO/cardano-ledger/pull/4924)で後方互換性を可能にし、既存のコード構造から冗長な複雑さを取り除き、追加のテストを実装しました。これには、必要な[CBORインスタンス](https://github.com/IntersectMBO/cardano-ledger/pull/4933)の追加、ブロック型からの不要なバイト文字列参照の削除、暗号witness鍵処理の最適化が含まれます。[Alonzo UTXOワークフロー](https://github.com/IntersectMBO/cardano-ledger/pull/4944)のテストカバレッジを拡大し、GitHubワークフローを介した追加の継続的統合チェックを導入しました。

### スケーリング

**Mithril**チームは[2513.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2513.0-pre)ディストリビューションのプレリリースを作成しました。これはCardanoノードv.10.2.1のサポートを提供し、さまざまなバグ修正と改良を含んでいます。

複数のアグリゲーター間における署名者登録をサポートするためにアグリゲーターのプロトタイプ「スレーブ」モードを実装し、それをサポートするためのインフラの適応を開始しました。IOG鍵を使用したCardanoデータベーススナップショット内の[補助ファイルへの署名](https://github.com/input-output-hk/mithril/issues/2362)にも注力し、アグリゲーターAPIに対する要求の発信元の記録に取り組みました。

署名者メトリクスの精度を上げるためにアグリゲーターの関数エラーの処理を強化し、明確さと保守性を向上させるために[暗号ライブラリー](https://github.com/input-output-hk/mithril/issues/2369)のリファクタリングを続けました。

**Leios**チームは、シミュレーション機能の改良とさまざまなネットワーク条件下でのプロトコル挙動の解析に焦点を当てて、プロトコル開発を大きく進展させました。HaskellとRustのシミュレーションを[18のシナリオ](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w12/analysis.ipynb)で比較すると、Leiosプロトコルは実質的にメインネット規模のネットワークに拡張できることが示されました。ただし、インプットブロックレートが30 IB/sに達すると輻輳が発生します。

詳細は、[Leios週刊更新情報](https://leios.cardano-scaling.org/news)をご覧ください。

  
CATALYST

「Under the Hood」の第2回はまもなく公開される予定で、ソーシャルメディアプラットフォームではすでに[ショートトレーラー](https://x.com/Catalyst_onX/status/1904292145223422204)が共有されています。[Catalystタウンホール](https://x.com/Catalyst_onX/status/1904517360708427895)は毎週水曜日午後5時（日本時間木曜午前2時）からXで実施されており、2025年Catalystロードマップについて議論されています。

技術開発はCatalystネイティブプラットフォームで継続されています。3月の第2回資金分配が、さまざまなプロジェクトコホートに実施されました。Catalystチームはまた、コミュニティから資金を受けたファンド管理の提案に関連するマイルストンファイブ（M5）の達成証明を提出しました。  
  
Catalystは、3月31日の[CV Labs London Crypto Valley](https://x.com/CV_Labs/status/1904880630363472277)ミキサーイベントにファイアーサイドチャットセッションを通じて参加します。

### 教育

**教育**チームは、3月31日に[フロリダ国際大学](https://www.fiu.edu/)で開催されるCardano Daysイベントに向けて準備を進めています。今週末に関連するCode Crunchイベントもサポートしています。参加者は[ここ](https://lu.ma/bmy8bdfm)から登録できます。

Midnightパイオニアプログラムの初回モジュールのコンテンツ作成と、残りのHaskell Bootcampレクチャーの更新に注力しました。
