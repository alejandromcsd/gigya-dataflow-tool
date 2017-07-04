/* eslint-disable */

export const inbound = {
  "name": "Silverpop Dataflow - Inbound",
  "description": "silverpop > rename > evaluate > account",
  "steps": [{
      "id": "silverpop",
      "type": "datasource.read.silverpop",
      "params": {
        "clientId": "...",
        "clientSecret": "...",
        "refreshToken": "...",
        "podNumber": 5,
        "host": "...",
        "username": "...",
        "password": "...",
        "listId": "...",
        "columns": "GigyaUid,EMAIL,Subscribed"
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
            "sourceField": "GigyaUid",
            "targetField": "UID"
          },
          {
            "sourceField": "EMAIL",
            "targetField": "profile.email"
          },
          {
            "sourceField": "Subscribed",
            "targetField": "data.subscribed"
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
          "expression": "data.subscribed eq 'Yes' ? 'true' : 'false'"
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
  "name": "Silverpop Dataflow - Outbound",
  "description": "account > rename > remove > evaluate > silverpop",
  "steps": [{
      "id": "account",
      "type": "datasource.read.gigya.account",
      "params": {
        "select": "UID,profile.email,data.subscribed"
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
            "targetField": "GigyaUid"
          },
          {
            "sourceField": "profile.email",
            "targetField": "EMAIL"
          },
          {
            "sourceField": "data.subscribed",
            "targetField": "Subscribed"
          }
        ]
      },
      "next": [
        "remove"
      ]
    },
    {
      "id": "remove",
      "type": "field.remove",
      "params": {
        "fields": [
          "profile",
          "data"
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
          "field": "Subscribed",
          "expression": "Subscribed eq 'true' ? 'Yes' : 'No'"
        }]
      },
      "next": [
        "dsv"
      ]
    },
    {
      "id": "dsv",
      "type": "file.format.dsv",
      "params": {
        "fileName": "${now:YYMMdd_HHmm}.csv",
        "columnSeparator": ","
      },
      "next": [
        "silverpop"
      ]
    },
    {
      "id": "silverpop",
      "type": "datasource.write.silverpop",
      "params": {
        "clientId": "...",
        "clientSecret": "...",
        "refreshToken": "...",
        "podNumber": 5,
        "host": "...",
        "username": "...",
        "password": "...",
        "listId": "..."
      }
    }
  ]
};
