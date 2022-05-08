/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-04 11:19:58
 * @LastEditTime: 2022-05-08 14:28:33
 * @LastEditors: Lin ZeFan
 * @Description: 匹配路由
 * @FilePath: \mini-qiankun\main\src\micro-fe\handleRouter.js
 *
 */
import { getApps } from "./index";
import { getPrevApp, getNextApp } from "./rewriteRouter";
import importHtmlEntry from "./importHtmlEntry";

let apps = [];

function querySelectorContainer(container) {
  return document.querySelector(container);
}

// 匹配路由
function matchRouter(path) {
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

// 子应用html添加到主应用对应容器
function createContainer(route, template) {
  if (route.container) {
    const container = querySelectorContainer(route.container);
    container.appendChild(template);
    return container;
  }
}

function initRouteFunction(route, app) {
  route.bootstrap = app.bootstrap;
  route.mount = app.mount;
  route.unmount = app.unmount;
}

// 渲染子应用
async function render(path) {
  // 卸载上一个应用
  const prevApp = matchRouter(getPrevApp());
  if (prevApp && prevApp.entry) {
    unmount(prevApp);
  }

  let route = {};
  if (path) {
    // 第一次加载，截取路由
    route = matchRouter(path);
  } else {
    // 加载当前应用
    route = matchRouter(getNextApp());
  }

  if (route.entry) {
    const { template, execScripts } = await importHtmlEntry(route.entry);

    // 将子应用append到对应容器里
    createContainer(route, template);

    window.__POWERED_BY_QIANKUN__ = true;

    // 请求子应用资源
    const app = await execScripts();

    // 拓展当前路由属性
    initRouteFunction(route, app);

    // 初始化
    bootstrap(route);
    mount(route);
  }
}

async function bootstrap(app) {
  app.bootstrap &&
    (await app.bootstrap({
      container: querySelectorContainer(app.container),
    }));
}
async function mount(app) {
  app.mount &&
    (await app.mount({
      container: querySelectorContainer(app.container),
    }));
}
async function unmount(app) {
  app.unmount &&
    (await app.unmount({
      container: querySelectorContainer(app.container),
    }));
}

export default (path) => {
  render(path);
};
