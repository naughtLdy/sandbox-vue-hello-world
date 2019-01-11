<template>
  <div>{{ message }}</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    message: {
      type: String,
      default: ''
    }
  }
});
</script>
