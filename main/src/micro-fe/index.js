/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 16:30:17
 * @LastEditTime: 2022-05-01 16:31:33
 * @LastEditors: Lin ZeFan
 * @Description: 微前端应用
 * @FilePath: \mini-qiankun\qiankun-vue\src\micro-fe\index.js
 *
 */

let _apps = [];

export const getApps = () => _apps;

export const registerMicroApps = (apps) => {
  _apps = apps;
};

export const start = () => {};
