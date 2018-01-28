import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { routerMiddleware } from 'react-router-redux';

const getFolderName = (path) => path.replace(/^\.\//, '').replace(/\/.*$/, '');
const context = require.context('core', true, /reducer\.js/);
const reducers = context.keys().reduce((acc, path) => ({
  ...acc,
  [getFolderName(path)]: context(path).default
}), {});

const reduxRouterMiddleware = routerMiddleware(browserHistory);
const middleware = [reduxRouterMiddleware, thunk];

export default createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...middleware))
);
