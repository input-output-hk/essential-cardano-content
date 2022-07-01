---
title: Cardano data on BigQuery
tags:
  - Cardano
  - Data Querying
  - analytics
url: ""
image: https://ucarecdn.com/53725885-190d-43c1-9062-69758ffe9593/
image_text: Cardano data on BigQuery
---

**Summary**:

BigQuery allows querying Cardano data quickly, seamlessly, and at a low cost

**Article**:

The Cardano blockchain is fast becoming a hive of development for decentralized applications (DApps) and decentralized finance (DeFi) solutions. With almost one hundred projects already live, and over one thousand projects busy building, Cardano’s database of transactions keeps growing.

Data querying is essential for live projects or developers working on the blockchain. Why? Because data accuracy is the foundation for secure and trustless activities. Think about wallets. To process a transaction, the system needs to know how much funds you have and whether it is enough to cover the intended transaction. The record of this transaction is then added to the chain, which requires the wallet to be fully synced with the latest blockchain state.

If you are building on Cardano, you will likely need to query blockchain data. And in this post, we discuss some options including a way to query Cardano data using Google BigQuery.

## Querying Cardano data

Thousands of decentralized nodes maintain the Cardano network, each holding a full copy of the blockchain. Because the blockchain size constantly increases with the number of new transactions and data added to the chain, the time to sync the whole blockchain history increases accordingly.

[Cardano DB Sync](https://docs.cardano.org/cardano-components/cardano-db-sync/about-db-sync) is one of the core Cardano components, which provides a convenient way to find and query historical information from the Cardano blockchain. DB Sync connects to the local node as a client and synchronizes with the on-chain activity. Using DB Sync, however, requires deeper technical knowledge to run a node and a local database server.

Addressing the need to provide a simpler data querying alternative, several solutions appeared. Depending on technical expertise, software requirements, and needs, users can choose from a number of community-driven solutions that aim to streamline data querying. [Cardano Blockchain Insights](https://twitter.com/InsightsCardano), for example, provide [blockchain data in visual charts and dashboards](https://datastudio.google.com/u/0/reporting/3136c55b-635e-4f46-8e4b-b8ab54f2d460/page/k5r9B) using Google Data Studio. [Scrolls](https://github.com/txpipe/scrolls#readme) and [Blockfrost](https://blockfrost.io/#introduction) are among other solutions that aim to optimize working with the blockchain data.

IOG is introducing a Google BigQuery option for working with Cardano data. Google BigQuery makes it easier to look up data without the need to run specialized software. All the data is fetched directly from Cardano DB Sync and validated to ensure its accuracy. This means that due to a sophisticated data validation process, users can be assured of having access to the same data as in DB Sync. BigQuery organizes Cardano data by epoch numbers, which allows per-epoch queries, resulting in lower costs. By additionally using [Google Data Studio](https://datastudio.google.com/), you can create advanced visualizations and dashboards based on the BigQuery data.

## How does BigQuery work?

Ensure you're logged into your [Google Cloud Platform](https://console.cloud.google.com) account and have the BigQuery API enabled. Then, getting started is straightforward:

*   open or create a Google BigQuery or a Data Studio project
    
*   access the [IOG analytics dataset](https://console.cloud.google.com/bigquery?project=iog-data-analytics&supportedpurview=project&ws=!1m4!1m3!3m2!1siog-data-analytics!2scardano_mainnet)
    

You can now query the Cardano blockchain data.

### Querying

Using the dataset is pretty simple. You can select any table you’re interested in and click ‘Query’ to get the details:

![Cardano BigQuery](https://ucarecdn.com/2af89d4d-8fef-4e3d-8cc1-38d1746466de/ "IOG data analytics dashboard")

Figure 1. IOG data analytics dashboard

You can also import the queried data into [Google Data Studio](https://datastudio.google.com/). This will allow you to create various charts and graphs to visualize transaction or block statistics. See some [Cardano Blockchain Insights examples here](https://datastudio.google.com/u/0/reporting/3136c55b-635e-4f46-8e4b-b8ab54f2d460/page/k5r9B).

### Data update process

There are several things you should note when working with BigQuery:

1.  The data is fetched and copied over from DB Sync every two hours.
    
2.  The data is only updated to approximately the last 20 blocks before the current block height in DB Sync. This is essential to prevent rollbacks of blocks in the case of chain forks.
    

### Costs

Usually, the cost for querying data on BigQuery is $5 per terabyte (TB) of data processed. There is also a free quota of one TB of data per month. To find out more, see the [BigQuery pricing](https://cloud.google.com/bigquery/pricing) details. It is important to note though that Cardano data tables are divided by epoch numbers, which makes it possible to query data for the exact epoch of choice, which reduces the amount of data processed and thus incurs lower costs.

## Ready to try it out?

Currently, the Cardano BigQuery project is in its beta release. It does not include all the blockchain data, particularly staking and staking rewards details. The team at IOG is now working on its further development, and in future iterations, the IOG analytics dataset will cover all the Cardano data from DB Sync.

To start working with a tool, make sure to read [the documentation with a step-by-step tutorial](https://docs.cardano.org/cardano-components/cardano-db-sync/big-query). You will also find different [table schemas with example queries](https://docs.cardano.org/cardano-components/cardano-db-sync/big-query/#querytableschemas).

We welcome your feedback, which you can share by emailing [**data-analytics@iohk.io.**](data-analytics@iohk.io.)

_I’d like to thank_ [Alexander Diemand](https://iohk.io/en/team/alexander-diemand) and [Thomas Kaliakos](https://iohk.io/en/team/thomas-kaliakos) for their input and support in preparing this blog post.

**_Legal Disclaimer_**

_In this piece there are links that will bring you to a third-party website, owned and operated by an independent party over which Input Output Global, Inc. has no control ("3rd Party Website"). Any use of the 3rd Party Website will be subject to and any information you provide will be governed by the terms of the 3rd Party Website, including those relating to confidentiality, data privacy, and security._
