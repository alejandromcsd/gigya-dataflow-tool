import { combineReducers } from 'redux';
import repository from './repository';
import editor from './editor';
import menu from './menu';
import notification from './notification';
import dataflow from './dataflow';
import importJob from './importJob';

const rootReducer = combineReducers({
  repository,
  editor,
  menu,
  notification,
  dataflow,
  importJob,
});

export default rootReducer;
