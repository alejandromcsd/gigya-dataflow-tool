/* eslint-disable */

export const inbound = {
  "name": "Campaign Monitor - Inbound",
  "description": "Campaign monitor > rename > evaluate > account",
  "steps": [{
      "id": "campaignmonitor",
      "type": "datasource.read.campaignmonitor",
      "params": {
        "apiKey": "...",
        "listId": "...",
        "status": "unsubscribed",
        "targetField": "data.subscribed"
      },
      "next": [
        "rename"
      ]
    },
    {
      "id": "rename",
      "type": "field.rename",
      "params": {
        "fields": [{
            "sourceField": "GigyaUID",
            "targetField": "UID"
          },
          {
            "sourceField": "Name",
            "targetField": "profile.firstName"
          },
          {
            "sourceField": "EmailAddress",
            "targetField": "profile.email"
          }
        ]
      },
      "next": [
        "evaluate"
      ]
    },
    {
      "id": "evaluate",
      "type": "field.evaluate",
      "params": {
        "language": "jexl",
        "fields": [{
          "field": "data.subscribed",
          "expression": "data_subscribed eq 'unsubscribed' ? 'false' : 'true'"
        }]
      },
      "next": [
        "account"
      ]
    },
    {
      "id": "account",
      "type": "datasource.write.gigya.account"
    }
  ]
};

export const outbound = {
  "name": "Campaign Monitor - Outbound",
  "description": "account > rename > remove > campaignmonitor",
  "steps": [{
      "id": "account",
      "type": "datasource.read.gigya.account",
      "params": {
        "select": "UID,profile.firstName,profile.email,data.subscribed"
      },
      "next": [
        "rename"
      ]
    },
    {
      "id": "rename",
      "type": "field.rename",
      "params": {
        "fields": [{
            "sourceField": "UID",
            "targetField": "GigyaUID"
          },
          {
            "sourceField": "profile.firstName",
            "targetField": "Name"
          },
          {
            "sourceField": "profile.email",
            "targetField": "EmailAddress"
          },
          {
            "sourceField": "data.subscribed",
            "targetField": "newsletterField"
          }
        ]
      },
      "next": [
        "campaignmonitor"
      ]
    },
    {
      "id": "campaignmonitor",
      "type": "datasource.write.campaignmonitor",
      "params": {
        "apiKey": "...",
        "listId": "...",
        "newsletterField": "newsletterField"
      }
    }
  ]
};
