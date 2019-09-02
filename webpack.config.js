const CopyPlugin = require("copy-webpack-plugin") // eslint-disable-line @typescript-eslint/no-var-requires
const HtmlPlugin = require("html-webpack-plugin") // eslint-disable-line @typescript-eslint/no-var-requires
const path = require("path") // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  entry: "./src/pantheon.ts",
  output: {
    filename: "pantheon.js",
    library: "Pantheon",
    libraryExport: "default",
    libraryTarget: "window",
    path: path.resolve(__dirname, "dist"),
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
  devtool: "source-map",
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
