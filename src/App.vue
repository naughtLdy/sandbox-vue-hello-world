<template>
  <HelloWorld v-bind:message="message"></HelloWorld>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  components: { HelloWorld },
  data: function() {
    return {
      message: "Hello World"
    };
  }
};
</script>
