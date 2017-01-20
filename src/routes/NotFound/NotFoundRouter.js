module.exports = {
  path: '*',

  onEnter(location, replace, callback) {
    document.title = 'Page not found';

    callback();
  },

  getComponent(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('./components/NotFoundPage.jsx').default);
    });
  }
};
