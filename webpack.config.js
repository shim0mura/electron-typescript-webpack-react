const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'renderer.tsx')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [
            "@babel/env",
            "@babel/preset-react",
            "@babel/preset-typescript"
          ]
        }
      }, {
        test: /\.css$/,
        loader: ['css-loader', 'style-loader']
      }
    ]
  }
}
