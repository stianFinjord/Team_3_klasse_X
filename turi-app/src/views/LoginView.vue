<template>
  <div class="app-view">
    <h2 class="header">Innlogging</h2>
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
    <button @click="handleLogin">Logg inn</button>
    <button @click="router.push('/register')">Registrer deg</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const email = ref('test@example.com')
const password = ref('password123')

async function handleLogin() {
  try {
    // For development, create a mock user
    const mockUser = {
      id: 1,
      userName: "testuser",
      userFullName: "Test User",
      email: email.value,
      userPicture: "/img/users/TestUser.jpg",
      userPhysical: 3,
      location: "Oslo",
      friendsListId: [3, 7], // Friends with Kevin and Kim
      pendingRequests: [2], // Has a pending request from Erik Hansen
      kilometresWalked: 50,
      tripsTaken: 5,
      achievementView: ["10km", "20km", "50km", "5trips"]
    }

    console.log('Setting current user:', mockUser)
    await userStore.setCurrentUser(mockUser)
    console.log('User store initialized')
    router.push('/my-profile')
  } catch (error) {
    console.error('Error during login:', error)
    alert('Det oppstod en feil under innlogging. Prøv igjen senere.')
  }
}
</script>

<style scoped>
.app-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

input {
  padding: 0.5rem;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:last-child {
  background-color: #2196F3;
}

button:last-child:hover {
  background-color: #1976D2;
}
</style>
