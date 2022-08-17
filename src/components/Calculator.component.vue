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
          ×
      </button>
      <div class="calcModalBody">
        <div class="calcModalBodyWrapper">
          <div class="calcModalInputRow">
            <label>Property Price (RM)</label>
            <input
              v-model="calculatorData.propertyPrice"
              @keypress="onlyNumber"
              @paste="onlyNumberPaste"
              @blur="calculate($event, 'propertyPrice')" />
          </div>
          <div class="calcModalInputRow">
            <label>Downpayment Price (RM)</label>
            <input
              v-model="calculatorData.downpaymentPrice"
              @keypress="onlyNumber"
              @blur="calculate($event, 'downpaymentPrice')" />
          </div>
          <div class="calcModalInputRow">
            <label>Loan Period (Years)</label>
            <input
              v-model="calculatorData.loanPeriod"
              @keypress="onlyNumber"
              @blur="calculate($event, 'loanPeriod')" />
          </div>
          <div class="calcModalInputRow">
            <label>Interest Rate (%)</label>
            <input
              v-model="calculatorData.interestRate"
              @keypress="onlyNumber"
              @blur="calculate($event, 'interestRate')" />
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
      calculatorData: {
        propertyPrice: '' as any,
        downpaymentPrice: '' as any,
        loanPeriod: 30 as any,
        interestRate: 3 as any,
        totalLoan: '' as any,
        monthlyPay: '' as any,
        totalPay: '' as any,
        totalInterest: '' as any
      },
      keysAllowed: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  },
  methods: {
    showCalculator (show: any = true) {
      if (show) this.$modal.show('calcModal');
      else this.$modal.hide('calcModal');
    },
    onlyNumber(e: KeyboardEvent) {
      const keysAllowed = [...this.keysAllowed];
      const keyPressed: string = e.key;
      // disable `0` input for first number
      // if (e.target?.value == '') delete keysAllowed[0];
      if (!keysAllowed.includes(keyPressed)) e.preventDefault();
    },
    onlyNumberPaste(e: ClipboardEvent) {
      const keysAllowed = [...this.keysAllowed];
      const input = e.clipboardData.getData('text/plain');
      const inputAry = input.split('');
      if (!inputAry.every((n) => keysAllowed.includes(n))) e.preventDefault();

    },
    calculate (e: Event, field: string) {
      const inputAry = e.target?.value.split('');
      if (inputAry[0] == '0') {
        delete inputAry[0];
        this.calculatorData[field] = inputAry.join('');
      }
      if (
        this.calculatorData.propertyPrice &&
        this.calculatorData.downpaymentPrice &&
        this.calculatorData.loanPeriod &&
        this.calculatorData.interestRate
      ) {
        this.totalLoan = this.calculatorData.propertyPrice - this.calculatorData.downpaymentPrice;
      }

      console.log(this.totalLoan);

    }
  }
});
</script>

<style>
.calc-btn-wrapper {
  @apply absolute;
  bottom: 10px;
  right: 50px;
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
  @apply absolute text-black font-semibold text-2xl;
  top: 2px;
  right: 10px;
  transition: .1s all;
}
.calcModalClose:hover {
  @apply text-white;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.8);
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