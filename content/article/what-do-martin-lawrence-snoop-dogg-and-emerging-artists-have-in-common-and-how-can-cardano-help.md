---
title: What do Martin Lawrence, Snoop Dogg, and emerging artists have in common,
  and how can Cardano help?
tags:
  - meshjs
  - aiken
  - Smart Contracts
url: ""
image: https://ucarecdn.com/d83cbc3f-f932-45c4-99b5-ed44af500bcd/
image_text: "The Beach Bum - official poster. Credits: Neon et al."
---

What do [Martin Lawrence](https://x.com/realmartymar), [Snoop Dogg](https://x.com/SnoopDogg), and emerging artists have in common? **_To advance their careers, they are at the mercy of someone else_**_._ In an interview, _Snoop_ once commented that, in the music business, it takes an artist approximately 35 years to get back the masters of his work, and therefore _the governance over his profits and the use of his work._

For a complex problem, complex systems must be orchestrated to build a solution that fights back: the [Content Ownership Smart Contract](https://meshjs.dev/smart-contracts/content-ownership), one of the most recent creations of [MeshJS](https://meshjs.dev/), is a contribution to creating a single source of truth of who owns content. The set of _Aiken validators_ that make up the [MeshJS](https://x.com/meshsdk) solution can be integrated with other logics such as royalties, licensing, etc.

The logic behind the complex design of the _Content Ownership Smart Contract_ is quite simple:

When content is created (`Create Content` component of the Mesh Playground), the hash of the created content is included in the transaction. Also, it’s referenced in the transaction:

1.  the Content Registry (a previously deployed validator — `Send Ref-Script Onchain` component of the Mesh Playground).
    
2.  the Ownership Registry (a previously deployed validator — `Send Ref-Script Onchain` component of the Mesh Playground).
    
3.  the NFT of the owner of the content that is in an Oracle contract (`Mint One Time Minting Policy` component of the Mesh Playground). This NFT was minted by the same owner of the content using a _one-time minting policy_ created by the _dapp_ creator (the owner of the _content_ is not the same as the owner of the _dapp_ that provides the _Content Registry service_. Note additionally, how the address in the “Operation Address” field is the same in all components — terminated in _e4cxr_).
    

![](https://cdn-images-1.medium.com/max/880/1*MKJfrbXlPLWKr0MG9Am9Ew.png)Fig 1. `Create Content` transaction in Eternl wallet.

Also, by providing the appropriate _TxHashes_ as in 1, 2, and 3, they are also referenced in the transaction:

4\. the _token_ related to the _Content Registry_  
5\. the _token_ related to the _Ownership Registry_

#### **Inspecting the Datums**

Now, notice how, upon inspecting the _datums_ related to the _Content Registry_ and _Ownership Registry_ tokens after submitting a new transaction in the `Create Content` component of the Mesh Playground using the same information from the previous transaction (i.e., using the same ownership registry and the same content registry), you can see how they change given the increase in the number of content and ownership records.

![](https://cdn-images-1.medium.com/max/1320/1*ZK6ZBpkhOX3_FHHPDoEmsg.png)Fig 2. Datums of the Content Registry and Ownership Registry tokens, before and after a `create content` transaction.

> Bringing real use cases and building tooling that recreates them using the Cardano blockchain is a mission we will continue to go deeper into.

####    
Next Steps

*   Go to Mesh Playground and explore the contract demo: [https://meshjs.dev/smart-contracts/content-ownership](https://meshjs.dev/smart-contracts/content-ownership)
    
*   Imagine other use cases where having a single source of truth about ownership of an asset can reduce or eliminate costs, conflicts, intermediaries, etc.
    
*   Both on-chain and off-chain codes are open-source and available on Mesh Github Repository:[https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/content-ownership](https://github.com/MeshJS/mesh/tree/main/packages/mesh-contract/src/content-ownership)
    

> 🧑‍🍳Want to know what we are cooking for this Catalyst Fund 13 and give us your ♥️support to keep the💡lights on? Thanks in advance: [https://meshjs.dev/about/catalyst](https://meshjs.dev/about/catalyst)
