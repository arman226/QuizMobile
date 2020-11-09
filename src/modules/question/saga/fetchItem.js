import {takeLatest, put, call, select, all} from 'redux-saga/effects';
import {fetchQuestionsByCategoryId} from 'services/question';
import {FETCH_QUESTIONS_START} from '../types';
import {fetchQuestionsError, fetchQuestionsDone} from '../actionCreators';

// function getState({user}) {
//   const {employeeUserId} = user;
//   return {employeeUserId};
// }

function* processFetchItem(action) {
  try {
    // const {employeeUserId} = yield select(getState);
    const {id} = action.payload;
    const {data} = yield call(fetchQuestionsByCategoryId, id);
    console.log('fetching questions' + id + '' + data);

    yield put(fetchQuestionsDone(JSON.parse(data)));
  } catch (error) {
    // yield put(sendCrashReport(error));
    yield put(fetchQuestionsError(error.message));
  }
}

export default function* watchEvent() {
  yield takeLatest(FETCH_QUESTIONS_START, processFetchItem);
}
