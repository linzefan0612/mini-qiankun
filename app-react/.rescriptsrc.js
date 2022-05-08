/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-08 15:06:37
 * @LastEditTime: 2022-05-08 15:21:34
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\app-react\.rescriptsrc.js
 *
 */
const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = "window";

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.compress = true;
    return config;
  },
};
