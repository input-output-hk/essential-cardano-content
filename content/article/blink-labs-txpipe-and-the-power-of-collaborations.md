---
title: Blink Labs, TxPipe and the power of collaborations.
tags:
  - Gimbalabs
  - Andamio
  - andamio.io
  - cardano go live coding
  - live coding
  - LiveCodingSession
url: ""
image: https://ucarecdn.com/d01a90b8-91e7-4520-b0c9-a8027d2f54f2/
image_text: ""
---

## **In this blog**

*   [UTxO RPC](https://utxorpc.org/): a collaborative project from [Blink Labs](https://blinklabs.io/) and [TxPipe](https://txpipe.io/).
    
*   [Andamio platform](https://www.andamio.io/) connecting potential contributors from inside and outside the Cardano community with this project, through its [Cardano Go Live Coding](https://us06web.zoom.us/meeting/register/tZwtcemrqTwoG9fYL2pYvrCwQG9u2tJNmqa6#/registration).
    
*   [Gimbalabs](https://discord.gg/gj2msNfz33) ready to play with the availability of data and services that this project creates in its [Gimbalabs Playground](https://gimbalabs.com/pbl/playground) and [Gimbalabs Open Spaces](https://gimbalabs.com/gimbalgrid/62) sessions.
    

In one of his [most recent tweets](https://twitter.com/Padierfind/status/1774132675164443064), Patick Tobler, [NMKR](https://www.nmkr.io/) founder, stated: "We need to massively increase the amount of transactions on Cardano to keep the chain sustainable."

![Alt text](https://gimbalabs.com/blog_006/image1.png "Patrick Tobler's tweet")

**_Source: Patrick Tobler's X account_**

Collaboration between projects inside and outside the Cardano ecosystem is one of the key components of Cardano's self-sustainability. However, how is this possible? How does each collaboration bring Cardano one step closer to its self-sustainability goals?

The subject of this post is one collaboration in particular: [Blink Labs](https://blinklabs.io/) and [TxPipe](https://txpipe.io/). But first, by way of context, some famous collaborations that have pushed the boundaries of what is possible in a variety of industries:

*   **Lennon and McCartney**: more than 500 million records sold.
    

![Alt text](https://gimbalabs.com/blog_006/beatles.jpg "beatles")**_Creative Commons license_**

*   **Bill Hewlett and David Packard**: HP currently has a market cap of USD 29.64 billion.
    

![Alt text](https://gimbalabs.com/blog_006/hp.jpg "hp")**_Hewlett-Packard garage exterior in Palo Alto, Silicon Valley. Creative Commons license_**

*   **C.S. Lewis and J.R.R. Tolkien**: "The Chronicles of Narnia" and "The Lord of the Rings".
    

![Alt text](https://gimbalabs.com/blog_006/lewis_tolkien.jpg "lewis tolkien")**_Creative Commons license_**

*   **Yves Saint Laurent and Pierre Bergé**: foundation of the Yves Saint Laurent fashion house.
    

![Alt text](https://gimbalabs.com/blog_006/yves.jpg "lewis tolkien")**_Le bureau d'Yves Saint Laurent. Creative Commons license_**

*   **Fleming, Florey, and Chain**: development and mass production of Penicillin.
    

![Alt text](https://gimbalabs.com/blog_006/penicillin.jpg "lewis tolkien")**_Creative Commons license_**

*   **Jordan, Pippen and their team**: 6 NBA championships for the Chicago Bulls.
    

![Alt text](https://gimbalabs.com/blog_006/bulls.jpg "cnicago bulls")

**_Creative Commons license_**

Hindsight is misleading, because it makes people think that there is something special about past events. However high-level and historical these collaborations may seem, their non-linear effect is not exclusive to them.

![Alt text](https://gimbalabs.com/blog_006/non-linear1.png "non-linearity")**_Source: Taleb’s Antifragility website by_** [abdelazizalgh](https://ghannami.com/talebs-antifragility/)

[Nassim Taleb](https://www.fooledbyrandomness.com/), a renowned scholar and author, is widely recognized for his work on non-linearity. Taleb's insights into non-linear systems emphasize the inherent unpredictability and complexity of the world, challenging traditional linear thinking and forecasting methods. In this context, collaborations take on a new significance.

![Alt text](https://gimbalabs.com/blog_006/non-linear2.png "non-linearity")**_Source: Taleb’s Antifragility website by_** [abdelazizalgh](https://ghannami.com/talebs-antifragility/)

By bringing together diverse perspectives, expertise, and resources, collaborations can help navigate the uncertainties and complexities of non-linear systems more effectively. They offer a platform for collective learning, adaptability, and resilience, enabling individuals and organizations to better anticipate, respond to, and capitalize on unexpected opportunities and challenges.

Thus, Taleb's ideas underscore the transformative potential of collaborations in an increasingly interconnected and unpredictable world.

[UTxO RPC](https://utxorpc.org/) is a collaborative project from [TxPipe](https://txpipe.io/) and [Blink Labs](https://blinklabs.io/) that was funded in Project Catalyst Fund 11. It's an interface tailored for interactions with UTxO-based blockchains, prioritizing performance and developer experience.

![Alt text](https://gimbalabs.com/blog_006/blink-tx-collab.png "UTxO RPC docs")**_Source:_** [UTxO RPC docs](https://utxorpc.org/)

By providing a common contract, a range of SDKs, and thorough documentation, [UTxO RPC](https://utxorpc.org/) aims to facilitate:

### **Reusability:**

Enabling shared components that can be reused across different projects to simplify the integration effort.

### **Interoperability:**

A common interface to simplify integrations between different parties and avoid the common pitfall of vendor lock-in.

### **Performance:**

A serialized binary format which is compact and efficient, resulting in smaller message sizes and reduced network overhead compared to its JSON counterpart

You can read the Catalyst proposals that led to this project here:

*   [gRPC ❤️ Cardano: A streaming API for Cardano using Dolos by TxPipe](https://projectcatalyst.io/funds/11/cardano-open-developers/grpc-cardano-a-streaming-api-for-cardano-using-dolos-by-txpipe)
    
*   [Cardano Node API: a Cardano Node companion written in Go](https://projectcatalyst.io/funds/11/cardano-use-cases-solution/cardano-node-api-a-cardano-node-companion-written-in-go)
    

This week at [Cardano Go Live Coding](https://andamio.notion.site/Open-Source-Cardano-Go-Libraries-Docs-Andamio-CLI-5266383e226246edb37d4c859d2a0a31), the [Andamio platform](https://www.andamio.io/) team took their first look at what [UTxO RPC](https://utxorpc.org/) will mean for the Cardano developer community: it's about a lot more than [Go](https://go.dev/) Development. It provides a common specificiation for how Go, Rust, Python, and JavaScript developers can build Cardano applications. This week's session was a great place for any developer to understand how.

![Alt text](https://gimbalabs.com/blog_006/blink-tx-collab-2.png "UTxO RPC docs")**_Source:_** [UTxO RPC docs](https://utxorpc.org/)

## **What’s Next?**

*   In case you missed the previous **_Cardano Go Live Coding sessions_**, including the last one, in the Andamio Blog [Cardano Go Live Coding Session #003](https://www.andamio.io/blog/006) you can find all the updates, including the access link to the next one (every monday, 13:00 - 14:00 utc).
    
*   At **Gimbalabs**, we are excited to make sure that **UTxO RPC** services and many others from other builders are accessible. The variety of data providers coming online right now, and the variety of ways these services can be deployed and shared, gives us confidence that the Cardano ecosystem will be build applications on robust, reliable, and distributed foundations. We will surely be playing with the UTxO RPC interface in our next [Gimbalabs Playground](https://gimbalabs.com/pbl/playground) and [Gimbalabs Open Spaces](https://gimbalabs.com/gimbalgrid/62) sessions.
    
*   Did you notice in one of the images above the following?
    

![Alt text](https://gimbalabs.com/blog_006/andamio-contributors-1.png "non-linearity")**_Source:_** [UTxO RPC docs](https://utxorpc.org/)

In Cardano's best projects there is always an open door for new contributors. The best startups in the ecosystem know that making their projects a thriving endeavor that cultivates a community of dedicated contributors and encourages engaging interactions is key to making them vibrant projects that accelerate their **_de-commit_** rate sooner than expected.

![Alt text](https://gimbalabs.com/blog_006/andamio-contributors-2.png "non-linearity")**_Source:_** [Andamio](https://www.andamio.io/)

The **Andamio platform** cuts through the noise and serves the essential know-how of your organization, so that potential contributors know exactly where to start and how to proceed. Higher engagement, stronger interactions between contributors, a dynamic project, flourishing with an increasing number of lines of code, poised on the brink of a transformative **_de-commit_** phase.

If you see a match with your needs, do not hesitate to contact the **Andamio platform** team, they will be ready to help you:

Email: [hello@andamio.io](mailto:hello@andamio.io)

X: [@AndamioPlatform](https://twitter.com/AndamioPlatform)

Linkedin: [Andamio by Gimbalabs](https://www.linkedin.com/company/andamio-platform)

Official website: [andamio.io](//andamio.io)
