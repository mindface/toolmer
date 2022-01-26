<script lang="ts">
import Vue, { defineComponent, ref, computed } from "vue";
import { useStore } from "../store/index";
import { Concept } from "../store/concept/interface";

export default defineComponent({
  setup(props,context) {
    const store = useStore()
    const pass = ref('')
    const email = ref('')
    const concept = computed(() => store.state.concept) as any
    const loginAction = async () => {
      console.log(concept)
    }

    return {
      pass,
      email,
      concept,
      loginAction
    }
  }
})
</script>

<template>
  <div class="content">
    <div class="content__title">
      <h3 class="title">ログイン画面</h3>
      {{ concept.title }}
    </div>
    <div class="content_body">
      <div class="fields">
        <div class="field _p_1">
          <p class="field-caption"><el-button @click="loginAction">go</el-button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
