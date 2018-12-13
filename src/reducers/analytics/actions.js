import types from './types';
import {
  analyticsGetSessions,
  analyticsGetSessionsByDevice,
} from 'services/api';

import { formatDataByTime, findTimes } from 'services/helpers';

export const getSessions = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analytics.sessions;
  dispatch({ type: types.GET_SESSIONS_START });

  try {
    const response = await analyticsGetSessions(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = formatDataByTime(response.data, requestedTime);
      dispatch({
        type: types.GET_SESSIONS_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    alert('Try again later.');
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.GET_SESSIONS_FAIL });
  }
};

export const getSessionsByDevice = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analytics.sessionsByDevice;
  dispatch({ type: types.GET_SESSIONS_BY_DEVICE_START });

  try {
    const response = await analyticsGetSessionsByDevice(startDate, endDate);
    if (response.status === 200) {
      console.log(response.data);
      // const data = formatDataByTime(response.data, requestedTime);
      // dispatch({
      //   type: types.GET_SESSIONS_BY_DEVICE_SUCCESS,
      //   payload: { data },
      // });
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.GET_SESSIONS_BY_DEVICE_FAIL });
  }
};

export const onChangeRequestedTime = (requestedTime, dataSelector) => dispatch => {
  const { startDate, endDate } = findTimes(requestedTime);
  dispatch({
    type: types.ON_CHANGE_REQUESTED_TIME,
    payload: {
      [dataSelector]: {
        requestedTime,
        startDate,
        endDate,
      },
    },
  });
  switch (dataSelector) {
    case "sessions":
      dispatch(getSessions());
      break;
    default:
      dispatch(getSessions());
  }
};
