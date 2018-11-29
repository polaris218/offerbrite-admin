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
  const { email, password, rememberSession } = getState().session;
  dispatch(requestActions.start());

  try {
    const response = await apiLogin({ email, password });
    const { tokens, user: admin } = response.data;
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        token: tokens.access.token,
        admin,
      },
    });

    if (rememberSession) {
      localStorage.setItem('access', JSON.stringify(tokens.access));
      localStorage.setItem('refresh', JSON.stringify(tokens.refresh));
      localStorage.setItem('admin', JSON.stringify(admin));
    }

    dispatch(requestActions.success());
    console.log(response);
  } catch (error) {
    dispatch(requestActions.fail(error));
    console.log(error.message);
    console.log(error);
  }
};

export const logout = () => {
  localStorage.clear();

  return { type: types.LOGOUT };
};
