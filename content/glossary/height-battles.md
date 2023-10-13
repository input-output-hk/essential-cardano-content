---
title: Height battles
tags:
  - height battles
  - Vcoincheck.io
url: ""
image: ""
image_text: ""
---

In the context of the Cardano network, when nodes receive two valid blocks for a single slot, nodes will select the block with the higher slot number and orphan the other. The reason for this is that the SPOs do not propagate the block within the appropriate timeframe.

To completely avoid blocks from getting orphaned in height battles, it is crucial for the block to be disseminated across the entire network within one second (1s).
