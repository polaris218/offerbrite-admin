import types from './types';
import {
  analyticsGetSessions,
  analyticsGetSessionsByDevice,
  analyticsGetUserStats,
  analyticsGetUsersGraph,
  analyticsGetSessionDurationGraph,
  analyticsGetSessionsByCountry,
  analyticsGetScreenSupport,
} from 'services/api';

import {
  formatDataByTime,
  formatDataByDevice,
  formatUserAppScreenData,
  findTimes,
  findTimesForComparison,
  formatUserStats,
  makeTimeFromSeconds,
} from 'services/helpers';

export const getSessions = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analyticsUser.sessions;
  dispatch({ type: types.USER_GET_SESSIONS_START });

  try {
    const response = await analyticsGetSessions(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = formatDataByTime(response.data, requestedTime);
      dispatch({
        type: types.USER_GET_SESSIONS_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    alert('Try again later.');
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.USER_GET_SESSIONS_FAIL });
  }
};

export const getSessionsByDevice = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analyticsUser.sessionsByDevice;
  dispatch({ type: types.USER_GET_SESSIONS_BY_DEVICE_START });

  try {
    const response = await analyticsGetSessionsByDevice(startDate, endDate);
   if (response.status === 200 && response.data) {
      const data = formatDataByDevice(response.data, requestedTime);
      dispatch({
        type: types.USER_GET_SESSIONS_BY_DEVICE_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.USER_GET_SESSIONS_BY_DEVICE_FAIL });
  }
};

export const getSessionsByCountry = () => async (dispatch, getState) => {
  const { startDate, endDate } = getState().analyticsUser.sessionsByCountry;
  dispatch({ type: types.USER_GET_SESSIONS_BY_COUNTRY_START });

  try {
    const response = await analyticsGetSessionsByCountry(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = response.data.map(session => ({
        country: session.dimensions[0],
        count: Number(session.metrics[0].values[0]),
      }));
      dispatch({
        type: types.USER_GET_SESSIONS_BY_COUNTRY_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.USER_GET_SESSIONS_BY_COUNTRY_FAIL });
  }
};

export const getUserStats = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analyticsUser.sessions;
  dispatch({ type: types.USER_GET_USER_STATS_START });

  try {
    const response = await analyticsGetUserStats(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = formatUserStats(response.data, requestedTime);
      dispatch({
        type: types.USER_GET_USER_STATS_SUCCESS,
        payload: { data },
      });
      const { startDate: previousStartDate, endDate: previousEndDate } = findTimesForComparison(requestedTime);
      try {
        const previousResponse = await analyticsGetUserStats(previousStartDate, previousEndDate);
        if (previousResponse.status === 200 && previousResponse.data) {
          const previousData = formatUserStats(previousResponse.data, requestedTime);
          dispatch({
            type: types.USER_GET_USER_PREVIOUS_STATS_SUCCESS,
            payload: { previousData },
          });
        } else {
          dispatch({ type: types.USER_GET_USER_PREVIOUS_STATS_FAIL });
        }
      } catch (error) {
        console.log(error)
        console.log(error.response);
      }
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.USER_GET_USER_STATS_FAIL });
  }
};

export const getUsersGraph = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analyticsUser.sessions;
  dispatch({ type: types.USER_GET_USERS_GRAPH_START });

  try {
    const response = await analyticsGetUsersGraph(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = formatDataByTime(response.data, requestedTime);
      dispatch({
        type: types.USER_GET_USERS_GRAPH_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.USER_GET_USERS_GRAPH_FAIL });
  }
};

export const getSessionDurationGraph = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analyticsUser.sessions;
  dispatch({ type: types.USER_GET_SESSION_DURATION_GRAPH_START });

  try {
    const response = await analyticsGetSessionDurationGraph(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = formatDataByTime(response.data, requestedTime);
      const formattedData = data.map(session => ({
        ...session,
        time: makeTimeFromSeconds(parseInt(session.count)),
      }));
      dispatch({
        type: types.USER_GET_SESSION_DURATION_GRAPH_SUCCESS,
        payload: { data: formattedData },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.USER_GET_SESSION_DURATION_GRAPH_FAIL });
  }
};

export const getScreenSupport = () => async (dispatch, getState) => {
  const { startDate, endDate } = getState().analyticsUser.screenSupport;
  dispatch({ type: types.USER_GET_SCREEN_SUPPORT_START });

  try {
    const response = await analyticsGetScreenSupport(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = formatUserAppScreenData(response.data);
      dispatch({
        type: types.USER_GET_SCREEN_SUPPORT_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.USER_GET_SCREEN_SUPPORT_FAIL });
  }
};

export const onChangeRequestedTime = (requestedTime, dataSelector) => dispatch => {
  const { startDate, endDate } = findTimes(requestedTime);
  dispatch({
    type: types.USER_ON_CHANGE_REQUESTED_TIME,
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
      dispatch(getUserStats());
      dispatch(getUsersGraph());
      dispatch(getSessionDurationGraph());
      break;
    case "sessionsByDevice":
      dispatch(getSessionsByDevice());
      break;
    case "sessionsByCountry":
      dispatch(getSessionsByCountry());
      break;
    case "screenSupport":
      dispatch(getScreenSupport());
      break;
    default:
      dispatch(getSessions());
  }
};

export const onChangeGraphMode = mode => ({
  type: types.USER_ON_CHANGE_GRAPH_MODE,
  payload: { mode },
});
