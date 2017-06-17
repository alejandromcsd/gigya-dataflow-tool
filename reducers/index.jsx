import { combineReducers } from 'redux';
import repository from './repository';
import menu from './menu';
import notification from './notification';

const rootReducer = combineReducers({
  repository,
  menu,
  notification,
});

export default rootReducer;
