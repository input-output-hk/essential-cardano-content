---
title: Weekly development report as of 2025-07-18
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/fff5f7b7-4aed-4557-968d-add547985f20/
image_text: Weekly development report as of 2025-07-18
---

### ECOSYSTEM UPDATES

Cardano maintains steady growth and activity across its ecosystem. There are now 2,006 projects building on Cardano, while the number of delegated wallets remains strong at 1.33 million, reflecting continued network engagement. Transaction volume increased to 111.56 million, up by 0.27% since last week, indicating sustained on-chain usage.

In asset creation, the ecosystem supports 10.84 million native tokens and 218,136 token policies. Smart contract deployment also shows consistent progress with 139,516 Plutus scripts and 8,150 Aiken scripts live. Governance involvement continues to grow, with 1,386 DReps (including 977 active DReps), representing a 0.6% increase since the previous week. Additionally, developer participation remains robust with 297 GitHub commits, highlighting active technical development and community contributions.

In other news:

*   Emurgo has launched the [Cardano Card](https://x.com/thecardanocard/status/1945043214601478175), enabling payments in ADA, SOL, BTC, USDC, and USDT
    
*   [Intersect](https://x.com/IntersectMBO/status/1943696686150291631) announced the formation of a new _oversight committee_, comprising five organizations, to manage  smart contract configuration securely
    
*   [AR.io](//AR.io) [Network](http://ar.io) and Midnight Network announced a partnership focused on multiple joint projects, with some of them offering decentralized storage solutions
    
*   [Anzens Official](https://x.com/AnzensOfficial/status/1945147069443784889) partnered with SH Payments, providing ada holders with access to EU bank accounts featuring dedicated European IBANs
    
*   [Blockchain.com](//Blockchain.com)’s DeFi wallet now supports Cardano, allowing users to send, receive, and hold ada seamlessly.
    

### CORE TECHNOLOGY

Over the past two weeks, the **ledger** team focused on reducing technical debt and preparing the codebase for the upcoming Dijkstra ledger era. [They integrated Dijkstra into consensus](https://github.com/IntersectMBO/cardano-ledger/pull/5136), [refactored the max ref-script size check,](https://github.com/IntersectMBO/cardano-ledger/pull/5140) and [streamlined the](https://github.com/IntersectMBO/cardano-ledger/pull/5165) `PParamsUpdate` [application](https://github.com/IntersectMBO/cardano-ledger/pull/5165) in the Conway ledger era, improving validation logic. They updated a long-standing [MultiAsset CDDL spec](https://github.com/IntersectMBO/cardano-ledger/pull/5145) issue in Mary and Alonzo.

The team also made improvements to the `constrained-generators` library, [cleaning up the API](https://github.com/IntersectMBO/cardano-ledger/pull/5139) and migrating it to its repository to support better test data generation for internal and external use. Finally, they updated the [formal ledger specifications](https://github.com/IntersectMBO/cardano-ledger/pull/5162) and fixed [broken infrastructure links](https://github.com/IntersectMBO/cardano-ledger/pull/5152).

### SCALING

This week, the **Mithril** team completed the [certificate chain synchronization](https://github.com/input-output-hk/mithril/issues/2534) in the follower aggregator. They also continued [implementing the mock DMQ node](https://github.com/input-output-hk/mithril/issues/2627) to support end-to-end testing of decentralized signature diffusion. Additionally, the team worked on enhancing the 'verify' command on the client CLI to provide a detailed list of invalid or missing immutable files and kept preparing for the upgrade to Cardano node v.10.5 and the upcoming Mithril distribution.

Finally, they worked on [refactoring the 'CardanoNetwork'](https://github.com/input-output-hk/mithril/issues/2590) entity, enhancing the maintainability of the new website, and made progress refactoring the STM cryptographic library.

The **Leios** team achieved significant milestones in protocol development and analysis, successfully demonstrating high-throughput capabilities and exploring new protocol variants. The team conducted comprehensive experiments with the Stracciatella variant of Leios, analyzed the Linear Leios throughput efficiency, and implemented new simulation capabilities. Read this [full report](https://leios.cardano-scaling.org/news/2025/07/07/weekly-progress-summary) for more details.

### CATALYST

This week's **Catalyst** [town hall #197](https://www.youtube.com/live/rEPaY7u2UiQ?si=hsmBsIefqbE9OKMR) featured a special guest, Draper University, which recently concluded a 5-week in-person founder residency in Silicon Valley. This program supported 20 early-stage startups building on Cardano, offering entrepreneurial training, technical mentorship, and investor exposure. 

In other news, Fund14 is scheduled to officially launch on July 23, 2025. During this initial phase, only proposal submissions will be open on the new Catalyst platform. Please note that reviews, voting, and funding decisions will not occur yet, as key governance actions are still being finalized. If you plan to submit a proposal, refer to the [Fund14 launch guide](https://projectcatalyst.io/f14launchguide.pdf) for detailed information and submission requirements.

### EDUCATION

This week, the **education** team focused on the Mastering Cardano book and updates to the Cardano education program.

![](https://ucarecdn.com/65064fa6-c20c-4e9e-bc4c-f14155f289de/-/preview/-/format/auto/-/quality/smart/)エコシステム

Cardanoはエコシステム全体で着実な成長と活動を続けています。現在、Cardanoで構築されているプロジェクトは2,006件と好調を維持しており、委任されたウォレット数は133万件と、ネットワークへの継続的な関与を反映しています。トランザクション数は前週比0.27%増の1億1,156万を数え、オンチェーンでの利用が継続していることを示しています。

アセット作成については、エコシステムは1,084万のネイティブトークンと21万8,136のトークンポリシーをサポートしています。スマートコントラクトのデプロイも引き続き成長しており、13万9,516のPlutusスクリプトと8,150のAikenスクリプトが稼働中です。ガバナンスへの関与は成長を続けており、DRep数は977人のアクティブDRepを含む1,386人で、前週比0.6%増となっています。開発者の参加は引き続き強固で、GitHubコミットは297回と、積極的な技術開発とコミュニティへの貢献が示されています。

その他のニュース：

*   Emurgoは[Cardano Card](https://x.com/thecardanocard/status/1945043214601478175)をローンチ、ADA、SOL、BTC、USDC、USDTでの支払いが可能に
    
*   [Intersect](https://x.com/IntersectMBO/status/1943696686150291631)はスマートコントラクトの設定を安全に管理するため、5つの組織で構成される新しい\_監視委員会の\_設立を発表
    
*   [AR.IO Network](http://ar.io)とMidnight Networkは、複数の共同プロジェクトに焦点を当てたパートナーシップを発表、中には分散型ストレージソリューションの提供も
    
*   [Anzens Official](https://x.com/AnzensOfficial/status/1945147069443784889)はSH Paymentsと提携し、ADA保有者に欧州IBANを持つEU銀行口座へのアクセスを提供
    
*   [Blockchain.com](//Blockchain.com)のDeFiウォレットがCardano対応となり、ADAのシームレスな送受信が可能に
    

### コアテクノロジー

この2週間、**台帳**チームは来たるDijkstra台帳期に向け、技術負債の削減とコードベースの準備に注力してきました。[Dijkstraをコンセンサスに統合し、](https://github.com/IntersectMBO/cardano-ledger/pull/5136)[最大ref-scriptサイズチェックをリファクタリング](https://github.com/IntersectMBO/cardano-ledger/pull/5140)し、Conway台帳期の`PParamsUpdate`[アプリケーションを合理化](https://github.com/IntersectMBO/cardano-ledger/pull/5165)して検証ロジックを改善しました。MaryとAlonzoの懸案事項であった[MultiAsset CDDL仕様](https://github.com/IntersectMBO/cardano-ledger/pull/5145)を更新しました。

`constrained-generators`ライブラリーを改良し、[APIをクリーンアップ](https://github.com/IntersectMBO/cardano-ledger/pull/5139)してリポジトリに移行し、内部および外部で使用するためのテストデータ生成の向上に努めました。[台帳の形式仕様記述](https://github.com/IntersectMBO/cardano-ledger/pull/5162)を更新し、[壊れたインフラリンク](https://github.com/IntersectMBO/cardano-ledger/pull/5152)を修正しました。

### スケーリング

**Mithril**チームはフォロワーアグリゲーターの[証明書チェーン同期](https://github.com/input-output-hk/mithril/issues/2534)を完了しました。分散型署名拡散のエンドツーエンドテストをサポートするための、[模擬DMQノードの実装](https://github.com/input-output-hk/mithril/issues/2627)を続けました。無効または欠落している不変ファイルの詳細なリストを提供できるようクライアントCLIにある'verify'コマンドを強化し、Cardanoノードv.10.5と今後のMithrilディストリビューションへのアップグレードの準備を続けました。

['CardanoNetwork'エンティティのリファクタリング](https://github.com/input-output-hk/mithril/issues/2590)、新しいウェブサイトの保守性の強化を行い、STM暗号ライブラリーのリファクタリングを進めました。

**Leios**チームはプロトコル開発と分析において重要なマイルストーンを達成し、ハイスループット能力を示した他、新しいプロトコルバリアントを調査しました。LeiosのStracciatellaバリアントを用いて包括的な実験を行い、Linear Leiosのスループット効率を分析し、新しいシミュレーション機能を実装しました。詳細は、この[レポート](https://leios.cardano-scaling.org/news/2025/07/07/weekly-progress-summary)を参照してください。

### CATALYST

**Catalyst**[第197回タウンホール](https://www.youtube.com/live/rEPaY7u2UiQ?si=hsmBsIefqbE9OKMR)は、最近シリコンバレーで5週間の対面プログラムFounder Residencyを終えたドレイパー大学を特別ゲストに迎えました。このプログラムは、Cardano上で構築する20の初期段階スタートアップを支援し、起業トレーニング、技術的な指導、投資家との繋がりを提供しました。 

Fund14の公式ローンチは2025年7月23日を予定しています。初期段階では、新しいCatalystプラットフォームで提案書の提出のみが開始されます。なお、重要なガバナンスアクションが確定するまで、レビュー、投票、資金調達の決定は行われませんのでご注意ください。提案書を提出する際には、[Fund14ローンチガイド](https://projectcatalyst.io/f14launchguide.pdf)を参照して[詳細情報と提出要件を確認してください。](https://projectcatalyst.io/f14launchguide.pdf)

教育

**教育**チームは書籍『Mastering Cardano』に注力したほか、Cardano教育プログラムを更新しました。
