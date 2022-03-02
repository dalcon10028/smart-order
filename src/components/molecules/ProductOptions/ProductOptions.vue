<template>
  <div class="mt-3 row">
    <div class="flex justify-center md:w-fit" role="group" data-test="hot-or-ice">
      <label :for="ProductTemperature.HOT">
        <input
          name="hot-or-ice"
          class="hidden peer"
          type="radio"
          :id="ProductTemperature.HOT"
          data-test="temperature"
          @change="$emit('update:hotOrIce', ProductTemperature.HOT)"
        />
        <div class="btn-hot">HOT</div>
      </label>
      <label :for="ProductTemperature.ICE">
        <input
          name="hot-or-ice"
          class="hidden peer"
          type="radio"
          :id="ProductTemperature.ICE"
          data-test="temperature"
          @change="$emit('update:hotOrIce', ProductTemperature.ICE)"
        />
        <div class="btn-ice">ICE</div>
      </label>
    </div>
  </div>
  <div class="mt-3 row">
    <h3 class="text-lg font-medium title-font">사이즈</h3>
    <div class="flex justify-between mt-2" data-test="size-option">
      <label :for="size.name" v-for="size in sizeList" :key="size.name">
        <input
          name="cup-size"
          type="radio"
          :id="size.name"
          class="hidden peer"
          @change="$emit('update:cupSize', ProductSize[size.name.toUpperCase()])"
        />
        <div class="btn-cup-size">
          <cup-icon class="h-10 mx-auto" :size="size.iconSize" />
          <span>{{ size.name }}</span>
        </div>
      </label>
    </div>
  </div>
  <div class="mt-3 row">
    <h3 class="text-lg font-medium title-font">컵 선택</h3>
    <div class="flex justify-center mt-3">
      <label :for="type.name" v-for="type in cupTypes" :key="type.name">
        <input
          name="cup-type"
          type="radio"
          :id="type.name"
          data-test="cup-type"
          class="hidden peer"
          @change="$emit('update:cupType', type.name)"
        />
        <div :class="type.style">
          {{ type.label }}
        </div>
      </label>
    </div>
  </div>
  <div class="mt-3 row">
    <h3 class="text-lg font-medium title-font">퍼스널 옵션</h3>
    <ul data-test="personal-option">
      <li class="flex mt-3" v-for="option in personalOptions" :key="option.optionNo">
        <span class="leading-7">{{ option.name }}</span>
        <div class="ml-auto">
          <counter v-model="option.quantity" :min="option.baseQuantity" :id="option.name" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import CupIcon from '@/components/atoms/CupIcon/CupIcon.vue';
import Counter from '@/components/molecules/Counter/Counter.vue';
import { ProductTemperature, ProductSize, ProductCup } from '@/constant/product';

defineProps({
  hotOrIce: {
    type: String,
    required: true,
  },
  sizeList: {
    type: Array,
    required: true,
  },
  cupSize: {
    type: String,
    required: true,
  },
  cupType: {
    type: String,
    required: true,
  },
  personalOptions: {
    type: Array,
    required: true,
  },
});

defineEmits(['update:hotOrIce', 'update:cupSize', 'update:cupType']);

const cupTypes = [
  { label: '매장컵', name: ProductCup.SHOP, style: 'btn-cup-shop' },
  { label: '개인컵', name: ProductCup.INDIVIDUAL, style: 'btn-cup-individual' },
  { label: '일회용컵', name: ProductCup.DISPOSABLE, style: 'btn-cup-disposable' },
];
</script>

<style scoped>
.btn-hot {
  @apply w-40 px-4 py-2 text-lg font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-l-2xl hover:bg-gray-100 hover:text-red-700 peer-checked:bg-red-700 peer-checked:text-white;
}

.btn-ice {
  @apply w-40 px-4 py-2 text-lg font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-r-2xl peer-checked:bg-blue-700 peer-checked:text-white hover:bg-gray-100 hover:text-blue-700;
}

.btn-cup-size {
  @apply w-20 h-20 text-center text-gray-700 border border-gray-200 rounded-lg peer-checked:text-white peer-checked:bg-indigo-500 hover:bg-indigo-500 hover:text-white fill-gray-700 hover:fill-white peer-checked:fill-white;
}

.btn-cup-shop {
  @apply h-10 px-5 leading-10 text-center text-gray-700 transition-colors duration-150 bg-white border border-gray-200 peer-checked:text-white peer-checked:bg-indigo-500 hover:bg-indigo-500 hover:text-white w-28 rounded-l-lg;
}

.btn-cup-individual {
  @apply h-10 px-5 leading-10 text-center text-gray-700 transition-colors duration-150 bg-white border border-gray-200 peer-checked:text-white peer-checked:bg-indigo-500 hover:bg-indigo-500 hover:text-white w-28;
}

.btn-cup-disposable {
  @apply h-10 px-5 leading-10 text-center text-gray-700 transition-colors duration-150 bg-white border border-gray-200 peer-checked:text-white peer-checked:bg-indigo-500 hover:bg-indigo-500 hover:text-white w-28 rounded-r-lg;
}
</style>
