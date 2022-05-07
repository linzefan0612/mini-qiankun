/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-02 11:38:51
 * @LastEditTime: 2022-05-07 11:27:40
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\main\src\router\index.js
 *
 */

import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
