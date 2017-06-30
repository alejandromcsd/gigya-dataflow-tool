/* eslint quote-props: 0 */
const file = [{
  id: 'file.compress.gzip',
  template: {
    'id': 'compressGZIP',
    'type': 'file.compress.gzip',
  },
},
{
  id: 'file.compress.lzo',
  template: {
    'id': 'compressLZO',
    'type': 'file.compress.lzo',
    'params': {
      '': '',
    },
  },
},
{
  id: 'file.compress.zip',
  template: {
    'id': 'compressZIP',
    'type': 'file.compress.zip',
  },
},
{
  id: 'file.empty',
  template: {
    'id': 'empty',
    'type': 'file.empty',
    'params': {
      'fileName': '',
    },
  },
},
{
  id: 'file.decrypt.pgp',
  template: {
    'id': 'decryptPGP',
    'type': 'file.decrypt.pgp',
  },
},
{
  id: 'file.encrypt.pgp',
  template: {
    'id': 'encryptPGP',
    'type': 'file.encrypt.pgp',
    'params': {
      'publicKey': '',
    },
  },
},
{
  id: 'file.format.aam',
  template: {
    'id': 'formatAAM',
    'type': 'file.format.aam',
    'params': {
      'dpid': '',
    },
  },
},
{
  id: 'file.format.count',
  template: {
    'id': 'formatCount',
    'type': 'file.format.count',
    'params': {
      'fileName': '',
    },
  },
},
{
  id: 'file.format.dsv',
  template: {
    'id': 'formatDSV',
    'type': 'file.format.dsv',
    'params': {
      'columnSeparator': '',
      'fileName': '',
    },
  },
},
{
  id: 'file.format.json',
  template: {
    'id': 'formatJSON',
    'type': 'file.format.json',
    'params': {
      'fileName': '',
    },
  },
},
{
  id: 'file.format.krux',
  template: {
    'id': 'formatKRUX',
    'type': 'file.format.krux',
    'params': {
      'fileName': '',
    },
  },
},
{
  id: 'file.parse.dsv',
  template: {
    'id': 'parseDSV',
    'type': 'file.parse.dsv',
    'params': {
      'columnSeparator': '',
    },
  },
},
{
  id: 'file.parse.json',
  template: {
    'id': 'parseJSON',
    'type': 'file.parse.json',
  },
},
{
  id: 'file.uncompress.gzip',
  template: {
    'id': 'uncompressGZIP',
    'type': 'file.uncompress.gzip',
  },
},
{
  id: 'file.uncompress.lzo',
  template: {
    'id': 'uncompressLZO',
    'type': 'file.uncompress.lzo',
  },
},
{
  id: 'file.uncompress.zip',
  template: {
    'id': 'uncompressZIP',
    'type': 'file.uncompress.zip',
  },
},
];

export default file;
