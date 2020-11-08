import {combineReducers} from 'redux';
import testApi from './testApi';

const appReducer = combineReducers({
  testApi,
});

const rootReducer = (state, action) => {
  //   if (action.type === LOGOUT_USER_DONE) {
  //     state = undefined;
  //   }

  return appReducer(state, action);
};

export default rootReducer;
