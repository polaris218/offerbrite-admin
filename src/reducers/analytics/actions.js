import types from './types';
import {
  analyticsGetSessions,
} from 'services/api';

import { formatDataByTime, findTimes } from 'services/helpers';

export const getSessions = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analytics.sessions;
  dispatch({ type: types.GET_SESSIONS_START });

  try {
    const response = await analyticsGetSessions(startDate, endDate);
    if (response.status === 200) {
      console.log(response.data);
      const data = formatDataByTime(response.data, requestedTime);
      dispatch({
        type: types.GET_SESSIONS_SUCCESS,
        payload: { data },
      });
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.GET_SESSIONS_FAIL });
  }
};

export const onChangeUserSessionsTime = requestedTime => dispatch => {
  const { startDate, endDate } = findTimes(requestedTime);
  dispatch({
    type: types.ON_CHANGE_USER_SESSIONS_TIME,
    payload: {
      requestedTime,
      startDate,
      endDate,
    },
  });
  dispatch(getSessions());
};
