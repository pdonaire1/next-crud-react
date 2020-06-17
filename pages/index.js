import React, { Component } from 'react'
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './src/reducers';
import App from './src/components/App';
import rootSaga from './src/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
/*if (typeof window !== 'undefined') {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}
*/
if (module.hot) { module.hot.accept(App);}


export default class extends Component {
  render () {
    return (<Provider store={store}>
      <App />
    </Provider>);
  }
}