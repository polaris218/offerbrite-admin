import types from './types';
import {
  analyticsGetSessions,
} from 'services/api';

import { parseDate } from 'services/helpers';

export const getSessions = () => async (dispatch, getState) => {
  const { startDate, endDate } = getState().analytics.sessions;
  dispatch({ type: types.GET_SESSIONS_START });

  try {
    const response = await analyticsGetSessions(startDate, endDate);
    if (response.status === 200) {
      const data = response.data.map(dayStat => {
        const { dimensions, metrics } = dayStat;
        return {
          date: parseDate(dimensions[0]),
          sessionsCount: metrics[0].values[0],
        };
      });
      dispatch({
        type: types.GET_SESSIONS_SUCCESS,
        payload: { data },
      });
    }
  } catch (error) {
    console.log(error.response);
    dispatch({ type: types.GET_SESSIONS_FAIL });
  }
};
