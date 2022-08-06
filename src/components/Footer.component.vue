<template>
  <div class="max-w-wrapper">
    <div class="footer">
      <div class="text-sm">
        &copy; Streams {{ new Date().getFullYear() }}. All Rights Reserved.
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer'
});
</script>

<style scoped>
.footer {
  @apply mt-5 flex flex-wrap justify-center items-center p-5;
}
</style>