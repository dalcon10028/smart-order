<template>
  <form class="bg-white" action="#" method="POST">
    <div class="flex items-center border-2 py-2 px-3 rounded-lg mb-4">
      <label for="userId">
        <input
          class="pl-2 outline-none border-none"
          type="text"
          id="userId"
          placeholder="아이디"
          :value="userId"
          @input="userIdInput"
        />
      </label>
    </div>
    <div class="flex items-center border-2 py-2 px-3 rounded-lg">
      <label for="password">
        <input
          class="pl-2 outline-none border-none"
          type="password"
          id="password"
          data-test="pw"
          placeholder="비밀번호"
          @input="passwordInput"
        />
      </label>
    </div>
    <button
      id="login"
      type="submit"
      class="block w-full bg-indigo-600 mt-4 py-2 rounded-lg text-white font-semibold mb-2"
    >
      Login
    </button>
  </form>
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
  methods: {
    userIdInput({ target: { value } }) {
      this.$emit('update:userId', value);
    },
    passwordInput({ target: { value } }) {
      this.$emit('update:password', value);
    },
  },
};
</script>

<style></style>
