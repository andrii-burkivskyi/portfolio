const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const chanks = require("./webpack/chanks");

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
    filename: '[name].js'
  },

  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src', 'api'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      store: path.resolve(__dirname, 'src', 'store'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      core: path.resolve(__dirname, 'src', 'core'),
      pages: path.resolve(__dirname, 'src', 'pages')
    },
    extensions: ['*', '.js', '.jsx', '.sass', '.scss']
  },

  watch: IS_DEVELOPMENT,

  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /\/node_modules\//,
        use: ['babel-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\/node_modules\//,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[name]--[local]',
            {
              loader: 'postcss-loader',
              options: {
                parser: 'postcss-scss',
                plugins: (bundler) => [
                  require('postcss-import')({ addDependencyTo: bundler }),
                  require('precss')(),
                  require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
                ]
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]'
        ]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new BundleAnalyzerPlugin(),
    new WebpackNotifierPlugin({ title: 'Webpack' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en\-gb/),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    // ...chanks(webpack)([
    //   ["react-dom", "node_modules\\/(?:react\\-dom)"],
    //   ["moment-lodash", "node_modules\\/(?:moment|lodash)"],
    //   ["fixed-data-table", "node_modules\\/(?:fixed-data-table-2)"],
    //   ["core-js", "node_modules\\/(?:core-js)"],
    //   ["vendor", "node_modules"],
    // ])
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
          return false;
        }
        return module.context && module.context.includes("node_modules");
      }
    })
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
