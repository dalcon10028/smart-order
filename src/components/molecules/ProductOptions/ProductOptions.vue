<template>
  <div class="row mt-3">
    <div class="md:w-fit flex justify-center" role="group" data-test="hot-or-ice">
      <button
        type="button"
        class="py-2 px-4 text-lg w-40 font-medium rounded-l-2xl border border-gray-200"
        :class="{
          'bg-red-700': isHot,
          'text-white': isHot,
          'text-gray-900': !isHot,
          'bg-white': !isHot,
          'hover:bg-gray-100': !isHot,
          'hover:text-red-700': !isHot,
        }"
        @click="$emit('update:hotOrIce', HOT)"
        data-test="hot"
      >
        HOT
      </button>
      <button
        type="button"
        class="py-2 px-4 text-lg w-40 font-medium rounded-r-2xl border border-gray-200"
        :class="{
          'bg-blue-700': isIce,
          'text-white': isIce,
          'text-gray-900': !isIce,
          'bg-white': !isIce,
          'hover:bg-gray-100': !isIce,
          'hover:text-blud-700': !isIce,
        }"
        @click="$emit('update:hotOrIce', ICE)"
        data-test="ice"
      >
        ICE
      </button>
    </div>
  </div>
  <div class="row mt-3">
    <h3 class="title-font font-medium text-lg">사이즈</h3>
    <div class="flex justify-between mt-2" data-test="size-option">
      <button
        @click="$emit('update:size', SHORT)"
        v-if="sizeList.find(sizeName => sizeName === SHORT)"
        class="border border-gray-200 rounded-lg w-20 h-20"
        :class="{
          'text-gray-700': size !== SHORT,
          'hover:bg-indigo-500': size !== SHORT,
          'hover:text-white': size !== SHORT,
          'fill-gray-700': size !== SHORT,
          'hover:fill-white': size !== SHORT,
          'bg-indigo-500': size === SHORT,
          'text-white': size === SHORT,
          'fill-white': size === SHORT,
        }"
      >
        <cup-icon class="mx-auto h-10" :size="30" />
        <span>Short</span>
      </button>
      <button
        @click="$emit('update:size', TALL)"
        v-if="sizeList.find(sizeName => sizeName === TALL)"
        class="border border-gray-200 rounded-lg w-20 h-20"
        :class="{
          'text-gray-700': size !== TALL,
          'hover:bg-indigo-500': size !== TALL,
          'hover:text-white': size !== TALL,
          'fill-gray-700': size !== TALL,
          'hover:fill-white': size !== TALL,
          'bg-indigo-500': size === TALL,
          'text-white': size === TALL,
          'fill-white': size === TALL,
        }"
      >
        <cup-icon class="mx-auto h-10" :size="35" />
        <span>Tall</span>
      </button>
      <button
        @click="$emit('update:size', GRANDE)"
        v-if="sizeList.find(sizeName => sizeName === GRANDE)"
        class="border border-gray-200 rounded-lg w-20 h-20"
        :class="{
          'text-gray-700': size !== GRANDE,
          'hover:bg-indigo-500': size !== GRANDE,
          'hover:text-white': size !== GRANDE,
          'fill-gray-700': size !== GRANDE,
          'hover:fill-white': size !== GRANDE,
          'bg-indigo-500': size === GRANDE,
          'text-white': size === GRANDE,
          'fill-white': size === GRANDE,
        }"
      >
        <cup-icon class="mx-auto h-10" :size="40" />
        <span>Grande</span>
      </button>
      <button
        @click="$emit('update:size', VENTI)"
        v-if="sizeList.find(sizeName => sizeName === VENTI)"
        class="border border-gray-200 rounded-lg w-20 h-20"
        :class="{
          'text-gray-700': size !== VENTI,
          'hover:bg-indigo-500': size !== VENTI,
          'hover:text-white': size !== VENTI,
          'fill-gray-700': size !== VENTI,
          'hover:fill-white': size !== VENTI,
          'bg-indigo-500': size === VENTI,
          'text-white': size === VENTI,
          'fill-white': size === VENTI,
        }"
      >
        <cup-icon class="mx-auto h-10" :size="45" />
        <span>Venti</span>
      </button>
    </div>
  </div>
  <div class="row mt-3">
    <h3 class="title-font font-medium text-lg">컵 선택</h3>
    <div class="flex justify-center mt-3">
      <div class="inline-flex" role="group" aria-label="Button group" data-test="cup-option">
        <button
          @click="$emit('update:cup', SHOP)"
          class="h-10 w-28 px-5 transition-colors duration-150 border border-gray-200 rounded-l-lg"
          :class="{
            'text-white': isShop,
            'bg-indigo-500': isShop,
            'text-gray-700': !isShop,
            'bg-white': !isShop,
            'hover:bg-indigo-500': !isShop,
            'hover:text-white': !isShop,
          }"
        >
          매장컵
        </button>
        <button
          @click="$emit('update:cup', INDIVIDUAL)"
          class="h-10 w-28 px-5 transition-colors duration-150 border border-gray-200"
          :class="{
            'text-white': isIndividual,
            'bg-indigo-500': isIndividual,
            'text-gray-700': !isIndividual,
            'bg-white': !isIndividual,
            'hover:bg-indigo-500': !isIndividual,
            'hover:text-white': !isIndividual,
          }"
        >
          개인컵
        </button>
        <button
          @click="$emit('update:cup', DISPOSABLE)"
          class="h-10 w-28 px-5 transition-colors duration-150 border border-gray-200 rounded-r-lg"
          :class="{
            'text-white': isDisposable,
            'bg-indigo-500': isDisposable,
            'text-gray-700': !isDisposable,
            'bg-white': !isDisposable,
            'hover:bg-indigo-500': !isDisposable,
            'hover:text-white': !isDisposable,
          }"
        >
          일회용컵
        </button>
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <h3 class="title-font font-medium text-lg">퍼스널 옵션</h3>
    <ul data-test="personal-option">
      <li class="flex mt-3" v-for="personalOption in personalOptions" :key="personalOption.name">
        <span class="leading-7">{{ personalOption.name }}</span>
        <div class="ml-auto inline-flex flex-row h-7 rounded-lg">
          <button
            @click="
              personalOption.count > personalOption.defaultCount ? personalOption.count-- : null
            "
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <label :for="personalOption.name">
            <input
              :id="personalOption.name"
              type="number"
              class="text-center w-7 h-7 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
              name="custom-input-number"
              :value="personalOption.count"
            />
          </label>
          <button
            @click="personalOption.count++"
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-7 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import CupIcon from '@/components/atoms/CupIcon/CupIcon.vue';
import { ProductTemperature, ProductSize, ProductCup } from '@/constant/product';

export default {
  components: {
    CupIcon,
  },
  props: {
    hotOrIce: {
      type: String,
      required: true,
    },
    sizeList: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    cup: {
      type: String,
      required: true,
    },
    personalOptions: {
      type: Array,
      required: true,
    },
  },
  emits: ['update:hotOrIce', 'update:size', 'update:cup'],
  setup(props) {
    const isHot = computed(() => props.hotOrIce === ProductTemperature.HOT);
    const isIce = computed(() => props.hotOrIce === ProductTemperature.ICE);
    const isShop = computed(() => props.cup === ProductCup.SHOP);
    const isIndividual = computed(() => props.cup === ProductCup.INDIVIDUAL);
    const isDisposable = computed(() => props.cup === ProductCup.DISPOSABLE);

    return {
      isHot,
      isIce,
      isShop,
      isIndividual,
      isDisposable,
      ...ProductTemperature,
      ...ProductSize,
      ...ProductCup,
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
