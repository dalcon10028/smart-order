<template>
  <section
    data-test="bottom-navigation"
    class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
  >
    <div class="flex justify-between" data-test="button-wrap">
      <a
        href="#"
        class="w-full focus:text-indigo-500 hover:text-indigo-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <home-icon class="w-5 h-5 inline-block mb-1" />
        <span class="tab tab-home block text-xs">홈</span>
      </a>
      <a
        href="#"
        class="w-full focus:text-indigo-500 hover:text-indigo-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <shopping-cart-icon class="w-5 h-5 inline-block mb-1" />
        <span class="tab tab-home block text-xs">장바구니</span>
      </a>
      <a
        href="#"
        class="w-full focus:text-indigo-500 hover:text-indigo-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <cog-icon class="w-5 h-5 inline-block mb-1" />
        <span class="tab tab-home block text-xs">설정</span>
      </a>
    </div>
  </section>
</template>

<script>
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/solid';

export default {
  name: 'BottomNavigation',
  components: {
    HomeIcon,
    ShoppingCartIcon,
    CogIcon,
  },
};
</script>

<style></style>
