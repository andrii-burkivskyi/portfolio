import store from 'store';
import { fetchMovie, fetchPeopleOfMovie } from 'actions/movies.actions.js';

module.exports = {
  path: 'single/:id',

  onEnter(location, replace, callback) {
    const { id } = location.params;
    const title = 'Movie | %s';

    window.scrollTo(0, 0);

    store.dispatch(fetchMovie(id, title));
    store.dispatch(fetchPeopleOfMovie(id));
    callback();
  },

  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/MoviesSinglePage.jsx').default);
    });
  }
};
