/*
 * @Author: Lin ZeFan
 * @Date: 2022-05-07 12:14:08
 * @LastEditTime: 2022-05-08 15:56:31
 * @LastEditors: Lin ZeFan
 * @Description:
 * @FilePath: \mini-qiankun\main\src\micro-fe\importHtmlEntry.js
 *
 */
import fetchResource from "./fetchResource";

export default async (url) => {
  const html = await fetchResource(url);

  let template = document.createElement("div");
  template.innerHTML = html;

  // 获取script标签
  function getExternalScripts() {
    const scripts = template.querySelectorAll("script") || [];
    return Promise.all(
      Array.from(scripts).map((script) => {
        const src = script.getAttribute("src");
        if (src) {
          // 如果没有带域名，手动把域名拼上
          const link = src.startsWith("http" || "https") ? src : `${url}${src}`;
          return fetchResource(link);
        } else {
          return Promise.resolve(script.innerHTML);
        }
      })
    );
  }

  // 执行脚本代码
  async function execScripts() {
    const scripts = await getExternalScripts();

    // 手动构建 CommonJs 环境
    // 打包的时候，会把应用 入口文件 暴露的函数加到 module.exports
    // 最后赋值给 module.exports
    const module = { exports: {} };
    const exports = module.exports;

    scripts.forEach((code) => {
      eval(code);
    });

    return module.exports;
  }

  return {
    template,
    getExternalScripts,
    execScripts,
  };
};
