import types from './types';
import {
  createNewAdmin as apiCreateNewAdmin,
  login as apiLogin,
} from 'services/api';

import { actions as requestActions } from 'reducers/request';

export const onChangeText = (e, inputName) => ({
  type: types.ON_CHANGE_LOGIN,
  payload: { text: e.target.value, inputName },
});

export const onToggleRememberSession = () => ({
  type: types.ON_TOGGLE_REMEMBER_SESSION,
});

export const login = () => async (dispatch, getState) => {
  const { username, password } = getState().session;
  // TEMP
  localStorage.setItem('admin', 'Test Admin');
  localStorage.setItem('token', 'asdlkjasldjalsdjlaskjdlkasjd');

  dispatch({
    type: types.LOGIN_SUCCESS,
    payload: { name: 'Test Admin', token: 'asdlkjasldjalsdjlaskjdlkasjd' },
  });
  // try {
  // const response = await apiLogin({ username, password });
  // console.log(response);
  // } catch (error) {
  // console.log(error.message);
  // console.log(error);
  // }
};

export const logout = () => {
  localStorage.clear();

  return { type: types.LOGOUT };
};
