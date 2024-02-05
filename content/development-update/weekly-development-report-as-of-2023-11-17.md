---
title: Weekly development report as of 2023-11-17
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/c0f96363-ce5e-45dd-9208-e70daa67c63b/
image_text: ""
---

### CORE TECHNOLOGY

Over the past two weeks, the **consensus** team managed to run a UTXO-HD capable node in legacy mode, maintaining the baseline memory usage while keeping all the ledger state in memory (as the current node does). This legacy mode could provide an alternative for releasing a UTXO-HD capable node where users can choose whether or not to store the large part of the UTXO set on disk. Implementing legacy mode entails code duplication and necessitates several weeks of integration and testing before achieving production readiness.

The teams will not release the UTXO-HD feature before Conway to avoid the risk of delaying the latter. On the other hand, to integrate the LSM-tree backend for UTXO-HD, it is essential to redesign the consensus storage layer, and this new design might enable the implementation of an alternative in-memory backing store that will have very similar performance and resource requirements as the current Cardano node. Therefore, during the coming months, the team will focus their efforts on redesigning the storage layer and the LSM-tree backend.

On the Genesis front, the team reviewed the peer simulator for Genesis tests, which was implemented by Tweag and signed off by the consensus team.

They also continued improving the handling of blocks from the future and presented possible approaches in the chief scientist meeting at IOG, which was very well-received. The discussion with the IOG scientists touched upon the relationship of this approach to [Ouroboros Chronos](https://iohk.io/en/blog/posts/2021/10/27/ouroboros-chronos-provides-the-first-high-resilience-cryptographic-time-source-based-on-blockchain/).

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team released [version 1.7](https://www.lace.io/blog/lace-1-7-0-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog), with updates for the multi-staking feature, such as new tools to reduce drift and better insights on staking pool retirement and saturation.

### SMART CONTRACTS

The **Plutus** **tools** team continued working on the Marconi API queries, Marconi cardano-node-emulator, and documentation improvements.

The **Marlowe** team improved the performance of `FindTxsFor` [operation](https://github.com/input-output-hk/marlowe-cardano/pull/744) and the [chain indexer](https://github.com/input-output-hk/marlowe-cardano/pull/738). They also tested the vesting DApp prototype, published the token plan [README](https://github.com/input-output-hk/marlowe-token-plans/pull/29), and tested the Marlowe Runner functionality, also adding relevant links to the explorer and Playground. Additionally, the team updated the ‘Deploying Marlowe Runtime’ overview to be consistent with the Marlowe starter kit, reviewed user documentation for TS-SDK, and [defined](https://github.com/input-output-hk/marlowe-agda/pull/1) small-step semantics in Agda. 

### SCALING

Over the last two weeks, the **Hydra** team published the [October report](https://hydra.family/head-protocol/monthly/2023-10) and delivered a presentation and a workshop at the Cardano Summit, contributing to community engagement. They also implemented a ‘dirt road’ solution for the ‘Ignored init tx’ notification and moved the hydra-poll example project to a dedicated [repository](https://github.com/cardano-scaling/hydra-poll). Additionally, the team built a [hydra-chain-observer tool](https://github.com/input-output-hk/hydra/issues/1096) for Hydra heads, updated the toolchain to GHC [v.9.6.3](https://github.com/input-output-hk/hydra/pull/1135), and made various improvements to tooling and code formatting. They addressed specific issues, such as fixing the [gen-hydra-keys command](https://github.com/input-output-hk/hydra/issues/1136) and resolving concerns with the rewritten hydra-tui. The team also enhanced the hydra-cluster smoke test suite by [fetching network configurations dynamically](https://github.com/input-output-hk/hydra/pull/1156). 

Finally, they reviewed multiple pull requests and architectural decision records from the community, including contributions from SundaeSwap. The Cardano Foundation completed and deployed an experiment, the Hydra tally, to mainnet.

This week, the **Mithril** team completed the adaptation of the Mithril client as a library. They progressed in decentralizing the Mithril networks with the peer-to-peer (P2P) networking proof-of-concept, achieving the implementation of P2P signatures broadcast with the relay in the end-to-end tests. Additionally, the team completed the proof-of-concept for the deterministic computation of the UTXO/transactions set from immutable files.

Finally, they continued addressing some performance issues associated with the 'release-mainnet' aggregator and fixed a bug with the tool used to process batch certificate hash re-computation.

### VOLTAIRE

This week, IOG's **Voltaire** team, in collaboration with the Cardano Foundation, Intersect, and EMURGO, worked on preparing for the Cardano Ballot. Following 400 GitHub comments, 50 global workshops across 23 countries, and over 1,000 participants, CIP-1694 will be up for a vote.

The ballot is designed as a 'temperature check,' providing the opportunity for ada holders from various backgrounds to express their opinions on the future decision-making process for the Cardano blockchain. Voting will take place on December 1-11, 2023. Ada holders must have delegated their ada to a stake pool operator (SPO) by November 20, 2023, as holders must stake a minimum of one lovelace to vote. The votes are exempt from transaction fees, and compatible wallets include the Yoroi wallet, Flint, Eternl, Nami, Typhon, Nufi, GeroWallet, and Lace.

To participate and have your say, head to: [https://buff.ly/3QG7Y0t](https://buff.ly/3QG7Y0t)          

### CATALYST

This week, **Project Catalyst** launched Fund11, featuring a funding round of 50 million ada for redistribution to foster growth in the Cardano ecosystem. Catch the [latest town hall recording](https://bit.ly/40JXFgO) or explore the [Fund11 launch guide](https://projectcatalyst.io/catalyst-fund-11-launch-guide.pdf). Fund11 incorporates exciting changes based on community feedback and lessons learned. You can find a high-level overview [here](https://docs.google.com/presentation/d/1uPx4-T1x8TbWOzozo-_G7megjeiYsLns7-2ciTWuYGw/edit#slide=id.g29b6a23edd7_0_87296).

Submissions are now open with new categories until November 30 for public drafts. The proposal finalization period is extended until December 7. Ready to submit your ideas and collaborate with the community for funding? Hop over to [cardano.ideascale.com](//cardano.ideascale.com) today and submit your drafts. Find [more information here](https://projectcatalyst.io/funds/11).

### EDUCATION

This week, the **Education** team kept gathering feedback from the participants of the recent Haskell course with ABC. They also continued delivering the internal IOG Maths Academy.

![](https://ucarecdn.com/f9d84f9c-6e2b-4fb8-8c09-6e2a7de9a2d1/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

過去2週間にわたって、**コンセンサス**チームは、UTXO-HD対応ノードをレガシーモードで実行し、メモリーのベースライン使用量を維持しながら、すべての台帳ステータスをメモリー内に保持することに成功しました（現在のノードと同様）。このレガシーモードでは、UTXO-HD対応ノードをリリースする代わりに、UTXOセットの大部分をディスクに保存するかどうかをユーザーが選択できるようにすることができます。レガシーモードの実装はコードの複製を伴い、本番環境の準備を整える前に、数週間にわたる統合作業とテストが必要になります。

Conwayが遅延するリスクを回避するために、UTXO-HD機能のリリースはConwayより先には行いません。一方、UTXO-HDのLSM-treeバックエンドを統合するには、コンセンサスストレージレイヤーを再設計することが不可欠であり、この新しい設計により、現在のCardanoノードと非常に類似したパフォーマンスとリソース要件を持つ代替インメモリーバッキングストアの実装が可能になる可能性があります。したがって、今後数か月間、チームはストレージレイヤーとLSM-treeバックエンドの再設計に注力します。

Genesisに関しては、Genesisテストのピアシミュレーターをレビューしました。これはTweagによって実装され、コンセンサスチームによって承認されました。

未来からのブロックの処理の強化を継続し、IOGのチーフサイエンティストミーティングで可能性のあるアプローチを発表し、好評を博しました。IOGの科学者との議論では、このアプローチと[Ouroboros Chronos](https://iohk.io/en/blog/posts/2021/10/27/ouroboros-chronos-provides-the-first-high-resilience-cryptographic-time-source-based-on-blockchain/)との関係に触れました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは[バージョン1.7](https://www.lace.io/blog/lace-1-7-0-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog)をリリースしました。これには、ドリフトを減らすための新しいツールや、ステーキングしているプールの廃止と飽和に関するより良い洞察など、マルチステーキング機能の更新が含まれます。

### スマートコントラクト

**Plutusツール**チームは、Marconi APIクエリ、Marconi cardano-node-emulator、ドキュメントの改訂への取り組みを続けました。

**Marlowe**チームは、[FindTxsForの操作](https://github.com/input-output-hk/marlowe-cardano/pull/744)と[チェーンインデクサー](https://github.com/input-output-hk/marlowe-cardano/pull/738)のパフォーマンスを改善しました。DAppのプロトタイプをテストし、トークンプラン[README](https://github.com/input-output-hk/marlowe-token-plans/pull/29)を公開し、Marlowe Runnerの機能をテストし、エクスプローラーとPlaygroundに関連リンクを追加しました。Marloweスターターキットとの整合性を保つように「Deploying Marlowe Runtime」の概要を更新し、TS-SDKのユーザードキュメントをレビューし、AGDAで小さなステップのセマンティクスを[定義](https://github.com/input-output-hk/marlowe-agda/pull/1)しました。 

### スケーリング

過去2週間にわたり、**Hydra**チームは[10月の月次レポート](https://hydra.family/head-protocol/monthly/2023-10)を発表し、Cardanoサミットでプレゼンテーションとワークショップを行い、コミュニティエンゲージメントに貢献しました。ignored init tx通知用のdirt roadソリューションを実装し、hydra-pollのサンプルプロジェクトを専用[リポジトリ](https://github.com/cardano-scaling/hydra-poll)に移動しました。Hydraヘッド用の[hydra-chain-observerツール](https://github.com/input-output-hk/hydra/issues/1096)を構築し、ツールチェーンをGHC [v.9.6.3](https://github.com/input-output-hk/hydra/pull/1135)に更新し、ツールの作成とコードのフォーマットにさまざまな改良を加えました。[gen-hydra-keysコマンド](https://github.com/input-output-hk/hydra/issues/1136)の修正や、書き直したhydra-tuiの不具合の解決など、特定の問題に対処しました。[ネットワーク構成を動的に取得](https://github.com/input-output-hk/hydra/pull/1156)することで、hydra-clusterスモークテストスイートを強化しました。 

SundaeSwapからの貢献を含む、コミュニティからの複数のプルリクエストとアーキテクチャー上の決定記録をレビューしました。Cardano財団はHydra Tallyという実験を完了し、メインネットにデプロイしました。

**Mithril**チームはライブラリーとしてのMithrilクライアントの適用に関する作業を完了しました。P2Pネットワーキングの概念実証でMithrilネットワークの分散化を進め、エンドツーエンドテストでリレーを使用したP2P署名ブロードキャストの実装を達成しました。不変ファイルから得られるUTXO/トランザクションセットの決定的計算の概念実証を完了しました。

release-mainnetアグリゲーターに関連するパフォーマンスの問題に引き続き取り組み、バッチ証明書ハッシュの再計算を処理するために使用されるツールのバグを修正しました。

### VOLTAIRE

IOGの**Voltaire**チームは、Cardano財団、Intersect、EMURGOと協力して、Cardano Ballotの準備に取り組みました。GitHubでの400件のコメント、23カ国で50のグローバルワークショップ、1,000人以上の参加者を経て、CIP-1694は投票に向けて準備を整えています。

投票は「温度チェック」として設計されており、さまざまなバックグラウンドのADA保有者がCardanoブロックチェーンの将来の意思決定プロセスについて意見を述べる機会を提供します。投票期間は2023年12月1日から11日です。投票するためには、ADA保有者は、2023年11月20日までに少なくとも1LovelaceをSPO（ステークプールオペレーター）に委任しておく必要があります。投票は取引手数料を免除されます。互換性のあるウォレットには、Yoroiウォレット、Flint、Eternl、Nami、Typhon、Nufi、GeroWallet、Laceが含まれます。

参加して意見を表明するには、[https://buff.ly/3QG7Y0t](https://buff.ly/3QG7Y0t)にアクセスしてください。       

### CATALYST

**Project Catalyst**は、Cardanoエコシステムの成長を促進するため5000万ADAを再分配する資金ラウンド、Fund11を立ち上げました。詳細は、[最新のタウンホールの録画](https://bit.ly/40JXFgO)や、[Fund11ローンチガイド](https://projectcatalyst.io/catalyst-fund-11-launch-guide.pdf)をご覧ください。Fund11には、コミュニティからのフィードバックや教訓に基づいたエキサイティングな変更が加えられています。概要は、[こちら](https://docs.google.com/presentation/d/1uPx4-T1x8TbWOzozo-_G7megjeiYsLns7-2ciTWuYGw/edit#slide=id.g29b6a23edd7_0_87296)をご覧ください。

11月30日まで、新カテゴリーで公開ドラフトとして受付中です。最終案の決定期間は12月7日まで延長されました。資金調達に向けてアイデアを提出し、コミュニティと協力する準備が整ったら、[cardano.ideascale.com](//cardano.ideascale.com)から今すぐドラフトを提出してください。詳細は[こちら](https://projectcatalyst.io/funds/11)から。

### 教育

**教育**チームは、引き続き最近行われたABCとのHaskellコースの参加者からフィードバックを集めました。社内IOG Maths Academyの提供も継続しました。

\---

# TECNOLOGÍA DE NÚCLEO

Durante las dos últimas semanas, el equipo **Consensus** ha sido capaz de hacer funcionar un nodo compatible con UTXO-HD en modo heredado, manteniendo el uso de memoria de referencia y conservando todo el estado del ledger en memoria (como hace el nodo actual). Esta modalidad heredada podría ofrecer una alternativa para lanzar un nodo capaz de UTXO-HD en el que los usuarios puedan elegir si almacenan o no la mayor parte del conjunto UTXO en disco. La implementación del modo heredado conlleva la duplicación del código y requiere varias semanas de integración y pruebas antes de lograr la preparación para la producción.

Los equipos no lanzarán la función UTXO-HD antes que Conway a fin de evitar el riesgo de retrasar esta última. Por otro lado, para integrar el backend LSM-tree para UTXO-HD, es esencial rediseñar la capa de almacenamiento de consenso, y este nuevo diseño podría permitir la implementación de un almacén de respaldo en memoria alternativo que tendrá un rendimiento y unos requisitos de recursos muy similares a los del nodo Cardano actual. Por ello, durante los próximos meses, el equipo centrará sus esfuerzos en rediseñar la capa de almacenamiento y el backend LSM-tree.

En el frente de Génesis, el equipo revisó el simulador de pares para las pruebas de Génesis, que fue implementado por Tweag y aprobado por el equipo de consenso.

Asimismo, siguieron mejorando el manejo de los bloques del futuro y presentaron posibles enfoques en la reunión de científicos jefe en IOG, que fue muy bien recibida. En el debate con los científicos del IOG se abordó la relación de este enfoque con [Ouroboros Chronos](https://iohk.io/en/blog/posts/2021/10/27/ouroboros-chronos-provides-the-first-high-resilience-cryptographic-time-source-based-on-blockchain/).

Consulte, como siempre, [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** lanzó la [versión 1.7](https://www.lace.io/blog/lace-1-7-0-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog), con actualizaciones para la función de múltiples stakes, como nuevas herramientas para reducir la deriva y mejores perspectivas sobre la jubilación y saturación de los staking pools.

# SMART CONTRACTES

El equipo de **Herramientas** de **Plutus** siguió trabajando en las consultas de la API de Marconi, el emulador de nodos cardánicos de Marconi y las mejoras de la documentación.

El equipo de **Marlowe** mejoró el rendimiento de la \[operación\] `FindTxsFor`([PLT-8241 find txs for performance by jhbertra · Pull Request #744 · input-output-hk/marlowe-cardano · GitHub](https://github.com/input-output-hk/marlowe-cardano/pull/744)) y del [indexador de cadenas](https://github.com/input-output-hk/marlowe-cardano/pull/738). También probaron el prototipo de DApp de vesting, publicaron el plan de tokens [README](https://github.com/input-output-hk/marlowe-token-plans/pull/29), y probaron la funcionalidad del Marlowe Runner, añadiendo también enlaces relevantes al explorador y al Playground. Además, el equipo actualizó la descripción general de ‘Deploying Marlowe Runtime’ para que fuera coherente con el kit de inicio de Marlowe, revisó la documentación de usuario para TS-SDK y [definió](https://github.com/input-output-hk/marlowe-agda/pull/1) la semántica de pasos pequeños en Agda.

# ESCALADO

Durante las dos últimas semanas, el equipo **Hydra** publicó el [informe de octubre](https://hydra.family/head-protocol/monthly/2023-10) e hizo una presentación y un taller en la Cumbre Cardano, con lo que contribuyó al compromiso de la comunidad. También implementaron una solución ‘dirt road’ para la notificación ‘Ignored init tx’ y trasladaron el proyecto de ejemplo hydra-poll a un \[repositorio\] dedicado([GitHub - cardano-scaling/hydra-poll](https://github.com/cardano-scaling/hydra-poll)). Además, el equipo construyó una [herramienta hydra-chain-observer](https://github.com/input-output-hk/hydra/issues/1096) para los jefes de Hydra, actualizó la cadena de herramientas a GHC [v.9.6.3](https://github.com/input-output-hk/hydra/pull/1135) e introdujo diversas mejoras en las herramientas y el formato del código. Abordaron cuestiones específicas, como la corrección del [comando gen-hydra-keys](https://github.com/input-output-hk/hydra/issues/1136) y la resolución de problemas con el hydra-tui reescrito. El equipo también mejoró el conjunto de pruebas de humo de hydra-cluster mediante la [obtención dinámica de configuraciones de red](https://github.com/input-output-hk/hydra/pull/1156).

Finalmente, revisaron múltiples pull requests y registros de decisiones arquitectónicas de la comunidad, incluyendo contribuciones de SundaeSwap. La Fundación Cardano completó y desplegó un experimento, el recuento Hydra, en la red principal.

Esta semana, el equipo **Mithril** completó la adaptación del cliente Mithril como biblioteca. Progresaron en la descentralización de las redes Mithril con la prueba de concepto de red entre pares (P2P), logrando la implementación de la difusión de firmas P2P con el relé en las pruebas de extremo a extremo. Adicionalmente, el equipo completó la prueba de concepto para el cálculo determinista del conjunto UTXO/transacciones a partir de archivos inmutables.

Siguieron abordando algunos problemas de rendimiento asociados al agregador “release-mainnet” y solucionaron un error de la herramienta utilizada para procesar el recálculo de hash de certificados por lotes.

# VOLTAIRE

Esta semana, el equipo de **Voltaire** de IOG, en colaboración con la Fundación Cardano, Intersect y EMURGO, trabajó en la preparación de la votación de Cardano. Tras 400 comentarios en GitHub, 50 talleres globales en 23 países y más de 1.000 participantes, el CIP-1694 se someterá a votación.

Esta votación está diseñada como una “comprobación de temperatura”, ofreciendo la oportunidad a los titulares de adas de diversos orígenes de expresar sus opiniones sobre el futuro proceso de toma de decisiones para la blockchain Cardano. La votación tendrá lugar del 1 al 11 de diciembre de 2023. Los titulares de ada deben haber delegado su ada en un operador de stake pool (SPO) antes del 20 de noviembre de 2023, ya que los titulares deben stackear un mínimo de una lovelace para votar. Las votaciones están exentas de tarifas de transacción, y entre las carteras compatibles se encuentran la wallet Yoroi, Flint, Eternl, Nami, Typhon, Nufi, GeroWallet y Lace.

Si desea participar y dar su opinión, diríjase a: [https://buff.ly/3QG7Y0t](https://buff.ly/3QG7Y0t)

# CATALYST

Esta semana, **Proyecto Catalyst** lanzó el Fondo11, con una ronda de financiación de 50 millones de ada para su redistribución con el fin de fomentar el crecimiento del ecosistema Cardano. Vea la [última grabación del ayuntamiento](https://bit.ly/40JXFgO) o explore la [guía de lanzamiento de Fund11](https://projectcatalyst.io/catalyst-fund-11-launch-guide.pdf). El Fondo11 incorpora cambios interesantes basados en los comentarios de la comunidad y en las lecciones aprendidas. Puede encontrar una visión general de alto nivel [aquí](https://docs.google.com/presentation/d/1uPx4-T1x8TbWOzozo-_G7megjeiYsLns7-2ciTWuYGw/edit#slide=id.g29b6a23edd7_0_87296).

Ya están abiertas las presentaciones con nuevas categorías hasta el 30 de noviembre para los borradores públicos. El periodo de finalización de propuestas se amplía hasta el 7 de diciembre. ¿Está listo para presentar sus ideas y colaborar con la comunidad para obtener financiación? Visite [cardano.ideascale.com](//cardano.ideascale.com) hoy mismo y envíe sus borradores. Encuentre [más información aquí](https://projectcatalyst.io/funds/11).

# EDUCACIÓN

El equipo de **Educación** ha seguido recogiendo los comentarios de los participantes en el reciente curso de Haskell con ABC. También continuaron impartiendo la Academia de Matemáticas interna del IOG.
