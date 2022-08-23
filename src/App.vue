<template>
  <div id="app">
    <header-component-vue />
    <div class="max-w-wrapper">
      <router-view class="view_wrapper"/>
    </div>
    <footer-component-vue />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderComponentVue from './components/Header.component.vue';
import FooterComponentVue from './components/Footer.component.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HeaderComponentVue,
    FooterComponentVue
  },
  watch: {
      $route: {
          immediate: true,
          handler(to, from) {
              document.title = to.meta.title ? to.meta.title + " | Streams" : 'Streams';
          }
      },
  }
});
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view_wrapper {
  @apply p-2 md:p-5 mt-8;
}
</style>
