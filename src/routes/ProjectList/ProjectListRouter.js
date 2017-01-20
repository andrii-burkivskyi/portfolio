import store from 'store';
import { fetchHeader, fetchProjects } from 'actions/projects.actions.js';

import ProjectListPage from './components/ProjectListPage.jsx';

module.exports = {
  path: 'projects',

  onEnter(location, replace, callback) {
    document.title = 'Project list | Andrii Burkivskyi';

    store.dispatch(fetchHeader());
    store.dispatch(fetchProjects());
    callback();
  },

  getComponent(location, callback) {
    require.ensure([], () => {
      callback(null, ProjectListPage);
    });
  }
};
