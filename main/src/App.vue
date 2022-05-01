<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside class="aside">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
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

.aside {
  background-color: red;
}
</style>
