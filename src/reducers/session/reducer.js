import types from './types';

const initialState = {
  email: '',
  password: '',
  rememberSession: true,
  admin: {},
  token: '',
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.ON_CHANGE_LOGIN:
      const { inputName, text } = action.payload;
      return { ...state, [inputName]: text };
    case types.ON_TOGGLE_REMEMBER_SESSION:
      return { ...state, rememberSession: !state.rememberSession };
    case types.LOGIN_SUCCESS:
      const { admin, token } = action.payload;
      return { ...state, admin, token };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
