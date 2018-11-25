import types from './types';

const initialState = {
  login: '',
  password: '',
  rememberSession: true,
  adminUser: {
    name: 'James Bond',
  },
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.ON_CHANGE_LOGIN:
      const { inputName, text } = action.payload;
      return { ...state, [inputName]: text };
    case types.ON_TOGGLE_REMEMBER_SESSION:
      return { ...state, rememberSession: !state.rememberSession };
    default:
      return state;
  }
};
