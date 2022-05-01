/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 16:03:28
 * @LastEditTime: 2022-05-01 17:54:49
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\qiankun-vue\src\main.js
 *
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

// import { registerMicroApps, start } from "./micro-fe/index.js";

// registerMicroApps([
//   {
//     name: "react app", // app name registered
//     entry: "//localhost:7100",
//     container: "#yourContainer",
//     activeRule: "/yourActiveRule",
//   },
//   {
//     name: "vue app",
//     entry: { scripts: ["//localhost:7100/main.js"] },
//     container: "#yourContainer2",
//     activeRule: "/yourActiveRule2",
//   },
// ]);

// start();

app.use(ElementPlus);
app.mount("#app");
