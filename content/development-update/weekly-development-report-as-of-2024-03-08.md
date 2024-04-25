---
title: Weekly development report as of 2024-03-08
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/7944a202-a7a1-422b-919a-63028528e6ba/
image_text: Weekly development report as of 2024-03-08
---

### CORE TECHNOLOGY

This week, the **networking** team published \`[ouroboros-network-0.12.0.0](http://changelog)`,` [ouroboros-network-protocols-0.8.0.0](https://github.com/IntersectMBO/ouroboros-network/blob/master/ouroboros-network-protocols/CHANGELOG.md#0800----2024-02-21) `and` [ouroboros-network-api-0.7.0.0](https://github.com/IntersectMBO/ouroboros-network/blob/master/ouroboros-network-api/CHANGELOG.md#0700----2024-02-21) `packages into` CHaP`. Additionally, they updated and published` [ouroboros-consensus-0.16.0.0](https://github.com/IntersectMBO/ouroboros-consensus/blob/main/ouroboros-consensus/CHANGELOG.md#01600--2024-02-23)`,` [ouroboros-consensus-cardano-0.14.0.0](https://github.com/IntersectMBO/ouroboros-consensus/blob/main/ouroboros-consensus-cardano/CHANGELOG.md#01400--2024-02-23)`,` [cardano-cli-8.20.3.0](https://github.com/IntersectMBO/cardano-cli/blob/main/cardano-cli/CHANGELOG.md#82030) `and` [cardano-api-8.39.2.0](https://github.com/IntersectMBO/cardano-api/blob/main/cardano-api/CHANGELOG.md#83920)\`.

The team fixed syncing in bootstrap mode to restore performance (commit: [1](https://github.com/IntersectMBO/ouroboros-network/issues/4809) [2](https://github.com/IntersectMBO/ouroboros-network/issues/4810) ) and started working on [Outbound-Governor Genesis mode](https://github.com/IntersectMBO/ouroboros-consensus/issues/958).

This week, the **consensus** team updated the production libraries for `UTXO-HD` in `ouroboros-consensus`, `cardano-api`, and `cardano-node`. The [team measured sync, replay times, and memory](https://github.com/IntersectMBO/cardano-node/issues/5495) in `UTXO-HD`. They also fixed a [bug related to the snapshot interval](https://github.com/IntersectMBO/cardano-updates/blob/a51cbca7820b262392bb608d06ac11da4007e021/blog/2024-03-06-consensus.md#:~:text=reported%20here.-,Bugfixed,-the%20snapshot%20interval) and [added an extra case](https://github.com/IntersectMBO/ouroboros-consensus/pull/983) to `isIncorrectClaimedFlag` for Babbage and Conway eras, and [added a](https://github.com/IntersectMBO/ouroboros-consensus/pull/970) `db-analyser` analysis to determine the UTXO size per slot.

Finally, the team helped troubleshoot some known issues with node v.8.9 such as unexpected snapshot intervals causing missed leadership schedules and integration tests.

### SMART CONTRACTS

This week the **Plutus** team made progress in implementing [CIP-57](https://cips.cardano.org/cip/CIP-0057) (Plutus contract blueprint). The team expects to release a version of the compiler that supports generating blueprints for Plutus Tx soon.

### SCALING

This week, the Hydra and Mithril teams published a new collaborative [monthly report](https://cardano-scaling.github.io/website/monthly/2024-02). 

The **Hydra** team began preparing for the switch to Conway by making the codebase less specific to Babbage. They [added a basic UI](https://github.com/input-output-hk/hydra/issues/1330) to the Hydra explorer, switched to aggregating SanchoNet data, and [fixed the smoke tests](https://github.com/input-output-hk/hydra/pull/1323) to work on SanchoNet. Lastly, the team made progress in their off-chain incremental commit protocol changes.

The **Mithril** team worked on implementing a data type for certifying Cardano transactions within Mithril networks. They also adapted the Mithril explorer to support [Cardano transaction](https://github.com/input-output-hk/mithril/issues/1497) verification and started implementing a more efficient transaction [signing scheme](https://github.com/input-output-hk/mithril/issues/1533). Additionally, they [stabilized the type names](https://github.com/input-output-hk/mithril/issues/1535) in the API and investigated a [bug](https://github.com/input-output-hk/mithril/issues/1537) that prevents the signature of some Conway-era transactions. The team completed the first version of the [Prometheus monitoring](https://github.com/input-output-hk/mithril/issues/1096) endpoint for the signer. Finally, they fixed a bug in the [publication](https://github.com/input-output-hk/mithril/issues/1531) of the client's `npm` packages, enhanced the aggregator's HTTP tests, and continued working on the [KES period computation](https://github.com/input-output-hk/mithril/pull/1541) in the Pallas chain observer.

### VOLTAIRE & SANCHONET

This week, the **SanchoNet** team made several documentation updates. This includes updates to the list of resources, the latest supported node version, a governance action tutorial, and an updated FAQs and resources page.

### CATALYST

This week,  **Project Catalyst** [continues to onboard Fund11 projects](https://docs.projectcatalyst.io/fund-documentation/fund11-docs/project-onboarding). The effort has so far produced  75% projects locked in with their statement of milestones and almost ready to start receiving their first grant payments as voted by the Cardano community. In comparison, the updates to processes and tools supporting them have produced more projects being onboarded in the same period than all of Fund10 combined . Great testament to all community members participating in the process –  proof of life verifiers, milestone reviewers, or funded proposers. 

The team also commenced the retrospective period with the community during this week’s town hall - you can [catch the recording here](https://x.com/danny_cryptofay/status/1765724697956655529?s=20) - and a lot of great insights collected already. The topic of this retro? Fund11 categories and their implementation - what can we learn from this iteration and adjust for Fund12? We continue to invite the community to participate alongside us in the coming weeks .

Also, the team is eagerly awaiting final approvals from the stores to accommodate the special voting event for the Fund12 launch city choice. If you aren’t sure what this is about - make sure to catch [this Cardano Forum post](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326) for all the updates. Will it be Barcelona, Buenos Aires, Nairobi, Sydney, Tokyo, or Toronto? You’ll decide. 

### EDUCATION

This week, the **education** team  continues  updating  the advanced lessons of the Haskell Bootcamp course. They are also updating the Cardano Developer Course with practical scenarios that will be used in future lectures.

![](https://ucarecdn.com/e6174b71-c31f-4fc0-a2b1-bf9073490cbc/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**ネットワーキング**チームは[ouroboros-network-0.12.0.0](http://changelog)、[ouroboros-network-protocols-0.8.0.0](https://github.com/IntersectMBO/ouroboros-network/blob/master/ouroboros-network-protocols/CHANGELOG.md#0800----2024-02-21)、[ouroboros-network-api-0.7.0.0](https://github.com/IntersectMBO/ouroboros-network/blob/master/ouroboros-network-api/CHANGELOG.md#0700----2024-02-21)パッケージをCHaPに公開しました。さらに、[ouroboros-consensus-0.16.0.0](https://github.com/IntersectMBO/ouroboros-consensus/blob/main/ouroboros-consensus/CHANGELOG.md#01600--2024-02-23)、[ouroboros-consensus-0.14.0.0](https://github.com/IntersectMBO/ouroboros-consensus/blob/main/ouroboros-consensus-cardano/CHANGELOG.md#01400--2024-02-23)、[cardano-cli-8.20.3.0](https://github.com/IntersectMBO/cardano-cli/blob/main/cardano-cli/CHANGELOG.md#82030)、[cardano-api-8.39.2.0](https://github.com/IntersectMBO/cardano-api/blob/main/cardano-api/CHANGELOG.md#83920)を更新し、公開しました。

ブートストラップモードでの同期を修正してパフォーマンスを復元し（commit [1](https://github.com/IntersectMBO/ouroboros-network/issues/4809) [2](https://github.com/IntersectMBO/ouroboros-network/issues/4810)）、[Outbound-Governor Genesisモード](https://github.com/IntersectMBO/ouroboros-consensus/issues/958)の作業を開始しました。

**コンセンサス**チームは、ouroboros-consensus、cardano-api、cardano-nodeのUTXO-HDのプロダクションライブラリーを更新しました。[同期、再生時間、メモリーをUTXO-HDで測定](https://github.com/IntersectMBO/cardano-node/issues/5495)しました。[スナップショットインターバルに関連するバグ](https://github.com/IntersectMBO/cardano-updates/blob/a51cbca7820b262392bb608d06ac11da4007e021/blog/2024-03-06-consensus.md#:~:text=reported%20here.-,Bugfixed,-the%20snapshot%20interval)を修正し、Babbage期とConway期のisIncorrectClaimedFlagに[ケースを追加](https://github.com/IntersectMBO/ouroboros-consensus/pull/983)し、スロットあたりのUTXOサイズを決定する[db-analyzer](https://github.com/IntersectMBO/ouroboros-consensus/pull/970)分析を追加しました。

予期しないスナップショットインターバルの発生により、リーダーシップスケジュールや統合テストが欠落するなど、ノードv.8.9の既知の問題のトラブルシューティングをサポートしました。

スマートコントラクト

**Plutus**チームは[CIP-57](https://cips.cardano.org/cip/CIP-0057)（Plutusコントラクトのブループリント）の実装を進めました。まもなくPlutus Txのブループリント生成をサポートするコンパイラーバージョンをリリースする予定です。

### スケーリング

HydraチームとMithrilチームは共同で新しい[月例レポート](https://cardano-scaling.github.io/website/monthly/2024-02)を公開しました。 

**Hydra**チームは、コードベースをBabbageに限定しないようにして、Conwayへの移行準備を始めました。Hydraエクスプローラーに[基本的なUIを追加](https://github.com/input-output-hk/hydra/issues/1330)し、SanchoNetデータの集約に切り替え、SanchoNetで動作するように[スモークテストを修正](https://github.com/input-output-hk/hydra/pull/1323)しました。オフチェーンのインクリメンタルコミットプロトコルの変更を進めました。

**Mithril**チームは、Mithrilネットワーク内でのCardanoトランザクションを認証するための新しいデータ型の実装に取り組みました。Mithrilエクスプローラーを[Cardanoトランザクション](https://github.com/input-output-hk/mithril/issues/1497)検証に対応させ、より効率的なトランザクション[署名スキーム](https://github.com/input-output-hk/mithril/issues/1533)の実装を開始しました。APIの[型名を安定化](https://github.com/input-output-hk/mithril/issues/1535)し、Conway期トランザクションの署名を妨げる[バグ](https://github.com/input-output-hk/mithril/issues/1537)を調査しました。署名者の[Prometheusモニタリング](https://github.com/input-output-hk/mithril/issues/1096)エンドポイントの初回バージョンを完了しました。クライアントのnpmパッケージの[公開](https://github.com/input-output-hk/mithril/issues/1531)におけるバグを修正し、アグリゲーターのHTTPテストを強化し、Pallasチェーンオブザーバーで[KES期間計算](https://github.com/input-output-hk/mithril/pull/1541)を継続しました。

### VOLTAIRE & SANCHONET

今週、 **SanchoNet**チームは複数のドキュメントを更新しました。これには、リソースリスト、最新のサポート済みノードバージョン、ガバナンスアクションチュートリアル、よくある質問とリソースページの更新が含まれます。

### CATALYST

**Project Catalyst**は[Fund11プロジェクトのオンボーディング](https://docs.projectcatalyst.io/fund-documentation/fund11-docs/project-onboarding)を続けています。この取り組みにより、これまでのところ75%のプロジェクトがマイルストンステートメントで確定され、Cardanoコミュニティの投票によって調達された最初の支払いを受け取る準備がほぼ整っています。プロセスとそれをサポートするツールの更新により、同時期にオンボーディングするプロジェクトはFund10をすべて合わせたよりも多くなりました。これは、このプロセスに参加しているすべてのコミュニティメンバー、すなわちプルーフオブライフの検証者、マイルストンレビュー担当者、資金提供を受けた提案者への偉大な証となります。 

今週のタウンホールではコミュニティと振り返り期間を開始しました。[録画はこちらから](https://x.com/danny_cryptofay/status/1765724697956655529?s=20)ご覧ください。すでに多くの素晴らしい洞察が収集されています。この振り返りのトピックは、Fund11のカテゴリーとその実装 - このイテレーションから何を学び、Fund12に向けて調整できるか。今後数週間にわたり、コミュニティには参加を呼び掛けています。

Fund12ローンチ都市を選ぶスペシャル投票イベントを提供するために、ストアからの最終承認を待ち望んでいます。何の話かわからない場合は、[このCardanoフォーラムの投稿](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326)ですべての更新情報を確認してください。バルセロナでしょうか。それとも、ブエノスアイレス、ナイロビ、シドニー、東京、もしくはトロントになるでしょうか。決めるのはあなたです。 

### 教育

**教育**チームはHaskell Bootcampコースの上級レッスンの更新を続けています。Cardano開発者コースには、今後の講義で使用する実践的なシナリオを追加しています。

# TECNOLOGÍA CENTRAL

Esta semana, el equipo de redes ha publicado los paquetes `ouroboros-network-0.12.0.0`, `ouroboros-network-protocols-0.8.0.0` y `ouroboros-network-api-0.7.0.0` en CHaP. Además, actualizaron y publicaron `ouroboros-consensus-0.16.0.0`, `ouroboros-consensus-cardano-0.14.0.0`, `cardano-cli-8.20.3.0` y `cardano-api-8.39.2.0`.

Se ha corregido la sincronización en modo bootstrap para restaurar el rendimiento (commit: [1](https://github.com/IntersectMBO/ouroboros-network/issues/4809) [2](https://github.com/IntersectMBO/ouroboros-network/issues/4810) ) y comenzó a trabajar en el modo [Outbound-Governor Genesis](https://github.com/IntersectMBO/ouroboros-consensus/issues/958).

El equipo de **consenso** actualizó las bibliotecas de producción para `UTXO-HD` en `ouroboros-consensus`, `cardano-api` y `cardano-node`. El [equipo midió la sincronización, los tiempos de reproducción y la memoria](https://github.com/IntersectMBO/cardano-node/issues/5495) en `UTXO-HD`. También arreglaron un [error relacionado con el intervalo de instantáneas](https://github.com/IntersectMBO/cardano-updates/blob/a51cbca7820b262392bb608d06ac11da4007e021/blog/2024-03-06-consensus.md#:~:text=reported%20here.-,Bugfixed,-the%20snapshot%20interval) y [añadieron un caso extra](https://github.com/IntersectMBO/ouroboros-consensus/pull/983) a `isIncorrectClaimedFlag` para las eras Babbage y Conway, y [añadieron un](https://github.com/IntersectMBO/ouroboros-consensus/pull/970) análisis `db-analyser` para determinar el tamaño UTXO por ranura.

Además, se ayudó a solucionar algunos problemas conocidos del nodo v.8.9, como los intervalos de instantáneas inesperados que hacían que se perdieran los programas de liderazgo y las pruebas de integración.

# CONTRATOS SMART CONTRACT

El equipo de **Plutus** avanzó en la implementación de [CIP-57](https://cips.cardano.org/cip/CIP-0057) (Plutus contract blueprint). El equipo espera lanzar pronto una versión del compilador que soporte la generación de blueprints para Plutus Tx.

# ESCALADO

Los equipos Hydra y Mithril han publicado un nuevo \[informe mensual\] de colaboración([February 2024 | Cardano Scaling](https://cardano-scaling.github.io/website/monthly/2024-02)).

El equipo **Hydra** comenzó a prepararse para el cambio a Conway haciendo que la base de código fuera menos específica de Babbage. Añadieron una interfaz de usuario básica\]([Create a simple, representable and informative Hydra Explorer UI · Issue #1330 · input-output-hk/hydra · GitHub](https://github.com/input-output-hk/hydra/issues/1330)) al explorador de Hydra, pasaron a agregar datos de SanchoNet y [arreglaron las pruebas de humo](https://github.com/input-output-hk/hydra/pull/1323) para que funcionaran en SanchoNet. Por último, el equipo avanzó en sus cambios de protocolo de commit incremental fuera de cadena.

El equipo **Mithril** trabajó en la implementación de un tipo de datos para certificar las transacciones de Cardano dentro de las redes Mithril. También adaptaron el explorador Mithril para soportar la verificación de [transacciones Cardano](https://github.com/input-output-hk/mithril/issues/1497) y comenzaron a implementar un \[esquema de firma\] de transacciones más eficiente([Implement a Block Range Merkle Tree for](https://github.com/input-output-hk/mithril/issues/1533) `Cardano Transactions` [· Issue #1533 · input-output-hk/mithril · GitHub](https://github.com/input-output-hk/mithril/issues/1533)). Además, [estabilizaron los nombres de los tipos](https://github.com/input-output-hk/mithril/issues/1535) en la API e investigaron un [fallo](https://github.com/input-output-hk/mithril/issues/1537) que impide la firma de algunas transacciones de la era Conway. El equipo completó la primera versión del punto final de [supervisión de Prometheus](https://github.com/input-output-hk/mithril/issues/1096) para el firmante. Por último, arreglaron un error en la [publicación](https://github.com/input-output-hk/mithril/issues/1531) de los paquetes `npm` del cliente, mejoraron las pruebas HTTP del agregador y siguieron trabajando en el [cálculo del periodo KES](https://github.com/input-output-hk/mithril/pull/1541) en el observador de la cadena Pallas.

# VOLTAIRE & SANCHONET

El equipo de **SanchoNet** ha efectuado esta semana varias actualizaciones de la documentación. Esto incluye actualizaciones de la lista de recursos, la última versión de nodo compatible, un tutorial de acciones de gobernanza y una página actualizada de preguntas frecuentes y recursos.

# PROYECTO CATALYST

El **Proyecto Catalyst** [sigue incorporando proyectos del Fondo11](https://docs.projectcatalyst.io/fund-documentation/fund11-docs/project-onboarding). El esfuerzo ha producido hasta ahora un 75% de proyectos bloqueados con su declaración de hitos y casi listos para empezar a recibir sus primeros pagos de subvenciones votados por la comunidad Cardano. En comparación, las actualizaciones de los procesos y las herramientas que los apoyan han producido más proyectos embarcados en el mismo período que todo el Fondo 10 combinado. Un gran testimonio para todos los miembros de la comunidad que participan en el proceso: verificadores de pruebas de vida, revisores de hitos o proponentes financiados.

Por otro lado, durante el pleno de esta semana, se ha iniciado el periodo de retrospectiva con la comunidad - puede [ver la grabación aquí](https://x.com/danny_cryptofay/status/1765724697956655529?s=20) - y ya se han recogido muchas ideas estupendas. ¿El tema de esta retrospectiva? Las categorías del Fondo11 y su aplicación - ¿qué podemos aprender de esta iteración y ajustar para el Fondo12? Seguimos invitando a la comunidad a participar junto a nosotros en las próximas semanas.

Además, nuestro equipo está esperando con impaciencia las aprobaciones finales de las tiendas para dar cabida al evento especial de votación para la elección de la ciudad de lanzamiento del Fondo12. Si no está seguro de qué se trata - asegúrese de ver [este post del Foro Cardano](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326) para todas las actualizaciones. ¿Será Barcelona, Buenos Aires, Nairobi, Sydney, Tokio o Toronto? Usted decidirá.

# EDUCACIÓN

El equipo de **educación** continúa actualizando las lecciones avanzadas del curso Haskell Bootcamp. También están actualizando el curso para desarrolladores de Cardano con escenarios prácticos que se utilizarán en futuras clases.
