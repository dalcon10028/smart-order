<template>
  <div class="w-full h-screen">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <Suspense>
          <component :is="Component" />
          <template #fallback> 로딩중... </template>
        </Suspense>
      </transition>
    </router-view>
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

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
