/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-04 11:19:58
 * @LastEditTime: 2022-05-07 14:43:15
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\main\src\micro-fe\handleRouter.js
 *
 */
/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-04 11:19:58
 * @LastEditTime: 2022-05-07 14:16:10
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\main\src\micro-fe\handleRouter.js
 *
 */
/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-04 11:19:58
 * @LastEditTime: 2022-05-07 14:16:01
 * @LastEditors: Lin ZeFan
 * @Description: 匹配路由
 * @FilePath: \mini-qiankun\main\src\micro-fe\handleRouter.js
 *
 */
import { getApps } from "./index";
import importHtmlEntry from "./importHtmlEntry";

let apps = [];
let path = "";

// 获取路由相对路径
function getPath() {
  path = location.pathname;
}

// 匹配路由
function matchRouter() {
  let route = {};
  if (path) {
    !apps.length && (apps = getApps());
    const app = apps.filter((router) => router.activeRule === path);
    if (app && app[0]) {
      route = app[0];
    }
  }
  return route;
}

// 渲染子应用
function createContainer(route, template) {
  if (route.container) {
    const container = document.querySelector(route.container);
    container.appendChild(template);
  }
}

// 渲染
async function render() {
  const route = matchRouter();

  if (route.entry) {
    const { template, execScripts } = await importHtmlEntry(route.entry);

    // 将子应用append到对应容器里
    createContainer(route, template);
    window.__POWERED_BY_QIANKUN__ = true;
    
    // 请求子应用资源
    execScripts();
  }
}

export default () => {
  getPath();
  render();
};
