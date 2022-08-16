<template>
  <div class="card-wrapper">
    <div class="flex flex-wrap">
        <div
          v-for="(v,k) in clientData"
          :key="k"
          @click="goClientDetails(v['id'])"
          class="client-wrapper">
            <div class="w-3/5">
              <div>
                {{ v['title'] + " " + v['name'] }}
              </div>
              <div>
                <font-awesome-icon icon="fa fa-sack-dollar" />
                <span class="ml-2">{{ NumberFormatter.thousandSeparator(v['budget']) }}</span>
              </div>
              <div>
                <font-awesome-icon icon="fa fa-house" />
                <span class="ml-2">{{ v['type'] }}</span>
              </div>
              <div class="text-left">
                <span class="text-xs italic ml-4">{{ DateFormatter.distanceDay(v['updated_at']) }}</span>
              </div>
              <div class="client_wrapper_hover_icon">
                <span class="rotate-90 inline-block">
                  <font-awesome-icon icon="fa fa-arrow-turn-down" />
                </span>
              </div>
            </div>
            <div class="w-2/5">
              <vue-circle
                :progress="getStatusProgress(v['progress'])"
                :size="100"
                :reverse="false"
                line-cap="round"
                :fill="getStatusColor(v['status'])"
                empty-fill="rgba(0, 0, 0, .1)"
                insert-mode="append"
                :thickness="8"
                :show-percent="false"
                >
                <div class="text-xs font-semibold">
                  <span 
                    :class="v['status'] == 'negative' ? 'text-red-900' : 
                    (v['status'] == 'positive' ? 'text-green-900' : 'text-gray-700')">
                    {{ v['progress'] }}
                  </span>
                </div>
              </vue-circle>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { NumberFormatter, DateFormatter } from '@/utils/index';
import VueCircle from 'vue2-circle-progress';

interface clientObject {
  id: string,
  name: string,
  title: string,
  budget: number,
  type: string,
  progress: string,
  status: string,
  updated_at: number
}

export default Vue.extend({
  name: 'ClientOverviewCard',
  components: {
    VueCircle
  },
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
          progress: 'Appointment',
          status: "neutral",
          updated_at: 1660368715
      },
        {
          id: "2",
          name: "Chan",
          title: "Mr.",
          budget: 1200000,
          type: "Terrace",
          progress: 'Booking',
          status: "positive",
          updated_at: 1660290415
        },
        {
          id: "3",
          name: "Jack",
          title: "Mr.",
          budget: 800000,
          type: "Terrace",
          progress: 'Scheduled',
          status: "negative",
          updated_at: 1660267815
        },
    ]
  },
  methods: {
    goClientDetails (id:string) {
      this.$router.push('/clients');
    },
    getStatusColor (status:string) {
      switch (status) {
        case 'positive':
          return { gradient: ['#01cd55', '#00d4ff'] };

        case 'negative':
          return { gradient: ['#c30404', '#611f1f'] };

        case 'neutral':
          return { gradient: ['#9d9d9d'] };
      }
    },
    getStatusProgress (progress:string) {
      const progressToNumber: {[key: string]: number} = {
        'WhatsApp': 10,
        'Scheduled': 30,
        'Appointment': 50,
        'Booking': 70,
        'Loan Application': 90,
        'Signed': 100
      }

      return progressToNumber[progress];
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
  @apply w-full md:w-1/2 lg:w-1/3 px-5 my-2 text-left cursor-pointer flex flex-wrap;
}
.client_wrapper_hover_icon {
  @apply opacity-10 text-right;
  transition: 0.2s all;
}
.client-wrapper:hover .client_wrapper_hover_icon {
  @apply opacity-100;
}
</style>