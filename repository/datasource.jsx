/* eslint quote-props: 0 */
const datasource = [{
  id: 'datasource.lookup.gigya.gm',
  template: {
    'id': 'lookupGm',
    'type': 'datasource.lookup.gigya.gm',
    'params': {
      'includeChallenges': '*',
    },
  },
},
{
  id: 'datasource.read.amazon.s3',
  template: {
    'id': 'readAmazon',
    'type': 'datasource.read.amazon.s3',
    'params': {
      'bucketName': '',
      'accessKey': '',
      'secretKey': '',
    },
  },
},
{
  id: 'datasource.read.azure.blob',
  template: {
    'id': 'readAzureBlob',
    'type': 'datasource.read.azure.blob',
    'params': {
      'accountName': '',
      'accountKey': '',
      'container': '',
    },
  },
},
{
  id: 'datasource.read.azure.sas',
  template: {
    'id': 'readAzureSas',
    'type': 'datasource.read.azure.sas',
    'params': {
      'authenticationUrl': '',
      'blobUri': '',
      'clientId': '',
      'clientSecret': '',
      'loginUrl': '',
    },
  },
},
{
  id: 'datasource.read.campaignmonitor',
  template: {
    'id': 'readCampaignMonitor',
    'type': 'datasource.read.campaignmonitor',
    'params': {
      'apiKey': '',
      'listId': '',
    },
  },
},
{
  id: 'datasource.read.constantcontact',
  template: {
    'id': 'readConstantContract',
    'type': 'datasource.read.constantcontact',
    'params': {
      'apiKey': '',
      'accessToken': '',
      'listId': '',
    },
  },
},
{
  id: 'datasource.read.gigya.account',
  template: {
    'id': 'readGigyaAccount',
    'type': 'datasource.read.gigya.account',
    'params': {
      'select': '',
    },
  },
},
{
  id: 'datasource.read.gigya.audit',
  template: {
    'id': 'readGigyaAudit',
    'type': 'datasource.read.gigya.audit',
    'params': {
      'select': '',
    },
  },
},
{
  id: 'datasource.read.gigya.ds',
  template: {
    'id': 'readGigyaDs',
    'type': 'datasource.read.gigya.ds',
    'params': {
      'select': '',
      'from': '',
    },
  },
},
{
  id: 'datasource.read.ftp',
  template: {
    'id': 'readFTP',
    'type': 'datasource.read.ftp',
    'params': {
      'host': '',
      'username': '',
      'password': '',
    },
  },
},
{
  id: 'datasource.read.mailchimp',
  template: {
    'id': 'readMailchimp',
    'type': 'datasource.read.mailchimp',
    'params': {
      'apiUrl': '',
      'apiKey': '',
      'listId': '',
    },
  },
},
{
  id: 'datasource.read.marketo',
  template: {
    'id': 'readMarketo',
    'type': 'datasource.read.marketo',
    'params': {
      'baseUrl': '',
      'clientId': '',
      'clientSecret': '',
      'fields': '',
    },
  },
},
{
  id: 'datasource.read.sftp',
  template: {
    'id': 'readSFTP',
    'type': 'datasource.read.sftp',
    'params': {
      'host': '',
      'username': '',
      'password': '',
    },
  },
},
{
  id: 'datasource.read.silverpop',
  template: {
    'id': 'readSilverpop',
    'type': 'datasource.read.silverpop',
    'params': {
      'clientId': '',
      'clientSecret': '',
      'host': '',
      'listId': '',
      'password': '',
      'podNumber': 5,
      'refreshToken': '',
      'username': '',
    },
  },
},
{
  id: 'datasource.write.amazon.s3',
  template: {
    'id': 'writeAmazonS3',
    'type': 'datasource.write.amazon.s3',
    'params': {
      'bucketName': '',
      'accessKey': '',
      'secretKey': '',
    },
  },
},
{
  id: 'datasource.write.azure.blob',
  template: {
    'id': 'writeAzureBlob',
    'type': 'datasource.write.azure.blob',
    'params': {
      'accountName': '',
      'accountKey': '',
      'container': '',
    },
  },
},
{
  id: 'datasource.write.azure.sas',
  template: {
    'id': 'writeAzureSas',
    'type': 'datasource.write.azure.sas',
    'params': {
      'authenticationUrl': '',
      'blobUri': '',
      'clientId': '',
      'clientSecret': '',
      'loginUrl': '',
    },
  },
},
{
  id: 'datasource.write.bluekai',
  template: {
    'id': 'writeBluekai',
    'type': 'datasource.write.bluekai',
    'params': {
      'siteId': '',
      'bkuid': '',
      'secretKey': '',
      'uniqueIdField': '',
    },
  },
},
{
  id: 'datasource.write.campaignmonitor',
  template: {
    'id': 'writeCampaignMonitor',
    'type': 'datasource.write.campaignmonitor',
    'params': {
      'apiKey': '',
      'listId': '',
      'newsletterField': '',
    },
  },
},
{
  id: 'datasource.write.constantcontact',
  template: {
    'id': 'writeConstantContract',
    'type': 'datasource.write.constantcontact',
    'params': {
      'apiKey': '',
      'accessToken': '',
      'listId': '',
    },
  },
},
{
  id: 'datasource.write.exacttarget',
  template: {
    'id': 'writeExactTarget',
    'type': 'datasource.write.exacttarget',
    'params': {
      'clientId': '',
      'clientSecret': '',
      'dataExtension': '',
      'primaryKeys': '',
    },
  },
},
{
  id: 'datasource.write.ftp',
  template: {
    'id': 'writeFTP',
    'type': 'datasource.write.ftp',
    'params': {
      'host': '',
      'username': '',
      'password': '',
    },
  },
},
{
  id: 'datasource.write.gigya.account',
  template: {
    'id': 'writeGigyaAccount',
    'type': 'datasource.write.gigya.account',
  },
},
{
  id: 'datasource.write.gigya.ds',
  template: {
    'id': 'writeGigyaDS',
    'type': 'datasource.write.gigya.ds',
    'params': {
      'type': '',
    },
  },
},
{
  id: 'datasource.write.gigya.generic',
  template: {
    'id': 'writeGigyaGeneric',
    'type': 'datasource.write.gigya.generic',
    'params': {
      'apiMethod': '',
      'apiParams': [],
    },
  },
},
{
  id: 'datasource.write.mailchimp',
  template: {
    'id': 'writeMailchimp',
    'type': 'datasource.write.mailchimp',
    'params': {
      'apiUrl': '',
      'apiKey': '',
      'listId': '',
      'newsletterField': '',
    },
  },
},
{
  id: 'datasource.write.marketo',
  template: {
    'id': 'writeMarketo',
    'type': 'datasource.write.marketo',
    'params': {
      'baseUrl': '',
      'clientId': '',
      'clientSecret': '',
    },
  },
},
{
  id: 'datasource.write.salesforce',
  template: {
    'id': 'writeSalesforce',
    'type': 'datasource.write.salesforce',
    'params': {
      'username': '',
      'password': '',
      'token': '',
      'authEndpoint': '',
      'objectType': '',
      'primaryId': '',
      'lookupId': '',
    },
  },
},
{
  id: 'datasource.write.sftp',
  template: {
    'id': 'writeSFTP',
    'type': 'datasource.write.sftp',
    'params': {
      'host': '',
      'username': '',
      'password': '',
    },
  },
},
{
  id: ' datasource.write.silverpop',
  template: {
    'id': 'writeSilverpop',
    'type': ' datasource.write.silverpop',
    'params': {
      'clientId': '',
      'clientSecret': '',
      'host': '',
      'listId': '',
      'password': '',
      'podNumer': 5,
      'refreshToken': '',
      'username': '',
    },
  },
},
];

export default datasource;
