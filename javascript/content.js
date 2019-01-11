const HelloWorld = Vue.component('hello-world', {
  props: ['message'],
  template: `<div>{{ message }}</div>`,
});

new Vue({
  el: '#content',
});
