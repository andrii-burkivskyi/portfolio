import store from 'store';
import { clearSearchMovies, fetchSearchMovies, fetchMoviesGenres } from 'actions/movies.actions.js';

module.exports = {
  path: 'search',

  onEnter(nextState, replace, callback) {
    document.title = 'Movies search';

    store.dispatch(fetchMoviesGenres());
    store.dispatch(clearSearchMovies());
    store.dispatch(fetchSearchMovies(nextState.location.query.search || ''));
    callback();
  },

  onChange(prevState, nextState, replace, callback) {
    store.dispatch(clearSearchMovies());
    store.dispatch(fetchSearchMovies(nextState.location.query.search || ''));
    callback();
  },

  getComponents(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/MoviesSearchPage.jsx').default);
    });
  }
};
