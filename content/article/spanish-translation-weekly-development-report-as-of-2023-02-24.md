---
title: Spanish Translation - weekly development report as of 2023-02-24
tags:
  - "#cardano"
url: ""
image: https://www.essentialcardano.io/development-update/weekly-development-report-as-of-2023-02-24#contributors
image_text: ""
---

### CORE TECHNOLOGY

Esta semana, el equipo de redes resolvió algunos problemas en el código **_peer-to-peer_** (P2P). También terminaron la fase de diseño de ["Eclipse Evasion"](https://github.com/orgs/input-output-hk/projects/19/views/16?pane=issue&itemId=19819205) (esencial para la funcionalidad del protocolo Ouroboros Genesis) y comenzaron a trabajar en su implementación.

Finalmente, el equipo lanzó un [conjunto actualizado de paquetes de red](https://input-output-hk.github.io/cardano-updates/2023-02-17-network/) para integrar con la rama principal de cardano-node.

El equipo "**Ledger**" integró múltiples cambios con los repositorios de cardano-base y ouroboros-network, incluyendo cambios en las "serialization libraries" para asegurar su correcto versionamiento, y soporte para la era Conway, que permite que el estado del ledger pase a un nuevo estado de gobernanza. Además, el equipo llevó a cabo una serie de tareas destinadas a mejorar la documentación y la infraestructura de pruebas, especificando formalmente CIP-1694.  
  
Por otro lado, el equipo de **consenso** analizó los resultados de las pruebas de referencia a nivel de sistema para UTXO HD, los cuales mostraron una regresión significativa en el rendimiento. Los resultados demostraron que la frecuencia a la que se tomaban los "ledger snap-shots" era demasiado alta, por lo que el equipo solicitó otra prueba de referencia basada en una "snapshotting policy" más realista. El equipo también continuó mejorando el prototipo y lanzó paquetes relacionados con UTXO HD.  
  
Continúa el trabajo en el desarollo de Genesis. Actualmente el equipo se encuentra debatiendo el diseño con los investigadores, mientras continúan las pruebas de referencia de diferentes prototipos de Genesis.  
  
El equipo también solucionó un fallo de prueba relacionado con los iteradores, lo que resultó en mejoras en la documentación, y en un marco actualizado para escribir pruebas unitarias y de regresión, y la posibilidad de depurar ejemplos de contadores QuickCheck.

Finalmente, lanzaron v.0.2.0.0 de ouroboros-consensus y v.0.3.0.0 de ouroboros-consensus-cardano. Pueden encontrar más información [aquí](https://github.com/input-output-hk/cardano-haskell-packages).  
  
Puedes encontrar más información de todos los reportes técnicos y avances técnologicos [aquí](https://input-output-hk.github.io/cardano-updates/archive/).
  

### WALLETS AND SERVICES - BILLETERAS Y SERVICIOS

Esta semana, el equipo de **Daedalus** trabajó en actualizaciones del paquete LedgerJS para asegurar un soporte eficiente para hardware wallets.

Continúan los trabajos de desarrollo de Lace desktop. El equipo siguió mejorando las características de la interfaz de usuario del nodo local (como la capacidad de ver el estado del nodo al pasar el cursor sobre un icono en el menú principal), y completó la prueba de concepto de 'conexión automática de billetera' dentro de un conector DApp. También mejoraron la interfaz de usuario y la experiencia de usuario de la aplicación y resolvieron varios problemas en el repositorio de desarrollo.

La plataforma de billetera ligera Lace se actualizará pronto en preproducción, incluyendo nuevas características para probar antes del lanzamiento en la red principal. Obtén más información sobre esta y otras utilidades en el [sitio web.](https://www.lace.io/)  
  
El equipo de **Adrestia** sigue trabajando en la ampliación de la funcionalidad de multi-firma con delegación en cardano-wallet. También están trabajando en extraer la biblioteca de equilibrio de transacciones y en la refactorización de DBLayer para mejorar el rendimiento y el uso de memoria.

Finalmente, el equipo está preparando cardano-js-sdk para su lanzamiento en el entorno de producción.

### SMART CONTRACTS - CONTRATOS INTELIGENTES

Esta semana, el equipo de **Plutus** siguió trabajando en el desarrollo de "Plutus debugger" y en el aumento de la capacidad de scripts. También continuaron construyendo indexadores para Marconi, trabajaron con aspectos de deuda técnica, y mejoraron documentación.

Esta semana, el equipo de **Marlowe** realizó algunas pruebas de corrección y unidad para el cálculo del intervalo de validez expirado, mejoró los nombres de los programas y las opciones de línea de comandos, e implementó un índice parcial inicial de contratos de Marlowe en Marlowe Explorer. También agregaron pruebas basadas en propiedades y de integración al protocolo, solucionaron algunos problemas de sincronización de Marlowe, y agregaron nuevas pruebas de consulta.

Finalmente, crearon la versión parcial básica de la biblioteca de cliente marlowe-runtime-ts, añadieron una interfaz de usuario para agregar los términos del contrato Actus, y desacoplaron actus-core de marlowe-cardano.  

###   BASHO (SCALING)

El equipo Hydra completó una forma diferente de [resolver con "contests](https://github.com/input-output-hk/hydra/pull/716)" durante el período de disputa. Ahora siempre se extenderá la fecha límite, lo que facilitará una elección más fácil del período de disputa según la red en la que se ejecute el 'head'. También agregaron una importante prueba de aceptación y completaron la refactorización interna de la lógica del protocolo, lo cual hace que cambios futuros sean más fáciles de implementar.

El equipo Mithril trabajó en la finalización de la implementación de las actualizaciones continuas de sus redes con el comportamiento de cambio de era que habían diseñado. También crearon un comando dedicado en la CLI de sus nodos que permite generar y firmar la carga útil de un marcador de era para ser almacenado en la cadena Cardano, así como crear casos dinámicos para las pruebas de extremo a extremo que ejecutan en la CI. Además, el equipo completó la implementación del monitoreo de la tasa de despliegue de las versiones de nodos firmantes que les ayudará a saber cuándo un cambio de era está listo para ser activado.

Finalmente, comenzaron a diseñar la certificación de tipos de datos genéricos en la cadena de certificación Mithril.
