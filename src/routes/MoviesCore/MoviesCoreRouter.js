module.exports = {
  path: 'movies',

  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/MoviesCorePage.jsx').default);
    });
  },

  getIndexRoute(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('routes/MoviesFront/MoviesFrontRouter.js'));
    });
  },

  getChildRoutes(location, callback) {
    require.ensure([], (require) => {
      callback(null, [
        require('routes/MoviesCategory/MoviesCategoryRouter.js'),
        require('routes/MoviesSingle/MoviesSingleRouter.js'),
        require('routes/MoviesSearch/MoviesSearchRouter.js')
      ]);
    });
  }
};
