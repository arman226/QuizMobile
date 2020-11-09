import {combineReducers} from 'redux';
import testApi from './testApi';
import subject from './subject';
import category from './category';

const appReducer = combineReducers({
  testApi,
  subject,
  category,
});

const rootReducer = (state, action) => {
  //   if (action.type === LOGOUT_USER_DONE) {
  //     state = undefined;
  //   }

  return appReducer(state, action);
};

export default rootReducer;
