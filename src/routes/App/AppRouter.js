module.exports = {
  path: '/',

  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/AppPage.jsx').default);
    });
  },

  getIndexRoute(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('routes/CV/CVRouter.js'));
    });
  },

  getChildRoutes(location, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require('routes/ProjectList/ProjectListRouter.js'),
        require('routes/MoviesCore/MoviesCoreRouter.js'),
        require('routes/NotFound/NotFoundRouter.js')
      ]);
    });
  }
};
