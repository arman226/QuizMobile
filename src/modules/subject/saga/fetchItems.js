import {takeLatest, put, call, select, all} from 'redux-saga/effects';
import {fetchSubjects} from 'services/subject';
import {FETCH_SUBJECTS_START} from '../types';
import {fetchSubjectsError, fetchSubjectsDone} from '../actionCreators';

// function getState({user}) {
//   const {employeeUserId} = user;
//   return {employeeUserId};
// }

function* processFetchItem(action) {
  try {
    // const {employeeUserId} = yield select(getState);

    const {data} = yield call(fetchSubjects);

    yield put(fetchSubjectsDone(JSON.parse(data)));
  } catch (error) {
    // yield put(sendCrashReport(error));
    yield put(fetchSubjectsError(error.message));
  }
}

export default function* watchEvent() {
  yield takeLatest(FETCH_SUBJECTS_START, processFetchItem);
}
