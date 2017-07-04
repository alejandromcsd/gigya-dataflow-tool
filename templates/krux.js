/* eslint-disable */

const outbound = {
  "name": "Krux Dataflow",
  "steps": [{
      "id": "account",
      "type": "datasource.read.gigya.account",
      "params": {
        "select": "UID,profile.gender,profile.age"
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
            "targetField": "id"
          },
          {
            "sourceField": "profile.gender",
            "targetField": "g_gender"
          },
          {
            "sourceField": "profile.age",
            "targetField": "g_age"
          },
          {
            "sourceField": "profile.likes",
            "targetField": "likes"
          }
        ]
      },
      "next": [
        "krux"
      ]
    },
    {
      "id": "krux",
      "type": "file.format.krux",
      "params": {
        "fileName": "Gigya_Krux_M6.csv",
        "createEmptyFile": true
      },
      "next": [
        "lzo"
      ]
    },
    {
      "id": "lzo",
      "type": "file.compress.lzo",
      "params": {
        "createIndexFile": true
      },
      "next": [
        "s3"
      ]
    },
    {
      "id": "s3",
      "type": "datasource.write.amazon.s3",
      "params": {
        "bucketName": "...",
        "accessKey": "...",
        "secretKey": "...",
        "objectKeyPrefix": "..."
      }
    }
  ]
};

export default outbound;
