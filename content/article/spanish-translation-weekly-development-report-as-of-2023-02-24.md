---
title: Spanish Translation - weekly development report as of 2023-02-24
tags:
  - "#cardano"
url: ""
image: https://www.essentialcardano.io/development-update/weekly-development-report-as-of-2023-02-24#contributors
image_text: ""
---

### CORE TECHNOLOGY

Esta semana, el equipo de redes resolvió algunos problemas en el código **_peer-to-peer_** (P2P). También terminaron la fase de diseño de ["Eclipse Evation"](https://github.com/orgs/input-output-hk/projects/19/views/16?pane=issue&itemId=19819205) (esencial para la funcionalidad del protocolo Ouroboros Genesis) y comenzaron a trabajar en su implementación.

Finalmente, el equipo lanzó un [conjunto actualizado de paquetes de red](https://input-output-hk.github.io/cardano-updates/2023-02-17-network/) para integrarse con la rama principal de cardano-node.

El equipo "Ledger" integró múltiples cambios con los repositorios de cardano-base y ouroboros-network. Esto condujo a que se efectuen cambios en las "serialization libraries" para asegurar la una propia personalización al usuario, dando apoyo a la era de "Conway Ledger", lo que nos acerca cada vez más a una nueva era de gobernanza. Además, el equipo llevó a cabo una serie de tareas destinadas a mejorar cuestiones respecto a la documentación, técnicas y de infraestructura de prueba, haciendo foco en el CIP-1694.  
  
Por otro lado, el equipo de consenso analizó los resultados de las pruebas de nivel de sistema para UTXO HD, que mostraron una importante regresión de rendimiento. Los resultados del estudio realizado conllevaron a la conclusión de que la frecuencia a la que se tomaban los "ledger snap-shots" era demasiado alta, por lo que el equipo solicitó otra verificación de prueba basada en una "snapshotting policy" más realista. Se desataca también que el equipo continua mejorando el prototipo y se han lanzado paquetes relacionados con UTXO HD.  
  
Continuamos trabajando en el desarollo de Genesis: Actualmente el equipo se encuentra debatiendo el diseño junto con los investigadores. Mientras, seguimos llevando adelante los estudios, testeos, análisis y comparaciones entre los diferentes prototipos.  
  
El equipo también solucionó un fallo de prueba relacionado con los iteradores, lo que resultó en mejoras en la documentación, y en un marco actualizado para escribir pruebas unitarias y de regresión.

Finalmente se realizó el lanzamiento de ouroboros-consensus v.0.2.0.0 y ouroboros-consensus-cardano 0.3.0.0. Pueden encontrar más información en el siguiente [link](https://github.com/input-output-hk/cardano-haskell-packages).  
  
Puedes encontrar más información de todos los reportes técnicos y avances técnologicos [aquí](https://input-output-hk.github.io/cardano-updates/archive/)  
  

### WALLETS AND SERVICES - BILLETERAS Y SERVICIOS

Esta semana, el equipo de Daedalus trabajó en actualizaciones del paquete LedgerJS para asegurar un soporte eficiente para "[hardware wallets](https://www.youtube.com/watch?v=-AOtrsWU7o8)". El trabajo continúa en el desarrollo de [Lace desktop](https://www.youtube.com/watch?v=Okx-rjhBdZs&t=3s) (hay un enlace a un video que les cuenta un poco más sobre esta nueva billetera). El equipo siguió mejorando las características de la interfaz de usuario local del nodo (como la capacidad de ver el estado del nodo al pasar el cursor sobre un icono en el menú principal) y completó la prueba de concepto de 'conexión automática de billetera' dentro de un conector DApp. También mejoraron la interfaz de usuario y la experiencia de usuario de la aplicación y resolvieron varios problemas en el repositorio de desarrollo.

La plataforma de billetera ligera Lace se actualizará pronto en preproducción, incluyendo nuevas características para probar antes del lanzamiento en la red principal. Una de las herramientas nuevas que fueron anunciadas por el equipo de Lace en el mes de Febrero de 2023 fue el [paquete de transacciones](https://www.youtube.com/watch?v=d_ZOOhM1Dow). Obtén más información sobre esta y otras utilidades en el [sitio web.](https://www.lace.io/)  
  
El equipo de Adrestia sigue trabajando en la ampliación de la funcionalidad de multi-firma con delegación en cardano-wallet. También están trabajando en extraer la biblioteca de equilibrio de transacciones y en la refactorización de DBLayer para mejorar el rendimiento y el uso de memoria.

### SMART CONTRACTS - CONTRATOS INTELIGENTES

Esta semana, el equipo de Plutus siguió trabajando en el desarrollo de "Plutus debugger" y en el aumento de la capacidad de scripts. También continuaron construyendo indexadores para Marconi.

Esta semana, el equipo de Marlowe realizó algunas pruebas de corrección y unidad para el cálculo del intervalo de validez agotado, mejoró los nombres de los programas y las opciones de línea de comandos, e implementó un índice parcial inicial de contratos de Marlowe en Marlowe Explorer. También agregaron pruebas basadas en propiedades y de integración al protocolo, solucionaron algunos problemas de sincronización de Marlowe y agregaron nuevas pruebas de consulta.

Finalmente, crearon la versión parcial básica de la biblioteca de cliente marlowe-runtime-ts, agregaron una interfaz de usuario para ingresar los términos del contrato Actus y desacoplaron actus-core de marlowe-cardano.  

###   
BASHO ([SCALING](The Hydra team completed work on a different way of dealing with contests during the contestation period. These will now always push the deadline out, making contestation periods easier to pick depending on the network a head runs on. They also added an important acceptance test and completed internal refactoring of the protocol logic, making future changes easier to implement.  The Mithril team worked on completing the implementation of the seamless hard updates of their networks with the era switch behavior they had designed. They also created a dedicated command on their nodes’ CLI that allows generating and signing an era marker’s payload to be stored on the Cardano chain, as well as creating dynamic cases for the end-to-end tests they run on the CI. Additionally, the team completed the implementation of the monitoring of the deployment rate of the signer node versions that will help them know when an era switch is ready to be activated.  Finally, they started designing the certification of generic types of data in the Mithril certificate chain.))  
  

El equipo Hydra completó un trabajo en una forma diferente de [lidiar con "contenst](https://github.com/input-output-hk/hydra/pull/716)". Ahora siempre se extenderá la fecha límite, lo que facilitará la elección del período de disputa según la red en la que se ejecute. También agregaron una importante prueba de aceptación y completaron la refactorización interna de la lógica del protocolo, lo que facilitará la implementación de cambios futuros.

El equipo Mithril trabajó en la finalización de la implementación de las actualizaciones continuas de sus redes con el comportamiento de cambio de era que habían diseñado. También crearon un comando dedicado en la CLI de sus nodos que permite generar y firmar la carga útil de un marcador de era para ser almacenado en la cadena Cardano, así como crear casos dinámicos para las pruebas de extremo a extremo que ejecutan en la CI. Además, el equipo completó la implementación del monitoreo de la tasa de implementación de las versiones de nodos firmantes que les ayudará a saber cuándo un cambio de era está listo para ser activado.

Finalmente, comenzaron a diseñar la certificación de tipos de datos genéricos en la cadena de certificación Mithril.
