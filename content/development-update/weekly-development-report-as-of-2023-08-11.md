---
title: Weekly development report as of 2023-08-11
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/50693f89-d34a-426c-9b1d-68647806fac2/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **core** technology teams tagged and pre-released node v.8.2.1-pre for use on SanchoNet, which is a new development network created to introduce the Cardano community to governance features from CIP-1694 – and to build and test together in a controlled environment, through a rolling series of regular releases. See [release notes](https://github.com/input-output-hk/cardano-node/releases/tag/8.2.1-pre) for more details. 

The **networking** team initiated the implementation of bootstrap peers. These peers are strategically designed to ensure the safety of nodes joining the network, while still harnessing the benefits of the distributed network for nodes that are synchronized. This marks an interim phase before Genesis, enabling the further distribution of the system. IOG, the Cardano Foundation, and Emurgo will initially oversee the operation of the bootstrap peers. The primary focus of these peers is on leaf nodes, such as full node wallets, that frequently engage in synchronization and require access to the honest blockchain. For more insights into the implementation plan, refer to the [ouroboros-network pull request](https://github.com/input-output-hk/ouroboros-network/issues/4615).

The **ledger** team mainly focused on implementing the Conway era. Their primary objective involved solidifying transaction-related types and their binary representation. The team also dedicated resources to help the Plutus team unblock their Plutus v3 integration. For more details on the Conway progress, see the [technical update](https://input-output-hk.github.io/cardano-updates/2023-08-04-ledger/#conway-progress).

The **consensus** team focused on integrating the latest node version into the UTXO HD branch. Ad hoc benchmarks, involving syncing a node from scratch, revealed that the LMDB backend utilizes approximately 8GB of memory. Additionally, the team released updated versions of `fs-sim`, `fs-api`, and `strict-checked-vars`.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team [released Lace v.1.4](https://www.lace.io/blog/lace-1-4-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=general) introducing new features, ‘ADA Handle’ support enhancements, and bug fixes. Users can now conveniently view personalized handles alongside regular ones under the receive tab and NFT viewing areas. The update also includes handle ownership monitoring, alerting users when a linked handle is transferred. Notable bug fixes involve the removal of unnecessary address validations, improved recipient address display in the ‘Send’ pop-up, and the resolution of a screen reappearance issue after transactions.

The team also worked on simplifying the setup of collateral, enabling ledger transactions within the DApp connector, and scoping the workload for CIP-95.

### SMART CONTRACTS

This week, the **Plutus** tools team worked on adding the final sidechain requirements to Marconi, rewriting the Marconi indexers using a new simplified API, writing integration tests, and updating the `cardano-api` version in `plutus-apps`.

The Plutus Core team focused on introducing a new feature to the Plutus Tx compiler. This feature will enable custom data types to be encoded as data, offering an alternative to Scott or sums-of-products terms. This enhancement will lead to reduced costs for generated Plutus scripts in various scenarios.

The **Marlowe** team enhanced [Marlowe Runtime to execute arbitrary Plutus](https://github.com/input-output-hk/marlowe-cardano/discussions/671) scripts alongside Marlowe, added an [example usage](https://github.com/input-output-hk/real-world-marlowe/pull/4) of the Marlowe oracle, updated some instructions, implemented [raffle scripts](https://github.com/input-output-hk/real-world-marlowe/pull/6), and investigated the potential removal of [dependencies to plutus-apps](https://github.com/input-output-hk/plutus/blob/173dce5ee85cb8038563dd39299abb550ea13b88/plutus-benchmark/plutus-benchmark.cabal#L487-L558). They also fixed some issues, renamed Marlowe Explorer to MarloweScan, and wrote a [specification](https://github.com/input-output-hk/marlowe-cardano/discussions/639) for ‘Open Roles’ in marlowe-cardano. Finally, they implemented the ‘Open Roles’ [MVP](https://github.com/input-output-hk/marlowe-cardano/tree/PLT-6793-Open-Roles). 

### BASHO (SCALING)

This week, the **Hydra** team updated the use case section for auctions on the [unstable branch](https://hydra.family/head-protocol/unstable/use-cases/) of the website, enhancing clarity around Hydra's practical applications. The team also implemented event-sourced persistence, which is a key enhancement in the project's architecture improving the performance of off-chain transaction processing. 

Finally, they introduced a new ‘submit-transaction’ endpoint to the API and participated in community reviews for several Catalyst proposals related to Hydra and Mithril. In case you missed it, see the [July report](https://hydra.family/head-protocol/monthly/2023-07/) for more details.

This week, the **Mithril** team released a new distribution `2331.1`, which includes some optimizations and bug fixes: the [bootstrap time](https://github.com/input-output-hk/mithril/issues/1131) of a Cardano node restored from a Mithril snapshot has been significantly reduced, and a bug that made the aggregator produce [corrupted archives](https://github.com/input-output-hk/mithril/issues/1137) has been fixed. They kept working on the implementation of the stress test tool for [benchmarking](https://github.com/input-output-hk/mithril/issues/991) the aggregator: the first phase has been implemented, as well as a monitoring feature. Additionally, they kept implementing the refactoring of the [serialization/deserialization](https://github.com/input-output-hk/mithril/issues/668) of the entities of the cryptographic library, and working on the [post deployment](https://github.com/input-output-hk/mithril/issues/1091) of the `mainnet` infrastructure.

Finally, they completed the rewriting and enhancements of the documentation website and kept working on the [runbook](https://github.com/input-output-hk/mithril/pull/1086) for operating a production Mithril network.

### VOLTAIRE

This week in **Voltaire**, an update has been posted on the feedback collected from the [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) workshops. As [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) moves to its final form, the community will have the opportunity to vote on whether this MVG is an acceptable way to move forward together. This represents a powerful option for the crucial advancement of participatory governance within the Cardano ecosystem.

[Intersect](https://intersectmbo.org) is a key institution for the ecosystem that brings together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such, it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol.

All participants in the Cardano ecosystem are welcome to become Intersect members. Made up of a distributed group of participants, including the foremost experts on Cardano and current ecosystem contributors, Intersect will facilitate healthy discussions and sound decision-making amongst its members, and the community at large, to uncover pain points, while championing successes. To join as a founding member, [click here](http://intersectmbo.org/).        

### CATALYST

**Project Catalyst** level 2 community review commenced on August 10. During this week's town hall, Steven Johnson and Mike McNulty presented the Continuous testnet. The Continuous testnet is now accessible to the public and will initiate a phase of public testing. The objective of this stage is to gather feedback from early testers and gradually enhance the testnet over time. You can revisit the segment from the main town hall [here](https://www.youtube.com/watch?v=svZ0PmKG3Og). Be sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the technical side of Catalyst, the team:

*   Conducted another QA dry run for the voting app
    
*   Executed updates connected to challenge setting removal, elimination of scores from the proposal list view, enforcement of proposal title length limits, and the inclusion of an open-source flag to proposal details
    
*   Engaged in discussions on accessing unmoderated review data for the upcoming dry run
    
*   Arrived at a consensus on a novel approach to sharing pertinent experience details within the app
    
*   Completed the whitelabel mockup for Voltaire and agreed upon a revised timeline
    
*   Identified and initiated efforts to address issues in the Catalyst toolbox to enable proper handling of rewards addresses in the new registration format
    
*   Progressed with the integration of snapshot data into the continuous deployment framework
    
*   Successfully addressed the requirements related to IdeaScale stageID; identified and initiated supplementary tasks to finalize the testnet, encompassing integrations with EventDB
    
*   Engaged in resolving bugs in the new IdeaScale importer
    
*   Continued testing for the new community reviews calculator and incorporated new fields in vit-ss
    
*   Performed ongoing manual testing of the moderation module
    
*   Concluded development and documentation of new auditing tools
    
*   Successfully completed the testnet eventdb
    
*   Testnet's governance voting center (GVC) is operational and accessible to the public
    
*   Ensured that snapshots and the verification tool are functioning within the testnet
    
*   Continued to augment monitoring and logging on a daily basis.
    

Finally, to stay up to date with everything happening in Project Catalyst, join the Catalyst [Telegram announcement channel](https://t.me/cardanocatalyst). 

### EDUCATION

This week, some members of the **Education** team are on the ground in Kenya to deliver the Haskell Course. They are also preparing for the ITESO Cardano Days event at the end of the month.

![](https://ucarecdn.com/b9b7f01a-82d8-4b3d-858c-16e75b85040d/)

### コアテクノロジー

**コア**テクノロジーチームはノード v.8.2.1-pre をタグ付けしてプレリリースしました。これは、CIP-1694のガバナンス機能をCardanoコミュニティに導入し、一連の定期リリースを通じて制御された環境で協力して構築およびテストするために作成された新しい開発ネットワーク、Sanchonetで使用するためのものです。詳細は[リリースノート](https://github.com/input-output-hk/cardano-node/releases/tag/8.2.1-pre)をご覧ください。 

**ネットワーキング**チームはブートストラップピアの実装を開始しました。これらのピアは、ノードがネットワークに接続する際に、同期されるノードの分散ネットワークの利点を活用しつつ、安全性を確保できるよう戦略的に設計されています。これはGenesisの前の暫定フェーズであり、システムのさらなる分散を可能にします。IOG、Cardano財団、Emurgoは、当面、ブートストラップピアの運用を監督する予定です。これらのピアは主にフルノードウォレットなどのリーフノードに重点を置き、同期に頻繁に関与し、誠実なブロックチェーンへのアクセスを必要とします。実装計画の詳細は、[ouroboros-networkプルリクエスト](https://github.com/input-output-hk/ouroboros-network/issues/4615)を参照してください。

**台帳**チームは主にConway期の実装に焦点を当てました。主な目的は、トランザクション関連の型とそのバイナリー表現を固めることです。PlutusチームがPlutus v3統合のブロックを解除するのを支援するためのリソースも提供しました。Conwayの進捗状況の詳細は、[テクニカルアップデート](https://input-output-hk.github.io/cardano-updates/2023-08-04-ledger/#conway-progress)を参照してください。

**コンセンサス**チームは、最新のノードバージョンをUTXO HDブランチに統合することに焦点を当てました。ノードを最初から同期するアドホックベンチマークでは、LMDBバックエンドが約8GBのメモリーを使用していることが明らかになりました。fs-sim、fs-api、strict-checked-varsの更新版もリリースしました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは、新機能を搭載し、ADA Handleのサポートを強化し、バグを修正した[Lace v.1.4をリリース](https://www.lace.io/blog/lace-1-4-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=general)しました。ユーザーは、受信タブとNFT表示エリアで、通常のハンドルとパーソナライズされたハンドルを便利に表示できるようになりました。更新には、ハンドル所有権の監視も含まれており、リンクされたハンドルが転送されたときにユーザーに警告します。注目すべきバグ修正には、不要なアドレス検証の削除、送信ポップアップ画面の受信者アドレス表示の改善、トランザクション後の画面再表示の問題の解決が挙げられます。

また、担保の設定を簡素化し、DAppコネクター内の台帳トランザクションを可能にし、CIP-95のワークロードをスコープ設定する作業にも取り組みました。

### スマートコントラクト

**Plutus**ツールチームは、Marconiに最終的なサイドチェーン要件を追加し、簡素化された新APIを使用してMarconiインデクサーを書き直し、統合テストを作成し、plutus-appsのcardano-apiバージョンを更新する作業に取り組みました。

Plutus Coreチームは、Plutus Txコンパイラーに新機能を導入することに注力しました。この機能により、カスタムデータ型をデータとしてエンコードできるようになりました。これは、ScottやSums-of-productsの代わりとなります。この機能強化により、さまざまなシナリオで生成されるPlutusスクリプトのコストが削減されます。

**Marlowe**チームは、Marloweと並行して[任意のPlutusスクリプトを実行できるようにMarlowe Runtimeを](https://github.com/input-output-hk/marlowe-cardano/discussions/671)拡張し、Marlowe Oracleの[使用例](https://github.com/input-output-hk/real-world-marlowe/pull/4)を追加し、インストラクションを一部更新し、[raffleスクリプト](https://github.com/input-output-hk/real-world-marlowe/pull/6)を実装し、[plutus-appsへの依存関係](https://github.com/input-output-hk/plutus/blob/173dce5ee85cb8038563dd39299abb550ea13b88/plutus-benchmark/plutus-benchmark.cabal#L487-L558)を取り除く可能性を調査しました。不具合を修正し、Marlowe ExplorerをMarloweScanに改名し、marlowe-cardanoでOpen Rolesの[仕様](https://github.com/input-output-hk/marlowe-cardano/discussions/639)を作成しました。Open Rolesの[MVP](https://github.com/input-output-hk/marlowe-cardano/tree/PLT-6793-Open-Roles)を実装しました。 

### Basho( スケーリング)

**Hydra**チームは、ウェブサイトの[不安定なブランチ](https://hydra.family/head-protocol/unstable/use-cases/)でのオークションのユースケースセクションを更新し、Hydraの実用的なアプリケーションに関して明確性を高めました。イベントソースの永続性を実装しました。これは、プロジェクトのアーキテクチャーの重要な強化であり、オフチェーントランザクション処理のパフォーマンスを向上させます。 

APIに新しくsubmit-transactionエンドポイントを導入し、HydraとMithrilに関するCatalyst提案のコミュニティレビューに参加しました。詳しくは[7月のレポート](https://hydra.family/head-protocol/monthly/2023-07/)をご覧ください。

**Mithril**チームは、最適化とバグ修正を含む新しいディストリビューション[2331.1](https://github.com/input-output-hk/mithril/releases/tag/2331.1)をリリースしました。Mithrilスナップショットから復元されたCardanoノードの[ブートストラップ時間](https://github.com/input-output-hk/mithril/issues/1131)が大幅に短縮され、アグリゲーターが[破損したアーカイブ](https://github.com/input-output-hk/mithril/issues/1137)を生成するバグが修正されました。アグリゲーターを[ベンチマーク](https://github.com/input-output-hk/mithril/issues/991)するためのストレステストツールの実装の取り組みを続け、最初のフェーズと監視機能を実装しました。暗号理論ライブラリーのエンティティを[シリアル化/逆シリアル化](https://github.com/input-output-hk/mithril/issues/668)するリファクタリングの実装を続け、mainnetインフラの[ポストデプロイ](https://github.com/input-output-hk/mithril/issues/1091)作業を続けました。

ドキュメントサイトのリライトと改良を完了し、Mithril本番ネットワークを操作するための[ランブック](https://github.com/input-output-hk/mithril/pull/1086)への取り組みを続けました。

### VOLTAIRE

**Voltaire**に関しては、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)ワークショップで収集したフィードバックに関する更新情報が公開されました。[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)が最終形態に移行するにつれて、コミュニティはこのMVGが協力して前進するための方法として受け入れられるものであるかどうかを投票する機会が得られます。これは、Cardanoエコシステムの参加型ガバナンスを進めるうえで強力なオプションを示します。

[Intersect](https://intersectmbo.org)は、Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関です。これは、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。

Cardanoエコシステムのすべての参加者は、Intersectメンバーになることを歓迎します。Cardanoの第一人者や現在のエコシステムの貢献者を含む分散化された参加者グループで構成されているIntersectは、メンバーとコミュニティ全体の間で健全な議論と健全な意思決定を促進し、成功を擁護しながら、ペインポイントを明らかにします。設立メンバーとして参加するには、[ここをクリック](http://intersectmbo.org/)してください。  

### CATALYST

Project Catalystレベル2コミュニティレビューが8月10日に始まりました。今週のタウンホールでは、Steven JohnsonとMike McNultyが継続的テストネットを発表しました。継続的テストネットは、現在一般アクセスが可能となり、パブリックテストフェーズが開始される予定です。このフェーズの目的は、初期テスターからのフィードバックを収集し、時間の経過とともに徐々にテストネットを強化していくことです。[ここ](https://www.youtube.com/watch?v=svZ0PmKG3Og)で、メインタウンホールからセグメントを再視聴できます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をお忘れなく。

Catalystの技術的側面は以下の通りです。

*   投票アプリのQAドライランをもう一度実施
    
*   チャレンジ設定の削除、提案リストビューからのスコアの削除、提案タイトルの長さ制限の適用、提案の詳細へのオープンソースフラグの追加に関連する更新の実行
    
*   次回ドライランに向けた未変更のレビューデータへのアクセスに関する議論に参加
    
*   アプリ内で関連する体験の詳細を共有するための新しいアプローチについて合意
    
*   Voltaireのホワイトラベルモックアップを完成させ、スケジュールの改訂に合意
    
*   新しい登録フォーマットで報酬アドレスを適切に処理できるように、Catalystツールボックスの問題に対処するための取り組みを特定して開始
    
*   継続的デプロイフレームワークへのスナップショットデータの統合が進捗
    
*   IdeaScale stageIDに関連する要件に適切に対応し、EventDBとの統合を含む、テストネットを完成させるための補足タスクを特定して開始
    
*   新しいIdeaScaleインポーターのバグを修正
    
*   新しいコミュニティレビュー計算機のテストを継続し、vit-ssに新フィールドを組み込み
    
*   モデレートモジュールの継続的な手動テストを実行
    
*   新しい監査ツールの開発とドキュメントを完了
    
*   テストネットeventdbを無事完了
    
*   テストネットのガバナンス投票センター（GVC）は運用可能であり、一般のアクセス可能
    
*   スナップショットと検証ツールがテストネットで機能していることを確認
    
*   日常的な監視とロギングの強化を継続
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームの一部のメンバーは、Haskellコースを提供するためにケニア入りしました。月末に開催されるITESO Cardano Daysイベントの準備も進めています。

[![F3P-x3mXUAEA8q1](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/b/7/b7f61f0fbc084611191646a4d08757a2d885ed47_2_1000x598.jpeg)F3P-x3mXUAEA8q11920×1149 164 KB](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/b/7/b7f61f0fbc084611191646a4d08757a2d885ed47.jpeg)

# TECNOLOGÍA CENTRAL

Durante esta semana, los equipos de tecnología **central** han etiquetado y prelanzado la v.8.2.1-pre del componente nodo para su uso en SanchoNet, una nueva red de desarrollo creada para dar a conocer las características de gobernanza del CIP-1694 a la comunidad de Cardano - y para construir y probar juntos en un entorno controlado, a través de una serie continua de lanzamientos regulares. Consulte [notas de la versión](https://github.com/input-output-hk/cardano-node/releases/tag/8.2.1-pre) para más detalles.

Asimismo, el equipo de **redes** ha iniciado la implementación de de los pares de arranque \[bootstrap peers\]. Estos pares están diseñados estratégicamente para garantizar la seguridad de los nodos que se unen a la red, aprovechando las ventajas de la red distribuida para los nodos que ya están sincronizados. Esto marca una fase intermedia antes de Génesis, que permite una mayor distribución del sistema. IOG, la Fundación Cardano y EMURGO supervisarán inicialmente el funcionamiento de los pares de arranque. El objetivo principal de estos peers son los nodos externos, como las wallets de nodo completo, que participan con frecuencia en la sincronización y requieren acceso a la blockchain honesta. Para más información sobre el plan de implementación, consulte [ouroboros-network pull request](https://github.com/input-output-hk/ouroboros-network/issues/4615).

El equipo del **ledger** se centró principalmente en la implementación de la era Conway. Su principal objetivo consistió en solidificar los tipos relacionados con las transacciones y su representación binaria. El equipo también dedicó recursos a ayudar al equipo de Plutus a desbloquear su integración de Plutus v3. Para más detalles sobre el progreso de Conway, consulte la [actualización técnica](https://input-output-hk.github.io/cardano-updates/2023-08-04-ledger/#conway-progress).

El equipo **consensus** se dedicó a integrar la última versión del nodo en la rama HD de UTXO. Los puntos de referencia ad hoc, que implicaban sincronizar un nodo desde cero, revelaron que el backend LMDB utiliza aproximadamente 8 GB de memoria. Además, el equipo publicó versiones actualizadas de `fs-sim`, `fs-api` y `strict-checked-vars`.

Como siempre, consulte [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** [ha publicado la versión 1.4 de Lace](https://www.lace.io/blog/lace-1-4-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=general) que introduce nuevas funciones, mejoras en la compatibilidad con `ADA Handle` y correcciones de errores. Ahora los usuarios pueden ver de forma conveniente los handles personalizados junto a los normales en la pestaña de recepción y en las áreas de visualización de NFT. La actualización también incluye la supervisión de la propiedad de los handles, que avisa a los usuarios cuando se transfiere una handle vinculada. Las correcciones de errores más destacadas incluyen la eliminación de validaciones de dirección innecesarias, la mejora de la visualización de la dirección del destinatario en la ventana emergente “Enviar”, y la resolución de un problema de reaparición de la pantalla tras las transacciones.

El equipo también ha trabajado en la simplificación de la configuración de collaterales, la habilitación de las transacciones del ledger en el conector DApp, y examinando la carga de trabajo para el CIP-95.

# SMART CONTRACTS

El equipo de herramientas de **Plutus** trabajó en añadir los requisitos finales de sidechains a Marconi, reescribiendo los indexadores de Marconi utilizando una nueva API simplificada, escribiendo pruebas de integración, y actualizando la versión `cardano-api` en `plutus-apps`.

El equipo de Plutus Core se centró en introducir una nueva característica en el compilador Plutus Tx, la cual permitirá codificar tipos de datos personalizados como datos, ofreciendo una alternativa a los términos Scott o sumas de productos. Esta mejora permitirá reducir los costes de las secuencias de comandos Plutus generadas en diversos escenarios.

El equipo de **Marlowe** mejoró [Marlowe Runtime para ejecutar scripts arbitrarios de Plutus](https://github.com/input-output-hk/marlowe-cardano/discussions/671) junto con Marlowe, añadió un [ejemplo de uso](https://github.com/input-output-hk/real-world-marlowe/pull/4) del oráculo de Marlowe, actualizó algunas instrucciones, implementó [scripts de sorteo](https://github.com/input-output-hk/real-world-marlowe/pull/6), e investigó la posible eliminación de [dependencias de plutus-apps](https://github.com/input-output-hk/plutus/blob/173dce5ee85cb8038563dd39299abb550ea13b88/plutus-benchmark/plutus-benchmark.cabal#L487-L558). También solucionaron algunos problemas, cambiaron el nombre de Marlowe Explorer a MarloweScan, y escribieron una [especificación](https://github.com/input-output-hk/marlowe-cardano/discussions/639) para ‘Open Roles’ en marlowe-cardano. 

Por último, implementaron el [MVP](https://github.com/input-output-hk/marlowe-cardano/tree/PLT-6793-Open-Roles) de ‘Open Roles’.

# BASHO (AMPLIACIÓN)

Esta semana, el equipo **Hydra** actualizó la sección de casos de uso para subastas en la [rama inestable](https://hydra.family/head-protocol/unstable/use-cases/) del sitio web, mejorando la claridad en torno a las aplicaciones prácticas de Hydra. El equipo también implementó la persistencia basada en eventos, que es una mejora clave en la arquitectura del proyecto que mejora el rendimiento del procesamiento de transacciones fuera de la cadena.

Por último, introdujeron un nuevo punto final “submit-transaction” en la API y participaron en las revisiones comunitarias de varias propuestas Catalyst relacionadas con Hydra y Mithril. Consulte el [informe de julio](https://hydra.family/head-protocol/monthly/2023-07/) para obtener más detalles.

El equipo de **Mithril** publicó una nueva distribución `2331.1`, que incluye algunas optimizaciones y correcciones de errores: se ha reducido significativamente el [tiempo de arranque](https://github.com/input-output-hk/mithril/issues/1131) de un nodo Cardano restaurado a partir de una instantánea de Mithril, y se ha corregido un error que hacía que el agregador produjera [archivos dañados](https://github.com/input-output-hk/mithril/issues/1137). Siguieron trabajando en la implementación de la herramienta de prueba de estrés para [benchmarking](https://github.com/input-output-hk/mithril/issues/991) del agregador: se ha implementado la primera fase, así como una función de monitorización. Además, siguieron implementando la refactorización de la [serialización/deserialización](https://github.com/input-output-hk/mithril/issues/668) de las entidades de la biblioteca criptográfica, y trabajando en el [post despliegue](https://github.com/input-output-hk/mithril/issues/1091) de la infraestructura `mainnet`.

Por último, completaron la reescritura y las mejoras del sitio web de documentación y siguieron trabajando en el [runbook](https://github.com/input-output-hk/mithril/pull/1086) para operar una red Mithril en producción.

# VOLTAIRE

Esta semana, en **Voltaire**, se ha publicado una actualización de los comentarios recogidos en los talleres [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380). A medida que [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) avance hacia su forma definitiva, la comunidad tendrá la oportunidad de votar si este MVG es una forma aceptable de avanzar juntos. Esto representa una poderosa opción para el avance crucial de la gobernanza participativa dentro del ecosistema Cardano.

[Intersect](https://intersectmbo.org/) es una institución para el ecosistema que reúne a empresas, desarrolladores, particulares y otros participantes del ecosistema para dar forma e impulsar el futuro desarrollo de Cardano. Como tal, será un administrador de los procesos que rigen la hoja de ruta y el desarrollo continuo de la plataforma y el protocolo Cardano.

Invitamos a todos los participantes del ecosistema Cardano a convertirse en miembros de Intersect. Formado por un grupo distribuido de participantes, entre los que se encuentran los principales expertos en Cardano y los actuales colaboradores del ecosistema, Intersect facilitará debates sanos y la toma de decisiones acertadas entre sus miembros, y la comunidad en general, para descubrir los puntos débiles, al tiempo que defiende los éxitos. Para unirse como miembro fundador, [haga clic aquí](http://intersectmbo.org/).

# CATALYST

**La revisión comunitaria de nivel 2 del Proyecto Catalyst** se inició el 10 de agosto. Durante el ayuntamiento de esta semana, Steven Johnson y Mike McNulty presentaron la red de pruebas Continuous. La red de pruebas Continuous es ahora accesible al público e iniciará una fase de pruebas públicas. El objetivo de esta fase es recoger los comentarios de los primeros probadores y mejorar gradualmente la red de pruebas con el tiempo. Puede volver a ver el segmento del ayuntamiento principal [aquí](https://www.youtube.com/watch?v=svZ0PmKG3Og). Asegúrese de registrar su asistencia al [próximo ayuntamiento](http://bit.ly/catalyst-townhall).

En el aspecto técnico de Catalyst, el equipo:

*   Realizó otro simulacro de control de calidad para la aplicación de votación.
    
*   Ejecutó actualizaciones relacionadas con la eliminación de la configuración del desafío, la eliminación de las puntuaciones de la vista de la lista de propuestas, la aplicación de los límites de longitud del título de la propuesta, y la inclusión de una bandera de código abierto a los detalles de la propuesta.
    
*   Entabló discusiones sobre el acceso a los datos de revisión no moderados para el próximo ensayo general.
    
*   Alcanzó un consenso sobre un enfoque novedoso para compartir los detalles pertinentes de la experiencia dentro de la aplicación.
    
*   Finalizó el modelo de la etiqueta blanca para Voltaire y acordó un calendario revisado.
    
*   Identificó e inició los esfuerzos para abordar los problemas en la caja de herramientas de Catalyst para permitir el manejo adecuado de las direcciones de recompensas en el nuevo formato de registro.
    
*   Avanzó en la integración de los datos instantáneos en el marco de despliegue continuo.
    
*   Abordó con éxito los requisitos relacionados con IdeaScale stageID; identificó e inició tareas complementarias para finalizar la red de pruebas, que abarcan integraciones con EventDB.
    
*   Participó en la resolución de errores en el nuevo importador de IdeaScale.
    
*   Continuó las pruebas de la nueva calculadora de revisiones de la comunidad e incorporó nuevos campos en vit-ss.
    
*   Realizó pruebas manuales continuas del módulo de moderación.
    
*   Concluyó el desarrollo y la documentación de las nuevas herramientas de auditoría.
    
*   Finalizó con éxito el eventdb en testnet.
    
*   El centro de votación de gobernanza (GVC) en testnet está operativo y accesible.
    
*   Garantizó que las instantáneas y la herramienta de verificación funcionan en la testnet.
    
*   Continuado aumentando la supervisión y el registro diariamente.
    

Por último, para estar al día de todo lo que ocurre en el Proyecto Catalyst, únase al canal de anuncios de Telegram de Catalyst.

# EDUCACIÓN

Esta semana, algunos miembros del equipo de **Educación** se encuentran en Kenia para impartir el curso Haskell. También se están preparando para el evento ITESO Cardano Days a finales de mes.
