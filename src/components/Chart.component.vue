<template>
  <div class="chart-wrapper">
    <trading-vue 
        :data="chartData"
        :titleTxt="titleTxt"
        :width="width"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TradingVue from 'trading-vue-js';

export default Vue.extend({
  name: 'Header',
  components: {
    TradingVue
  },
  props: {
    titleTxt: String,
    width: Number
  },
  data() {
    return {
      chartData: {}
    }
  },
  beforeMount() {
  }
});
</script>

<style scoped>
.chart-wrapper {
  @apply p-3;
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.10);
}
</style>