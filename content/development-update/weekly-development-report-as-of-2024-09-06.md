---
title: Weekly development report as of 2024-09-06
tags:
  - Weekly development updates
  - Statistics
  - Development
url: ""
image: https://ucarecdn.com/37e2470c-b4be-4473-835c-1d32e7fd1ae3/
image_text: Weekly development report as of 2024-09-06
---

### CORE TECHNOLOGY

The **core technology** teams released Cardano node v.9.1.1 to address an issue where 9.1.0 nodes would replay from the genesis block upon restart during the Conway era. See the Voltaire section for more details.

The **consensus** team introduced a [snapshot-converter tool](https://github.com/IntersectMBO/ouroboros-consensus/pull/1222) that allows non-UTXO-HD ledger snapshots to be converted into UTXO-HD ones, eliminating the need for replaying from genesis when using UTXO-HD nodes. This tool also resolves a deserialization issue with `TxOuts` in `Conway`. The team further addressed a memory leak in the UTXO-HD implementation, with benchmarking scheduled for this week.

In addition, the team expanded the [mempool capacity](https://github.com/IntersectMBO/ouroboros-consensus/pull/1175) beyond byte size, developed a [test](https://github.com/IntersectMBO/ouroboros-consensus/pull/1230) for adding large transactions, and discovered a bug related to Conway ledger snapshot deserialization.

### WALLETS AND SERVICES

The **Lace** team has opened up governance to Conway-era hardware wallet users, improving access and functionality in Lace v.1.15. The user experience with the DApp connector is now smoother following the resolution of some bugs. Looking ahead, the team is now preparing for the release of Lace v.1.16.

### SMART CONTRACTS

This week, the **Plutus** team wrapped up development on the built-in functions planned for release with the next hard fork, including the remaining bitwise primitives and the RIPEMD-160 hash function.

### SCALING

This week, the **Hydra** team established a solid foundation for network resilience tests, identifying areas for potential networking improvements. They made progress on incremental commits, specifically in handling deposits, and developed strategies to resolve issues with ‘stuck funds’. Additionally, enhancements were made to the usability of new features and related documentation in the changelog. Looking ahead, the team plans to switch the ledger to the Conway era and prepare for the upcoming release while continuing to refine incremental commits.

The **Mithril** team kept working on decentralizing the signature orchestration of the Mithril network. In this preliminary phase, they began implementing a buffer store for individual signatures that may arrive before being processed by an aggregator. Additionally, they moved the broadcast of signer registrations to the aggregator’s [epoch settings](https://github.com/input-output-hk/mithril/issues/1897) route. The team also [monitored the Chang upgrade](https://github.com/input-output-hk/mithril/issues/1910) to ensure the Mithril networks operated correctly and cleaned up unnecessary code. Additionally, they implemented a seamless transition from unstable to [stable features in the WASM client](https://github.com/input-output-hk/mithril/issues/1911).

Finally, the team activated a feature allowing the selection of the arithmetic backend used by Mithril cryptography in the client and refactored the organization of signer dependencies.

### VOLTAIRE

As scheduled, on Sunday, September 1, 2024, at 21:54:00 UTC, the Cardano blockchain took the first major, irrevocable step from being one of the most decentralized blockchains to becoming an ecosystem governed solely by its community of ada holders.

As expected, the chain continued to run uninterrupted, as it has since inception. There were no emergency calls, and the standby engineers were not needed.

The only significant issue was that, under certain circumstances, a node that was restarted took up to two hours longer than it should to sync because it was replaying from genesis instead of resyncing from where it left off. Cardano engineers from Intersect and Input|Output identified and solved the issue, and released a new version of Cardano node, v.9.1.1, as a hotfix less than 24 hours after the hard fork. The engineers recommend that all nodes upgrade to v.9.1.1.

The v.9.1.0 upgrade introduced some improvements, carried forward in v.9.1.1,  to the transaction cost model that DApps need to take into account. A detailed explanation, including the rationale for the change, is described in the [Cardano ledger documentation](https://github.com/IntersectMBO/cardano-ledger/blob/master/docs/adr/2024-08-14_009-refscripts-fee-change.md). Costs are compared in the [ref script calculator](https://docs.google.com/spreadsheets/d/1KFJCCbkDE5GaghlD4rDXB12pqLKnDFUNOKi0WErp_-Q/edit?gid=0#gid=0).

### CATALYST

This week in **Catalyst**, the Fund12 onboarding process is progressing smoothly, with 98.5% of onboarding forms completed, 94% of statements of milestones submitted, and 84% signed off. Due diligence is 54% complete, and 75% of test transactions are done. Although the cool-down period is still active, register [here](https://bit.ly/catalyst-townhall) as Town Halls will resume next week. Essential Hermes modules are advancing, with M3 POA submitted last week. Work on Catalyst Voices wallet integration continues, focusing on architecture rework to improve the performance of the chain indexer on mainnet.

### EDUCATION

This week, the **education** team continued preparing for the upcoming [Cardano Days event in Wyoming](https://www.uwyo.edu/acct-fin/cbdi/stampede/) later this month and the Cardano Days event coming soon in Santander, Spain. Stay tuned for more details on dates and location for our Santander event! They also supported the [constitutional committee workshop in Mongolia](https://lu.ma/282924xd) and concentrated on Plutus Core updates.

![](https://ucarecdn.com/79edc722-8fc9-4f52-bbd3-0b2264fac0de/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**チームは、Conway期の再起動時にノードがジェネシスブロックからリプレイしてしまうという問題に対処するため、Cardanoノードv.9.1.1をリリースしました。詳細はVoltaireセクションを参照してください。

**コンセンサス**チームは、UTXO-HD以外の台帳スナップショットをUTXO-HDに変換できる[スナップショット変換ツール](https://github.com/IntersectMBO/ouroboros-consensus/pull/1222)を導入し、UTXO-HDノードを使用するときにジェネシスからリプレイする必要性を排除しました。このツールは、ConwayのTxOutsにおける逆シリアル化の問題も解決しています。UTXO-HDの実装におけるメモリーリークに対処し、今週にはベンチマークを実施する予定です。

[メモリープールの容量](https://github.com/IntersectMBO/ouroboros-consensus/pull/1175)をバイトサイズを超えて拡張し、大きなトランザクションを追加するための[テスト](https://github.com/IntersectMBO/ouroboros-consensus/pull/1230)を開発し、Conway台帳スナップショットの逆シリアル化に関するバグを発見しました。

### ウォレットとサービス

**Lace**チームはLace v.1.15でアクセスと機能を改良して、Conway期のハードウェアウォレットユーザーにガバナンスを開放しました。DAppコネクターは、バグの修正により操作性が向上しました。現在、Lace v.1.16のリリースに向けて準備を進めています。

### スマートコントラクト

**Plutus**チームは、次のハードフォークでリリース予定の、ビット単位プリミティブやRIPEMD-160ハッシュ関数を含む組み込み関数の開発を完了しました。

### スケーリング

**Hydra**チームは、ネットワークの回復性テストのための強固な基盤を確立し、ネットワークの改善の可能性がある領域を特定しました。デポジット処理を中心にインクリメンタルコミットの作業を進め、「スタック（膠着）ファンド」による不具合を解消するための戦略を策定しました。changelogの新機能や関連ドキュメントの使いやすさを向上させました。今後は台帳をConway期に切り替え、次のリリースに向けた準備を進めると同時に、インクリメンタルコミットの改良を続ける予定です。

**Mithril**チームは、Mithrilネットワークの署名オーケストレーションの分散化への取り組みを続けました。この準備段階では、アグリゲーターで処理される前に到着する可能性のある個々の署名用のバッファストアの実装を開始しました。署名者登録のブロードキャストをアグリゲーターの[エポック設定](https://github.com/input-output-hk/mithril/issues/1897)ルートに移動しました。[Changアップグレード](https://github.com/input-output-hk/mithril/issues/1910)を監視してMithrilネットワークが正しく動作することを確認し、不要なコードをクリーンアップしました。[WASMクライアント](https://github.com/input-output-hk/mithril/issues/1911)で不安定版から[安定版](https://github.com/input-output-hk/mithril/issues/1911)へのシームレスな移行を実施しました。

クライアントでMithril暗号が使用する算術バックエンドを選択できる機能を有効化し、署名者の依存関係の構成をリファクタリングしました。

### VOLTAIRE

日本時間2024年9月2日06:54:00、Cardanoブロックチェーンは予定通りに、最も分散化されたブロックチェーンの1つから、ADA保有者のコミュニティのみが管理するエコシステムへと、最初の大きな、後戻りできない一歩を踏み出しました。

想定通りに、チェーンは立ち上げ以来、これまでと変わることなく、そのまま稼働を続けました。緊急通報はなく、待機していた技術者が必要になることはありませんでした。

唯一の重要な問題は、特定の状況下で再起動されたノードが、中断した場所から再同期するのではなくジェネシスからリプレイされたため、同期時間が本来必要とされるよりも最大で2時間長くかかったことでした。IntersectとInput | OutputのCardanoエンジニアはこの問題を特定して解決し、ハードフォークから24時間を待つことなくホットフィックスとしてCardanoノードの新バージョンv.9.1.1をリリースしました。エンジニアは、すべてのノードにv.9.1.1にアップグレードするよう推奨しています。

v.9.1.0へのアップグレードではDAppsが考慮する必要があるトランザクションコストモデルの改良が導入されましたが、これはv.9.1.1に引き継がれています。変更の根拠を含む詳細な説明は、[Cardano台帳ドキュメント](https://github.com/IntersectMBO/cardano-ledger/blob/master/docs/adr/2024-08-14_009-refscripts-fee-change.md)に記載されています。コストは[ref script calculator](https://docs.google.com/spreadsheets/d/1KFJCCbkDE5GaghlD4rDXB12pqLKnDFUNOKi0WErp_-Q/edit?gid=0#gid=0)で比較されます。

### CATALYST

**Catalyst**ではFund12オンボーディングプロセスが順調に進行中で、オンボーディングフォームの98.5%が完了し、マイルストンステートメントの94%が提出され、84%が承認されています。デューデリジェンスは84%、テストトランザクションの75%が完了しました。現在はまだクールダウン期間中ですが、タウンホールは来週再開されます。Hermesの必須モジュールは進んでおり、先週M3 POAが提出されました。Catalyst Voicesウォレット統合の作業は継続されており、メインネットのチェーンインデクサーのパフォーマンスを向上させるためのアーキテクチャーのリワークに焦点が当てられています。

### 教育

**教育**チームは今月[ワイオミング州で開催されるCardano Daysイベント](https://www.uwyo.edu/acct-fin/cbdi/stampede/)とスペインのサンタンデールで開催されるCardano Daysイベントの準備を続けました。サンタンデールイベントの開催日と開催場所の詳細は近日公開されます。[モンゴルで開催された憲法委員会のワークショップ](https://lu.ma/282924xd)をサポートし、Plutus Coreの更新に注力しました。
