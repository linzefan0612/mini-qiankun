/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 16:40:06
 * @LastEditTime: 2022-05-04 12:39:00
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\app-react\src\index.js
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

if (!window._IS_SUB_APP) {
  mount({});
}
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("react app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  ReactDOM.render(
    <App />,
    props.container ? props.container.querySelector("#app-container") : root
  );
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector("#app-container") : root
  );
}
