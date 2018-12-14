import types from './types';
import { timeSelectors, TIME_PERIODS } from 'services/helpers';

const initialState = {
  sessions: {
    requestedTime: 'Last 7 days',
    times: TIME_PERIODS,
    startDate: timeSelectors.WEEK_AGO,
    endDate: timeSelectors.YESTERDAY,
    data: [],
  },
  sessionsByDevice: {
    requestedTime: 'Last 7 days',
    times: TIME_PERIODS,
    startDate: timeSelectors.WEEK_AGO,
    endDate: timeSelectors.YESTERDAY,
    data: [],
  },
  userStats: {
    data: {},
    previousData: {},
  },
  usersGraph: {
    requestedTime: 'Last 7 days',
    times: TIME_PERIODS,
    startDate: timeSelectors.WEEK_AGO,
    endDate: timeSelectors.YESTERDAY,
    data: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SESSIONS_SUCCESS:
      return {
        ...state,
        sessions: {
          ...state.sessions,
          data: action.payload.data,
        },
      };

    case types.GET_SESSIONS_BY_DEVICE_SUCCESS:
      return {
        ...state,
        sessionsByDevice: {
          ...state.sessionsByDevice,
          data: action.payload.data,
        },
      };

    case types.GET_USER_STATS_SUCCESS:
      return {
        ...state,
        userStats: {
          ...state.userStats,
          data: action.payload.data,
        },
      };

    case types.GET_USER_PREVIOUS_STATS_SUCCESS:
      return {
        ...state,
        userStats: {
          ...state.userStats,
          previousData: action.payload.previousData,
        },
      };

    case types.GET_USERS_GRAPH_SUCCESS:
      return {
        ...state,
        usersGraph: {
          ...state.usersGraph,
          data: action.payload.data,
        },
      };

    case types.ON_CHANGE_REQUESTED_TIME:
      const dataSelector = Object.keys(action.payload)[0];
      return {
        ...state,
        [dataSelector]: {
          ...state[dataSelector],
          ...action.payload[dataSelector],
        },
      };
    default:
      return state;
  }
};
