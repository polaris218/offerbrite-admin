import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as sessionReducer } from './session';
import { reducer as requestReducer } from './request';

export default combineReducers({
  auth: authReducer,
  session: sessionReducer,
  request: requestReducer,
});
