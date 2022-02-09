<template>
  <div class="flex justify-center items-center flex-col w-full h-full">
    <login-form v-model:userId="userId" v-model:password="password" />
    <user-info-view :userId="userId" :password="password" />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import UserInfoView from './UserInfoView.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
    UserInfoView,
  },
  data() {
    return {
      userId: '',
      password: '',
    };
  },
};
</script>

<style></style>
