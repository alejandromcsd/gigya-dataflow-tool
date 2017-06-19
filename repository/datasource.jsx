/* eslint quote-props: 0 */
const datasource = [{
  id: 'datasource.lookup.gender',
  description: 'This script is used to guess the gender of a user in a third-party platform, based on the first name field in Gigya\'s platform. It returns the guessed gender and the probability for guessing correctly. The script may be used, for example, when running a targeted gender-specific campaign, to send emails only to those users who have are estimated with high certainty to belong to that gender.',
  template: {
    'id': 'genderGuess',
    'type': 'datasource.lookup.gender',
    'params': {
      'targetField': 'data.guessedGender',
      'firstNameField': 'profile.firstName',
    },
  },
},
{
  id: 'datasource.lookup.gigya.gm',
  description: 'If you have implemented the Loyalty platform, use this script to retrieve the current status of a user in each of the specified challenges since the last successful execution of the dataflow. The script makes use of the gm.getChallengeStatus REST API.',
  template: {
    'id': 'gm',
    'type': 'datasource.lookup.gigya.gm',
    'params': {
      'includeChallenges': '*',
    },
  },
},
{
  id: 'datasource.read.amazon.s3',
  description: 'Extract objects from Amazon\'s Simple Storage Service.',
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
  description: 'Extract data "blobs" from the Azure Blob cloud storage. Blobs are extracted by container and (optionally) filtered by blob name prefix. Only blobs that have changed since the last run of the dataflow will be extracted.',
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
];

export default datasource;
