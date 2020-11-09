import * as types from './types';

export const fetchQuestionsStart = (id) => ({
  type: types.FETCH_QUESTIONS_START,
  payload: {id},
});

export const fetchQuestionsDone = (data) => ({
  type: types.FETCH_QUESTIONS_DONE,
  payload: {data},
});

export const fetchQuestionsError = (data) => ({
  type: types.FETCH_QUESTIONS_ERROR,
  payload: {data},
});
