import {takeLatest, put, call, select, all} from 'redux-saga/effects';
import {fetchCategoriesById} from 'services/category';
import {FETCH_CATEGORIES_START} from '../types';
import {fetchCategoriesError, fetchCategoriesDone} from '../actionCreators';

// function getState({user}) {
//   const {employeeUserId} = user;
//   return {employeeUserId};
// }

function* processFetchItem(action) {
  try {
    // const {employeeUserId} = yield select(getState);
    const {id} = action.payload;
    const {data} = yield call(fetchCategoriesById, id);

    yield put(fetchCategoriesDone(JSON.parse(data)));
  } catch (error) {
    // yield put(sendCrashReport(error));
    yield put(fetchCategoriesError(error.message));
  }
}

export default function* watchEvent() {
  yield takeLatest(FETCH_CATEGORIES_START, processFetchItem);
}
