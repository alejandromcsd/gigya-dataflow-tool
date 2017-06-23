/* eslint-disable */

const azureSas = {
  "name": "Azure - SAS",
  "description": "Full dataflow for passing data from Gigya to Azure",
  "steps": [{
    "id": "account",
    "type": "datasource.read.gigya.account",
    "params": {
      "select": "UID,profile"
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "profile.relationshipStatus",
        "targetField": "relationshipStatus"
      }, {
        "sourceField": "profile.gender",
        "targetField": "gender"
      }, {
        "sourceField": "profile.birthDay",
        "targetField": "birthDay"
      }, {
        "sourceField": "profile.birthMonth",
        "targetField": "birthMonth"
      }, {
        "sourceField": "profile.birthYear",
        "targetField": "birthYear"
      }, {
        "sourceField": "profile.age",
        "targetField": "age"
      }, {
        "sourceField": "profile.education",
        "targetField": "education"
      }, {
        "sourceField": "profile.educationLevel",
        "targetField": "educationLevel"
      }, {
        "sourceField": "profile.followersCount",
        "targetField": "followersCount"
      }, {
        "sourceField": "profile.followingCount",
        "targetField": "followingCount"
      }, {
        "sourceField": "profile.industry",
        "targetField": "industry"
      }]
    },
    "next": ["remove"]
  }, {
    "id": "remove",
    "type": "field.remove",
    "params": {
      "fields": ["profile"]
    },
    "next": ["dsv"]
  }, {
    "id": "dsv",
    "type": "file.format.dsv",
    "params": {
      "fileName": "testAzure${now}.csv",
      "columnSeparator": ","
    },
    "next": ["azure"]
  }, {
    "id": "azure",
    "type": "datasource.write.azure.sas",
    "params": {
      "clientId": "...",
      "clientSecret": "...",
      "loginUrl": "https://login.microsoftonline.com/company.onmicrosoft.com",
      "authenticationUrl": "http://companysasmanager.azurewebsites.net",
      "blobUri": "/api/sasstorage/create/"
    }
  }]
};

export default azureSas;
