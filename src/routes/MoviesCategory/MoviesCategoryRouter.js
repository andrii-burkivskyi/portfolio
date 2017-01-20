import store from 'store';
import { fetchMovies, fetchMoviesGenres } from 'actions/movies.actions.js';
import { categoryNormalize } from 'utils/string.js';

module.exports = {
  path: 'category/:category',

  onEnter(location, replace, callback) {
    const { category } = location.params;

    document.title = `Movies | ${categoryNormalize(category)}`;
    window.scrollTo(0, 0);

    store.dispatch(fetchMoviesGenres());
    store.dispatch(fetchMovies(category));
    callback();
  },

  getComponents(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/MoviesCategoryPage.jsx').default);
    });
  }
};
