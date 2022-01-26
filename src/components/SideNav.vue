<script setup lang="ts">
import {
  Location,
  Document,
  SetUp,
  Menu as IconMenu,
  Setting,
  Flag,
  Share,
  Postcard
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const navNumber = ref('0')

const menuAction = (e:Event) => {
  console.log(e)
}

</script>

<template>
<div class="side-nav">
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="navNumber"
        class="el-menu-vertical-demo"
      >
        <router-link to="/home">
          <el-menu-item index="1">
            <el-icon><icon-menu /></el-icon>
            Home
          </el-menu-item>
        </router-link>
        <router-link to="/ac_rate">
          <el-menu-item index="3">
            <el-icon><flag /></el-icon>
            AcRate
          </el-menu-item>
        </router-link>
        <router-link to="/flow">
          <el-menu-item index="4">
            <el-icon><share /></el-icon>
            <span>Flow</span>
          </el-menu-item>
        </router-link>
        <router-link to="/move_concept">
          <el-menu-item index="5">
            <el-icon><set-up /></el-icon>
            <span>Move Concept</span>
          </el-menu-item>
        </router-link>
        <router-link to="/about">
          <el-menu-item index="6">
            <el-icon><postcard /></el-icon>
            About
          </el-menu-item>
        </router-link>
    </el-menu>
  </el-col>
  </el-row>
</div>
</template>

<style scoped>
</style>
