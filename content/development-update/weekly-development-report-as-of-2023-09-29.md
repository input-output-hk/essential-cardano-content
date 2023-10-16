---
title: Weekly development report as of 2023-09-29
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/d876dcca-f621-497a-b59f-85f69acd183d/
image_text: Weekly development report as of 2023-09-29
---

### CORE TECHNOLOGY

This week in **core technology**, the performance and tracing team performed low-level network and high-level variance analysis of the benchmarking clusters. They also worked on infrastructure improvements adjusting workload classification, continued working on machine-readable tracing of the tracer configuration, and Nomad backend improvements. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team worked on the features related to choosing the delegation ratio between different stake pools, integrated portfolio persistence, and fixed several UI issues. They also worked on updating the DApp connector to allow it to be enabled with selected extensions such as those listed on [CIP-95](https://cips.cardano.org/cips/cip95/), worked on updating Lace to respond to these changes, and started adding more updates to the Lace UI to reflect the different types of governance actions.

Finally, work is ongoing on the DApp Store development. 

### SMART CONTRACTS

This week, the **Plutus tools** team exposed the queries of the new Marconi API through a JSON-RPC server. They also tested the new cardano-node-emulator in Marconi for integration purposes and deferred the creation of SQL indices in Marconi, resulting in improved synchronization times and overall system performance. 

This week, the **Marlowe** team improved the [ts-sdk importing process](https://github.com/input-output-hk/marlowe-ts-sdk/pull/27) and added [Docker support](https://github.com/input-output-hk/marlowe-cardano/pull/715) to the Marlowe oracle. They also upgraded Cardano node [dependency](https://github.com/input-output-hk/marlowe-cardano/pull/709) to v.8.1.2, [moved](https://github.com/input-output-hk/marlowe-cardano/pull/712) Plutus scripts to a [separate project](https://github.com/input-output-hk/marlowe-plutus), and investigated the use of the wallet-connect feature with Eternl. 

The team also worked on Marlowe Runner by defining the Docker image requirements, implementing the possibility of [exporting contracts](https://github.com/input-output-hk/marlowe-playground/pull/45) from Marlowe Playground to Marlowe Runner, and [applying styling](https://github.com/input-output-hk/marlowe-runner/commit/2316a85) for the forms of Marlowe Runner consistent with the new design. Additionally, they [preserved local information](https://github.com/input-output-hk/marlowe-runner/commit/2ed9d39) on unconfirmed contracts after the creation or input application and worked on Runner functionality (eg, user contract list, action buttons, role token sorting, etc).

Finally, the team added the [handling of redemptions](https://github.com/input-output-hk/marlowe-cardano/pull/713) in contract streaming.

### BASHO (SCALING)

This week, the **Hydra** team conducted the monthly review meeting in collaboration with the **Mithril** team, enhancing project coordination.

The **Hydra** team improved the `gen-hydra-key` node command for smoother usability and identified concrete steps to enhance network resiliency in feature items [#188](https://github.com/input-output-hk/hydra/issues/188), [#1080](https://github.com/input-output-hk/hydra/issues/1080), and [#1079](https://github.com/input-output-hk/hydra/issues/1079). Additionally, they contributed the [aiken-mode](https://github.com/aiken-lang/aiken-mode) editor integration to the aiken-lang organization, updated dependencies to utilize cardano-api v.8.20, and published the [Hydra security advisory CVE-2023-42806](https://github.com/input-output-hk/hydra/security/advisories/GHSA-gr36-mc6v-72qq) with a workaround available for users.

The **Mithril** team released a new distribution [2337.0](https://github.com/input-output-hk/mithril/releases/tag/2337.0), which includes support for `zstandard` compression of snapshot archives, support for the Cardano node version in snapshot metadata, and support for recording snapshot download statistics in the aggregator.

They also completed the refactoring and standardization of the errors in the Mithril nodes and published an [Architectural decision record](https://mithril.network/doc/adr/6) on the documentation website. Additionally, they kept working on adding Cloudflare protection to the infrastructure.

Finally, the team fixed a performance issue on the stress test tool for the aggregator and made some improvements to the documentation for SPOs.

### VOLTAIRE

This week in **Voltaire**, the Voltaire GovTool was shared which enables ada holders to register to become a delegate representative (DRep), delegate voting power to other DReps, and review and vote on governance actions. These capabilities are a critical part of on-chain governance participation in the age of Voltaire. See a [recorded demo](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd). [Join Intersect today](http://intersectmbo.org/).

SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions, progressed on the features roadmap by starting phase five development. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord). 

You can also join the bi-weekly Sancho-Wallet technical discussion around [CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md), an open hour on the IOHK Discord Server. All are welcome to discuss and bring technical questions for SanchoNet and [CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md). 

### CATALYST

**Project Catalyst** Fund10 voting results were released. You can review the stats and download a full copy of the results [here](https://projectcatalyst.io/funds/10). For more information on validating the results, please check this [guide](https://docs.projectcatalyst.io/catalyst-basics/voting/how-to-audit-the-vote). Congratulations to the selected projects, which are now onboarding!

As always, a funding cycle consists of many hands within fund operations and especially within the community, and as such, we’d like to thank all those who took part for their hard work, dedication, and support. We’d also like to thank those who submitted proposals but did not secure funding this time. We encourage them to review the feedback received and try again in the next fund.

Over the next few weeks, Project Catalyst will enter a scheduled cooldown period before entering the next funding cycle. More updates will be shared soon, so stay tuned for news. If you haven’t already, register your wish to attend the next [town hall](http://bit.ly/catalyst-townhall).

On the technical side of Catalyst last week, the team:

*   set up a new local testing environment to enable development against the latest backend
    
*   worked on development to limit voting batch size and improve proposal loading times
    
*   completed UI proposals for the load testing tool (debug only), filtered not-voted-proposals, and implemented filters for subcategories
    
*   discussed the new load testing approach and started working on updates to the snapshot tool to support goals
    
*   worked on adding registration metrics to logging for the snapshot tool, in addition to updates for the new load testing framework
    
*   continued development on fragments generator to improve testing capabilities 
    
*   set up new Jira and GitHub projects to execute funded F10 system improvement proposals – Voices/Hermes.
    

Finally, to stay updated with everything happening in Project Catalyst, join the [Catalyst Telegram announcement channel](https://t.me/cardanocatalyst). 

### EDUCATION

This week, the **Education** team are reflecting on a very successful _Cardano Days_ event at the University of Malta last week. They are working on gathering feedback from the participants and working through lessons learned within the team. They are also continuing to deliver the virtual Haskell course with ABC.

![](https://ucarecdn.com/9455a665-be44-42fc-b291-18f01a386132/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**では、パフォーマンス＆トレースチームが、ベンチマーククラスターの低レベルネットワークと高レベル分散分析を実施しました。ワークロードの分類を調整するインフラの改善、トレーサー設定の機械読み取り可能なトレース、Nomadバックエンドの改良にも取り組みました。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは、異なるステークプール間の委任比率の選択、統合されたポートフォリオの永続性に関する機能に取り組み、UIの不具合を修正しました。[CIP-95](https://cips.cardano.org/cips/cip95/)にリストされているような特定の拡張機能で有効にできるようにDAppコネクターを更新する作業、これらの変更に対応させるためのLaceの更新作業、さまざまなタイプのガバナンスアクションを反映させるためのLace UIの更新追加作業にも取り組みました。

DAppストアの開発作業は進行中です。 

### スマートコントラクト

**Plutusツール**チームは、JSON-RPCサーバーを介して新しいMarconi APIのクエリを公開しました。統合のためにMarconiで新しいcardano-node-emulatorをテストし、MarconiでのSQLインデックスの作成を延期した結果、同期時間とシステム全体のパフォーマンスが向上しました。 

**Marlowe**チームは、[ts-SDKインポートプロセス](https://github.com/input-output-hk/marlowe-ts-sdk/pull/27)を改善し、Marlowe Oracleに[Dockerサポート](https://github.com/input-output-hk/marlowe-cardano/pull/715)を追加しました。Cardanoノードの[依存関係](https://github.com/input-output-hk/marlowe-cardano/pull/709)をv.8.1.2にアップグレードし、Plutusスクリプトを[別のプロジェクト](https://github.com/input-output-hk/marlowe-plutus)に[移動](https://github.com/input-output-hk/marlowe-cardano/pull/712)し、Eternlでのウォレット接続機能の使用を調査しました。 

Marlowe RunnerのDockerイメージ要件を定義し、Marlowe PlaygroundからMarlowe Runnerに[コントラクトをエクスポート](https://github.com/input-output-hk/marlowe-playground/pull/45)する可能性を実装し、Marlowe Runnerのフォームに新しいデザインと整合性のある[スタイリングを適用](https://github.com/input-output-hk/marlowe-runner/commit/2316a85)させました。アプリケーションの作成後または入力後に未承認のコントラクトに関する[ローカル情報を保持](https://github.com/input-output-hk/marlowe-runner/commit/2ed9d39)し、Runnerの機能（ユーザーコントラクトリスト、アクションボタン、ロールトークンのソートなど）に取り組みました。

コントラクトストリーミングに[還元処理](https://github.com/input-output-hk/marlowe-cardano/pull/713)を追加しました。

### Basho( スケーリング)

**Hydra**チームは、**Mithril**チームと共同で月例レビュー会議を開き、プロジェクトの調整を強化しました。

**Hydra**チームは、gen-hydra-keyノードコマンドを改良して使いやすくし、機能アイテム[#188](https://github.com/input-output-hk/hydra/issues/188)、[#1080](https://github.com/input-output-hk/hydra/issues/1080)、[#1079](https://github.com/input-output-hk/hydra/issues/1079)でネットワークの回復力を強化するための具体的な手順を特定しました。[aiken-mode](https://github.com/aiken-lang/aiken-mode)エディターの統合をAiken-lang組織に提供し、Cardano-API v.8.20を活用するよう依存関係を更新し、[HydraセキュリティアドバイザリーCVE-2023-42806](https://github.com/input-output-hk/hydra/security/advisories/GHSA-gr36-mc6v-72qq)を公開し、ユーザーに回避策を提供しました。

**Mithril**チームは、スナップショットアーカイブのzstandard圧縮のサポート、スナップショットメタデータのCardanoノードバージョンのサポート、アグリゲーターのスナップショットダウンロード統計記録のサポートを含む、新しいディストリビューション[2337.0](https://github.com/input-output-hk/mithril/releases/tag/2337.0)をリリースしました。

Mithrilノードのエラーのリファクタリングと標準化を完了し、ドキュメントサイトに[アーキテクチャー決定記録](https://mithril.network/doc/adr/6)を公開しました。インフラにCloudflare保護を追加する作業を続けました。

アグリゲーターのストレステストツールのパフォーマンスの問題を修正し、SPOのドキュメントを改訂しました。

### VOLTAIRE

**Voltaire**に関しては、ADA保有者が、DRep（デリゲーター代表）になるための登録、他の代表への投票権の委任、ガバナンスアクションのレビューおよび投票を行うことができるようになるツール、Voltaire GovToolが公開されました。これらの機能は、Voltaire期におけるオンチェーンガバナンス参加に不可欠です。レビュー用に[デモの録画](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd)が公開されています。[今すぐIntersectに参加してください](http://intersectmbo.org/)。

CIP-1694のオンチェーンガバナンスアクションのための進化する技術テストベッドSanchoNetは、開発フェーズ4を開始して、引き続き機能ロードマップを進捗させています。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。 

[CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md)に関する隔週のSancho-Walletテクニカルディスカッション、IOHK Discord Serverのオープンアワーに参加することもできます。SanchoNetと[CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md)に関する議論、技術的な質問を歓迎します。 

### CATALYST

**Project Catalyst** Fund10の投票結果がリリースされました。[ここ](https://projectcatalyst.io/funds/10)で統計を確認し、結果のフルコピーをダウンロードできます。結果の検証の詳細については、この[ガイド](https://docs.projectcatalyst.io/catalyst-basics/voting/how-to-audit-the-vote)を参照してください。選ばれたプロジェクトは、現在オンボーディング中です。おめでとうございます。

いつものように、ファンドサイクルは、ファンド運営陣、特にコミュニティ内の多くの人々によって構成されています。ご尽力、献身、ご支援いただいたすべての方々に感謝申し上げます。また、今回資金調達に至らなかった提案を提出いただいた方々にも感謝申し上げます。受け取ったフィードバックを確認し、次のファンドでぜひもう一度挑戦してみてください。

今後数週間、Project Catalystは次の資金調達サイクルに入る前に、既定のクールダウン期間に入ります。その他の更新情報は近日中に公開される予定ですのでお見逃しなく。次回[タウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。

Catalystの技術的更新情報は以下の通りです。

*   最新のバックエンドに対する開発を可能にするために、新しいローカルテスト環境をセットアップ
    
*   投票バッチサイズを制限し、提案のロード時間を短縮するための開発に取り組む
    
*   ロードテストツールのUI提案を完了し（デバッグのみ）、投票されていない提案をフィルタリングし、サブカテゴリーのフィルターを実装
    
*   新しいロードテストアプローチについて話し合い、目標をサポートするためのスナップショットツール更新の取り組みを開始
    
*   新しいロードテストフレームワークの更新に加えて、スナップショットツールのログに登録メトリクスを追加
    
*   テスト機能を向上させるためのフラグメントジェネレーターの開発を継続 
    
*   資金提供されたF10システム改善提案Voices/Hermesを実行するために、新しいJiraプロジェクトとGitHubプロジェクトを立ち上げ
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、先週マルタ大学で開催され成功を収めたCardano Daysイベントを振り返っています。参加者からのフィードバックを収集し、チーム内で得た教訓に取り組んでいます。ABCとのHaskell仮想コースの提供も継続しています。

\---

# TECNOLOGÍA PRINCIPAL

Esta semana en **tecnología principal**, el equipo de rendimiento y rastreo realizó análisis de red de bajo nivel y de varianza de alto nivel de los clústeres de evaluación comparativa. Además, trabajaron en mejoras de la infraestructura ajustando la clasificación de las cargas de trabajo, siguieron trabajando en el trazado legible por máquina, de la configuración del trazador y en mejoras del backend de Nomad.

Como siempre, consulte [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** ha trabajado en las funciones relacionadas con la elección del ratio de delegación entre diferentes stake pools, la persistencia integrada de la cartera y ha solucionado varios problemas de la interfaz de usuario. También trabajaron en la actualización del conector DApp para permitir que se habilite con extensiones seleccionadas como las enumeradas en [CIP-95](https://cips.cardano.org/cips/cip95/), se ocuparon de actualizar Lace para responder a estos cambios y empezaron a añadir más actualizaciones a la interfaz de usuario de Lace para reflejar los distintos tipos de acciones de gobierno.

Por último, se está trabajando en el desarrollo de la DApp Store.

# SMART CONTRACTS

Por su parte, el equipo de **Plutus tools** expuso las consultas de la nueva API Marconi a través de un servidor JSON-RPC. También probaron el nuevo cardano-nodo-emulador en Marconi con fines de integración y aplazaron la creación de índices SQL en Marconi, lo que se tradujo en una mejora de los tiempos de sincronización y del rendimiento general del sistema.

En tanto el equipo de **Marlowe** mejoró el [proceso de importación de ts-sdk](https://github.com/input-output-hk/marlowe-ts-sdk/pull/27) y añadió [compatibilidad con Docker](https://github.com/input-output-hk/marlowe-cardano/pull/715) al oráculo de Marlowe. También actualizaron la [dependencia](https://github.com/input-output-hk/marlowe-cardano/pull/709) del nodo Cardano a la v.8.1.2, [trasladaron](https://github.com/input-output-hk/marlowe-cardano/pull/712) las secuencias de comandos Plutus a un [proyecto independiente](https://github.com/input-output-hk/marlowe-plutus), e investigaron el uso de la función wallet-connect con Eternl.

También trabajaron en Marlowe Runner definiendo los requisitos de la imagen Docker, implementando la posibilidad de [exportar contratos](https://github.com/input-output-hk/marlowe-playground/pull/45) de Marlowe Playground a Marlowe Runner, y [aplicando un estilo](https://github.com/input-output-hk/marlowe-runner/commit/2316a85) para las formas de Marlowe Runner coherente con el nuevo diseño. Además, [preservaron la información local](https://github.com/input-output-hk/marlowe-runner/commit/2ed9d39) de los contratos no confirmados tras la creación o la solicitud de entrada y trabajaron en la funcionalidad de Runner (por ejemplo, la lista de contratos de usuario, los botones de acción, la clasificación de tokens de rol, etc.).

Por último, el equipo añadió la [gestión de redenciones](https://github.com/input-output-hk/marlowe-cardano/pull/713) en la transmisión de contratos.

# BASHO (ESCALADO)

El equipo **Hydra** llevó a cabo la reunión mensual de revisión en colaboración con el equipo **Mithril**, mejorando así la coordinación del proyecto.

El equipo **Hydra** mejoró el comando de nodo `gen-hydra-key` para una mayor facilidad de uso e identificó pasos concretos para mejorar la resistencia de la red en los elementos de características [#188](https://github.com/input-output-hk/hydra/issues/188), [#1080](https://github.com/input-output-hk/hydra/issues/1080) y [#1079](https://github.com/input-output-hk/hydra/issues/1079). Además, aportaron la integración del editor [aiken-mode](https://github.com/aiken-lang/aiken-mode) a la organización aiken-lang, actualizaron las dependencias para utilizar cardano-api v.8.20 y publicaron el [aviso de seguridad de Hydra CVE-2023-42806](https://github.com/input-output-hk/hydra/security/advisories/GHSA-gr36-mc6v-72qq) con una solución provisional disponible para los usuarios.

El equipo **Mithril** publicó una nueva distribución [2337.0](https://github.com/input-output-hk/mithril/releases/tag/2337.0), que incluye compatibilidad con la compresión `zstandard` de archivos de instantáneas, compatibilidad con la versión del nodo Cardano en los metadatos de instantáneas y compatibilidad con el registro de estadísticas de descarga de instantáneas en el agregador.

Asimismo, completaron la refactorización y estandarización de los errores en los nodos Mithril y publicaron un [Registro de decisiones arquitectónicas](https://mithril.network/doc/adr/6) en el sitio web de documentación. Además, siguieron trabajando para añadir la protección de Cloudflare a la infraestructura.

Por último, el equipo solucionó un problema de rendimiento en la herramienta de pruebas de estrés para el agregador e introdujo algunas mejoras en la documentación de los SPO.

# VOLTAIRE

Esta semana en **Voltaire** se compartió la GovTool de Voltaire que permite a los titulares de ada registrarse para convertirse en representante delegado (DRep), delegar el poder de voto a otros DRep y revisar y votar las acciones de gobernanza. Estas capacidades son una parte fundamental de la participación en la gobernanza de la cadena en la era de Voltaire. See a [recorded demo](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd). [Únase a Intersect hoy mismo](http://intersectmbo.org/).

SanchoNet, un banco de pruebas técnicas en evolución para las acciones de gobernanza en la cadena del CIP-1694, avanzó en la hoja de ruta de las características al iniciar el desarrollo de la fase cinco. Visite [SanchoNet](https://sancho.network/) para obtener más información y únase a la conversación en [Discord](https://sancho.network/get-started/discord).

También puede unirse a la discusión técnica quincenal sobre Sancho-Wallet en [CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md), una hora abierta en el servidor Discord del IOG. Todos son bienvenidos a discutir y traer preguntas técnicas para SanchoNet y [CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md).

# CATALYST

**Se han publicado los resultados de la votación del Proyecto Catalyst** Fondo 10. Puede revisar las estadísticas y descargar una copia completa de los resultados [aquí](https://projectcatalyst.io/funds/10). Para más información sobre la validación de los resultados, consulte esta [guía](https://docs.projectcatalyst.io/catalyst-basics/voting/how-to-audit-the-vote). ¡Enhorabuena a los proyectos seleccionados, que ya están en marcha!

Como siempre, un ciclo de financiación se compone de muchas manos dentro de las operaciones del fondo y especialmente dentro de la comunidad, y como tal, nos gustaría agradecer a todos los que participaron su duro trabajo, dedicación y apoyo. También nos gustaría dar las gracias a quienes presentaron propuestas pero no consiguieron financiación en esta ocasión. Les animamos a que revisen los comentarios recibidos y vuelvan a intentarlo en el próximo fondo.

En las próximas semanas, el Proyecto Catalyst entrará en un periodo de enfriamiento programado antes de entrar en el siguiente ciclo de financiación. Pronto compartiremos más actualizaciones, así que permanezca atento a las novedades. Si aún no lo ha hecho, registre su deseo de asistir al próximo [ayuntamiento](http://bit.ly/catalyst-townhall).

En el aspecto técnico de Catalyst, la semana pasada, el equipo

*   creó un nuevo entorno de pruebas local para permitir el desarrollo con el backend más reciente
    
*   trabajó en el desarrollo para limitar el tamaño de los lotes de votación y mejorar los tiempos de carga de las propuestas
    
*   completó las propuestas de interfaz de usuario para la herramienta de pruebas de carga (solo depuración), filtró las propuestas no votadas e implementó filtros para las subcategorías
    
*   discutió el nuevo enfoque de las pruebas de carga y empezó a trabajar en las actualizaciones de la herramienta de instantáneas para apoyar los objetivos
    
*   trabajó en la adición de métricas de registro al registro para la herramienta de instantáneas, además de actualizaciones para el nuevo marco de pruebas de carga
    
*   continuó el desarrollo del generador de fragmentos para mejorar las capacidades de prueba
    
*   estableció nuevos proyectos Jira y GitHub para ejecutar las propuestas de mejora del sistema F10 financiadas - Voices/Hermes.
    

Por último, para estar al día de todo lo que ocurre en el Proyecto Catalyst, únase al [canal de anuncios de Telegram de Catalyst](https://t.me/cardanocatalyst).

# EDUCACIÓN

Esta semana, el equipo de **Educación** está reflexionando sobre el gran éxito del evento _Cardano Days_ celebrado en la Universidad de Malta la semana pasada. Están trabajando en la recopilación de comentarios de los participantes y trabajando en las lecciones aprendidas dentro del equipo. También siguen impartiendo el curso virtual de Haskell con ABC.
