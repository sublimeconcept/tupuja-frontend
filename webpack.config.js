var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = process.env.APP_ENVIRONMENT == 'production';

module.exports = {

  entry: './src/main.ts',
  output: {
    path: './dist',
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.component.ts$/, loader: 'ts!angular2-template'},
      {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'raw'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })

  ],
  devServer: {
    historyApiFallback: true
  }

  
};
