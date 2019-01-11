<template>
  <HelloWorld :message="message" />
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello World'
    };
  }
};
</script>
