<template>
  <div>
    <h1 class="text-4xl font-semibold">404</h1>
    <p>
      The page you requested does not exist
    </p>
    <button 
      class="mt-5 btn"
      @click="() => $router.push('/')">
      Back to Dashboard
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageNotFound'
});
</script>

