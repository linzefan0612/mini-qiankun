/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 17:45:04
 * @LastEditTime: 2022-05-01 22:43:51
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\main\vite.config.js
 *
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: { origin: "*" },
  },
});
