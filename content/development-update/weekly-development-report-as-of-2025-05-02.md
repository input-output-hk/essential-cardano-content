---
title: Weekly development report as of 2025-05-02
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/76fb738a-d5fc-44c9-bd63-f8278607833e/
image_text: Weekly development report as of 2025-05-02
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem shows sustained activity and gradual growth across key metrics. The number of projects building on the platform has reached 1,997, while 1.33 million delegated wallets indicate ongoing user engagement. The network has processed 108.98 million transactions, a 0.23% increase.

Asset activity has also increased, with 10.78 million native tokens issued under 213,259 token policies. Development activity includes 131,917 Plutus scripts and 6,507 Aiken scripts, signifying growing smart contract deployment. Governance participation remains strong with 1,282 DReps, 954 of which are active (up 1.66%). Development momentum is further evidenced by 259 GitHub commits, highlighting continuous contributions to the Cardano codebase.

In other news:

*   [Cardano has surpassed Ethereum](https://x.com/Crispy_Craps/status/1917287189685108804?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1917287189685108804%7Ctwgr%5Eadf15987638686474426bcdf3bce7f2ca3a25dda%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fapp.brandwatch.com%2Fproject%2F1998384148%2Fdashboards%2F1791770) in yearly core developer activity, according to [Cryptometheus](https://cryptometheus.com/).
    
*   [Bodega Market](https://x.com/BodegaCardano/status/1918005747956253068) has partnered with Sundial to build what they aim to be Bitcoin’s first prediction market.
    
*   [TapTools](https://x.com/TapTools/status/1918022657922220046) has launched the Cardano Builder DAO, a smart contract-governed funding mechanism to support builders in the Cardano ecosystem.
    
*   [Metera](https://x.com/MeteraProtocol/status/1916964142109372578) mainnet is now officially live, enabling users to trade indexes on Cardano.
    

### CORE TECHNOLOGY

This week, the consensus team updated its centralized chain-sync-jumping model to act as a drop-in/stand-in for the real model, simplifying troubleshooting of [property-test failures](https://github.com/IntersectMBO/ouroboros-consensus/pull/1466). They also joined the Cardano Foundation’s [Antithesis workstream](https://cardano-foundation.github.io/antithesis/kick-off-antithesis/) to widen node test coverage and robustness, and enriched the `db-immutaliser` so it can inspect entries in VolatileDB.

The team released Node 10.4.1, which introduces the production-ready [UTXO-HD backend](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/utxo-hd/Overview/) (in-memory by default; LMDB for experimental use). Benchmarks show no network impact, a slight CPU reduction, and only a small heap increase (~2% to 5%), which remains below pre-10.3 levels thanks to earlier memory optimizations.

### WALLETS AND SERVICES

This week,  **Lace** took a major step towards broader accessibility and versatility with the release of[Lace v.1.22](https://www.lace.io/blog/lace-1-22-0-release). This update introduces support for the Firefox browser, rolls out Bitcoin integration (beta), and includes various performance enhancements to provide a smoother Web3 experience. For more information , visit the [Lace blog](https://www.lace.io/blog).

### SMART CONTRACTS

This week, strictness analysis was added to both UPLC and PIR, enabling optimizations that combine call-site inlining with safe strictification of bindings—reducing computational cost and script size. 

In preparation for the next hard fork, the team finalized the `dropList` [specification](https://github.com/IntersectMBO/plutus/pull/7033), completed [conformance testing](https://github.com/IntersectMBO/plutus/pull/7045) for builtin arrays, and advanced work on Boolean casing and costing for the modular-exponentiation primitive, both slated for completion soon. On certified compilation, test coverage has expanded, several decision-procedure issues were fixed, and work continues on the remaining recently identified problems.

### SCALING

The **Hydra** team has released v.0.21.0, a major update that includes numerous changes and enhancements. The focus now shifts to supporting the Glacier Drop, adding a Blockfrost-based chain layer, and resolving existing bugs in the incremental-commit workflow, which is still in beta until these issues are fixed. Additionally, ongoing daily improvements will continue to be made.

The **Mithril** team released the pre-release version of the `2517.0-pre` distribution. This version supports Cardano node v.10.3.1 and allows for signing ancillary files in the Cardano database snapshots using an IOG key. It also includes various bug fixes and improvements. The team continued implementing incremental certification for the Cardano database, also known as Cardano node database v2, which has been activated on the `release-preprod` test network.

The team has completed the proof of concept for the Mithril/ALBA aggregation proof system. They also simplified the configuration of the aggregator's commands and improved the dependency injection process. In addition, they implemented a publisher abstraction to facilitate the publication of signatures in the signer.

Finally, the team focused on speeding up the compilation time of Rust nodes and libraries while continuing to refactor the STM cryptographic library for improved clarity.

### VOLTAIRE

The Intersect committee elections are in progress, closing on May 7. There is one more X Space to meet the candidates:

*   May 6, 4pm UTC –  [AMA/Applicants Spotlight](https://lu.ma/5kx1vlyw)
    

(The link shows the event in your local time zone and includes a registration button).

Next, there will be elections for the constitutional committee. Registration is open from May 5 to May 31. Any ada holder can [join Intersect](https://members.intersectmbo.org/registration) and register as a candidate. Community voting will be open from June 10 to June 30, 2025. Watch this space for more details.

### EDUCATION

This week, the **education** team is preparing content for the Cardano Days sessions as part of the Cardano community Azteca 2025 event in Mexico and at the [National Technical University of Athens](https://www.ntua.gr/en/) in the Greek capital next month. They are also creating content for various modules of the Midnight Pioneer program and are updating the Cardano developer course.

![](https://ucarecdn.com/dd07f1fe-bb2b-43d6-8ac8-0ea8bb6454c1/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは、主要な指標全般で堅調な活動と成長を見せています。このプラットフォームで構築されたプロジェクトの数は1,997に増加し、133万委任済みウォレットがユーザーの関与が持続していることを示しています。ネットワークは、0.23%増の1億898万件のトランザクションを処理しました。

資産の活動も増加し、213,259のトークンポリシーの下で1,078万のネイティブトークンが発行されました。開発関連の活動には131,917のPlutusスクリプトと6,507のAikenスクリプトが含まれており、スマートコントラクトのデプロイの拡大を示唆しています。ガバナンスへの参加は依然として強く、DRepは1,282人、うち954人がアクティブです（1.66%増）。開発の勢いは、259のGitHubコミットによりさらに裏付けられており、Cardanoコードベースへの継続的な貢献が浮き彫りにされています。

その他のニュース：

*   [Cryptometheus](https://cryptometheus.com/)によると、コア開発者の年間活動量において、[CardanoがEthereumを上回りました](https://x.com/Crispy_Craps/status/1917287189685108804?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1917287189685108804%7Ctwgr%5Eadf15987638686474426bcdf3bce7f2ca3a25dda%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fapp.brandwatch.com%2Fproject%2F1998384148%2Fdashboards%2F1791770)。
    
*   [Bodega Market](https://x.com/BodegaCardano/status/1918005747956253068)はSundialと提携し、ビットコインの最初の予測市場となることを目指しています。
    
*   [TapTools](https://x.com/TapTools/status/1918022657922220046)は、Cardanoエコシステムのビルダーをサポートするスマートコントラクト管理の資金調達メカニズムであるCardano Builder DAOを立ち上げました。
    
*   [Metera](https://x.com/MeteraProtocol/status/1916964142109372578)メインネットは現在公式に稼働中で、ユーザーはCardano上でインデックス取引ができるようになりました。
    

### コアテクノロジー

コンセンサスチームは、集中型チェーン同期ジャンプモデルを、実際のモデルのドロップイン/スタンドインとして機能し、[プロパティテストの失敗](https://github.com/IntersectMBO/ouroboros-consensus/pull/1466)のトラブルシューティングを簡素化するよう更新しました。Cardano財団の[アンチテーゼワークストリーム](https://cardano-foundation.github.io/antithesis/kick-off-antithesis/)に参加してノードテストのカバレッジと堅牢性を拡大し、VolatileDBのエントリーを検査できるように`db-immutaliser`を強化しました。

Node 10.4.1をリリースしました。これには本番環境に対応した[UTXO-HDバックエンド](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/utxo-hd/Overview/)が導入されています（デフォルトはメモリー内、実験的に使用にはLMDB）。ベンチマークではネットワークへの影響はなく、CPU使用率のわずかな低下が見られます。わずかなヒープ増加（2%～5%）が示されていますが、これは以前のメモリー最適化のおかげで10.3以前のレベルを下回っています。

### ウォレットとサービス

**Lace**は[v.1.22](https://www.lace.io/blog/lace-1-22-0-release)リリースにより、より幅広いアクセシビリティと汎用性に向けて大きな一歩を踏み出しました。この更新ではFirefoxブラウザーサポートの導入、ビットコイン統合（ベータ版）のロールアウトのほか、よりスムーズなWeb3体験を提供するためのさまざまなパフォーマンス強化が行われています。詳細は、[Laceのブログ](https://www.lace.io/blog)をご覧ください。

### スマートコントラクト

UPLCとPIRに厳密性分析を追加し、呼び出し元でのインライン展開と安全な束縛の厳格化を組み合わせた最適化を可能にすることで、計算コストとスクリプトサイズを削減しました。 

次のハードフォークの準備として、`dropList`[仕様](https://github.com/IntersectMBO/plutus/pull/7033)の最終決定をし、組み込み配列の[適合性テスト](https://github.com/IntersectMBO/plutus/pull/7045)を完了しました。モジュラー指数演算プリミティブのブール値のケーシングとコスト評価に関する作業を進めました。これは両方とも近日中に完了する見込みです。認定されたコンパイルに関しては、テストカバレッジを拡大し、決定手順における複数の問題を修正しました。残りの最近特定された問題については作業を継続しています。

### スケーリング

**Hydra**チームは、多くの変更と拡張を含むv.0.21.0をリリースしました。現在、焦点は、Glacier Dropのサポート、Blockfrostベースのチェーンレイヤーの追加、インクリメンタルコミットワークフローの既存のバグの解決に移っています。ワークフローはこれらの問題が修正されるまでベータ版のままとなります。日々の改良は継続しています。

Mithrilチームは`2517.0-pre`ディストリビューションのプレリリース版をリリースしました。このバージョンはCardanoノードv.10.3.1をサポートし、Cardanoデータベーススナップショット内の補助ファイルにIOG鍵を使用して署名することができます。また、さまざまなバグ修正や改良も含まれています。`release-preprod`テストネットワーク上で有効化されたCardanoデータベース（Cardanoノードデータベースv2）の増分認証の実装を継続しました。

Mithril/ALBAアグリゲーション証明システムの概念実証の作業を完了しました。アグリゲーターのコマンド設定を簡素化し、依存性の注入プロセスを改善しました。署名者における署名の公開を容易にするため、パブリッシャー抽象化を実装しました。

Rustノードとライブラリーのコンパイル時間を短縮することに焦点を当て、STM暗号ライブラリーの明瞭さを高めるリファクタリングを続けました。

### VOLTAIRE

Intersect委員会の選挙は現在進行中であり、5月7日に締め切られます。候補者に会うためのXスペースはもう1回開催されます。

*   5月6日16:00（UTC）- [AMA/候補者スポットライト](https://lu.ma/5kx1vlyw)
    

（リンク先には登録ボタンがあり、ローカルタイムでイベントが表示されます）

次は、憲法委員会の選挙が行われます。登録期間は5月5日から5月31日までです。ADA保有者は誰でも[Intersectに参加](https://members.intersectmbo.org/registration)し、候補者として登録することができます。コミュニティ投票は、2025年6月10日から6月30日まで行われます。詳細は、こちらをご覧ください。

### 教育

**教育**チームは、来月CardanoコミュニティによるメキシコのAzteca 2025イベントと、ギリシャの[アテネ国立工科大学](https://www.ntua.gr/en/)でのイベントの一環として開催される、Cardano Daysセッションのコンテンツを準備しています。Midnightパイオニアプログラムのさまざまなモジュールのコンテンツを作成している他、Cardano開発者コースの更新も行っています。
