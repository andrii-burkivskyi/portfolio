import store from 'store';
import { fetchCv } from 'actions/cv.actions.js';

module.exports = {
  onEnter(router, replace, callback) {
    document.title = 'CV | Andrii Burkivskyi';

    store.dispatch(fetchCv('cv.sidebar.json'));
    store.dispatch(fetchCv('cv.content.json'));
    callback();
  },

  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/CVPage.jsx').default);
    });
  }
};
