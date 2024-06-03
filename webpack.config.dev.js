const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    "home": "./src/pages/home/home-page.js",
    "about": "./src/pages/about/about-page.js",
  },
  output: {
    filename: "js/[name]-[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
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
        generator: {
          filename: 'static/image/[name][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[name][ext][query]'
        }
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
    new ESLintPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name]-[contenthash].css' }),
    new HtmlWebpackPlugin(
      {
         template: 'public/index.html',
         filename: 'home.html',
         chunks: ["home"],
         minify: false
      }
    ),
    new HtmlWebpackPlugin(
      {
         template: 'public/index.html',
         filename: 'about.html',
         chunks: ["about"],
         minify: false
      }
    ),
  ],
  mode: "development",
};
