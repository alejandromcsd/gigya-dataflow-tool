/* eslint-disable */

export const fromGigyaToSFTP = {
  "name": "Export from Gigya to SFTP",
  "description": "account > rename > dsv > gzip > sftp",
  "steps": [{
    "id": "account",
    "type": "datasource.read.gigya.account",
    "params": {
      "select": "profile.email,profile.lastName,profile.firstName,profile.gender,profile.birthDay,profile.birthMonth,profile.birthYear,profile.address,profile.zip,profile.city,profile.state,profile.country,profile.phones.number,profile.nickname"
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "profile.email",
        "targetField": "MAIL"
      }, {
        "sourceField": "profile.lastName",
        "targetField": "NAME"
      }, {
        "sourceField": "profile.firstName",
        "targetField": "FIRSTNAME"
      }, {
        "sourceField": "profile.gender",
        "targetField": "GENDER"
      }, {
        "sourceField": "profile.birthDay",
        "targetField": "BIRTH_DAY"
      }, {
        "sourceField": "profile.birthMonth",
        "targetField": "BIRTH_MONTH"
      }, {
        "sourceField": "profile.birthYear",
        "targetField": "BIRTH_YEAR"
      }, {
        "sourceField": "profile.address",
        "targetField": "STREET"
      }, {
        "sourceField": "profile.zip",
        "targetField": "POSTALCODE"
      }, {
        "sourceField": "profile.city",
        "targetField": "CITY"
      }, {
        "sourceField": "profile.state",
        "targetField": "PROVINCE"
      }, {
        "sourceField": "profile.country",
        "targetField": "COUNTRY"
      }, {
        "sourceField": "profile.phones",
        "targetField": "PHONE"
      }, {
        "sourceField": "profile.nickname",
        "targetField": "USERNAME"
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
      "fileName": "GIGYA_TO_SFTP_${now}.csv",
      "columnSeparator": ",",
      "quoteFields": true
    },
    "next": ["gzip"]
  }, {
    "id": "gzip",
    "type": "file.compress.gzip",
    "next": ["sftp"]
  }, {
    "id": "sftp",
    "type": "datasource.write.sftp",
    "params": {
      "host": "",
      "username": "",
      "password": "",
      "remotePath": ""
    }
  }]
};

export const adobeAudience = {
  "name": "Adobe Audience Manager Dataflow",
  "steps": [{
      "id": "account",
      "type": "datasource.read.gigya.account",
      "params": {
        "select": "UID,profile"
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
            "sourceField": "profile.relationshipStatus",
            "targetField": "relationshipStatus"
          },
          {
            "sourceField": "profile.gender",
            "targetField": "gender"
          },
          {
            "sourceField": "profile.birthDay",
            "targetField": "birthDay"
          },
          {
            "sourceField": "profile.birthMonth",
            "targetField": "birthMonth"
          },
          {
            "sourceField": "profile.birthYear",
            "targetField": "birthYear"
          },
          {
            "sourceField": "profile.age",
            "targetField": "age"
          },
          {
            "sourceField": "profile.education",
            "targetField": "education"
          },
          {
            "sourceField": "profile.educationLevel",
            "targetField": "educationLevel"
          },
          {
            "sourceField": "profile.followersCount",
            "targetField": "followersCount"
          },
          {
            "sourceField": "profile.followingCount",
            "targetField": "followingCount"
          },
          {
            "sourceField": "profile.industry",
            "targetField": "industry"
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
        "aam"
      ]
    },
    {
      "id": "aam",
      "type": "file.format.aam",
      "params": {
        "dpid": "..."
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
        "password": "..."
      }
    }
  ]
};

export const epsilon = {
  "name": "Epsilon Dataflow",
  "steps": [{
    "id": "account",
    "type": "datasource.read.gigya.account",
    "params": {
      "select": "UID,profile,data"
    },
    "next": ["rename"]
  }, {
    "id": "rename",
    "type": "field.rename",
    "params": {
      "fields": [{
        "sourceField": "profile.gender",
        "targetField": "'profile.gender'"
      }, {
        "sourceField": "profile.birthYear",
        "targetField": "'profile.birthYear'"
      }, {
        "sourceField": "data.user.cableProviderName",
        "targetField": "'data.user.cableProviderName'"
      }, {
        "sourceField": "data.user.location",
        "targetField": "'data.user.location'"
      }, {
        "sourceField": "data.user.masterID",
        "targetField": "'data.user.masterID'"
      }, {
        "sourceField": "data.personas.Food.aboutMe",
        "targetField": "'data.personas.Food.aboutMe'"
      }, {
        "sourceField": "data.personas.Food.myFavorites",
        "targetField": "'data.personas.Food.myFavorites'"
      }, {
        "sourceField": "profile.education.degree",
        "targetField": "'profile.education.degree'"
      }, {
        "sourceField": "profile.education.endYear",
        "targetField": "'profile.education.endYear'"
      }, {
        "sourceField": "profile.education.fieldOfStudy",
        "targetField": "'profile.education.fieldOfStudy'"
      }, {
        "sourceField": "profile.education.school",
        "targetField": "'profile.education.school'"
      }, {
        "sourceField": "profile.education.schoolType",
        "targetField": "'profile.education.schoolType'"
      }, {
        "sourceField": "profile.education.startYear",
        "targetField": "'profile.education.startYear'"
      }, {
        "sourceField": "profile.educationLevel",
        "targetField": "'profile.educationLevel'"
      }, ]
    },
    "next": ["remove"]
  }, {
    "id": "remove",
    "type": "field.remove",
    "params": {
      "fields": ["profile", "data"]
    },
    "next": ["replace"]
  }, {
    "id": "replace",
    "type": "field.replace",
    "params": {
      "fields": [{
          "field": "*",
          "regex": "(\\|)|(\n)|(||)",
          "replacement": " "
        },
        {
          "field": "*",
          "regex": "[^\\x00-\\x7F]",
          "replacement": ""
        }
      ]
    },
    "next": ["json", "empty"]
  }, {
    "id": "json",
    "type": "file.format.json",
    "params": {
      "fileName": "gigya-${now}.json"
    },
    "next": ["sftp"]
  }, {
    "id": "empty",
    "type": "file.empty",
    "params": {
      "fileName": "gigya.ok"
    },
    "next": ["sftp"]
  }, {
    "id": "sftp",
    "type": "datasource.write.sftp",
    "params": {
      "host": "",
      "username": "",
      "password": "",
      "temporaryUploadExtension": true,
      "remotePath": ""
    }
  }]
};
