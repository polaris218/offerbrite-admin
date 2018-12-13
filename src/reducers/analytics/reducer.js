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

    case types.ON_CHANGE_USER_SESSIONS_TIME:
      return {
        ...state,
        sessions: {
          ...state.sessions,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
