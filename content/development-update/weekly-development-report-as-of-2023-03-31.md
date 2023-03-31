---
title: Weekly development report as of 2023-03-31
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/ea5a821b-3ba9-46c1-90a3-b731954038cb/
image_text: Weekly development report as of 2023-03-31
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on networking, consensus, and node improvements.

The **system test** team made further improvements to the test framework by adding more automated tests and analyzing and fixing Nightly job failures. They also tested node v.1.35.5 and v.1.35.6 releases (and their preceding release candidates) and ran tests on the branch with the UTXO-HD functionality. For more node test details [see this documentation](https://input-output-hk.github.io/cardano-node-tests/index.html).

Additionally, the **DB Sync** team worked on performance enhancement issues, on providing new db-sync options, and on technical debt and bug fixing. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

Work is ongoing on the **Lace** desktop development. The team fixed some issues related to decentralized exchanges (DEXs) interacting with the DApp browser, and made dark mode UI improvements by loading a spinner and scroll bars. They also added a generic CIP-30 error page for DApp interaction. 

The **Adrestia** team worked on extending the multi-signature feature with delegation functionality in cardano-wallet. They also worked on extracting the transaction balancing library and did some refactoring of the DBLayer to improve performance and memory usage. 

Finally, they continued working on performance optimization of cardano-services in cardano-js-sdk.

### SMART CONTRACTS

The **Marlowe** team designed a [backpressure interface](https://github.com/input-output-hk/marlowe-cardano/pull/544) for Marlowe Runtime, reworked the starter kit, and documented the memory and CPU [requirements](https://github.com/input-output-hk/marlowe-cardano/pull/539) for deploying each of the Marlowe Runtime components. They also created a new basic [theory](https://github.com/input-output-hk/marlowe/pull/161) around asset preservation, adjusted the default logging [configuration](https://github.com/input-output-hk/marlowe-cardano/pull/542) for each component, wrote golden [tests](https://github.com/input-output-hk/marlowe-cardano/pull/536) for protocol messages, and added a download function for a detailed view of the Marlowe contract in Marlowe Explorer. 

Finally, they ran some property-based tests and [enabled](https://github.com/input-output-hk/marlowe-cardano/pull/377) `mainnet` in `marlowe-cli` and Marlowe tools. 

### BASHO (SCALING)

The **Hydra** team held a workshop and used the `hydraw` demo application during the March monthly review meeting to demonstrate [Hydra heads running on mainnet](https://www.youtube.com/watch?v=mA9lMV0tKN8). While this marks an important milestone, the team emphasized that more features will be added to enable applications to run using the Hydra Head protocol. The team also cleaned up [the roadmap](https://github.com/orgs/input-output-hk/projects/21) providing more space for user requests, and encouraged the use of community discussions. To stay up to date, join the [ask-hydra Discord channel](https://discord.gg/Qq5vNTg9PT) or [GitHub discussions](https://github.com/input-output-hk/hydra/discussions).

The **Mithril** team prepared the pre-release of the new distribution [2313.0-prerelease](https://github.com/input-output-hk/mithril/releases/tag/2313.0-prerelease). They continued implementing the migration of the stores to a relational design and completed the adaptation and migration of the certificate, epoch\_settings, and also signed entity type stores. They completed refactoring the dependency injector of the aggregator and simplified the multi-signer in order for it to sign multiple concurrent messages.

Finally, the team enhanced the error messages displayed on the signer nodes when the registration fails because the KES keys need to be rotated, and patched a security issue in the OpenSSL library.

### GOVERNANCE 

If you haven’t had a chance to review the updates to [CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md), Input Output Global (IOG) encourages you to! You can contribute directly to GitHub and continue the conversation on various community channels.

After the successful CIP-1694 workshop in Colorado, IOG invited all community members to a Zoom conversation on March 30th. The event provided attendees with a chance to review the workshop, learn more about CIP-1694, and discuss the upcoming next steps towards the age of Voltaire.

![](https://lh5.googleusercontent.com/E9imOrHW5fyeTHAJF7S2EdEoPUBhs3yUTJKz2O5sDUpmZ4wlh0BZEcV2aCs5fueO_OZpJUyFmWAA10yCcnfxhPzwUWn7syh71Tz6od5eqXDBdT8yWG4Q6IaSoRgKxl8LYXEH6P0oyE6I3cYR-rkCNmY)

### コアテクノロジー

コアテクノロジーチームは、ネットワーク、コンセンサス、ノードの改良への取り組みを続けました。

**システムテスト**チームは、より多くのテストを自動化し、Nightlyのジョブの失敗を分析および修正することで、テストフレームワークをさらに改善しました。ノードv.1.35.5およびv.1.35.6リリース（およびそれ以前のリリース候補）をテストし、UTXO-HD機能を使用してブランチでテストを実行しました。ノードテストの詳細は、[このドキュメントを参照](https://input-output-hk.github.io/cardano-node-tests/index.html)してください。

**DB Sync**チームは、パフォーマンス向上の問題、新しいdb-syncオプションの提供、技術負債とバグ修正に取り組みました。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**デスクトップの開発作業は進行中です。DAppブラウザーとやり取りする分散型取引所（DEX）に関する問題を修正し、スピナーとスクロールバーをロードしてUIのダークモードを改善しました。DAppとのインタラクションに関する一般的なCIP-30エラーのページも追加されました。 

**Adrestia**チームは、cardano-walletのマルチシグ機能を委任機能で拡張する作業に取り組みました。トランザクション残高ライブラリーの抽出作業、パフォーマンスとメモリー使用量を改善するためのDBLayerのリファクタリングも行いました。 

cardano-js-sdkにおけるcardano-servicesのパフォーマンス最適化作業を続けました。

### スマートコントラクト

**Marlowe**チームは、Marlowe Runtimeの[バックプレッシャーインターフェイス](https://github.com/input-output-hk/marlowe-cardano/pull/544)を設計し、スターターキットを再構築し、各Marlowe RuntimeコンポーネントをデプロイするためのメモリとCPU[要件](https://github.com/input-output-hk/marlowe-cardano/pull/539)を文書化しました。資産保全に関する新しい基本[理論](https://github.com/input-output-hk/marlowe/pull/161)を作成し、各コンポーネントのデフォルトログ[設定](https://github.com/input-output-hk/marlowe-cardano/pull/542)を調整し、プロトコルメッセージのゴールデン[テスト](https://github.com/input-output-hk/marlowe-cardano/pull/536)を作成し、MarloweエクスプローラーでMarloweコントラクトの詳細を表示するためのダウンロード機能を追加しました。 

いくつかのプロパティベースのテストを実行し、marlowe-cliとMarloweツールでmainnetを[有効](https://github.com/input-output-hk/marlowe-cardano/pull/377)にしました。 

### Basho( スケーリング)

**Hydra**チームはワークショップを開催し、3月の月例レビュー会議でhydrawのデモアプリを使用して、[メインネット上でHydraヘッドを実行する](https://www.youtube.com/watch?v=mA9lMV0tKN8)というデモを行いました。これを重要なマイルストンとする一方で、Hydra Headプロトコルを使用してアプリケーションを実行できるようにするために、より多くの機能が追加されることが強調されました。ユーザーのリクエストに対応するためのスペースを提供する[ロードマップ](https://github.com/orgs/input-output-hk/projects/21)を整理し、コミュニティディスカッションの使用を奨励しました。最新情報を入手するには、[ask-hydra Discord](https://discord.gg/Qq5vNTg9PT)チャネルまたは[GitHubディスカッション](https://github.com/input-output-hk/hydra/discussions)に参加してください。

**Mithril**チームは  、新しいディストリビューション[2313.0-prerelease](https://github.com/input-output-hk/mithril/releases/tag/2313.0-prerelease)のプレリリースを準備しました。ストアのリレーショナル設計への移行を継続し、証明書、epoch\_settings、署名済みエンティティタイプストアの適応と移行を完了しました。アグリゲーターの依存関係インジェクターのリファクタリングを完了し、複数の同時メッセージに署名するためにマルチ署名者を簡素化しました。

KESキーをローテーションする必要があるために登録が失敗した場合に署名者ノードに表示されるエラーメッセージを強化し、OpenSSLライブラリーのセキュリティ問題にパッチをあてました。

### ガバナンス 

[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)の更新を未確認の場合は、ぜひ実行してください。GitHubに直接貢献し、さまざまなコミュニティチャネルで会話を続けることができます。

コロラド州で開催されたCIP-1694ワークショップが成功を収めた後、IOGは3月30日のZoomミーティングにコミュニティメンバー全員を招待しました。このイベントでは、参加者はワークショップを振り返り、CIP-1694の詳細を学び、ヴォルテール期に向けた次のステップについて話し合う機会が提供されました。
