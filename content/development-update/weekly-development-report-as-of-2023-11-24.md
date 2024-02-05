---
title: Weekly development report as of 2023-11-24
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/914cf924-3c0c-4dd0-aa89-1aacaf925ef5/
image_text: ""
---

This week, the **core technology** teams published the [initial security analysis and responses for CIP-1694](https://input-output-hk.github.io/cardano-updates/2023-11-20-cip1694). The analysis covers various aspects, such as the constitutional committee, committee size, terms, registered DReps, ratification, content, protocol parameter groups, votes, separation of hard fork initiation from standard protocol parameter changes, and post-Edinburgh workshop updates. It also includes discussions on reducing deposits for specific governance actions.

Over the past weeks, the **networking** team has continued reviewing [bootstrap peers' implementation](https://github.com/input-output-hk/ouroboros-network/pull/4555), prepared presentation slides for a Haskell meetup where they discussed IOSimPOR, and worked on refactoring the [IOSim code base](https://github.com/input-output-hk/io-sim/pull/117). They also [released io-sim-1.3.0.0](https://github.com/input-output-hk/io-sim/pull/119) on Hackage and addressed technical debt by [refactoring the resource](https://github.com/input-output-hk/ouroboros-network/pull/4707) used by the DNS subsystem and reviewing [RootPeersDNS module refactoring](https://github.com/input-output-hk/ouroboros-network/pull/4625).

The **ledger** team focused on testing, bug fixes, and improving the clarity of the CDDL specification. The team fixed the deserialization of `ValueNotConservedUTxO` predicate failure, ensuring accurate reporting of zero ada, and addressed the deserialization of `CostModels` in the `PParamsUpdate`, allowing only valid `CostModels` for unrecognized Plutus versions starting with Conway.

Finally, they fixed the return of deposits for `ProposalProcedures`, improved testing tooling, and implemented new tests for the Conway era. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team focused on a quick update to version 1.7.1. This release addresses several issues, including those associated with the DApp connection to the Lace wallet. Additionally, the team implemented enhancements to optimize the interaction between Lace and ada handles by resolving challenges arising from slow network disruptions affecting the send flow, and fixing some issues with transaction bundles specific to wallets with ada handles. 

### SMART CONTRACTS

The **Plutus** **tools** team continued working on the Marconi API queries, Marconi cardano-node-emulator, and documentation improvements. The Plutus Core team fixed a bug in Plutus Tx that caused the compilation to fail with a ‘Cannot case on a value’ error when using BLS primitives.

This week, the **Marlowe** team [updated](https://github.com/input-output-hk/marlowe-plutus/pull/7/commits/0837bda9ea09530e89acb61dad21c5954ebf23e7#r1397610189) the marlowe-plutus repository, upgraded `plutus` [dependencies](https://github.com/input-output-hk/marlowe-cardano/pull/753) for \`marlowe-plutus, and [upgraded](https://github.com/input-output-hk/marlowe/pull/198) the Marlowe repository to IOGX and GHC v.9.2.8. They also [added](https://github.com/input-output-hk/marlowe-ts-sdk/pull/89) `computeTransaction` to the TS-SDK to allow contract unit testing, [changed the initial time](https://github.com/input-output-hk/marlowe-playground/pull/57) for counterexamples to be shown in a readable way in Marlowe Playground, and improved the form structure in the ‘Apply inputs’ flow in Marlowe Runner. 

Finally, they ensured that accounts are positive in [Agda semantics](https://github.com/input-output-hk/marlowe-agda/blob/fb075463d18462522d69bc4b55653c13418a8cad/src/Marlowe/Language/State.agda#L25).

### SCALING

This week, the **Hydra** team addressed misleading errors regarding ‘collect com’ transactions, resolved a [security advisory](https://github.com/input-output-hk/hydra/security/advisories/GHSA-gr36-mc6v-72qq) issue, and simplified the Hydra Head protocol by [using inline datums](https://github.com/input-output-hk/hydra/pull/1162). The team also tackled minor [inconsistencies](https://github.com/input-output-hk/hydra/issues/1104) in specifications and implementation, [documented reasons](https://github.com/input-output-hk/hydra/issues/1039) for potentially dropped `close` transactions by the Cardano node, and collaborated with SundaeLabs on an offline mode for the Hydra node. Additionally, they engaged in discussions with researchers about incremental de-/commits.

This week, the **Mithril** team made progress in decentralizing the Mithril networks with the peer-to-peer (P2P) networking proof of concept, [completing the first prototype](https://github.com/input-output-hk/mithril/issues/1326) implementation of the Mithril relay, which enables P2P signature broadcasting. They also made progress in optimizing the [performance of the aggregator](https://github.com/input-output-hk/mithril/issues/1327). Additionally, the team completed some enhancements on the [CI/CD](https://github.com/input-output-hk/mithril/issues/1355) that will help [manually deploy](https://github.com/input-output-hk/mithril/issues/1356) experimental Mithril networks for SanchoNet, as well as for the new P2P network layer.

Finally, they investigated occasional runtime issues causing delays for certain SPOs and started preparing for the next distribution release.

### VOLTAIRE

This week, the **Voltaire** team continued preparing for the special Cardano Ballot vote to assess progress in on-chain and off-chain governance with CIP-1694. The snapshot for participating wallets was taken on November 21, and the vote runs from December 1 to December 11. Ada holders are encouraged to use this opportunity to express their stance on CIP-1694 governance progress.

### CATALYST

This week, **Project Catalyst** continued its regular broadcast with a weekly town hall on Wednesdays at 5 PM UTC. You can rewatch [this week’s segment here](https://www.youtube.com/watch?v=_5n7KaOAvWM) or register for the next one [via this page](https://projectcatalyst.io/news/town-hall). 

In other news, the milestone module integration with the [Project Catalyst website](https://projectcatalyst.io/) is now complete. Additionally, a full data refresh has been executed, encompassing the Fund10 cohort data. This enables users to efficiently track the progress of each funded project within [the milestone program](https://docs.projectcatalyst.io/project-catalyst-funds/previous-funds/fund10/how-to-submit-project-milestones). Simply search [your preferred Fund10 project](https://projectcatalyst.io/funds/10) and navigate to the overview page to find the progress bar and link to [actual milestones](https://milestones.projectcatalyst.io/). This marks another significant achievement in enhancing overall accountability for fundees. 

Finally, registration for the community review stage has opened this week. If you’d like to help evaluate projects before they proceed to the voting phase, visit [cardano.ideascale.com](//cardano.ideascale.com) and register via the pop-up form right after logging in. 

### EDUCATION

This week, the **Education** team continued the delivery of the internal Maths Academy course. They also worked on Marlowe education tasks.

![](https://ucarecdn.com/94f27255-be23-427d-803e-18f65b0a1eee/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**チームは、[CIP-1694初期セキュリティの分析と対応](https://input-output-hk.github.io/cardano-updates/2023-11-20-cip1694)を発表しました。分析は、憲法委員会、委員会の規模、条件、登録済みDRep、批准、コンテンツ、プロトコルパラメーターグループ、投票、標準プロトコルパラメーター変更からのハードフォーク開始の分離、およびエディンバラワークショップ後の更新といった、さまざまな側面をカバーしています。特定のガバナンス行動のデポジットの値下げに関する議論も含まれています。

 この数週間、**ネットワーキング**チームは、[ブートストラップピアの実装](https://github.com/input-output-hk/ouroboros-network/pull/4555)のレビューを続け、Haskellミートアップのプレゼンテーションスライドを準備し、そこでIOSimPORについて議論し、[IOSimコードベース](https://github.com/input-output-hk/io-sim/pull/117)のリファクタリングに取り組みました。Hackageで[io-sim-1.3.0.0をリリース](https://github.com/input-output-hk/io-sim/pull/119)し、DNSサブシステムで使用する[リソースをリファクタリング](https://github.com/input-output-hk/ouroboros-network/pull/4707)し、[RootPeersDNSモジュールのリファクタリング](https://github.com/input-output-hk/ouroboros-network/pull/4625)をレビューすることで技術負債に対処しました。

**台帳**チームは、テスト、バグの修正、CDDL仕様の明確化に焦点を当てました。ValueNotConservedUTxOの述部失敗の逆シリアル化を修正し、ゼロADAのレポートの正確性を確保し、PParamsUpdateのCostModelsの逆シリアル化に対処しました。これにより、Conwayで始まる認識されていないPlutusバージョンに対して有効なCostModelsだけが許可されるようになります。

ProposalProceduresのデポジットの返還を修正し、テストツールを改良し、Conway期の新しいテストを実装しました。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームはバージョン1.7.1へのクイックアップデートに焦点を当てました。このリリースでは、DAppのLaceウォレットへの接続に関連する問題など、いくつかの問題が解決されています。送信フローに影響を与えるネットワークの遅さから生じる問題を解決し、ADAハンドルを使用しているウォレットに生じるトランザクションバンドルの問題を修正した、LaceとADAハンドル間のインタラクションを最適化するための拡張を実装しました。 

### スマートコントラクト

**Plutusツール**チームは、Marconi APIクエリ、Marconi cardano-node-emulator、ドキュメントの改訂への取り組みを続けました。Plutus Coreチームは、BLSプリミティブを使用するときにコンパイルが「cannot case on a value」エラーで失敗する原因となったPlutus Txのバグを修正しました。

**Marlowe**チームは Marlowe-plutusリポジトリを[更新](https://github.com/input-output-hk/marlowe-plutus/pull/7/commits/0837bda9ea09530e89acb61dad21c5954ebf23e7#r1397610189)し、marlowe-plutusの[依存関係](https://github.com/input-output-hk/marlowe-cardano/pull/753)をmarlowe-plutusにアップグレードし、MarloweリポジトリをIOGXとGHC v.9.2.8に[アップグレード](https://github.com/input-output-hk/marlowe/pull/198)しました。TS-SDKに[computeTransactionを追加](https://github.com/input-output-hk/marlowe-ts-sdk/pull/89)してコントラクトユニットテストを可能にし、 Marlowe Playgroundで読みやすく表示するように反例の[初期時間を変更](https://github.com/input-output-hk/marlowe-playground/pull/57)し、 Marlowe Runnerの「入力の適用」フローのフォーム構造を改善しました。 

[AGDAのセマンティクス](https://github.com/input-output-hk/marlowe-agda/blob/fb075463d18462522d69bc4b55653c13418a8cad/src/Marlowe/Language/State.agda#L25)においてアカウントがポジティブになるようにしました。

### スケーリング

**Hydra**チームは、collect comトランザクションに関する誤解を招くエラーに対処し、[セキュリティアドバイザリー](https://github.com/input-output-hk/hydra/security/advisories/GHSA-gr36-mc6v-72qq)の問題を解決し、[インラインデータムを使用して](https://github.com/input-output-hk/hydra/pull/1162)Hydra Headプロトコルを簡素化しました。仕様と実装のわずかな[不整合](https://github.com/input-output-hk/hydra/issues/1104)にも取り組み、Cardanoノードによるクローズトランザクションがドロップされる可能性がある[理由を文書化](https://github.com/input-output-hk/hydra/issues/1039)し、HydraノードのオフラインモードでSundaeLabsと協力しました。研究者との間で、漸次的コミット解除/コミットについての議論も行いました。

**Mithril**チームは、P2Pネットワークの概念実証を用いてMithril ネットワークの分散化を進め、Mithrilリレーの[最初のプロトタイプ](https://github.com/input-output-hk/mithril/issues/1326)実装を完了しました。これは、P2P署名のブロードキャストを可能にします。[アグリゲーターのパフォーマンス](https://github.com/input-output-hk/mithril/issues/1327)の最適化も進めました。[CI/CD](https://github.com/input-output-hk/mithril/issues/1355)の機能強化を完了しました。これは、SanchoNetの実験的なMithrilネットワークと新しいP2Pネットワーク層の[手動デプロイ](https://github.com/input-output-hk/mithril/issues/1356)に役立ちます。

特定のSPOに時おり遅延を引き起こすランタイム問題を調査し、次のディストリビューションリリースの準備を始めました。

### VOLTAIRE

Voltaireチームは、CIP-1694によるオンチェーンおよびオフチェーンガバナンスの進捗を評価するために、Cardano Ballotを使った投票の準備を続けました。参加ウォレットのスナップショットは11月21日に撮影されました。投票期間は12月1日から12月11日までです。ADA保有者は、この機会にCIP-1694ガバナンスの進展についての姿勢を表明することが奨励されます。

### CATALYST

**Project Catalyst**は、毎週水曜日午後5時（UTC）からの定期的なタウンホール配信を続けました。[今週のセグメントはこちら](https://www.youtube.com/watch?v=_5n7KaOAvWM)で再視聴できます。また、次回タウンホールには[このページ](https://projectcatalyst.io/news/town-hall)から登録してください。 

[Project Catalystウェブサイト](https://projectcatalyst.io/)とマイルストンモジュールの統合が完了しました。Fund10コホートデータを含む完全なデータ更新が実行されました。これにより、ユーザーは[マイルストンプログラム](https://docs.projectcatalyst.io/project-catalyst-funds/previous-funds/fund10/how-to-submit-project-milestones)内で資金提供された各プロジェクトの進捗状況を効率的に追跡できます。[見たいFund10プロジェクト](https://projectcatalyst.io/funds/10)を検索し、概要ページに移動すると、進捗バーと実際のマイルストンへのリンクが見つかります。これは、資金提供を受けた人々の全体的な説明責任の強化という点で重要な成果となります。 

コミュニティレビューステージの登録が、今週開始されました。投票フェーズに進む前のプロジェクト評価に参加を希望する場合は、[cardano.ideascale.com](//cardano.ideascale.com)で、ログイン後に表示されるポップアップフォームから登録してください。 

### 教育

**教育**チームは、引き続き社内向けのMaths Academyコースを実施しました。Marlowe教育に関するタスクにも取り組みました。

\---

Esta semana, los equipos de **tecnología de núcleo** publicaron el [análisis inicial de seguridad y respuestas para el CIP-1694](https://input-output-hk.github.io/cardano-updates/2023-11-20-cip1694). En él se tratan diversos aspectos, como el comité constitucional, el tamaño del comité, los plazos, los DReps registrados, la ratificación, el contenido, los grupos de parámetros de protocolo, las votaciones, la separación entre el inicio de un hard fork y los cambios en los parámetros de protocolo estándar, y las actualizaciones posteriores al taller de Edimburgo. Incluye también debates sobre la reducción de depósitos para acciones de gobierno específicas.

A lo largo de las últimas semanas, el equipo de **networking** ha seguido revisando [la implementación de los compañeros de bootstrap](https://github.com/input-output-hk/ouroboros-network/pull/4555), ha preparado diapositivas de presentación para un encuentro de Haskell en el que debatieron sobre IOSimPOR, y ha trabajado en la refactorización de la [base de código de IOSim](https://github.com/input-output-hk/io-sim/pull/117). También [publicaron io-sim-1.3.0.0](https://github.com/input-output-hk/io-sim/pull/119) en Hackage y abordaron la deuda técnica mediante la [refactorización del recurso](https://github.com/input-output-hk/ouroboros-network/pull/4707) utilizado por el subsistema DNS y la revisión de la [refactorización del módulo RootPeersDNS](https://github.com/input-output-hk/ouroboros-network/pull/4625).

El equipo del **ledger** se centró en las pruebas, la corrección de errores y la mejora de la claridad de la especificación CDDL. Arreglaron el fallo de deserialización del predicado `ValueNotConservedUTxO`, asegurando la notificación precisa de ada cero, y abordaron la deserialización de `CostModels` en el `PParamsUpdate`, permitiendo solo `CostModels` válidos para versiones de Plutus no reconocidas a partir de Conway.

Además, han corregido la devolución de depósitos para `ProposalProcedures`, han mejorado las herramientas de prueba y han implementado nuevas pruebas para la era Conway.

Como siempre, consulte [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** se ha centrado esta semana en una rápida actualización a la versión 1.7.1. Esta versión soluciona varios problemas, incluidos los relacionados con la conexión de la DApp al wallet de Encaje. Además, el equipo implementó mejoras para optimizar la interacción entre Lace y los handles ada, resolviendo los problemas derivados de las interrupciones lentas de la red que afectan al flujo de envíos, y solucionando algunos problemas con los paquetes de transacciones específicos de los wallets con handles ada.

# SMART CONTRACTS

El equipo de **herramientas** de **Plutus** continuó trabajando en las consultas a la API de Marconi, el emulador de nodos cardánicos de Marconi y las mejoras en la documentación. El equipo de Plutus Core corrigió un error en Plutus Tx que provocaba que la compilación fallara con un error ‘Cannot case on a value’ cuando se utilizaban primitivas BLS.

Esta semana, el equipo **Marlowe** [actualizó](https://github.com/input-output-hk/marlowe-plutus/pull/7/commits/0837bda9ea09530e89acb61dad21c5954ebf23e7#r1397610189) el repositorio marlowe-plutus, actualizó las [dependencias](https://github.com/input-output-hk/marlowe-cardano/pull/753) de `plutus` para `marlowe-plutus, y [actualizó](https://github.com/input-output-hk/marlowe/pull/198) el repositorio Marlowe a IOGX y GHC v.9.2.8. También [añadieron](https://github.com/input-output-hk/marlowe-ts-sdk/pull/89)` computeTransaction`al TS-SDK para permitir las pruebas unitarias de contratos, [cambiaron el tiempo inicial](https://github.com/input-output-hk/marlowe-playground/pull/57) para que los contraejemplos se muestren de forma legible en Marlowe Playground, y mejoraron la estructura del formulario en el flujo`Aplicar entradas\` en Marlowe Runner.

Además, se aseguraron de que los contadores son positivos en [Agda semantics](https://github.com/input-output-hk/marlowe-agda/blob/fb075463d18462522d69bc4b55653c13418a8cad/src/Marlowe/Language/State.agda#L25).

# ESCALADO

El equipo **Hydra** abordó esta semana los errores engañosos relativos a las transacciones ‘collect com’, resolvió un problema de [aviso de seguridad](https://github.com/input-output-hk/hydra/security/advisories/GHSA-gr36-mc6v-72qq) y simplificó el protocolo Hydra Head [utilizando datos en línea](https://github.com/input-output-hk/hydra/pull/1162). El equipo también abordó [incoherencias](https://github.com/input-output-hk/hydra/issues/1104) menores en las especificaciones y la implementación, [documentó las razones](https://github.com/input-output-hk/hydra/issues/1039) de las transacciones `cerradas` potencialmente descartadas por el nodo Cardano, y colaboró con SundaeLabs en un modo fuera de línea para el nodo Hydra. Además, entablaron debates con los investigadores sobre las des/compromisos incrementales.

El equipo **Mithril** avanzó esta semana en la descentralización de las redes Mithril con la prueba de concepto de red entre pares (P2P), [completando el primer prototipo](https://github.com/input-output-hk/mithril/issues/1326) de implementación del relé Mithril, que permite la difusión de firmas P2P. También avanzaron en la optimización del [rendimiento del agregador](https://github.com/input-output-hk/mithril/issues/1327). Además, el equipo completó algunas mejoras en el [CI/CD](https://github.com/input-output-hk/mithril/issues/1355) que ayudarán a [desplegar manualmente](https://github.com/input-output-hk/mithril/issues/1356) redes Mithril experimentales para SanchoNet, así como para la nueva capa de red P2P.

Asimismo, investigaron problemas ocasionales de tiempo de ejecución que causaban retrasos en ciertos SPO y comenzaron a preparar la próxima versión de la distribución.

# VOLTAIRE

El equipo de **Voltaire** continuó esta semana la preparación de la votación especial de Cardano para evaluar los avances en la gobernanza dentro y fuera de la cadena con CIP-1694. La instantánea para los wallets participantes se tomó el 21 de noviembre, y la votación tendrá lugar del 1 al 11 de diciembre. Se anima a los titulares de Ada a que aprovechen esta oportunidad para expresar su postura sobre el progreso de la gobernanza del CIP-1694.

# CATALYST

El equipo del **Proyecto Catalyst** ha continuado esta semana su emisión regular con un ayuntamiento semanal los miércoles a las 17.00 UTC. Puede volver a ver [el segmento de esta semana aquí](https://www.youtube.com/watch?v=_5n7KaOAvWM) o inscribirse para el próximo [a través de esta página](https://projectcatalyst.io/news/town-hall).

En otras noticias, ya se ha completado la integración del módulo de hitos con la [página web del Proyecto Catalyst](https://projectcatalyst.io/). Además, se ha ejecutado una actualización completa de los datos, que abarca los datos de la cohorte del Fondo 10. Esto permite a los usuarios realizar un seguimiento eficaz del progreso de cada proyecto financiado dentro de [el programa de hitos](https://docs.projectcatalyst.io/project-catalyst-funds/previous-funds/fund10/how-to-submit-project-milestones). Basta con buscar [su proyecto del Fondo 10 preferido](https://projectcatalyst.io/funds/10) y navegar hasta la página de resumen para encontrar la barra de progreso y el enlace a [hitos reales](https://milestones.projectcatalyst.io/). Esto supone otro logro significativo en la mejora de la responsabilidad general de los beneficiarios de los fondos.

Y por último, esta semana se ha abierto el plazo de inscripción para la fase de revisión comunitaria. Si desea ayudar a evaluar los proyectos antes de que pasen a la fase de votación, visite [cardano.ideascale.com](//cardano.ideascale.com) y regístrese a través del formulario emergente justo después de iniciar sesión.

# EDUCACIÓN

Esta semana, el equipo de **Educación** continuó impartiendo el curso interno de la Academia de Matemáticas. También trabajaron en las tareas educativas de Marlowe.
