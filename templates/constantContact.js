/* eslint-disable */

export const inbound = {
  "name": "Constant Contact Dataflow - Inbound",
  "steps": [{
    "id": "constantcontact",
    "type": "datasource.read.constantcontact",
    "params": {
      "apiKey": "...",
      "accessToken": "...",
      "listId": "...",
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "CustomField1",
        "targetField": "UID"
      }, {
        "sourceField": "Email",
        "targetField": "profile.email"
      }, {
        "sourceField": "newsletterField",
        "targetField": "data.subscribed"
      }]
    },
    "next": ["account"]
  }, {
    "id": "account",
    "type": "datasource.write.gigya.account"
  }]
};

export const outbound = {
  "name": "Constant Contact Dataflow - Outbound",
  "steps": [{
    "id": "account",
    "type": "datasource.read.gigya.account",
    "params": {
      "select": "UID,profile.email,data.subscribe",
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "UID",
        "targetField": "Custom Field 1"
      }, {
        "sourceField": "profile.email",
        "targetField": "Email"
      }, {
        "sourceField": "data.subscribe",
        "targetField": "newsletterField"
      }]
    },
    "next": ["remove"]
  }, {
    "id": "remove",
    "type": "field.remove",
    "params": {
      "fields": ["profile", "data"]
    },
    "next": ["constantcontact"]
  }, {
    "id": "constantcontact",
    "type": "datasource.write.constantcontact",
    "params": {
      "apiKey": "...",
      "accessToken": "...",
      "listId": "..."
    }
  }]
};
