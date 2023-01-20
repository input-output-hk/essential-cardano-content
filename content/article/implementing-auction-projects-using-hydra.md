---
title: Implementing auction projects using Hydra
tags:
  - Hydra
url: ""
image: ""
image_text: ""
---

### A paper by IOG and MLabs presenting a way for handling auctions using Hydra



This project is a collaboration between Input Output Global, Inc. (IOG) and MLabs Ltd. (MLabs) to develop a reference implementation of an auction that uses Hydra protocols. The purpose of this is twofold:

1. To demonstrate that it is now possible to develop substantial applications for a valuable use case with Hydra’s current implementation.
1. To constructively determine and align Hydra Head protocol design with the concrete existing use cases in the Cardano ecosystem and simplify the protocol’s adoption by developers.

The hope is that this project, and similar projects focusing on other use cases, will blaze the trail for the Cardano community to start using Hydra for scalability in common practice.
## **Hydra Head protocol**
Hydra is a family of protocols intended to provide the layer 2 (L2) scalability solution for Cardano. The Hydra Head protocol is the first protocol in this family — it is a suite of smart contracts and software that allows any group of participants to establish isomorphic, multi-party state channels (Hydra Heads) with each other. The Hydra Head protocol will be used in this project.

Hydra Heads allow participants to transact with each other, using the funds that they brought into the state channels, without having to submit these transactions to Cardano’s main network (L1). The final result of these interactions between Hydra Head participants can be brought back to Cardano L1 by closing the Hydra Head, which releases the funds inside the Hydra Head to be used in other Hydra Heads or otherwise on Cardano L1.

Transactions within a Hydra Head have the same format and properties as transactions on Cardano L1 – they are *isomorphic*. In principle, this allows Cardano DApps to re-use a significant portion of their codebase when transitioning some of their smart contracts to use Hydra.

One exception to this isomorphism property is that token minting/burning within a Hydra Head cannot affect Cardano L1. The only thing that a Hydra Head can achieve on Cardano L1 is the redistribution of existing tokens from the UTXOs committed to the Hydra Head to new UTXOs. This is done according to the transactions that participants have consented to inside the Hydra Head.

There are also some differences between the consensus protocols of Cardano L1 and Hydra L2. This may require existing Cardano DApps to adapt their design so that they can maintain their desired behavior within the Hydra Head environment. In particular, unlike Cardano L1, the Hydra Head participants must all remain online and responsive to each other, during the operation of the Hydra Head, and all participants must acknowledge and agree to each transaction within the Hydra Head for it to have an effect.

Applications can be run within a single Head, or they can be spread out across a network of Hydra Heads. When an application is spread across a network of Hydra Heads, its global state can be evolved either through communication between Hydra Heads (bypassing L1) or by synchronizing local head states to L1 and resolving them there.

There is an evolving catalog of Hydra Head network topologies, each with its benefits/limitations. The catalog is expected to expand as more applications will be built on Hydra. Some of these topologies are used in the Hydra-based auction designs that we discuss below.

