/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-02 11:38:51
 * @LastEditTime: 2022-05-02 11:48:10
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\main\src\router\index.js
 *
 */

import { createWebHashHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
