import types from './types';

import {
  sendNotification as apiSendNotification,
  getNotifications as apiGetNotifications,
  getNotificationById as apiGetNotificationById,
  deleteNotification as apiDeleteNotification,
  updateNotification as apiUpdateNotification,
} from 'services/api';
import { actions as requestActions } from 'reducers/request';
import { getDateFromString, getTimeFromString } from 'services/helpers';

export const setInitialCountries = countries => ({
  type: types.SET_INITIAL_COUNTRIES,
  payload: { countries },
});

export const setInitialCategories = categories => ({
  type: types.SET_INITIAL_CATEGORIES,
  payload: { categories },
});

export const onChangeNotificationText = (e, fieldTitle) => ({
  type: types.ON_CHANGE_NOTIFICATION_TEXT,
  payload: {
    text: e.target.value,
    fieldTitle,
  },
});

export const onChangeNotificationCountry = country => ({
  type: types.ON_CHANGE_NOTIFICATION_COUNTRY,
  payload: { country },
});

export const onChangeNotificationCategory = category => ({
  type: types.ON_CHANGE_NOTIFICATION_CATEGORY,
  payload: { category },
});

export const onChangeNotificationDate = date => ({
  type: types.ON_CHANGE_NOTIFICATION_DATE,
  payload: { date },
});

export const onChangeNotificationTime = time => ({
  type: types.ON_CHANGE_NOTIFICATION_TIME,
  payload: { time },
});

export const sendNotification = () => async (dispatch, getState) => {
  dispatch({ type: types.SEND_NOTIFICATION_START });
  let { title, text, selectedCountry, selectedCategory, date, time } = getState().notificationForm;
  let query = '?';
  if (selectedCategory !== 'All') {
    query += `category=${encodeURIComponent(selectedCategory)}&`
  }
  if (selectedCountry !== 'All') {
    query += `country=${encodeURIComponent(selectedCountry)}`
  }

  date = getDateFromString(date);
  time = getTimeFromString(time);

  try {
    const response = await apiSendNotification(query, {
      title, text, date, time
    });
    if (response.status === 200) {
      dispatch({ type: types.SEND_NOTIFICATION_SUCCESS });
      dispatch(getNotifications());
    }
    console.log(response);
  } catch (error) {
    console.log(error);
    console.log(error.response);
    dispatch({ type: types.SEND_NOTIFICATION_FAIL });
  }
};

export const getNotifications = () => async dispatch => {
  dispatch({ type: types.GET_NOTIFICATIONS_START });
  dispatch(requestActions.start());

  try {
    const response = await apiGetNotifications()
    if (response.status === 200) {
      dispatch({
        type: types.GET_NOTIFICATIONS_SUCCESS,
        payload: { notifications: response.data },
      });
      dispatch(requestActions.success());
    }
  } catch (error) {
    dispatch(requestActions.fail(error));
    dispatch({ type: types.GET_NOTIFICATIONS_FAIL });
  }
};

export const deleteNotification = notificationId => async dispatch => {
  dispatch({ type: types.UPDATE_NOTIfICATION_START });

  try {
    const response = await apiDeleteNotification(notificationId);
    console.log(response);
    if (response.status === 200) {
      dispatch(getNotifications());
      dispatch({ type: types.UPDATE_NOTIfICATION_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: types.UPDATE_NOTIfICATION_FAIL });
    console.log(error);
  }
};
