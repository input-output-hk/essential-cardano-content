---
title: Weekly development report as of 2023-04-07
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/5e820f89-9634-4bda-b542-3a1f71399e39/
image_text: ""
---

### CORE TECHNOLOGY

Over the past two weeks, the **ledger** team prepared for [the upcoming Conway release](https://input-output-hk.github.io/cardano-updates/2023-03-31-ledger/#support-for-the-next-release), experimented with handling dRep stake distribution for CIP-1694 in the Conway ledger era, and merged a fix for [node-4826](https://github.com/input-output-hk/cardano-node/issues/4826) into the main ledger branch. 

The **consensus** team finished the UTXO-HD prototype refactoring. The team is now working on enhancing the DB lock mechanism to improve performance. They also introduced several improvements to the file system abstraction and simulation layer (`fs-sim`), which culminated in the release of `fs-sim-0.1.0.0` and `fs-api-0.1.0.0` to `CHaP`.

Work is ongoing on Ouroboros Genesis development; the team distributed the updated Genesis design document seeking feedback from the networking team and IOG researchers, and opened up a PR for the adversarial leader schedule `QuickCheck` generator, which is now in review.

They also delivered a new consensus version that can use different fundamental VRF crypto primitives for Babbage and Conway eras, and in terms of the technical debt, they fixed the follower logic bug discovered during `QuickCheck` property tests.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

Work is ongoing on the **Lace** desktop development. The team continued working on bug fixes and polishing the DApp browser and added the capability to automatically connect the wallet without having to do so for each DApp. They also improved the dark mode interface, increased end-to-end test coverage, and updated cardano-js-sdk to resolve compatibility issues. 

Finally, the team are now working on adding a notification feature to send announcements to users remotely.

The **Adrestia team** worked on extending the multi-signature feature with delegation functionality in cardano-wallet. They also worked on extracting the transaction balancing library and did some refactoring of the DBLayer to improve performance and memory usage. 

Finally, they continued working on performance optimization of cardano-services in cardano-js-sdk.

### SMART CONTRACTS

The **Plutus** tools team ​​continued working on the [Marconi sidechain MVP](https://github.com/input-output-hk/plutus-apps/tree/main/marconi-sidechain#readme) (feature completeness), investigating how to test the correctness of Marconi indexers and moving Marconi to a separate GitHub repository. 

The Plutus Core team moved forward with the implementation of sums-of-products, getting closer to making it feature-complete. This is a change to the Plutus Core language, which is expected to be made available at the next hard fork, adding native support for datatypes and providing substantial speed and size improvements to scripts. Read this [CIP](https://github.com/cardano-foundation/CIPs/pull/455) to learn more. The team also refactored the formalization of built-in types and functions, removing a substantial amount of Agda code.

The **Marlowe** team worked on the Runtime exhaustion of memory pool and epoch boundary tests, created a [test suite](https://github.com/input-output-hk/marlowe-cardano/pull/550) for the ‘Create’ command, and ran usability tests for Marlowe Playground. They also conducted [QA testing](https://github.com/input-output-hk/marlowe-starter-kit/pull/4) of the starter kit and published a new release with [uploaded binaries](https://github.com/input-output-hk/marlowe-cardano/releases/tag/runtime%40v0.0.1) for CLI tools, also defining the pre-release test scope, creating a tag, and writing a test job to run after the deployment job for automated Marlowe Nightly testing.

Finally, work is ongoing on Marlowe Explorer improvements in terms of reflecting specific links, defining name formats, detailing transaction IDs, statuses, etc. 

### BASHO (SCALING)

The **Hydra** team continued working on finalizing mainnet compatibility of the hydra-node: they ran semi-automated smoke tests and updated draft documentation. The team also fixed several minor issues and made opening heads more robust from a protocol perspective. Apart from development, they met with community members interested in collaborating on communication and marketing materials for Hydra.

The **Mithril** team released a new [2313.0](https://github.com/input-output-hk/mithril/releases/tag/2313.0) distribution that implements minor improvements and bug fixes. They continued implementing the migration of the aggregator stores to a relational design, and completed the adaptation and migration of the signer registration and open message stores. They also worked on designing the new architecture of the network to support signing multiple types of data.

Finally, the team upgraded the version of the Cardano node used in the Mithril testnets and devnet to `1.35.6`.

### GOVERNANCE

**Voltaire**

On March 30th, the Cardano community convened for a workshop to review the output from the [CIP-1694 workshop](https://www.essentialcardano.io/video/cip-1694-community-workshop) that occurred earlier in the month in Longmont, CO. The workshop was conducted on Zoom, and a recording of the session was made available for later viewing. The event featured a keynote presentation by the CIP authors, an update on changes to [CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md) since the input from the Colorado workshop, and a Q&A session with the community. Charles Hoskinson, IOG CEO, joined for a special keynote on the promises of minimum viable governance. Following that, attendees were divided into breakout sessions, each focused on a specific aspect of the workshop topics, including metadata standards, incentives for dReps and voters, community tooling, and voting thresholds. The discussions were collected in another Miro board, showcasing the innovative community approach. The session concluded with a summary of key takeaways and final remarks by Michael Madoff, IOG product owner. More information on community workshop sponsorships will be shared in early April, so stay tuned.

**![](https://lh6.googleusercontent.com/TGPP55TMQw_3I7iifhupAqPiCq4PEE8IvNqMa5sp36DIv6Op2tHn3DJNKPpySCJCZB3VeARTn4lY06VyjO9K475seYBCNoyO-5UgNyuqosIC1HJ4lXEg2v3btYxkKO0JRh2sq5aSFXngWiG3BDg8P7I)**

### コアテクノロジー

過去2週間にわたって、**台帳**チームは[来るConwayリリース](https://input-output-hk.github.io/cardano-updates/2023-03-31-ledger/#support-for-the-next-release03-31-ledger/%23support-for-the-next-release)を準備し、Conway台帳期におけるCIP-1694のdRepステーク分布を処理する実験を行い、[ノード4826](https://github.com/input-output-hk/cardano-node/issues/4826)の修正をメインの台帳ブランチにマージしました。 

**コンセンサス**チームは、UTXO-HDプロトタイプのリファクタリングを完了しました。現在、パフォーマンスを向上させるためにDBロックメカニズムの強化に取り組んでいます。ファイルシステムの抽象化とシミュレーション層（fs-sim）を一部改良し、fs-sim-0.1.0.0とfs-api-0.1.0.0をCHAPにリリースしました。

Ouroboros Genesisの開発作業は進行中であり、更新したGenesis設計文書を配布してネットワークチームとIOG研究者からのフィードバックを待っています。また、敵対的リーダースケジュール、QuickCheckジェネレーターのPRを開始しました。これは、現在レビュー中です。

Babbage期とConway期に異なる基礎的VRF暗号プリミティブを使用できる新しいコンセンサスバージョンを提供し、技術負債に関して、QuickCheckプロパティテストで発見されたフォロワーロジックバグを修正しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**デスクトップの開発作業は進行中です。バグの修正とDAppブラウザーの改良を続け、DAppごとにウォレットを自動接続する機能を追加しました。ダークモードインターフェイスを改良し、エンドツーエンドのテストカバレッジを拡大し、互換性の問題を解決するためにcardano-js-sdkを更新しました。 

現在、ユーザーに通知をリモートで送信する通知機能の追加に取り組んでいます。

**Adrestia**チームは、cardano-walletのマルチシグ機能を委任機能で拡張する作業に取り組みました。トランザクション残高ライブラリーの抽出作業、パフォーマンスとメモリー使用量を改善するためのDBLayerのリファクタリングも行いました。 

cardano-js-sdkにおけるcardano-servicesのパフォーマンス最適化作業を続けました。

### スマートコントラクト

**Plutus**ツールチームは[MarconiサイドチェーンMVP](https://github.com/input-output-hk/plutus-apps/tree/main/marconi-sidechain#readmerconi-sidechain%23readme)（機能の完全性）への取り組みを続け、Marconiインデクサーの正確性をテストする方法を調査し、Marconiを別のGitHubリポジトリに移動しました。 

Plutus Coreチームは積和の実装を進め、フィーチャーコンプリートに近づきました。これは、次回ハードフォークで利用可能になる予定であるPlutus Core言語の変更であり、データ型のネイティブサポートが追加され、スクリプトの速度とサイズが大幅に改善されます。詳細は、この[CIP](https://github.com/cardano-foundation/CIPs/pull/455)を参照してください。組み込み型や関数の形式をリファクタリングし、大量のAGDAコードを削除しました。

**Marlowe**チームは、メモリープールのRuntime枯渇とエポック境界テストに取り組み、Createコマンドの[テストスイート](https://github.com/input-output-hk/marlowe-cardano/pull/550)を作成し、Marlowe Playgroundのユーザビリティテストを実行しました。スターターキットの[QAテスト](https://github.com/input-output-hk/marlowe-starter-kit/pull/4)を実施し、CLIツール用に[アップロードされたバイナリ](https://github.com/input-output-hk/marlowe-cardano/releases/tag/runtime%40v0.0.1)を含む新リリースを公開し、プレリリーステストスコープの定義、タグの作成、自動化されたMarlowe Nightlyテストのデプロイジョブ後に実行するテストジョブの作成も行いました。

特定のリンクの反映、名前形式の定義、トランザクションIDの詳細化、ステータスなど、Marloweエクスプローラーの改良作業を進めています。 

### Basho( スケーリング)

**Hydra**チームは、引き続きhydra-nodeのメインネット互換性の仕上げに取り組み、半自動スモークテストを実施し、ドラフト文書を更新しました。軽微な不具合を修正し、プロトコルの観点からオープニングHeadをより堅牢にしました。開発外では、Hydraのコミュニケーションとマーケティング資料のコラボレーションに興味を持っているコミュニティメンバーと会いました。

**Mithril**チームは、マイナーな改善とバグ修正を実装した新しい[2313.0](https://github.com/input-output-hk/mithril/releases/tag/2313.0)ディストリビューションをリリースしました。アグリゲーターストアのリレーショナル設計への移行を継続し、署名者登録ストアとオープンメッセージストアの適応と移行を完了しました。複数のデータタイプへの署名をサポートするための新しいネットワークアーキテクチャーの設計にも取り組みました。

MithrilのテストネットとDevNetで使用されているCardanoノードのバージョンを1.35.6にアップグレードしました。

### ガバナンス

**Voltaire**

3月30日、Cardanoコミュニティは、コロラド州ロングモントで同月初めに行われた[CIP-1694ワークショップ](https://www.essentialcardano.io/video/cip-1694-community-workshop)の成果をレビューするワークショップに招集されました。ワークショップはZoom上で開催され、後日閲覧できるように録画されました。このイベントでは、CIPの作成者による基調講演、コロラドワークショップでのインプットに対応した[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)の変更点に関する最新情報、コミュニティとの質疑応答が行われました。最低限の実行可能なガバナンスの約束に関する特別基調講演には、IOGのCEO、Charles Hoskinsonが参加しました。その後、参加者は、メタデータ標準、dRepと有権者のインセンティブ、コミュニティツール、投票のしきい値など、ワークショップのトピックごとに分科会セッションに分かれました。議論は、別途Miroボードに集められ、革新的なコミュニティアプローチが紹介されました。セッションの最後は、IOGのプロダクトオーナーであるMichael Madoffによる重要ポイントのまとめと最終コメントで閉められました。コミュニティワークショップスポンサーシップの詳細は、4月上旬公開予定です。
