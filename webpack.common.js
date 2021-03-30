const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "anichart.js",
    path: path.resolve(__dirname, "dist"),
    library: "anichart",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      path: require.resolve("path-browserify"),
      stream: false,
      http: false,
      https: false,
      fs: false,
      util: false,
      zlib: false,
      buffer: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        options: { configFile: "tsconfig.dev.json" },
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|zh-cn/),
  ],
};
