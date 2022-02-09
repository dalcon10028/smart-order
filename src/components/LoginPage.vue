<template>
  <div class="flex justify-center items-center flex-col w-full h-full">
    <login-form />
    <user-info-view />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import UserInfoView from './UserInfoView.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm, UserInfoView,
  },
};
</script>

<style>

</style>
