<template>
  <div class="home">
    <div class="home-row">
      <div class="home-row-child w-full lg:w-2/3">
        <overview-card-component />
      </div>
      <div class="home-row-child w-full lg:w-2/3">
        <div class="home-row-child-title">Clients</div>
        <client-overview-card-component />
      </div>
      <div class="home-row-child w-full lg:w-2/3">
        <div class="home-row-child-title">Market</div>
        <market-overview-card-component />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import OverviewCardComponent from '../components/dashboard/OverviewCard.component.vue';
import ChartComponent from '../components/Chart.component.vue';
import ClientOverviewCardComponent from '../components/dashboard/ClientOverviewCard.component.vue';
import MarketOverviewCardComponent from '../components/dashboard/MarketOverviewCard.component.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    OverviewCardComponent,
    ChartComponent,
    ClientOverviewCardComponent,
    MarketOverviewCardComponent,
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
