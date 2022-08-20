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
      :resizable="true"
      :adaptive="true"
      :clickToClose="false"
      :height="calculatorHeight"
      :width="calculatorWidth"
      classes="calcModalBox">
      <div class="calcHeader">Calculator <span class="font-mono font-normal text-sm">(DRAG ME)</span></div>
      <button
        class="calcModalClose"
        @click="showCalculator(false)">
          ×
      </button>
      <div class="calcModalBody">
        <div class="calcModalInputWrapper">
          <div class="calcModalInputRow">
            <label>Property Price</label>
            <input
              v-model="calcData.propertyPrice"
              @keypress="onlyNumber"
              @paste="onlyNumberPaste"
              @blur="handleInput($event, 'propertyPrice')" />
          </div>
          <div class="calcModalInputRow">
            <label>Downpayment Price</label>
            <input
              v-model="calcData.downpaymentPrice"
              @keypress="onlyNumber"
              @paste="onlyNumberPaste"
              @blur="handleInput($event, 'downpaymentPrice')" />
          </div>
          <div class="calcModalInputRow">
            <label>Loan Period (Years)</label>
            <input
              v-model="calcData.loanPeriod"
              @keypress="onlyNumber"
              @paste="onlyNumberPaste"
              @blur="handleInput($event, 'loanPeriod')" />
          </div>
          <div class="calcModalInputRow">
            <label>Interest Rate (%)</label>
            <input
              v-model="calcData.interestRate"
              @keypress="onlyNumber"
              @paste="onlyNumberPaste"
              @blur="handleInput($event, 'interestRate')" />
          </div>
        </div>
        <div class="calcModalResultWrapper">
          <div class="calcModalResultRow">
            <div>Total Principle:</div>
            <div>{{ Numfmt.thousandSeparator(Numfmt.decimalFormatter(calcData.totalPrinciple)) }}</div>
          </div>
          <div class="calcModalResultRow">
            <div>Total Repayment:</div>
            <div>{{ Numfmt.thousandSeparator(Numfmt.decimalFormatter(calcData.totalPay)) }}</div>
          </div>
          <div class="calcModalResultRow">
            <div>Total Interest:</div>
            <div>{{ Numfmt.thousandSeparator(Numfmt.decimalFormatter(calcData.totalInterest)) }}</div>
          </div>
          <div class="calcModalResultRow">
            <div>Monthly Repayment:</div>
            <div>{{ Numfmt.thousandSeparator(Numfmt.decimalFormatter(calcData.monthlyPay)) }}</div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import { NumberFormatter } from '@/utils';
import Vue from 'vue';

export default Vue.extend({
  name: 'Calculator',
  data() {
    return {
      Numfmt: new NumberFormatter();
      calculatorHeight: 400,
      calculatorWidth: 500,
      calcData: {
        propertyPrice: '' as any,
        downpaymentPrice: '' as any,
        loanPeriod: 30 as any,
        interestRate: 3 as any,
        totalPrinciple: '' as any,
        monthlyPay: '' as any,
        totalPay: '' as any,
        totalInterest: '' as any,
        payDetails: [] as number[][]
      },
      keysAllowed: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  },
  created() {
  },
  destroyed() {
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
    handleInput (e: Event, field: string) {
      // check if invalid input with `0` as first number
      const inputAry = e.target?.value.split('');
      if (inputAry.length > 1 && inputAry[0] == '0') {
        delete inputAry[0];
        this.calcData[field] = inputAry.join('');
      }
      this.calculate();
    },
    calculate() {
      // proceed only if all four values present
      if (
        !this.calcData.propertyPrice ||
        !this.calcData.downpaymentPrice ||
        !this.calcData.loanPeriod ||
        !this.calcData.interestRate
      ) return;

      // proceed only if propertyPrice > downpaymentPrice
      this.calcData.totalPrinciple = this.calcData.propertyPrice - this.calcData.downpaymentPrice;
      if (this.calcData.totalPrinciple <= 0) {
        this.calcData.propertyPrice = '';
        this.calcData.downpaymentPrice = '';
        this.calcData.totalPrinciple = '';
        return;
      }

      // TODO add monthly repayment details calculation

      let monthlyInterestRate = this.calcData.interestRate / 100 / 12;
      let loanPeriodInMonth = this.calcData.loanPeriod * 12;

      this.calcData.monthlyPay = ( this.calcData.totalPrinciple * monthlyInterestRate * Math.pow(1+monthlyInterestRate, loanPeriodInMonth) ) /
      ( Math.pow(1+monthlyInterestRate, loanPeriodInMonth) - 1 );

      this.calcData.totalPay = (this.calcData.monthlyPay * loanPeriodInMonth);

      this.calcData.totalInterest = (this.calcData.totalPay - this.calcData.totalPrinciple);

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
  @apply flex flex-wrap items-start p-3;
}
.calcModalInputWrapper {
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
.calcModalResultWrapper {
  @apply flex flex-wrap justify-center items-center w-1/2 px-3;
}

.calcModalResultRow {
  @apply w-full my-3;
}

.calcModalResultRow:first-child {
  @apply mt-2;
}

.calcModalResultRow div {
  @apply w-full;
}

.calcModalResultRow div:last-child {
  @apply h-7 py-1 bg-gray-50 font-bold;
}
</style>