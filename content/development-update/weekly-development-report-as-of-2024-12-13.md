---
title: Weekly development report as of 2024-12-13
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/2df2e0c9-f138-4224-8a13-aafbdbba7ce4/
image_text: Weekly development report as of 2024-12-13
---

Dear community, this report marks the final development update for 2024. Regular updates will resume on January 10, 2025.

Wishing everyone happy holidays and a wonderful New Year🎄! Here’s to a year ahead filled with exciting progress, new milestones, and shared success. ✨

### CORE TECHNOLOGY

Over the past few weeks, the **networking** team collaborated with the Cardano Foundation on measuring network performance and transaction inclusion times. Although the network load has increased since early November, the majority of transactions are still included within two blocks of submission, indicating the network remains largely uncongested. Only 59 out of approximately 3,700 test transactions took more than two blocks for inclusion, which means that 98.4% of test transactions were processed within the two-block limit (with a maximum wait time of five blocks (201 seconds)).

During the recent network working group meeting (NWG), the team addressed strategies for running hot standby block-producing nodes using peer-to-peer (P2P) networking. A short-term solution involves implementing initiator-only connections for local roots, enabling stake pool operators (SPOs) to have hidden hot standby nodes that still receive blocks but do not propagate them until needed. This change is outlined in this [issue](https://github.com/IntersectMBO/ouroboros-network/issues/5020) and [5021](https://github.com/IntersectMBO/ouroboros-network/issues/5021) and [5017](https://github.com/IntersectMBO/ouroboros-network/issues/5017) pull requests. Once this functionality is in place, the non-P2P code can be removed. Long-term, there are plans to allow controlling block propagation of self-produced blocks via `cardano-cli`.

In addition, work continued on making `ouroboros-network` [reusable for both](https://github.com/input-output-hk/CIPs/pull/137) `cardano-node` and `mithril`. The new [block-fetch client](https://github.com/input-output-hk/ouroboros-network/pull/4919) for Genesis was merged, offering improved logic and design as described [here](http://block-fetch-genesis).

The **consensus** team reviewed a \`lsm-trees**\`** milestone presentation from Well-Typed, showcasing progress in two key areas: snapshot support for persisting ledger snapshots and table union for storing more ledger state parts on disk. The team also completed the UTXO-HD code review. Before merging, they plan to run additional system-level benchmarks to understand the performance impact.

Additionally, they submitted a request to the technical steering committee regarding how the node should handle low apparent participation and added support for computing and verifying [cyclic redundancy checks](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) (CRCs) of ledger state snapshots, increasing robustness when [loading data from disk](https://github.com/IntersectMBO/ouroboros-consensus/pull/1319).

### WALLETS AND SERVICES

This week, the **Daedalus** team released v.7.0.2 for mainnet, pre-production, and preview networks.This release enables users to delegate their voting power to delegated representatives (DReps) or choose an automatic voting option (abstain or no confidence), ensuring that the Daedalus community has a straightforward way to make their voices heard in the future governance of Cardano.

In the new voting tab, users can select their registration preference for each wallet held in Daedalus.

Existing users will get a prompt to update via the Daedalus newsfeed. If you are new to Daedalus and would like to download this new release, download it only from the [official site](https://daedaluswallet.io/en/download/). For more details, see the [release notes](https://iohk.zendesk.com/hc/en-us/sections/360002144313-Updates).

### SMART CONTRACTS

This week, the **Plutus** team opened a [CIP](https://github.com/cardano-foundation/CIPs/pull/946) to add modules to Untyped Plutus Core. This CIP proposes a solution to Cardano’s script size limitations by enabling the use of modular code through reference inputs, allowing scripts to share and reuse code across multiple transactions. While the core implementation avoids changes to existing components, higher-performance variations requiring CEK machine updates will need to balance implementation costs and benchmarking.

### SCALING

This week, the **Hydra** team focused on finalizing outstanding work before the holiday season. The team remains dedicated to finishing work on incremental commits, advancing multiple-version support for `hydra-explorer`, and supporting the Hydra Doom tournament.

This week, the **Mithril** team continued to implement the incremental certification of the Cardano database. They kept working on creating and synchronizing the artifacts. The team finished exploring solutions for signer registration in networks with multiple aggregators and updated the [About Mithril](https://mithril.network/doc/mithril/intro) section of the website. They also progressed with developing a cache for certificate verification in the WASM client.

Finally, the team accelerated the creation of signer fixtures in the tests and added execution rights to the binaries pre-built in the CI.

### VOLTAIRE

The [Cardano Constitutional Convention](https://cardanoconvention.com/) was a great success. After two days of debate, the constitution was approved by an overwhelming 95% of delegates.

The constitution was officially signed on the third day of the convention, and is now entering the process of ratification by an on-chain vote of the community of ada holders.

The second and final stage of the Chang upgrade, the Plomin hard fork, is currently planned for January 2025. After this, Cardano’s move to the Voltaire development phase will be complete and Cardano will be fully governed by the community.

### CATALYST

This week in **Catalyst** has been exciting, highlighted by town hall 186 and the announcement of another town hall scheduled for next week before the holidays. The voting period, which ends on December 12 at 11 AM UTC, has seen great participation from the community. Congratulations to everyone who helped advance Cardano governance and bring top projects into Catalyst.

The Catalyst team appreciates the community's involvement, especially following the successful Pitch Fest that showcased Fund13 proposals during the voting period. Updates from the constitutional convention in Argentina and Nairobi were also shared during town hall 186 and can be [rewatched here](https://www.youtube.com/live/9lrBOAsqN0k?si=g8JsaDaRkgSsA3Nb).

Looking ahead, the technical development of Catalyst Voices remains a priority. There are plans to phase out Ideascale in the coming months to create a more seamless process.

### EDUCATION

This week, the **education** team is reflecting on the success of their learning sessions in Buenos Aires at the [Constitutional Convention](https://cardanoconvention.com/) and [Cardano Tech Week](https://lu.ma/jcsgq39k). For a taste of Tech Week, check out this [video](https://x.com/cardanosolar/status/1867276196309823783?s=46&t=Q2v57gsWXn0ZCnHxso3bWg).

They are also developing a community survey about the education events and courses held in 2024. This survey will be shared on Discord next week, and the results will be analyzed to ensure that they can offer more of what the community loves in 2025.

![](https://ucarecdn.com/0fdb024d-a306-48b8-86f1-985cdcfcc9a8/-/preview/-/format/auto/-/quality/smart/)

コミュニティの皆様、2024年の開発更新情報は、本レポートをもって終了いたします。定期更新は2025年1月10日に再開されます。

どうぞ良いお年をお迎えください。🎄エキサイティングな進歩、新しいマイルストン、そして共有された成功で満たされる1年が始まります。✨

### コアテクノロジー

この数週間、**ネットワーキング**チームはCardano財団と協力してネットワークパフォーマンスとトランザクションインクルージョン時間を測定しました。ネットワーク負荷は11月初旬から増加していますが、トランザクションの大部分は依然として2つの送信ブロックに含まれており、ネットワークはほとんど輻輳していないことが示されています。約3,700件のテストトランザクションのうち、2ブロック以上を使ったのは59件であり、テストトランザクションの98.4%が2ブロック以内に処理されたことになります（最大待ち時間は5ブロック（201秒））。

先般のネットワークワーキンググループ会議（NWG）では、ピアツーピア（P2P）ネットワークを使用してホットスタンバイブロックを生成するノードを実行するための戦略について話し合われました。短期的な解決策としては、ローカルルート用のイニシエーターのみの接続を実装し、ステークプールオペレーター（SPO）が隠れたホットスタンバイノードを持つことを可能にするというものです。このブロックは受信はしますが必要になるまで伝播は行いません。この変更の概要は、この[イシュー](https://github.com/IntersectMBO/ouroboros-network/issues/5020)と[5021](https://github.com/IntersectMBO/ouroboros-network/issues/5021)および[5017](https://github.com/IntersectMBO/ouroboros-network/issues/5017)のプルリクエストで説明されています。一度この機能が導入されると、非P2Pのコードを削除できるようになります。長期的には、自己生成ブロックの伝播をCardano-cliによって制御できるようにする計画があります。

ouroboros-networkをcardano-nodeとmithrilの[両方で再利用可能](https://github.com/input-output-hk/CIPs/pull/137)にするための作業が続けられました。Genesisの新しい[ブロックフェッチクライアント](https://github.com/input-output-hk/ouroboros-network/pull/4919)をマージし、[ここ](http://block-fetch-genesis)で説明するように改善されたロジックと設計を提供しました。

**コンセンサス**チームは、Well-Typedのlsm-treesマイルストンプレゼンテーションをレビューし、永続的な台帳スナップショットのサポートと、より多くの台帳ステータスパーツをディスクに格納するためのテーブルユニオンのサポートという2つの主要な分野での進捗状況を示しました。UTXO-HDのコードレビューは完了しました。マージの前に、パフォーマンスへの影響を把握するためにシステムレベルのベンチマークを追加的に実行する予定です。

明らかに低い参加率をノードがどのように処理するかについて技術運営委員会に要求を提出し、台帳ステータススナップショットの[CRC（巡回冗長検査）](https://ja.wikipedia.org/wiki/%E5%B7%A1%E5%9B%9E%E5%86%97%E9%95%B7%E6%A4%9C%E6%9F%BB)の計算と検証のサポートを追加し、[ディスクからデータをロード](https://github.com/IntersectMBO/ouroboros-consensus/pull/1319)する際の堅牢性を向上させました。

### ウォレットとサービス

**Dardalus**チームはメインネット、プリプロ、プレビューの各ネットワーク向けにv.7.0.2をリリースしました。

本リリースでは、投票権をDRep（委任代表団）に委任するか、棄権または不信任のいずれかの自動投票オプションを選択することができ、将来のCardanoガバナンスにおいてDaedalusコミュニティが意見を表明するためのシンプルな方法が保証されます。

新しい投票タブでは、Cardanoに保有されているウォレットごとに登録設定を選択できます。

既存のユーザーは、Daedalusのニュースフィードに更新を求めるプロンプトが表示されます。Daedalus初使用でこの新しいリリースをダウンロードする場合は、必ず[公式サイト](https://daedaluswallet.io/ja/download/)からのみ行ってください。詳細は、[リリースノート](https://iohk.zendesk.com/hc/en-us/sections/360002144313-Updates)をご覧ください。

### スマートコントラクト

**Plutus**チームは、Untyped Plutus Coreにモジュールを追加するための[CIP](https://github.com/cardano-foundation/CIPs/pull/946)を公開しました。このCIPは、参照インプットを介してモジュール化されたコードの使用を可能にし、スクリプトが複数のトランザクション間でコードを共有および再利用できるようにすることにより、Cardanoのスクリプトサイズ制限に対する解決策を提案しています。コア実装は既存のコンポーネントの変更を回避しますが、CEKマシンの更新を必要とする高パフォーマンスのバリエーションは実装コストとベンチマークのバランスをとる必要があります。

### スケーリング

**Hydra**チームはホリデーシーズン前に積み残した仕事を仕上げることに焦点を当てました。インクリメンタルコミットの仕上げ、hydra-explorerの複数バージョンサポートの推進、Hydra Doomトーナメントのサポートに専念しています。

**Mithril**チームは、Cardanoデータベースの増分認証の実装作業を続け、引き続きアーティファクトの作成と同期化に取り組みました。複数のアグリゲーターを持つネットワークで署名者登録のための解決策を模索し、ウェブサイトの[About Mithril](https://mithril.network/doc/mithril/intro)のセクションを更新しました。WASMクライアントで証明書検証用のキャッシュの開発を進めました。

テストにおける署名者フィクスチャーの作成を加速し、CIにあらかじめ組み込まれているバイナリへの実行権を追加しました。

### VOLTAIRE

[Cardano憲法制定会議](https://cardanoconvention.com/)は大成功を収めました。2日間にわたる協議の後、憲法は圧倒的多数となる95%の代表によって承認されました。

憲法は大会の3日目に正式に調印され、現在はADA保有者コミュニティによるオンチェーン投票の批准プロセスに入りました。

Changアップグレードの第二段階であり最終段階であるPlominハードフォークは、現在2025年1月に計画されています。この後、CardanoのVoltaire開発フェーズへの移行は完了し、Cardanoはコミュニティによって完全に統治されることになります。

### CATALYST

今週の**Catalyst**では、第186回タウンホールと年末前にもう一回タウンホールが予定されていることが発表されたことで、盛り上がりを見せました。投票は日本時間12月12日午後8時をもって終了し、コミュニティから多くの参加が見られました。Cardanoガバナンスを推進し、トッププロジェクトをCatalystに取り込むのに貢献したすべての人に祝辞を贈ります。

Catalystチームは、特に投票期間中にFund13の提案を紹介したPitch Festに続く、コミュニティの関与を高く評価しています。アルゼンチンとナイロビで行われた憲法制定会議の最新情報は第186回タウンホールで共有されており、[ここから視聴](https://www.youtube.com/live/9lrBOAsqN0k?si=g8JsaDaRkgSsA3Nb)できます。

今後、Catalyst Voicesの技術開発は引き続き優先事項です。よりシームレスなプロセスを作成するために、今後数か月でIdeascaleを段階的に廃止する予定です。

### 教育

**教育**チームは、ブエノスアイレスの[憲法制定会議](https://cardanoconvention.com/)と[Cardano Tech Week](https://lu.ma/jcsgq39k)での学習セッションの成功を振り返っています。Tech Weekの様子は、こちらの[動画](https://x.com/cardanosolar/status/1867276196309823783?s=46&t=Q2v57gsWXn0ZCnHxso3bWg)をチェックしてください。

2024年に開催された教育イベントやコースについてのコミュニティ調査にも取り組んでいます。この調査は来週Discordで共有され、2025年にコミュニティが愛するものをより多く提供できるように結果を分析します。
