/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 17:53:56
 * @LastEditTime: 2022-05-07 14:35:35
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\app-vue2\vue.config.js
 *
 */
const { defineConfig } = require("@vue/cli-service");
const { name: packageName } = require("./package.json");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    mode: "development",
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd",
      // jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
  devServer: {
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
