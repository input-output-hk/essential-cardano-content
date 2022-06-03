---
title: How to start developing on Cardano using Tangocrypto API
tags:
  - Blockchain
  - Development
url: ""
image: https://ucarecdn.com/4a7e5288-cde9-4669-8958-ef9f98dc26f4/
image_text: Tangocrypto API
---

# **What is Tangocrypto?**

We provide a suite of high availability APIs and developer tools for fast and reliable access to the Cardano network that requires only 1 minute to integrate. As a developer starting on Cardano you will face the following problems:

*   There's no way to access the information on a blockchain without using a node or an API provider.
    
*   You will have to start creating the infrastructure instead of focusing on your products and business.
    
*   In-house infrastructure doesn’t scale automatically when user demand increases.
    
*   There is a high learning curve, a broader error surface and an increase in cost when building integrations with several API services from multiple providers.
    

We provide a unified platform where you'll be able to:

*   Ship products faster and validate business ideas.
    
*   Use one platform to fetch, submit and listen to on-chain information, mint tokens, store files and process payments.
    
*   Grow their user base by relying on an elastic infrastructure capable of handling spikes in consumption without downtime.
    
*   Reduce cost on engineering and infrastructure operations.
    

Our solution provides the following components:

*   REST API
    
*   Notify (Webhooks)
    
*   NFT API
    