More information [on Hydra is available here](https://hydra.family/head-protocol/).
# **Auction projects business analysis**
In the *discovery* phase of this project, a business analysis was conducted to better understand the auction space on Cardano and how it can leverage Hydra scaling technology.

IOG and MLabs surveyed a broad group of Cardano projects building auctions and NFT marketplaces, from which a smaller group of four projects was selected for in-depth interviews on:

- the specifics of their auction use case
- their assessment of the benefits and limitations of Hydra
- their preferences about certain tradeoffs that may be required in transitioning L1 auction smart contracts to the Hydra Head environment
## **English-style auction use case**
We discovered that there is broad agreement among the interviewees that an English-style auction with standard features should be targeted by the reference implementation in this project. All of the interviewees are planning to use such an auction within their respective platforms.

The core features of an English-style auction are as follows:

- A seller provides a product to be sold at the auction (the “auction lot”) – e.g. an NFT.
- When the auction starts, bidders can begin placing bids, which must be higher than the starting price defined by the seller.
- The winning bidder must pay his bid. This can be guaranteed by requiring bid deposits to fully back each bid, or else it can be more weakly enforced by imposing monetary or reputational penalties on bidders that dishonor their bids.
- During the auction, each bidder may increase his bid by at least the minimum bid increment defined by the seller.
- At the end of the auction:
  - the bidder with the highest bid should receive the auction lot,
  - the other bidders should receive refunds of any bid deposits that they have made in the auction, and
  - the seller should receive the proceeds from the highest bid after appropriate fees have been deducted.

Additional useful features may be included in an English-style auction:

- Immediate buyout price – the seller may set a price at which the auction lot can immediately be purchased during the auction, ending the auction in favor of the immediate buyer.
- Popcorn bidding – the auction deadline can be extended if there are bids still being submitted close to the deadline.
- Secret reserve price – before the auction starts, the seller may set a secret price that must be exceeded by the highest bid for that bid to win the auction. At the end of the auction, the reserve price is revealed, and if it is not exceeded by any bids, then the auction lot remains unsold.
- A sequence of auction lots – when bidding closes on one auction lot, the bidders can remain in the auction as the next auction lot in the sequence is put up for bidding.

One of the interviewees is also seeking to implement a Dutch-style auction, in addition to the English-style auction that they will use elsewhere on their platform. In a Dutch-style auction, the auction price starts high and then decrements automatically over time, until a bidder agrees to buy the auction lot at the current price – winning the auction. While the smart contracts for a Dutch-style auction are different from those of an English auction, they share most of the Hydra limitations for auctions. Thus, a reference implementation of an English-style auction that properly mitigates the Hydra limitations would be useful for the Dutch-style auction, as well.

Ultimately, the interviewees’ preference is to prioritize a Hydra-based auction implementation that provides the core English auction features while sufficiently mitigating the limitations of Hydra for the auction use case. The additional features would be nice-to-have, as well, but they could be added on by the projects themselves as they adapt our reference implementation to their own needs. The primary problem that they are hoping we will solve is how to implement a functional English auction with the core features of Hydra.
# **Benefits and limitations of Hydra for auctions as of November 2022**
In both the survey questionnaire and the in-depth interviews, respondents were asked about the benefits and limitations of the Hydra Head protocol for their projects. In the in-depth interviews, interviewees were provided a standard briefing on Hydra to ensure that they were properly informed about how the technology works when giving their answers about benefits and limitations.
## **Limitations of Cardano L1**
Survey respondents identified the following limitations of running general applications on the Cardano main network:

1. Transaction throughput is insufficient for high-frequency/volume user interactions.
1. Transaction finality time is too slow.
1. Transaction costs are too high.
1. Data storage capacity is too low for data-rich applications.
1. It is hard to reliably chain transactions between several participants.

The first three limitations particularly affect the scalability and business viability of auction projects on Cardano:

- Low transaction throughput can limit the number of bids in auctions, which may prevent them from reaching their full sale price.
- Slow transaction finality can slow down the rhythm of auctions, reducing the excitement/enjoyment that bidders feel from participating in auctions.
- High transaction costs can cut into the profits of sellers and auction houses, or increase participation costs for users.
## **Benefits of Hydra for auctions**
Interviewees hope to realize the following benefits from using Hydra in their auction projects:

1. Higher throughput and faster transaction finality would allow the bidding frequency to be increased in auctions.
1. Cheaper transaction fees (possibly zero fees) would reduce costs for bidders, sellers, and auction houses.
1. Isomorphic smart contracts would allow significant re-use of L1 smart contracts in L2 and potentially a flexible deployment between L1 and L2. This could reduce development and audit costs.
## **Limitations of Hydra for auctions**
The interviewees identified the following limitations that are currently discouraging them from pursuing a Hydra-based auction implementation on their own.

First, it is unclear how to run zero-sum games within a Hydra Head. In the simplified head protocol (currently implemented in the [hydra-poc GitHub repository](https://github.com/input-output-hk/hydra-poc)), any Head participant at any time can veto the further evolution of the Hydra Head. Exercising this veto power leaves other participants no choice but to close the Hydra Head to L1 with the last Head state that all participants managed to agree on before the veto.

For an auction run within a single Hydra Head, this veto power is particularly problematic because it can prevent the auction from having any acknowledged bids at all. Indeed, there is no intrinsic incentive for any bidder to sign any bids submitted by any other bidder within the Hydra Head because the other bidder’s bid increases the price that the bidder would have to pay to win the auction.

Second, only the participants listed in the Hydra Head initialization can participate in a Hydra Head (i.e. no new participants can join), and every Head participant must remain active and responsive to other participants for the Hydra Head to continue operating (i.e. no participant can leave without closing the Hydra Head for all participants). This is a significant limitation for single-head auctions because it is highly desirable to let new bidders join ongoing auctions. Furthermore, bidders would prefer not to be stuck in auctions that they are no longer interested in, which may even lead them to exercise their veto power to close the Hydra Head prematurely – an undesirable outcome for single-head auctions.

Third, Hydra Head participants may only use the funds that they committed to the Hydra Head before it opened. This limitation exists in the current implementation of Hydra ([hydra-poc repository](https://github.com/input-output-hk/hydra-poc)), but it will be lifted when incremental commits/de-commits are implemented later in the Hydra roadmap. For now, this limitation effectively caps the maximum reachable price in any Hydra-based auction that requires bids to be fully backed by bidder deposits. Furthermore, it reveals each bidder’s maximum possible bid, which can be exploited by other bidders that have more funds committed to the Hydra Head.

The interviewees indicated that all three of these limitations would have to be sufficiently mitigated for a Hydra-based auction to be viable as a product to be launched on Cardano, but that it is particularly important to overcome the first limitation for them to consider providing a Hydra-based auction on their platforms.
# **Auction designs on a single Head**
## **Basic single-head auction**
In this baseline design for a single Head auction, the seller and all bidders form the set of participants of a Hydra Head that they open for the auction. Several ways to mitigate the Hydra limitations for a single-head auction were considered.

The participant veto power with a single Hydra Head can be mitigated by:

- marketing single-head auctions as a premium service that allows higher-frequency bidding
- listing more interesting/valuable products for sale in these auctions

Access to this premium service would be provided to sufficiently KYC’ed users with a high reputation and a deposit that can be slashed by the auctioneer for bad behavior. Bidders are incentivized to participate in good faith within the single-head auctions, to avoid degrading their reputation, losing access to this premium feature, and/or having their deposits slashed.

The requirement for participants to always be active and responsive to all participants within a Hydra Head can be mitigated by using the [managed Head topology](https://hydra.family/head-protocol/topologies/managed/), where the auctioneer provides the infrastructure to broadcast Hydra Head transactions and signatures between Head participants and even to run some of the Hydra Head software on behalf of participants. Under this topology, participants still maintain the right to withhold consent from any transaction within the Hydra Head, but now the auctioneer can potentially censor the communication between participants.

To mitigate the effects of only the pre-committed funds being available in the auction (before incremental commits/de-commits become available on Hydra):

- Require all bidders to deposit the same amount of funds into the Hydra Head so that no bidder has an informational advantage over other bidders in terms of ability to pay.
- Use the “immediate buyout price” feature, and set that price to the fixed deposit requirement for bidders to participate in the auction. No rational bidder would bid higher than the immediate buyout price anyway, so such an auction would effectively be unconstrained by this Hydra limitation.

Some of the interviewees indicated that this mitigated variant of the single-head auction design could potentially be viable on their platforms.
## **Single-head secret auction**
This design would likely be useful only in a rather niche application of an auction, but it was included here as an illustrative example because technically it can eliminate most of the rational incentives for a bidder to exercise his veto power against other bidders within a Hydra Head.

Here, bidders are required to set their respective initial secret bids when the auction is being set up before the Hydra Head opens. When the Hydra Head opens and until the auction closes, bidders are allowed to change their own secret bids for new bids, which may be lower or higher than their previous bids. In this way, bidders should in general have very little incentive to veto each other’s bids, because they don’t know if the new bids are lower or higher than before.

Of course, the secrecy of bids in this auction is limited (as an upper bound) by the funds that each bidder commits to the Hydra Head. However, this limitation can be mitigated with the same techniques as for the regular single-head auction.

Interviewees were not particularly enthusiastic about this design, because it does not allow participants to know what the highest bid is at any time before the auction ends, and because it is not clear how valuable it is to users to be able to adjust secret bids during some period of time.
## **Delegated custodial auction**
In this design, a group of delegates takes custody of the auction lot and the bidders’ deposits into the auction. Bidders submit their bids to the Hydra Head by proxy through the delegates, and all delegates must sign a bid for it to take effect. Every bid must be backed by the bidder’s funds within the Hydra Head.

A significant advantage of this design is that it eliminates the requirement for the seller and bidders to always be online and responsive to Hydra Head participants for the auction to continue running. Furthermore, each bidder only needs to sign the bids he submits to the auction. Only the delegates that run the Hydra Head consensus for the auction are required to be online and responsive during the auction, and they can be paid for providing this service reliably.

The bidders can be offline and idle as long as they do not wish to place any new bids, and the seller’s participation is not needed after the auction lot is deposited into the Hydra Head. This can be a much more pleasant user experience than in the non-custodial Hydra-based auctions, where the seller and bidders must sign every transaction that they receive within their Hydra Head.

Another advantage of this design is that it eliminates the bidders’ veto power because bidders are not direct participants in the Hydra Head and thus cannot withhold their signature for consensus over other bidders’ bids within the auction.

Unfortunately, giving custody to the delegates over the auction lot and bidder deposits allows the delegates to collude to steal these funds from the auction. Users may be reluctant to sell high-value NFTs or participate with high deposits in a custodial auction. The auction house service itself may face additional regulatory burden and potential legal liability if it runs custodial auctions.

Some interviewees were not supportive of running custodial auctions on Hydra, arguing that these auctions are not much different from running traditional Web2 auctions. Other interviewees indicated that they may consider running custodial auctions if the user-experience improvements outweigh the disadvantages of taking custody.
## **Voucher auction**
This design is [described on the Hydra website](https://hydra.family/head-protocol/use-cases/nft-auction/). It does not enforce that the winning bid is paid, but it allows bidders to place bids that exceed the funds that they respectively committed to the Hydra Head.

The auctioneer forges and distributes a “bidding paddle token” NFT to each bidder that allows the bidder to place bids within the auction’s Hydra Head. The auction proceeds according to the standard English-style rules, without requiring bid deposits, and then the winning bidder is issued a voucher on L1 when the auction closes. The winning bidder can choose to redeem his voucher in exchange for the auction lot on L1, by paying the winning bid amount.

A major advantage of this auction design is that it requires very few transactions to open and close the Hydra Head, resulting in very low setup costs and possibly supporting more Hydra Head participants:

- Only the bidding paddle tokens need to be deposited into the Hydra Head during the commit phase. Bidder funds and the seller’s auction lot stay out of the Hydra Head, though the auction lot does need to be locked under a smart contract so that it can be redeemed by the voucher.
- The only fanout transaction needed when the Hydra Head closes is to pay the voucher out to the auction winner on L1.

Redeeming the voucher is optional for the winning bidder, which means that the seller is not guaranteed to be paid out of the auction. Furthermore, it allows bidders to make frivolous and unreasonably high bids that they do not intend to honor, interfering with honest bidders and potentially sabotaging the auction entirely.

One way to mitigate this insincere bidding problem is to require each bidder to post a deposit that is deductible from the winning bid price if the bidder wins, and otherwise refundable if the bidder loses. If the bidder wins but does not redeem his voucher, the seller keeps the deductible deposit. The deductible deposit can eliminate bidders’ rational incentive to make insincere bids unless their profit from insincere bidding exceeds the deductible.

The voucher auction’s insincere bidding problem can be further mitigated in the same way that bidder veto power is mitigated in the basic single-head auction. If the voucher auction is marketed as a premium service that is only accessible to KYC’ed users with a high reputation, then users may avoid insincere bidding if dishonoring a winning bid carries a sufficiently severe reputational penalty on the platform. Indeed, according to one of the interviewees, who regularly participates in Discord-based NFT auctions, the risk of reputational penalty is typically sufficient to enforce that winning bidders honor their bids.
## **Delegated voucher auction**
This design combines the voucher auction with a Hydra Head run by delegates. This mitigates the risk that the delegates can collude to directly steal funds from the seller and/or bidders because the auction lot and the bidders’ funds remain outside the Hydra Head.

The auction in this design works in the same way as in the voucher auction, except that bidders submit their bids into the auction by proxy through the Hydra Head delegates, and the delegates’ multi-signature is required for bids to affect the auction state within the Hydra Head. Upon auction closing, the winning bidder receives a voucher that is optionally redeemable for the auction lot on Cardano L1.

This auction design inherits the user convenience benefits from the delegated custodial auction and inherits the low Hydra Head setup costs and high bidder capacity from the voucher auction. Furthermore, with incremental commits/de-commits, it may be possible for the delegates to send out the voucher to the winner of one auction, and then to re-use the bidding paddle tokens for new bidders in a subsequent auction, without closing the Hydra Head. Thus, the delegates may have a viable business model operating a persistent Head and renting out time on the Hydra Head to various auctions.

As in the simple voucher auction, the insincere bidding problem can be mitigated by requiring a deposit from each bidder that is deductible from the winning bid price if the bidder wins and redeems the auction lot, refundable if the bidder loses, and forfeited to the seller if the bidder wins and does not redeem the auction lot.

One major difference between this design and the simple voucher auction is that bidders no longer participate directly in the Hydra Head. This means that the bidders’ signatures are not required to authorize any state transitions within the Hydra Head, and thus the delegates can authorize transactions that falsely declare bids that bidders did not submit. Of course, the winning bidder can choose not to honor such a false bid; however, if the deductible deposit requirement was included in the auction to combat insincere bidding, then the winning bidder would have to forfeit his deposit when rejecting a false bid. For example, the delegates could collude with the seller to split the winning bidder’s forfeited deposit.

To eliminate the risk of false bids from this design, each bid transaction within the Hydra Head could produce a UTXO datum that includes the bidder’s signature for that bid, and the winning bidder’s bid signature should be preserved in datums all the way to the issuance of the voucher to the winning bidder on L1. The voucher would only be valid if its UTXO datum contains the bidder’s valid signature for the corresponding bid; otherwise, the voucher would be invalid and the auction outcome would be annulled.

Another risk that emerges from trusting the delegates to execute the auction within the Hydra Head is that they can rig the auction so that a bid other than the highest bid wins the auction. However, delegates would likely face significant reputational penalties for engaging in such auction rigging, which would compromise their ability to continue offering auction-hosting services in the future.

Further mitigation for the delegate auction rigging risk would be to require them to keep a copy of the Hydra Head’s ledger of auction transactions that resulted in the particular auction outcome that was finalized on L1. This copy of the auction ledger could even be archived for a sufficient period of time on storage-optimized blockchains (e.g. Arweave) or L2 solutions (e.g. Logosphere). If a bidder disputes the auction outcome with an allegation of auction rigging, the delegates could present the auction ledger as proof in an off-chain dispute resolution process.

Overall, this design strikes the right balance between the delegated custodial and the voucher auction designs.
# **Auction designs on networks of Hydra Heads**
## **Star-shaped auction**
This design makes use of the [star-shaped Head network](https://hydra.family/head-protocol/topologies/star-shaped/) topology described on the Hydra website. Here, a centralized auctioneer opens a separate pairwise Head with each bidder in the auction. The bidder commits into the Hydra Head the funds that he would like to use in the auction, while the auctioneer does not commit any funds into the Hydra Head but is instead there just to witness and timestamp the bidder’s bids with his signature. The auctioneer can choose to charge fees for providing this service to the auction’s bidders.

The auction use case can be implemented on the star-shaped Hydra network topology *without* requiring inter-head transfers of funds via [hash time-locked contracts (HTLCs)](https://docs.lightning.engineering/the-lightning-network/multihop-payments/hash-time-lock-contract-htlc). Instead, at the end of the auction, each pairwise Head is closed with its bidder’s highest bid brought back to Cardano L1 and then the winning bid can be efficiently resolved during fanout from each Head. Potentially, there may be a mechanism to resolve losing bids within their Hydra Heads during the auction, allowing the losing bidders to exit the auction early if they no longer wish to continue bidding.

The main benefits of the star-shaped auction over the single-head auction are:

- **No bidder veto power.** Bidders can no longer veto each other’s bids because the bidders are spread out in separate Hydra Heads.
- **Non-custodial auctioneer.** The auctioneer in these pairwise Hydra Heads cannot steal bidder funds, because each bidder’s signature is required for every transaction in his respective Head.
- **Relaxed responsiveness requirements.** Bidders do not have to be always live and responsive within their Hydra Heads, because the auctioneer himself never submits his transactions in the Hydra Heads and thus is never waiting for the bidders to sign his transactions. If a bidder goes offline for a bit, the auctioneer can calmly remain idle until the bidder reconnects.

Conversely, since the auctioneer’s signature is also required in each pairwise head, the auctioneer does have the power to rig the auction:

- **Censoring.** The auctioneer can prevent a bidder from bidding by refusing to sign his bids, rigging the auction against that bidder, and in favor of the other bidders that the auctioneer is not censoring. This is similar to the bidder veto power in the single-head auction, but it is only held by the auctioneer in the star-shaped auction.
- **Collusion to dishonor a bid.** The auctioneer can allow a bidder to dishonor his bids, by:
  - Allowing the bidder to replace his bid with a lower bid during the auction; or
  - Not contesting the bidder’s attempt to close the pairwise Head with a bid that is different from the highest bid that the bidder has made in the Hydra Head during the auction.
- **Collusion to bid secretly.** The auctioneer can allow a bidder to secretly make a higher bid than the highest bid that has been broadcast so far to all bidders. This means that the other bidders will be mistaken about what the current highest bid is and who the current highest bidder is until the auction closes or the secret bidder reveals himself as the highest bidder.

The two collusion powers of the auctioneer do not exist in the single-head auction. A bidder in the single-head cannot dishonor his bids because the seller would not sign a bid transaction that would lower the bidder’s current bid. A bidder cannot bid secretly in the single-head auction, because every participant of the Hydra Head must see and sign the bid for it to have an effect. Thus, the star-shaped auction’s centralized auctioneer collusion power is its major disadvantage relative to the single-head auction.
## **Constellation schema auction**
This design is a generalization of the star-shaped auction that splits the auctioneer into multiple neutral parties in each bidder’s head. Furthermore, it requires only M of N of the neutral parties (M < N) to sign transactions within a bidder’s Head, in addition to the bidder’s signature.

For example, suppose that Alice, Bob, and Charlie are bidders in an auction; and that Oskar, Patricia, Quentin, Rupert, and Sally are potential neutral parties. If we set (M = 2) and (N = 3), then we could set up the bidder Hydra Heads for the auction as follows:

- Alice’s Head includes Alice, Oskar, Quentin, and Rupert. Every transaction in this Head requires Alice’s signature, and 2 of 3 signatures from Oskar, Quentin, and Rupert.
- Bob’s Head includes Bob, Patricia, Rupert, and Sally. Every transaction in this Head requires Bob’s signature, and 2 of 3 signatures from Patricia, Rupert, and Sally.
- Charlie’s Head includes Charlie, Oskar, Patricia, and Sally. Every transaction in this Head requires Charlie’s signature, and 2 of 3 signatures from Oskar, Patricia, and Sally.

This design mitigates the centralized auction rigging potential from the star-shaped auction:

- Collusion with the bidder to dishonor or not reveal a bid is reduced because the bidder must collude with more neutral parties to collectively rig the auction in his favor.
  - On the other hand, the M of N signature scheme makes collusion of the bidder with the neutral parties easier than unanimous consent, so M should not be much smaller than N.
- Censorship of bids is reduced because it requires (N - M + 1) neutral parties to refuse their signature of a bid.

Furthermore, the M of N signature scheme can relax the neutral parties’ responsiveness requirements, because up to (N - M) neutral parties can briefly go offline without necessarily preventing a bid from being multi-signed in the Hydra Head.

We could also forgo the random selection of neutral parties for each bidder’s Hydra Head, instead using a fixed group of independent neutral parties in every Head. For instance, this could be a federation of independent auctioneers that would keep each other honest in the auctions that they co-host for users.

To further reduce neutral parties’ auction rigging potential, they can be randomly selected for each bidder's Head from a large pool of potential neutral parties, perhaps similar to the verifiable random function (VRF) based lottery used on Cardano L1 to select slot leaders to add blocks to the chain.

In a sense, this Hydra Head lottery could be seen as a natural generalization of Cardano’s slot leader lottery from L1 to L2. In the first layer, slot leaders are randomly selected to add blocks of user-signed transactions to the main chain. In the second layer, neutral parties are randomly selected to mediate the transient transactions within a Hydra Head and then to help bring the final result back to the main chain. Indeed, the large network of stake pools on Cardano could be tapped to also provide neutral party services on layer 2, as another revenue stream that makes use of their existing computing resources.
# **Our selected Hydra-based auction design for the implementation phase**
For the implementation phase of this project, the delegated voucher auction design was selected because it significantly mitigates the three major limitations of the Hydra Head protocol that the interviewees indicated are discouraging them from pursuing Hydra-based solutions. Based on our business analysis, the reference implementation based on this design could be viably adapted into an auction service on the Cardano main network.

Furthermore, this design can demonstrate to the Cardano community that if they move past the basic single-head model, a wider range of use cases becomes feasible by applying techniques like:

- Managing information rather than funds within a Hydra Head (e.g. redeemable vouchers).
- Delegating Hydra participation obligations to reduce user burden/inconvenience.

Regarding the star-shaped and constellation schema auction designs, they are interesting designs that quite intrigued the interviewees. However, they are also significantly more complex than the delegated voucher auction design. Furthermore, they require not-yet-implemented Hydra Head features to be available, for the benefits of these designs to be apparent in a demonstration of the reference implementation. Therefore, it is recommended that they should be considered for a future Hydra-based auction project, perhaps even by some of the business analysis respondents if our current project gives them confidence that they can pursue their own Hydra-based DApp projects.
## **Scope of the implementation phase**
In the implementation phase, IOG and MLabs will prioritize implementing only the core English-style auction features within the delegated voucher design. Once those are implemented, the additional English-style auction features can be pursued as nice-to-have features. The reason for this prioritization is that respondents and interviewees in the business analysis indicated that they prefer seeing the Hydra limitations properly resolved for the auction use case, overseeing non-core features implemented in the Hydra-based auction.

At the end of this phase, the auction implementation should provide the following features:

- A group of delegates can open a Hydra Head capable of hosting an auction for an NFT asset provided by a seller.
- The seller can distribute the right to participate (e.g. via participation tokens) in the auction to prospective bidders who have locked their deductible deposits for the auction.
- Each bidder can submit a bid to the auction by sending it to one of the delegates, who will then broadcast it to the rest of the delegates.
- Delegates can collectively acknowledge bids by multi-signing via the Hydra Head protocol, thus including the bids in the Hydra Head ledger state.
- When the auction deadline elapses, the delegates can deterministically settle the bids within the Hydra Head to determine the winning bid.
- Delegates can close the Hydra Head:
  - If the auction is settled, then a voucher can be issued to the winning bidder, which allows the winning bidder to redeem the seller’s NFT asset in exchange for the bid amount.
  - If the auction is not settled, its bids can be settled on L1 to determine the winning bid, and then the voucher can be issued to the winning bidder.
- Losing bidders can redeem their deductible deposits when the auction’s Hydra Head closes and the auction is settled.
- The winning bidder can use the funds in his deductible deposit in his payment to the seller for the NFT asset.
- When the voucher is issued to the winning bidder, a deadline is set to redeem the seller’s NFT asset. If the winning bidder does not redeem the seller’s NFT asset by the deadline, the seller can claim the winning bidder’s deductible deposit.
- The voucher UTXO can only be spent by the winning bidder to redeem the seller’s NFT, or by the seller to claim the winning bidder’s deductible deposit after the redemption deadline.

We will also develop a technical specification for enhancing the above implementation with bidder-signed bids, whereby:

- Bidders sign the content of their bids (auction ID, bid amount, time of bid) when submitting to the auction.
- Each bid’s signature from its bidder is preserved within a UTXO datum on the Hydra Head ledger, as long as the bid is active in the auction.
- A valid voucher can only be issued in a UTXO that contains the winning bidder’s bid signature in its datum. Only a valid voucher can be used to redeem the seller’s NFT asset.
## **Potential future improvements to the auction implementation**
The above auction implementation will significantly resolve the three major Hydra Head limitations for the auction use case. However, several further improvements could be made to make it even more suitable as a real-world product. We are not committed to implementing them as part of this project’s scope, but mention them here and will continue to think of more improvements, so that future developers can have a clear vision of how to make the best possible Hydra-based auction for their users.

The auction implementation will require bidder signatures to authorize bids, to prevent delegates from forging false bids, but it cannot prevent the delegates from collectively rigging the auction so that the highest bid does not win the auction. A future improvement to the auction implementation would be to provide tools that preserve the delegates’ Hydra Head ledger of auction transactions, to facilitate off-chain dispute resolution with the seller and bidders. Furthermore, perhaps additional information (e.g. a ZKP proof) derived from the Hydra Head ledger could be brought back to L1 during auction settlement and voucher issuance.

Another improvement to the auction would be to allow the Hydra Head to remain open while one auction’s outcome is settled to L1 and another auction is onboarded for bidding. This would likely require the incremental commit/de-commit feature that is planned on the Hydra Head protocol roadmap.

A third improvement to the auction would be to allow each bidder to unilaterally lock his funds on L1 as ad hoc deposits towards the auction, and then provide proof of these locked funds when submitting bids within the auction. These variable deposits could provide full collateralization for all bids within the auction, thus eliminating the need for the upfront fixed deductible deposit from each bidder.

Lastly, the auction implementation could be improved by allowing the delegates’ consensus threshold to be relaxed for some auctions – from unanimity to an M of N signature scheme. This would make the auction more robust against a single delegate losing connection or maliciously sabotaging the Hydra Head, though it would be slightly less secure than a unanimous consent threshold against collective collusion by the delegators against the seller and/or bidders.
# **Suggested improvements to the Hydra Head protocol to further facilitate auctions**
As IOG and MLabs explored the design space for the Hydra-based auction, the importance of certain Hydra Head protocol features to facilitate better auction designs was realized. Some of these are already on the Hydra Head roadmap as planned features, while others are new features that we discovered as we brainstormed auction designs.

The following feature is not yet implemented for the Hydra Head protocol, but it is on the roadmap:

- **Incremental commit/de-commit** of UTXOs to a Hydra Head would allow for DApp designs that use longer-lasting Hydra Heads. For auctions, instead of opening and closing a Hydra Head (or network of Hydra Heads) every time that an auction is hosted, the same Heads could be kept running, with the results of each auction de-committed to the main chain and UTXOs for the next auction committed to the Hydra Head.
  - This feature would benefit the non-voucher auction designs, which only allow bidders to bid with the funds that they have committed to the Hydra Head during initialization. Incremental commits/de-commits would allow bidders to increase those funds during the auction, allowing them to place higher bids.
  - This feature would also benefit the delegated voucher auction, by allowing the Hydra Head to remain open as it closes one auction (sending out its voucher to the winner on L1) and sets up to host the next auction.

The following features should be considered for the Hydra Head roadmap, as they would facilitate certain desirable properties for auctions and similar DApps built on Hydra:

- **Dynamic membership within a Hydra Head.** Particularly for auctions, participants should be able to freely enter and leave the Hydra Head, when they are not obligated to stay as the highest bidder in the auction. If participants feel like they’re locked inside of a Hydra Head, that may give them the incentive to close the Hydra Head so that they could get out. If they could instead leave gracefully without closing the Hydra Head for the other participants, that would be an improvement in application UX.
  - This feature would benefit most of the auction designs, particularly the ones where bidders participate directly in Hydra Heads.
- **Neutral party** role in a Hydra Head, with **M of N signing** threshold for neutral parties. As explained in the constellation schema design above, this feature would enable us to split a centralized trusted party within a Hydra Head (e.g. auctioneer in a star-shaped auction) into a group of neutral parties, while calibrating for robustness against collusion and censoring by the neutral parties.
  - This feature would benefit the constellation schema auction design. It may also benefit the delegated auction designs, where an M of N signing threshold may improve robustness against an individual delegate losing connection or sabotaging the Hydra Head by withholding his signature.

Of the above features, only the incremental commit/de-commit will substantially improve the delegated voucher auction that we have chosen for implementation. The rest of the features would amplify the effectiveness of the alternative designs that we’ve considered.
