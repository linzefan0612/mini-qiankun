/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 16:30:17
 * @LastEditTime: 2022-05-08 15:43:30
 * @LastEditors: Lin ZeFan
 * @Description: 微前端应用
 * @FilePath: \mini-qiankun\main\src\micro-fe\index.js
 *
 */

import rewriteRouter from "./rewriteRouter";
import handleRouter from "./handleRouter";

let _apps = [];
let startOption = {
  sandbox: {
    strictStyleIsolation: true,
    experimentalStyleIsolation: false,
  },
};
export const getApps = () => _apps;

export const getOptions = () => startOption;

export const registerMicroApps = (apps) => {
  _apps = apps;
};

export const start = (option = startOption) => {
  startOption = option;
  rewriteRouter();
  handleRouter(window.location.pathname);
};
