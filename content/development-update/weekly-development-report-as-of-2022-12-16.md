---
title: Weekly development report as of 2022-12-16
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/3230080d-1c3f-4f53-8840-7236c94e9ec9/
image_text: ""
---

_Dear community members, please note that this is the last development update before the holiday period. We wish you joyful holidays ahead and will be releasing more updates on January 13, 2023._

### CORE TECHNOLOGY

This week, the **networking** team focused on preparing the conference speech at [OPODIS 2022](https://sites.uclouvain.be/OPODIS2022/) and on the publication of io-sim and related packages on Hackage. They also started reviewing ouroboros-network, cardano-node, and cardano-ledger repositories for open-source readiness. Finally, the team worked on a pull request suggesting changes to how node-to-node and node-to-client protocol versions are serialized in the cardano-node log.

The **ledger** team worked with the Plutus team on building out a user-friendly cardano-ledger-api package. This [GitHub project](https://github.com/input-output-hk/cardano-ledger/projects/5) is in progress and if you are interested in the API, you can track its development and join conversations. The team also started using [architectural decision records](https://github.com/input-output-hk/cardano-ledger/blob/6fc0e198560fb4169d435da882394930789a8af8/docs/adr/2022-12-01_001-record-architectural-decisions.md) (ADRs) for tracking important decisions, and will retroactively review past decisions making ADRs for them. 

The logic to track individual deposits is almost ready and the team is currently reviewing its correctness to follow up with performance optimizations and general cleanup. Finally, the team is working on deprecating the pointer addresses within Cardano protocol v.8, see [CPS-0002](https://github.com/cardano-foundation/CIPs/pull/374) for more context.

The **consensus** team finalized QSM tests for the backing store and mempool on the UTXO HD branch, which includes important discoveries regarding parallel QSM testing. They also worked with the ledger team to envisage the modifications required in ledger and consensus to accommodate the changes in the crypto VRF and KES. 

The db-analyser now supports benchmarking of the ledger operations, which will allow identifying, debugging, and profiling potential performance problems. The team also drafted a document defining how to manage the versions of consensus-related packages. The top level documentation of ouroboros-network now features a description of the consensus components and provides a hyperlinked map to the modules documentation.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team tested the new Ledger hardware wallet firmware and added more details to the Matomo analytics to track the number of Byron wallet users. 

Work is ongoing on the **Lace** desktop development. The team fixed UI/UX issues found after importing Lace browser components into the Lace desktop app, and started working on enabling deep links for DApps and other components to be able to re-open automatically. They also worked on the necessary repository refactoring and made progress with the display of the syncing progress of the local node.

The Lace Explorers Beta Program was a solid success. The teams are thrilled to announce that Lace is now available for public testing on the pre-production testnet environment. Timed to honor the birthday of namesake Ada Lovelace, this is the perfect opportunity for more of you to try out Lace with [test tokens](https://docs.cardano.org/cardano-testnet/tools/faucet), so no real risk or losses, and get to know the platform ahead of its mainnet deployment. Head to [lace.io](//lace.io) now to register for updates on the Lace mainnet launch. Add the pre-production extension to Chrome to try it out now.

The **Adrestia** team kept working on getting cardano-js-sdk production-ready. Cardano-js-sdk is now in beta. They also migrated to a new CI/CD and completed updating the cardano-wallet to support node v.1.35.4.

The team also made final updates in cardano-rosetta to prepare it for the next major release.

### SMART CONTRACTS

This week, the **Plutus** team worked on script capacity increase and the Plutus debugger MVP. They also continued building Marconi indexers and addressing the technical debt.

The **Marlowe** team addressed the technical debt, altered stabilization-pool contract so it does not exceed protocol limits, and updated documentation links on [marlowe-finance.io](//marlowe-finance.io). They also planned for Marlowe Runtime scalability testing, fixed an omission in the Cardano Marlowe specification, and implemented a number of new endpoints for Marlowe Runtime. 

Finally, the team added logging to chainseek observability and fixed issues that caused chainseek to fail to find blocks.

### BASHO (SCALING)

This week, the **Hydra** team worked on completing the ‘Validate coordinated Head protocol against formal model’ initiative, which is a big step to verifying that the protocol implementation is secure. They also worked on implementing [ADR21](https://github.com/input-output-hk/hydra/blob/7e532bd1c8a840a8155cf4b0858b982308dfc3f0/docs/adr/CloseTx-validity-bounds-and-deadline-calculation-DoS.md) related to bounded transaction validity, which is now in review. 

The first phase of Obsidian Systems’ [Hydra for Payments](https://github.com/obsidiansystems/hydra-pay) project is coming to an end, and the teams reviewed and submitted several [issues](https://github.com/obsidiansystems/hydra-pay/issues?q=is%3Aissue) found. Additionally, the team met with the director of cybersecurity to discuss the RFP that is currently in flight and which should scope the work of future auditors. They also completed a review of the new Hydra tutorial created by the education team.

Finally, the team fixed a bug on the CI when running benchmarks to calculate the cost of `abortTx`, and a flaky property test that checks a Plutus Merkle tree is now always balanced.

The **Mithril** team completed the implementation of a stable version of their release process. They have implemented a workflow that enables testing that the client's binaries produced for multiple platforms (Linux, MacOS, and Windows) can verify and restore snapshots. They also started implementing an optimization of the snapshot digest computation, and fixing a bug when a protocol parameters transition occurs on a Mithril network.

Finally, they have simplified the aggregator node's multi-signer further by removing the signer registration from its responsibilities.

### GOVERNANCE

This week, **Project Catalyst** continues counting votes being cast for the Circle elections, including over 1,000 participating wallets. There is still time to cast your vote as voting closes at 21:45 UTC on December 16. To find out more about the Circle and how to vote, head over [here](https://medium.com/drip-dropz/catalyst-circle-v4-voting-c8863e5697d6).

This week, Project Catalyst also held its final Town Hall of 2022 and the next Town Hall will be held on January 11, 2023. Register [here](https://bit.ly/3rCicSR) to join. 

Happy holidays to all!

  
![](https://ucarecdn.com/66758878-d228-45a2-b370-99522c6d720c/)

_コミュニティの皆様、今回の開発レポートで今年の更新は最後になります。新年初回レポートは2023年1月13日を予定しています。よいお年をお迎えください。_

### コアテクノロジー

**ネットワーキング**チームは、[OPODIS 2022](https://sites.uclouvain.be/OPODIS2022/)でのスピーチ準備と、Hackageにio-simと関連パッケージを公開する準備に集中しました。また、オープンソース化に向けて、ouroboros-network、cardano-node、cardano-ledgerの各レポジトリのレビューを行いました。node-to-nodeとnode-to-clientプロトコルバージョンをcardano-nodeログでシリアル化する方法の変更を提案するプルリクエストに取り組みました。

**台帳**チームはPlutusチームと協力してユーザーフレンドリーなcardano-ledger-apiパッケージの構築に取り組みました。この[GitHubプロジェクト](https://github.com/input-output-hk/cardano-ledger/projects/5)は進行中です。このAPIに関心がある方は、開発状況を追跡し、会話に参加することができます。また、重要な決定を追跡するための[Architectural Decision Records](https://github.com/input-output-hk/cardano-ledger/blob/6fc0e198560fb4169d435da882394930789a8af8/docs/adr/2022-12-01_001-record-architectural-decisions.md)（ADR）の使用を始めました。今後過去の決定をさかのぼってレビューし、ADR を作成します。 

個々のデポジットを追跡するロジックはほぼ完成しており、現在はパフォーマンスの最適化と一般的なクリーンアップをフォローアップするためにその正確性を確認しています。Cardanoプロトコルv.8内のポインターアドレスの複製に取り組んています。コンテクストの詳細は、[CPS-0002](https://github.com/cardano-foundation/CIPs/pull/374)を参照してください。

コンセンサスチームは、UTXO HDブランチのバッキングストアとメモリープールのQSMテストを完了しました。これには、並列QSMテストに関する重要な発見も含まれています。また、台帳チームと協力して、crypto VRFとKESの変更に対応するために台帳とコンセンサスに必要な変更を想定しました。 

db-analyserは、台帳操作のベンチマークをサポートするようになりました。これにより、潜在的なパフォーマンスの問題を特定、デバッグ、およびプロファイリングできます。コンセンサス関連パッケージのバージョンを管理する方法を定義する文書の草案を作成しました。ouroboros-network最上位ドキュメントには、コンセンサスコンポーネントの説明と、モジュールドキュメントへのハイパーリンクマップが含まれるようになりました。

通常通り、異なるチームからの詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは新しいLedgerハードウェアウォレットファームウェアをテストし、Byronウォレットユーザーの数を追跡するために、Matomo分析に詳細を追加しました。 

**Lace**デスクトップの開発作業は進行中です。LaceブラウザーコンポーネントをLaceデスクトップアプリにインポートした後に見つかったUI/UXの不具合を修正し、DAppやその他のコンポーネントのディープリンクを自動的に再度開くことができるようにする作業を開始しました。必要なリポジトリのリファクタリングに取り組み、ローカルノードの同期の進行状況の表示を進めました。

Laceエクスプローラーベータプログラムは大きな成功を収めました。チームは、Laceがプリプロテストネット環境でのパブリックテストが可能になったと発表できて喜んできます。その名の由来となったエイダ・ラブレスの誕生日というタイミングで、これは、より多くの人々が[テストトークン](https://docs.cardano.org/cardano-testnet/tools/faucet)を使ってLaceを試す絶好の機会です。テストトークンなので実際にリスクや損失を出すことなく、メインネットへのデプロイ前にプラットフォームに馴染むことができます。[lace.io](//lace.io)に登録すると、Laceメインネットリリースの最新情報を入手できます。Chromeにプリプロ拡張機能を追加して、今すぐお試しください。

**Adrestia**チームはcardano-js-sdkを本番環境にするための作業を続けています。Cardano-js-sdkは、現在ベータ版です。新しいCI/CDへ移行し、cardano-walletがノードv.1.35.4をサポートできるようにするための更新を完了しました。

次回メジャーリリースへの準備として最後となるcardano-rosettaの更新を行いました。

### スマートコントラクト

**Plutus**チームは、スクリプト容量とPlutus Debugger MVPに取り組みました。Marconiインデクサーの構築と、技術負債への取り組みも継続しました。

**Marlowe**チームは技術負債に取り組み、プロトコルの制限を超過しないようプール安定化コントラクトを変更し、[marlowe-finance.io](//marlowe-finance.io)のドキュメントリンクを更新しました。Marlowe Runtimeのスケーラビリティテストを計画し、Cardano Marlowe仕様の脱落を修正し、Marlowe Runtimeの新エンドポイントを多数実装しました。 

チェーンシークの可観測性にログを追加し、チェーンシークがブロックを見つけられない原因となった問題を修正しました。

### Basho( スケーリング)

**Hydra**チームは、プロトコルの実装が安全であることを確認するための大きなステップである「形式モデルに対して調整されたHeadプロトコルを検証する」イニシアチブの仕上げに取り組みました。制限されたトランザクションの有効性に関する[ADR21](https://github.com/input-output-hk/hydra/blob/7e532bd1c8a840a8155cf4b0858b982308dfc3f0/docs/adr/CloseTx-validity-bounds-and-deadline-calculation-DoS.md)の実装にも取り組みました。これは現在レビュー中です。 

Obsidian Systemsの[Hydra for Payments](https://github.com/obsidiansystems/hydra-pay)プロジェクトの第1フェーズが終了を迎えました。発見された複数の[問題](https://github.com/obsidiansystems/hydra-pay/issues?q=is%3Aissue)を確認して提出しました。サイバーセキュリティのディレクターと会い、RFPについて話し合いました。これは現在進行中であり、将来の監査人の業務範囲を絞り込む必要があります。教育チームが作成したHydraチュートリアルのレビューも終えました。

abortTxのコスト計算のベンチマークの実行中にCIに生じるバグを修正し、Plutusのマークル木を確認するフレーキープロパティテストは、現在常に安定するようになりました。

**Mithril**チームは、リリースプロセスの安定版の実装を完了しました。複数のプラットフォーム（Linux、MacOS、Windows）用に作成されたクライアントのバイナリがスナップショットを検証および復元できることをテストできるワークフローを実装しました。スナップショットダイジェスト計算の最適化の実装と、Mithrilネットワークでプロトコルパラメーターの遷移が発生したときのバグの修正を開始しました。

署名者の登録を免除することによって、アグリゲーターノードのマルチ著名者をさらに単純化しました。

### ガバナンス

**Project Catalyst**はCircle選挙の開票を続けています。ここでは1,000を超えるウォレットが参加しました。投票は、日本時間12月17日6:45まで受け付けています。Circleの詳細と投票方法は、[こちら](https://medium.com/drip-dropz/catalyst-circle-v4-voting-c8863e5697d6)をご覧ください。

今週は、2022年最後のProject Catalystタウンホールが開催されました。次回タウンホールは、2023年1月11日です。参加するには[こちら](https://bit.ly/3rCicSR)で登録してください。 

よいお年を！
