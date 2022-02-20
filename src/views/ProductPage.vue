<template>
  <section class="text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-4 mx-auto mb-20">
      <div class="flex justify-between py-2">
        <button class="text-white w-7 rounded-full bg-gray-600 p-1" data-test="back-button">
          <chevron-left-icon />
        </button>
        <button class="text-white w-7 rounded-full bg-gray-600 p-1" data-test="share-button">
          <share-icon />
        </button>
      </div>
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          :alt="title"
          :src="imageUrl"
          data-test="product-image"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1
            class="text-gray-900 inline text-3xl title-font font-medium mb-1"
            data-test="product-title"
          >
            {{ title }}
          </h1>
          <span class="align-top text-red-600 ml-1" v-if="isBest" data-test="product-state"
            >Best</span
          >
          <p class="leading-relaxed" data-test="product-discription">
            {{ discription }}
          </p>
          <div class="container mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div class="row">
              <span
                class="ml-auto title-font font-bold text-xl text-gray-900"
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
            <div class="inline-flex flex-row h-7 rounded-lg" data-test="amount-control">
              <button
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-l cursor-pointer outline-none"
                @click="productCount > 1 ? productCount-- : ''"
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <label for="product-count">
                <input
                  id="product-count"
                  type="number"
                  class="text-center w-7 h-7 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                  name="custom-input-number"
                  :value="productCount"
                />
              </label>
              <button
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-r cursor-pointer"
                @click="productCount++"
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
            <div class="ml-auto">
              <span class="title-font font-medium text-2xl text-gray-900" data-test="total-price">{{
                totalPrice
              }}</span>
            </div>
          </div>
          <div class="flex">
            <button
              class="rounded-full w-8 h-8 bg-none p-0 border-0 inline-flex items-center justify-center text-gray-black hover:text-red-500 ml-4"
              data-test="wish-button"
            >
              <heart-icon />
            </button>
            <div class="flex ml-auto">
              <button
                class="text-indigo-600 border border-indigo-500 py-2 px-6 hover:bg-indigo-600 hover:text-white rounded-3xl"
                data-test="cart-button"
              >
                담기
              </button>
              <button
                class="ml-2 text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded-3xl"
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
import ProductOptions from '@/components/molecules/ProductOptions.vue';

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
  components: { HeartIcon, ChevronLeftIcon, ShareIcon, ProductOptions },
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
