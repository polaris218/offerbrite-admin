import { combineReducers } from 'redux';
import { reducer as sessionReducer } from './session';
import { reducer as requestReducer } from './request';

export default combineReducers({
  session: sessionReducer,
  request: requestReducer,
});
