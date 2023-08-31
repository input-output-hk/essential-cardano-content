---
title: Weekly development report as of 2023-08-04
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/2573564c-6160-41fb-995f-426ac4471b95/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **networking** team activated several default traces for node-to-client and node-to-node protocols, which are set to be released in node v.8.2.0. Additionally, they ensured that the cardano-client-0.1.0.x library (used by db-sync) does not use the experimental node-to-client protocol, while [cardano-client-0.2.0.0](https://github.com/input-output-hk/ouroboros-network/pull/4612) remains unaffected. They also merged the [dynamic block production](https://github.com/input-output-hk/ouroboros-network/issues/3159) feature into ouroboros-consensus, which enables hot-swap P2P nodes. These are important for the deployment of block-producing nodes.

Finally, the team continued reviewing the implementation of [big ledger peers](https://github.com/input-output-hk/ouroboros-network/pull/4462) for eclipse evasion.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team dedicated efforts to adding Trezor support and implementing the multi-delegation feature. Additionally, they conducted end-to-end testing for Edge support, refactored heavily used utility functions, and focused on the setup of collateral. 

Finally, the team prepared for the implementation of CIP-95. 

### SMART CONTRACTS

This week, the **Plutus** core team worked on adding decentralized governance support, as defined in CIP-1694, to Plutus v3.

The **Marlowe** team fixed the [slot limit](https://github.com/input-output-hk/marlowe-cardano/pull/668) in the database, [optimized](https://github.com/input-output-hk/marlowe-cardano/pull/663) the chain seek protocol, and added a [contract source ID option](https://github.com/input-output-hk/marlowe-cardano/pull/660) to POST /contracts. 

Finally, they updated the Marlowe logo in Marlowe Playground and Marlowe Explorer and fixed [some bugs](https://github.com/input-output-hk/marlowe-cardano/pull/664) in Marlowe Runtime.

### BASHO (SCALING)

This week, the **Hydra** team conducted their July monthly review meeting, which is an ongoing effort to ensure transparent communication and project evaluation. They successfully migrated the core logic of the node to an event-sourced architecture, allowing for incremental writes of events to persistence. This migration significantly improved the project's performance and maintainability. See [this report](https://hydra.family/head-protocol/monthly/2023-07) for more details.

The team also implemented a new feature that enables the reading of protocol parameters through the API and fixed the CI workflows to support pull requests from forks of external contributors. These improvements streamline the development process encouraging community involvement in the project.

This week, the **Mithril** team completed the [Mithril protocol’s mainnet beta launch](https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch): the `release-mainnet` network is now consistently producing new certificates and snapshots! The team is monitoring the network and is preparing a new distribution that will be released shortly. They also kept working on the implementation of the [stress test tool](https://github.com/input-output-hk/mithril/issues/991) for benchmarking the aggregator, and implementing the refactoring of the [serialization/deserialization](https://github.com/input-output-hk/mithril/issues/668) of the entities of the cryptographic library. Additionally, they started creating a [runbook](https://github.com/input-output-hk/mithril/issues/1085) for the production infrastructure.

Finally, they worked on [upgrading](https://github.com/input-output-hk/mithril/issues/1090) the Cardano node to v.8.1.2, [fixing](https://github.com/input-output-hk/mithril/issues/1114) the `release-preprod` network that stopped producing certificates, and [troubleshooting](https://github.com/input-output-hk/mithril/issues/1125) the SPO’s signer node that received unexpected errors.

### VOLTAIRE

This week in **Voltaire**, the feedback collected from the [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) workshop is being reviewed and considered. An update will be published shortly. As [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) moves to its final form, the community will have the opportunity to vote on whether this MVG is an acceptable way to move forward together. This represents a powerful option for the crucial advancement of participatory governance within the Cardano ecosystem.

[Intersect](https://intersectmbo.org) was announced earlier this month, as a key institution for the ecosystem that brings together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such, it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol.

All participants in the Cardano ecosystem are welcome to become Intersect members. Made up of a distributed group of participants, including the foremost experts on Cardano and current ecosystem contributors, Intersect will facilitate healthy discussions and sound decision-making amongst its members, and the community at large, to uncover pain points, while championing successes. To join as a founding member, [click here](http://intersectmbo.org/).       

### CATALYST

**The Project Catalyst** level 0 and level 1 community review stages came to a close on August 3. The level 2 community moderation stage will begin next Thursday, August 10. In this week’s town hall, the LATAM Catalyst community gave a presentation about the upcoming Ideafest, Lidonation talked about Catalyst Explorer, and we got to hear from another successfully closed-out project, Grow East Asia. You can rewatch the segment from the main town hall [here](https://www.youtube.com/watch?v=WMYGN1aOys8). Steven Johnson held an AMA for the Catalyst Voices proposal during the after-town hall. 

On the technical side of Catalyst, the team:

*   Completed another QA dry run for the voting app
    
*   Continued refining process alignment changes and successfully tested the API rate limiter
    
*   Discussed how to improve error handling in the application
    
*   Prepared initial Fund10 data for the next internal dry run
    
*   Deployed the new snapshot module to the dev environment and are working on fixes to the continuous snapshot service and rewards eligibility checker before releasing it to the community
    
*   Refactored the script being used to extract registration metrics from the snapshot service to include timestamps for easier reporting on changes over time
    
*   Worked on integrating snapshot data into the continuous deployment framework
    
*   Worked on bug fixes for the new IdeaScale importer
    
*   Started testing for the new community reviews calculator and new fields in vit-ss
    
*   Aligned on the approach for handling stageID changes in each fund within the auto-deployment framework
    
*   Discussed pointing the app to the official Project Catalyst website for full proposal details rather than IdeaScale
    
*   Continued manual testing of the moderation module
    
*   Started load testing the voting node, including a run that sustained 800 tps over 1 million votes cast on the local machine
    
*   Continued working on community documentation for new auditing tools.
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, the **Education** team is preparing to deliver the Haskell Course in Kenya next week, training Cardano community members in conjunction with the African Blockchain Center.

![](https://ucarecdn.com/7c527d7e-0ada-4918-abce-6626d944cf04/)

### コアテクノロジー

**ネットワーキング**チームは、ノードクライアント間プロトコルおよびノード間プロトコルの一部のデフォルトトレースをアクティブにしました。これらは、ノードv.8.2.0でリリースされます。cardano-client-0.1.0.xライブラリー（db-syncで使用）が実験的なノードクライアント間プロトコルを使用しないようにしましたが、[cardano-client-0.2.0.0](https://github.com/input-output-hk/ouroboros-network/pull/4612)は影響を受けません。[動的ブロック生成機能](https://github.com/input-output-hk/ouroboros-network/issues/3159)をouroboros-consensusにマージして、ホットスワップP2Pノードを有効にしました。これは、ブロック生成ノードのデプロイに重要です。

エクリプス回避のための[ビッグレジャーピア](https://github.com/input-output-hk/ouroboros-network/pull/4462)の実装のレビューを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは、Trezorサポートの追加とマルチ委任機能の実装に専念しました。Edgeサポートのエンドツーエンドテストを実施し、多用されるユーティリティ機能をリファクタリングし、担保の設定に重点を置きました。 

CIP-95の実装準備を行いました。 

### スマートコントラクト

**Plutus** Coreチームは、CIP-1694で定義されている分散型ガバナンスのサポートをPlutus V3に追加する作業に取り組みました。

**Marlowe**チームは、データベースの[スロット制限](https://github.com/input-output-hk/marlowe-cardano/pull/668)を修正し、チェーンシークプロトコルを[最適化](https://github.com/input-output-hk/marlowe-cardano/pull/663)し、POST/contractsに[コントラクトソースIDオプション](https://github.com/input-output-hk/marlowe-cardano/pull/660)を追加しました。 

Marlowe PlaygroundとMarloweエクスプローラーでMarloweロゴを更新し、Marlowe Runtimeの[バグ](https://github.com/input-output-hk/marlowe-cardano/pull/664)を修正しました。

### Basho( スケーリング)

**Hydra**チームは、7月の月例レビュー会議を開催しました。これは、コミュニケーションの透明性を高めプロジェクトを正しく評価するための継続的な取り組みです。ノードのコアロジックをイベントソースアーキテクチャーに移行し、イベントの永続化への増分書き込みを可能にしました。この移行により、プロジェクトのパフォーマンスと保守性が大幅に向上しました。詳細は、[このレポート](https://hydra.family/head-protocol/monthly/2023-07)をご覧ください。

APIからプロトコルパラメーターの読み取りを可能にする新機能を実装し、外部コントリビューターのフォークからのプルリクエストをサポートするようCIワークフローを修正しました。こうした改良により、コミュニティのプロジェクトへの関与を奨励する開発プロセスが合理化されます。

**Mithril**チームは、[Mithrilプロトコルのメインネットベータ版を立ち上げ](https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch)ました。release-mainnetネットワークは現在継続的に新しい証明書とスナップショットを生成しています。チームはネットワークを監視するとともに、まもなくリリース予定の新ディストリビューションの準備を進めています。アグリゲーターのベンチマーク用[ストレステストツール](https://github.com/input-output-hk/mithril/issues/991)の実装、暗号理論ライブラリーのエンティティの[シリアル化、逆シリアル化](https://github.com/input-output-hk/mithril/issues/668)のリファクタリングの実装にも取り組みました。プロダクションインフラ用[ランブック](https://github.com/input-output-hk/mithril/issues/1085)の作成を始めました。

Cardanoノードのv.8.1.2への[アップグレード](https://github.com/input-output-hk/mithril/issues/1090)、証明書の生成を停止したrelease-preprodネットワークの[修正](https://github.com/input-output-hk/mithril/issues/1114)、想定外のエラーを受信したSPOサイナーノードの[トラブルシューティング](https://github.com/input-output-hk/mithril/issues/1125)に取り組みました。

### VOLTAIRE

**Voltaire**では、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)ワークショップで収集したフィードバックのレビューと検討を行っています。更新情報はまもなく公開されます。[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)が最終形態に移行するにつれて、コミュニティはこのMVGが協力して前進するための方法として受け入れられるものであるかどうかを投票する機会が得られます。これは、Cardanoエコシステムの参加型ガバナンスを進めるうえで強力なオプションを示します。

Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関、[Intersect](https://intersectmbo.org)（インターセクト）が今月上旬に発表されました。これは、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。

Cardanoエコシステムのすべての参加者は、Intersectメンバーになることを歓迎します。Cardanoの第一人者や現在のエコシステムの貢献者を含む分散化された参加者グループで構成されているIntersectは、メンバーとコミュニティ全体の間で健全な議論と健全な意思決定を促進し、成功を擁護しながら、ペインポイントを明らかにします。設立メンバーとして参加するには、[ここをクリック](http://intersectmbo.org/)してください。      

### CATALYST

Project Catalystでは、コミュニティレビューのレベル0とレベル1が8月3日に終了しました。レベル2のコミュニティ調整段階は8月10日木曜日に開始されます。今週のタウンホールでは、LATAM Catalystコミュニティが来るIdeafestについて発表し、LidonationがCatalystエクスプローラーについて話したほか、成功を収めたプロジェクト、Grow East Asiaも紹介されました。ここで、メインタウンホールからセグメントを再視聴できます。タウンホール後、Steven JohnsonがCatalyst Voices提案についてのAMAを開催しました。 

Catalystの技術的側面は以下の通りです。

*   投票アプリのQAドライランをもう一度実施
    
*   プロセス変更の調整を続け、APIレートリミッターのテストに成功
    
*   アプリケーション内のエラー処理の改善方法について話し合い
    
*   次回の内部ドライラン用に初期Fund10データを準備
    
*   新しいスナップショットモジュールを開発環境にデプロイし、コミュニティへのリリース前に継続的スナップショットサービスと報酬資格チェッカーの修正に取り組む
    
*   登録メトリクスをスナップショットサービスから抽出するために使用されるスクリプトを、タイムスタンプを含めて時間の経過に伴う変化のレポートを容易に作成できるようリファクタリング
    
*   継続的デプロイフレームワークへのスナップショットデータの統合に取り組む
    
*   新しいIdeaScaleインポーターのバグを修正
    
*   vit-ssの新しいコミュニティレビュー計算機とフィールドのテストを開始
    
*   自動デプロイフレームワーク内で各ファンドのstageID変更を処理するアプローチを調整
    
*   IdeaScaleではなく、Project Catalystの公式サイトにアプリを誘導することについて話し合い
    
*   モデレートモジュールの手動テストを継続
    
*   ローカルマシンで100万票以上の投票を800tpsで維持するランを含む、投票ノードの負荷テストを開始
    
*   新しい監査ツールのコミュニティドキュメントの作成を継続
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、来週ケニアで提供されるHaskellコースの準備をしており、African Blockchain Centerと協力してCardanoコミュニティメンバーをトレーニングしています。

[![ES - WDR 2023-08-04](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/8/1/81385acc959e225a47840d7d9be0a46c62370fe5_2_1000x561.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/8/1/81385acc959e225a47840d7d9be0a46c62370fe5.jpeg)

# TECNOLOGÍA CENTRAL

Esta semana, el equipo de redes activó varios rastreos predeterminadas para los protocolos nodo-a-cliente y nodo-a-nodo, que se publicarán en la versión 8.2.0 del nodo. Además, se aseguraron que la biblioteca cardano-client-0.1.0.x (utilizada por el componente db-sync) no use el protocolo experimental nodo-a-cliente, mientras que cardano-client-0.2.0.0 no está afectado. Se ha fusionado la función de producción dinámica de bloques en ouroboros-consensus, la cual permite el intercambio en caliente de nodos P2P. Esto es importante para el despliegue de nodos productores de bloques.

Por último, se continuó revisando la implementación de pares de [big ledger](https://github.com/input-output-hk/ouroboros-network/pull/4462) para la evasión de eclipse.

Consulte este [informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** continuó con la implementación de los análisis de Posthog y dedicó esfuerzos a añadir compatibilidad con Trezor e implementar la función de delegación múltiple. También realizaron pruebas de extremo a extremo para la compatibilidad con Edge, refactorizaron funciones de utilidad muy utilizadas, y se centraron en la configuración de garantías.

Por último, el equipo se preparó para la implementación del CIP-95.

# CONTRATOS INTELIGENTES

Durante esta semana, el equipo principal de **Plutus** ha trabajado para añadir soporte de gobernanza descentralizada a Plutus v3, tal y como se define en el CIP-1694.

El equipo de **Marlowe** arregló el [límite de intervalos](https://github.com/input-output-hk/marlowe-cardano/pull/668) en la base de datos, [optimizó](https://github.com/input-output-hk/marlowe-cardano/pull/663) el protocolo de búsqueda de cadena, y añadió una [opción de ID de origen del contrato](https://github.com/input-output-hk/marlowe-cardano/pull/660) a POST /contratos.

Por último, actualizaron el logotipo de Marlowe en Marlowe Playground y Marlowe Explorer y arreglaron [algunos errores](https://github.com/input-output-hk/marlowe-cardano/pull/664) en Marlowe Runtime.

# BASHO (AMPLIACIÓN)

Esta semana, el equipo de **Hydra** celebró su reunión de revisión mensual de julio, que es un esfuerzo continuo para garantizar una comunicación transparente y la evaluación del proyecto. Lograron migrar la lógica central del nodo a una arquitectura basada en eventos, lo que permite la escritura incremental de eventos a la persistencia. Esto mejoró significativamente el rendimiento y la mantenibilidad del proyecto. Para más detalles, consulte [este informe](https://hydra.family/head-protocol/monthly/2023-07).

El equipo también implementó una nueva función que permite la lectura de parámetros de protocolo a través de la API y arregló los flujos de trabajo de CI para que admitan pull requests de bifurcaciones de colaboradores externos. Estas mejoras agilizan el proceso de desarrollo fomentando la participación de la comunidad en el proyecto.

Por su parte, el equipo de **Mithril** ha completado el [lanzamiento de la versión beta de la red principal del protocolo Mithril](https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch): ¡la red `release-mainnet` ya produce constantemente nuevos certificados e instantáneas! El equipo está supervisando la red y está preparando una nueva distribución que se lanzará en breve. También siguieron trabajando en la implementación de la [herramienta de prueba de estrés](https://github.com/input-output-hk/mithril/issues/991) para la evaluación comparativa del agregador, e implementando la refactorización de la [serialización/deserialización](https://github.com/input-output-hk/mithril/issues/668) de las entidades de la biblioteca criptográfica. Además, empezaron a crear un [libro de ejecución](https://github.com/input-output-hk/mithril/issues/1085) para la infraestructura de producción.

Por último, trabajaron en [actualizar](https://github.com/input-output-hk/mithril/issues/1090) el nodo Cardano a v.8.1.2, [arreglar](https://github.com/input-output-hk/mithril/issues/1114) la red `release-preprod` que dejó de producir certificados, y [solucionar problemas](https://github.com/input-output-hk/mithril/issues/1125) del nodo firmante del SPO que recibía errores inesperados.

# VOLTAIRE

En **Voltaire** se están revisando y considerando los comentarios recogidos en el taller sobre el [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380). En breve se publicará una actualización. A medida que [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) avance hacia su forma final, la comunidad tendrá la oportunidad de votar sobre si este MVG es una forma aceptable de avanzar juntos. Esto representa una opción poderosa para el avance crucial de la gobernanza participativa dentro del ecosistema Cardano.

[Intersect](https://intersectmbo.org/) se anunció a principios de este mes, como una institución clave para el ecosistema que reúne a empresas, desarrolladores, individuos y otros participantes del ecosistema para dar forma e impulsar el futuro desarrollo de Cardano. Como tal, será un administrador de los procesos que rigen la hoja de ruta y el desarrollo continuos de la plataforma y el protocolo Cardano.

Invitamos a todos los participantes del ecosistema Cardano a convertirse en miembros de Intersect. Formado por un grupo distribuido de participantes, entre los que se encuentran los principales expertos en Cardano y los actuales colaboradores del ecosistema, Intersect facilitará debates provechosos y la toma de decisiones acertadas entre sus miembros, y la comunidad en general, para descubrir los puntos débiles, al tiempo que promociona los éxitos. Para unirse como miembro fundador, [haga clic aquí](http://intersectmbo.org/).

# CATALYST

**Las etapas de revisión comunitaria de nivel 0 y nivel 1 del Proyecto Catalyst** llegaron a su fin el 3 de agosto. La etapa de moderación comunitaria de nivel 2 comenzará el próximo jueves 10 de agosto. En el town hall de esta semana, la comunidad Catalyst de LATAM hizo una presentación sobre el próximo Ideafest, Lidonation habló sobre Catalyst Explorer, y pudimos escuchar a otro proyecto cerrado con éxito, Grow East Asia. Puede volver a ver el segmento del town hall [aquí](https://www.youtube.com/watch?v=WMYGN1aOys8). Steven Johnson celebró un AMA para la propuesta Catalyst Voices durante el after-town hall.

En el aspecto técnico de Catalyst, el equipo:

*   Completó otro simulacro de control de calidad para la aplicación de votación
    
*   Siguió perfeccionando los cambios en la alineación de procesos y probó con éxito el limitador de índice de la API
    
*   Debatió cómo mejorar la gestión de errores en la aplicación
    
*   Preparó los datos iniciales del Fondo 10 para el siguiente simulacro interno
    
*   Desplegado el nuevo módulo de instantáneas en el entorno de desarrollo, y están trabajando en correcciones del servicio continuo de instantáneas y del comprobador de elegibilidad de recompensas antes de lanzarlo a la comunidad.
    
*   Se han refactorizado las secuencias de comandos \[scripts\], que se utilizan para extraer las métricas de registro del servicio de instantáneas a fin de incluir marcas de tiempo para facilitar la elaboración de informes sobre los cambios a lo largo del tiempo.
    
*   Trabajó en la integración de los datos de las instantáneas en el marco de despliegue continuo
    
*   Trabajó en la corrección de errores para el nuevo importador de IdeaScale
    
*   Comenzaron las pruebas para la nueva calculadora de revisiones de la comunidad y los nuevos campos en vit-ss
    
*   Alineados sobre el enfoque para manejar los cambios de stageID en cada fondo dentro del marco de despliegue automático
    
*   Se debatió sobre dirigir la aplicación al sitio web oficial del Proyecto Catalyst para obtener todos los detalles de la propuesta en lugar de IdeaScale
    
*   Continuación de las pruebas manuales del módulo de moderación
    
*   Comenzó la prueba de carga del nodo de votación, incluyendo una ejecución que mantuvo 800 tps sobre 1 millón de votos emitidos en la máquina local
    
*   Continuó trabajando en la documentación comunitaria para las nuevas herramientas de auditoría.
    

Finalmente, para estar al día de todo lo que ocurre en el Proyecto Catalyst, únase al canal de anuncios de [Catalyst Telegram](https://t.me/cardanocatalyst).

# EDUCACIÓN

Durante esta semana, el equipo de **Educación** se está preparando para impartir el Curso de Haskell en Kenia la próxima semana, formando a los miembros de la comunidad de Cardano junto con el African Blockchain Center.
