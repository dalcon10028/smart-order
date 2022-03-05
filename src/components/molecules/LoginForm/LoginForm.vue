<template>
  <form class="flex-row bg-white">
    <transition appear name="slide-fade">
      <div
        v-if="loginError.alert"
        class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
        role="alert"
      >
        <information-circle-icon class="w-5 h-5 text-red-700" />
        <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
          {{ loginError.message || '로그인 에러!' }}
        </div>
        <button
          type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8"
          data-collapse-toggle="alert-2"
          aria-label="Close"
          @click="loginError.alert = false"
        >
          <span class="sr-only">Close</span>
          <x-icon class="w-5 h-5 text-red-700" />
        </button>
      </div>
    </transition>
    <div class="flex items-center px-3 py-2 mb-4 border-2 rounded-lg w-96">
      <label for="userId" class="w-full">
        <input
          class="w-full pl-2 border-none outline-none"
          type="text"
          id="userId"
          placeholder="아이디"
          :value="userId"
          @input="$emit('update:userId', $event.target.value)"
        />
      </label>
    </div>
    <div class="flex items-center px-3 py-2 border-2 rounded-lg w-96">
      <label for="password" class="w-full">
        <input
          class="w-full pl-2 border-none outline-none"
          type="password"
          id="password"
          data-test="pw"
          placeholder="비밀번호"
          @input="$emit('update:password', $event.target.value)"
        />
      </label>
    </div>
    <button
      id="login"
      type="submit"
      class="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-indigo-600 rounded-lg"
      @click.prevent="userLogin"
    >
      로그인
    </button>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { InformationCircleIcon, XIcon } from '@heroicons/vue/solid';
import { ErrorMessage } from '@/constant/error';

const store = useStore();
const router = useRouter();
const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
defineEmits(['update:userId', 'update:password']);

const loginError = reactive({
  alert: false,
  type: '',
  message: '',
});

const userLogin = async () => {
  try {
    await store.dispatch('user/userLogin', {
      username: props.userId,
      password: props.password,
    });
    router.push('/');
  } catch ({ response }) {
    loginError.message = ErrorMessage[response.data.message];
    loginError.alert = true;
  }
};
</script>

<style scoped>
.slide-fade-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.slide-fade-leave-active {
  transition: opacity 1s;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>
