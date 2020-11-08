import * as types from './types';

export const fetchTestApiStart = () => ({
  type: types.FETCH_TEST_API_START,
});

export const fetchTestApiDone = (data) => ({
  type: types.FETCH_TEST_API_DONE,
  payload: {data},
});

export const fetchTestApiError = (data) => ({
  type: types.FETCH_TEST_API_ERROR,
  payload: data,
});
