<template>
  <div class="card-wrapper">
    <div class="flex flex-wrap">
        <div 
          v-for="(v,k) in clientData"
          :key="k"  
          class="">
            {{ v['name'] }}
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface clientObject {
    name: string,
    budget: number,
    type: string
}

export default Vue.extend({
  name: 'ClientOverviewCard',
  data() {
    return {
        clientData: [] as Array<clientObject>
    }
  },
  mounted() {
    this.clientData = [
        {
            name: "Cherry" as string,
            budget: 900000,
            type: "Landed"
        },
        {
            name: "Mike" as string,
            budget: 1200000,
            type: "Landed"
        },
    ]
  }
});
</script>

<style scoped>
.card-wrapper {
  @apply py-8 px-6 rounded-lg;
  box-shadow: 0px 0.10rem 0.5rem rgb(0 0 0 / 0.10);
}
</style>