<template>
  <section class="overflow-hidden">
    <div class="flex flex-col mb-20">
      <h3 class="inline-block p-4 text-xl font-extrabold sm:text-3xl" data-test="product-type">
        주문메뉴
      </h3>
      <div class="flex flex-col items-stretch">
        <div
          v-for="product in productList"
          :key="product.name"
          class="flex flex-row px-4 py-8 transition-all duration-200 delay-100 border-t"
          data-test="product"
        >
          <img
            class="rounded-full w-28 h-28"
            :src="product.imageUrl"
            :alt="product.name"
            data-test="product-image"
          />
          <div class="flex flex-col pt-2 pl-5 grow">
            <div class="text-xl font-bold duration-200 delay-100">
              {{ product.name }}
            </div>

            <div class="text-gray-400" data-test="product-eng-name">
              {{ product.engName }}
            </div>
            <div class="flex justify-between mt-3 text-gray-500">
              <span>{{ optionsFormat(product.options) }}</span>
              <span class="font-semibold">4,500원</span>
            </div>
            <div
              class="flex justify-between text-gray-500"
              v-for="option in product.options.personal"
              :key="option.optionNo"
            >
              <span>{{ option.name }} {{ option.quantity }}</span>
              <span class="font-semibold">{{ displayPrice(option.unitPrice) }}</span>
            </div>
            <!-- <div class="flex justify-between text-gray-500">
              <span>바닐라 시럽 1</span>
              <span class="font-semibold">600원</span>
            </div>
            <div class="flex justify-between text-gray-500">
              <span>에스프레소 샷 3</span>
              <span class="font-semibold">600원</span>
            </div> -->
            <div class="flex justify-between mt-3">
              <counter min="1" :id="product.name" v-model="product.quantity" />
              <div
                class="text-lg font-bold transition-all duration-200 delay-100 group-hover:text-indigo-500"
                data-test="product-price"
              >
                {{ displayPrice(product.price) }}
              </div>
            </div>
          </div>
          <button class="inline-flex w-6 h-6 p-1 text-gray-400 border rounded-full">
            <x-icon />
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="my-3 ml-auto text-3xl font-extrabold mr-7">{{ displayPrice(amountDue) }}</div>
        <button class="block h-12 font-bold bg-green-600 mx-7 rounded-3xl text-green-50">
          주문하기
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { fetchCart } from '@/api';
import { displayPrice, optionsFormat } from '@/utils/format';
import { XIcon } from '@heroicons/vue/solid';
import Counter from '@/components/molecules/Counter/Counter.vue';

const productList = ref([]);

const amountDue = computed(() =>
  productList.value.reduce((acc, { price, quantity, options: { personal } }) => {
    const productPrice = price * quantity;
    const productOptionsPrice = personal.reduce(
      (acc2, { quantity: qty, unitPrice, baseQuantity: baseQty }) =>
        acc2 + (qty - baseQty) * unitPrice,
      0,
    );
    return acc + productPrice + productOptionsPrice;
  }, 0),
);

onMounted(async () => {
  productList.value = await fetchCart();
});
</script>
