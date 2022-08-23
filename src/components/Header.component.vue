<template>
  <div class="max-w-wrapper">
    <div class="header">
      <div class="logo" @click="goDashboard">streams</div>
      <nav class="w-5/6">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/clients">Clients</router-link>
        <router-link to="/market">Market</router-link>
      </nav>
      <div class="flex flex-wrap">
        <calculator-component-vue />
        <div
          v-if="isLoggedIn" 
          class="floatBtn" @click="() => $router.push('/profile')">
          <font-awesome-icon icon="fa-solid fa-user" />
        </div>
        <div
          v-else 
          class="floatBtn" @click="() => $router.push('/login')">
          <font-awesome-icon icon="fa-solid fa-power-off" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CalculatorComponentVue from './Calculator.component.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    CalculatorComponentVue
  },
  data() {
    return {
      isLoggedIn: true
    }
  },
  methods: {
    goDashboard() {
      if (this.$route.fullPath !== '/') this.$router.push('/');
    }
  }
});
</script>

<style>
.header {
  @apply mt-1 flex flex-wrap justify-center items-center p-5;
}

nav {
  @apply justify-start flex flex-wrap;
}

nav a {
  @apply mx-10 font-medium;
  color: rgb(139, 139, 139);
}

nav a.router-link-exact-active {
  @apply text-black;
  text-shadow: 0 1px 1px rgba(0,0,0,0.1);
}

.logo {
  @apply mr-auto font-semibold text-2xl text-white cursor-pointer select-none;
  text-shadow: 0 1px 6px rgba(0,0,0,0.5);
}
.floatBtn {
  @apply h-10 w-10 ml-3 relative cursor-pointer bg-white;
  border-radius: 50px;
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.10);
  transition: all .25s;
}

.floatBtn svg {
  @apply absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
}

.floatBtn:hover {
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.20);
  transform: scale(1.1);
}

.floatBtn:active {
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.20);
  transform: scale(0.9);
}

</style>