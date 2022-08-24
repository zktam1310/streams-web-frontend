<template>
  <div class="card-wrapper">
    <div class="flex flex-wrap justify-center">
      <div class="my-2 md:my-0">
        <doughnut-chart-component
        :chartData="chartData"
        :chartOptions="chartOptions"
        :height="400"
        :width="400" />
      </div>
      <div class="my-2 md:my-0">
        <doughnut-chart-component
        :chartData="chartData2"
        :chartOptions="chartOptions"
        :height="400"
        :width="400" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NumberFormatter, DateFormatter } from '@/utils/index';
import DoughnutChartComponent from '../charts/DoughnutChart.component.vue';

interface IChartData {
  labels: Array<String>,
  datasets: Array<Object>
}

export default Vue.extend({
  name: 'MarketOverviewCard',
  components: {
    DoughnutChartComponent
  },
  data() {
    return {
      chartData: {} as IChartData,
      chartData2: {} as IChartData,
    }
  },
  mounted() {
    this.chartData = {
      labels: ['Residential', 'Commercial', 'Industrial'],
      datasets: [{
        data: [40, 20, 12],
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
      }]
    };
    this.chartData2 = {
      labels: ['Ampang', 'Klang', 'Bukit Jalil', 'Sentul'],
      datasets: [{
        data: [35, 12, 10, 8],
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)',
        ],
      }]
    };
  },
  methods: {
    goClientDetails(id:string) {
      this.$router.push('/clients');
    }
  },
  computed: {
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
});
</script>

<style scoped>
.card-wrapper {
  @apply py-8 px-6 rounded-lg;
  box-shadow: 0px 0.10rem 0.5rem rgb(0 0 0 / 0.10);
}
.client-wrapper {
  @apply w-1/3 px-5 my-2 text-left cursor-pointer;
}
.client_wrapper_hover_icon {
  @apply opacity-10 text-center;
  transition: 0.2s all;
}
.client-wrapper:hover .client_wrapper_hover_icon {
  @apply opacity-100;
}
</style>