// All middlewares should be composed here
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import {crashReportMiddleware} from './crashReport';

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default middlewares;
