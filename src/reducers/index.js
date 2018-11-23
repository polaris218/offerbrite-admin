import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as sessionReducer } from './session';

export default combineReducers({
  auth: authReducer,
  session: sessionReducer,
});
