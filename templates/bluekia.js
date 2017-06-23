/* eslint-disable */

const bluekia = {
  "name": "Bluekai",
  "description": "Full dataflow for extracting data from Gigya, transforming it as required and loading it into Bluekai",
  "steps": [{
      "id": "account",
      "type": "datasource.read.gigya.account",
      "params": {
        "select": "UID,profile.age ,profile.city ,profile.country ,profile.educationLevel, profile.gender ,iRank, profile.relationshipStatus, profile.state",
        "where": "profile.firstName IS NOT NULL"
      },
      "next": [
        "flat"
      ]
    },
    {
      "id": "flat",
      "type": "field.flatten",
      "params": {
        "fields": [
          "profile"
        ]
      },
      "next": [
        "bluekai"
      ]
    },
    {
      "id": "bluekai",
      "type": "datasource.write.bluekai",
      "params": {
        "domain": "http://api.tags.bluekai.com",
        "secretKey": "...",
        "siteId": "...",
        "version": "v1.2",
        "bkuid": "...",
        "uniqueIdField": "UID"
      }
    }
  ]
};

export default bluekia;
