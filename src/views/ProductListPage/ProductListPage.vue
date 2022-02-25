<template>
  <div class="flex flex-col">
    <h2 class="inline-block p-4 text-2xl font-extrabold sm:text-3xl" data-test="product-type">
      {{ state.productType }}
    </h2>
    <div class="flex flex-col items-stretch">
      <div
        v-for="product in state.productList"
        :key="product.name"
        class="flex flex-row px-4 py-8 transition-all duration-200 delay-100 border-t group hover:cursor-pointer"
        data-test="product"
      >
        <img
          class="w-24 rounded-full"
          :src="product.imageUrl"
          :alt="product.name"
          data-test="product-image"
        />

        <div class="flex flex-col pt-2 pl-5 grow">
          <div class="text-xl font-bold duration-200 delay-100 group-hover:text-indigo-500">
            <span data-test="product-name">
              {{ product.name }}
            </span>
            <span
              class="ml-1 text-sm text-red-600 align-top"
              :class="{
                'text-red-600': product.isHot,
                'text-green-600': product.isNew,
                hidden: !(product.isHot || product.isNew),
              }"
              data-test="product-state"
              >{{ product.isHot ? ProuctState.HOT : ProuctState.NEW }}</span
            >
          </div>

          <div
            class="text-lg font-semibold text-gray-400 transition-all duration-200 delay-100 text-md group-hover:text-indigo-400"
            data-test="product-eng-name"
          >
            {{ product.engName }}
          </div>
          <div
            class="text-lg transition-all duration-200 delay-100 group-hover:text-indigo-500"
            data-test="product-price"
          >
            {{ displayPrice(product.price) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { fetchProductList } from '@/api';
import { displayPrice } from '@/utils/format';
import { ProuctState } from '@/constant/product';

const state = reactive({});

onMounted(async () => {
  const { productType, productList } = await fetchProductList();
  state.productType = productType;
  state.productList = productList;
});
</script>
