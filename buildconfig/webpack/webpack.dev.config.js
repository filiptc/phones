const { Config } = require('webpack-config');
const WebpackNotifierPlugin = require('webpack-notifier');

function getClientConfig(serverOnly) {
  return !serverOnly ? {
    devServer: {
      hot: true,
      inline: true,
      port: 8000,
      open: true,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
      },
      stats: {
        colors: true,
        modules: false,
      }
    }
  } : {};
}

module.exports = ({ serverOnly = false } = {}) =>
  new Config().extend('buildconfig/webpack/webpack.base.config.js').merge({
    output: {
      devtoolModuleFilenameTemplate: '[resource-path]'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [ new WebpackNotifierPlugin()],
    ...getClientConfig(serverOnly)
  });
