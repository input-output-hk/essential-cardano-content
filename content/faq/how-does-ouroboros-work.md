---
title: How does Ouroboros work?
tags:
  - Ouroboros
  - Consensus
url: ""
image: ""
image_text: ""
---


Ouroboros randomly elects a slot leader from among the [stake pools](https://www.essentialcardano.io/faq/what-is-a-stake-pool) to create [block within a slot](https://www.essentialcardano.io/faq/what-are-blocks-slots-and-epochs). A slot is the primary unit of time used by the Ouroboros algorithm. The more [stake](https://www.essentialcardano.io/faq/what-is-stake) a pool controls, the greater the chance it has of being elected as a slot leader to produce a new block. When validating a transaction, a slot leader needs to ensure that the sender has included enough funds to pay for that transaction and must also ensure that the transaction’s parameters are met. If the transaction meets all these requirements, the slot leader will record it as a part of a new block, which will then be added to the chain.
