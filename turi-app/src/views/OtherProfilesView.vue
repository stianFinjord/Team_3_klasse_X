<template>
  <div class="app-view">
    <h1 class="site-header">Finn venner</h1>
    <div v-if="userStore.nonFriends.length === 0" class="no-users-message">
      Ingen brukere å vise for øyeblikket
    </div>
    <div v-else class="users-grid">
      <div v-for="user in userStore.nonFriends" :key="user.id" class="user-card info-box">
        <img
          :src="user.userPicture"
          :alt="user.userFullName"
          class="profile-picture"
          @error="handleImageError"
        >
        <h3>{{ user.userFullName }}</h3>
        <p>Fysisk form: {{ user.userPhysical }}</p>
        <p class="location">{{ user.location }}</p>
        <button
          @click="sendRequest(user)"
          class="add-friend-btn"
          :class="{ 'request-sent': userStore.hasSentRequestTo(user.id) }"
          :disabled="userStore.hasSentRequestTo(user.id)"
        >
          <span v-if="userStore.hasSentRequestTo(user.id)">
            <span class="checkmark">✓</span> Forespørsel sendt
          </span>
          <span v-else>Legg til venn</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import type { User } from '@/types/user'

const userStore = useUserStore()

onMounted(async () => {
  console.log('OtherProfilesView mounted')
  console.log('Current user:', userStore.currentUser)
  await userStore.loadNonFriends()
  console.log('Non-friends loaded:', userStore.nonFriends)
})

async function sendRequest(user: User) {
  console.log('Sending friend request to user:', user.id)
  const success = await userStore.sendFriendRequest(user.id)
  if (!success) {
    console.error('Failed to send friend request')
  }
}

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/img/placeholder.jpg'
  img.onerror = null
}
</script>

<style scoped>
.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.user-card {
  text-align: center;
  padding: 1rem;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.location {
  color: #666;
  font-style: italic;
  margin: 0.5rem 0;
}

.no-users-message {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.add-friend-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
}

.add-friend-btn:not(:disabled):hover {
  background-color: #45a049;
}

.add-friend-btn.request-sent {
  background-color: #2196F3;
  cursor: default;
}

.checkmark {
  display: inline-block;
  margin-right: 4px;
  font-weight: bold;
}
</style>
