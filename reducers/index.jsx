import { combineReducers } from 'redux';
import repository from './repository';
import editor from './editor';
import menu from './menu';
import notification from './notification';
import dataflow from './dataflow';

const rootReducer = combineReducers({
  repository,
  editor,
  menu,
  notification,
  dataflow,
});

export default rootReducer;
