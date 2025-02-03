---
title: Weekly development report as of 2025-01-24
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d45b891c-5996-435c-aa00-242c17f1ab10/
image_text: Weekly development report as of 2025-01-24
---

### CORE TECHNOLOGY

This week, the **consensus** team continued improving documentation, enhancing the security of the consensus layer, and contributing to early-stage efforts in the Peras workstream. The UTXO-HD branch is being updated to utilize forward deserializability for transaction outputs (commits: [1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1360), [2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1361), [3](https://github.com/IntersectMBO/ouroboros-consensus/pull/1362)). A successful local chain synchronization was performed with the latest UTXO-HD-enabled node using the in-memory backend, indicating steady progress in the development of this feature.

Lastly, the team has outlined objectives for this quarter, which can be [accessed here](https://github.com/IntersectMBO/ouroboros-consensus/milestone/6).

The **performance and tracing** team released benchmarks for node v.10.1.4 and evaluated the performance impact of ledger metrics trace location. They also advanced the `locli` analysis tool by adding database-backed quick queries and merged the voting workload definition into the `master` branch, continuing work on a Haskell profile definition. In tracing, the team developed a C library for trace forwarding, improved fallback configurations, and furthered documentation efforts.

Finally, the team has introduced a new Discord channel, `#tracing-monitoring`, to support the rollout of the new tracing system in the community. Please join to be part of our Discord.

### SMART CONTRACTS

The Plutus team has implemented a [new language construct](https://github.com/IntersectMBO/plutus/pull/6793) called `Fix`. The team would like to assess whether the advantages of this addition outweigh the added complexity to the language. Community feedback is highly encouraged. Additionally, the Plutus team has added two new pages to the user guide: ‘[Simplifying Code Before Compilation](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/simplifying-before-compilation)’ and ‘[CLI Tool for Plutus](https://plutus.cardano.intersectmbo.org/docs/using-plutus-tx/cli-plutus)’.

### SCALING

The **Hydra** team has completed a custom ledger experiment (commits: [1](https://github.com/cardano-scaling/hydra/issues/1727), [2](https://github.com/cardano-scaling/hydra/pull/1742#issuecomment-2605023483), [3](https://github.com/cardano-scaling/hydra/pull/1796)) and is nearing the end of incremental commits, although final specification changes are still in progress. The team also [restored](https://github.com/cardano-scaling/hydra-explorer/pull/12) `hydra-explorer` for version 0.19, [added a CLI option for deposit deadlines](https://github.com/cardano-scaling/hydra/pull/1798), researched partially-trusted consensus within a Hydra head, and investigated node resilience during offline periods (commits: [1](https://github.com/cardano-scaling/hydra/pull/1780), [2](https://github.com/cardano-scaling/hydra/pull/1786)). 

Moving forward, the team will focus on [memory usage enhancements](https://github.com/cardano-scaling/hydra/issues/1618), finish m[ultiple-version support](https://github.com/cardano-scaling/hydra/issues/1282) in hydra-explorer, plan the version 0.20.0 release, continue supporting Hydra Doom, and begin work on an [API command](https://github.com/cardano-scaling/hydra/issues/1284) to clear pending transactions.

This week, the **Mithril** team continued implementing the incremental certification of the Cardano database. They completed the cloud [synchronization of artifacts](https://github.com/input-output-hk/mithril/issues/2211), introduced enhancements and optimizations for artifact production, and adapted the explorer to accommodate these changes. Additionally, they finalized the design for [splitting the mithril-common crate](https://github.com/input-output-hk/mithril/issues/2175) and re-spun the `testing-sanchonet` network.

Other progress includes starting work on [compressing aggregator HTTP](https://github.com/input-output-hk/mithril/issues/2225) responses, fixing a bug that prevented debug logs from being produced on the nodes, and resolving an issue with Prometheus data recording in the infrastructure.

The **Leios** team made significant progress in three key areas: cryptography benchmarks, design, and simulation development.

**Cryptography benchmarks and design**

The team developed and benchmarked the complete Leios cryptography suite within the `leios_crypto_benchmarks` Rust crate. They achieved VRF proving times of 240 µs and verification times of 390 µs. BLS operations, such as key possession proof verification, took 1.5 ms per key, while vote generation and verification times were 280 µs and 1.4 ms, respectively. Generating a 300-vote quorum required 50 ms, and verifying it took 90 ms. Additionally, the team optimized vote signature sizes to potentially reduce them to 192 bytes. They confirmed that 500-vote committee certificates (approximately 58 kB) can fit within Praos blocks and completed the cryptography sections for the first technical report.

**Simulation development**

**Haskell Simulation**_._ The team achieved diffusion latency similar to the benchmark cluster data for Praos blocks. They coordinated with the Rust team to integrate parameters, added JSON event logging, and introduced a 'short-leios' variant that aligns with the mainnet ranking block interval.

**Rust Simulation**_._ The team improved the simulation by adding more detailed CPU simulation times, fixing a race condition in the simulated clock, and adopting a shared configuration format. Default parameters can now be found in `data/simulation/default.yaml`.

### VOLTAIRE

The governance action for the Plomin hard fork has met the necessary conditions for ratification. This includes a positive vote from Input | Output (IO), a member of the interim constitutional committee (ICC). The constitution requires approval by 51% of stake pool operators and 67% of the ICC for ratification. Additionally, the guardrail condition stipulating that 85% of stake pools, based on active stake, must operate a compatible version of the Cardano node has also been fulfilled.

Once the hard fork is ratified at the epoch boundary on January 24, 2025, it will be enacted at the next epoch boundary on January 29.

The next step in Cardano’s governance process will be ratifying the delegate-approved constitution. The newly-enabled delegated representatives will have a vital role in this step.

### CATALYST

The onboarding process for Fund13 is going smoothly, with test transactions of 1 ada successfully sent to over 45% of the cohort. Due diligence is also progressing well, as more than 57% of the cohort has already completed this phase of onboarding.

Next week, Retro Town Halls will begin to gather valuable insights from the community regarding the outcomes of Fund 13. Community members are encouraged to register and participate by [signing up here](https://bit.ly/catalyst-townhall).

Meanwhile, the technical development, design, and architecture of the Catalyst native platform remain key priorities as preparations continue for the upcoming funding cycles throughout the year.

### EDUCATION

This week, the **education** team is concentrating on internal workshops and planning activities for the year. They are also working on updates to Aiken and enhancements to the Cardano developer course.

![](https://ucarecdn.com/26e160ab-e5fc-44f5-a290-abf5ca2c4e31/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームはドキュメントの改訂を続け、コンセンサス層のセキュリティを強化し、Perasワークストリームの初期段階の取り組みに貢献しました。トランザクションアウトプットの前方逆シリアル化可能性を活用できるように、UTXO-HDブランチを更新しています（コミット：[1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1360)、[2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1361)、[3](https://github.com/IntersectMBO/ouroboros-consensus/pull/1362)）。最新のUTXO-HD対応ノードでは、メモリー内バックエンドを使用したローカルチェーン同期が成功しました。これは、本機能の開発が着実に進んでいることを示しています。

この四半期の目標概要を作成しました。[ここから閲覧可能](https://github.com/IntersectMBO/ouroboros-consensus/milestone/6)です。

**パフォーマンス＆トレース**チームは、ノードv.10.1.4のベンチマークをリリースし、台帳メトリクストレースロケーションのパフォーマンスへの影響を評価しました。データベースを利用したクイッククエリを追加することでlocli分析ツールを進め、投票ワークロードの定義をmasterブランチにマージし、Haskellプロファイル定義の作業を続けました。トレースに関しては、トレース転送用のCライブラリーを開発し、フォールバック設定を改善し、文書化作業を進めました。

新しいDiscordチャネル#tracing-monitoringを導入し、コミュニティへの新しいトレースシステムのロールアウトをサポートしました。Discordにぜひご参加ください。

### スマートコントラクト

Plutusチームは、Fixと呼ばれる[新しい言語構造](https://github.com/IntersectMBO/plutus/pull/6793)を実装しました。この追加による利点が、言語の複雑化を上回るかどうかを評価したいと考えています。コミュニティからのフィードバックが強く求められています。ユーザーガイドに「[Simplifying Code Before Compilation](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/simplifying-before-compilation)（コンパイル前のコードの簡素化）」と「[CLI Tool for Plutus](https://plutus.cardano.intersectmbo.org/docs/using-plutus-tx/cli-plutus)（Plutus用CLIツール）」という2つの新しいページを追加しました。

### スケーリング

**Hydra**チームはカスタム台帳実験（コミット：[1](https://github.com/cardano-scaling/hydra/issues/1727)、[2](https://github.com/cardano-scaling/hydra/pull/1742#issuecomment-2605023483)、[3](https://github.com/cardano-scaling/hydra/pull/1796)）を完了しました。インクリメンタルコミットは最終段階にありますが、最終的な仕様変更はまだ進行中です。バージョン0.19の[hydra-explorer](https://github.com/cardano-scaling/hydra-explorer/pull/12)を[復元](https://github.com/cardano-scaling/hydra-explorer/pull/12)し、[デポジット期限にCLIオプションを追加](https://github.com/cardano-scaling/hydra/pull/1798)し、Hydraヘッド内で部分信頼型コンセンサスを調査し、オフライン期間中のノードの回復力を調査しました（コミット：[1](https://github.com/cardano-scaling/hydra/pull/1780), [2](https://github.com/cardano-scaling/hydra/pull/1786)）。 

今後は、[メモリー使用量の強化](https://github.com/cardano-scaling/hydra/issues/1618)、hydra-explorerでの[複数バージョンのサポート](https://github.com/cardano-scaling/hydra/issues/1282)の終了、バージョン0.20.0のリリース計画、Hydra Doomのサポートの継続、保留中のトランザクションをクリアする[APIコマンド](https://github.com/cardano-scaling/hydra/issues/1284)の作業開始に集中する予定です。

**Mithril**チームは、Cardanoデータベースの増分認証の実装作業を続けました。[アーティファクトのクラウド同期](https://github.com/input-output-hk/mithril/issues/2211)を完了し、アーティファクト生成のための強化と最適化を導入し、これらの変更に対応できるようエクスプローラを適合させました。[mithril-commonクレートの分割](https://github.com/input-output-hk/mithril/issues/2175)と、testing-sanchonetネットワーク再起動の設計を仕上げました。

[アグリゲーターHTTPレスポンスの圧縮](https://github.com/input-output-hk/mithril/issues/2225)作業の開始、ノードでデバッグログが生成されないバグの修正、インフラでのPrometheusデータ記録の不具合の解決などにも取り組みました。

Leiosチームは、暗号ベンチマーク、設計、シミュレーション開発の3つの主要分野を大きく進展させました。

**暗号ベンチマークと設計**

leios\_crypto\_benchmarks Rustクレート内でLeios暗号スイートの完全なベンチマークを開発しました。VRFの証明時間240マイクロ秒、検証時間390マイクロ秒を達成しました。鍵所有証明検証のようなBLSの操作は鍵あたり1.5ミリ秒かかりましたが、投票生成と検証にかかった時間はそれぞれ280マイクロ秒と1.4ミリ秒でした。300票のクォーラムの生成には50ミリ秒、検証には90ミリ秒かかりました。投票シグネチャーのサイズを192バイトまで減らせるように最適化しました。500票の委員会証明書（約58KB）がPraosブロック内に収まることを確認し、最初の技術レポートの暗号セクションを完了しました。

**シミュレーション開発**

\*\*Haskellシミュレーション：\*\*Praosブロックのベンチマーククラスターデータと同様の拡散レイテンシーを達成しました。Rustチームと連携してパラメーターを統合し、JSONイベントログを追加し、メインネットのランキングブロック間隔に合わせたshort-leiosバリアントを導入しました。

\*\*Rustシミュレーション：\*\*より詳細なCPUシミュレーション時間を追加し、シミュレートされたクロックの競合状態を修正し、共有設定形式を採用することでシミュレーションを改善しました。デフォルトパラメーターはdata/simulation/default.yamlを参照してください。

### VOLTAIRE

Plominハードフォークのガバナンスアクションが、批准に必要な条件を満たしました。これには暫定憲法委員会（ICC）のメンバーであるInput | Output（IO）からの肯定票も含まれます。憲法は、批准にステークプールオペレーターの51%とICCの67%の承認を求めています。加えて、アクティブステークに基づくステークプールの85%が、互換性のあるCardanoノードバージョンを稼働させなければならないというガードレール条件も満たされました。

2025年1月24日のエポック境界でハードフォークが批准されたら、1月29日の次回エポック境界で実行されます。

Cardanoガバナンスプロセスの次のステップは、代表者が承認した憲法を批准することです。新たに権限を与えられたDRepは、このステップで重要な役割を果たします。

### Catalyst

Fund13のオンボーディングプロセスは順調に進んでおり、1ADAのテストトランザクションがコホートの45%以上に正常に送信されました。デューデリジェンスも順調に進んでおり、コホートの57%以上がすでにオンボーディングのこの段階を終了しています。

来週、レトロタウンホールが開始され、Fund13の成果に関してコミュニティから貴重な洞察が収集されます。コミュニティメンバーは[ここでサインアップ](https://bit.ly/catalyst-townhall)して登録、参加することが奨励されています。

次の資金調達サイクルの準備は年間を通じて続くため、Catalystネイティブプラットフォームの技術開発、設計、アーキテクチャは、引き続き優先事項となります。

### 教育

**教育**チームは社内ワークショップと今年の活動計画に集中しています。Aikenの更新やCardano開発者コースの強化にも取り組んでいます。
