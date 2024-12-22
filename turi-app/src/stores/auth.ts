import { defineStore } from 'pinia'
import { loginUserApi, registerUserApi } from '@/services/authService'
import { useUserStore } from './user'

interface RegisterForm {
  userName: string
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  actions: {
    async login(email: string, password: string) {
      const user = await loginUserApi(email, password)
      if (user) {
        const userStore = useUserStore()
        userStore.setCurrentUser(user)
        return true
      }
      return false
    },

    async register(form: RegisterForm) {
      const user = await registerUserApi(
        form.userName,
        form.email,
        form.password
      )
      return user !== null
    }
  }
}) 