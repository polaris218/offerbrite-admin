import types from './types';

export const requestStart = () => ({
  type: types.REQUEST_START,
});

export const requestSuccess = () => ({
  type: types.REQUEST_SUCCESS,
});

export const requestFail = error => ({
  type: types.REQUEST_FAIL,
  payload: { error },
});
