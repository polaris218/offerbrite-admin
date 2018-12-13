import types from './types';
import { TODAY, WEEK_AGO } from 'services/helpers';

const initialState = {
  sessions: {
    startDate: WEEK_AGO,
    endDate: TODAY,
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
    default:
      return state;
  }
};
