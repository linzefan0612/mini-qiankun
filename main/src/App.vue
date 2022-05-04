<!--
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 17:45:05
 * @LastEditTime: 2022-05-02 13:35:23
 * @LastEditors: Lin ZeFan
 * @Description: 
 * @FilePath: \mini-qiankun\main\src\App.vue
 * 
-->

<script setup>
import Layout from "./layout/index.vue";
</script>

<template>
  <div id="app">
    <Layout>
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>

      <!-- 微前端组件 -->
      <div id="app-container"></div>
    </Layout>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
