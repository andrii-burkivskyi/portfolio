import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

import { routerMiddleware } from 'react-router-redux';

import reducers from '../../reducers';

const reduxRouterMiddleware = routerMiddleware(browserHistory);
const sagaMiddleware = createSagaMiddleware();
const middleware = [reduxRouterMiddleware, sagaMiddleware];

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

sagaMiddleware.run(rootSaga);
