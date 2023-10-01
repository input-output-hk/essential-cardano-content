---
title: Weekly development report as of 2023-09-22
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f44366fb-1e56-493a-a01a-a5c4c77b0b2f/
image_text: Weekly development report as of 2023-09-22
---

### CORE TECHNOLOGY

This week in core technology, the **networking** team focused on developing [bootstrap peers](https://github.com/input-output-hk/ouroboros-network/issues/4675), [worked](https://github.com/input-output-hk/cardano-node/pull/5467) on the node v.8.4.0-pre release, and published the new versions of ouroboros-consensus, cardano-api, and cardano-cli. Work is ongoing on typed protocols; the team updated the future typed-protocols-0.2.0.0 and their integration with cardano-node.

The **ledger** team remained focused on the Conway era features implementation. They added the ability to specify the initial constitutional committee, introduced the initial version of the constitution, and aligned the priority of governance actions with the specification. Additionally, the team ensured the proper accounting of DReps’ deposits.

Finally, the team addressed several CDDL issues, conducted numerous new round-trip serialization tests, and made significant enhancements to the constraint-based testing framework.

The **consensus** team suggested a fix for the observed mempool forging issue in the UTXO-HD branch, pending confirmation through system-level benchmarks. They also kept developing a fallback mechanism to maintain the Cardano node's baseline performance in case UTXO-HD performance is not enough.

Regarding Genesis development, the team confirmed with the researchers that the proposed design aligns with the requirements for the historical Cardano chain. They also proposed a solution to address a protocol version error detected in SanchoNet after transitioning to Conway.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team made progress on the multi-delegation portfolio adjustments, fixed some issues related to unregistering a pool, worked on test coverage for Trezor support, and on UI/UX workflow for the DApp Store. They also kept working on CIP-95 functionality, focusing on transaction signing and data.

### SMART CONTRACTS

This week, the **Plutus** tools team kept rewriting Marconi EpochState indexers with a simplified API, exposing the queries of the new Marconi API via a JSON-RPC server. They also updated the cardano-emulator package to use cardano-api v.8.8 and worked on optimizing the new Marconi API for better performance.

The Plutus Core team added a new command-line flag, `--builtin-semantics-variant` (or `-B`) to the `uplc` and `plc` binaries, allowing one to choose which variant of the builtin semantics to use when evaluating a program. You can run `uplc evaluate --help` for more information.

The **Marlowe** team worked on the `ts-sdk` examples, created a [CIP-45 DApp](https://github.com/input-output-hk/marlowe-starter-kit/pull/41) for generating payouts, determined the highest compatible version of cardano-api with cardano-node v. 8.1.2, resolved some [Marlowe validator issues](https://github.com/input-output-hk/marlowe-cardano/pull/710), and ran additional validator benchmarks. The team also added [support](https://github.com/input-output-hk/marlowe-cardano/pull/699) for querying contracts by party addresses, removed [all dependencies](https://github.com/input-output-hk/marlowe-cardano/pull/702) on the plutus-apps repository, and separated direct dependency on the PlutusTx plugin in marlowe-cardano-packages. Additionally, they [uploaded](https://github.com/input-output-hk/marlowe-runner/commit/0d5cd9d) a JSON contract for creation in Marlowe Runner, extended [testing](https://github.com/input-output-hk/marlowe-cardano/pull/669) of the open role validator resource consumption, ran DSL testing [simulations](https://github.com/input-output-hk/marlowe-cardano/pull/669), integrated an [analytics tool](https://github.com/input-output-hk/marlowe-cardano/pull/669) into Marlowe CLI DSL, and [filtered contracts](https://github.com/input-output-hk/marlowe-runner/pull/8) by address/role token.

Finally, the team created different repositories for extracted libraries and generated a [Marlowe language syntax guide](https://github.com/input-output-hk/marlowe/pull/195). 

### BASHO (SCALING)

This week, the majority of the **Hydra** and **Mithril** teams participated in a Cardano scaling workshop in Nantes, France. During this event, they identified synergies, spent time coding together, and discussed past achievements and future plans for both projects. 

Additionally, the **Hydra** team [resolved a bug](https://github.com/input-output-hk/hydra/pull/1053) that was causing hydra-node to crash when querying layer 1, worked on a new [proof-of-concept](https://github.com/input-output-hk/hydra/pull/1074) for network resilience, and accepted a new ADR related to stateless transaction observation.

Also, the **Mithril** team completed the refactoring of the terraform deployment workflows in GitHub actions, and the implementation of [snapshot compression parameters](https://github.com/input-output-hk/mithril/issues/1200) in the deployments. They kept working on the refactoring and standardization of the errors in Mithril nodes. The team also completed the implementation of [Cloudflare protection](https://github.com/input-output-hk/mithril/issues/986) for the aggregator infrastructure and started working on its deployment and activation in the Mithril networks. Additionally, they worked on [recording download statistics](https://github.com/input-output-hk/mithril/issues/1127) on the aggregator, which will be used to produce usage reports. 

Finally, the team made progress working on the aggregator performance bottleneck that occurs with high client traffic and started creating a [new distribution](https://github.com/input-output-hk/mithril/issues/1219).

### VOLTAIRE

This week in **Voltaire**, [Intersect](https://intersectmbo.org) hosted a town hall, which faced some technical challenges that prohibited the planned GovTool demo. The Voltaire GovTool enables ada holders to register to become a delegate representative (DRep), delegate voting power to other DReps, and review and vote on governance actions. These capabilities are a critical part of on-chain governance participation in the age of Voltaire. [A recorded demo](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd) has been shared for review. [Join Intersect today](http://intersectmbo.org/).

SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions, continues progress on the features roadmap by stating phase 4 development. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord). 

You can also join the bi-weekly Sancho-Wallet technical discussion around [CIP-95, an open](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md) hour on the IOHK Discord. All are welcome to discuss and bring technical questions for SanchoNet and [CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md). 

### CATALYST

The results of the **Project Catalyst** Fund10 vote were announced on Thursday. During this week’s town hall, the team presented some of the recent closed-out project videos.

You can rewatch the segment from the main town hall [here](https://www.youtube.com/watch?v=dvCute40GNw&t=2s). If you haven’t already, make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

Finally, to stay up to date with everything happening in Project Catalyst, bookmark the past issues of the weekly newsletter [here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

### EDUCATION

This week, the **Education** team is on site in Malta delivering the _Cardano Days_ event at the Center for Distributed Ledger Technologies in the [University of Malta](https://www.um.edu.mt/dlt/). Dr.Lars Brünjes and the team are also invited to speak at the [Crypto Hub Malta](https://cryptohubmalta.org/) event.

![](https://ucarecdn.com/8cf21dff-7025-464a-b055-c0d3bfd6b958/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コアテクノロジーに関しては、 **ネットワーキング**チームは[ブートストラップピア](https://github.com/input-output-hk/ouroboros-network/issues/4675)の開発に焦点を当て、ノードv.8.4.0-preのリリースに[取り組み](https://github.com/input-output-hk/cardano-node/pull/5467)、ouroboros-consensus、cardano-api、cardano-cliの新バージョンを公開しました。型付きプロトコルに関する作業は進行中であり、将来の型付きプロトコル0.2.0.0とcardano-nodeとの統合を更新しました。

**台帳**チームは引き続き、Conway期の機能の実装に焦点を当てました。最初の憲法委員会を指定する機能を追加し、憲法の最初のバージョンを導入し、ガバナンスアクションの優先順位を仕様に合わせました。DRepのデポジットの適切な会計処理を確保しました。

CDDLの諸問題に対処し、新しいラウンドトリップシリアル化テストを多数実施し、制約ベースのテストフレームワークを大幅に強化しました。

**コンセンサス**チームは、UTXO-HDブランチで確認されたメモリープール作成に関する不具合の修正を提案しましたが、システムレベルのベンチマークによる確認は保留されています。UTXO-HDのパフォーマンスが不十分な場合に備えて、Cardanoノードのベースラインパフォーマンスを維持するフォールバックメカニズムの開発も続けました。

Genesis開発に関しては、提案された設計がCardanoチェーン履歴の要件と一致することを研究者と確認しました。Conwayへの移行後にSanchoNetで検出されたプロトコルバージョンエラーに対処するソリューションも提案しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace** チームはマルチ委任ポートフォリオの調整を進め、プールの登録解除に関する不具合を修正し、Trezorサポートのテストカバレッジ、DAppストアのUI/UXワークフローに取り組みました。トランザクションの署名とデータに焦点を当てたCIP-95の機能への取り組みも続けました。

### スマートコントラクト

**Plutus**ツールチームは、簡素化されたAPIでMarconi EpochStateインデクサーを書き換える作業を続け、JSON-RPCサーバーを介して新しいMarconi APIのクエリを公開しました。cardano-api v.8.8を使用するようにcardano-emulatorパッケージを更新し、新しいMarconi APIのパフォーマンスを向上させるための最適化に取り組みました。

Plutus Coreチームは、新しいコマンドラインフラグ--builtin-semantics-variant（または-B）をuplcバイナリとplcバイナリに追加し、プログラムを評価するときに組み込みセマンティクスのどのバリアントを使用するかを選択できるようにしました。詳細は、uplc evaluate --helpを実行してください。

**Marlowe**チームは、ts-sdkの例に取り組み、支払いを生成するための[CIP-45 DApp](https://github.com/input-output-hk/marlowe-starter-kit/pull/41)を作成し、cardano-node v.8.1.2と互換性のあるcardano-apiの最高バージョンを特定し、[Marloweバリデーターの問題](https://github.com/input-output-hk/marlowe-cardano/pull/710)を解決し、追加のバリデーターベンチマークを実行しました。当事者アドレスによるコントラクトのクエリの[サポート](https://github.com/input-output-hk/marlowe-cardano/pull/699)を追加し、plutus-appsリポジトリへの[すべての依存関係](https://github.com/input-output-hk/marlowe-cardano/pull/702)を削除し、marlowe-cardano-packagesのPlutusTxプラグインへの直接依存関係を分離しました。Marlowe Runnerで作成するためのJSONコントラクトの[アップロード](https://github.com/input-output-hk/marlowe-runner/commit/0d5cd9d)、オープンロールバリデーターリソース消費の拡張[テスト](https://github.com/input-output-hk/marlowe-cardano/pull/669)、DSLテスト[シミュレーション](https://github.com/input-output-hk/marlowe-cardano/pull/669)の実行、 Marlowe CLI DSLへの[分析ツール](https://github.com/input-output-hk/marlowe-cardano/pull/669)の統合、アドレス/ロールトークンによる[コントラクトのフィルタリング](https://github.com/input-output-hk/marlowe-runner/pull/8)などを行いました。

抽出されたライブラリー用に別のリポジトリを作成し、[Marlowe言語構文ガイド](https://github.com/input-output-hk/marlowe/pull/195)を生成しました。 

### BASHO（スケーリング）

**Hydra**チームと**Mithril**チームの大半は、フランスのナントで開催されたCardanoスケーリングワークショップに参加しました。今回のイベントでは、シナジーを見極め、時間をかけて共にコーディングし、両プロジェクトの過去の実績や今後の計画について話し合いました。 

**Hydra**チームは、レイヤー1のクエリ時にhydra-nodeがクラッシュする原因となっていた[バグを解決](https://github.com/input-output-hk/hydra/pull/1053)し、ネットワーク回復性の新しい[概念実証](https://github.com/input-output-hk/hydra/pull/1074)に取り組み、ステートレストランザクション監視に関連する新しいADRを受け入れました。

**Mithril**チームは、GitHubアクションでのTerraformデプロイワークフローのリファクタリングと、デプロイでの[スナップショット圧縮パラメーター](https://github.com/input-output-hk/mithril/issues/1200)の実装を完了しました。Mithrilノードのエラーのリファクタリングと標準化にも取り組みました。アグリゲーターインフラ用[Cloudflare保護](https://github.com/input-output-hk/mithril/issues/986)の実装を完了し、Mithrilネットワークでのデプロイとアクティベーションに着手しました。アグリゲーターに[ダウンロード統計を記録](https://github.com/input-output-hk/mithril/issues/1127)しました。これは、使用状況レポートを作成するために使用されます。 

クライアントトラフィックが多い場合に発生するアグリゲーターのパフォーマンスボトルネックに取り組み、[新しいディストリビューション](https://github.com/input-output-hk/mithril/issues/1219)の作成を開始しました。

### VOLTAIRE

**Voltaire**に関しては、[Intersect](https://intersectmbo.org)がタウンホールを主催しましたが、技術的な問題によって予定していたGovToolのデモができなくなりました。Voltaire GovToolを使用すると、ADA保有者は、DRep（デリゲーター代表）になるための登録、他の代表への投票権の委任、ガバナンスアクションのレビューおよび投票を行うことができます。これらの機能は、Voltaire期におけるオンチェーンガバナンス参加に不可欠です。レビュー用に[デモの録画](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd)が共有されています。[今すぐIntersectに参加してください](http://intersectmbo.org/)。

CIP-1694のオンチェーンガバナンスアクションのための進化する技術テストベッドSanchoNetは、開発フェーズ4を表明することで、機能ロードマップの進捗を継続しています。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。 

CIP-95に関する隔週のSancho-Walletテクニカルディスカッション、IOHK Discordのオープンアワーに参加することもできます。SanchoNetと[CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md)に関する議論、技術的な質問を歓迎します。 

### CATALYST

**Project Catalyst** Fund10の投票結果が木曜日に発表されました。今週のタウンホールでは、チームが最近完了したプロジェクトの動画を紹介しました。

[ここ](https://www.youtube.com/watch?v=dvCute40GNw&t=2s)で、メインタウンホールからセグメントを再視聴できます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。

[ここから](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)週刊ニュースレターの過去の号をブックマークして、Project Catalystのすべての情報を入手してください。

### 教育

今週、**教育**チームはマルタ大学の分散型台帳技術センターでCardano Daysイベントを開催しています。Lars Brünjes博士とチームは、[Crypto Hub Malta](https://cryptohubmalta.org/)イベントに講演者として招かれています。

# TECNOLOGÍA CENTRAL

Esta semana en tecnología central, el equipo de **networking** se centró en el desarrollo de [bootstrap peers](https://github.com/input-output-hk/ouroboros-network/issues/4675), [trabajó](https://github.com/input-output-hk/cardano-node/pull/5467) en la versión previa de node v.8.4.0, y publicó las nuevas versiones de ouroboros-consensus, cardano-api y cardano-cli. Se sigue trabajando en los protocolos tipados; el equipo actualizó el futuro typed-protocols-0.2.0.0 y su integración con cardano-node.

El equipo de **ledger** siguió centrado en la implementación de las características de la era Conway. Añadieron la capacidad de especificar el comité constitucional inicial, introdujeron la versión inicial de la constitución y alinearon la prioridad de las acciones de gobierno con la especificación. Además, se garantizó la correcta contabilización de los depósitos de los DReps.

Por último, se abordaron varios problemas de CDDL, se realizaron numerosas pruebas nuevas de serialización de ida y vuelta y se introdujeron mejoras significativas en el marco de pruebas basado en restricciones.

El equipo de **consenso** sugirió una solución para el problema de falsificación de la mempool observado en la rama UTXO-HD, pendiente de confirmación mediante pruebas comparativas a nivel de sistema. También siguieron desarrollando un mecanismo de reserva para mantener el rendimiento básico del nodo Cardano en caso de que el rendimiento de UTXO-HD no sea suficiente.

En cuanto al desarrollo de Génesis, el equipo confirmó con los investigadores que el diseño propuesto se ajusta a los requisitos de la cadena Cardano histórica. También propusieron una solución para abordar un error de versión de protocolo detectado en SanchoNet tras la transición a Conway.

Como siempre, consulte [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** avanzó en los ajustes de la cartera multidelegación, solucionó algunos problemas relacionados con la anulación del registro de un pool, trabajó en la cobertura de pruebas para la compatibilidad con Trezor y en el flujo de trabajo UI/UX para la DApp Store. Siguieron trabajando también en la funcionalidad CIP-95, centrándose en la firma de transacciones y en los datos.

#CONTRATOS INTELIGENTES

El equipo de herramientas de **Plutus** siguió reescribiendo los indexadores Marconi EpochState con una API simplificada, exponiendo las consultas de la nueva API Marconi a través de un servidor JSON-RPC. También actualizaron el paquete cardano-emulator para utilizar cardano-api v.8.8 y trabajaron en la optimización de la nueva API Marconi para un mejor rendimiento.

El equipo de Plutus Core añadió una nueva bandera de línea de comandos, `--builtin-semantics-variant` (o `-B`) a los binarios `uplc` y `plc`, que permite elegir qué variante de la semántica builtin utilizar al evaluar un programa. Puede ejecutar `uplc evaluate --help` para obtener más información.

El equipo **Marlowe** ha trabajado en los ejemplos `ts-sdk`, ha creado una [DApp CIP-45](https://github.com/input-output-hk/marlowe-starter-kit/pull/41) para generar pagos, ha determinado la versión más compatible de cardano-api con cardano-node v. 8.1.2, ha resuelto algunos [problemas del validador Marlowe](https://github.com/input-output-hk/marlowe-cardano/pull/710) y ha ejecutado pruebas comparativas adicionales del validador. El equipo también añadió [soporte](https://github.com/input-output-hk/marlowe-cardano/pull/699) para la consulta de contratos por direcciones de las partes, eliminó [todas las dependencias](https://github.com/input-output-hk/marlowe-cardano/pull/702) del repositorio plutus-apps, y separó la dependencia directa del plugin PlutusTx en marlowe-cardano-packages. Además, [subieron](https://github.com/input-output-hk/marlowe-runner/commit/0d5cd9d) un contrato JSON para su creación en Marlowe Runner, ampliaron [las pruebas](https://github.com/input-output-hk/marlowe-cardano/pull/669) del consumo de recursos del validador de roles abierto, realizaron [simulaciones](https://github.com/input-output-hk/marlowe-cardano/pull/669) de pruebas DSL, integraron una [herramienta de análisis](https://github.com/input-output-hk/marlowe-cardano/pull/669) en Marlowe CLI DSL y [filtraron los contratos](https://github.com/input-output-hk/marlowe-runner/pull/8) por tokens de dirección/rol.

Finalmente, crearon distintos repositorios para las bibliotecas extraídas y generaron una [guía de sintaxis del lenguaje Marlowe](https://github.com/input-output-hk/marlowe/pull/195).

\---

# BASHO ( ESCALADO)

La mayoría de los equipos **Hydra** y **Mithril** participaron en un taller de escalado de Cardano en Nantes, Francia. Durante este evento, identificaron sinergias, pasaron tiempo codificando juntos y discutieron los logros pasados y los planes futuros de ambos proyectos.

Además, el equipo **Hydra** [resolvió un error](https://github.com/input-output-hk/hydra/pull/1053) que provocaba el bloqueo del nodo hydra al consultar la capa 1, trabajó en una nueva [proof-of-work](https://github.com/input-output-hk/hydra/pull/1074) para la resiliencia de la red y aceptó una nueva ADR relacionada con la observación de transacciones sin estado.

Por su parte, el equipo **Mithril** completó la refactorización de los flujos de trabajo de despliegue de terraformación en acciones GitHub, y la implementación de [parámetros de compresión de instantáneas](https://github.com/input-output-hk/mithril/issues/1200) en los despliegues. Siguieron trabajando en la refactorización y estandarización de los errores en los nodos Mithril. El equipo también completó la implementación de [protección Cloudflare](https://github.com/input-output-hk/mithril/issues/986) para la infraestructura del agregador y comenzó a trabajar en su despliegue y activación en las redes Mithril. Además, trabajaron en el [registro de estadísticas de descarga](https://github.com/input-output-hk/mithril/issues/1127) en el agregador, que se utilizará para elaborar informes de uso.

Por último, el equipo avanzó trabajando en el cuello de botella de rendimiento del agregador que se produce con un alto tráfico de clientes y comenzó a crear una [nueva distribución](https://github.com/input-output-hk/mithril/issues/1219).

# VOLTAIRE

Esta semana, en **Voltaire**, [Intersect](https://intersectmbo.org/) organizó un ayuntamiento, que se enfrentó a algunos problemas técnicos que impidieron realizar la demostración prevista de GovTool. El GovTool de Voltaire permite a los titulares de ada registrarse para convertirse en representantes delegados (DRep), delegar el poder de voto en otros DRep y revisar y votar las acciones de gobernanza. Estas capacidades son una parte fundamental de la participación en la gobernanza de la cadena en la era de Voltaire. [Se ha compartido una demostración grabada](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd) para su revisión. [Únase a Intersect hoy mismo](http://intersectmbo.org/).

SanchoNet, un banco de pruebas técnicas en evolución para las acciones de gobernanza en la cadena del CIP-1694, continúa avanzando en la hoja de ruta de las características al iniciar el desarrollo de la fase 4. Visite [SanchoNet](https://sancho.network/) para obtener más información y únase a la conversación en [Discord](https://sancho.network/get-started/discord).

También puede sumarse a la discusión técnica quincenal de Sancho-Wallet en torno a [CIP-95, una hora abierta](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md) en el Discord del IOG. Todos son bienvenidos a discutir y aportar preguntas técnicas para SanchoNet y [CIP-95](https://github.com/cardano-foundation/CIPs/blob/master/CIP-0095/README.md).

# PROYECTO CATALYST

El jueves se anunciaron los resultados de la votación del **Proyecto Catalyst** Fondo 10. Durante el ayuntamiento de esta semana, el equipo presentó algunos de los vídeos recientes de los proyectos cerrados.

Puede volver a ver el segmento del ayuntamiento principal [aquí](https://www.youtube.com/watch?v=dvCute40GNw&t=2s). Si aún no lo ha hecho, asegúrese de registrar su asistencia al [próximo ayuntamiento](http://bit.ly/catalyst-townhall).

Por último, para mantenerse al día de todo lo que ocurre en el Proyecto Catalyst, marque los números anteriores del boletín semanal [aquí](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

# EDUCACIÓN

Esta semana, el equipo de **Educación** se encuentra en Malta impartiendo el evento _Cardano Days_ en el Centro de Tecnologías de Ledger Distribuido de la [Universidad de Malta](https://www.um.edu.mt/dlt/). El Dr.Lars Brünjes y el equipo también están invitados a hablar en el evento [Crypto Hub Malta](https://cryptohubmalta.org/).
