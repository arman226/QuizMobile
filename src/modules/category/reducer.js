import * as types from './types';

export const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const fetchingDone = (state, action) => {
  const {data} = action.payload;
  return {...state, isLoading: false, data};
};

const fetchingError = (state, action) => {
  const {data} = action.payload;
  return {...state, isLoading: false, error: data};
};

const fetchingStart = (state, action) => {
  return {...state, isLoading: true};
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES_DONE:
      return fetchingDone(state, action);
    case types.FETCH_CATEGORIES_ERROR:
      return fetchingError(state, error);
    case types.FETCH_CATEGORIES_START:
      return fetchingStart(state, action);
    default:
      return state;
  }
};