💻 You can create a **free** account now at [](https://dashboard.tangocrypto.com/register)[https://dashboard.tangocrypto.com/register](https://dashboard.tangocrypto.com/register) and start coding your next product.

## **REST API**[​](https://developers.cardano.org/docs/get-started/tangocrypto#rest-api)

The HTTP REST API goal is to make development faster and easier. There is no need for syncing with the blockchain and maintaining complicated setups. No more complex and multiple requests to the blockchain from different entry points, the developers can get all the data they need for transactions, token information and debugging, in fewer requests.

![](https://ucarecdn.com/4a7e5288-cde9-4669-8958-ef9f98dc26f4/-/preview/-/format/auto/-/quality/smart/)

We provide the most accessible and reliable Cardano infrastructure, freeing companies and developers from the responsibility to maintain complex infrastructures and focusing instead on building their business logic and providing value to their customers.

*   **Enterprise-grade infrastructure**: Harness the processing power of our globally distributed cloud-hosted node network. Our API alleviates the friction of maintaining your own compute and storage resources, lowering the barrier to entry for developers and enterprises.
    
*   **Built for developers**: Easy to read documentation and resources to help developers get started quickly.
    
*   **Gain app insights**: Our dashboard provides direct insights about API usage. Drill down into specific request methods and get response times, most used endpoints, usage by time of the day, IP address, countries and more. These insights are a great way to optimize applications based on user behaviour.
    
*   **Standard Interface**: Supports Mainnet and Testnet via client-compatible REST API over HTTPS.
    
*   **Always Online**: Running on the latest network upgrades with a minimum 99.9% uptime guarantee.
    

### **Network and App ID**[​](https://developers.cardano.org/docs/get-started/tangocrypto#network-and-app-id)

You can choose the mainnet or the testnet for your queries. The API requires a valid `app_id` to be included with your request traffic. This identifier should be appended to the request URL.

Network

Cardano mainnet: `https://cardano-mainnet.tangocrypto.com/{app_id}/v1`

Cardano testnet: `https://cardano-testnet.tangocrypto.com/{app_id}/v1`

### **API Key header**[​](https://developers.cardano.org/docs/get-started/tangocrypto#api-key-header)

When you sign up on [](https://www.tangocrypto.com)[https://www.tangocrypto.com](https://www.tangocrypto.com/) and create an App an `x-api-key` is created. You must include the HTTP header `x-api-key` in every request in order to authenticate the API calls.

##### **FULL API REFERENCE**

Check our API full reference documentation here [](https://www.tangocrypto.com/api-reference/)[https://www.tangocrypto.com/api-reference/](https://www.tangocrypto.com/api-reference/)

### **Steps to get started with Tangocrypto**[​](https://developers.cardano.org/docs/get-started/tangocrypto#steps-to-get-started-with-tangocrypto)

#### 1\. 🔑 Create an App[​](https://developers.cardano.org/docs/get-started/tangocrypto#1--create-an-app)

To use Tangocrypto's products, you need an API key to authenticate your requests.

You can [create API keys from the dashboard](https://dashboard.tangocrypto.com/home/dashboard), just click on +Create App, name it and hit create:

![alt text](https://developers.cardano.org/assets/images/app-5aeb033774127f06f1bc1719e715955a.png)

Once your app is created just copy you app-id and `x-api-key` and start making requests.

![alt text](https://developers.cardano.org/assets/images/tangocrypto_app_details-ce911c18e27aee5abcc762f2308adb24.png)

#### 2\. 🏗️ SMake a Request and start building[​](https://developers.cardano.org/docs/get-started/tangocrypto#2-%EF%B8%8F-smake-a-request-and-start-building)

With the app-id and the `x-api-key` you can make requests. For example, let's make a request to get the latest block number:

```codeBlockLines_mRuA
curl --location \
--request GET 'https://cardano-testnet.tangocrypto.com/<app-id>/v1/blocks/latest' \
--header 'x-api-key: <your-api-key>'
```

You should get something like this:

```codeBlockLines_mRuA
{
    "id": "3064146",
    "hash": "f8eadfc91c3219b3d00d4a902174e0978e449f0e8a6f6b0584e06bbbedc0d050",
    "epoch_no": 158,
    "slot_no": 38197024,
    "epoch_slot_no": 310624,
    "block_no": 2940877,
    "previous_block": 2940876,
    "slot_leader": "pool1rcsezjrma577f06yp40lsz76uvwh7gne35afx3zrq2ktx50f8t8",
    "size": 365,
    "time": "2021-09-25T10:37:20.000Z",
    "tx_count": 1,
    "out_sum": 435928446,
    "fees": 171441,
    "op_cert": "333e175db9a2f89de5d9396c10b4dd136c3fffebd7f22d2eb0a3e8ef3884199c",
    "vrf_key": "vrf_vk1ltjt3ucuvah43gpeqpw4n6say9u6s0kju8c8q76xctmvgsqawgrq7kj48j",
    "confirmations": 1
}
```

#### API Pagination[​](https://developers.cardano.org/docs/get-started/tangocrypto#api-pagination)

Some API endpoints paginate their responses to make the result set easier to handle. For example, if you request a list of objects that are potentially too large to run efficiently, the endpoint returns the first batch of results along with a cursor to access the next set of results.

The query results are divided into "pages" of 1 MB in size (or less) data. An application can process the first page of results, then the second page, etc. You include the cursor in subsequent requests to the endpoint as a URL query parameter of your request.

To determine whether there are more results and to retrieve them one page at a time, applications should do the following:

1.  Make a request with the desired `size` and check the result, if the cursor is not empty, construct a new request with the same parameters as the previous one. However, this time, take the cursor value from the last query and use it as the cursor parameter in the new request.
    
2.  If the `cursor` is empty in the result it means there are no more items to be retrieved.
    

#### Example[​](https://developers.cardano.org/docs/get-started/tangocrypto#example)

Let's make the following query with size=50

```codeBlockLines_mRuA
https://cardano-mainnet.tangocrypto.com/<app-id>/v1/nft/collections?size=50
```

In the response, we see the cursor with a non-empty value (showing only one record for simplicity)

```codeBlockLines_mRuA
{
    "data": [
        {
            "id": "3d010a77c0e24489923c2a9eda731dde",
            "name": "THE Collection",
            "url": "https://www.thecollection.io",
            "description": "thecollection description",
            "payout_address": "addr_test1qp9mj7vnenx4v99hw7ztfq03n7dmmujpgtlyfjhhel9w67nk72usllcew208n60ym94xcptfrgytuy5apwp565x28jgsg0ztq3",
            "token_count": 5000,
            "token_for_sale_count": 1000,
            "token_sold_count": 2000,
            "revenue": 123456,
            "service_fee": 123456,
            "nft_fee": 123456,
            "tx_fee": 123456,
            "income": 123456,
            "total_fees": 123456,
            "policy": {
                "lock": true,
                "lock_time": "2027-01-24T04:18:59.758Z",
                "policy_id": "90570cb29887860e1cf1af88a106f421d6f22333514dd4ab16e8ff12",
                "script": {
                    "type": "all",
                    "scripts": [
                        {
                            "type": "sig",
                            "keyHash": "ac1746df0ba039de81274d472a477fced610f57cebc5c7841074f54c"
                        },
                        {
                            "type": "before",
                            "slot": 46854826
                        }
                    ]
                }
            },
            "metadata": {
                "label": "721",
                "asset_name": "<asset_name>",
                "name": "<name>",
                "image": "<image_link>",
                "media_type": "<mime_type>",
                "description": "<description>",
                "attributes": {
                    "face": "<face>",
                    "twitter": "https://twitter.com/thecollection_io",
                    "copyright": "Tent 2021",
                    "color": "<color>",
                    "artist": "LOLO",
                    "collection": "The Collection",
                    "body": "<body>",
                    "eyes": "<eyes>",
                    "accessory": "<accessory>"
                },
                "version": "1.0"
            },
            "created_at": "2021-11-30T21:04:09.897Z",
            "updated_at": "2021-11-30T21:04:09.897Z"
        }
    ],
    "cursor": "a97f98a8c533ee55fc2c6897c9b50506dc8d65b921092e469f62f9d0e2d0dc92902605dba96d30b2e027557d3d6ea8cb3c1597d93e36f9c70771f19485f176607d834f6bc4fd664e0f68d4c28eff52cc298dee1dc17975c043d05903c31dae41ff84c779f1f8d2bcc00447e25d066a4e"
}

```

To retrieve the next batch of items we use the same query but now insert the obtained cursor from the previous step as the query parameter:

```codeBlockLines_mRuA
https://cardano-mainnet.tangocrypto.com/<app-id>/v1/nft/collections?size=50&cursor=a97f98a8c533ee55fc2c6897c9b50506dc8d65b921092e469f62f9d0e2d0dc92902605dba96d30b2e027557d3d6ea8cb3c1597d93e36f9c70771f19485f176607d834f6bc4fd664e0f68d4c28eff52cc298dee1dc17975c043d05903c31dae41ff84c779f1f8d2bcc00447e25d066a4e

```

This process can be repeated until the cursor is empty because there are no more items to retrieve.
