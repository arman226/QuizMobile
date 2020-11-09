import * as types from './types';

export const fetchCategoriesStart = (id) => ({
  type: types.FETCH_CATEGORIES_START,
  payload: {id},
});

export const fetchCategoriesDone = (data) => ({
  type: types.FETCH_CATEGORIES_DONE,
  payload: {data},
});

export const fetchCategoriesError = (data) => ({
  type: types.FETCH_CATEGORIES_ERROR,
  payload: {data},
});
