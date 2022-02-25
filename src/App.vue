<template>
  <div class="w-full h-screen">
    <transition name="fade">
      <router-view />
    </transition>
    <bottom-navigation />
  </div>
</template>

<script setup>
import BottomNavigation from '@/components/organisms/BottomNavigation/BottomNavigation.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
