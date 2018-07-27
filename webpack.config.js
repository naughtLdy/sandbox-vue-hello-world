"use strict";

const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    bundle: path.join(__dirname, "src", "index.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].js",
    chunkFilename: "static/js/[name].chunk.js"
  },
  resolve: {
    extensions: [".js", ".vue"],
    modules: ["node_modules"],
    alias: {
      vue: "vue/dist/vue.common.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          cssModules: {
            localIdentName: "[path][name]---[local]---[hash:base64:5]",
            camelCase: true
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
