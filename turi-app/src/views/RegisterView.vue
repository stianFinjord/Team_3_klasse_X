<template>
  <div class="app-view">
    <h2 class="header">Registrer deg</h2>
    <input
      type="text"
      v-model="email"
      placeholder="Email"
    >
    <input
      type="password"
      v-model="password"
      placeholder="Passord"
    >
    <input
      type="text"
      v-model="fullName"
      placeholder="Fullt navn"
    >
    <button @click="handleRegister">Registrer</button>
    <button @click="router.push('/login')">Tilbake til innlogging</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { registerUserApi } from '@/services/authService'

const router = useRouter()
const userStore = useUserStore()

const email = ref('')
const password = ref('')
const fullName = ref('')

async function handleRegister() {
  const user = await registerUserApi(email.value, password.value, fullName.value)

  if (user) {
    userStore.setCurrentUser(user)
    router.push('/my-profile')
  } else {
    alert('Registrering feilet!')
  }
}
</script>

<style scoped>
.app-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  width: 200px;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
