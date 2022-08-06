<template>
  <div class="home">
    <div class="home-row">
      <div class="home-row-child w-2/3">
        <overview-card-component />
      </div>
      <div class="home-row-child w-2/3">
        <client-overview-card-component />
      </div>
      <div class="home-row-child">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OverviewCardComponent from '../components/dashboard/OverviewCard.component.vue';
import ChartComponent from '../components/Chart.component.vue';
import ClientOverviewCardComponent from '../components/dashboard/ClientOverviewCard.component.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    OverviewCardComponent,
    ChartComponent,
    ClientOverviewCardComponent
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
</style>
