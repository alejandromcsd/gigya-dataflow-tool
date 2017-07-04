/* eslint-disable */

export const inbound = {
  "name": "Mailchimp Dataflow - Inbound",
  "steps": [{
    "id": "mailchimp",
    "type": "datasource.read.mailchimp",
    "params": {
      "apiUrl": "https://<dc>.api.mailchimp.com/3.0/",
      "apiKey": "...",
      "listId": "..."
    },
    "next": ["evaluate"]
  }, {
    "id": "evaluate",
    "type": "field.evaluate",
    "params": {
      "fields": [{
        "field": "status",
        "expression": "status eq 'subscribed' ? true : false"
      }],
      "language": "jexl"
    },
    "next": ["rename_UID"]
  }, {
    "id": "rename_UID",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "merge_fields.UID",
        "targetField": "UID"
      }]
    },
    "next": ["select"]
  }, {
    "id": "select",
    "type": "field.select",
    "params": {
      "fields": ["UID", "status"]
    },
    "next": ["rename_status"]
  }, {
    "id": "rename_status",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "status",
        "targetField": "data.subscribeToOurNewsletter"
      }]
    },
    "next": ["gigya"]
  }, {
    "id": "gigya",
    "type": "datasource.write.gigya.account"
  }]
};

export const outbound = {
  "name": "Mailchimp Dataflow - Outbound",
  "steps": [{
    "id": "account",
    "type": "datasource.read.gigya.account",
    "params": {
      "select": "UID,profile.email,profile.firstName,profile.lastName,profile.userName,data.mailchimp.subscribePlatformUpdates"
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "profile.email",
        "targetField": "EMAIL"
      }, {
        "sourceField": "profile.firstName",
        "targetField": "FNAME"
      }, {
        "sourceField": "profile.lastName",
        "targetField": "LNAME"
      }, {
        "sourceField": "profile.userName",
        "targetField": "UNAME"
      }, {
        "sourceField": "data.mailchimp.subscribePlatformUpdates",
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
    "next": ["mailchimp"]
  }, {
    "id": "mailchimp",
    "type": "datasource.write.mailchimp",
    "params": {
      "apiUrl": "https://<dc>.api.mailchimp.com/3.0/",
      "apiKey": "",
      "listId": "",
      "newsletterField": "newsletterField"
    }
  }]
};
