import types from './types';

const initialState = {
  offersList: [],
  params: {
    limit: 100,
    skip: 0,
  },
  filteredData: null,
  selectedCategory: '',
  selectedPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_OFFERS_SUCCESS:
      return { ...state, offersList: action.payload.offersList };

    case types.FILTER_OFFERS_BY_CATEGORY:
      const { reason, filteredData } = action.payload;
      return {
        ...state,
        selectedCategory: reason,
        filteredData,
      };

    case types.FILTER_OFFERS_BY_SEARCH:
      return {
        ...state,
        filteredData: action.payload.filteredData,
      };

    case types.TURN_OFF_OFFERS_FILTER:
      return {
        ...state,
        filteredData: null,
        selectedCategory: '',
      };

    default:
      return state;
  }
};
