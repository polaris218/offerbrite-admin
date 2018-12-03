import types from './types';

const initialState = {
  reportsList: [],
  params: {
    limit: 100,
    skip: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REPORTS_SUCCESS:
      return { ...state, reportsList: action.payload.reportsList };
    default:
      return state;
  }
};
