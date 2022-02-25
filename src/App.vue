<template>
  <div class="w-full h-screen">
    <product-list-page />
    <bottom-navigation />
  </div>
</template>

<script setup>
import ProductListPage from '@/views/ProductListPage/ProductListPage.vue';
import BottomNavigation from '@/components/organisms/BottomNavigation/BottomNavigation.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
