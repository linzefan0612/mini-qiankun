/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-07 12:17:56
 * @LastEditTime: 2022-05-07 12:35:25
 * @LastEditors: Lin ZeFan
 * @Description: 获取html内容
 * @FilePath: \mini-qiankun\main\src\micro-fe\fetchResource.js
 *
 */

/**
 * @description: 获取html内容
 * @param {string} url 请求对应的地址
 * @return {promise}
 */
export default (url) => fetch(url).then((res) => res.text());
