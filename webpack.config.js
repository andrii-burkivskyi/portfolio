const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_PRODUCTION = NODE_ENV === 'production';

const SOURCEMAP_TYPE = 'eval-source-map';
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
];

module.exports = {
  entry: ['babel-polyfill', './src/client.js'],

  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },

  resolve: {
    root: path.resolve(__dirname),
    alias: {
      actions: 'src/actions',
      api: 'src/api',
      assets: 'src/assets',
      components: 'src/components',
      middleware: 'src/core/middleware',
      routes: 'src/routes',
      store: 'src/core/store',
      utils: 'src/core/utils',
      pages: 'src/pages',
      reducers: 'src/reducers',
      sagas: 'src/sagas',
      schema: 'src/schema',
      selectors: 'src/selectors'
    },
    extensions: ['', '.js', '.jsx', '.sass', '.scss']
  },

  watch: IS_DEVELOPMENT,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: IS_DEVELOPMENT ? SOURCEMAP_TYPE : null,

  debug: IS_DEVELOPMENT,

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /\/node_modules\//,
        loaders: ['react-hot', 'babel', 'eslint']
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\/node_modules\//,
        loaders: [
          'style',
          'css?modules&localIdentName=[name]__[local]',
          'postcss?parser=postcss-scss',
          'sass',
          'sasslint'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[local]'
        ]
      }
    ]
  },

  sasslint: {
    configFile: '.sass-lint.yml'
  },

  postcss: function plugins(bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('precss')(),
      require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
    ];
  },

  plugins: [
    new WebpackNotifierPlugin({ title: 'Webpack' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true
  }
};

if (IS_PRODUCTION) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      },
      output: {
        comments: false
      }
    })
  );
}
