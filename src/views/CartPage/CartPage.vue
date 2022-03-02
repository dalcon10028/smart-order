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
            <div class="text-xl font-bold duration-200 delay-100" data-test="product-name">
              {{ product.name }}
            </div>

            <div class="text-gray-400" data-test="product-eng-name">
              {{ product.engName }}
            </div>
            <div class="flex justify-between mt-3 text-gray-500">
              <span data-test="product-option-name">{{ optionsFormat(product.options) }}</span>
              <span class="font-semibold" data-test="product-price">{{
                displayPrice(product.price)
              }}</span>
            </div>
            <div
              class="flex justify-between text-gray-500"
              v-for="option in product.options.personal"
              :key="option.optionNo"
            >
              <div>
                <span data-test="personal-option-name">{{ option.name }}</span>
                <span>{{ option.quantity }}</span>
              </div>
              <span class="font-semibold" data-test="personal-option-price">{{
                displayPrice(option.unitPrice)
              }}</span>
            </div>
            <div class="flex justify-between mt-3">
              <counter :min="product.baseQuantity" :id="product.name" v-model="product.quantity" />
              <div
                class="text-lg font-bold transition-all duration-200 delay-100 group-hover:text-indigo-500"
                data-test="product-total-price"
              >
                {{ displayPrice(totalPrice(product)) }}
              </div>
            </div>
          </div>
          <button class="inline-flex w-6 h-6 p-1 text-gray-400 border rounded-full">
            <x-icon />
          </button>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="my-3 ml-auto text-3xl font-extrabold mr-7" data-test="amt-due">
          {{ displayPrice(amountDue) }}
        </div>
        <button class="block h-12 font-bold bg-green-600 mx-7 rounded-3xl text-green-50">
          주문하기
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { OrderRepository } from '@/api';
import { displayPrice, optionsFormat } from '@/utils/format';
import { XIcon } from '@heroicons/vue/solid';
import Counter from '@/components/molecules/Counter/Counter.vue';

const productList = ref([]);

const totalPrice = product => {
  const {
    price,
    quantity,
    options: { personal },
  } = product;
  return (
    price * quantity +
    personal.reduce((acc, pn) => acc + (pn.quantity - pn.baseQuantity) * pn.unitPrice, 0)
  );
};

const amountDue = computed(() =>
  productList.value.reduce((acc, product) => acc + totalPrice(product), 0),
);

onMounted(async () => {
  productList.value = await OrderRepository.fetchCart();
});
</script>
