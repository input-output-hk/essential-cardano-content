---
title: Weekly development report as of 2023-01-13
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f064eb81-ceb3-4b29-a41c-bea4470fc892/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team focused on cleaning up and benchmarking the UTXO-HD prototype. They also discussed with the ledger team the changes that might be required for the next prototype iterations. The pull request that adds the Conway era is in review to be merged soon. On the technical debt side, the team looked into a property-test failure found in the iterations. They are investigating if this is an error in the model or in the implementation. 

Finally, the team improved the testing code documentation.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team tested the new cardano-wallet and node v.1.34.5 before  release.

Work is ongoing on the **Lace** desktop development. The team improved the application’s UX by enabling multiple DApps to be open simultaneously. This required some work to make non-standardized DApps compatible with the CIP-30 standard.

They also improved the interface of the local node management, making it possible to see the progress of synchronization and dialogues for starting or stopping the node. 

Finally, the team made progress in implementing magic links so that external sources can open the Lace desktop application.

The **Adrestia** team kept working on getting cardano-js-sdk production-ready. This component is now in beta version.

The team released cardano-wallet compatible with node 1.35.4, and finally, the team also released Cardano Rosetta 2.0.0-rc.2 (pre-release version) ahead of a major release of this component.

### SMART CONTRACTS

This week, the **Plutus** team worked on increasing script capacity, inliner optimization, and the Plutus debugger MVP. The Plutus tools team continued  building Marconi indexers for the upcoming sidechains release and also worked on technical debt by supporting cardano-api in the emulator.

The **Marlowe** team updated marlowe-lambda to the new marlowe-apps API, implemented a simple, centralized, off-chain Marlowe oracle prototype, and documented Marlowe best practices and limitations. They also created several tests to check the `selectCoins` command, particularly creating a balanceable transaction, increasing the number of outputs by either 0 or 1, and succeeding or failing based on whether there is sufficient collateral. Additionally, the team implemented a basic client for the marlowe-web-server, set a test oracle as a status-check of the PureScript-marlowe CI, and set up a Cardano integration testing environment. 

Finally, they investigated the addition of Merkleization support to Marlowe Runtime and defined a structure for ACTUS contracts in metadata.

### BASHO (SCALING)

