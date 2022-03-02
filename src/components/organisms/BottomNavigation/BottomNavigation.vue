<template>
  <section
    data-test="bottom-navigation"
    class="fixed inset-x-0 bottom-0 z-10 block bg-white shadow"
  >
    <div class="flex justify-between" data-test="button-wrap">
      <router-link
        v-for="nav in navs"
        :to="nav.link"
        :key="nav.title"
        class="justify-center inline-block w-full pt-2 pb-1 text-center hover:text-indigo-500"
        active-class="text-indigo-500"
      >
        <component :is="nav.icon" class="inline-block w-5 h-5 mb-1" />
        <span class="block text-xs tab tab-home">{{ nav.title }}</span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/solid';

const navs = [
  { icon: HomeIcon, title: '홈', link: '/home' },
  { icon: ShoppingCartIcon, title: '장바구니', link: '/cart' },
  { icon: CogIcon, title: '설정', link: '/setting' },
];
</script>

<style></style>
