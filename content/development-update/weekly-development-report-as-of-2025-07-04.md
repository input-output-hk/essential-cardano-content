---
title: Weekly development report as of 2025-07-04
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/4d4e85f7-8354-4ee9-b179-9e8ff70d69f7/
image_text: Weekly development report as of 2025-07-04
---

### ECOSYSTEM UPDATES

Cardano’s ecosystem continues to show robust growth. The network now supports 2,005 active projects, with delegated wallets remaining strong at 1.33 million, indicating sustained participation in network staking.

Smart contract deployment is also on the rise, with 138,996 Plutus scripts and 7,682 Aiken scripts currently live. The number of DReps has expanded to 1,377, with 976 active, demonstrating continued growth in on-chain governance. Developer engagement is further highlighted by a 27% surge in GitHub commits, reaching 259, underscoring the community's deep commitment to the Cardano ecosystem.

In other news:

*   [MuesliSwap](https://x.com/MuesliSwapTeam/status/1940852862256620017) has unveiled MidStarterApp, a comprehensive launch platform tailored for Midnight-based projects built on Cardano
    
*   [Flow DeFi](https://x.com/flowdefi/status/1940118008786997437) confirmed its platform will support USDA stablecoin upon mainnet launch, enhancing Cardano’s growing DeFi stack
    
*   [CTRL Wallet](https://x.com/Ctrl_Wallet/status/1940236163157303597) announced a partnership with Emurgo, with CNT support already live and further integrations planned
    
*   [BTC Grow](https://x.com/btcgrow_io/status/1940044712750284907) revealed plans for non-custodial BTC staking, leveraging Cardano smart contracts, with a testnet rollout in July.
    

### CORE TECHNOLOGY

The **ledger** team defined `PlutusV4` for the Dijkstra era, which is currently a placeholder with `PlutusV3` functionality. They also [fixed a serialization bug](https://github.com/IntersectMBO/cardano-ledger/pull/5135) for pre-Conway eras and implemented [hard fork triggers](https://github.com/IntersectMBO/cardano-ledger/pull/5098). Additionally, the team made documentation enhancements and completed minor [infrastructure improvements](https://github.com/IntersectMBO/cardano-ledger/pull/5133).

### SCALING

This week, the **Mithril** team completed the implementation of the publisher and consumer for the DMQ network using the \`[n2c local message submission](https://github.com/input-output-hk/mithril/issues/2539) `and` [n2c local message notification](https://github.com/input-output-hk/mithril/issues/2540)\` mini-protocols from the Pallas library. They also worked on creating a fake DMQ node to facilitate end to end testing. The team also completed the stabilization of the Cardano database v2 backend within the Mithril client CLI and library. Additionally, they kept implementing the [certificate chain synchronization](https://github.com/input-output-hk/mithril/issues/2534) in the follower aggregator, prepared the upgrade to  Cardano node v.10.5, and enhanced some workflows in the CI.

Finally, they continued preparing the repository for the Rust 2024 edition upgrade and progressed with refactoring the STM cryptographic library.

The **Leios** team conducted comprehensive experiments examining protocol variants, conflict handling, and bandwidth requirements. The team completed analysis of nine candidate Leios variants with different sharding strategies, performed detailed conflict experiments at 100 TPS, and validated bandwidth requirements across multiple throughput scenarios.

### CATALYST

The team is just five town halls away from reaching the milestone of 200. This week, the Catalyst team hosted [Town Hall #195](https://www.youtube.com/watch?v=RUF_717G3X8) and welcomed a special guest, Audra Gibson, who is the startup communities program lead. Their Fund13 proposal plans to launch a 10-week Founder Catalyst virtual pre‑accelerator from October to December 2025, which will offer:

*   Masterclasses on customer discovery, product-market fit, pitch coaching, fundraising, and more
    
*   Mentorship from Techstars and Web3 experts
    
*   Global networking with investors, founders, and ecosystem leaders
    
*   A final pitch showcase to Techstars, investors, and Cardano stakeholders.
    

Sounds exciting? Well, feel free to [apply](https://apply.techstars.com/), and if you’re not convinced yet, you can [read up more about it](https://www.techstars.com/techstars-cardano-founder-catalyst). Additionally, the Catalyst team is preparing to launch Fund14. If you would like a sneak peek behind the scenes, check out the [launch guide](https://projectcatalyst.io/f14launchguide.pdf). 

### EDUCATION

This week, the **education** team is assessing feedback from the successful Cardano Days event at the Institute of Science Tokyo last week. The next Cardano Days event will be at the Wyoming Blockchain Stampede in September.

Additionally, work is continuing on the self-paced Cardano Education Program (CEP) and Mastering Cardano.

![](https://ucarecdn.com/81468b37-8fac-4653-8fbe-45a08228335d/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

Cardanoエコシステムは引き続き堅調に成長しています。ネットワークは現在、2,005のアクティブなプロジェクトをサポートしており、委任済みウォレットも133万と引き続き安定しており、ネットワークステーキングへの継続的な参加を示しています。

スマートコントラクトのデプロイも増加しており、13万8,996のPlutusスクリプトと7,682のAikenスクリプトが現在稼働中です。DRepの数は1,377人に拡大し、内976人がアクティブと、オンチェーンガバナンスが成長を続けていることが示されています。開発者のエンゲージメントは、GitHubのコミット数が27%急増し259に達したことから、コミュニティがCardanoエコシステムに深くコミットしていることが明確に示されています。

その他のニュース：

*   [MuesliSwap](https://x.com/MuesliSwapTeam/status/1940852862256620017)はCardanoに構築されたMidnightベースのプロジェクト用に特化した包括的なローンチプラットフォーム、MidStarterAppを発表

*   [Flow DeFi](https://x.com/flowdefi/status/1940118008786997437)は、メインネットの立ち上げ時にプラットフォームがUSDAステーブルコインをサポートし、成長中のCardano DeFiスタック強化を確認

*   [CTRL Wallet](https://x.com/Ctrl_Wallet/status/1940236163157303597)はEmurgoとの提携を発表。CNTサポートはすでに稼働しており、さらなる統合を予定

*   [BTC Grow](https://x.com/btcgrow_io/status/1940044712750284907)は、7月にテストをネットロールアウトし、Cardanoスマートコントラクトを活用したノンカストディアルBTCステーキングの計画を発表

### コアテクノロジー

**台帳**チームはDijkstra（ダイクストラ）期のために`PlutusV4`を定義しました。現在は`PlutusV3`機能によるプレースホルダーとなっています。Conway以前の[シリアル化のバグを修正](https://github.com/IntersectMBO/cardano-ledger/pull/5135)し、[ハードフォークトリガー](https://github.com/IntersectMBO/cardano-ledger/pull/5098)を実装しました。ドキュメントを強化し、軽微な[インフラ改善](https://github.com/IntersectMBO/cardano-ledger/pull/5133)を完了しました。

### スケーリング

Mithrilチームは、DMQネットワーク用のパブリッシャーとコンシューマーの実装を完了しました。これには、Pallasライブラリーの\`[n2c local message submission](https://github.com/input-output-hk/mithril/issues/2539)`と`[n2c local message notification](https://github.com/input-output-hk/mithril/issues/2540)\`ミニプロトコルが使用されています。エンドツーエンドテストを容易にするために偽のDMQノード作成にも取り組みました。  MithrilクライアントCLIとライブラリにおけるCardano database v2バックエンドの安定化は完了しました。フォロワーアグリゲーターで[証明書チェーン同期](https://github.com/input-output-hk/mithril/issues/2534)の実装を続け、Cardanoノードv.10.5へのアップグレードを準備し、CIのワークフローを強化しました。

Rust 2024エディションへのアップグレードのためのリポジトリの準備を続け、STM暗号ライブラリーのリファクタリングを進めました。

**Leios**チームはプロトコルバリアント、競合処理、帯域幅要件を調査する包括的な実験を行いました。異なるシャーディング戦略を持つ9つのLeiosバリアント候補の分析を完了し、100 TPSで詳細な競合実験を行い、複数のスループットシナリオで帯域幅要件を検証しました。

### CATALYST

第200回タウンホールまであと5回となりました。Catalystチームは[第195回タウンホール](https://www.youtube.com/watch?v=RUF_717G3X8)を開催し、スタートアップコミュニティプログラム責任者のAudra Gibsonが特別ゲストとして参加しました。Fund13の提案では、2025年10月から12月にかけて、10週間の創業者向けCatalyst仮想プレアクセラレーターを開始する予定です。ここでは、以下が提供されます。

*   顧客発見、製品市場への適合、ピッチコーチング、資金調達などに関するマスタークラス
    
*   TechstarsとWeb3エキスパートによるメンターシップ
    
*   投資家、創設者、エコシステムリーダーとのグローバルネットワーキング
    
*   Techstarsの投資家とCardanoのステークホルダーへの最終ピッチショーケース
    

エキサイティングだと感じたら、ぜひ[お申し込み](https://apply.techstars.com/)ください。もっと情報が必要な場合は、[ここで詳細をご覧ください](https://www.techstars.com/techstars-cardano-founder-catalyst)。Fund14のローンチに向けた準備も進んでいます。舞台裏を覗き見したい方は、 [ローンチガイド](https://projectcatalyst.io/f14launchguide.pdf)をチェックしてみてください。 

### 教育

**教育**チームは先週東京科学大学で開催したCardano Daysイベントのフィードバックを査定しています。次回のCardano Daysイベントは、9月にワイオミングで行われるBlockchain Stampedeで開催されます。

自分のペースで行うCEP（Cardano教育プログラム）と、Mastering Cardanoの作業も続けています。
