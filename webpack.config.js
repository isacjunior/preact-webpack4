const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.jsx'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
