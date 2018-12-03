import types from './types';

import { getReports as apiGetreports } from 'services/api';

import { actions as requestActions } from 'reducers/request';

export const getReports = () => async (dispatch, getState) => {
  const { limit, skip } = getState().reports.params;
  dispatch(requestActions.start());
  dispatch({ type: types.GET_REPORTS_START });

  try {
    const response = await apiGetreports(limit, skip);
    console.log(response);
    dispatch(requestActions.success());
    dispatch({ type: types.GET_REPORTS_SUCCESS, payload: { reportsList: response.data.data } });
  } catch (error) {
    dispatch(requestActions.fail(error));
    dispatch({ type: types.GET_REPORTS_FAIL });
  }
};
