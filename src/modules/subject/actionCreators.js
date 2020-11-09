import * as types from './types';

export const fetchSubjectsStart = () => ({
  type: types.FETCH_SUBJECTS_START,
});

export const fetchSubjectsDone = (data) => ({
  type: types.FETCH_SUBJECTS_DONE,
  payload: {data},
});

export const fetchSubjectsError = (data) => ({
  type: types.FETCH_SUBJECTS_ERROR,
  payload: {data},
});
