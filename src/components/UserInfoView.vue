<template>
  <p class="text-lg font-normal text-gray-600 my-2">아이디: {{ userId }}</p>
  <p class="text-lg font-normal text-gray-600 my-2">비밀번호: {{ password }}</p>
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
