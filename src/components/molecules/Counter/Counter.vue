<template>
  <div class="inline-flex flex-row h-7">
    <button
      @click="decrement"
      class="h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer w-7 hover:text-gray-700 hover:bg-gray-400"
      data-test="btn-minus"
    >
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <label :for="id">
      <input
        :id="id"
        type="number"
        class="flex items-center h-full font-semibold text-center text-gray-700 bg-gray-300 outline-none w-7 text-md hover:text-black focus:text-black md:text-basecursor-default"
        :value="modelValue"
        data-test="count-view"
      />
    </label>
    <button
      @click="increment"
      class="h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400 w-7"
      data-test="btn-plus"
    >
      <span class="m-auto text-2xl font-thin">+</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  min: {
    type: [Number, String],
    default: Number.MIN_SAFE_INTEGER,
    validator(value) {
      return !Number.isNaN(Number(value));
    },
  },
  max: {
    type: [Number, String],
    default: Number.MAX_SAFE_INTEGER,
    validator(value) {
      return !Number.isNaN(Number(value));
    },
  },
  modelValue: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const increment = () => {
  if (props.modelValue === Number(props.max)) return;
  emit('update:modelValue', props.modelValue + 1);
};

const decrement = () => {
  if (props.modelValue === Number(props.min)) return;
  emit('update:modelValue', props.modelValue - 1);
};
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
