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
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ADMINS_SUCCESS:
      const { admins } = action.payload;
      return { ...state, admins };
    default:
      return state;
  }
};
