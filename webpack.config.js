const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "first-webpack-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devServer: {
    port: 4444,
    open: true,
  },
};