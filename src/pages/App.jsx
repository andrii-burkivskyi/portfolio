import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import PageNotFound from 'components/PageNotFound';
import Root from 'pages/Root';
import CV from 'pages/CV/CV';
import ProjectsList from 'pages/ProjectsList/ProjectsList';
import MoviesFront from 'pages/Movies/Front';
import MoviesRoot from 'pages/Movies/Root';
import MoviesSearch from 'pages/Movies/Search';
import MoviesCategory from 'pages/Movies/Category';
import MoviesSingle from 'pages/Movies/Single';

import store from 'store';

const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={CV} />
        <Route path="projects" component={ProjectsList} />
        <Route path="movies" component={MoviesRoot}>
          <IndexRoute {...MoviesFront} />
          <Route path="search" {...MoviesSearch} />
          <Route path="category/:category" {...MoviesCategory} />
          <Route path="single/:id" {...MoviesSingle} />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>
);

export default App;
