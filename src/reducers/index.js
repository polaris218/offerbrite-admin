import { combineReducers } from 'redux';
import { reducer as sessionReducer } from './session';
import { reducer as requestReducer } from './request';
import { reducer as settingsReducer } from './settings';
import { reducer as adminsReducer } from './admins';

export default combineReducers({
  session: sessionReducer,
  request: requestReducer,
  settings: settingsReducer,
  admins: adminsReducer,
});
