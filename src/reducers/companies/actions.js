import types from './types';

import { getCompanies as apiGetCompanies } from 'services/api';

import { actions as requestActions } from 'reducers/request';

export const getCompanies = () => async (dispatch, getState) => {
  const { limit, skip } = getState().reports.params;
  dispatch(requestActions.start());
  dispatch({ type: types.GET_COMPANIES_START });

  try {
    const response = await apiGetCompanies(limit, skip);
    console.log(response);
    dispatch(requestActions.success());
    dispatch({ type: types.GET_COMPANIES_SUCCESS, payload: { companiesList: response.data.data } });
  } catch (error) {
    dispatch(requestActions.fail(error));
    dispatch({ type: types.GET_COMPANIES_FAIL });
  }
};

export const filterCompaniesByCountry = country => (dispatch, getState) => {
  const { companiesList } = getState().companies;

  const filteredData = companiesList.filter(company => company.country === country);
  dispatch({
    type: types.FILTER_COMPANIES_BY_COUNTRY,
    payload: { country, filteredData },
  });
};

export const filterCompaniesBySearch = e => (dispatch, getState) => {
  const { companiesList, selectedCountry } = getState().companies;
  const searchTarget = e.target.value.toLowerCase();
  const filteredData = companiesList.filter(company => {
    const lowerName = company.brandName.toLowerCase();
    if (selectedCountry) {
      return company.country === selectedCountry &&
        (lowerName.includes(searchTarget) ||
          company.email.includes(searchTarget) ||
          company.mobileNumber.includes(searchTarget));
    }
    return lowerName.includes(searchTarget) ||
      company.email.includes(searchTarget) ||
      company.mobileNumber.includes(searchTarget);
  });

  dispatch({
    type: types.FILTER_COMPANIES_BY_SEARCH,
    payload: { filteredData }
  });
};

export const turnOffCompaniesFilter = () => ({
  type: types.TURN_OFF_COMPANIES_FILTER,
});
