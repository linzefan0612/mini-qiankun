/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-02 13:32:34
 * @LastEditTime: 2022-05-04 11:18:01
 * @LastEditors: Lin ZeFan
 * @Description: 监视路由
 * @FilePath: \mini-qiankun\main\src\micro-fe\rewriteRouter.js
 *
 */
const rawPushState = window.history.pushState;
const rawReplaceState = window.history.replaceState;

export default () => {
  // 前进后退
  window.addEventListener("popstate", () => {
    console.log("popstate");
  });

  window.history.pushState = function (...args) {
    rawPushState.apply(window.history, args);
    console.log("pushState");
  };
  
  window.history.replaceState = function (...args) {
    rawReplaceState.apply(window.history, args);
    console.log("replaceState");
  };
};
