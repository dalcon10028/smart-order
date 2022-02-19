<template>
  <div class="row mt-3">
    <div class="md:w-fit flex justify-center" role="group">
      <button
        type="button"
        class="py-2 px-4 text-lg w-40 font-medium text-gray-900 bg-white rounded-l-2xl border border-gray-200 hover:bg-gray-100 hover:text-red-700"
      >
        HOT
      </button>
      <button
        type="button"
        class="py-2 px-4 text-lg w-40 font-medium text-gray-900 bg-white rounded-r-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
      >
        ICE
      </button>
    </div>
  </div>
  <div class="row mt-3">
    <h3 class="title-font font-medium text-lg">사이즈</h3>
    <div class="flex justify-between mt-2">
      <button
        class="border border-gray-200 rounded-lg w-20 h-20 text-gray-700 hover:bg-indigo-500 hover:text-white fill-gray-700 hover:fill-white"
      >
        <cup-icon class="mx-auto h-10" :size="30" />
        <span>Short</span>
      </button>
      <button
        class="border border-gray-200 rounded-lg w-20 h-20 text-gray-700 hover:bg-indigo-500 hover:text-white fill-gray-700 hover:fill-white"
      >
        <cup-icon class="mx-auto h-10" :size="35" />
        <span>Tall</span>
      </button>
      <button
        class="border border-gray-200 rounded-lg w-20 h-20 text-gray-700 hover:bg-indigo-500 hover:text-white fill-gray-700 hover:fill-white"
      >
        <cup-icon class="mx-auto h-10" :size="40" />
        <span>Grande</span>
      </button>
      <button
        class="border border-gray-200 rounded-lg w-20 h-20 text-gray-700 hover:bg-indigo-500 hover:text-white fill-gray-700 hover:fill-white"
      >
        <cup-icon class="mx-auto h-10" :size="45" />
        <span>Venti</span>
      </button>
    </div>
  </div>
  <div class="row mt-3">
    <h3 class="title-font font-medium text-lg">컵 선택</h3>
    <div class="flex justify-center mt-3">
      <div class="inline-flex" role="group" aria-label="Button group">
        <button
          class="h-10 w-28 px-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-200 rounded-l-lg hover:bg-indigo-500 hover:text-white"
        >
          매장컵
        </button>
        <button
          class="h-10 w-28 px-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-200 hover:bg-indigo-500 hover:text-white"
        >
          개인컵
        </button>
        <button
          class="h-10 w-28 px-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-200 rounded-r-lg hover:bg-indigo-500 hover:text-white"
        >
          일회용컵
        </button>
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <h3 class="title-font font-medium text-lg">퍼스널 옵션</h3>
    <ul>
      <li class="flex mt-3">
        <span class="leading-7">에스프레소 샷</span>
        <div class="ml-auto inline-flex flex-row h-7 rounded-lg">
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
      </li>
    </ul>
  </div>
</template>

<script>
import CupIcon from '@/components/atoms/CupIcon.vue';

export default {
  components: {
    CupIcon,
  },
};
</script>

<style></style>
