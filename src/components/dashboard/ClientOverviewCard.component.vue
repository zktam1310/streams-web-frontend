<template>
  <div class="card-wrapper">
    <div class="flex flex-wrap">
        <div
          v-for="(v,k) in clientData"
          :key="k"
          @click="goClientDetails(v['id'])"
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
            <div>
              <font-awesome-icon icon="fa fa-calendar" />
              <span class="ml-2">{{ DateFormatter.distanceDay(v['updated_at']) }}</span>
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
import { NumberFormatter, DateFormatter } from '@/utils/index';

interface clientObject {
  id: string,
  name: string,
  title: string,
  budget: number,
  type: string,
  status: string,
  updated_at: number
}

export default Vue.extend({
  name: 'ClientOverviewCard',
  data() {
    return {
      clientData: [] as Array<clientObject>,
      NumberFormatter: new NumberFormatter(),
      DateFormatter: new DateFormatter(),
    }
  },
  mounted() {
    this.clientData = [
        {
          id: "1",
          name: "Cherry",
          title: "Ms.",
          budget: 900000,
          type: "Condo",
          status: "neutral",
          updated_at: 1659850538
      },
        {
          id: "2",
          name: "Mike",
          title: "Mr.",
          budget: 1200000,
          type: "Terrace",
          status: "positive",
          updated_at: 1659850138
        },
        {
          id: "3",
          name: "Jack",
          title: "Mr.",
          budget: 800000,
          type: "Terrace",
          status: "negative",
          updated_at: 1659849138
        },
    ]
  },
  methods: {
    goClientDetails(id:string) {
      this.$router.push('/clients');
    }
  }
});
</script>

<style scoped>
.card-wrapper {
  @apply py-3 px-0 md:py-8 md:px-6 rounded-lg;
  box-shadow: 0px 0.10rem 0.5rem rgb(0 0 0 / 0.10);
}
.client-wrapper {
  @apply w-1/2 lg:w-1/3 px-5 my-2 text-left cursor-pointer;
}
.client_wrapper_hover_icon {
  @apply opacity-10 text-center;
  transition: 0.2s all;
}
.client-wrapper:hover .client_wrapper_hover_icon {
  @apply opacity-100;
}
</style>