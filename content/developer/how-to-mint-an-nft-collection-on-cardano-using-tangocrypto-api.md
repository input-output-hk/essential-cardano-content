---
title: How to mint an NFT collection on Cardano using Tangocrypto API
tags:
  - Development
  - Cardano
  - Blockchain
url: https://www.tangocrypto.com/
image: https://ucarecdn.com/d809d0eb-61b8-4b4d-bc0b-68b787e5b5e9/
image_text: ""
---

In this tutorial, we are going to mint an NFT collection using [Tangocrypto APIs](https://www.tangocrypto.com/).

The first step is to create an account and then create an App that will provide you with an API key. With the `app-id` and the `x-api-key` you can make the calls to the API. In this example, we are using cURL and for a full reference check out [this document](https://www.tangocrypto.com/api-reference/).

![](https://miro.medium.com/max/1400/0*oNdLsYsHcHigoFOD)

## Step 1: Create an NFT collection

A collection is a way to create a group of individual NFTs with similar attributes. All the NFTs belonging to the same collection share attributes like the artist, year of creation, social networks, name of the collection, etc.

Create collection request:

```markup
curl --location --request POST 'https://cardano-testnet.tangocrypto.com/<app-id>/v1/nft/collections' \
--header 'x-api-key: <your-api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Tango Collection",
    "description": "Tango collection description",
    "url": "https://www.tangocrypto.com",
    "payout_address": "addr_test1qp9mj7vnenx4v99hw7ztfq03n7dmmujpgtlyfjhhel9w67nk72usllcew208n60ym94xcptfrgytuy5apwp565x28jgsg0ztq3",
    "policy": {
        "lock": true,
        "lock_time": "2022-02-24"
    },
    "metadata": {
        "asset_name": "<asset_name>",
        "name": "<name>",
        "media_type": "<mime_type>",
        "description": "<description>",
        "files": [
          {
            "name": "<asset_name>",
            "media_type": "<mime_type>",
            "src": "<file_link>"
          }
        ],
        "attributes": {
            "color": "<color>",
            "body": "<body>",
            "eyes": "<eyes>",
            "face": "<face>",
            "accessory": "<accessory>",
            "collection": "Tangocrypto Collection",
            "artist": "Tangocrypto",
            "twitter": "https://twitter.com/tango_crypto",
            "copyright": "Tangocrypto 2022"
        },
        "version": "1.0"
    }
}'
```

Response:

This endpoint returns the `policy_id`**.** You should post the `policy id` in your website, social media or any communication channel, you use for buyers to verify the authenticity of the tokens they buy.

```markup
{
    "id": "e1d7fe1d97c64518a5c51011edcc1a31",
    "name": "Tango Collection",
    "url": "https://www.tangocrypto.com",
    "description": "Tango collection description",
    "payout_address": "addr_test1qpp33lzjgyzz6k86yy27kvkjepu8mfjy6g4l8rf2v8yjp4sla7h6txtvlevazp6jylz0w90y8yz0uec3cder28r47sssj9w2kd",
    "token_count": 0,
    "token_for_sale_count": 0,
    "token_sold_count": 0,
    "revenue": 0,
    "income": 0,
    "service_fee": 0,
    "nft_fee": 0,
    "tx_fee": 0,
    "total_fees": 0,
    "policy": {
        "lock": true,
        "lock_time": "2022-02-24T00:00:00.000Z",
        "policy_id": "6a16d7d312dfcbcb4f676fa31893cf6c456508d84472309f3aa7c998",
        "script": {
            "type": "all",
            "scripts": [
                {
                    "type": "sig",
                    "keyHash": "76bcc8cf947649636f027e705a30ec66fa0476971aef51d219323c07"
                },
                {
                    "type": "before",
                    "slot": 54094491
                }
            ]
        }
    },
    "metadata": {
        "label": "721",
        "asset_name": "<asset_name>",
        "name": "<name>",
        "media_type": "<mime_type>",
        "description": "<description>",
        "files": [
            {
                "name": "<asset_name>",
                "media_type": "<mime_type>",
                "src": "<file_link_1>"
            }
        ],
        "attributes": {
            "color": "<color>",
            "body": "<body>",
            "eyes": "<eyes>",
            "face": "<face>",
            "accessory": "<accessory>",
            "collection": "Tangocrypto Collection",
            "artist": "Tangocrypto",
            "twitter": "https://twitter.com/tango_crypto",
            "website": "https://www.tangocrypto.com",
            "copyright": "Tangocrypto 2022"
        },
        "version": "1.0"
    },
    "created_at": "2022-02-23T08:21:38.908Z",
    "updated_at": "2022-02-23T08:21:38.908Z"
}
```

## Step 2: Upload the images and set the metadata attributes

Once the collection is created you can start adding what will become an NFTs (technically speaking to be an NFT it needs to be minted in the blockchain). Therefore the next step is to upload the images and define the metadata for each NFT in the collection. Use the following API endpoint with the `collection-id` returned in step 1 as part of the path.

> **Note**: The image has to be converted to base64

```markup
curl --location --request POST 'https://cardano-testnet.tangocrypto.com/<app-id>/v1/nft/collections/<collection-id>/tokens' \
--header 'x-api-key: <your-api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tokens": [{
        "name": "Tango 01",
        "asset_name": "Tango01",
        "description": "If you get all tangled up, just tango on.",
        "media_type": "image/png",
        "image": "iVBORw0KGgoAAAANSU.....hEUgAADQYAAA0HCAYAAACB0xAqAAAACXBIWXMA",
        "metadata_attributes": [{
                "tag": "<color>",
                "value": "Blue"
            },
            {
                "tag": "<body>",
                "value": "Skinny"
            },
            {
                "tag": "<eyes>",
                "value": "Blue"
            },
            {
                "tag": "<face>",
                "value": "rounded"
            },
            {
                "tag": "<accessory>",
                "value": "keyboard"
            }

        ],
        "custom_attributes": {
            "serial_no": "12345545",
            "md5checksum": "bc527343c7ffc103111f3a694b004e2f"
        }
    }]
}'
```

Response:

```markup
{
  "data": [
    {
      "id": "e9e00b33e0a34edcaf4534a2f96a637d",
      "asset_name": "Tango01",
      "name": "Tango 01",
      "fingerprint": "asset1hzh0uut85ypcueu88422pmgf6twzj2c52f73a5",
      "status": "FOR_SALE",
      "description": "If you get all tangled up, just tango on.",
      "image": "ipfs://QmP8uBgxmTpduCUbasQRCEpiq1g9KEjxuRfR5VcvifWoNo",
      "media_type": "image/png",
      "metadata_attributes": [
        {
          "name": "Attribute color",
          "value": "Blue",
          "tag": "<color>"
        },
        {
          "name": "Attribute body",
          "value": "Skinny",
          "tag": "<body>"
        },
        {
          "name": "Attribute eyes",
          "value": "Green",
          "tag": "<eyes>"
        },
        {
          "name": "Attribute face",
          "value": "Rounded",
          "tag": "<face>"
        },
        {
          "name": "Attribute accessory",
          "value": "Keyboard",
          "tag": "<accessory>"
        }
      ],
      "custom_attributes": {
        "serial_no": "12345545",
        "md5checksum": "bc527343c7ffc103111f3a694b004e2f"
      },
      "policy": {
        "lock": true,
        "lock_time": "2022-01-03T15:35:10.000Z",
        "policy_id": "1373bf16cdea380e6c9c716d0f56f021b9e9ddea90b248dae6310d95",
        "script": {
          "type": "all",
          "scripts": [
            {
              "type": "sig",
              "keyHash": "ac1746df0ba039de81274d472a477fced610f57cebc5c7841074f54c"
            },
            {
              "type": "before",
              "slot": "46854826"
            }
          ]
        }
      },
      "metadata": {
        "721": {
          "1373bf16cdea380e6c9c716d0f56f021b9e9ddea90b248dae6310d95": {
            "Tango01": {
              "name": "Tango 01",
              "description": "If you get all tangled up, just tango on.",
              "image": "ipfs://QmP8uBgxmTpduCUbasQRCEpiq1g9KEjxuRfR5VcvifWoNo",
              "mediaType": "image/png",
              "color": "Blue",
              "body": "Skinny",
              "eyes": "Green",
              "face": "Rounded",
              "accessory": "Keyboard",
              "collection": "Tangocrypto Collection",
              "artist": "Tangocrypto",
              "twitter": "https://twitter.com/tango_crypto",
              "website": "https://www.tangocrypto.com",
              "copyright": "Tangocrypto 2022",
              "serial_no": "12345545",
              "md5checksum": "bc527343c7ffc103111f3a694b004e2f"
              
            }
          },
          "version": "1.0"
        }
      },
      "created_at": "2021-11-30T23:17:36.791Z",
      "updated_at": "2021-11-30T23:17:36.791Z"
    }
  ],
  "status_code": 201
}
```

## Step 3: Create sale phases

A sale phase is a control mechanism that defines how you will sell the collection. You can add different phases to control how you will sell the collection. For example, you might have a total of 5000 NFTs, and you want to sell them in three phases.

You can create a pre-sale phase to sell the first 1000 NFTs to previous customers at a special price and within a specific time range. You can identify these customers with a condition; that would be an NFT with one particular policy id on their wallets. Then you create another sale phase for the public drop with 3900 NFTs and no conditions, and last, you leave 100 NFTs as a reserve to mint in the last phase.

![](https://miro.medium.com/max/1400/0*uKJ5PPtbLYkqhb40)

sale phases

Now you have the collection created and uploaded the files and metadata, it’s time to define how you are going to sell the NFTs.

Here we are going to create a sale phase for a pre-sale where we want to sell 1000 random NFTs. We have 4 price tiers and the buyers can select the tier they want to buy. For example, if a buyer want’s to get 4 random NFTs they can select the Gold tier and pay 30 Ada.

Generate the sale phase with the price tiers and the links for the four buy buttons.

```markup
curl --location --request POST 'https://cardano-mainnet.tangocrypto.com/<app-id>/v1/nft/collections/<collection-id>/phases' \
--header 'x-api-key: <your-api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "pre-sale",
    "type": "random",
    "total_tokens": 1000,
    "reservation_time": 300,
    "price_tiers": [
        {
            "name": "Bronze",
            "quantity": 1,
            "supply": 1,
            "price": 10000000
        },
        {
            "name": "Silver",
            "quantity": 2,
            "supply": 1,
            "price": 20000000
        },
        {
            "name": "Gold",
            "quantity": 4,
            "supply": 1,
            "price": 30000000
        },
        {
            "name": "Platinum",
            "quantity": 8,
            "supply": 1,
            "price": 60000000
        }
    ]
}'
```

Response:

In the response, we can see that each price tier has an associated payment link. Then we copy that link and embed it in the button. When the buyer clicks on the button a new window with Tangopay will open and once the payment is done the NFTs are sent to the wallet.

```markup
{
    "id": "81d190a7ed1847cc97cf515aa2a70bc2",
    "type": "random",
    "name": "pre-sale",
    "active": true,
    "reservation_time": 300,
    "total_tokens": 1000,
    "remaining_tokens": 1000,
    "price_tiers": [
        {
            "id": 0,
            "name": "Bronze",
            "price": 10000000,
            "quantity": 1,
            "supply": 1,
            "payment_link": "https://buy.tangocrypto.com?q=test_eyJjb2xsZWN0aW9uX2lkIjoiOTFjMjYyZmRkYjljNGYyOWJmZDc0MTI1NmJmMzAxMWIiLCJwaGFzZV9pZCI6IjgxZDE5MGE3ZWQxODQ3Y2M5N2NmNTE1YWEyYTcwYmMyIiwicnVsZXMiOltdLCJwcmljZSI6MTAwMDAwMDAsInByaWNlX2lkIjowLCJxdWFudGl0eSI6MSwic3VwcGx5IjoxLCJ0eXBlIjoiUGhhc2VTYWxlIiwidGNjIjoicVgrcGdJUm00Qm5iVVR2UnFzeGtmK3p4VVBoeFUzaE1rRGVqMTdTSGlwckZMd1BkOGpwaTRleDFCQ2d3YXFyUUpRUEd6SFVVdm9BdEdPbU14dUlYY25LU09rVzkxRVZ1YnhhajdwVDRETVVpaU9NZXdIRXV3eHJUVndQVkFnPT0ifQ=="
        },
        {
            "id": 1,
            "name": "Silver",
            "price": 20000000,
            "quantity": 2,
            "supply": 1,
            "payment_link": "https://buy.tangocrypto.com?q=test_eyJjb2xsZWN0aW9uX2lkIjoiOTFjMjYyZmRkYjljNGYyOWJmZDc0MTI1NmJmMzAxMWIiLCJwaGFzZV9pZCI6IjgxZDE5MGE3ZWQxODQ3Y2M5N2NmNTE1YWEyYTcwYmMyIiwicnVsZXMiOltdLCJwcmljZSI6MjAwMDAwMDAsInByaWNlX2lkIjoxLCJxdWFudGl0eSI6Miwic3VwcGx5IjoxLCJ0eXBlIjoiUGhhc2VTYWxlIiwidGNjIjoicVgrcGdJUm00Qm5iVVR2UnFzeGtmK3p4VVBoeFUzaE1rRGVqMTdTSGlwckZMd1BkOGpwaTRleDFCQ2d3YXFyUUpRUEd6SFVVdm9BdEdPbU14dUlYY25LU09rVzkxRVZ1YnhhajdwVDRETVVpaU9NZXdIRXV3eHJUVndQVkFnPT0ifQ=="
        },
        {
            "id": 2,
            "name": "Gold",
            "price": 30000000,
            "quantity": 4,
            "supply": 1,
            "payment_link": "https://buy.tangocrypto.com?q=test_eyJjb2xsZWN0aW9uX2lkIjoiOTFjMjYyZmRkYjljNGYyOWJmZDc0MTI1NmJmMzAxMWIiLCJwaGFzZV9pZCI6IjgxZDE5MGE3ZWQxODQ3Y2M5N2NmNTE1YWEyYTcwYmMyIiwicnVsZXMiOltdLCJwcmljZSI6MzAwMDAwMDAsInByaWNlX2lkIjoyLCJxdWFudGl0eSI6NCwic3VwcGx5IjoxLCJ0eXBlIjoiUGhhc2VTYWxlIiwidGNjIjoicVgrcGdJUm00Qm5iVVR2UnFzeGtmK3p4VVBoeFUzaE1rRGVqMTdTSGlwckZMd1BkOGpwaTRleDFCQ2d3YXFyUUpRUEd6SFVVdm9BdEdPbU14dUlYY25LU09rVzkxRVZ1YnhhajdwVDRETVVpaU9NZXdIRXV3eHJUVndQVkFnPT0ifQ=="
        },
        {
            "id": 3,
            "name": "Platinum",
            "price": 60000000,
            "quantity": 8,
            "supply": 1,
            "payment_link": "https://by.tangocrypto.com?q=test_eyJjb2xsZWN0aW9uX2lkIjoiOTFjMjYyZmRkYjljNGYyOWJmZDc0MTI1NmJmMzAxMWIiLCJwaGFzZV9pZCI6IjgxZDE5MGE3ZWQxODQ3Y2M5N2NmNTE1YWEyYTcwYmMyIiwicnVsZXMiOltdLCJwcmljZSI6NjAwMDAwMDAsInByaWNlX2lkIjozLCJxdWFudGl0eSI6OCwic3VwcGx5IjoxLCJ0eXBlIjoiUGhhc2VTYWxlIiwidGNjIjoicVgrcGdJUm00Qm5iVVR2UnFzeGtmK3p4VVBoeFUzaE1rRGVqMTdTSGlwckZMd1BkOGpwaTRleDFCQ2d3YXFyUUpRUEd6SFVVdm9BdEdPbU14dUlYY25LU09rVzkxRVZ1YnhhajdwVDRETVVpaU9NZXdIRXV3eHJUVndQVkFnPT0ifQ=="
        }
    ],
    "created_at": "2022-05-24T03:10:58.988Z",
    "updated_at": "2022-05-24T03:10:58.988Z"
}
```

## Step 4: Sell the collection on your website

Create a button for every payment link and sell the collection on your website.

![](https://miro.medium.com/max/1400/0*be9c1jMe-kJnpCE4)

```markup
<form action="https://buy.tangocrypto.com?q=test_eyJjb2xsZWN0aW9uX2lkIjoiOTFjMjYyZmRkYjljNGYyOWJmZDc0MTI1NmJmMzAxMWIiLCJwaGFzZV9pZCI6IjgxZDE5MGE3ZWQxODQ3Y2M5N2NmNTE1YWEyYTcwYmMyIiwicnVsZXMiOltdLCJwcmljZSI6NjAwMDAwMDAsInByaWNlX2lkIjozLCJxdWFudGl0eSI6OCwic3VwcGx5IjoxLCJ0eXBlIjoiUGhhc2VTYWxlIiwidGNjIjoicVgrcGdJUm00Qm5iVVR2UnFzeGtmK3p4VVBoeFUzaE1rRGVqMTdTSGlwckZMd1BkOGpwaTRleDFCQ2d3YXFyUUpRUEd6SFVVdm9BdEdPbU14dUlYY25LU09rVzkxRVZ1YnhhajdwVDRETVVpaU9NZXdIRXV3eHJUVndQVkFnPT0ifQ==">
    <input type="submit" value="Buy" />
</form>
```

When the buyer clicks on the buy button a new window with Tangopay will be opened and from there the buyer can pay with any of the most used wallets in Cardano.

![](https://miro.medium.com/max/1400/1*IpaOPho80rZSmvYn99EVAw.png)

**Nodejs code**

Everything we did through Postman can be done using any programming language. Here we have an example using Nodejs:

```markup
const axios = require('axios').default;

const HOST = 'cardano-testnet.tangocrypto.com';
const APP_ID = '34492bb302cf4678a3a0ec93029c5bh67';
const API_KEY = '8888c8026e7i47b4b2527151e126e914';

axios.defaults.baseURL = `https://${HOST}/${APP_ID}/v1`;
axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/json';


const collection = {
    "name": "Tango Collection",
    "description": "Tango collection description",
    "url": "https://www.tangocrypto.com",
    "payout_address": "addr_test1qp9mj7vnenx4v99hw7ztfq03n7dmmujpgtlyfjhhel9w67nk72usllcew208n60ym94xcptfrgytuy5apwp565x28jgsg0ztq3",
    "policy": {
        "lock": true,
        "lock_time": "2023-02-24"
    },
    "metadata": {
        "asset_name": "<asset_name>",
        "name": "<name>",
        "image": "<image_link>",
        "media_type": "<mime_type>",
        "description": "<description>",
        "attributes": {
            "color": "<color>",
            "right_eye": "<right_eye>",
            "left_eye": "<left_eye>",
            "mouth": "<mouth>",
            "collection": "Faces Collection",
            "artist": "Tangocrypto",
            "twitter": "https://twitter.com/tango_crypto",
            "copyright": "Tangocrypto 2022"
        },
        "version": "1.0"
    }
};

const tokensArr = {
  "tokens": [
    {
      "asset_name": "FACE#01",
      "name": "FACE#01",
      "description": "Faces collection",
      "media_type": "png",
      "custom_attributes": {
        "md5checksum": "b58e62a83802b2bf0792a4e983dd2ff3cf9e0c1e"
      },
      "metadata_attributes": [
        {
          "tag": "<color>",
          "name": "Attribute color",
          "value": "Light Blue"
        },
        {
          "tag": "<left_eye>",
          "name": "Attribute left eye",
          "value": "Open"
        },
        {
          "tag": "<right_eye>",
          "name": "Attribute right eye",
          "value": "Half"
        },
        {
          "tag": "<mouth>",
          "name": "Attribute mouth",
          "value": "Astonishmed"
        }
      ],
      "image": "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"
    },
    {
      "asset_name": "FACE#02",
      "name": "FACE#02",
      "description": "Faces collection",
      "media_type": "png",
      "custom_attributes": {
        "md5checksum": "bee6ddb26d7d9b5f7dccba997ec575d272d6981f"
      },
      "metadata_attributes": [
        {
          "tag": "<color>",
          "name": "Attribute color",
          "value": "Light Purple"
        },
        {
          "tag": "<left_eye>",
          "name": "Attribute left eye",
          "value": "Closed"
        },
        {
          "tag": "<right_eye>",
          "name": "Attribute right eye",
          "value": "Half"
        },
        {
          "tag": "<mouth>",
          "name": "Attribute mouth",
          "value": "Happy"
        }
      ],
      "image": "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PuoEHUhhc8w7jh07Fm+//XZP91Hft29fvP322325Zr6Z6XYEHRh6nxTzjrGxsbh48WLMz88Xuup83759cfHixbh48WJfVrNvtrYWceWKoI86QQeG2p1ivtmTTz4Zv/jFL+JHP/rRlrdirVarN4W8zCeo3YmYE2GVOzDE7jbmmx08eDAOHjwYzWYzLl26FJcuXYrl5eVoNpuxuroazWbzo2NXo1qtxp49e+L++++PgwcPxp49e0p9atrdWF+PuPK+vV4RdGBIbSXmN//31etxH2atlsVwtJlyB4ZOtzHPYm3N6JwbfCKAoSLmNzR/vW50znU+FcDQEPMbrGznVj4ZwFAQ85v9/d992O9TYMD4dAADT8xv1mxaCMfH+YQAA03Mb7a21r52DrfyKQEGlpjfbH3dVDu355MCDCQx/zir2rkTnxZg4Ij5xzWbG9FqWdXO7fnEAANFzD/uypUN1835VD41wMAQ84+7dm0jfvWPYs6n88kBBkKlIua3unZtI/7+78Scu+PTAwyEK1c24to114g7rl5tx3xdz7lLgg4MhPX1iL99b912ptH+5UbMuVeCDgyUX/3jejSboxv1ZtM1c7bG89CBgdP89Xqsf9i+pr59RIYd6+sR//xPZijYOkEHBlKrtREffPBh/NEffyZ2JP+munZtI/7vP9g0hu6MyO++wDBaW4to/J8PU0/Bt1rt6+ViTreS/94LZND89XpceT9SjdavXduIf/6njbh6Ne8vK5QryUcDyK4zWt+9u31tfVjDvr7e/gXFNq4UbUg/EsCounJlI65e/TB2f3Z7VKvb+n06d219vT293vqN29HoDUEHhk7nmeBX3o/Y/dntsXv3toEdsQs5ZRnQjwDAp+uEvfnriN27t8Xuz26LXbsGY9R+9epGfPD/NuLKlQ0hpxSCDqRw5Uo7njt2RNx3XzvuO3eWG/erVzfi6tWIK+9btU75BB1IZW3toynuVjvuu3Zti12/ty127ozCA7+29lHE/2UjPvjASJz+EnQgrbW1GyP3iIjt29tR37kzYsfvtK+7b98esWPHtti+PT62K936euePjVhbax9v7V834tq19m1nAs4gEXRgZKyv35gWj3DbGLnYKQ4AEhB0AEhA0AEgAUEHgAQEHQASEHQASEDQASABQQeABAQdABIQdABIQNABIAFBB4AEBB0AEhB0AEhA0AEg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"
    }
  ]
};


const salePhase = {
    "type": "random",
    "total_tokens": 2,
    "reservation_time": 300,
    "price_tiers": [{
        "name": "Silver plan",
        "quantity": 1,
        "supply": 1,
        "price": 10000000
    },{
        "name": "Golden plan",
        "quantity": 1,
        "supply": 1,
        "price": 15000000
    }]
};


async function getCollection() {
    try {
        console.log("here");
        const response = await axios.get('/nft/collections');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function createCollection(collection) {
    try {
        const response = await axios.post('/nft/collections', JSON.stringify(collection));
        console.log(response.data);
        return response.data.id;
    } catch (error) {
        console.error(error);
    }
}

async function createTokens(collectionId, tokens) {
    try {
        const response = await axios.post(`/nft/collections/${collectionId}/tokens`, JSON.stringify(tokens));
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function createSalePhase(collectionId, salePhase) {
    try {
        console.log("Create collection");
        const response = await axios.post(`/nft/collections/${collectionId}/phases`, JSON.stringify(salePhase));
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function main(){
    let collectionId = await createCollection(collection);
    let tokens = await createTokens(collectionId, tokensArr);
    let phase = await createSalePhase(collectionId, salePhase);
    console.log(phase);
}

main();
```

## Conclusion

And that’s all, if you made it to the end you should have an NFTs in your wallet. For updates follow us on [Twitter](https://twitter.com/tango_crypto).
