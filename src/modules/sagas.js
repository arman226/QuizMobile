import {all} from 'redux-saga/effects';
import {testApiSaga} from './testApi';
import {subjectSaga} from './subject';
import {categorySaga} from './category';

// Compose all sagas in a single
// Generator function and watches all actions
export default function* rootSaga() {
  /**
   * fork method create makes non-blocking call.
   * Which means it doesn't block other saga's when theres' running one.
   */
  const sagas = [
    testApiSaga(),
    subjectSaga(),
    categorySaga(),
    // all Sagas Here
  ];

  //   if (process.env.NODE_ENV !== 'development') {
  //     sagas.push(activityLoggingSaga);
  //   }
  yield all(sagas);
}
