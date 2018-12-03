import types from './types';

const initialState = {
  admins: [],
  newAdmin: {
    email: '',
    name: '',
    password: '',
    selectedRole: 'admin',
    roles: ['admin', 'super-admin'],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_ADMINS_SUCCESS:
      const { admins } = action.payload;
      return { ...state, admins };

    case types.ON_CHANGE_NEW_ADMIN_TEXT_FIELD:
      const { inputName, text } = action.payload;
      return {
        ...state,
        newAdmin: {
          ...state.newAdmin,
          [inputName]: text,
        },
      };

    case types.ON_CHANGE_ROLE:
      return {
        ...state,
        newAdmin: {
          ...state.newAdmin,
          selectedRole: action.payload.role,
        }
      };

    default:
      return state;
  }
};
