<template>
    <div class="p-2">
    <doughnut
        chart-id="1"
        :width="width"
        :height="height"
        :chart-data="chartData"
        :chart-options="chartOptions"
    />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NumberFormatter, DateFormatter } from '@/utils/index';
import { Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default Vue.extend({
  name: 'BarChart',
  components: {
    Doughnut
  },
  props: {
    chartData: Object,
    chartOptions: Object,
    height: Number,
    width: Number
  },
  mounted() {
  }
});
</script>

<style scoped>
</style>