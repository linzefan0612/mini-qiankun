/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 17:53:56
 * @LastEditTime: 2022-05-01 22:32:52
 * @LastEditors: Lin ZeFan
 * @Description: 
 * @FilePath: \mini-qiankun\app-vue2\vue.config.js
 * 
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9000,
  },
});
