---
title: Weekly development report as of 2023-07-21
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/68a733f6-d3ee-45c9-8f79-9e4a82ee343e/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on node, networking, consensus, and ledger components.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Daedalus** team [released Daedalus v.5.3.0](https://twitter.com/InputOutputHK/status/1680995951568093184), which brings support for the new Project Catalyst registration process, improves the stability of the exchange rate conversion feature, and more.

The **Lace** team worked on a semi-automatic collateral setup for CIP-30, refactored complex areas of code, increased end-to-end test automation coverage, and started looking closer into CIP-95 ahead of work related to Voltaire. They also worked on the UI flow for multi-delegation and ran load tests on the backend using HD wallets.

### SMART CONTRACTS

This week, the **Plutus** tools team kept working on setting up the runtime monitoring for the Marconi sidechain, adding response fields to the indexers, and investigating the standalone emulator functionality. Finally, they were focused on planning and prioritization for the upcoming months.

The **Marlowe** team added [GET APIs](https://github.com/input-output-hk/marlowe-cardano/pull/658) to contract sources, a [POST contract sources](https://github.com/input-output-hk/marlowe-cardano/pull/657) endpoint for importing contract bundles into the Runtime, and contract [import and export API](https://github.com/input-output-hk/marlowe-cardano/pull/654)s for working with object files. They also filtered contracts by address in [Marlowe Run Lite](https://github.com/input-output-hk/marlowe-run-lite/pull/4) and focused on planning and prioritization for the upcoming months. 

### BASHO (SCALING)

This week, the **Hydra** team focused on exploring the [event sourced persistence](https://github.com/input-output-hk/hydra/pull/963) to improve hydra-node performance. This triggered the need to refactor snapshot emission in the protocol logic and also to update the specification with the new details. The team also revisited their goals and product plans for the next quarter and conducted some [security fixes](https://github.com/input-output-hk/hydra/security/advisories/GHSA-c8qp-cv4h-vcc4) related to multi-signatures.

This week, the **Mithril** team completed the [deployment](https://github.com/input-output-hk/mithril/issues/988) of the mainnet infrastructure for the beta launch. They also kept working on the implementation of a simple stress test tool for [benchmarking](https://github.com/input-output-hk/mithril/issues/991) the aggregator. Additionally, the team started working on the refactoring of the [serialization/deserialization](https://github.com/input-output-hk/mithril/issues/668) of the entities of the cryptographic library.

Finally, they worked on enhancing the [documentation](https://github.com/input-output-hk/mithril/issues/1055), started working on the cleanup of the [legacy store adapters](https://github.com/input-output-hk/mithril/issues/1053) in the aggregator, and published a [blog post recapping what Mithril is](https://iohk.io/en/blog/posts/2023/07/20/mithril-nears-mainnet-release/) in preparation for the mainnet release.

### VOLTAIRE

This week in **Voltaire**, the feedback collected from the [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) workshop is being reviewed and integrated. An update will be published shortly. As [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) moves to its final form, the community will have the opportunity to vote on whether this MVG is an acceptable way to move forward together. This represents a powerful option for the crucial advancement of participatory governance within the Cardano ecosystem.

[Intersect](https://intersectmbo.org) was announced last week, as a key institution for the ecosystem, bringing together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol.

All participants in the Cardano ecosystem are welcome to become Intersect members. Made up of a distributed group of participants, including the foremost experts on Cardano and current ecosystem contributors, Intersect will facilitate healthy discussions and sound decision-making amongst its members, and the community at large, to uncover pain points, while championing successes. To join as a founding member, [click here](http://intersectmbo.org/).  

### CATALYST

This week in **Project Catalyst**, the level 0 and level 1 community review stages have begun. LV0 and LV1 community reviewers will read through the proposals and assign them a score between one and five for each of the three criteria (impact, feasibility, and value for money). This first stage of community review will last until August 1, 2023. Once the first stage of community review is complete, the second stage of review with Level 2 reviewers will begin. The process that LV0 and LV1 community reviewers are expected to follow was discussed during [this week's town hall](https://www.youtube.com/watch?v=cKzsxHPBWF8). If you haven't already, make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the Catalyst technical side, the team:

*   Completed development to align the voting app with process changes, including voting options for fund operations, denominations in ada, and the ordering of challenges
    
*   Completed development to implement the new user analytics solution to better understand opportunities to improve the experience
    
*   Started the review of the backend search service to identify and document outstanding needs to implement in the voting app
    
*   Updated supported wallets in Gitbook to reflect recent updates from Yoroi
    
*   Started work to extract and share registration metrics on a weekly basis
    
*   Worked on deploying the merged snapshot tool to the dev environment for testing
    
*   Uncovered access issues required to start testing the moderation module
    
*   Refactored EventDB and Catalyst data services to improve data structure
    
*   Continued development of test automation for Catalyst data services
    
*   Started creating documentation and guides for using new auditability tools
    
*   Started work to enable users to fetch voting history (proposals only, not choices) given a voting key
    
*   Started internal end-to-end testing of the Voting Center
    
*   Started work to enable create/update/delete access for event data.
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel.

### EDUCATION

This week, the **Education** team planned the curriculum for the Haskell Course that will be delivered next month. They also worked on internal Plutus training content.

![](https://ucarecdn.com/77636d4c-2886-4d2b-b4cb-268eea1c1420/)

### コアテクノロジー

コアテクノロジーチームは、ノード、ネットワーク、コンセンサス、台帳コンポーネントへの取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Daedalus**チームは[Daedalus v.5.3.0をリリース](https://twitter.com/InputOutputHK/status/1680995951568093184)しました。ここでは新しいProject Catalyst登録プロセスのサポートが搭載され、為替レート換算機能の安定性が向上しました。

**Lace**チームは 、CIP-30の半自動担保設定に取り組み、複雑なコード領域をリファクタリングし、エンドツーエンドテストの自動化部分を拡大し、Voltaireに関連する作業に先立ってCIP-95の詳細を調べ始めました。マルチ委任のUIフローにも取り組み、HDウォレットを使用してバックエンドで負荷テストを実行しました。

### スマートコントラクト

**Plutus**ツールチームは、インデクサーに応答フィールドを追加するMarconiサイドチェーンのランタイム監視設定への取り組みと、スタンドアロンのエミュレーター機能についての調査を続けました。今後数か月の計画と優先順位付けにも取り組みました。

**Marlowe**チームは、[GET API](https://github.com/input-output-hk/marlowe-cardano/pull/658)をコントラクトソースに、またRuntimeにコントラクトバンドルをインポートするための[POSTコントラクトソース](https://github.com/input-output-hk/marlowe-cardano/pull/657)エンドポイント、および、オブジェクトファイルを操作するためのコントラクトの[インポートおよびエクスポートAPI](https://github.com/input-output-hk/marlowe-cardano/pull/654)を追加しました。Marlowe Run Liteでアドレス別にコントラクトをフィルタリングし、今後数か月の計画と優先順位付けにも重点を置きました。 

### Basho( スケーリング)

**Hydra**チームは、Hydraノードのパフォーマンスを向上させるために、[イベントソースの永続性](https://github.com/input-output-hk/hydra/pull/963)を調査することに焦点を当てました。これにより、プロトコルロジックでスナップショット放射をリファクタリングし、仕様を更新して新しい詳細情報を反映させる必要が生じました。次の四半期の目標とプロダクトプランを再確認し、マルチシグに関連する一部の[セキュリティ修正](https://github.com/input-output-hk/hydra/security/advisories/GHSA-c8qp-cv4h-vcc4)を実施しました。

**Mithril**チームはベータ版の立ち上げに向けたメインネットインフラの[デプロイ](https://github.com/input-output-hk/mithril/issues/988)を完了しました。アグリゲーターの[ベンチマーク](https://github.com/input-output-hk/mithril/issues/991)用の単純なストレステストツールの実装作業を続けました。暗号理論ライブラリーのエンティティの[シリアル化、逆シリアル化](https://github.com/input-output-hk/mithril/issues/668)をリファクタリングする取り組みを始めました。

[ドキュメント](https://github.com/input-output-hk/mithril/issues/1055)の強化、アグリゲーター内の[レガシーストアアダプター](https://github.com/input-output-hk/mithril/issues/1053)のクリーンアップにも取り組んだ他、メインネットリリースへ向けて[Mithrilとは何かをまとめたブログ記事](https://iohk.io/jp/blog/posts/2023/07/20/mithril-nears-mainnet-release/)を公開しました。

### VOLTAIRE

**Voltaire**では、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)ワークショップで収集したフィードバックのレビューとまとめを行っています。更新情報はまもなく公開されます。[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)が最終形態に移行するにつれて、コミュニティはこのMVGが協力して前進するための方法として受け入れられるものであるかどうかを投票する機会が得られます。これは、Cardanoエコシステムの参加型ガバナンスを進めるうえで強力なオプションを示します。

Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関、[Intersect](https://intersectmbo.org)（インターセクト）が先週発表されました。すなわち、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。

Cardanoエコシステムのすべての参加者は、Intersectメンバーになることを歓迎します。Cardanoの第一人者や現在のエコシステムの貢献者を含む分散化された参加者グループで構成されているIntersectは、メンバーとコミュニティ全体の間で健全な議論と健全な意思決定を促進し、成功を擁護しながら、ペインポイントを明らかにします。設立メンバーとして参加するには、[ここをクリック](http://intersectmbo.org/)してください。  

### CATALYST

Project Catalystでは、コミュニティレビュー段階のレベル0とレベル1が開始されました。コミュニティレビューのレベル0、レベル1は、提案を読み、影響力、実現可能性、金銭的価値の3つの基準ごとに1から5までのスコアを付けます。コミュニティレビューのこの最初の段階は2023年8月1日までです。コミュニティレビューの最初の段階が終わると、レベル2レビュー担当者による第2段階が開始されます。レベル0とレベル1のレビュー担当者が従うべきプロセスは、[今週のタウンホール](https://www.youtube.com/watch?v=cKzsxHPBWF8)で話し合われました。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。

Catalystの技術面は以下の通りです。

*   ファンドの投票オプション、ADAの単位、チャレンジの順序など、プロセスの変更に合わせた投票アプリの調整を完了
    
*   機会をよりよく理解し操作性を向上させるための新ユーザー分析ソリューション実装の開発を完了
    
*   投票アプリに実装する必要のある未解決のニーズを特定して文書化するための、バックエンド検索サービスのレビューを開始
    
*   Yoroiの最新の更新を反映するよう、Gitbookでサポートされているウォレットを更新
    
*   登録メトリクスを週ごとに抽出して共有する作業を開始
    
*   統合スナップショットツールをテスト用に開発環境にデプロイする作業に取り組む
    
*   モデレーションモジュールのテストを開始するために必要なアクセスにおける問題を明確化
    
*   EventDBおよびCatalystデータサービスをリファクタリングしてデータ構造を改善
    
*   Catalystデータサービスのテスト自動化の開発を継続
    
*   新しい監査ツールを使用するためのドキュメントとガイドの作成を開始
    
*   投票鍵を指定して、ユーザーが投票履歴（提案のみ、選択肢ではない）を取得できるようにする作業を開始
    
*   投票センターの社内エンドツーエンドテストを開始
    
*   イベントデータへのアクセスの作成、更新、削除を可能にするための取り組みを開始
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。

### 教育

**教育**チームは、来月提供されるHaskellコースのカリキュラムの企画を行いました。Plutus社内トレーニングのコンテンツにも取り組みました。

![ES - Weekly development report as of 2023-07-21](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/b/3/b3da032d6903c525dda5782a84be49d35523f229.jpeg)ES - Weekly development report as of 2023-07-21**100%**75%50%

# TECNOLOGÍA CENTRAL

Durante esta semana, los equipos de tecnología central han seguido trabajando en los componentes de nodo, red, consenso y ledger.

Consulte, [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Daedalus** [publicó esta semana Daedalus v.5.3.0](https://twitter.com/InputOutputHK/status/1680995951568093184), que ofrece compatibilidad con el nuevo proceso de registro del Proyecto Catalyst, mejora la estabilidad de la función de conversión del tipo de cambio y mucho más.

Por su parte, el equipo de **Lace** trabajó en una configuración semiautomática de garantías para el CIP-30, rediseñó áreas complejas de código, aumentó la cobertura de la automatización de pruebas de extremo a extremo y comenzó a estudiar más de cerca el CIP-95 antes del trabajo relacionado con Voltaire. Trabajaron también en el flujo de la interfaz de usuario para la multidelegación y realizaron pruebas de carga en el backend utilizando wallets HD.

# SMART CONTRACTS

El equipo de herramientas de **Plutus** siguió trabajando esta semana en la configuración de la supervisión en tiempo de ejecución para la sidechains Marconi, añadiendo campos de respuesta a los indexadores e investigando la funcionalidad del emulador autónomo. Por último, se centraron en la planificación y el establecimiento de prioridades para los próximos meses.

El equipo de **Marlowe** añadió [API GET](https://github.com/input-output-hk/marlowe-cardano/pull/658) a las fuentes de contratos, un punto final [POST fuentes de contratos](https://github.com/input-output-hk/marlowe-cardano/pull/657) para importar paquetes de contratos al Runtime, y [API de importación y exportación](https://github.com/input-output-hk/marlowe-cardano/pull/654)s de contratos para trabajar con archivos de objetos. También filtraron contratos por dirección en [Marlowe Run Lite](https://github.com/input-output-hk/marlowe-run-lite/pull/4) y se centraron en la planificación y priorización para los próximos meses.

# BASHO (“ESCALADO”)

El equipo **Hydra** se concentró esta semana en explorar la [persistencia basada en eventos](https://github.com/input-output-hk/hydra/pull/963) para mejorar el rendimiento de los nodos hydra. Esto provocó la necesidad de refactorizar la emisión de instantáneas en la lógica del protocolo y también de actualizar la especificación con los nuevos detalles. El equipo también revisó sus objetivos y planes de producto para el próximo trimestre y llevó a cabo algunas [correcciones de seguridad](https://github.com/input-output-hk/hydra/security/advisories/GHSA-c8qp-cv4h-vcc4) relacionadas con las multifirmas.

El equipo de **Mithril** completó el [despliegue](https://github.com/input-output-hk/mithril/issues/988) de la infraestructura de la red principal para el lanzamiento de la versión beta. También siguieron trabajando en la implementación de una sencilla herramienta de prueba de estrés para [evaluación comparativa](https://github.com/input-output-hk/mithril/issues/991) del agregador. Además, el equipo comenzó a trabajar en la refactorización de la [serialización/deserialización](https://github.com/input-output-hk/mithril/issues/668) de las entidades de la biblioteca criptográfica.

También trabajaron en la mejora de la [documentación](https://github.com/input-output-hk/mithril/issues/1055), empezaron a trabajar en la limpieza de los [adaptadores de tienda heredados](https://github.com/input-output-hk/mithril/issues/1053) en el agregador y publicaron un [artículo en el blog recapitulando qué es Mithril](https://iohk.io/en/blog/posts/2023/07/20/mithril-nears-mainnet-release/) como preparación para el lanzamiento de la red principal.

# VOLTAIRE

A lo largo de esta semana, en **Voltaire** se están revisando e integrando los comentarios recogidos en el taller [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380). En breve se publicará una actualización. A medida que [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) avance hacia su forma final, la comunidad tendrá la oportunidad de votar sobre si este MVG es una forma aceptable de avanzar juntos. Esto representa una opción poderosa para el avance crucial de la gobernanza participativa dentro del ecosistema Cardano.

[Intersect](https://intersectmbo.org/) fue anunciada la semana pasada, como una institución clave para el ecosistema, que reúne a empresas, desarrolladores, individuos y otros participantes del ecosistema para dar forma e impulsar el futuro desarrollo de Cardano. Como tal, será un administrador de los procesos que rigen la hoja de ruta y el desarrollo continuos de la plataforma y el protocolo Cardano.

Invitamos a todos los participantes del ecosistema Cardano a convertirse en miembros de Intersect. Formado por un grupo distribuido de participantes, entre los que se encuentran los principales expertos en Cardano y los actuales colaboradores del ecosistema, Intersect facilitará debates sanos y la toma de decisiones acertadas entre sus miembros, y la comunidad en general, para descubrir los puntos débiles, al tiempo que defiende los éxitos. Para unirse como miembro fundador, [pulse aquí](http://intersectmbo.org/).

# CATALYST

En el **Proyecto Catalyst**, han comenzado las fases de revisión comunitaria de nivel 0 y 1. Los evaluadores comunitarios de nivel 0 y 1 leerán las propuestas y les asignarán una puntuación entre uno y cinco para cada uno de los tres criterios (impacto, viabilidad y relación calidad-precio). La duración de esta primera etapa de revisión comunitaria se extenderá hasta el 1 de agosto de 2023. Tras la finalización de la primera fase de revisión comunitaria, comenzará la segunda fase de revisión con revisores de nivel 2. El proceso que deberán seguir los revisores comunitarios de LV0 y LV1 se discutió durante [el ayuntamiento de esta semana](https://www.youtube.com/watch?v=cKzsxHPBWF8). Si aún no lo ha hecho, asegúrese de registrar su asistencia al [próximo ayuntamiento](http://bit.ly/catalyst-townhall).

En el aspecto técnico de Catalyst, el equipo:

*   Finalizó el desarrollo para alinear la aplicación de votación con los cambios en el proceso, incluidas las opciones de votación para las operaciones de fondos, las denominaciones en ada y el ordenamiento de los desafíos.
    
*   Completó el desarrollo para implementar la nueva solución de análisis de usuarios para comprender mejor las oportunidades de mejorar la experiencia
    
*   Comenzó la revisión del servicio de búsqueda backend para identificar y documentar las necesidades pendientes de implementar en la app de votación
    
*   Actualizadas las wallets soportadas en Gitbook para reflejar las recientes actualizaciones de Yoroi
    
*   Comenzó el trabajo para extraer y compartir las métricas de registro semanalmente
    
*   Trabajó en el despliegue de la herramienta de instantáneas fusionadas en el entorno de desarrollo para realizar pruebas
    
*   Descubiertos los problemas de acceso necesarios para empezar a probar el módulo de moderación
    
*   Refactorizados los servicios de datos EventDB y Catalyst para mejorar la estructura de datos
    
*   Continuó el desarrollo de la automatización de pruebas para los servicios de datos de Catalyst
    
*   Empezó a crear documentación y guías para utilizar las nuevas herramientas de auditabilidad
    
*   Comenzó a trabajar para permitir a los usuarios obtener el historial de votaciones (solo propuestas, no elecciones) dada una clave de votación
    
*   Comenzó la prueba interna de extremo a extremo del Centro de Votación
    
*   Comenzó el trabajo para permitir el acceso de creación/actualización/eliminación para los datos de eventos.
    

Finalmente, para estar al día de todo lo que ocurre en el Proyecto Catalyst, únase al canal de anuncios de [Catalyst Telegram](https://t.me/cardanocatalyst).

# EDUCACIÓN

Esta semana, el equipo de **Educación** planificó el plan de estudios para el curso de Haskell que se impartirá el mes que viene. También trabajaron en el contenido de formación interna de Plutus.
