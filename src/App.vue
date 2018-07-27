<template>
  <HelloWorld :message="message"></HelloWorld>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./HelloWorld.vue";

export default Vue.extend({
  components: { HelloWorld },
  data() {
    return {
      message: "Hello World"
    };
  }
});
</script>
