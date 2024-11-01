---
title: Weekly development report as of 2024-11-01
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/5fdd86e6-ae91-425a-a5bc-62ef98e6033b/
image_text: Weekly development report as of 2024-11-01
---

### CORE TECHNOLOGY

This week, the core technology teams released node v.10.1.1, a mainnet release to support the Chang #2 upgrade. This release brings several enhancements to the governance system, including:

*   Support for stake pool operators (SPOs) delegating to pre-defined voting options
    
*   Support for auto-abstain delegate representatives (DRep) votes, replacing abstention via rewards address delegation.
    

Additionally, node v.10.1.1 enables new Plutus primitives as defined in [CIP-0122](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0122), [CIP-0123](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0123), and [CIP-0127](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0127) and includes various improvements to the ledger, CLI, API, and networking codebases.

See [release notes](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.1) for more details.

The **consensus** team focused on investigating performance improvements in mempool snapshotting, as seen in recent node benchmarks. They [discussed potential further optimizations](https://github.com/IntersectMBO/ouroboros-consensus/issues/568#issuecomment-2432329822) and began reviewing the UTXO-HD [feature branch](https://github.com/IntersectMBO/ouroboros-consensus/pull/1267) after resolving prior issues.

Additionally, the team published the `io-classes-extra` repository, which contains concurrency utilities extracted from the consensus codebase. They also outlined their [plans for Q4 2024](https://github.com/IntersectMBO/ouroboros-consensus/milestone/5) and encouraged community feedback through their [Discord channel](https://discord.com/channels/1136727663583698984/1239889178938966016).

Regarding UTXO-HD, Well-Typed presented another milestone for the LSM tree implementation. The latest version includes incremental merges to prevent significant spikes in resource usage (CPU, disk, and memory) or the duplication of table handles for efficient management of ledger state sequences. Furthermore, the test coverage of the LSM tree library has been improved.

### WALLETS AND SERVICES

This week, the **Lace team** released Lace v.1.17, introducing new features to the platform, including the launch of a beta program and the beta release of shared wallets.

The beta program offers users early access to upcoming features and the opportunity to provide feedback, helping shape the future of Lace.

Participants can now access shared wallets, also known as multi-signature (multi-sig) wallets. Shared wallets enhance security by requiring multiple authorized parties to approve transactions before execution. Users can create a shared wallet, add co-signers, and set custom signing conditions directly within Lace. This feature utilizes the [CIP-1854](https://cips.cardano.org/cip/CIP-1854) derivation standard for compatibility and security, distributing transaction authority across multiple keys — ideal for scenarios that require collective governance over digital assets.

To join the beta program and explore these new features, navigate to the ‘Settings’ menu in Lace and select ‘Beta Program’.

Finally, the team is excited to announce the gradual migration process from Nami to Lace, which will begin in Q4 of 2024. For more information about this, check out the [Lace blog.](https://www.lace.io/blog/a-guide-to-laces-new-nami-mode)

### SMART CONTRACTS

This week, the **Plutus** team focused on end-to-end testing for the new primitives to be enabled with Chang #2, as well as certified compilation. The team will soon release a tool for certified optimization of UPLC programs.

### SCALING

This week, the **Hydra** team focused on internal planning and made significant progress on incremental commits. They advanced the development of on-chain validators and associated tests, and this work is ongoing. The team has also begun addressing partial fanout by making initial steps based on the ongoing efforts of [Thomas Vellekoop and other contributors](https://github.com/perturbing/plutus-accumulator).

The **Mithril** team released the new [CIP-137 - decentralized message queue](https://discord.com/channels/826816523368005654/1014019542504185876/1301043609092751410), which will be used to diffuse Mithril signatures in the future.

The team also implemented usage metrics with a Prometheus endpoint and published the Grafana dashboard for the aggregator. They have respun the `testing-sanchonet` environment with Cardano node v.10.1 and worked on some refactoring to make legacy code more readable and maintainable. The team also started exploring solutions for [signer registration](https://github.com/input-output-hk/mithril/issues/2029) when multiple aggregators are running on a Mithril network.

Finally, they fixed some [flakiness in CI](https://github.com/input-output-hk/mithril/issues/2044) end-to-end tests and made the Cardano stake distribution stable in the client.

### VOLTAIRE

The Voltaire phase of Cardano’s development involves transforming the network into a self-sustaining system, beginning with an interim constitution, as required by CIP-1694. The next step is to engage the community in creating an official constitution. To this end, Intersect has facilitated an extensive series of constitutional workshops around the world to ensure that as many voices as possible are heard.

64 workshops were held covering 51 countries in six of the seven continents. 128 delegates (64 voting, 64 traveling alternates) were elected to attend the constitutional convention in Buenos Aires, Argentina, from Wednesday, December 4, 2024, to Friday, December 6.

### CATALYST

This week in **Catalyst**, the community review stage faced some delays due to technical issues with IdeaScale. The team worked closely with IdeaScale to resolve these issues.

Town hall 181 was held this week, providing valuable updates and fostering engagement within the community. Catalyst is nearing a significant milestone of nearly 1,000 completed projects. To celebrate this relentless innovation from the community, a special celebratory town hall is scheduled for next week.

The technical development of Catalyst Voices continues. Last week, the team showcased minimum viable experiences, offering the community an overview of the product. Fund13 is advancing well despite some delays in the review stage. Submissions for the partner category remain open until November 7.

### EDUCATION

This week, the **education** team is planning events to support the constitutional convention in December. Work continues on Mastering Cardano

![](https://ucarecdn.com/1e411497-54ea-4cd8-a52e-9649a02b6d7f/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コアテクノロジーチームは、Chang #2アップグレードをサポートするメインネットリリース、ノードv.10.1.1をリリースしました。本リリースでは、次のガバナンスシステム機能が強化されています。

*   事前定義された投票オプションへの委任を行うステークプールオペレーター（SPO）のサポート
    
*   報酬アドレス委任経由の棄権に代わる、DRep（委任代表団）投票自動棄権のサポート
    

ノードv.10.1.1では[CIP-0122](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0122)、[CIP-0123](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0123)、[CIP-0127](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0127)で定義されている新しいPlutusプリミティブが有効になったほか、台帳、CLI、API、ネットワークコードベースも改善されています。

詳細は[リリースノート](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.1)をご覧ください。

**コンセンサス**チームは、最近のノードベンチマークで見られるように、メモリープールスナップショットのパフォーマンスを向上させるための調査に焦点を当てました。[さらなる最適化の可能性について議論](https://github.com/IntersectMBO/ouroboros-consensus/issues/568#issuecomment-2432329822)し、懸案の問題を解決した後にUTXO-HD[機能ブランチ](https://github.com/IntersectMBO/ouroboros-consensus/pull/1267)の見直しを始めました。

コンセンサスコードベースから抽出された並行性ユーティリティを含む[io-classes-extra](https://github.com/IntersectMBO/io-classes-extra)リポジトリを公開しました。[2024年第4四半期の計画](https://github.com/IntersectMBO/ouroboros-consensus/milestone/5)を概説し、[Discordチャネル](https://discord.com/channels/1136727663583698984/1239889178938966016)を通じてコミュニティのフィードバックを募りました。

UTXO-HDに関しては、Well-TypedがLSMツリー実装に関するマイルストンを発表しました。最新バージョンには、リソース使用量（CPU、ディスク、メモリー）の大幅なスパイクを防ぐための増分マージや台帳ステータスシーケンスを効率的に管理するためのテーブル処理の重複が含まれています。LSMツリーライブラリーのテストカバレッジも改善されました。

### ウォレットとサービス

**Lace**チームはv.1.17をリリースし、ベータプログラムの立ち上げや共有ウォレットのベータリリースなど、プラットフォームに新機能を導入しました。

ベータプログラムは、今後の機能にいち早くアクセスし、フィードバックを提供する機会であり、Laceの未来を形作るのに役立ちます。

参加者は共有ウォレット（マルチシグウォレットとも呼ばれる）へアクセスできます。共有ウォレットは、複数の承認済み当事者にトランザクションを実行前に承認するよう要求することで、セキュリティを強化します。ユーザーは共有ウォレットを作成し、共同署名者を追加し、Lace内で直接カスタム署名条件を設定することができます。この機能は、互換性とセキュリティのために[CIP-1854](https://cips.cardano.org/cip/CIP-1854)導出標準を利用し、複数の鍵にトランザクション権限を分散させます。これは、デジタル資産に対する集団ガバナンスを必要とするシナリオに最適です。

ベータプログラムに参加してこれらの新機能を試してみるには、LaceのSetting（設定）メニューに移動し、Beta Programを選択してください。

### スマートコントラクト

**Plutus**チームは、認定されたコンパイルとChang #2で有効になる新プリミティブのエンドツーエンドテストに焦点を当てました。まもなく、認定されたUPLCプログラム最適化用ツールをリリースする予定です。 

### スケーリング

**Hydra**チームは内部計画に焦点を当て、インクリメンタルコミットで大幅に進展しました。オンチェーンバリデーターと関連するテストの開発を進めました。この作業は現在進行中です。[Thomas Vellekoopや他の貢献者](https://github.com/perturbing/plutus-accumulator)の継続的な取り組みに基づいて初期ステップを設定するなど、部分的なファンアウトへの対処を始めました。

**Mithril**チームは新しい[CIP-137（分散型メッセージキュー](https://discord.com/channels/826816523368005654/1014019542504185876/1301043609092751410)）をリリースしました。これは将来的にMithril署名の拡散に使用されます。

Prometheusエンドポイントを使用して使用状況のメトリクスを実装し、アグリゲーター用Grafanaダッシュボードを公開しました。Cardanoノードv.10.1でtesting-sanchonet環境を再スピンし、レガシーコードを読みやすく保守しやすいようにするためのリファクタリングに取り組みました。複数のアグリゲーターがMithrilネットワーク上で実行されている場合の[署名者登録](https://github.com/input-output-hk/mithril/issues/2029)のソリューションの検討を始めました。

エンドツーエンドテストで見られた[CIの脆弱性](https://github.com/input-output-hk/mithril/issues/2044)を修正し、Cardanoステーク分布をクライアントで安定させました。

### VOLTAIRE

CardanoのVoltaire開発期ではCIP-1694に従い、暫定憲法を皮切りにネットワークが自立したシステムへと変革していきます。次のステップは、公式の憲法を作成するためにコミュニティを巻き込むことです。これを鑑み、Intersectはできるだけ多くの意見を聴くために、各地で憲法ワークショップを開催しました。

7大陸のうち6大陸51か国を対象に64のワークショップが開催され、2024年12月4日水曜日から6日金曜日までアルゼンチンのブエノスアイレスで開催される憲法制定会議に出席する128人の代表（当選者64人、補欠64人）が選ばれました。 

### CATALYST

**Catalyst**では、IdeaScaleの技術的な問題のため、コミュニティレビュー段階で若干の遅延が生じました。チームはIdeaScaleと密接に協力して、問題の解決にあたりました。

第181回タウンホールが開催され、貴重な最新情報を提供し、コミュニティに関与を促しました。Catalystは、まもなく完了プロジェクト1,000件という重要なマイルストンを達成します。このコミュニティによる絶え間ないイノベーションを記念して、来週スペシャルタウンホールが予定されています。

Catalyst Voicesの技術開発は続いています。最小実行可能エクスペリエンスを披露し、コミュニティに製品概要を提供しました。Fund13は、レビュー段階に若干の遅れがあるものの、順調に進んでいます。パートナーカテゴリーの提出は11月7日まで受け付けています。

### 教育

**教育**チームは12月の憲法制定会議をサポートするイベントを計画しています。『Mastering Cardano』の作業も続けています
