---
title: Weekly development report as of 2023-09-01
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/fc543b22-664a-4e2e-bd51-2653f5c168a9/
image_text: Weekly development report as of 2023-09-01
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team concluded benchmarking activities for node v.8.2.1 and worked on the creation of benchmarking setups for GHC9.6 and UTXO-HD. They also focused on infrastructure enhancements, which led to a reduction in the memory footprint of the analysis pipeline. The team merged a new batch of optimizations into the tracing system and continued working on namespace consistency guarantees. 

Finally, the team worked on the Nomad backend, conducting and analyzing various validation runs on the newly deployed hardware cluster.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team continued working on Metadex integration, the filtering of user-owned and trading tokens, and some bug fixing. Additionally, the team worked on testing native token minting and the creation of custom liquidity pools for decentralized exchanges, created an end-to-end test for swapping native tokens, and performed some load/performance testing. 

The team also fixed hardware wallet transactions with the DApp connector, finalized setting the collateral in a round-trip action, extended CIP-30 to clear a path for enabling with additional extensions, and added more automation tests for Lace.

### SMART CONTRACTS

The **Plutus** tools team continued rewriting the Marconi indexers, implementing and testing the new indexer, resuming strategy for the new API, and updating the `cardano-api` version in `plutus-apps`.

The Plutus Core team published `plutus-ledger-api-1.11.0.0`, which includes the `ScriptContext` data type for Plutus v3 and is subject to minor revisions in future releases.

