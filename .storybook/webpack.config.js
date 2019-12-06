const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: [ 'less-loader', 'style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
        exclude: [
          /\.(config|overrides|variables)$/,
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.scss$/,
          /\.less$/,
        ],
      },
    ],
  },
};
