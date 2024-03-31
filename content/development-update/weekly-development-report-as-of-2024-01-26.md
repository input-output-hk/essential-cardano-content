---
title: Weekly development report as of 2024-01-26
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/9661ba2d-3f1a-4151-965c-01fc856c90e5/
image_text: Weekly development report as of 2024-01-26
---

### CORE TECHNOLOGY

This week, the **networking** team worked on the integration of bootstrap peers with the Cardano node in an [experimental branch](https://github.com/IntersectMBO/ouroboros-network/issues/4615) and continued working on the [tx-submission](https://github.com/IntersectMBO/ouroboros-network/issues/3311) feature. They also collaborated with the CF on [peer sharing improvements](https://github.com/IntersectMBO/ouroboros-network/issues/4778), [compiled](https://github.com/IntersectMBO/ouroboros-network/issues/4727) `ouroboros-network` packages with GHC-9.8, and modified the [local-state-query mini-protocol](https://github.com/IntersectMBO/ouroboros-network/issues/4765) to allow acquiring the immutable tip to get information not subject to rollbacks.

The **consensus** team continued working on Genesis and also on the second iteration of the ledger DB API for UTXO-HD. They incorporated further improvements to the [onboarding documentation](https://github.com/IntersectMBO/ouroboros-consensus/pull/879) and [wrote a document](https://github.com/IntersectMBO/ouroboros-consensus/pull/891) explaining the specifics of the chain orders.

As always, see [this technical development report](https://updates.cardano.intersectmbo.org/archive) for more details from different teams.

### SMART CONTRACTS

This week, the **Marlowe** team continued working on `marlowe-cardano` by adding [the initial state](https://github.com/input-output-hk/marlowe-cardano/pull/800) to create commands and fixing some commands in [various files](https://github.com/input-output-hk/marlowe-cardano/pull/799/files). They also [resolved a balancing issue](https://github.com/input-output-hk/marlowe-ts-sdk/pull/171) when creating an open role-based contract in TS-SDK, [added a linter check](https://github.com/input-output-hk/marlowe-playground/pull/64) for role names and currency symbols in Marlowe Playground, and [published](https://github.com/input-output-hk/marlowe-cardano/pull/802) Marlowe validators as reference scripts on mainnet.  

### SCALING

The **Hydra** team made progress working on the release of [version 0.15.0](https://github.com/input-output-hk/hydra/releases/tag/0.15.0), [addressed issues](https://github.com/input-output-hk/hydra/pull/1246) in smoke tests and website publishing workflows, ensured a more robust development environment, and included more ‘dogfooding’ through the use of Mithril to synchronize nodes in [smoke tests](https://github.com/input-output-hk/hydra/pull/1252). Finally, the team worked on polishing `hydra-chess` v.0.1.0 – an example application running on Hydra, which demonstrates the capabilities of the platform and can serve as a reference for future Hydra developers.

This week, the **Mithril** team released the initial version of the [Mithril client NPM package](https://www.npmjs.com/package/@mithril-dev/mithril-client-wasm), enabling developers to integrate core Mithril features into their web applications running in a browser. They also released a new [2403.1](https://github.com/input-output-hk/mithril/releases/tag/2403.1) distribution, which includes support for Cardano node v.8.7.3, a new chain observer based on the [Pallas library](https://crates.io/crates/pallas), along with bug fixes and performance improvements.

The team kept implementing a new entity type for certifying the Cardano transactions set in Mithril networks and made good progress on retrieving transactions and combining them into a Mithril protocol message. Additionally, they finished implementing a mock aggregator in WASM and using it in the browser tests for the Mithril client, worked on enhancing node communications between Mithril and Cardano, and continued working on threat modeling and risk analysis for P2P networking.

Finally, the scaling teams held the monthly review meeting, including both Mithril and Hydra updates. 

### VOLTAIRE & SANCHONET

Work is ongoing on Conway features implementation. This week, the **consensus** team integrated [DReps and initial delegates injection](https://github.com/IntersectMBO/ouroboros-consensus/pull/894), which will allow the performance and tracing team to run benchmarks for this era.

### CATALYST

This week, **Project Catalyst** celebrates all the efforts of ecosystem participants with the start of the voting period. Fund11 voting started on January 25 at noon UTC and will be open until February 8, 11 AM UTC. Results are expected around February 15. If you are unsure how the voting works or need extra support - please reference the Catalyst [GitBook page here](https://docs.projectcatalyst.io/current-fund-basics/voting).

The Catalyst team will also host a special AMA Twitter (X) space this Friday on January 26 at 4:30 PM UTC that you are warmly invited to. You can register for [this event here](https://twitter.com/i/spaces/1PlKQDdgdXYxE). The topic will be centered around the Fund11 vote launch and more specifically also talking about the concept of Catalyst working groups introduced [in this blog post](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap).

In other news, the community also held its [third town hall of the year](https://www.youtube.com/watch?v=C-dZEEi1CBU). The next meeting is scheduled for the following week and then every Wednesday thereafter, always at 5 PM UTC. You can [register here](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform). 

### EDUCATION

The **education** team are planning their Cardano Days events for the year and working on content for Mastering Cardano. They are also working on lessons 16 and 17 of the [Haskell Bootcamp](https://github.com/input-output-hk/haskell-course).

![](https://ucarecdn.com/539af343-f930-4874-8f4c-31dca0c45438/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**ネットワーキング**チームは、[実験的なブランチ](https://github.com/IntersectMBO/ouroboros-network/issues/4615)でブートストラップピアとCardanoノードの統合に取り組み、[tx-submission](https://github.com/IntersectMBO/ouroboros-network/issues/3311)機能の開発を続けました。[ピア共有の改良](https://github.com/IntersectMBO/ouroboros-network/issues/4778)に関してCFと協力し、ouroboros-networkパッケージをGHC-9.8で[コンパイル](https://github.com/IntersectMBO/ouroboros-network/issues/4727)し、[local-state-queryミニプロトコル](https://github.com/IntersectMBO/ouroboros-network/issues/4765)を変更して、ロールバックの対象とならない情報を取得できるようにしました。

コンセンサスチームは、GenesisとUTXO-HD用の台帳DB APIの2番目のイテレーションに引き続き取り組んでいます。[オンボーディングドキュメント](https://github.com/IntersectMBO/ouroboros-consensus/pull/879)をさらに改善し、チェーンの序列の詳細を説明する[ドキュメントを作成](https://github.com/IntersectMBO/ouroboros-consensus/pull/891)しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://updates.cardano.intersectmbo.org/archive)をご覧ください。

### スマートコントラクト

**Marlowe**チームは引き続きmarlowe-cardanoの作業に取り組みました。コマンドを作成するための[初期ステータス](https://github.com/input-output-hk/marlowe-cardano/pull/800)を追加し、[さまざまなファイル](https://github.com/input-output-hk/marlowe-cardano/pull/799/files)内のコマンドを修正しました。また、TS-SDKでロールベースのオープンコントラクトを作成する際の[残高の問題を解決](https://github.com/input-output-hk/marlowe-ts-sdk/pull/171)し、Marlowe Playgroundでロール名と通貨記号の[リンターチェックを追加](https://github.com/input-output-hk/marlowe-playground/pull/64)し、メインネット上で参照スクリプトとしてMarloweバリデーターを[公開](https://github.com/input-output-hk/marlowe-cardano/pull/802)しました。  

### スケーリング

**Hydra**チームは、[バージョン0.15.0](https://github.com/input-output-hk/hydra/releases/tag/0.15.0)のリリースに向けた作業を進め、スモークテストとウェブサイト公開ワークフローの[問題に対処](https://github.com/input-output-hk/hydra/pull/1246)し、より堅牢な開発環境を確保し、[スモークテスト](https://github.com/input-output-hk/hydra/pull/1252)でノードを同期するためにMithrilを使用して、「ドッグフーディング」をさらに追加しました。Hydra上で実行されるサンプルアプリケーション、hydra-chess v.0.1.0を改良しました。これは、プラットフォームの機能を紹介するもので、将来のHydra開発者の参考になります。

**Mithril**チームは、[MithrilクライアントNPMパッケージ](https://www.npmjs.com/package/%40mithril-dev/mithril-client-wasm)の初期バージョンをリリースしました。これにより、開発者はMithrilのコア機能を、ブラウザーで実行されるウェブアプリケーションに統合できます。新しい[2403.1](https://github.com/input-output-hk/mithril/releases/tag/2403.1)ディストリビューションもリリースしました。このディストリビューションには、[Pallasライブラリー](https://crates.io/crates/pallas)をベースとした新しいチェーンオブザーバーであるCardanoノードv.8.7.3のサポート、バグ修正とパフォーマンスの改良が含まれています。

Mithrilネットワークで設定されたCardanoトランザクションを認証するための新しいエンティティタイプの実装を続け、トランザクションの取得とMithrilプロトコルメッセージへの結合を大きく進展させました。WASMの模擬アグリゲーターの実装を完了してMithrilクライアントのブラウザーテストに使用し、MithrilとCardano間のノード通信の強化に取り組み、P2Pネットワークの脅威モデリングとリスク分析への取り組みを続けました。

スケーリングチームはMithrilとHydraの両方の更新を含む月例レビュー会議を開催しました。 

### VOLTAIRE & SANCHONET

Conway機能の実装作業は進行中です。**コンセンサス**チームは[DRepと初期デリゲートインジェクション](https://github.com/IntersectMBO/ouroboros-consensus/pull/894)を統合しました。これにより、パフォーマンス＆トレースチームはConway期のベンチマークを実行できます。

### CATALYST

**Project Catalyst**は、投票期間の開始とともに、エコシステム参加者のすべての努力を祝います。Fund11の投票は、日本時間1月25午後9時に開始され、2月8日午後8時に締め切られます。結果は2月15日頃を予定しています。投票がどのように機能するかわからない場合やサポートが必要な場合は、こちらのCatalyst [Gitbookページ](https://docs.projectcatalyst.io/current-fund-basics/voting)を参照してください 。

Catalystチームは、日本時間今週土曜日、1月27午前1:30に、AMA Twitter（X）スペースをホストします。このイベントへの登録は、[ここ](https://twitter.com/i/spaces/1PlKQDdgdXYxE)から行えます。トピックは、Fund11投票開始を中心に、特に[ブログ記事](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap)で紹介したCatalystワーキンググループの概念についても説明します。

コミュニティは、[今年3回目のタウンホール](https://www.youtube.com/watch?v=C-dZEEi1CBU)を開催しました。次回のミーティングは来週予定されており、以降毎週水曜5時UTC（日本時間木曜午前2時）に開催されます。登録は[こちら](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform)から行えます。 

### 教育

**教育**チームは、今年のCardano Daysイベントを計画し、Mastering Cardanoのコンテンツに取り組んでいます。[Haskell Bootcamp](https://github.com/input-output-hk/haskell-course)のレッスン16、17にも取り組んでいます。

# TECNOLOGÍA CENTRAL

Esta semana, el equipo de **networking** trabajó en la integración de pares de arranque con el nodo Cardano en una [rama experimental](https://github.com/IntersectMBO/ouroboros-network/issues/4615) y continuó trabajando en la característica [tx-submission](https://github.com/IntersectMBO/ouroboros-network/issues/3311). También colaboraron con el FC en [mejoras para compartir pares](https://github.com/IntersectMBO/ouroboros-network/issues/4778), [compilaron](https://github.com/IntersectMBO/ouroboros-network/issues/4727) paquetes `ouroboros-network` con GHC-9.8, y modificaron el [mini-protocolo local-state-query](https://github.com/IntersectMBO/ouroboros-network/issues/4765) para permitir adquirir la punta inmutable para obtener información no sujeta a rollbacks.

El equipo **consensus** continuó trabajando en Genesis y también en la segunda iteración de la API ledger DB para UTXO-HD. Incorporaron nuevas mejoras a la [documentación de onboarding](https://github.com/IntersectMBO/ouroboros-consensus/pull/879) y [escribieron un documento](https://github.com/IntersectMBO/ouroboros-consensus/pull/891) explicando las particularidades de los pedidos en cadena.

Como siempre, consulta [este informe de desarrollo técnico](https://updates.cardano.intersectmbo.org/archive) para obtener más detalles de los distintos equipos.

#CONTRATOS INTELIGENTES

El equipo **Marlowe** continuó trabajando en `marlowe-cardano` añadiendo [el estado inicial](https://github.com/input-output-hk/marlowe-cardano/pull/800) para crear órdenes y arreglando algunas órdenes en [varios archivos](https://github.com/input-output-hk/marlowe-cardano/pull/799/files). También [resolvieron un problema de equilibrio](https://github.com/input-output-hk/marlowe-ts-sdk/pull/171) al crear un contrato abierto basado en roles en TS-SDK, [añadieron una comprobación de linter](https://github.com/input-output-hk/marlowe-playground/pull/64) para nombres de roles y símbolos de moneda en Marlowe Playground, y [publicaron](https://github.com/input-output-hk/marlowe-cardano/pull/802) validadores de Marlowe como scripts de referencia en mainnet.

# ESCALADO

El equipo de **Hydra** avanzó en el lanzamiento de la [versión 0.15.0](https://github.com/input-output-hk/hydra/releases/tag/0.15.0), [solucionó problemas](https://github.com/input-output-hk/hydra/pull/1246) en las pruebas de humo y los flujos de trabajo de publicación de sitios web, garantizó un entorno de desarrollo más robusto e incluyó más “comida para perros” mediante el uso de Mithril para sincronizar nodos en las [pruebas de humo](https://github.com/input-output-hk/hydra/pull/1252). Por último, el equipo trabajó en pulir `hydra-chess` v.0.1.0 - una aplicación de ejemplo que se ejecuta en Hydra, que demuestra las capacidades de la plataforma y puede servir como referencia para futuros desarrolladores de Hydra.

El equipo **Mithril** ha publicado la versión inicial del paquete [Mithril client NPM package](https://www.npmjs.com/package/@mithril-dev/mithril-client-wasm), que permite a los desarrolladores integrar las características principales de Mithril en sus aplicaciones web ejecutadas en un navegador. También publicaron una nueva distribución [2403.1](https://github.com/input-output-hk/mithril/releases/tag/2403.1), que incluye soporte para el nodo Cardano v.8.7.3, un nuevo observador de cadenas basado en la [biblioteca Pallas](https://crates.io/crates/pallas), junto con correcciones de errores y mejoras de rendimiento.

El equipo siguió implementando un nuevo tipo de entidad para certificar el conjunto de transacciones de Cardano en redes Mithril y avanzó bastante en la recuperación de transacciones y su combinación en un mensaje de protocolo Mithril. Además, terminaron de implementar un agregador simulado en WASM y de utilizarlo en las pruebas del navegador para el cliente Mithril, trabajaron en la mejora de las comunicaciones de nodos entre Mithril y Cardano, y siguieron trabajando en el modelado de amenazas y el análisis de riesgos para las redes P2P.

Por último, los equipos de escalado celebraron la reunión mensual de revisión, que incluyó actualizaciones tanto de Mithril como de Hydra.

# VOLTAIRE Y SANCHONET

Se está trabajando en la implementación de las características de Conway. Esta semana, el equipo de **consensus** integró [DReps e inyección inicial de delegados](https://github.com/IntersectMBO/ouroboros-consensus/pull/894), lo que permitirá al equipo de rendimiento y rastreo ejecutar pruebas comparativas para esta era.

# CATALYST

Esta semana, **Project Catalyst** celebra todos los esfuerzos de los participantes del ecosistema con el inicio del periodo de votación. La votación del Fondo11 comenzó el 25 de enero al mediodía UTC y estará abierta hasta el 8 de febrero a las 11 AM UTC. Los resultados se esperan alrededor del 15 de febrero. Si no está seguro de cómo funciona la votación o necesita ayuda adicional, consulte la página de Catalyst [GitBook aquí](https://docs.projectcatalyst.io/current-fund-basics/voting).

El equipo de Catalyst también organizará un espacio especial AMA Twitter (X) este viernes 26 de enero a las 16:30 UTC al que estás cordialmente invitado. Puedes inscribirte en [este evento aquí](https://twitter.com/i/spaces/1PlKQDdgdXYxE). El tema girará en torno al lanzamiento de la votación de Fund11 y, más concretamente, también se hablará del concepto de grupos de trabajo Catalyst introducido [en esta entrada de blog](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap).

En otro orden de cosas, la comunidad también celebró su [tercer ayuntamiento del año](https://www.youtube.com/watch?v=C-dZEEi1CBU). La próxima reunión está prevista para la semana que viene y, a partir de entonces, todos los miércoles, siempre a las 17.00 UTC. Puedes [inscribirte aquí](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform).

# EDUCACIÓN

El equipo de **educación** está planificando sus eventos Cardano Days para el año y trabajando en contenidos para Mastering Cardano. También están trabajando en las lecciones 16 y 17 del [Haskell Bootcamp](https://github.com/input-output-hk/haskell-course).
