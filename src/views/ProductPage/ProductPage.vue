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
          :alt="title"
          :src="imageUrl"
          data-test="product-image"
        />
        <div class="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
          <h1
            class="inline mb-1 text-3xl font-medium text-gray-900 title-font"
            data-test="product-title"
          >
            {{ title }}
          </h1>
          <span class="ml-1 text-red-600 align-top" v-if="isBest" data-test="product-state"
            >Best</span
          >
          <p class="leading-relaxed" data-test="product-discription">
            {{ discription }}
          </p>
          <div class="container items-center pb-5 mt-6 mb-5 border-b-2 border-gray-200">
            <div class="row">
              <span
                class="ml-auto text-xl font-bold text-gray-900 title-font"
                data-test="product-price"
                >{{ productPrice }}</span
              >
            </div>
            <product-options
              v-model:hot-or-ice="hotOrIce"
              v-model:size-list="sizeList"
              v-model:size="size"
              v-model:cup="cup"
              :personalOptions="personalOptions"
            />
          </div>
          <div class="flex mb-3">
            <div class="rounded-lg" data-test="amount-control">
              <counter v-model="productCount" min="1" id="product-count" />
            </div>
            <div class="ml-auto">
              <span class="text-2xl font-medium text-gray-900 title-font" data-test="total-price">{{
                totalPrice
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

<script>
import { computed, ref } from 'vue';
import { HeartIcon, ChevronLeftIcon, ShareIcon } from '@heroicons/vue/solid';
import { ProuctState } from '@/constant/product';
import Counter from '@/components/molecules/Counter/Counter.vue';
import ProductOptions from '@/components/molecules/ProductOptions/ProductOptions.vue';

const mockProduct = {
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg',
  title: '카페 라떼',
  state: 'BEST',
  discription:
    '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
  price: 5000,
  size_list: ['SHORT', 'TALL', 'GRANDE', 'VENTI'],
  personal_options: [{ name: '에스프레소 샷', price: 500, count: 1, defaultCount: 1 }],
};

export default {
  components: { HeartIcon, ChevronLeftIcon, ShareIcon, ProductOptions, Counter },
  setup() {
    const toWon = num => `${num.toLocaleString('ko-KR')} 원`;

    const imageUrl = mockProduct.image_url;
    const { title, state, discription } = mockProduct;
    const productCount = ref(1);

    // options
    const hotOrIce = ref('HOT');
    const size = ref('SHORT');
    const sizeList = mockProduct.size_list;
    const cup = ref('SHOP');
    const personalOptions = ref(mockProduct.personal_options);

    const isBest = computed(() => ProuctState[state] === ProuctState.BEST);
    const productPrice = computed(() => toWon(mockProduct.price));
    const totalPrice = computed(() => {
      const personalOptionsTotalPrice = personalOptions.value.reduce(
        (acc, { price, count, defaultCount }) => acc + price * (count - defaultCount),
        0,
      );
      const ProductTotalPrice = mockProduct.price * productCount.value;
      return toWon(personalOptionsTotalPrice + ProductTotalPrice);
    });

    return {
      imageUrl,
      title,
      isBest,
      discription,
      productCount,
      productPrice,
      totalPrice,
      hotOrIce,
      size,
      sizeList,
      cup,
      personalOptions,
    };
  },
};
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
