const { defineConfig } = require("@vue/cli-service");
const { name: packageName } = require("./package.json");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    mode: "development",
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd",
    },
  },
  devServer: {
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
