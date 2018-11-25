import types from './types';

export const onChangeText = (e, inputName) => ({
  type: types.ON_CHANGE_LOGIN,
  payload: { text: e.target.value, inputName },
});

export const onToggleRememberSession = () => ({
  type: types.ON_TOGGLE_REMEMBER_SESSION,
});
