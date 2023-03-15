const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'flipSenderReceiver'),
};

module.exports = {
  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV === 'development',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
      name: false,
    },
  },
  entry: {
    background: `${PATHS.source}/background/app.js`,
    content: `${PATHS.source}/content/app.js`,
    popup: `${PATHS.source}/popup/app.js`,
  },
  output: {
    path: PATHS.build,
    filename: '[name]/bundle.js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: 3,
                  targets: {
                    browsers: [
                      'last 5 Chrome versions',
                      'last 5 firefox versions',
                    ],
                  },
                  useBuiltIns: 'usage',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|eot|svg|otf|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 500000,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['flipSenderReceiver'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'static'}
      ]
    }),
    new MiniCssExtractPlugin({filename: '[name]/styles.css'}),
  ],
};

