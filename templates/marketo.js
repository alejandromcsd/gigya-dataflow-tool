/* eslint-disable */

export const inbound = {
  "name": "Marketo Dataflow - Inbound",
  "description": "marketo > rename > remove > account",
  "steps": [{
      "id": "marketo",
      "type": "datasource.read.marketo",
      "params": {
        "baseUrl": "...",
        "clientId": "...",
        "clientSecret": "...",
        "fields": "guid,unsubscribed,address,city,gender,firstName,lastName"
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
            "sourceField": "guid",
            "targetField": "UID"
          },
          {
            "sourceField": "unsubscribed",
            "targetField": "data.emailSubscribed"
          },
          {
            "sourceField": "address",
            "targetField": "profile.address"
          },
          {
            "sourceField": "city",
            "targetField": "profile.city"
          },
          {
            "sourceField": "gender",
            "targetField": "profile.gender"
          },
          {
            "sourceField": "firstName",
            "targetField": "profile.firstName"
          },
          {
            "sourceField": "lastName",
            "targetField": "profile.lastName"
          }
        ]
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
  "name": "Marketo Dataflow - Outbound",
  "description": "account > rename > remove > marketo",
  "steps": [{
    "id": "account",
    "type": "datasource.read.gigya.account",
    "params": {
      "select": "UID,profile.email,profile.firstName,profile.lastName,profile.likes",
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "UID",
        "targetField": "gUID"
      }, {
        "sourceField": "profile.email",
        "targetField": "email"
      }, {
        "sourceField": "profile.firstName",
        "targetField": "firstName"
      }, {
        "sourceField": "profile.lastName",
        "targetField": "lastName"
      }, {
        "sourceField": "profile.likes",
        "targetField": "fblikes"
      }, ]
    },
    "next": ["remove"]
  }, {
    "id": "remove",
    "type": "field.remove",
    "params": {
      "fields": ["profile"]
    },
    "next": ["marketo"]
  }, {
    "id": "marketo",
    "type": "datasource.write.marketo",
    "params": {
      "baseUrl": "...",
      "clientId": "...",
      "clientSecret": "..."
    },
  }]
};
