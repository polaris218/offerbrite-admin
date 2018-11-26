import types from './types';
import { getAdmins as apiGetAdmins } from 'services/api';

import { actions as requestActions } from 'reducers/request';

export const getAdmins = () => async dispatch => {
  dispatch(requestActions.start());
  dispatch({ type: types.GET_ADMINS_START });

  try {
    const response = await apiGetAdmins();
    console.log(response);
    dispatch(requestActions.success());
    dispatch({ type: types.GET_ADMINS_SUCCESS, payload: { admins: response.data } });
  } catch (error) {
    console.log(error);
    dispatch(requestActions.fail(error));
    dispatch({ type: types.GET_ADMINS_FAIL });
  }
};
