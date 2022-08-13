<template>
  <div class="client">

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      chartWidth: 0
    }
  },
  created() {
    this.onResize;
  },
  methods: {
    onResize() {

    }
  }
});
</script>

<style scoped>
.home-row {
  @apply w-full flex flex-wrap;
}
.home-row-child {
  @apply px-5 mb-8;
}
.home-row-child-title {
  @apply w-full text-left font-semibold text-xl mb-2;
}
</style>
