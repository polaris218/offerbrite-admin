import types from './types';

const initialState = {
  usersList: [],
  params: {
    limit: 100,
    skip: 0,
  },
  filteredData: null,
  selectedCategory: '',
  userToUpdate: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS:
      return { ...state, usersList: action.payload.usersList };

    case types.FILTER_USERS_BY_CATEGORY:
      const { reason, filteredData } = action.payload;
      return {
        ...state,
        selectedCategory: reason,
        filteredData,
      };

    case types.FILTER_USERS_BY_SEARCH:
      return {
        ...state,
        filteredData: action.payload.filteredData,
      };

    case types.TURN_OFF_USERS_FILTER:
      return {
        ...state,
        filteredData: null,
        selectedCategory: '',
      };

    case types.SET_USER_TO_UPDATE:
      return {
        ...state,
        userToUpdate: action.payload.user,
      };

    case types.ON_CHANGE_USER_FORM_FIELD:
      return {
        ...state,
        userToUpdate: {
          ...state.userToUpdate,
          [action.payload.fieldSelector]: action.payload.text,
        },
      };

    default:
      return state;
  }
};
