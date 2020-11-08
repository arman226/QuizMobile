import {takeLatest, put, call, select, all} from 'redux-saga/effects';
import {getDummy} from 'services/testApi';
import {FETCH_TEST_API_START} from '../types';
import {fetchTestApiError, fetchTestApiDone} from '../actionCreators';

// function getState({user}) {
//   const {employeeUserId} = user;
//   return {employeeUserId};
// }

function* processFetchItem(action) {
  try {
    // const {employeeUserId} = yield select(getState);

    const {data} = yield call(getDummy);

    yield console.log('working', data);

    yield put(fetchTestApiDone(data));
  } catch (error) {
    // yield put(sendCrashReport(error));
    yield put(fetchTestApiError(error.message));
  }
}

export default function* watchEvent() {
  yield takeLatest(FETCH_TEST_API_START, processFetchItem);
}
