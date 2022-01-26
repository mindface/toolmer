<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex"

const store = useStore()
// const tasks = computed(() => {
//   return store.state.tasks.tasks
// })

const activeName = ref('first')

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}

onMounted(() => {
  // store.dispatch("tasks/getTask");
})

const count = ref(0)
</script>

<template>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="() => {handleClick}">
      <el-tab-pane label="User" name="first">
        
      </el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
</style>
