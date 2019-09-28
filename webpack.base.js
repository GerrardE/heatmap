const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index_bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@actions': path.resolve(__dirname, './src/actions'),
      '@components': path.resolve(__dirname, './src/components'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          options: {
            eslintPath: require.resolve('eslint'),
          },
          loader: 'eslint-loader'
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      }
    ]
  },
};
