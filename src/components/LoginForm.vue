<template>
  <form class="bg-white">
    <div class="flex items-center border-2 py-2 px-3 rounded-lg mb-4">
      <input class="pl-2 outline-none border-none" type="text" name="id" placeholder="아이디" />
    </div>
    <div class="flex items-center border-2 py-2 px-3 rounded-lg">
      <input
        class="pl-2 outline-none border-none"
        type="text"
        name="pw"
        data-test="pw"
        placeholder="비밀번호"
      />
    </div>
    <button
      type="submit"
      class="block w-full bg-indigo-600 mt-4 py-2 rounded-lg text-white font-semibold mb-2"
    >
      Login
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
