<template>
  <div class="p-6">
    <h1 class="mb-8 text-3xl font-bold text-gray-900">결제하기</h1>
    <h2 class="mb-5 text-xl" data-test="order-summary">{{ orderSummary }}</h2>
    <h3 class="mb-5 text-base text-gray-500 sm:text-lg" data-test="amount-summary">
      {{ amountSummary }}
    </h3>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <div>
        <label for="payment-type">
          <input name="payment-type" type="radio" id="on-site-payment" class="hidden peer" />
          <div class="btn-payment" data-test="on-site-payment">
            <credit-card-icon class="mr-3 w-7 h-7" />
            <div class="text-left">
              <div class="mb-1 font-sans text-sm font-semibold">현장결제</div>
              <div class="-mt-1 text-xs">현장에서 직접 결제를 합니다.</div>
            </div>
          </div>
        </label>
      </div>
      <div class="mt-10">
        <label for="payment-type">
          <input name="payment-type" type="radio" id="point-payment" class="hidden peer" />
          <div class="btn-payment" data-test="point-payment">
            <cash-icon class="mr-3 w-7 h-7" />
            <div class="text-left">
              <div class="mb-1 font-sans text-sm font-semibold">포인트 결제</div>
              <div class="-mt-1 text-xs">적립된 포인트로 결제를 합니다.</div>
            </div>
          </div>
        </label>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="w-20 h-10 mt-10 text-white bg-indigo-600 rounded-lg shadow-md sm:w-auto hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-300"
        @click="order"
      >
        주문하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { CreditCardIcon, CashIcon } from '@heroicons/vue/solid';

const store = useStore();
const router = useRouter();
const orderSummary = computed(() => store.getters['cart/orderSummary']);
const amountSummary = computed(() => store.getters['cart/amountSummary']);

const order = async () => {
  await store.dispatch('cart/order');
  router.replace('/');
};
</script>

<style scoped>
.btn-payment {
  @apply h-20 w-full shadow-md sm:w-auto bg-indigo-600 hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-300 peer-checked:ring-4 peer-checked:ring-indigo-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5;
}
</style>
