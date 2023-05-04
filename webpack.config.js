const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
  entry: {
    index: './src/pages/index.tsx',
    about: './src/pages/about.tsx',
  },
  output: {
    // path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.j|tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts','.tsx','.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      chunks: ['commons','index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'about.html',
      chunks: ['commons', 'about']
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  mode: 'development'
}