The **Hydra** team started working on a proof of concept for voting on Hydra. This work is a collaboration between IOG’s Catalyst, Hydra, and research teams, and the Cardano Foundation. Additionally, they fixed the transaction cost benchmarking [reporting](https://hydra.family/head-protocol/benchmarks/transaction-cost/) on the Hydra Head website and reduced the cost for commit transactions by ~30%. A full [digest of December 2022](https://hydra.family/head-protocol/monthly/) is now published on the Hydra website.

The **Mithril** team has been designing a mechanism for handling seamless updates of the Mithril networks in case of breaking changes that require a synchronous update of the signer nodes. They have been implementing a proof of concept to rely on an on-chain transaction to synchronously trigger the version switch of all the signer nodes. The team also worked on implementing prototype solutions to minimize the use of breaking changes where soft updates are possible.

Finally, they worked on upgrading the `devnet` and fixing some flakiness in the end-to-end tests of the CI.

This week, IOG also released the first iteration of the **sidechains** development toolkit, which comes with a technical specification for building sidechains on Cardano. Using this toolkit, IO has constructed an example EVM sidechain testnet as a proof of concept. The public testnet will be released in January 2023 allowing the community to create smart contracts, and move tokens between the testing environment chains. For more details, read this [article](https://iohk.io/en/blog/posts/2023/01/12/iog-launches-a-toolkit-for-developing-custom-sidechains-on-cardano/), the sidechain’s [technical specification](https://github.com/input-output-hk/sidechains-tooling/releases/tag/technical_spec_1.0), [development documentation](https://docs.cardano.org/cardano-sidechains/sidechain-toolkit/introduction), and [join IOG’s Technical Community Discord](https://discord.gg/inputoutput) for further discussions. 

### GOVERNANCE

This week, **Project Catalyst** got back to business with the first Town Hall of 2023. The team announced the concept of Special Voting Events that will take place using Catalyst tooling. A Special Voting Event (SVE) is a vote held outside of Project Catalyst fund cycles. Using Catalyst tooling, SVE acts as the vehicle for obtaining community consent for decisions that do not correspond to innovation or Project Catalyst community challenges.  

In the age of Voltaire, SVEs are complementary to [CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md) and offer a route to achieve community consent on important decisions before CIP-1694 is live or for decisions that do not correspond to a governance action. We will be sharing more details in the coming weeks so stay tuned!

![](https://lh5.googleusercontent.com/6JKE6JEbhsPEEAxNnFOJDi1yrwCQ2mY3_iD4-hgr_8pmxlgv-avyDP_mT4cYTODcTt3t0n7Ln4AtwzdmybnrTJHb0-ivfECFCbjqVvlfNp-9QylA6M9khEsWI3XAfjLb4UyxD0o5BUvQY2MuIDFwk9Qy-qQB_UNdNM-QlO-LZ3B7ux78EtjgdhU9fBeyiUVG)

### コアテクノロジー

**コンセンサス**チームはUTXO-HDプロトタイプのクリーンアップとベンチマークに集中しました。台帳チームと、次回プロトタイプイテレーションで必要となる可能性のある変更について話し合いました。Conway期を追加するプルリクエストはレビュー中で、まもなくマージされます。技術負債に関しては、イテレーションで発見されたプロパティテストの失敗に着目しました。現在、エラーがモデルにあるのか、実装にあるのかについて調査しています。 

テストコードのドキュメントを改訂しました。

通常通り、異なるチームからの詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、新しいcardano-walletとノードv.1.34.5のリリース前テストを実施しました。

**Lace**デスクトップの開発作業は進行中です。複数のDAppを同時に開けるよう、アプリケーションのUXを改良しました。これには、標準化されていないDAppを、CIP-30標準に対応させる作業が必要でした。

ローカルノード管理のインターフェイスを、同期の進捗状況と、ノードの起動または終了のダイアログを表示するように改良しました。 

外部ソースからLaceデスクトップアプリケーションを開けるようにするためにマジックリンクを実装する作業を進めました。

**Adrestia**チームはcardano-js-sdkを本番環境にするための作業を続けています。このコンポーネントは現在ベータ版です。

ノード1.35.4対応のcardano-walletをリリースし、 Cardano Rosettaのメジャーリリースに先駆けて、2.0.0-rc.2（プレリリース版）をリリースしました。

### スマートコントラクト

**Plutus**チームは、スクリプト容量の拡大、インライナーの最適化、Plutus Debugger MVPに取り組みました。Plutusツールチームは、予定されているサイドチェーンのリリースに向けてMarconiインデクサーの構築を続けた他、エミュレーターでcardano-apiをサポートすることによって技術負債にも取り組みました。

**Marlowe**チームは、marlowe-lambdaを新しいmarlowe-apps APIに更新し、単純で一元管理、オフチェーンのMarloweオラクルプロトタイプを実装し、Marloweのベストプラクティスと制限を文書化しました。収支を合わせたトランザクションの作成、アウトプットのナンバーを0か1ずつ増加する、十分な担保があるかどうかによって成功または失敗させるなど、`selectCoins` コマンドをチェックするために複数のテストを作成しました。marlowe-web-serverの基本クライアントを実装し、PureScript-marlowe CIのステータス確認としてテストオラクルを設定し、Cardano統合テスト環境をセットアップしました。 

Marlowe Runtimeへのマークル化サポート追加に関して調査し、メタデータのACTUSコントラクトの構造を定義しました。

### Basho( スケーリング)

**Hydra**チームは、投票用の概念実証への取り組みを始めました。この取り組みは、IOGのCatalystチーム、Hydraチーム、研究チーム、そしてCardano財団との共同で行われます。Hydra Headサイトで[レポート](https://hydra.family/head-protocol/benchmarks/transaction-cost/)されているトランザクションコストのベンチマークを修正し、コミットトランザクションのコストを~30%下げました。[Digest of December 2022](https://hydra.family/head-protocol/monthly/)の完全版は、現在Hydraサイトで公開中です。

**Mithril**チームは、署名者ノードの同時更新を必要とする破壊的変更の場合に、Mithrilネットワークのシームレスな更新を処理するためのメカニズムを設計し、すべての署名者ノードのバージョン切り替えを同期的にトリガーするオンチェーントランザクションに依存する概念実証を実装しました。ソフトアップデートが可能な場合に破壊的変更の使用を最小限に抑えるための、プロトタイプソリューションの実装に取り組みました。

`devnet`のアップグレードに取り組み、CIのエンドツーエンドにあった不安定な個所を修正しました。

今週はまた、IOGが**サイドチェーン**開発ツールキットの初回バージョンをリリースしました。これには、Cardanoでサイドチェーンを構築するための技術仕様も付随しています。このツールキットを使って、IOは概念実証としてEVMサイドチェーンテストネットのサンプルを構築しました。このパブリックテストネットは2023年1月中にリリースされ、コミュニティはスマートコントラクトを作成したり、テスト環境のチェーン間でトークンを移動したりすることができます。詳細は、こちらの[記事](https://iohk.io/jp/blog/posts/2023/01/12/iog-launches-a-toolkit-for-developing-custom-sidechains-on-cardano/)や、サイドチェーンの[技術仕様](https://github.com/input-output-hk/sidechains-tooling/releases/tag/technical_spec_1.0)、[開発ドキュメント](https://docs.cardano.org/cardano-sidechains/sidechain-toolkit/introduction)をご覧ください。また、[IOGの技術コミュニティDiscord](https://discord.gg/inputoutput)で話し合いにご参加ください。 

### ガバナンス

**Project Catalyst**は2023年最初のタウンホールの開催とともに、通常業務に戻りました。Catalystツールを使用して行われるスペシャル投票イベントのコンセプトを発表しました。スペシャル投票イベント（SVE）はProject Catalystのファンドサイクルとは別に開催されます。Catalystツールを使用することで、SVEはイノベーションやProject Catalystのコミュニティチャレンジに対応しない決定に対してコミュニティの同意を得る手段として機能します。  

Voltaireの時代において、SVEは[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)を補完し、CIP-1694が公開される前に重要な決定、または、ガバナンスアクションに対応しない決定に関してコミュニティの同意を得るためのルートを提供します。数週間内に、詳細情報をお届けしますのでご期待ください。
