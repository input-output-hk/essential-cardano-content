---
title: How to listen to the balance of the blockchain Stake Key address in real
  time on Cardano using DCOne Crypto Webhook
tags:
  - DCOneCrypto
  - Webhook
  - Api
  - Development
  - Stake Key
  - Stake
  - Telegram
  - Discord
url: https://dconecrypto.finance/DC_WebhookWallets
image: https://ucarecdn.com/9d27a71e-6767-4a9b-8585-fc8f971adbbc/
image_text: DCOneCrypto Webhook
---

[DCOne Crypto](https://dconecrypto.finance/article.html?FilterText=&dC_ArticlesCatalogId=Document) allows connecting webhook api for developers to receive information on changing stake balance on Cardano blockchain

**Notification of stake addresses tracking via Webhook, API (Announcement of webhook activity payment stake addresses)**

*   Read more: [https://docs.dconecrypto.finance/notify/webhooks](https://docs.dconecrypto.finance/notify/webhooks)
    
*   Document Github: [https://github.com/DCOneCrypto/StakeAddress-Tracking-Webhook-API](https://github.com/DCOneCrypto/StakeAddress-Tracking-Webhook-API)
    

> Note: Create an account before using the APIs

1.  Create an account: `Mainnet` [https://dconecrypto.finance](https://dconecrypto.finance/)
    

> Note: Website direct menu (please login before):

1.  Live: `Mainnet` [https://dconecrypto.finance/DC\_WebhookWallets](https://dconecrypto.finance/DC_WebhookWallets)
    

**REST API**

Network: `Mainnet` Endpoint: [https://dconecrypto-mainnet.dconecrypto.finance/](https://dconecrypto-mainnet.dconecrypto.finance/)

**Credentials when using API**

```markup
Authorization: Bearer {{accessToken}}

```

**Authenticate**

Example api request:

*   Required field: userNameOrEmailAddress , password
    

```markup
curl --location '{{domain}}/api/TokenAuth/Authenticate' \
--header 'Content-Type: application/json' \
--data '{
  "userNameOrEmailAddress": "",
  "password": "",
  "rememberClient": true
}'

```

Example api Authenticate responses

```markup
{
  "accessToken": "string",
  "encryptedAccessToken": "string",
  "expireInSeconds": 0,
  "shouldResetPassword": true,
  "passwordResetCode": "string",
  "userId": 0,
  "requiresTwoFactorVerification": true,
  "twoFactorAuthProviders": [
    "string"
  ],
  "twoFactorRememberClientToken": "string",
  "returnUrl": "string",
  "refreshToken": "string",
  "refreshTokenExpireInSeconds": 0
}

```

**Create a new webhook (CreateOrEdit)**

Once a payment is detected in the stake address, it will be activated and the webhook call will work

Example api request:

```markup
curl --location -g '{{domain}}/api/services/app/DC_WebhookWallets/CreateOrEdit' \
--header 'Authorization: Bearer {{accessToken}}' \
--header 'Content-Type: application/json' \
--data '{
    "webhookname": "",
    "webhookDescription": "",
    "webhookUrl": "https://webhook.site/9ad3f909-93b1-42da-918d-19a33445b3f2",
    "webhookStakeAddress": "stakexxxxxxxxxxxxx",
    "webhookStatus": true,
    "userId": 0,
    "id": ""
}'

```

**List of webhook connections (GetAll)**

Get a list of all webhooks connected to the system

Example api request:

```markup
curl --location -g '{{domain}}/api/services/app/DC_WebhookWallets/GetAll' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''

```

**Example api response:**

```markup
{
    "result": {
        "totalCount": 1,
        "items": [
            {
                "dC_WebhookWallet": {
                    "webhookname": "Webhookname",
                    "webhookUrl": "https://webhook.site/9ad3f909-93b1-42da-918d-19a33445b3f2",
                    "webhookStatus": false,
                    "userId": 0,
                    "id": "d205f25a-72b6-4e0e-c9c8-08db1614d234"
                },
                "userName": "dcone"
            }
        ]
    },
    "targetUrl": null,
    "success": true,
    "error": null,
    "unAuthorizedRequest": false,
    "__abp": true
}

```

**Get detailed information of a webhook (GetDC\_WebhookWalletForEdit)**

Get a list of all webhooks connected to the system

Example api request:

```markup
curl --location -g '{{domain}}/api/services/app/DC_WebhookWallets/GetDC_WebhookWalletForEdit?Id=d205f25a-72b6-4e0e-c9c8-08db1614d234' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''

```

**Remove webhooks (Delete)**

Remove 1 webhook information and don't trigger notification when stake address payment

Example api request:

```markup
curl --location -g '{{domain}}/api/services/app/DC_WebhookWallets/Delete?null=d205f25a-72b6-4e0e-c9c8-08db1614d234' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''

```

**Get userId by token (GetAllUserForTableDropdown)**

Get the userId variable and put in the userId input parameter in the "CreateOrEdit" api

```markup
curl --location -g '{{domain}}/api/services/app/DC_WebhookWallets/GetAllUserForTableDropdown' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''

```

**Example success response:**

```markup
{
    "result": null,
    "targetUrl": null,
    "success": true,
    "error": null,
    "unAuthorizedRequest": false,
    "__abp": true
}

```

**Example error response:**

```markup
{
    "result": null,
    "targetUrl": null,
    "success": false,
    "error": {
        "code": 0,
        "message": "You have exceeded your account limit",
        "details": null,
        "validationErrors": null
    },
    "unAuthorizedRequest": false,
    "__abp": true
}

```

**Trigger webhook callback and return data results**

Note: Trigger webhook callback (result `webhookUrl` in `CreateOrEdit` api) and data result returned

```markup
[
  {
    "total_balanceOld": 26838691,
    "total_balance": 16663070,
    "utxo": 16593105,
    "rewards": 15465007,
    "withdrawals": 15395042,
    "rewards_available": 69965,
    "StakeAddress": "stake1uxa5t2u5j43gv03esw8s726v8ul4c6r3g0d7x97cr2seeag0sa0dk"
  }
]

```

![Application GUI Screenshots\_1](https://user-images.githubusercontent.com/106427209/222141713-45eb4015-6107-4581-bd9a-863b0313c035.PNG)

![Application GUI Screenshots\_2](https://user-images.githubusercontent.com/106427209/222141715-ac1d8cb1-12ac-460e-a35d-48eef0f14622.PNG)

![Application GUI Screenshots\_3](https://user-images.githubusercontent.com/106427209/222141715-ac1d8cb1-12ac-460e-a35d-48eef0f14622.PNG)  
![Application GUI Screenshots\_4](https://user-images.githubusercontent.com/106427209/222142086-bc5c6a7f-e8ac-4035-b018-2adc9bd8cc1e.PNG)

![Application GUI Screenshots\_5](https://user-images.githubusercontent.com/106427209/222144942-450a4973-8346-4fdd-884a-09c143cb5fc9.PNG)
