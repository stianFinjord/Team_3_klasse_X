<template>
  <div class="app-view">
    <div v-if="userStore.currentUser" class="info-box">
      <div class="profile-header">
        <img :src="userStore.currentUser.userPicture || '/img/placeholder.jpg'" alt="Profile picture">
        <h2>{{ userStore.currentUser.userName || 'Bruker' }}</h2>
      </div>

      <div class="physical-form">
        <label for="physical-form">Min fysiske form:</label>
        <select id="physical-form" v-model="physicalForm">
          <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
        </select>
      </div>

      <button @click="handleUpdatePhysicalForm" :disabled="isUpdating">
        {{ isUpdating ? 'Oppdaterer...' : 'Lagre endringer' }}
      </button>
      <button @click="router.push('/friends')">Mine Venner</button>

      <div class="achievements">
        <p>Mine achievements</p>
        <div class="achievements-grid">
          <div v-for="(achievement, index) in userAchievements" :key="index" class="achievement-card">
            <img :src="`/img/achievement/Achievement_badge_${index + 1}.png`" alt="Achievement badge">
            <p>{{ achievement.name }}</p>
            <small>{{ achievement.description }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { updateUserPhysicalForm, getUserAchievements } from '@/services/userService'
import type { Achievement } from '@/types/achievement'

const router = useRouter()
const userStore = useUserStore()
const isUpdating = ref(false)

const physicalForm = ref(userStore.currentUser?.userPhysical || 1)
const userAchievements = ref<Achievement[]>([])

async function handleUpdatePhysicalForm() {
  if (!userStore.currentUser) return

  try {
    isUpdating.value = true
    await updateUserPhysicalForm(userStore.currentUser.id, physicalForm.value)
    await userStore.refreshCurrentUser()
    alert('Fysisk form oppdatert!')
  } catch (error) {
    console.error('Failed to update physical form:', error)
    alert('Kunne ikke oppdatere fysisk form')
  } finally {
    isUpdating.value = false
  }
}

onMounted(async () => {
  if (userStore.currentUser) {
    try {
      userAchievements.value = await getUserAchievements(userStore.currentUser.id)
    } catch (error) {
      console.error('Failed to fetch achievements:', error)
    }
  }
})
</script>

<style scoped>
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
}

.achievements {
  width: 100%;
  margin-top: 2rem;
}

.achievements p {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

.info-box {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-header img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-header h2 {
  font-size: 2rem;
  margin: 1rem 0;
}

.physical-form {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.physical-form select {
  width: 100px;
}

.achievement-card {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.achievement-card:hover {
  transform: translateY(-5px);
}

.achievement-card img {
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;
}

.achievement-card p {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}
</style>
