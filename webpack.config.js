/* eslint @typescript-eslint/no-var-requires: "off" */

const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const PurgecssPlugin = require("purgecss-webpack-plugin")
const glob = require("glob")

module.exports = {
  node: { fs: "empty" },

  entry: ["@babel/polyfill", "./src/lib/index.tsx"],
  output: {
    filename: "atlas.js",
    chunkFilename: "[name].atlas.js",
    library: "atlas",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  devServer: {
    compress: true,
    overlay: true,
    port: 3000,
    open: false,
    stats: "normal",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        // include: /node_modules\/ol-mapbox-style/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            exclude: /node_modules/, // \/(?!ol-mapbox-style\/).*/,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        ],
      },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new CopyPlugin([{ from: "static", to: "static" }]),
    new HtmlPlugin({
      template: "./src/lib/index.html",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, "static/css")}/**/*`, {
        nodir: true,
      }),
    }),
  ],
}
