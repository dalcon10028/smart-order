<template>
  <div class="flex flex-col">
    <h2 class="inline-block p-4 text-2xl font-extrabold sm:text-3xl" data-test="product-type">
      {{ state.category }}
    </h2>
    <div class="flex flex-col items-stretch">
      <router-link
        v-for="product in state.products"
        :key="product.name"
        class="flex flex-row px-4 py-8 transition-all duration-200 delay-100 border-t group hover:cursor-pointer"
        data-test="product"
        :to="`/product/${product.productNo}`"
      >
        <img
          class="w-24 rounded-full"
          :src="product.imgUrl"
          :alt="product.nameKr"
          data-test="product-image"
        />

        <div class="flex flex-col pt-2 pl-5 grow">
          <div class="text-xl font-bold duration-200 delay-100 group-hover:text-indigo-500">
            <span data-test="product-name">
              {{ product.nameKr }}
            </span>
            <span
              class="ml-1 text-sm text-red-600 align-top"
              :class="{
                'text-red-600': product.isHot,
                'text-green-600': product.isNewProduct,
                hidden: !(product.isHotProduct || product.isNewProduct),
              }"
              data-test="product-state"
              >{{ product.isHotProduct ? ProductState.HOT : ProductState.NEW }}</span
            >
          </div>

          <div
            class="text-lg font-semibold text-gray-400 transition-all duration-200 delay-100 text-md group-hover:text-indigo-400"
            data-test="product-eng-name"
          >
            {{ product.nameEng }}
          </div>
          <div
            class="text-lg transition-all duration-200 delay-100 group-hover:text-indigo-500"
            data-test="product-price"
          >
            {{ displayPrice(product.price) }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { ProductRepository } from '@/api';
import { displayPrice } from '@/utils/format';
import { ProductState } from '@/constant/product';

const state = reactive({});

onMounted(async () => {
  const { data } = await ProductRepository.fetchProductList();
  const { category = '', products } = data;
  state.category = category;
  state.products = products;
});
</script>
