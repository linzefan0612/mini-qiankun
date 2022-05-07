/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-02 13:32:34
 * @LastEditTime: 2022-05-07 12:24:12
 * @LastEditors: Lin ZeFan
 * @Description: 监视路由
 * @FilePath: \mini-qiankun\main\src\micro-fe\rewriteRouter.js
 *
 */

import handleRouter from "./handleRouter";
const rawPushState = window.history.pushState;

export default () => {
  // 前进后退
  window.addEventListener("popstate", () => {
    handleRouter(); 
  });

  window.history.pushState = function (...args) {
    rawPushState.apply(window.history, args);
    handleRouter();
  };
};
