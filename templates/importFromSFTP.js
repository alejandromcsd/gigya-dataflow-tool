/* eslint-disable */

const inbound = {
  "name": "Import from SFTP to Gigya",
  "description": "sftp > dsv > rename > account",
  "steps": [{
      "id": "sftp",
      "type": "datasource.read.sftp",
      "params": {
        "host": "",
        "username": "",
        "password": "",
        "remotePath": "",
        "fileNameRegex": ".*.csv"
      },
      "next": [
        "dsv"
      ]
    },
    {
      "id": "dsv",
      "type": "file.parse.dsv",
      "params": {
        "columnSeparator": ","
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
            "sourceField": "EVENING_ABC",
            "targetField": "data.newslettersEvening.abc"
          },
          {
            "sourceField": "EVENING_CORREO",
            "targetField": "data.newslettersEvening.correo"
          },
          {
            "sourceField": "EVENING_CSVOCENTO",
            "targetField": "data.newslettersEvening.csvocento"
          },
          {
            "sourceField": "EVENING_DIARIOMONTANES",
            "targetField": "data.newslettersEvening.diariomontanes"
          },
          {
            "sourceField": "EVENING_DIARIOVASCO",
            "targetField": "data.newslettersEvening.diariovasco"
          },
          {
            "sourceField": "EVENING_ELCOMERCIO",
            "targetField": "data.newslettersEvening.elcomercio"
          },
          {
            "sourceField": "EVENING_FINANZAS",
            "targetField": "data.newslettersEvening.finanzas"
          },
          {
            "sourceField": "EVENING_GRADA360",
            "targetField": "data.newslettersEvening.grada360"
          },
          {
            "sourceField": "EVENING_HOY",
            "targetField": "data.newslettersEvening.hoy"
          },
          {
            "sourceField": "EVENING_HOYCINEMA",
            "targetField": "data.newslettersEvening.hoycinema"
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

export default inbound;
