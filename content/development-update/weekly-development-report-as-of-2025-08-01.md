---
title: Weekly development report as of 2025-08-01
tags:
  - Weekly development updates
url: ""
image: https://ucarecdn.com/02525125-44a2-42ec-b6c4-a573573cee0d/
image_text: Weekly development report as of 2025-08-01
---

### ECOSYSTEM UPDATES

Cardano continues to demonstrate significant growth across key metrics. There are currently 2,006 active projects building on the blockchain, and delegated wallets have increased to 1.34 million. Transaction volume reached 112.13 million, marking a 0.24% increase from the previous week.

Smart contract deployment is advancing, with 140,294 Plutus scripts and 8,864 Aiken scripts now active. Governance participation has also increased to 1,409 DReps, including 984 active DReps. Developer activity remains strong, with 358 GitHub commits this week.

In other news:

*   [Quantum Hosky](https://x.com/hoskytoken/status/1950950552378151267) officially launched their website this week
    
*   Snek token is now listed on the [crypto.com](//crypto.com) exchange
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1948717545692737952) introduced Tool Compass, a platform designed to help developers easily identify suitable tools for their Cardano projects
    
*   The [Midnight tokenomics](https://x.com/midnightfdn/status/1937145594901901761) and incentives whitepaper is now live.
    

### CORE TECHNOLOGY

The **ledger** team completed a major refactoring of how reward account state is represented within the ledger codebase. This change completely removed pointers in the Conway era, reduced complexity, and improved ledger performance. This refactoring also enhances extensibility, paving the way for upcoming features such as the Leios protocol updates, the transition to a full Chimeric ledger by promoting reward accounts to proper accounts, and allowing multi-asset storage in the treasury along with asset-specific treasury withdrawals via governance actions.

Additionally, the team progressed working on upcoming features planned for the next intra-era hard fork and the subsequent Dijkstra era. They introduced a long-requested feature that reports the pre-image of the script integrity hash when validation failures occur, significantly [improving the user experience](https://github.com/IntersectMBO/cardano-ledger/pull/5172). For Dijkstra, the team implemented new [protocol parameters](https://github.com/IntersectMBO/cardano-ledger/pull/5172) and started defining the [CDDL specification](https://github.com/IntersectMBO/cardano-ledger/pull/5192). The team also improved test coverage commits([1](https://github.com/IntersectMBO/cardano-ledger/pull/5059),[2](https://github.com/IntersectMBO/cardano-ledger/pull/5193)), addressed technical debt, and improved parts of the ledger codebase.

### SCALING

This week, the **Leios** team made progress on CIP development, refined validation timing analysis with improved methodologies, and achieved high-throughput validation milestones. The team completed major components of the CIP specification, proposed improved throughput metrics for better comparability, and demonstrated a 1,000 TPS capability with specific protocol variants. Read [this report](https://leios.cardano-scaling.org/news/2025/07/21/weekly-progress-summary) for more details.

### VOLTAIRE

It’s election season at [Intersect](https://www.intersectmbo.org/), a period of heightened community engagement and decision-making that includes the nomination and voting phases for Intersect’s board of directors and the third election for Intersect’s committees, as well as the announcement of results and the subsequent transition of leadership.

In September, Intersect members will elect four members to the Intersect board, following the [recent decision](https://board.docs.intersectmbo.org/) to expand the board to seven seats, with four to be filled by members. This expansion isn't just about numbers. It’s about ensuring that diverse perspectives, innovative ideas, and community wisdom guide Cardano’s strategic direction. 

Applications are open from Monday, September 1, to Friday, September 12. Voting starts on Monday, September 15, and finishes on Friday, September 26. Results will be announced at the end of the month. [More details here.](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/september-2025-board-elections)

October brings an even more transformative milestone in the form of elections for all Intersect committees, with elected members filling every single committee seat. 

Applications open on Monday, October 1, and close on Tuesday, October 14. Voting will start on Thursday, October 16, and finish on Wednesday, October 29, with results announced on Monday, November 3. [More details here.](https://docs.intersectmbo.org/intersect-membership/intersect-voting-events/intersect-elections-2025/october-2025-committee-elections)

### CATALYST

This week’s town hall #199 featured a special guest appearance by [Storm Partners](https://www.youtube.com/watch?v=KohtrMT1ehE), who shared updates about their recently completed Catalyst-funded project. The **Catalyst** team also presented a live demo of the highly anticipated Catalyst key chain, alongside a clear breakdown of Fund14 timelines and what to expect in the upcoming weeks.

As a reminder, while Fund14 proposal submissions open this week, no proposal reviews, voting, or funding decisions will occur until DReps approve the treasury withdrawal governance action.

Heading to [Rare Evo](https://rareevo.io/) next week? Be sure to connect with the Catalyst team as there might be some special surprises in store!

For clarity and confidence in navigating Fund14, don't forget to explore the official [Fund14 launch guide](https://docs.projectcatalyst.io/).

### EDUCATION

This week, the **education** team is heavily focused on _Mastering Cardano_, advancing the content and ensuring its accuracy. They are also preparing for the upcoming node workshops and events at Rare Evo next week.

Looking ahead, the team are excited to announce the next _Cardano Days_ event. This two-day in-person education event will take place at the [University of Wyoming](https://www.uwyo.edu/index.html) on September 26 and 27, 2025. This event is a key component of the wider [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html) event. Registration is now open on the [Luma page](https://lu.ma/g436so6c).

![](https://ucarecdn.com/61b2463b-affa-4558-8d05-f90135bcb5a0/-/preview/-/format/auto/-/quality/smart/)
