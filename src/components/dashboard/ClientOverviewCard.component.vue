<template>
  <div class="card-wrapper">
    <div class="flex flex-wrap">
        <div
          v-for="(v,k) in clientData"
          :key="k"
          class="client-wrapper">
            <div>
              {{ v['title'] + " " + v['name'] }}
              <span
                v-if="v['status'] == 'positive'"
                class="ml-3 text-green-300">
                <font-awesome-icon icon="fa fa-face-smile" />
              </span>
              <span
                v-else-if="v['status'] == 'negative'"
                class="ml-3 text-red-500">
                <font-awesome-icon icon="fa fa-face-dizzy" />
              </span>
              <span
                v-else
                class="ml-3 text-gray-400">
                <font-awesome-icon icon="fa fa-face-meh" />
              </span>
            </div>
            <div>
              <font-awesome-icon icon="fa fa-sack-dollar" />
              <span class="ml-2">{{ NumberFormatter.thousandSeparator(v['budget']) }}</span>
            </div>
            <div>
              <font-awesome-icon icon="fa fa-house" />
              <span class="ml-2">{{ v['type'] }}</span>
            </div>
            <div class="client_wrapper_hover_icon">
              <span class="rotate-90 inline-block">
                <font-awesome-icon icon="fa fa-arrow-turn-down" />
              </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NumberFormatter } from '@/utils/index';

interface clientObject {
    name: string,
    title: string,
    budget: number,
    type: string,
    status: string
}

export default Vue.extend({
  name: 'ClientOverviewCard',
  data() {
    return {
      NumberFormatter: new NumberFormatter(),
      clientData: [] as Array<clientObject>
    }
  },
  mounted() {
    this.clientData = [
        {
            name: "Cherry",
            title: "Ms.",
            budget: 900000,
            type: "Apartment",
            status: "neutral"
        },
        {
            name: "Mike",
            title: "Mr.",
            budget: 1200000,
            type: "Landed",
            status: "positive"
        },
        {
            name: "Jack",
            title: "Mr.",
            budget: 800000,
            type: "Landed",
            status: "negative"
        },
    ]
  },
  methods: {
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