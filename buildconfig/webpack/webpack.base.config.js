const { Config } = require('webpack-config');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = new Config().merge({
  context: path.resolve(__dirname, '../../src'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [
          'ts-loader',
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: false,
              tsConfigFile: path.resolve(__dirname, '../../tsconfig.json'),
            }
          }
        ],
        exclude: [/node_modules/, /build/, /.*\.test\.tsx?$/],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].css',
  })
]
});
