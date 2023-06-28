---
title: Engineering dive into Cardano's Dynamic P2P design
tags:
  - P2P
url: ""
image: https://ucarecdn.com/64232c15-53ee-4127-80bd-28b843383ce2/
image_text: Banner
---

### Discover the journey through the challenges, solutions, and triumphs behind the creation of a robust and scalable networking system

_This blog post was originally published on the_ [engineering blog](https://engineering.iog.io/2023-06-28-p2p)_._

As the Cardano ecosystem continues to grow and evolve, contributors to the Cardano ecosystem are  committed to continually refining and optimizing Cardano's networking infrastructure. The release of Dynamic peer-to-peer (P2P) networking, delivered with node v.1.35.6, was a collaborative effort of the networking team from [IOG](https://iog.io/), [Well-Typed](https://www.well-typed.com/), [PNSol](http://www.pnsol.com/), and the [Cardano Foundation](https://cardanofoundation.org/) and represents a highly performant deliverable and a significant milestone in Cardano's journey toward establishing a fully decentralized and secure blockchain platform.

Given that Cardano functions as a real-time stochastic system, its performance and security are inherently interconnected. The networking team remains committed to finding the ideal balance among various factors, including topological and topographic considerations, to enhance timeliness and connectivity.

This blog post takes you through the engineering journey behind the development of Cardano's Dynamic P2P design. It delves into the core design principles, highlights the challenges encountered along the way, and unveils the solutions the team devised to establish a robust and scalable networking system.

## What is Dynamic P2P?

The Dynamic P2P implementation continuously and dynamically refines the active topology through a peer selection process, with the objective of _reducing the overall diffusion time across the entire network_. Research findings suggest that utilizing a policy based solely on local information can result in an almost-optimal global outcome. This is achieved by monitoring the timeliness and frequency of peers that provide a block header, which is ultimately incorporated into the chain.

The primary goal is to eliminate highly ‘non-optimal’ peers while maintaining strong connectivity. To achieve this, peers considered less useful based on this metric are periodically ‘churned out’ and replaced with randomly selected alternatives. Simulation results indicate that this optimization method converges towards a near-optimal global outcome within a relatively small number of iterations.

Practically, Dynamic P2P replaces the manual configuration of peer selection (e.g. using the [topology updater tool](https://github.com/cardano-community/guild-operators/blob/alpha/docs/Scripts/topologyupdater.md)).

With manual configuration, stake pool operators (SPOs) were required to establish connections with a significant number of peers (50 for example) to maintain a minimum of 20 active connections consistently. This approach was necessary due to the static nature of configured peers and the varying availability of SPO relays.

However, with Dynamic P2P, nodes can be configured to maintain a specific number of active peer connections (e.g. 20) and select from all registered SPO relays on the chain. In the event of a lost connection with a peer, the node will automatically select alternative peers and persistently attempt connections until the desired target is reached. 

As a result, Dynamic P2P eliminates the requirement for over-provisioning of connections, offering a more efficient and adaptable networking solution.

## The design vision

Cardano operates as a cooperative system composed of autonomous nodes. It is not designed as a client-server model, meaning there is no central point of control or privileged class of centrally managed servers. While the network topology may have initially started as federated during the Byron development phase, the objective was to evolve it into a fully trustless distributed networking system capable of meeting the evolving demands of the Cardano ecosystem – all while ensuring optimal connectivity and performance.

As the networking team embarked on this engineering adventure, they were well aware that they would encounter numerous challenges and complexities along the way. However, they faced these challenges head-on, continuously refining the core ideas that would ultimately shape the design of the Dynamic P2P system:

1.  **Modularity and extensibility**: the system was designed with modularity in mind, making it easy to swap out or improve individual components as needed. This extensibility allows for seamless integration of new features and enhancements, ensuring that the design remains adaptive to the evolving needs of the Cardano ecosystem. Modularity is especially helpful when formal methods are applied to prove the correctness of low-level designs in relation to high-level specifications. By breaking down the system into smaller, more manageable components, it becomes possible to apply property-based testing to each module more effectively, ensuring that each part’s behavior is well-defined and adheres to the expected properties. Of course, the choice of functional programming with Haskell as the primary programming language played a significant role in achieving this level of modularity and extensibility.
    
2.  **Scalability**: as the network grows, the demand for a system capable of handling a larger number of nodes and transactions while respecting Ouroboros’ timing constraints also increases. To address this scalability requirement in the P2P design vision, the team considered scalability properties from the very beginning and incorporated strategies such as intelligent peer selection.
    
3.  **Security and resilience**: in a decentralized network, resilience and security are of paramount importance. The goal was to construct a system capable of withstanding internal and external disruptions. To achieve this, the networking team implemented robust error handling mechanisms designed for resilience against abuse, ensuring that users cannot attack the system through asymmetric denial of service attacks that deplete network resources for other users. With the P2P approach, each node can prioritize its connection to locally configured peers. This ensures that the node maintains a connection to trusted peers and can make progress in the network. Inbound connections are rate limited, and configurable peer targets allow the node to adjust its resource consumption. Additionally, careful management of connection states enables reusing duplex connections, allowing nodes behind firewalls to safely improve their connectivity while reducing the overall attack surface.
    
4.  **Performance**: a highly-performant network is crucial for ensuring a seamless user experience. Substantial effort was invested into optimizing the design by employing techniques such as efficient data transmission through multiplexing and utilizing protocols that support pipelining. Additionally, intelligent peer selection plays a vital role in reducing latency and ensuring a responsive and reliable network.
    

Establishing effective communication within the Cardano network requires achieving low latency and good connectivity. To fulfill these essential requirements, Dynamic P2P was designed to ensure a robust, scalable, and resilient foundation for the ecosystem's continued growth. However, it is important to recognize that peer trustworthiness is a critical factor in maintaining a secure and reliable network. While delving into the details of trustworthiness is beyond the scope of this blog post, it is worth noting that the P2P design incorporates multiple measures to mitigate potential risks and safeguard the network.

## Analyzing peer selection for block relays in Ouroboros

Ensuring Ouroboros’ performance and security is crucial, and one critical aspect of this is the timely relay of new blocks across the network. Ideally, the connections within the P2P network should be organized in a way that minimizes the time required for a block to be relayed from any node to all other nodes in the network.

However, achieving this goal presents a complex challenge, with limited prior work available that is applicable in a trustless setting. Effectively addressing this problem necessitated the development of innovative solutions that could strike a balance between swift communication and maintaining the integrity and security of the decentralized network.

### Problem statement 

An effective solution for optimizing performance involves minimizing the number of ‘hops’ a block needs to traverse across the network. In graph terms, this translates to reducing the average number of edges a block traverses. Moreover, the length of each hop or edge is crucial. Local links exhibit lower latency compared to intercontinental links, although some intercontinental links _are_ necessary for global block relay. For example, a sub-optimal solution would involve excessive intercontinental links, such as routing from Europe to Asia and back.

Existing networking algorithms can generate optimal ‘spanning trees’ that could serve as paths for block relay. However, these algorithms rely on nodes trusting each other to exchange accurate information, which is unsuitable for a blockchain P2P network where nodes cannot inherently trust each other.

An ideal solution should rely on ‘local’ rather than ‘global’ information – information that nodes can assess individually without relying on shared and trusted data. Nevertheless, having an optimal solution that depends on perfect global information can serve as a valuable reference point.

### Preliminary research

The networking team collaborated with network researchers from Athens University, who specialize in decentralized systems and their protocols, to undertake a crucial task – simulating different network policies and studying the trade-offs in diffusion time.

The pivotal question regarding dissemination is determining which nodes should forward blocks to each other, or, more precisely, which dissemination links should be established among nodes to improve dissemination speed.

In tackling this question, together with the researchers we pursued two primary approaches:

1.  The first approach assumes that links are independent of the dissemination process. It involves simulating a static overlay where links are established according to predefined rules. Multiple disseminations are then executed to measure the performance.
    
2.  The second approach involves dynamically adjusting the overlay. In this approach, nodes initially establish connections with random nodes in the network and continuously monitor the performance statistics of their neighbors. Periodically, each node adjusts its set of neighbors based on these statistics, deciding which neighbors to retain and which ones to replace.
    

  
![Close-Random policy comparison](https://ucarecdn.com/f354197d-1b47-4a01-8bdf-3460133f4a90/)Figure 1. Close-Random policy comparison

The plot demonstrates the rapid dissemination of a block throughout the network, reaching all nodes eventually. In this experiment, all nodes use the exact same Close-Random policy – e.g. _C6R4_ means nodes connect to six close peers and four random peers. Initially, all nodes are uninformed, meaning they have not yet received the specific block. However, they become informed at some point during the experiment. The dotted line represents the theoretical optimal solution, assuming all informed nodes possess complete knowledge of which peers are most advantageous, enabling such connections (god's view policy).

It is important to clarify that the Close-Random policy was not implemented directly. Rather, it was employed as a practical theoretical tool. It strikes a balance by incorporating non-local factors while remaining simple enough to be approximated using only local information.

This analysis demonstrates how close it is possible to get to an ideal solution using primarily local information. What's intriguing is that this approach surpasses expectations. Achieving a result within a factor of two of perfection would have been commendable, but the team discovered that it is possible to surpass even that.

  
![Close-Random policy vs two groups calibration](https://ucarecdn.com/d38eeaa8-b0ee-4aa1-9208-c25aed9bf61d/)Figure 2. Close-Random policy vs two groups calibration

Figure 2 compares the outcomes from the two approaches described earlier. The simulation involved each node maintaining six _close_ neighbors (based on Round Trip Time (RTT)), and four _random_ nodes. These links were kept static throughout the entire experiment (hence the constant blue lines). In the ‘two groups (<=100ms and >100ms)’ policy, each node maintains a fixed number of close links and remote links: ‘close’ signifies that the RTT to that neighbor is less or equal to 100 ms, while ‘remote’ implies that the RTT is more than 100 ms. Nodes start with all random links and periodically calibrate. During this calibration, they retain up to a fixed number of neighbors that have an RTT of less than 100 ms, and they replace some of the remaining neighbors with newly picked random nodes.

This _two groups_ policy serves as a straightforward, effective approximation for evaluating scoring policy behavior. It's worth noting, however, that this policy isn't the one currently employed.

  
![Close-Random policy vs Peer Score](https://ucarecdn.com/a9880690-2611-4a63-ae71-22903381705c/)Figure 3. Close-Random policy vs Peer Score  
  
In Figure 3, a comparative analysis is presented between the outcomes resulting from the previously discussed Close-Random policy and a different peer scoring policy. This alternative policy evaluates peers based on the frequency with which they supply a new block header to the node before others. In this experimental setup, nodes start with random links and periodically undergo calibration. During these calibration intervals, the bottom-performing 20% or 40% of peers are replaced with new, randomly selected nodes.

The blue line in the graph represents the policy currently being used (further details about this can be found in the subsequent section). The green line illustrates the theoretical optimum.

Upon close examination of this graph, and drawing comparisons to the previous one, we can identify key variations in the effectiveness of the different scoring policies. Nonetheless, it's critical to keep in mind that these variations are not directly comparable due to the different parameters applied in each experiment. Some experiments measure complete dissemination time, while others consider the 99th percentile, which represents a slightly lower value. Moreover, latency traces between nodes differ across experiments, leading to distinct results.

In this context, the 99th percentile for the _20%_ policy shows a lower equilibrium compared to the _two groups_. However, this is not a direct 'apples to apples' comparison due to the reasons stated above.

The policy that we currently employ goes beyond the use of RTT when selecting peers. In our quest for a more robust and reliable approach, we sought an alternative that would accurately reflect a peer's usefulness. This brought us to the concept of rewarding peers for being the first to present a node with a new header or block. This approach presents an authentic measure of a peer's contribution to the network, and unlike RTT, it cannot be easily manipulated or faked.

## P2P networking based on local information

In the Dynamic P2P design, each node maintains a local view of the network and evaluates potential connections considering historical performance. Nodes continuously monitor and adjust their connections, seeking better performing peers to optimize their network position and minimize the number of hops required for block relay.

Each node maintains three sets of known peer nodes:

*   _Cold_ peers: known peers without an established network connection.
    
*   _Warm_ peers: peers with an established bearer connection, used for network measurements but not for any application-level consensus protocols, their primary role is to serve as a readily available set of nodes.
    
*   _Hot_ peers: peers with an active bearer connection, utilized for the application-level consensus protocols.
    

As previously mentioned, nodes maintain limited information about these peers, based on previous direct interactions. For cold nodes, this information may often be absent due to the lack of prior direct interactions. This information resembles ‘reputation’ in other systems, but it is essential to emphasize that it is purely local and not shared with any other node.

  
![Peer discovery on Cardano](https://ucarecdn.com/dc9ceaf1-8b23-45cd-a860-f2b03349e8f0/)Figure 4. Peer discovery on Cardano

Figure 4 illustrates the promotion/demotion cycle, managed by the peer selection governor (PSG). This component is responsible for achieving specific targets, such as maintaining a designated number of known and active peers.

Additionally, a local static configuration can be utilized to designate certain nodes as hot or warm peers. This approach allows for fixed relationships between nodes managed by a single organization, such as a stake pool with multiple relays. It also facilitates private peering arrangements between SPOs and other potential deployment scenarios.

In cases of adversarial behavior, a peer can be immediately demoted from the hot, warm, and cold sets. The decision is not to retain negative peer information for extended periods to limit resource consumption in a permissionless system, as doing so could potentially simplify Sybil attacks.

### Churning and local policies

The peer churn governor (PCG) is a component that plays a pivotal role in managing the health and efficiency of a network by navigating issues related to network partition and eclipse attacks, by adjusting the values of the targets for hot, warm, and cold peers so as to promote their churning.

In this process, the PCG modifies the frequency at which peers are promoted (upgraded from cold to warm, or warm to hot) or demoted (downgraded from hot to warm, or warm to cold). This decision is guided by scoring functions that evaluate peers based on their usefulness and performance.

These scoring functions include:

*   **Hot demotion policy**: responsible for determining which ‘hot’ (highly active and valuable) peers should be demoted. The score is calculated based on a peer's contribution to the network, considering factors such as the number of _blocks_ it has been the first to provide and/or the number of _bytes_ it has provided. During normal operation, a combination of these factors is used to compute the score. However, during bulk sync data synchronization, the number of bytes provided takes precedence. 
    
*   **Warm demotion policy and cold forget policy**: handle ‘warm’ and ‘cold’ peers, determining which peers should be downgraded or removed from the network. These decisions are influenced by a certain level of randomness and various characteristics. Factors taken into account include previous failures or a tepidity flag, which indicates less reliability or lower activity levels in peers.
    

During the node syncing process, the PCG ensures that no more than two active connections are utilized to prevent resource over-utilization. Once the node is fully synced, the PCG facilitates periodic churn, refreshing 20% of the peers every hour. This promotes a robust and adaptable network.

While the Close-Random or Score-based policies explored in the research are not directly replicated in the production environment, they have significantly influenced the design of the implemented policies. Thus, the research findings have played a crucial role in shaping the networking policies within the Cardano production environment.

## Development approach

Cardano's P2P implementation is built upon Haskell, a functional programming language widely recognized for its correctness, safety, and maintainability. Haskell's robust type system aids in the detection of potential issues during development, resulting in more robust and reliable code. Additionally, the networking team have developed and now employ [io-sim](https://github.com/input-output-hk/io-sim), a time-based discrete event simulation library that offers precise control over entropy and timing in simulations. This tool faithfully replicates Haskell's runtime system, including features such as Software Transactional Memory (STM), _MVar_s, and more. This level of control allows for reproducibility, regression testing, and examination of worst-case scenarios. The combination of Haskell and `io-sim` allows rigorous testing of the same code used in the P2P production system under a wide range of conditions, ensuring its readiness to tackle real-world challenges.

In the commitment to building a reliable system, the networking team employed extensive property-based testing. These tests were specifically designed to uncover complex bugs and corner cases that might go unnoticed in traditional testing approaches like unit testing. One distinctive aspect of the testing process is the inclusion of simulations that replicate years of system operation. This comprehensive approach allows mimicking years' worth of activity, uncovering rare bugs that may only surface under specific or prolonged conditions. However, it is important to note that the quality of these tests ultimately depends on the quality of the generators employed. Generators play a critical role in producing diverse and representative inputs for thorough evaluation.
