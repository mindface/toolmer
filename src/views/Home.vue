<template>
  <div class="home">
    <content-select />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentSelect from "../components/ContentSelect.vue";

export default defineComponent({
  name: "Home",
  components: {
    ContentSelect
  },
});
</script>
