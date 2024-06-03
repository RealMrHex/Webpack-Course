const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "app-[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./public"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', { targets: "ie 11" }]
            ]
          }
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/app-[contenthash].css' }),
    new HtmlWebpackPlugin({ template: 'public/index.html', minify: true })
  ],
  mode: "development",
};
