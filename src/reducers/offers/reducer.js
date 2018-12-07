import types from './types';

const initialState = {
  offersList: [],
  params: {
    limit: 100,
    skip: 0,
  },
  filteredData: null,
  selectedCategory: '',
  selectedCountry: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_OFFERS_SUCCESS:
      return { ...state, offersList: action.payload.offersList };

    case types.FILTER_OFFERS_BY_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.category,
        filteredData: action.payload.filteredData,
      };

    case types.FILTER_OFFERS_BY_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload.country,
        filteredData: action.payload.filteredData,
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
        selectedCountry: '',
      };

    default:
      return state;
  }
};
