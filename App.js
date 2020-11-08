import {Provider} from 'react-redux';
import React from 'react';
import initStore, {runSagaMiddleware} from './src/modules/store';
import TriviaApp from './src/screens/TriviaApp';

const store = initStore();
runSagaMiddleware();

const App = () => {
  return (
    <Provider store={store}>
      <TriviaApp />
    </Provider>
  );
};

export default App;
