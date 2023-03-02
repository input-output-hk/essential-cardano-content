---
title: Toolkit for developing custom sidechains in Cardano (French)
tags:
  - "#cardano"
  - IOHK
  - sidechain toolkit
url: ""
image: https://ucarecdn.com/b1b3f8f4-bdfd-4c33-a8bd-576335eb7e7f/
image_text: ""
---

Input Output Global (IOG) a réuni une équipe d'ingénieurs spécialisés pour utiliser la base solide de Cardano afin de créer une boîte à outils pour la construction de chaînes latérales (dites "sidechains") personnalisées. À l'aide de cette boîte à outils, ils ont construit un testnet public sidechain-compatible avec la machine virtuelle Ethereum (EVM) comme preuve de concept. Les sidechains rendent Cardano extensible et plus évolutif sans compromettre la stabilité ou la sécurité de la chaîne principale.

## **Extension de Cardano avec des sidechains**

Cardano est une blockchain de troisième génération, basée sur des recherches universitaires et écrite en Haskell pour etablir une preuve mathématique d'exactitude.

La décentralisation, la sécurité et l'évolutivité du protocole de consensus Ouroboros ont été prouvées à grande échelle et en volume par [des milliers Stake pools indépendants](https://www.statista.com/statistics/1279280/cardano-ada-biggest-staking-pool-groups/) et [des millions d'adresses de portefeuille](https://cardanofeed.com/cardano-active-wallets-skyrocket-past-3-million-a-striking-1000-year-on-year-increase-45346) pendant plus de [cinq ans](https://roadmap.cardano.org/en/byron/). Le réseau fonctionne sans défaillance depuis sa création en 2017.

La décentralisation et l'interopérabilité sont essentielles pour l'avenir de la blockchain. Ces fonctionnalités garantissent qu'aucune personne ou entité ne peut contrôler une blockchain ou être limitée à un seul écosystème. Pour se développer, d'un point de vue technique et social, la plupart des applications et des communautés doivent être dotées de leur propre souveraineté et de leurs propres choix de conception.

Pour permettre cet environnement interopérable, IOG a travaillé sur la création d'une boîte à outils pour construire une famille de sidechains. Avec cette boîte à outils, n'importe qui peut commencer à tirer parti de la sécurité et de l'infrastructure de Cardano pour créer des sidechains spécifiques à leurs missions. Les [Chaîne latérale EVM](https://iohk.io/en/blog/posts/2022/07/06/introducing-the-cardano-evm-sidechain/) prouve la faisabilité de ce concept. Tout ce travail est partagé avec la communauté Cardano et sera entièrement open source. La première étape a été la démonstration de l'application EVM à [IO ScotFest](https://iohk.io/en/blog/posts/2022/11/04/announcing-io-scotfest-the-age-of-voltaire/) à Edinburg fin novembre 2022. IOG a mis à disposition la première tranche de [documentation formelle](https://docs.cardano.org/cardano-sidechains/sidechain-toolkit/introduction).

## **À propos de la boîte à outils**  

Une sidechain est simplement une blockchain qui dépend de sa chaîne principale et qui lui est connectée.

La boîte à outils permet à la sidechain d'avoir son propre algorithme de consensus et ses propres fonctionnalités. La sidechain est connectée à la chaîne principale via un pont qui permet le transfert d'atouts entre les chaînes. La finalité des blocs est déterminée par un mécanisme de consensus qui repose sur la sécurité de la chaîne principale.

La boîte à outils est composée de :

*   Scripts Plutus de la chaîne principale: Ces scripts s'exécutent sur la chaîne principale de Cardano, permettent des transactions inter-chaînes sécurisées et des mouvements de tokens, et utilisent les procédures de minting pour prendre en charge le token de la chaîne latérale.
    
*   Un suiveur de chaîne: Le suiveur de chaîne suit les données et les événements de la chaîne principale qui régissent la chaîne latérale. Dans la version v1 de la boîte à outils, il s'agit d'un Cardano [instance de synchronisation de base de données](https://docs.cardano.org/cardano-components/cardano-db-sync/about-db-sync).
    
*   Le module de chaîne latérale: Ce module fait partie du client sidechain. Il interprète les données de la chaîne principale et met en œuvre les adaptations nécessaires du grand livre.
    

La boîte à outils est également livrée avec un [document de spécification technique](https://docs.cardano.org/cardano-sidechains/sidechain-toolkit/introduction/#technicalspecification) contenant une introduction et un guide des sidechains Cardano. Les blocs de construction de la boîte à outils sont conçus pour donner des pouvoirs aux développeurs. Quelques exemples:

*   Déplacer des données et des atouts entre la chaîne principale et la chaîne latérale personnalisée.
    
*   Prendre en charge divers protocoles de consensus, règles du ledger et langues.
    
*   Sécuriser le lancement de sidechains.
    
*   Sécuriser les petites chaînes.
    
*   Permettre l'expérimentation, l'incubation et la recherche.
    

L'application sidechain EVM est disponible en tant que testnet publique. Les développeurs peuvent l'essayer en exécutant quelques applications Solidity pour avoir une idée de son potentiel. Les développeurs de DApp utilisant la sidechain EVM doivent noter que les données doivent être considérées comme finales sur la chaîne principale avant d'être déplacées vers la sidechain.

## **Utilisation des composants de la boîte à outils sidechain**

Les développeurs de chaînes de blocs, les développeurs d'applications distribuées (DApp), les stake pool operators (SPO) et les utilisateurs de DApp peuvent tous bénéficier de sidechains personnalisées. Les développeurs peuvent utiliser la boîte à outils pour créer des blockchains pour des cas d'utilisation spécifiques basés sur la sécurité et la décentralisation de Cardano.

Les chaînes de blocs créées de cette manière peuvent tirer parti du soutien de la communauté SPO existante et bénéficier de la communauté enthousiaste des followers de Cardano.

Pour les développeurs  de DApps, les sidechains personnalisées offrent des avantages en termes d'interopérabilité, d'évolutivité, de testabilité et de compatibilité.

**Interopérabilité**

La forme de communication la plus basique entre une chaîne principale et une chaîne secondaire est l'échange d'atouts. Étant donné que les atouts conservent leur nature lorsqu'ils sont transférés vers la sidechain, ils peuvent être retransférés tout aussi facilement. Un mécanisme de pont permet cette communication. Tant que les deux chaînes sont sécurisées, cette sécurité est répercutée sur les transferts dans les deux sens.

La communication entre la chaîne principale et la chaîne latérale leur permet de conserver leurs propres protocoles de consensus (qu'ils soient modifiés) et leurs formats de bloc tout en continuant à travailler ensemble, donnant ainsi access à une plus large gamme d'applications.

**Évolutivité**

Tout comme un chef de projet a le choix entre bon, rapide ou bon marché (choisissez-en deux), une blockchain a le choix entre trois objectifs concurrents : la décentralisation, la sécurité et l'évolutivité.

Étant donné que les sidechains peuvent être spécifiques à un domaine d'application, les transactions peuvent être effectuées plus rapidement, soulageant la chaîne principale de cette charge. L’amélioration de l'évolutivité des sidechains ne compromet pas la sécurité et n'a pas besoin d'affecter la décentralisation.

**Testabilité**

Les développeurs peuvent tester des DApps pilotes sur des sidechains dédiées. S'il y a une panne nécessitant un redémarrage ou une modification de l'interface avec la chaîne, alors seule la chaîne latérale est affectée, pas la chaîne principale. Cette phase agit comme une étape intermédiaire entre le fonctionnement du testnet et la version complète du réseau principal pour les fonctionnalités expérimentales et les nouvelles applications.

**Compatibilité**

Les sidechains peuvent exposer la même interface de programme d'application (API) qu'une chaîne existante et utiliser la sécurité et l'efficacité des protocoles de consensus de Cardano. Par exemple, la chaîne latérale Cardano EVM fournit un environnement d'exécution Solidity qui ne nécessite pas de mineurs, mais qui sert toujours les méthodes Ethereum JSON RPC. Les smart contrats Ethereum peuvent fonctionner sans changement, à des frais de gaz considérablement inférieurs.

### **Pour les SPOs**

Les sidechains offrent une opportunité aux SPOs en permettant à leurs pools d'attribuer plus de tokens que juste ada s'ils décident d'exécuter également un nœud de sidechain. Ces tokens spécifiques à la sidechain peuvent servir à différentes fins et à leur tour inciter les délégants à participer au réseau. Selon la façon dont les récompenses sont configurées sur la sidechain, les créateurs de blocs de sidechain peuvent être récompensés par de nouveaux tokens pour construire des blocs, les valider et contribuer à la sécurité du réseau. Tout Cardano SPO peut choisir de valider également les blocs sur la sidechain. S'ils le font, ils peuvent bénéficier de revenus supplémentaires pour fournir des services supplémentaires et utiliser plus de ressources.

Si un SPO choisit de valider les blocs sidechain, il devra fournir des ressources supplémentaires. Un peu d'espace disque est nécessaire pour stocker la sidechain, et ils doivent exécuter deux processus supplémentaires ; un suiveur de chaîne et un nœud de sidechain.

### **Pour les utilisateurs de DApp**

Une plus grande interopérabilité entre les chaînes, des processus de développement simplifiés, plus de plateformes de développement et des frais de transaction réduits ont tendance à augmenter le nombre et la variété des DApp. Plus de sidechains Cardano signifie une plus grande variété de conceptions de chaînes de blocs innovantes, des cas d'utilisation et des récompenses de staking plus élevées, ce qui a tendance à attirer plus de SPO et de délégants, et garantit par conséquent une sécurité accrue et une plus grande décentralisation. Ceci est le potentiel de l'écosystème des sidechains.

## **Conclusion**

La boîte à outils sidechain est la dernière livraison de la roadmap de Cardano au sein de Basho, la phase de mise à l'échelle, introduisant la programmabilité, l’interopérabilité et l’évolutivité plus élevées. Le développement des sidechains ouvre la voie à une adoption massive de Cardano en permettant un débit beaucoup plus élevé sans réduction de la décentralisation ou de la sécurité. Les développeurs de blockchain peuvent créer plus facilement des sidechains personnalisées. À terme, IOG espère voir émerger une famille de sidechains Cardano et de chaînes partenaires.

Le testnet public de la sidechain EVM a été publié, permettant à la communauté de déployer des DApps, de créer des smart contrats et de transférer des tokens entre les chaînes de test.

La boîte à outils publiée en janvier n'est pas une solution complète. Il existe des domaines d'amélioration connus, tels que l'expérience de pont, le mécanisme de récompenses SPO et le modèle de sécurité. Tous ces domaines seront améliorés avec la communauté au fur et à mesure - soigneusement et régulièrement - en collaborant pour obtenir des commentaires, des réflexions et des recommandations.

De nombreuses améliorations peuvent être apportées et il existe de nombreuses façons de gérer une sidechain. Cependant, IOG espére que ce qu'elle a développé en interne fournira un ensemble de capacités de base et posera des bases solides pour créer un ensemble d'outils et apporter de nouvelles améliorations en collaboration avec la communauté.

De la documentation supplémentaire et des didacticiels vidéo seront disponibles en temps voulu. Comme toujours, suivez [Les réseaux sociaux d'IOG](https://twitter.com/InputOutputHK) pour les dernières mises à jour.

Lisez les [spécifications techniques de sidechains](https://docs.cardano.org/cardano-sidechains/sidechain-toolkit/introduction/#technicalspecification) et [la documentation de développement](https://docs.cardano.org/cardano-sidechains/sidechain-toolkit/introduction), et [rejoignez la chaîne Discord de la communauté technique d'IOG](https://discord.gg/inputoutput) pour de plus amples discussions. Pour les demandes commerciales et de partenariat, contactez IOG via le [page de contact](https://iohk.io/en/contact-commercial).
