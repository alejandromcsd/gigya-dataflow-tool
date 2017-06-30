/* eslint quote-props: 0 */
const field = [{
  id: 'field.array.join',
  template: {
    'id': 'arrayJoin',
    'type': 'field.array.join',
    'params': {
      'field': '',
    },
  },
},
{
  id: 'field.array.extract',
  template: {
    'id': 'arrayExtract',
    'type': 'field.array.extract',
    'params': {
      'field': '',
    },
  },
},
{
  id: 'field.copy',
  template: {
    'id': 'copy',
    'type': 'field.copy',
    'params': {
      'fields': [],
    },
  },
},
{
  id: 'field.date.format',
  template: {
    'id': 'dateFormat',
    'type': 'field.date.format',
    'params': {
      'fields': [],
    },
  },
},
{
  id: 'field.evaluate',
  template: {
    'id': 'evaluate',
    'type': 'field.evaluate',
    'params': {
      'fields': [
        {
          'field': '',
          'expression': '',
        },
      ],
      'language': '',
    },
  },
},
{
  id: 'field.flatten',
  template: {
    'id': 'flatten',
    'type': 'field.flatten',
    'params': {
      'fields': [],
    },
  },
},
{
  id: ' field.move',
  template: {
    'id': 'move',
    'type': ' field.move',
    'params': {
      'fields': [],
      'after': '',
    },
  },
},
{
  id: ' field.remove',
  template: {
    'id': 'remove',
    'type': ' field.remove',
    'params': {
      'fields': [],
    },
  },
},
{
  id: 'field.rename',
  template: {
    'id': 'rename',
    'type': 'field.rename',
    'params': {
      'fields': [
        {
          'sourceField': '',
          'targetField': '',
        },
      ],
    },
  },
},
{
  id: 'field.replace',
  template: {
    'id': 'replace',
    'type': 'field.replace',
    'params': {
      'fields': [
        {
          'field': '*',
          'regex': '',
          'replacement': '',
        },
      ],
    },
  },
},
];

export default field;
