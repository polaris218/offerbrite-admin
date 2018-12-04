import types from './types';

import { getReports as apiGetreports } from 'services/api';

import { actions as requestActions } from 'reducers/request';

export const getCompanies = () => async (dispatch, getState) => {
  //   const { limit, skip } = getState().reports.params;
  //   dispatch(requestActions.start());
  //   dispatch({ type: types.GET_REPORTS_START });

  //   try {
  //     const response = await apiGetreports(limit, skip);
  //     console.log(response);
  //     dispatch(requestActions.success());
  //     dispatch({ type: types.GET_REPORTS_SUCCESS, payload: { reportsList: response.data.data } });
  //   } catch (error) {
  //     dispatch(requestActions.fail(error));
  //     dispatch({ type: types.GET_REPORTS_FAIL });
  //   }
};

export const filterCompaniesByCategory = category => (dispatch, getState) => {
  // const { usersList } = getState().users;
  // 
  // const filteredData = usersList.filter(item => item.reports.reason === category);
  // dispatch({
  // type: types.FILTER_USERS_BY_CATEGORY,
  // payload: { category, filteredData },
  // });
};

export const filterCompaniesBySearch = e => (dispatch, getState) => {
  // const { usersList, selectedCategory } = getState().users;

  // const searchTarget = e.target.value.toLowerCase();
  // const filteredData = usersList.filter(item => {
  //   const lowerTitle = item.offer.title.toLowerCase();
  //   if (selectedCategory) {
  //     return lowerTitle.includes(searchTarget) && item.reports.reason === selectedCategory;
  //   }
  //   return lowerTitle.includes(searchTarget);
  // });

  // dispatch({
  //   type: types.FILTER_USERS_BY_SEARCH,
  //   payload: { filteredData }
  // });
};

export const turnOffCompaniesFilter = () => ({
  type: types.TURN_OFF_COMPANIES_FILTER,
});
