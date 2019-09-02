const CopyPlugin = require("copy-webpack-plugin") // eslint-disable-line @typescript-eslint/no-var-requires
const HtmlPlugin = require("html-webpack-plugin") // eslint-disable-line @typescript-eslint/no-var-requires
const path = require("path") // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "pantheon.js",
    chunkFilename: "[name].pantheon.js",
    library: "Pantheon",
    libraryExport: "default",
    // libraryTarget: "window",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
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
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin([{ from: "data", to: "data" }]),
    new HtmlPlugin({
      template: "./src/index.html",
    }),
  ],
}
