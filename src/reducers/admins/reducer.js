import types from './types';

const fakeAdmins = [
  {
    id: 1,
    login: 'Test admin 1',
    password: '123asd'
  },
  {
    id: 2,
    login: 'Test admin 2',
    password: 'zxczxczxc'
  },
  {
    id: 3,
    login: 'Test admin 3',
    password: 'qweqweasd'
  },
];

const initialState = {
  admins: fakeAdmins,
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
