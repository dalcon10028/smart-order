<template>
  <div class="w-full h-screen">
    <login-page />
    <bottom-navigation />
  </div>
</template>

<script setup>
import BottomNavigation from '@/components/organisms/BottomNavigation.vue';
import LoginPage from '@/pages/LoginPage.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
