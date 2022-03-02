<template>
  <section class="overflow-hidden text-gray-700 body-font">
    <div class="container px-5 py-4 mx-auto mb-20">
      <div class="flex justify-between py-2">
        <button class="p-1 text-white bg-gray-600 rounded-full w-7" data-test="back-button">
          <chevron-left-icon />
        </button>
        <button class="p-1 text-white bg-gray-600 rounded-full w-7" data-test="share-button">
          <share-icon />
        </button>
      </div>
      <div class="flex flex-wrap mx-auto lg:w-4/5">
        <img
          class="object-cover object-center w-full border border-gray-200 rounded lg:w-1/2"
          :alt="product.name"
          :src="product.imageUrl"
          data-test="product-image"
        />
        <div class="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
          <h1
            class="inline mb-1 text-3xl font-medium text-gray-900 title-font"
            data-test="product-title"
          >
            {{ product.name }}
          </h1>
          <span class="ml-1 text-red-600 align-top" v-if="product.isBest" data-test="product-state"
            >Best</span
          >
          <p class="leading-relaxed" data-test="product-discription">
            {{ product.discription }}
          </p>
          <div class="container items-center pb-5 mt-6 mb-5 border-b-2 border-gray-200">
            <div class="row">
              <span
                class="ml-auto text-xl font-bold text-gray-900 title-font"
                data-test="product-price"
                >{{ displayPrice(product.price) }}</span
              >
            </div>
            <product-options
              v-model:hot-or-ice="order.hotOrIce"
              v-model:cup-size="order.cupSize"
              v-model:cup-type="order.cupType"
              v-model:personal-options="order.personalOptions"
              :size-list="product.cupSize"
            />
          </div>
          <div class="flex mb-3">
            <div class="rounded-lg" data-test="amount-control">
              <counter v-model="order.quantity" min="1" id="product-count" />
            </div>
            <div class="ml-auto">
              <span class="text-2xl font-medium text-gray-900 title-font" data-test="total-price">{{
                displayPrice(order.totalPrice)
              }}</span>
            </div>
          </div>
          <div class="flex">
            <button
              class="inline-flex items-center justify-center w-8 h-8 p-0 ml-4 border-0 rounded-full bg-none text-gray-black hover:text-red-500"
              data-test="wish-button"
            >
              <heart-icon />
            </button>
            <div class="flex ml-auto">
              <button
                class="px-6 py-2 text-indigo-600 border border-indigo-500 hover:bg-indigo-600 hover:text-white rounded-3xl"
                data-test="cart-button"
              >
                담기
              </button>
              <button
                class="px-6 py-2 ml-2 text-white bg-indigo-500 border-0 hover:bg-indigo-600 rounded-3xl"
                data-test="direct-order-button"
              >
                주문하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue';
import { HeartIcon, ChevronLeftIcon, ShareIcon } from '@heroicons/vue/solid';
import Counter from '@/components/molecules/Counter/Counter.vue';
import ProductOptions from '@/components/molecules/ProductOptions/ProductOptions.vue';
import { fetchProduct } from '@/api';
import { displayPrice } from '@/utils/format';

const product = ref({
  productNo: null,
  name: null,
  discription: null,
  isBest: null,
  imageUrl: null,
  price: 0,
  cupSize: [{ name: '', iconSize: 0 }],
});

const order = reactive({
  quantity: 1,
  hotOrIce: '',
  cupSize: '',
  cupType: '',
  personalOptions: [
    {
      optionNo: 1,
      quantity: 1,
      name: '에스프레소 샷',
      unitPrice: 500,
      baseQuantity: 1,
    },
    {
      optionNo: 2,
      quantity: 0,
      name: '시럽',
      unitPrice: 300,
      baseQuantity: 0,
    },
  ],
  totalPrice: computed(() => {
    const optionsPrice = order.personalOptions.reduce(
      (acc, { quantity, unitPrice, baseQuantity }) => acc + unitPrice * (quantity - baseQuantity),
      0,
    );
    const ProductsPrice = order.quantity * product.value.price;
    return optionsPrice + ProductsPrice;
  }),
});

onMounted(async () => {
  product.value = await fetchProduct().then(data => data.product);
});
</script>
