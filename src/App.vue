<script setup lang="ts">
import SideNav from "./components/SideNav.vue";
import 'destyle.css'
</script>

<template>
  <el-container>
    <el-aside width="200px" class="side-menu">
      <side-nav />
    </el-aside>
    <el-main class="main-content">
      <router-view />
    </el-main>
  </el-container>
</template>

<style lang="sass">
@use './assets/sass/style'
</style>
