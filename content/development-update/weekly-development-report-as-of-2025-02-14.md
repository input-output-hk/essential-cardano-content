---
title: Weekly development report as of 2025-02-14
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/74cfb770-bbe9-47fa-a63d-9299ec5e0c3f/
image_text: Weekly development report as of 2025-02-07
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The **Cardano ecosystem** continues to show steady progress across key areas. There are currently 1,985 projects building on the platform. 10.68 million native tokens have been issued under 205,932 token policies, indicating consistent token activity.

Network usage remains stable, with 106.19 million transactions processed so far. 1.321 million delegated wallets are contributing to the network's staking process. The smart contract infrastructure is developing gradually, with 125,534 Plutus scripts deployed, out of which – 4,876 Aiken scripts. Additionally, 1,078 delegated representatives (DReps) are now active, reflecting increased participation in on-chain governance.

In other news:

*   [Input | Output’s interim constitutional council (ICC)](https://x.com/InputOutputHK/status/1890102367779008903) has voted ‘Yes’ for the governance action ‘Cardano Constitution to Replace the Interim Constitution’ with the unanimous support of its seven members.
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1889998605462712571) also published its rationale for voting ‘Yes’ on the governance action to replace the interim constitution with the Cardano constitution.
    
*   [Cointelegraph](https://x.com/Cointelegraph/status/1889082304917594511) reported that Grayscale filed for a Cardano ETF with the NYSE.
    
*   [Mauro Andreoli](https://x.com/MauroAndreoliA/status/1888977647234908468) will assist the University of Zurich in identifying and recommending individuals from the Cardano community to participate in this year’s ‘Deep Dive into Blockchain’ course.
    
*   [Intersect](https://x.com/IntersectMBO/status/1890110158858051831) announced that it will prepare an impact analysis to reduce the treasury growth rate from 20% to 10%.
    
*   [Atrium Labs](https://x.com/atrium_lab/status/1890087740169200081) concluded Diffusion basket voting and published a list of the 50 SPOs selected for the first staking basket.
    

### CORE TECHNOLOGY

This week, the **ledger** team implemented several performance improvements. They focused on avoiding redundant computations of the Plutus script context, reducing memory overhead for governance features, and eliminating a space leak causing unnecessary transaction retention. Key changes covered [TxInfo memoization](https://github.com/IntersectMBO/cardano-ledger/pull/4854), [reduced memory usage](https://github.com/IntersectMBO/cardano-ledger/pull/4826), and the addition of [CBOR instances for DefaultVote](https://github.com/IntersectMBO/cardano-ledger/pull/4860). The team also introduced [CanGetUTxO and CanSetUTxO](https://github.com/IntersectMBO/cardano-ledger/pull/4867) type classes, reorganized the ledger state, and made the `utxosDeposited` field strict. On the testing side, they updated the specifications to correct the `SecurityGroup` parameters, added `genIssuerKeys`, upgraded the `cborg` library, and improved the `mkAddr/mkCred` interfaces. Finally, they removed a broken `symlink` from the repository.

### SCALING

This week, the **Mithril** team completed the [activation of the ‘Pythagoras’ Mithril era](https://github.com/input-output-hk/mithril/issues/2034) on the mainnet, which occurred as expected at the transition to Cardano epoch 539. They also created the pre-release for the new distribution [2506.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2506.0-pre).

The team continued implementing incremental certification of the Cardano database, working on the client library, client CLI, and WASM client. They also kept [implementing monitoring and dashboarding](https://github.com/input-output-hk/mithril/issues/2249). Additionally, they completed the dependency builder refactoring in the aggregator.

Finally, the team fixed some [flakiness in end-to-end tests in the CI](https://github.com/input-output-hk/mithril/issues/2222) and prepared for sunsetting the SanchoNet network.

The **Leios** team worked on cryptography benchmarking and cost calculator improvements. The team completed a reference implementation for Leios cryptography and enhanced the online cost calculator with user-requested features. They also updated both Haskell and Rust simulations to improve visualization and network modeling capabilities.

### VOLTAIRE 

The delegate-approved constitution is still pending approval. Watch this space for more news.

In another first for Cardano, the budget approval socialization process has begun, with all proposed budgets being examined by the community of ada holders, ready for on-chain voting.

### CATALYST 

Onboarding for Fund13 is moving forward smoothly, with 97% of the onboarding form completed, 95% of statements of milestones (SOM) submitted, 79% of SOMs signed off, 76% of due diligence completed, and 92% of test transactions finalized. The Catalyst team is partnering with Cardano Spot to expand community reach and improve transparency across the Cardano ecosystem. While town halls remain on pause, expect weekly Twitter (X) Spaces featuring the Catalyst team to highlight upcoming product developments. 

### EDUCATION

This week, the **education** team is working on refactoring the Cardano developer course to introduce a Bootcamp component, continuous integration, and updates to the content and code base. They are also planning a foundational course on zero knowledge proofs and Midnight education.

![](https://ucarecdn.com/4f489e41-3ac4-40e7-a86f-90b20cabc39d/-/preview/-/format/auto/-/quality/smart/)

### **エコシステム**

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

**Cardanoエコシステム**は、主要な分野で着実な進歩を続けています。現在、1,985のプロジェクトがこのプラットフォーム上に構築されています。205,932のトークンポリシーの下で1,068万のネイティブトークンが発行されています。このことは、一貫したトークンアクティビティを示しています。

ネットワークの使用状態は安定しており、これまでに1億619万件のトランザクションが処理されています。132万1000の委任済みウォレットがネットワークのステーキングプロセスに貢献しています。スマートコントラクトのインフラは徐々に発展しており、125,534のPlutusスクリプトがデプロイされ、うちAikenスクリプトは4,876を数えます。1,078人のDRepが活動しており、オンチェーンガバナンスへの参加の増加を反映しています。

その他のニュース：

●    [Input | Outputの暫定憲法委員会（ICC）](https://x.com/InputOutputHK/status/1890102367779008903)では、ガバナンスアクション「暫定憲法をCardano憲法に置き換える」に、7人のメンバーが全会一致で「Yes」を投票しました。

●    [Cardano財団](https://x.com/Cardano_CF/status/1889998605462712571)は暫定憲法をCardano憲法に置き換えるガバナンスアクションに「Yes」と投じた理由を公表しました。

●    [Cointelegraph](https://x.com/Cointelegraph/status/1889082304917594511)は、Grayscaleがニューヨーク証券取引所にCardano ETFを申請したと報じました。

●    [Mauro Andreoli](https://x.com/MauroAndreoliA/status/1888977647234908468)は、チューリッヒ大学による今年の「Deep Dive Into Blockchain」コースへのCardanoコミュニティからの参加者の特定、推薦を支援します。

●    [Intersect](https://x.com/IntersectMBO/status/1890110158858051831)はトレジャリー成長率を20%から10%に引き下げるインパクト分析を準備すると発表しました。

●    [Atrium Labs](https://x.com/atrium_lab/status/1890087740169200081)はDiffusionバスケット投票を締めくくり、最初のステーキングバスケットに選ばれた50のSPOのリストを公開しました。

### コアテクノロジー

**台帳**チームは複数のパフォーマンス改良を実装しました。Plutusスクリプトコンテキストの冗長な計算の回避、ガバナンス機能のメモリーオーバーヘッドの削減、不要なトランザクション保持を引き起こすスペースリークの排除に焦点を当てました。主な変更点は、[TxInfoのメモ化](https://github.com/IntersectMBO/cardano-ledger/pull/4854)、[メモリー使用量の削減](https://github.com/IntersectMBO/cardano-ledger/pull/4826)、[DefaultVoteのCBORインスタンス](https://github.com/IntersectMBO/cardano-ledger/pull/4860)の追加などです。[CanGetUTxO型クラスとCanSetUTxO](https://github.com/IntersectMBO/cardano-ledger/pull/4867)型クラスを導入し、台帳ステータスを再編成し、utxosDepositedフィールドを厳格にしました。テストに関しては、SecurityGroupパラメーターを修正するための仕様の更新、genIssuerKeysの追加、cborgライブラリーのアップグレード、mkAddr/mkCredインターフェイスの改良を行いました。壊れたsymlinkをリポジトリから削除しました。

### スケーリング

**Mithril**チームはメインネット上で[Pythagoras Mithril期のアクティベーション](https://github.com/input-output-hk/mithril/issues/2034)を完了しました。これは、Cardanoエポック539への移行時に予定通りに実行されました。また、新しいディストリビューションのプレリリース[2506.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2506.0-pre)も作成しました。

Cardanoデータベースの増分認証の実装を続け、クライアントライブラリー、クライアントCLI、WASMクライアントに取り組みました。[監視とダッシュボードの実装](https://github.com/input-output-hk/mithril/issues/2249)も続けました。アグリゲーターで依存関係ビルダーのリファクタリングを完了しました。

[CIのエンドツーエンドテスト](https://github.com/input-output-hk/mithril/issues/2222)で脆弱性を修正し、SanchoNetネットワークを終了する準備をしました。

**Leios**チームは暗号ベンチマークとコスト計算機の改良に取り組みました。Leios暗号のリファレンス実装を完了し、ユーザーからリクエストされた機能を追加してオンラインコスト計算機を強化しました。また、HaskellとRust両方のシミュレーションを更新し、可視化とネットワークモデリングの性能を向上させました。

### VOLTAIRE 

代表者が承認した憲法は未だ承認待ちです。詳細は、このスペースをご覧ください。

Cardanoのもう1つの初の取り組みとして、予算承認の社会化プロセスが始まりました。すべての予算案はADA保有者コミュニティによって検討され、オンチェーン投票に向けて準備が整っています。

### CATALYST 

Fund13のオンボーディングは順調に進んでいます。オンボーディングフォームの97%が完了し、マイルストンステートメント（SOM）の95%が提出、79%が承認され、デューデリジェンスの76%、テストトランザクションの92%が完了しました。CatalystチームはCardano Spotと提携し、コミュニティへのリーチを拡大し、Cardanoエコシステム全体の透明性を向上させています。タウンホールは休止中ですが、Catalystチームが登場する毎週のTwitter（X）スペースでは、今後の製品開発に焦点が当てられる見込みです。 

### 教育

**教育**チームはCardano開発者コースのリファクタリングに取り組んでおり、Bootcampコンポーネント、継続的統合、コンテンツとコードベースの更新を導入しています。ゼロ知識証明とMidnightの基礎教育講座も計画中です。
