<template>
  <div class="max-w-wrapper relative">
    <div class="calc-btn-wrapper">
      <div
        class="calcBtn" @click="showCalculator">
        <font-awesome-icon icon="fa-solid fa-calculator" />
      </div>
    </div>
    <modal 
      name="calcModal"
      draggable=".calcHeader"
      :clickToClose="false"
      :height="calculatorHeight"
      classes="calcModalBox">
      <div class="calcHeader">Calculator <span class="font-mono font-normal text-sm">(DRAG ME)</span></div>
      <button 
        class="calcModalClose"
        @click="showCalculator(false)">
          ╳
      </button>
      <div class="calcModalBody">
        <div class="calcModalBodyWrapper">
          <div class="calcModalInputRow">
            <label>Property Price (RM)</label>
            <input
              v-model="propertyPrice"
              @blur="calculate" />
          </div>
          <div class="calcModalInputRow">
            <label>Downpayment Price (RM)</label>
            <input
              v-model="downpaymentPrice"
              @blur="calculate" />
          </div>
          <div class="calcModalInputRow">
            <label>Loan Period (Years)</label>
            <input
              v-model="loanPeriod"
              @blur="calculate" />
          </div>
          <div class="calcModalInputRow">
            <label>Interest Rate (%)</label>
            <input
              v-model="interestRate"
              @blur="calculate" />
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Calculator',
  data() {
    return {
      calculatorHeight: 430,
      propertyPrice: 0,
      downpaymentPrice: 0,
      loanPeriod: 30,
      interestRate: 3
    }
  },
  methods: {
    showCalculator (show: any = true) {
      if (show) this.$modal.show('calcModal');
      else this.$modal.hide('calcModal'); 
    },
    calculate (e: Event) {
      console.log(e);
    }
  }
});
</script>

<style>
.calc-btn-wrapper {
  @apply absolute;
  bottom: 10px;
  right: 30px;
}
.calcBtn {
  @apply h-20 w-20 relative cursor-pointer bg-white;
  border-radius: 50px;
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.10);
  transition: all .25s;
}
.calcBtn svg {
  @apply absolute text-4xl;
  left: 50%;
  top: 27%;
  transform: translateX(-50%);
}
.calcBtn:hover {
  box-shadow: 0px 0.25rem 1rem rgb(0 0 0 / 0.20);
  transform: scale(1.1);
}
.calcBtn:active {
  transform: scale(0.85);
}
.calcModalBox {
  @apply rounded-md !important;
}
.calcHeader {
  @apply p-1 cursor-grab active:cursor-grabbing bg-gray-200 font-semibold;
}
.calcModalClose {
  @apply absolute text-black font-semibold text-xs;
  top: 8px;
  right: 10px;
}
.calcModalBody {
  @apply flex flex-wrap items-center p-3;
}
.calcModalBodyWrapper {
  @apply flex flex-wrap justify-center items-center w-1/2 px-3;
}
.calcModalInputRow {
  @apply my-2 w-full text-left;
}
.calcModalInputRow > * {
  @apply w-full;
}
.vm--container {
  pointer-events: none;
}
.vm--overlay {
  display: none;
}
</style>