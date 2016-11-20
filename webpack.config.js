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
      {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
      {test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      {test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    }),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })

  ],
  devServer: {
    historyApiFallback: true
  }

  
};
