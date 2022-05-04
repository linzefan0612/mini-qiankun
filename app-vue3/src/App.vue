<!--
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 17:45:05
 * @LastEditTime: 2022-05-04 12:51:09
 * @LastEditors: Lin ZeFan
 * @Description: 
 * @FilePath: \mini-qiankun\app-vue3\src\App.vue
 * 
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App 3"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
