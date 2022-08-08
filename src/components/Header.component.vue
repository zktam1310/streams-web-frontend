<template>
  <div class="max-w-wrapper">
    <div class="header">
      <div class="logo" @click="() => $router.push('/')">streams</div>
      <nav class="w-5/6">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/engine">Engine</router-link>
        <router-link to="/clients">Clients</router-link>
        <router-link to="/market">Market</router-link>
      </nav>
      <div>
        <div
          v-if="isLoggedIn" 
          class="profileBtn" @click="() => $router.push('/profile')">
          <font-awesome-icon icon="fa-solid fa-user" />
        </div>
        <div
          v-else 
          class="profileBtn" @click="() => $router.push('/login')">
          <font-awesome-icon icon="fa-solid fa-power-off" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      isLoggedIn: true
    }
  },
  methods: {
  }
});
</script>

<style scoped>
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
.profileBtn {
  @apply h-10 w-10 relative cursor-pointer;
  border-radius: 50px;
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.10);
  transition: all .25s;
}

.profileBtn svg {
  @apply absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
}

.profileBtn:hover {
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.20);
  transform: scale(1.1);
}
</style>