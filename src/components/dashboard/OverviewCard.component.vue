<template>
  <div class="card-wrapper">
    <div class="flex flex-wrap">
        <h1 class='text-2xl font-semibold'>
            Welcome back, {{ username }}
        </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OverviewCard',
  data() {
    return {
      username: "Guest",
    }
  }
});
</script>

<style scoped>
.card-wrapper {
  @apply py-8 px-6 rounded-lg;
  box-shadow: 0px 0.10rem 0.5rem rgb(0 0 0 / 0.10);
}
</style>