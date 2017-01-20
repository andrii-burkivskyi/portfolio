import store from 'store';
import { fetchMovies, fetchMoviesGenres } from 'actions/movies.actions.js';

module.exports = {
  onEnter(location, replace, callback) {
    document.title = 'Movies | Front page';

    store.dispatch(fetchMoviesGenres());
    store.dispatch(fetchMovies('upcoming'));
    store.dispatch(fetchMovies('top_rated'));
    store.dispatch(fetchMovies('now_playing'));
    store.dispatch(fetchMovies('popular'));
    callback();
  },

  getComponents(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/MoviesFrontPage.jsx').default);
    });
  }
};
