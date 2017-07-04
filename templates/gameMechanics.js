/* eslint-disable */

const outbound = {
  "name": "Game Mechanics Dataflow",
  "description": "accounts -> gm -> dsv -> ftp",
  "steps": [{
      "id": "account",
      "type": "datasource.read.gigya.account",
      "params": {
        "select": "UID,profile.firstName,profile.lastName,profile.gender,profile.nickname,profile.email",
        "where": "profile.firstName IS NOT NULL"
      },
      "next": [
        "gm",
        "jsonAccounts"
      ]
    },
    {
      "id": "gm",
      "type": "datasource.lookup.gigya.gm",
      "params": {
        "includeChallenges": "*"
      },
      "next": [
        "extractAchievements"
      ]
    },
    {
      "id": "extractAchievements",
      "type": "field.array.extract",
      "params": {
        "field": "achievements",
        "propagationFields": [
          "UID"
        ],
        "generateKey": true
      },
      "next": [
        "dsvGM"
      ]
    },
    {
      "id": "dsvGM",
      "type": "file.format.dsv",
      "params": {
        "fileName": "test_GM_${now}.csv",
        "columnSeparator": ","
      },
      "next": [
        "sftp"
      ]
    },
    {
      "id": "jsonAccounts",
      "type": "file.format.json",
      "params": {
        "fileName": "test_Accounts_${now:yyyy}.json",
        "createEmptyFile": false
      },
      "next": [
        "sftp"
      ]
    },
    {
      "id": "sftp",
      "type": "datasource.write.sftp",
      "params": {
        "host": "...",
        "username": "...",
        "password": "...",
        "remotePath": "..."
      }
    }
  ]
};

export default outbound;
