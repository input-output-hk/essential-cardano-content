---
title: Weekly development report as of 2026-03-06
tags:
  - Ecosystem
  - Development
  - Statistics
  - Weekly development updates
url: ""
image: https://ucarecdn.com/5e6b1be6-4b1b-4cd0-b321-f9f18ca77ab8/
image_text: Cardano weekly development report as of 2026-03-06
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   Ada will now be accepted as a payment method in [137 SPAR](https://x.com/Cointelegraph/status/2029595442019795405) stores across Switzerland
    
*   Cardano [Buidler Fest](https://x.com/Cardano_CF/status/2029618206285943199) will take place in Argentina on March 24–25
    
*   [Bodega Labs](https://x.com/BodegaCardano/status/2028822378885587410) will launch a fully private prediction market on Midnight Network
    
*   [Danogo](https://x.com/DanogoFinance/status/2027785713937494157) announced plans to launch a USDCx lending pool
    
*   Cardano Foundation’s Reeve will be integrated into [BlockSign](https://x.com/docufi3d/status/2029113285056880734), enabling one-click publishing of proof of reserves on Cardano.
    

### CORE TECHNOLOGY

This week, the **ledger** team conducted additional testing and fixed several minor bugs. They also implemented further restructuring of the ledger state to improve performance and simplify the ongoing ledger HD implementation. Finally, they progressed with nested transactions – defining two major ledger rules to process sub-transactions, and with canonical ledger state – implementing two additional namespaces.

### WALLETS AND SERVICES 

The **Lace** team is currently supporting the Midnight mainnet release. 

They are also advancing LaceID – a native identity feature within the Lace wallet. LaceID will enable users to manage verifiable credentials alongside native assets and non-fungible tokens (NFTs) in a single, trusted environment. LaceID is currently in development and is in its first phase of the roadmap – proof of humanity. Follow these updates to learn more as development progresses.

Finally, the team continues work on the mobile application development.

### SCALING

This week, the **Mithril** team continued implementing new succinct proofs. They completed [signer authentication](https://github.com/input-output-hk/mithril/issues/2915) for SNARK verification keys, calibrated precision for lottery target value computation, and aligned domain separation tags as part of the SNARK circuit refactoring. Progress also continued on SNARK pre-aggregation primitives, improved error handling within the refactored circuit, the full review of the recursive circuit prototype, and the [technical report](https://github.com/input-output-hk/mithril/issues/2981) for the recursive Halo2 circuit.

Additionally, the team finalized [proof routes](https://github.com/input-output-hk/mithril/issues/2988) for Cardano blocks and transactions in the aggregator REST API and continued preparations for the next distribution release. They advanced the [integration of Mithril](https://github.com/input-output-hk/mithril/issues/3012) into the Cardano Developer documentation site, added support for upgrading the Cardano node without requiring a new Mithril distribution, and completed the upgrade to Cardano node v.10.6.

Finally, they fixed a performance regression in the transaction proof route and worked on a slow import issue on dev aggregators.

### VOLTAIRE

The **Intersect** committee elections for 2026 have been [announced](https://intersectmbo.org/news/upcoming-intersect-committee-elections). Applications to stand for election will open at the end of March.

### RESEARCH 

This week, the **Input Output Research (IOR)** team presented two papers at [Financial Cryptography 2026](https://ifca.ai/fc26/). 

The ‘[Incentivizing Geographic Diversity for Decentralized Systems](https://ifca.ai/fc26/preproceedings/17.pdf)’ paper establishes a formal model to assess geographic diversity and proposes a game-theoretic framework to incentivize greater decentralization in networks. Geographic centralization makes systems vulnerable to regional disasters, attacks, or political crackdowns. The authors designed a system that rewards people for setting up nodes in underrepresented areas and more diverse locations while using round-trip time measurements to ensure those nodes are indeed reporting their true physical location.

The paper ‘[On Sybil-proofness in Restaking Networks](https://www.iog.io/papers/on-sybil-proofness-in-restaking-networks)’ was presented at the associated [5th Workshop on Decentralized Finance (DeFi)](https://ifca.ai/fc26/defi/program.html). This paper addressed how restaking allows one person to use the same deposit to secure multiple services, but this creates a risk where they can hide their identity to avoid being punished for bad behavior. The research shows that it is mathematically impossible to design a penalty system that simultaneously prevents all types of hidden-identity attacks.

The proposal submission date has been extended to March 9, 2026, for the cryptographic tools for the blockchain workshop, affiliated with Eurocrypt 2026, in May.

The team also published a blog about [building Midnight on peer-reviewed foundations](https://www.iog.io/news/from-research-to-reality-building-midnight-on-peer-reviewed-foundations).
