import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const username = ref('')
  
  const login = (name: string) => {
    username.value = name
  }

  return { username, login  }
})