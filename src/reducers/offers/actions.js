import types from './types';

import {
  getOffers as apiGetOffers,
} from 'services/api';

import { actions as requestActions } from 'reducers/request';

export const getOffers = () => async (dispatch, getState) => {
  dispatch(requestActions.start());
  dispatch({ type: types.GET_OFFERS_START });

  try {
    const response = await apiGetOffers();
    console.log('apiGetOffers', response);
    dispatch(requestActions.success());
    dispatch({ type: types.GET_OFFERS_SUCCESS, payload: { offersList: response.data.data } });
  } catch (error) {
    dispatch(requestActions.fail(error));
    dispatch({ type: types.GET_OFFERS_FAIL });
  }
};

export const filterOffersByCategory = category => (dispatch, getState) => {
  const { offersList, selectedCountry } = getState().offers;

  const filteredData = offersList.filter(offer => {
    if (selectedCountry) {
      return offer.category === category.toLowerCase() &&
        offer.locations[0].address.country === selectedCountry;
    }
    return offer.category === category.toLowerCase()
  });

  dispatch({
    type: types.FILTER_OFFERS_BY_CATEGORY,
    payload: { category, filteredData },
  });
};

export const filterOffersByCountry = country => (dispatch, getState) => {
  const { offersList, selectedCategory } = getState().offers;

  const filteredData = offersList.filter(offer => {
    const offerCountry = offer.locations[0].address.country;
    if (selectedCategory) {
      return offer.category === selectedCategory.toLowerCase() &&
        offerCountry === country;
    }
    return offerCountry === country;
  });

  dispatch({
    type: types.FILTER_OFFERS_BY_COUNTRY,
    payload: { country, filteredData },
  });
};

export const filterOffersBySearch = e => (dispatch, getState) => {
  const { offersList, selectedCategory, selectedCountry } = getState().offers;

  const searchTarget = e.target.value.toLowerCase();
  const filteredData = offersList.filter(offer => {
    const lowerTitle = offer.title.toLowerCase();
    const offerCountry = offer.locations[0].address.country;
    if (selectedCategory && selectedCountry) {
      return offer.category === selectedCategory.toLowerCase() &&
        offerCountry === selectedCountry &&
        (lowerTitle.includes(searchTarget) || offer.id.includes(searchTarget));
    } else if (selectedCategory) {
      return offer.category === selectedCategory.toLowerCase() &&
        (lowerTitle.includes(searchTarget) || offer.id.includes(searchTarget));
    } else if (selectedCountry) {
      return offerCountry === selectedCountry &&
        (lowerTitle.includes(searchTarget) || offer.id.includes(searchTarget));
    }
    return lowerTitle.includes(searchTarget) || offer.id.includes(searchTarget);
  });

  dispatch({
    type: types.FILTER_OFFERS_BY_SEARCH,
    payload: { filteredData }
  });
};

export const turnOffOffersFilter = () => ({
  type: types.TURN_OFF_OFFERS_FILTER,
});
