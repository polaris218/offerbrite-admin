import types from './types';

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
  dispatch({ type: types.SEND_NOTIFICATION_SUCCESS });
  dispatch({ type: types.SEND_NOTIFICATION_FAIL });
};
