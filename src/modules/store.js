import {createStore, applyMiddleware} from 'redux';
import middlewares, {sagaMiddleware} from './middleware';
import rootReducer from './reducer';
import rootSaga from './sagas';

const enhancerList = [...middlewares];

const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

// Lazy load run saga's since were lazing loading the createStore above!
export const runSagaMiddleware = () => sagaMiddleware.run(rootSaga);

export default (initialState) =>
  createStore(rootReducer, initialState, applyMiddleware(...enhancerList));
