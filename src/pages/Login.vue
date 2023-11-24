<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth'
  import { ref } from 'vue'

  const auth = useAuthStore()
  const username = ref('')
  const router = useRouter()

  const handleLogin = () => {
    auth.login(username.value)
    router.push('/')
  }
</script>

<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-md py-8 px-6">
    <h1 class="mb-4 text-[20px] font-outfit">Login Page</h1>
      <label for="username" class="block mb-2 text-sm font-medium text-gray-700">Username</label>
      <input v-model="username" id="username" name="username" type="text" class="w-full mb-5 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#41B883]" autocomplete="off" required />
      <button @click="handleLogin()" class="w-full bg-[#41B883] p-2 font-outfit text-white text-[16px] rounded-lg">Login</button>
  </div>
</template>