The **Marlowe** team worked on their presentation for the CryptoPall workshop. They also added a [survey contract exercise](https://github.com/input-output-hk/marlowe-starter-kit/pull/34) to the lessons folder, a [script to generate keys](https://github.com/input-output-hk/marlowe-starter-kit/pull/30) from the mnemonic phrase, and a [mechanism for acquiring token metadata](https://github.com/input-output-hk/marlowe-ts-sdk/pull/19).

In addition to this, they resolved [setup issues](https://github.com/input-output-hk/marlowe-starter-kit/commit/d9d9a4b) in Demeter Run with version 0.0.4 and the new scripts and environment. The team also focused on the withdrawal widget, designed to facilitate the withdrawal of payments made to Roles in Marlowe contracts while accommodating transaction limits. This widget is intended for reuse within other DApps, providing an easy and flexible solution for DApp users to conveniently perform withdrawals. The team also added a [draft README.md](https://github.com/input-output-hk/marlowe-ts-sdk/pull/18/commits/9b5ab855b22ab7c3cf5fdfa6103c5c5bbe849f8b) to the marlowe-ts-sdk repo, and wrote specs and user flows for the withdrawal widget. 

Finally, they implemented `sprintf` for tokens and worked on changing current workspace configurations.

### BASHO (SCALING)

This week, the **Hydra** team conducted the [monthly review meeting for August](https://hydra.family/head-protocol/monthly/2023-08/), which continuously ensures transparent communication and project evaluation.

In terms of community engagement, the Hydra team held a Hydra master class at the RareEvo workshop as an educational initiative for the community. Additionally, the team updated the Hydra demo and the tutorial to include Mithril and the latest release changes. They also focused on exploring the Hydra network resilience to improve hydra-node availability for improved user experience.

This week, the **Mithril** team worked on the implementation of the second phase of the [stress test tool](https://github.com/input-output-hk/mithril/issues/1155) for benchmarking the aggregator. They also made improvements to the client, implemented the [simultaneous download and extraction](https://github.com/input-output-hk/mithril/issues/1115) of the snapshot archive, and added [machine readable progress information](https://github.com/input-output-hk/mithril/issues/1095) to it. Additionally, they started implementing a proof of concept on using the [zstandard](https://github.com/input-output-hk/mithril/issues/876) compression for snapshot archives.

Finally, the team strengthened the [verification](https://github.com/input-output-hk/mithril/issues/1160) of the produced snapshot archives, and worked on adding the [Cardano node version](https://github.com/input-output-hk/mithril/issues/948) used to create the snapshot archive to its metadata. 

### VOLTAIRE

This week in **Voltaire**, SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions, completes the second phase of its roadmap. This phase brings online DRep registration, delegation, and voting. The DRep plays a critical role in governance within CIP-1694. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org), a key institution for the ecosystem to shape and drive the future development of Cardano, celebrated its first town hall this week. Members received the latest update on the committees being formed and learned more about SanchoNet with a live demonstration. To attend next month’s town hall and get the latest news first, [join Intersect today](http://intersectmbo.org/).

### CATALYST

This week in **Project Catalyst,** the Catalyst team held a Fund10 Twitter space on Tuesday and invited a very special guest. Charles Hoskinson attended the Twitter Space with the team to discuss the Catalyst roadmap and where the team sees Catalyst moving forward. You can check out the AMA recording [here](https://twitter.com/i/spaces/1mnxeRgElLqKX). Additionally, at the weekly town hall, Mike McNulty and Steven Johnson previewed some of the new features to the voting app for Fund10, you can catch the recording of that here. Make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the technical side of Catalyst last week, the team:

*   Updated supported wallets in GitBook 
    
*   Completed integration of snapshot data with auto deployment/orchestration framework for continuous voting events
    
*   Built the community version of ‘check my voting power’ against testnet APIs
    
*   Optimized snapshot service to eliminate manual downstream work (eg, remove delegation tx, take the latest registration as valid) and cleaned up the testing framework
    
*   Defined work required to automate reviews importer and calculation, including integration with moderation module - aiming to have importer process mimic users posting reviews directly to the backend from any interface
    
*   Created tutorial for using interactive API dashboard for testnet data service
    
*   Enabled the app to point to [Project Catalyst - Innovation grants to build on Cardano](http://projectcatalyst.io/) for proposal details
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, the **Education** team worked with the Marlowe team on defining learning journeys for users. They are also planning for the next _Cardano Days_ event in Malta later this month, and continued work on Mastering Cardano.

![](https://ucarecdn.com/b6b0494e-dbd5-44ce-b368-66b3766a8417/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**パフォーマンス＆トレース**チームは、ノードv.8.2.1のベンチマークアクティビティを終了し、GHC9.6とUTXO-HDのベンチマーク設定の作成に取り組みました。インフラ強化にも注力し、分析パイプラインのメモリーフットプリントの削減を実現しました。新しい最適化のバッチをトレースシステムにマージし、引き続き名前空間の一貫性の保証に取り組みました。 

Nomadバックエンドに取り組み、新しく導入されたハードウェアクラスターでさまざまな検証ランを実行および分析しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは、Metadexの統合、ユーザー所有トークンや取引トークンのフィルタリング、バグ修正に取り組みました。ネイティブトークンのミントのテストと分散型取引所用のカスタム流動性プールの作成に取り組み、ネイティブトークンをスワップするエンドツーエンドテストを作成し、負荷/パフォーマンステストを実行しました。 

DAppコネクターを使用したハードウェアウォレットトランザクションの修復、ラウンドトリップアクションでの担保設定の仕上げ、追加拡張を有効にするためのパスをクリアするためのCIP-30の拡張、および自動化テストの追加にも取り組みました。

### スマートコントラクト

**Plutus**ツールチームは、Marconiインデクサーの書き直し、新APIのための新インデクサーの再開戦略の実装とテスト、plutus-appsのcardano-apiのバージョン更新作業を続けました。

Plutus Coreチームはplutus-ledger-api-1.11.0.0を公開しました。これには、Plutus v3のScriptContextデータ型が含まれていますが、今後のリリースでマイナーな改訂が行われる可能性があります。

**Marlowe**チームは、CryptoPolワークショップのプレゼンテーションに取り組みました。[調査コントラクト](https://github.com/input-output-hk/marlowe-starter-kit/pull/34)の演習をレッスンフォルダーに追加したほか、ニーモニックフレーズから[鍵を生成するスクリプト](https://github.com/input-output-hk/marlowe-starter-kit/pull/30)、[トークンメタデータを取得するメカニズム](https://github.com/input-output-hk/marlowe-ts-sdk/pull/19)を追加しました。

Demeter Runバージョン0.0.4で新しいスクリプトおよび環境とのセットアップの問題を解決しました。引き出しウィジェットにも焦点を当てました。これは、Marloweコントラクトでロールへの支払いの引き出しを容易にしつつトランザクション制限にも対応できるよう設計したものです。このウィジェットは、他のDAppでの再利用を念頭に置き、DAppユーザーが便利に引き出しを行えるように、簡単でフレキシブルなソリューションを提供しています。

marlowe-ts-sdkリポジトリに[README.mdのドラフト](https://github.com/input-output-hk/marlowe-ts-sdk/pull/18/commits/9b5ab855b22ab7c3cf5fdfa6103c5c5bbe849f8b)を追加し、引き出しウィジェットの仕様とユーザーフローを作成しました。 

トークンにprintfを実装し、現在のワークスペース設定の変更に取り組みました。

### Basho( スケーリング)

**Hydra**チームは、[8月の月例レビュー会議](https://hydra.family/head-protocol/monthly/2023-08/)を開催しました。これは、コミュニケーションの透明性を高めプロジェクトを正しく評価するための継続的な取り組みです。

コミュニティエンゲージメントに関しては、コミュニティのための教育イニシアチブとしてRareEvoワークショップでHydraマスタークラスを開催しました。Hydraデモとチュートリアルを更新して、Mithrilと最新リリースによる変更を追加しました。Hydraノードの可用性を改善してユーザーエクスペリエンスを向上させるために、Hydraネットワークの回復性調査にも焦点を当てました。

**Mithril**チームは、アグリゲーターのベンチマーク用[ストレステストツール](https://github.com/input-output-hk/mithril/issues/1155)実装の第2フェーズに取り組みました。クライアントも改良しました。スナップショットアーカイブの[同時ダウンロードと抽出](https://github.com/input-output-hk/mithril/issues/1115)を実装し、そこに[マシンで読み取り可能な進行状況情報](https://github.com/input-output-hk/mithril/issues/1095)を追加しました。スナップショットアーカイブに[zstandard](https://github.com/input-output-hk/mithril/issues/876)圧縮を使用することについて、概念実証の実装を開始しました。

作成したスナップショットアーカイブの[検証](https://github.com/input-output-hk/mithril/issues/1160)を強化し、スナップショットアーカイブの作成に使用された[Cardanoノードバージョン](https://github.com/input-output-hk/mithril/issues/948)をメタデータに追加する作業を行いました。 

### VOLTAIRE

Voltaireに関しては、CIP-1694のオンチェーンガバナンスアクションのための進化型技術テストベッドであるSanchoNetが、ロードマップの第2段階を完了します。このフェーズでは、DRepのオンライン登録、委任、および投票が行われます。DRepは、CIP-1694のガバナンスにおいて重要な役割を果たします。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。

Cardanoの将来の開発を形作り、推進するエコシステムのための重要な機関である[Intersect](https://intersectmbo.org)は、最初のタウンホールを開催しました。現在結成中である委員会の最新情報を発表したほか、SanchoNetの詳細をライブデモンストレーションで紹介しました。来月のタウンホールに出席して最新のニュースを最初に入手するには、[今すぐIntersectに参加して](http://intersectmbo.org/)ください。

### CATALYST

**Project Catalyst**では\*\*、\*\* Catalystチームが火曜日に特別ゲストを招いてFund10 Twitterスペースを開催しました。参加したのはCharles Hoskinsonで、Catalystのロードマップと、Catalystが今後どのように進むのかについてチームと話し合いました。AMAの録音は[ここ](https://twitter.com/i/spaces/1mnxeRgElLqKX)でチェックできます。ウィークリータウンホールでは、Mike McNultyとSteven Johnsonが、Fund10の投票アプリの新機能をプレビューしました。録画はここで視聴できます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をお忘れなく。

Catalystの技術的更新情報は以下の通りです。

*   GitBookでサポートしているウォレットを更新 
    
*   継続的投票イベントのためのスナップショットデータと自動デプロイ/オーケストレーションフレームワークの統合を完了
    
*   テストネットAPIに対して、「Check my voting power（議決権の確認）」のコミュニティバージョンを構築
    
*   スナップショットサービスを最適化して、手動によるダウンストリーム作業（委任txの削除、最新の登録を有効にするなど）を排除し、テストフレームワークをクリーンアップ
    
*   レビューのインポーターと計算を自動化するために必要な定義済みの作業（モデレーションモジュールとの統合を含む）- ユーザーが任意のインターフェイスからバックエンドに直接レビューを投稿するのをインポータープロセスが真似することを意図
    
*   テストネットデータサービス用インタラクティブAPIダッシュボードを使用するためのチュートリアルを作成
    
*   アプリで、詳細の参照先を[Project Catalyst - Innovation grants to build on Cardano](http://projectcatalyst.io/)に指定
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームはMarloweチームと協力してユーザーの学習過程を定義しました。今月後半にマルタで開催されるCardano Daysイベントを企画している他、Mastering Cardanoの作業も進めました。

# TECNOLOGÍA CENTRAL

El equipo de **rendimiento y trazado** finalizó esta semana las actividades de evaluación comparativa para el nodo v.8.2.1 y trabajó en la creación de configuraciones de evaluación comparativa para GHC9.6 y UTXO-HD. Se centraron en las mejoras de la infraestructura, que permitieron reducir la huella de memoria de la canalización de análisis. Asimismo, el equipo fusionó un nuevo lote de optimizaciones en el sistema de rastreo y siguió trabajando en las garantías de coherencia del espacio de nombres.

Además, se trabajó en el backend de Nomad, realizando y analizando varias ejecuciones de validación en el clúster de hardware recién desplegado.

Consulte, [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** siguió trabajando en la integración de Metadex, el filtrado de tokens propiedad de usuarios y de comercio, así como en la corrección de algunos errores. Además, el equipo trabajó en las pruebas de acuñación de tokens nativos y la creación de pools de liquidez personalizados para los exchanges descentralizados, creó una prueba de extremo a extremo para el intercambio de tokens nativos y realizó algunas pruebas de carga/rendimiento.

También arreglaron las transacciones de las hardware wallet con el conector DApp, finalizaron la configuración de la garantía en una acción de ida y vuelta, ampliaron el CIP-30 para despejar el camino a la habilitación con extensiones adicionales y añadieron más pruebas de automatización para Lace.

# CONTRATOS INTELIGENTES

El equipo de herramientas de **Plutus** prosiguió con la reescritura de los indexadores Marconi, la implementación y las pruebas del nuevo indexador, la reanudación de la estrategia para la nueva API y la actualización de la versión `cardano-api` en `plutus-apps`.

Por su parte, el equipo de Plutus Core publicó `plutus-ledger-api-1.11.0.0`, que incluye el tipo de datos `ScriptContext` para Plutus v3 y está sujeto a revisiones menores en futuras versiones.

El equipo **Marlowe** elaboró su presentación para el taller de CryptoPall. También añadieron un [ejercicio de contrato de encuesta](https://github.com/input-output-hk/marlowe-starter-kit/pull/34) a la carpeta de lecciones, una [secuencia de comandos para generar claves](https://github.com/input-output-hk/marlowe-starter-kit/pull/30) a partir de la frase mnemotécnica, y un [mecanismo para adquirir metadatos de tokens](https://github.com/input-output-hk/marlowe-ts-sdk/pull/19).

Además, solventaron [problemas de configuración](https://github.com/input-output-hk/marlowe-starter-kit/commit/d9d9a4b) en Demeter Run con la versión 0.0.4 y las nuevas secuencias de comandos y entorno. También se centraron en el widget de retirada, diseñado para facilitar la retirada de los pagos realizados a los Roles en los contratos Marlowe a la vez que se adaptan a los límites de transacción. Este widget está pensado para ser reutilizado dentro de otras DApps, ofreciendo una solución fácil y flexible para que los usuarios de DApps puedan realizar retiradas cómodamente. El equipo también añadió un [borrador README.md](https://github.com/input-output-hk/marlowe-ts-sdk/pull/18/commits/9b5ab855b22ab7c3cf5fdfa6103c5c5bbe849f8b) al repositorio marlowe-ts-sdk, y escribió especificaciones y flujos de usuario para el widget de retirada.

Finalmente, implementaron `sprintf` para los tokens y trabajaron en el cambio de las configuraciones actuales del espacio de trabajo.

# BASHO (ESCALADA)

A lo largo de esta semana, el equipo de **Hydra** llevó a cabo la [reunión de revisión mensual de agosto](https://hydra.family/head-protocol/monthly/2023-08/), que garantiza continuamente una comunicación transparente y la evaluación del proyecto.

Respecto a la colaboración con la comunidad, el equipo Hydra celebró una clase magistral de Hydra en el taller de RareEvo como iniciativa educativa para la comunidad. Además, el equipo actualizó la demo de Hydra y el tutorial para incluir Mithril y los últimos cambios de la versión. También se centraron en explorar la capacidad de recuperación de la red Hydra para mejorar la disponibilidad de los nodos Hydra con el fin de mejorar la experiencia del usuario.

Esta semana, el equipo de **Mithril** trabajó en la implementación de la segunda fase de la [herramienta de prueba de estrés](https://github.com/input-output-hk/mithril/issues/1155) para la evaluación comparativa del agregador. También realizaron mejoras en el cliente, implementaron la [descarga y extracción simultáneas](https://github.com/input-output-hk/mithril/issues/1115) del archivo de instantáneas y le añadieron [información de progreso legible por máquina](https://github.com/input-output-hk/mithril/issues/1095). Además, empezaron a implementar una prueba de concepto sobre el uso de la compresión [zstandard](https://github.com/input-output-hk/mithril/issues/876) para los archivos de instantáneas.

Por último, el equipo reforzó la [verificación](https://github.com/input-output-hk/mithril/issues/1160) de los archivos de instantáneas producidos, y trabajó en añadir a sus metadatos la [versión del nodo Cardano](https://github.com/input-output-hk/mithril/issues/948) utilizada para crear el archivo de instantáneas.

# VOLTAIRE

En **Voltaire**, SanchoNet, un banco de pruebas técnico en evolución para las acciones de gobernanza en la cadena del CIP-1694, completa la segunda fase de su hoja de ruta. Esta fase pone en línea el registro, la delegación y la votación del DRep. El DRep desempeña un papel fundamental en la gobernanza dentro de CIP-1694. Visite [SanchoNet](https://sancho.network/) para obtener más información y únase a la conversación en [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org/), una institución clave para que el ecosistema dé forma e impulse el futuro desarrollo de Cardano, celebró su primer ayuntamiento esta semana. Los miembros recibieron la última actualización sobre los comités que se están formando y aprendieron más sobre SanchoNet con una demostración en directo. Para asistir al ayuntamiento del próximo mes y recibir antes que nadie las últimas noticias, [únase hoy a Intersect](http://intersectmbo.org/).

# CATALYST

En el **Proyecto Catalyst,** el equipo de Catalyst celebró el martes un espacio de Fondo 10 en Twitter e invitó a un invitado muy especial. Charles Hoskinson asistió al espacio de Twitter con el equipo para hablar de la hoja de ruta de Catalyst y de hacia dónde ve el equipo que avanza Catalyst. Puede consultar la grabación del AMA [aquí](https://twitter.com/i/spaces/1mnxeRgElLqKX). Además, en el ayuntamiento semanal, Mike McNulty y Steven Johnson adelantaron algunas de las nuevas características de la aplicación de votación para el Fondo 10, puede ver la grabación aquí. Asegúrese de registrar su asistencia al [próximo ayuntamiento](http://bit.ly/catalyst-townhall).

En el aspecto técnico de Catalyst la semana pasada, el equipo:

*   Actualizó los wallets soportados en GitBook
    
*   Finalizó la integración de los datos de las instantáneas con el marco de despliegue/orquestación automática para los eventos de votación continua
    
*   Construyó la versión comunitaria de “comprobar mi poder de voto” con las API de testnet
    
*   Optimizó el servicio de instantáneas para eliminar el trabajo manual posterior (por ejemplo, eliminar la delegación tx, tomar el último registro como válido) y limpió el marco de pruebas
    
*   Definió el trabajo necesario para automatizar el importador y el cálculo de reseñas, incluida la integración con el módulo de moderación - con el objetivo de que el proceso del importador imite a los usuarios que envían reseñas directamente al backend desde cualquier interfaz
    
*   Creó un tutorial para utilizar el panel de control interactivo de la API para el servicio de datos de testnet
    
*   Habilitó la aplicación para que apunte a [Proyecto Catalyst - Subvenciones a la innovación para construir sobre Cardano](http://projectcatalyst.io/) para conocer los detalles de la propuesta.
    

Por último, para estar al día de todo lo que ocurre en el Proyecto Catalyst, únase al canal de anuncios [Catalyst Telegram](https://t.me/cardanocatalyst).

# EDUCACIÓN

El equipo de **Educación** ha trabajado con el equipo de Marlowe en la definición de recorridos de aprendizaje para los usuarios. También están planificando el próximo evento _Cardano Days_ en Malta a finales de este mes, y continuaron trabajando en Mastering Cardano.
