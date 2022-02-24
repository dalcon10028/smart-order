<template>
  <div class="flex justify-center items-center flex-col w-full h-full">
    <login-form v-model:userId="userId" v-model:password="password" />
    <user-info-view :userId="userId" :password="password" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginForm from '@/components/molecules/LoginForm/LoginForm.vue';
import UserInfoView from '@/components/molecules/UserInfoView/UserInfoView.vue';

const userId = ref('');
const password = ref('');
</script>

<style></style>
