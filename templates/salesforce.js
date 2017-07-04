/* eslint-disable */

export const salesforce = {
  "name": "Salesforce Dataflow",
  "steps": [{
      "id": "account",
      "type": "datasource.read.gigya.account",
      "params": {
        "select": "UID,created,lastLogin,isVerified,profile.gender,profile.email,profile.firstName,profile.lastName,profile.address,profile.zip,profile.city,profile.country,profile.verified,profile.age,profile.bio,profile.birthDay,profile.birthMonth,profile.birthYear,profile.phones.number",
        "deltaField": "lastLoginTimestamp"
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
            "sourceField": "profile.firstName",
            "targetField": "FirstName"
          },
          {
            "sourceField": "profile.lastName",
            "targetField": "LastName"
          },
          {
            "sourceField": "profile.zip",
            "targetField": "PersonMailingPostalCode"
          },
          {
            "sourceField": "profile.city",
            "targetField": "PersonMailingCity"
          },
          {
            "sourceField": "profile.country",
            "targetField": "PersonMailingCountry"
          },
          {
            "sourceField": "UID",
            "targetField": "ZZ00_rtl_id__c"
          },
          {
            "sourceField": "profile.email",
            "targetField": "Unique_Email_Gigya__c"
          },
          {
            "sourceField": "profile.address",
            "targetField": "AddressTest__c"
          },
          {
            "sourceField": "isVerified",
            "targetField": "Verified__c"
          },
          {
            "sourceField": "created",
            "targetField": "Create_time__c"
          },
          {
            "sourceField": "lastLogin",
            "targetField": "Last_login_time__c"
          },
          {
            "sourceField": "profile.age",
            "targetField": "Age__c"
          },
          {
            "sourceField": "profile.bio",
            "targetField": "Bio__c"
          },
          {
            "sourceField": "profile.birthDay",
            "targetField": "BirthDay__c"
          },
          {
            "sourceField": "profile.birthMonth",
            "targetField": "BirthMonth__c"
          },
          {
            "sourceField": "profile.birthYear",
            "targetField": "BirthYear__c"
          },
          {
            "sourceField": "profile.gender",
            "targetField": "Gender__c"
          },
          {
            "sourceField": "profile.phones.number",
            "targetField": "Phone"
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
          "profile"
        ]
      },
      "next": [
        "clean"
      ]
    },
    {
      "id": "clean",
      "type": "field.evaluate",
      "params": {
        "fields": [{
          "field": "Golf_Handicap_Number__pc",
          "expression": "Golf_Handicap_Number__pc eq '' || Golf_Handicap_Number__pc eq null ? '#N/A' : Golf_Handicap_Number__pc"
        }],
        "language": "jexl"
      },
      "next": [
        "salesforce"
      ]
    },
    {
      "id": "salesforce",
      "type": "datasource.write.salesforce",
      "params": {
        "username": "...",
        "password": "....",
        "token": "....",
        "authEndpoint": "https://test.salesforce.com/services/Soap/u/xx.0",
        "objectType": "account",
        "primaryId": "...",
        "lookupId": "..."
      }
    }
  ]
};

export const marketingCloud = {
  "name": "Salesforce Marketing Cloud - Exacttarget Dataflow - Outbound",
  "steps": [{
    "id": "account",
    "type": "datasource.read.gigya.account",
    "params": {
      "select": "UID,profile.email,profile.firstName,profile.lastName,profile.userName"
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "UID",
        "targetField": "GUID"
      }, {
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
      }]
    },
    "next": ["exacttarget"]
  }, {
    "id": "exacttarget",
    "type": "datasource.write.exacttarget",
    "params": {
      "clientId": "...",
      "clientSecret": "...",
      "dataExtension": "GigyaSubscribers",
      "primaryKeys": "GUID,EMAIL"
    }
  }]
};
