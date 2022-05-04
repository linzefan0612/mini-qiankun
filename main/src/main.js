/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 16:03:28
 * @LastEditTime: 2022-05-04 12:27:17
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\main\src\main.js
 *
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

import { registerMicroApps, start } from "./micro-fe/index.js";

registerMicroApps([
  {
    name: "vue 2",
    entry: "http://localhost:9000/",
    container: "#app-container",
    activeRule: "/yourActiveRule2",
  },
  {
    name: "vue 3",
    entry: "http://localhost:9001/",
    container: "#app-container",
    activeRule: "/yourActiveRule2",
  },
  {
    name: "react app",
    entry: "http://localhost:9002/",
    container: "#app-container",
    activeRule: "/yourActiveRule",
  },
]);

start();

app.use(router);
app.use(ElementPlus);
app.mount("#app");


