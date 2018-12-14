import types from './types';
import {
  analyticsGetSessions,
  analyticsGetSessionsByDevice,
  analyticsGetUserStats,
  analyticsGetUsersGraph,
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
} from 'services/helpers';

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
   if (response.status === 200 && response.data) {
      const data = formatDataByDevice(response.data, requestedTime);
      dispatch({
        type: types.GET_SESSIONS_BY_DEVICE_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.GET_SESSIONS_BY_DEVICE_FAIL });
  }
};

export const getSessionsByCountry = () => async (dispatch, getState) => {
  const { startDate, endDate } = getState().analytics.sessionsByCountry;
  dispatch({ type: types.GET_SESSIONS_BY_COUNTRY_START });

  try {
    const response = await analyticsGetSessionsByCountry(startDate, endDate);
    console.log('SessionsByCountry', response);
    if (response.status === 200 && response.data) {
      const data = response.data.map(session => ({
        country: session.dimensions[0],
        count: Number(session.metrics[0].values[0]),
      }));
      dispatch({
        type: types.GET_SESSIONS_BY_COUNTRY_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.GET_SESSIONS_BY_COUNTRY_FAIL });
  }
};

export const getUserStats = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analytics.sessions;
  dispatch({ type: types.GET_USER_STATS_START });

  try {
    const response = await analyticsGetUserStats(startDate, endDate);
    console.log(response);
    if (response.status === 200 && response.data) {
      const data = formatUserStats(response.data, requestedTime);
      console.log('data', data);
      dispatch({
        type: types.GET_USER_STATS_SUCCESS,
        payload: { data },
      });
      const { startDate: previousStartDate, endDate: previousEndDate } = findTimesForComparison(requestedTime);
      console.log('previousStartDate', previousStartDate);
      console.log('previousEndDate', previousEndDate);
      try {
        const previousResponse = await analyticsGetUserStats(previousStartDate, previousEndDate);
        console.log('previousResponse',previousResponse)
        if (previousResponse.status === 200 && previousResponse.data) {
          const previousData = formatUserStats(previousResponse.data, requestedTime);
          dispatch({
            type: types.GET_USER_PREVIOUS_STATS_SUCCESS,
            payload: { previousData },
          });
        } else {
          dispatch({ type: types.GET_USER_PREVIOUS_STATS_FAIL });
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
    dispatch({ type: types.GET_USER_STATS_FAIL });
  }
};

export const getUsersGraph = () => async (dispatch, getState) => {
  const { startDate, endDate, requestedTime } = getState().analytics.usersGraph;
  dispatch({ type: types.GET_USERS_GRAPH_START });

  try {
    const response = await analyticsGetUsersGraph(startDate, endDate);
    console.log('Users Graph', response);
  //  if (response.status === 200 && response.data) {
  //     const data = formatDataByDevice(response.data, requestedTime);
  //     dispatch({
  //       type: types.GET_USERS_GRAPH_SUCCESS,
  //       payload: { data },
  //     });
  //   } else if (!response.data) {
  //     alert('No data for this period');
  //   }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.GET_USERS_GRAPH_FAIL });
  }
};

export const getScreenSupport = () => async (dispatch, getState) => {
  const { startDate, endDate } = getState().analytics.screenSupport;
  dispatch({ type: types.GET_SCREEN_SUPPORT_START });

  try {
    const response = await analyticsGetScreenSupport(startDate, endDate);
    if (response.status === 200 && response.data) {
      const data = formatUserAppScreenData(response.data);
      dispatch({
        type: types.GET_SCREEN_SUPPORT_SUCCESS,
        payload: { data },
      });
    } else if (!response.data) {
      alert('No data for this period');
    }
  } catch (error) {
    console.log(error)
    console.log(error.response);
    dispatch({ type: types.GET_SCREEN_SUPPORT_FAIL });
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
      dispatch(getUserStats());
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
