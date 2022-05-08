/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-02 13:32:34
 * @LastEditTime: 2022-05-08 14:38:06
 * @LastEditors: Lin ZeFan
 * @Description: 监视路由
 * @FilePath: \mini-qiankun\main\src\micro-fe\rewriteRouter.js
 *
 */

import handleRouter from "./handleRouter";
const rawPushState = window.history.pushState;
const rawReplaceState = window.history.replaceState;

let prevApp = null;
let nextApp = null;

export const getPrevApp = () => prevApp;
export const getNextApp = () => nextApp;

export default () => {
  // 前进后退
  window.addEventListener("popstate", () => {
    // 触发跳转后，上一个应用是跳转前的应用
    // 当前应用就是当前的路由
    prevApp = nextApp;
    nextApp = window.location.pathname;
    handleRouter();
  });

  window.history.pushState = function (...args) {
    // 跳转前应用
    prevApp = window.location.pathname;
    rawPushState.apply(window.history, args);
    // 触发history.pushState，路由更新为当前应用
    nextApp = window.location.pathname;
    handleRouter();
  };

  // window.history.replaceState = function (...args) {
  //   prevApp = window.location.pathname;
  //   rawReplaceState.apply(window.history, args);
  //   nextApp = window.location.pathname;
  //   handleRouter();
  // };
};
