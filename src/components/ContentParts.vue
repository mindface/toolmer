<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex"

const store = useStore()
const tasks = computed(() => {
  return store.state.tasks.tasks
})

onMounted(() => {
  store.dispatch("tasks/getTask");
})

const count = ref(0)
</script>

<template>
  <div class="content">
    {{ tasks }}
    <p>ContentParts</p>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  </div>
</template>

<style scoped>
</style>
