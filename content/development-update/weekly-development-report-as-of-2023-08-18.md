---
title: Weekly development report as of 2023-08-18
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/060beb38-ac11-4955-ad7f-823e0b450e32/
image_text: Weekly development report as of 2023-08-18
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team finalized benchmarking node v.8.2.0. They also optimized the new tracing system and are currently working on documenting the tracing configuration. 

Finally, they improved the Nomad backend to take advantage of the added flexibility of the new hardware cluster.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team worked on polishing and bug fixing of the multi-delegation beta version. They also continued working on the serialization library in cardano-js-sdk to replace the CML library, collateral setting, and transitioned to the new, faster package management. 

Finally, they fixed some issues to allow the ledger and DApps to work with Lace and made UI updates for switching networks in the wallet.

### SMART CONTRACTS

The **Plutus** team worked on rewriting the Marconi indexers using a new simplified API, writing integration tests for marconi-sidechain, and updating the cardano-api version in plutus-apps.

This week, the **Marlowe** team added a [tool](https://github.com/input-output-hk/marlowe-ts-sdk/pull/11) to auto generate documentation from the TS code on GitHub, provided some ad hoc support to CNC for running raffle using Marlowe, ran [safety checks](https://github.com/input-output-hk/marlowe-cardano/pull/686) report failures for timed-out transactions, and [fixed execution cost analysis](https://github.com/input-output-hk/marlowe-cardano/pull/685) of Merkleized contracts. The team also worked on adding the initial version of [workspaces](https://github.com/input-output-hk/marlowe-ts-sdk/pull/10), documented a URL encoding [requirement](https://github.com/input-output-hk/marlowe-cardano/pull/684) for contract IDs, and [ran the](https://github.com/input-output-hk/marlowe-cardano/pull/682) `Future` [contract](https://github.com/input-output-hk/marlowe-cardano/pull/682) on-chain.

Finally, they worked on [modifying the Docker Compose](https://github.com/input-output-hk/marlowe-starter-kit/pull/26) workflow. 

### BASHO (SCALING)

This week, the **Hydra** team updated the Hydra node to support Cardano node v.8.1.2, ensuring compatibility with the latest mainnet release. The team also participated in discussions about a ‘cardanonical’ JSON schema and added it as a submodule to the project, which contributes to improved data modeling and interoperability.

In terms of community engagement, the team onboarded a new contributor, participated in a RareEvo Twitter space, and continued preparations for the Hydra master class.

This week, the **Mithril** team created an [explorer](https://mithril.network/explorer/registrations?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator&epoch=430) page with the registered signers to give recognition to the SPOs already running on mainnet. The team also focused on error refactoring to be standardized with the Automatic Deployment Rule (ADR).

### VOLTAIRE

This week in **Voltaire**, participatory governance advances with the launch of the first iteration of SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions. It is a new playground for the Cardano community to experience CIP-1694 in a controlled testnet environment. New governance roles, such as future delegate representatives (DReps), will be available to the community to experience and weigh in on the advancement of participatory governance. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org) is a key institution for the ecosystem that brings together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such, it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol. [Join Intersect today](http://intersectmbo.org/) as a founding member to receive an exclusive newsletter with a first look at the latest highlights. Additionally, a CIP-1694 Digest launched on the news tab of Intersect to provide vital technical information across all things Voltaire.           

### CATALYST

This week in **Project Catalyst,** the level 2 community review stage came to a close. There was an impressive amount of participation in the community review stage with a total of 841 participating reviewers and 200 eligible moderators. It was a pleasure to have Steven Johnson and Mike McNulty in the after town hall this week to discuss the ‘Catalyst Ecosystem Accelerator’ proposal alongside the community. During the town hall, the team showed off a few videos of the recently closed projects, and you can find the recording [here](https://www.youtube.com/watch?v=oKjt63Kmehk). If you haven’t already, make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the Catalyst technical side, the team:

*   Finalized testing of the mobile app, incorporating adjustments for fund operations, community reviews, and voting user experience. 
    
*   Addressed issues with the snapshot importer on testnet.
    
*   Fixed the Catalyst toolbox to accurately manage reward addresses.
    
*   Deployed the Project Catalyst snapshot module for community use.
    
*   Updated the supported wallets’ GitBook with new versions to improve usability.
    
*   Progressed in integrating snapshot data with an auto-deployment and orchestration framework for ongoing voting events.
    
*   Incorporated metrics to be logged during the execution of the IdeaScale importer.
    
*   Updated the IdeaScale importer to capture the necessary fields required by new features in the voting app.
    
*   Worked on the implementation of Fund10 changes to `vitss` in `cat-data-service`.
    
*   Introduced the continuous testnet and shared the announcement with the community, including the GVC.
    
*   Completed another load test on the voting node, resolving an issue with the tallying process.
    
*   Conducted an investigation into fragment specifications to explore the potential creation of a reference ‘vote signer,’ aimed at enhancing testing capabilities.
    
*   Implemented data input validations to ensure compatibility with the event database.
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, some members of the **Education** team are on the ground in Nairobi, Kenya, teaching Haskell and native smart contracts in partnership  with the African Blockchain Center. The team is also preparing for the Cardano Days event at the [ITESO University](https://www.iteso.mx/) in Guadalajara, Mexico next week.

![](https://ucarecdn.com/1a2979f9-5450-41fb-984e-5309a30fa68f/)

### コアテクノロジー

**パフォーマンス＆トレース**チームはノードv.8.2.0のベンチマークを完了しました。新しいトレースシステムを最適化し、現在トレース設定の文書化に取り組んでいます。 

新しいハードウェアクラスターの柔軟性を活用できるよう、Nomadバックエンドを改良しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームはマルチ委任ベータ版の洗練とバグ修正に取り組みました。cardano-js-sdkのシリアル化ライブラリーをCMLライブラリーに置き換える作業と担保設定への取り組みを続け、より高速な新しいパッケージ管理に移行しました。 

台帳とDAppがLaceで作動できるよう不具合を修正し、ウォレットでネットワークを切り替えるためUIを更新しました。

### スマートコントラクト

**Plutus**チームは、簡素化された新APIを使用してMarconiインデクサーを書き直し、 marconi-sidechainの統合テストを作成し、plutus-appsのcardano-apiバージョンを更新する作業に取り組みました。

**Marlowe**チームは、GitHubのTSコードからドキュメントを自動生成する[ツール](https://github.com/input-output-hk/marlowe-ts-sdk/pull/11)を追加し、Marloweを使用してくじを実行するためのCNCの暫定的なサポートを提供し、失敗と報告されたタイムアウトトランザクションの[安全性チェック](https://github.com/input-output-hk/marlowe-cardano/pull/686)を実行し、マークル化コントラクトの[実行コスト分析を修正](https://github.com/input-output-hk/marlowe-cardano/pull/685)しました。[ワークスペース](https://github.com/input-output-hk/marlowe-ts-sdk/pull/10)の初回バージョンの追加、コントラクトIDのURLエンコーディング[要件](https://github.com/input-output-hk/marlowe-cardano/pull/684)の文書化、オンチェーンの[Futureコントラクトの実行](https://github.com/input-output-hk/marlowe-cardano/pull/682)にも取り組みました。

[Docker Composeワークフローの変更](https://github.com/input-output-hk/marlowe-starter-kit/pull/26)にも取り組みました。 

### Basho( スケーリング)

**Hydra**チームは、Cardanoノードv.8.1.2をサポートして最新のメインネットリリースに対応できるよう、Hydraノードを更新しました。cardanonical JSONスキーマに関する議論に参加し、これをサブモジュールとしてプロジェクトに追加しました。これは、データモデリングと相互運用性の向上に貢献します。

コミュニティエンゲージメントに関しては、新しいコントリビューターをオンボーディングし、RareEvoのTwitterスペースに参加し、Hydraマスタークラスの準備を続けました。

**Mithril**チームは、すでにメインネットで稼働しているSPOの認知度を高めるために、登録済みサイナーを含む[エクスプローラー](https://mithril.network/explorer/registrations?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator&epoch=430)ページを作成しました。ADR（自動デプロイルール）で標準化するエラーリファクタリングにも注力しました。

### VOLTAIRE

**Voltaire**に関しては、CIP-1694のオンチェーンガバナンスアクションのための進化型テストベッドであるSanchoNetの初回イテレーション開始によって、参加型ガバナンスが前進します。これはCardanoコミュニティが制御されたテストネット環境でCIP-1694を体験するための新しい遊び場です。参加型ガバナンスの進歩を経験し、検討するために、将来のDRep（デリゲーター代表団）のような新しいガバナンスの役割を利用できるようになります。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。

[Intersect](https://intersectmbo.org)は、Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関です。これは、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。設立メンバーとして[今すぐIntersectに参加](http://intersectmbo.org/)すると、最新情報をまとめたニュースレターが配信されます。Intersectのニュースタブでは、Voltaireに関する重要な技術情報を提供するCIP-1694 Digestの提供が開始されました。           

### CATALYST

**Project Catalyst**では、レベル2コミュニティレビューが終了しました。コミュニティレビュー段階は、合計で841人のレビュー担当者と200人のモデレーターという、印象的な参加人数となりました。今週のタウンホール後、Steven JohnsonとMike McNultyがコミュニティとCatalyst Ecosystem Accelerator提案について話し合いました。タウンホールでは、最近完了したプロジェクトの動画がいくつか紹介されました。[ここ](https://www.youtube.com/watch?v=oKjt63Kmehk)で録画を見ることができます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。

Catalystの技術面は以下の通りです。

*   モバイルアプリのテスト終了、ファンド操作、コミュニティレビュー、投票のユーザーエクスペリエンスの調整を組み込む 
    
*   テストネットでスナップショットインポーターの不具合に対処
    
*   Catalystツールボックスを報酬アドレスを正しく管理するよう修正
    
*   コミュニティ用にProject Catalystのスナップショットモジュールをデプロイ
    
*   サポート済みウォレットのGitBookを新バージョンで更新して使いやすさを向上
    
*   進行中の投票イベントの自動デプロイおよびオーケストレーションフレームワークとスナップショットデータとの統合を進める
    
*   IdeaScaleインポーターの実行中にログに記録させるメトリクスの組み込み
    
*   投票アプリの新機能に必要なフィールドを取得するために、IdeaScaleインポーターを更新
    
*   Fund10の変更をcat-data-serviceのvitssに実装
    
*   継続テストネットの導入とGVCを含むコミュニティと発表を共有
    
*   投票ノードで別のロードテストを完了し、集計プロセスの問題を解消
    
*   テスト機能の強化を目的とし、参照「投票署名者」の作成の可能性を検討するために、フラグメント仕様の調査を実施
    
*   イベントデータベースとの互換性を確保するために、データインプット検証を実装
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、African Blockchain Centerと提携して、一部のメンバーがケニアのナイロビでHaskellとネイティブスマートコントラクトの講義を行いました。来週メキシコのグアダラハラの[ITESO大学](https://www.iteso.mx/)で開催されるCardano Daysイベントの準備も進めています。

[![es RDC 18 de 2023](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/e/0/e0ff3d63c5ebf7cd51c03312a4682a4980a6e487_2_1000x562.jpeg)es RDC 18 de 20231432×806 256 KB](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/e/0/e0ff3d63c5ebf7cd51c03312a4682a4980a6e487.jpeg)

# TECNOLOGÍA PRINCIPAL

Durante esta semana, el equipo de **rendimiento y rastreo** ha puesto a punto el nodo de benchmarking v.8.2.0. Además, optimizaron el nuevo sistema de rastreo y actualmente trabajan en la documentación de la configuración de rastreo.

Así mismo, mejoraron el backend Nomad para aprovechar la flexibilidad añadida del nuevo clúster de hardware.

Consulte, [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

En esta semana, el equipo de **Lace** ha trabajado en el perfeccionamiento y la corrección de errores de la versión beta \[de la función de\] multidelegación. También siguieron trabajando en la biblioteca de serialización en cardano-js-sdk para sustituir a la biblioteca CML, el ajuste de garantías y la transición a la nueva y más rápida gestión de paquetes.

Además, arreglaron algunos problemas para permitir que el ledger y las DApps funcionen con Lace e hicieron actualizaciones de la interfaz de usuario para cambiar de red en la wallet.

# SMART CONTRACTS

El equipo de **Plutus** trabajó en la reescritura de los indexadores marconi utilizando una nueva API simplificada, escribiendo pruebas de integración para marconi-sidechain y actualizando la versión cardano-api en plutus-apps.

En la presente semana, el equipo **Marlowe** ha añadido una [herramienta](https://github.com/input-output-hk/marlowe-ts-sdk/pull/11) para autogenerar documentación a partir del código TS en GitHub, ha ofrecido algún soporte ad hoc a CNC para ejecutar rifas utilizando Marlowe, ha ejecutado [comprobaciones de seguridad](https://github.com/input-output-hk/marlowe-cardano/pull/686) que informan de fallos en transacciones temporizadas, y [análisis de costes de ejecución fijos](https://github.com/input-output-hk/marlowe-cardano/pull/685) de contratos merkleizados. También trabajaron en añadir la versión inicial de [espacios de trabajo](https://github.com/input-output-hk/marlowe-ts-sdk/pull/10), documentaron un [requisito](https://github.com/input-output-hk/marlowe-cardano/pull/684) de codificación de URL para los identificadores de contrato, y [ejecutaron el](https://github.com/input-output-hk/marlowe-cardano/pull/682) \[contrato\] `Future`([PLT-6756: Running](https://github.com/input-output-hk/marlowe-cardano/pull/682) `Future` [contract on-chain by yveshauser · Pull Request #682 · input-output-hk/marlowe-cardano · GitHub](https://github.com/input-output-hk/marlowe-cardano/pull/682)) en cadena.

Asimismo, trabajaron en [modificar el flujo de trabajo de Docker Compose](https://github.com/input-output-hk/marlowe-starter-kit/pull/26).

# BASHO (ESCALADO)

El equipo **Hydra** actualizó el nodo Hydra para que fuera compatible con el nodo Cardano v.8.1.2, garantizando así la compatibilidad con la última versión de la mainnet. El equipo también participó en los debates sobre un esquema JSON “cardanónico” y lo añadió como submódulo al proyecto, lo que contribuye a mejorar el modelado de datos y la interoperabilidad.

En lo que respecta al compromiso con la comunidad, el equipo incorporó a un nuevo colaborador, participó en un espacio de RareEvo en Twitter y continuó con los preparativos de la clase magistral de Hydra.

E equipo de **Mithril** creó una página [explorer](https://mithril.network/explorer/registrations?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator&epoch=430) con los firmantes registrados para dar reconocimiento a los SPO que ya funcionan en mainnet. El equipo también se centró en la refactorización de errores para estandarizarlos con la regla de despliegue automático (ADR).

# VOLTAIRE

En **Voltaire**, la gobernanza participativa avanza con el lanzamiento de la primera iteración de SanchoNet, un laboratorio técnico en evolución para las acciones de gobernanza on-chain del CIP-1694. Se trata de un nuevo terreno de pruebas para que la comunidad de Cardano experimente con el CIP-1694 en un entorno de red de pruebas controlado. Los nuevos roles de gobernanza, como los futuros representantes delegados (DReps), estarán a disposición de la comunidad para experimentar y opinar sobre el avance de la gobernanza participativa. Visite [SanchoNet](https://sancho.network/) para obtener más información y únase a la conversación en [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org/) es una institución clave para el ecosistema que reúne a empresas, desarrolladores, particulares y otros participantes del ecosistema para dar forma e impulsar el futuro desarrollo de Cardano. Como tal, será un administrador de los procesos que rigen la hoja de ruta y el desarrollo continuos de la plataforma y el protocolo Cardano. [Únase hoy a Intersect](http://intersectmbo.org/) como miembro fundador para recibir un boletín exclusivo con un primer vistazo a las últimas novedades. Además, se ha lanzado un Boletín CIP-1694 en la pestaña de noticias de Intersect para ofrecer información técnica vital sobre todo lo relacionado con Voltaire.

# CATALYST

En el **Proyecto Catalyst,** la fase de revisión comunitaria de nivel 2 llegó a su fin. Hubo una impresionante cantidad de participación en la etapa de revisión comunitaria con un total de 841 revisores participantes y 200 moderadores elegibles. Fue un placer contar con Steven Johnson y Mike McNulty en el after town hall de esta semana para debatir la propuesta “Catalyst Ecosystem Accelerator” junto a la comunidad. Durante el Ayuntamiento, el equipo mostró algunos vídeos de los proyectos cerrados recientemente, y puede encontrar la grabación [aquí](https://www.youtube.com/watch?v=oKjt63Kmehk). Si aún no lo ha hecho, asegúrese de registrar su asistencia al [próximo ayuntamiento](http://bit.ly/catalyst-townhall).

En el aspecto técnico de Catalyst, el equipo:

*   Finalizó las pruebas de la aplicación móvil, incorporando ajustes para las operaciones del fondo, las revisiones de la comunidad y la experiencia del usuario en las votaciones.
    
*   Abordó los problemas con el importador de instantáneas en testnet.
    
*   Arregló la caja de herramientas de Catalyst para gestionar con precisión las direcciones de recompensa.
    
*   Desplegó el módulo de instantáneas del Proyecto Catalyst para uso de la comunidad.
    
*   Actualizó el GitBook de los wallets soportados con nuevas versiones para mejorar la usabilidad.
    
*   Avanzó en la integración de los datos de las instantáneas con un marco de autodespliegue y orquestación para los eventos de votación en curso.
    
*   Incorporó métricas para ser registradas durante la ejecución del importador IdeaScale.
    
*   Actualizó el importador de IdeaScale para capturar los campos necesarios requeridos por las nuevas funciones de la aplicación de votación.
    
*   Trabajó en la implementación de los cambios del Fondo 10 en `vitss` en `cat-data-service`.
    
*   Introdujo la red de pruebas continua y compartió el anuncio con la comunidad, incluido el GVC.
    
*   Completó otra prueba de carga en el nodo de votación, resolviendo un problema con el proceso de recuento.
    
*   Llevó a cabo una investigación sobre las especificaciones de los fragmentos para explorar la posible creación de un “firmante de votos” de referencia, con el objetivo de mejorar las capacidades de prueba.
    
*   Implementó validaciones de entrada de datos para garantizar la compatibilidad con la base de datos de eventos.
    

Por último, para estar al día de todo lo que ocurre en el Proyecto Catalyst, únase al canal de anuncios de [Catalyst Telegram](https://t.me/cardanocatalyst).

# EDUCACIÓN

Esta semana, algunos miembros del equipo de **Educación** se encuentran sobre el terreno en Nairobi, Kenia, enseñando Haskell y smart contracts nativos en colaboración con el African Blockchain Center. El equipo también se está preparando para el evento Cardano Days en la [Universidad ITESO](https://www.iteso.mx/) en Guadalajara, México, la próxima semana.
