<!--
 * @Author: Lin ZeFan
 * @Date: 2022-05-02 11:39:45
 * @LastEditTime: 2022-05-02 12:01:32
 * @LastEditors: Lin ZeFan
 * @Description: 
 * @FilePath: \mini-qiankun\main\src\layout\index.vue
 * 
-->
<!--
 * @Author: Lin ZeFan
 * @Date: 2022-05-01 17:45:05
 * @LastEditTime: 2022-05-02 11:26:43
 * @LastEditors: Lin ZeFan
 * @Description: 
 * @FilePath: \mini-qiankun\main\src\App.vue
 * 
-->
<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter();

const MENU = [
  {
    id: "1",
    indexPath: "/",
    name: "首页",
  },
  {
    id: "2",
    indexPath: "/app/react",
    name: "react",
  },
  {
    id: "3",
    indexPath: "/app/vue2",
    name: "vue2",
  },
  {
    id: "4",
    indexPath: "/app/vue3",
    name: "vue3",
  },
];

const state = reactive({
  title: "首页",
});

const handleSelect = (i) => {
  const path = MENU[i - 1].indexPath;
  router.push(path);
};
</script>

<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside class="aside">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#314156"
          text-color="#fff"
        >
          <el-menu-item
            :index="`${index + 1}`"
            v-for="(item, index) in MENU"
            :key="index"
          >
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>{{ state.title }}</el-header>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
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

.common-layout {
  height: 100vh;
}

.el-menu-vertical-demo {
  height: 100%;
}
</style>
