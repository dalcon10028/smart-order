<template>
  <section class="text-gray-700 body-font overflow-hidden">
    <div class="container px-5 py-4 mx-auto mb-20">
      <div class="flex justify-between py-2">
        <button class="text-white w-7 rounded-full bg-gray-600 p-1">
          <chevron-left-icon />
        </button>
        <button class="text-white w-7 rounded-full bg-gray-600 p-1">
          <share-icon />
        </button>
      </div>
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          :src="require('@/assets/images/latte.jpeg')"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 inline text-3xl title-font font-medium mb-1">카페 라떼</h1>
          <span class="align-top text-red-600 ml-1">Best</span>
          <p class="leading-relaxed">
            풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝
            얹은 대표적인 카페 라떼
          </p>
          <div class="container mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div class="row">
              <span class="ml-auto title-font font-bold text-xl text-gray-900">5,000 원</span>
            </div>
            <product-options />
          </div>
          <div class="flex mb-3">
            <div class="inline-flex flex-row h-7 rounded-lg">
              <button
                data-action="decrement"
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-l cursor-pointer outline-none"
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <label for="co">
                <input
                  id="co"
                  type="number"
                  class="text-center w-7 h-7 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
                  name="custom-input-number"
                  value="0"
                />
              </label>
              <button
                data-action="increment"
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-r cursor-pointer"
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
            <div class="ml-auto">
              <span class="title-font font-medium text-2xl text-gray-900">5,000 원</span>
            </div>
          </div>
          <div class="flex">
            <button
              class="rounded-full w-8 h-8 bg-none p-0 border-0 inline-flex items-center justify-center text-gray-black hover:text-red-500 ml-4"
            >
              <heart-icon />
            </button>
            <div class="flex ml-auto">
              <button
                class="text-indigo-600 border border-indigo-500 py-2 px-6 hover:bg-indigo-600 hover:text-white rounded-3xl"
              >
                담기
              </button>
              <button
                class="ml-2 text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded-3xl"
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
import { HeartIcon, ChevronLeftIcon, ShareIcon } from '@heroicons/vue/solid';
import ProductOptions from '@/components/molecules/ProductOptions.vue';

export default {
  components: { HeartIcon, ChevronLeftIcon, ShareIcon, ProductOptions },
};
</script>
