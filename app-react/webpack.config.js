/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-07 14:48:26
 * @LastEditTime: 2022-05-07 14:49:31
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\app-react\webpack.config.js
 *
 */
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  configureWebpack: {
    mode: "development",
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd",
    },
  },
  devServer: {
    port: 9002, // 端口号
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
  },
};
