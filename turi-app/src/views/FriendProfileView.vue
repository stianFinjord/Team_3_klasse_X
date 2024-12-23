<template>
  <div class="friend-profile app-view">
    <div class="lofi-pattern page-background"></div>
    <div class="profile-container info-box">
      <div class="profile-header">
        <img
          :src="friend?.userPicture"
          :alt="friend?.userFullName"
          class="profile-picture"
          @error="handleImageError"
        >
        <h1>{{ friend?.userFullName }}</h1>
        <p class="location">{{ friend?.location }}</p>
      </div>

      <div class="stats-grid">
        <div class="stat-box info-box">
          <h3>Turer</h3>
          <p>{{ friend?.tripsTaken || 0 }}</p>
        </div>
        <div class="stat-box info-box">
          <h3>Kilometer</h3>
          <p>{{ friend?.kilometresWalked || 0 }}</p>
        </div>
        <div class="stat-box info-box">
          <h3>Fysisk Form</h3>
          <p>{{ friend?.userPhysical || 0 }}/5</p>
        </div>
      </div>

      <div class="achievements-section">
        <h2>Prestasjoner</h2>
        <div class="achievements-grid">
          <div v-for="achievement in friend?.achievementView" :key="achievement" class="achievement-card info-box">
            <img :src="`/img/achievement/${achievement}.png`" :alt="achievement" class="achievement-icon">
            <div class="achievement-info">
              <h3>{{ achievement }}</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="friends-section">
        <h2>Venner</h2>
        <div class="friends-grid">
          <div v-for="friendId in friend?.friendsListId?.slice(0, 3)" :key="friendId" class="friend-card info-box">
            <img :src="`/img/users/${friendId.toString()}.jpg`" :alt="friendId" class="friend-image" @error="handleImageError">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import type { User } from '@/types/user'

const route = useRoute()
const userStore = useUserStore()
const friend = ref<User | null>(null)

onMounted(async () => {
  const friendId = route.params.id as string
  const allUsers = userStore.allUsers
  friend.value = allUsers.find(u => u.id.toString() === friendId) || null
})

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/img/placeholder.jpg'
  img.onerror = null
}
</script>

<style scoped>
.friend-profile {
  position: relative;
  min-height: 100vh;
}

.page-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.profile-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: var(--color-background);
}

.profile-header {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-header h1 {
  margin-top: 1rem;
  color: var(--color-primary-dark);
  font-size: 2rem;
  font-weight: 600;
}

.location {
  color: var(--color-text-light);
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-box {
  padding: 1.5rem;
  text-align: center;
}

.stat-box h3 {
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.stat-box p {
  color: var(--color-primary-dark);
  font-size: 1.5rem;
  font-weight: 600;
}

.achievements-section,
.friends-section {
  margin-bottom: 3rem;
}

.achievements-section h2,
.friends-section h2 {
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.achievements-grid,
.friends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.achievement-card,
.friend-card {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.achievement-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.achievement-info h3 {
  color: var(--color-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.friend-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .profile-container {
    padding: 1rem;
  }

  .achievement-card,
  .friend-card {
    flex-direction: column;
    text-align: center;
  }

  .achievement-icon,
  .friend-image {
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
