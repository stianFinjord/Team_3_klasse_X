<template>
  <div class="app-view">
    <h1 class="site-header">Mine Venner</h1>

    <!-- Pending Friend Requests Section -->
    <div v-if="userStore.friendRequests.length > 0" class="friend-requests info-box">
      <h2>Venneforespørsler</h2>
      <div class="requests-grid">
        <div v-for="request in userStore.friendRequests" :key="request.fromUserId" class="request-card">
          <img
            :src="getUserPicture(request.fromUserId)"
            :alt="getUserName(request.fromUserId)"
            class="profile-picture"
            @error="handleImageError"
          >
          <h3>{{ getUserName(request.fromUserId) }}</h3>
          <div class="request-actions">
            <button @click="acceptRequest(request.fromUserId)" class="accept-btn">
              Godta
            </button>
            <button @click="rejectRequest(request.fromUserId)" class="reject-btn">
              Avslå
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Friends List Section -->
    <div class="friends-grid">
      <div v-for="friend in userStore.allUsers" :key="friend.id" class="friend-card info-box">
        <RouterLink :to="`/friend/${friend.id}`">
          <img
            :src="friend.userPicture"
            :alt="friend.userFullName"
            class="profile-picture"
            @error="handleImageError"
          >
          <h3>{{ friend.userFullName }}</h3>
          <p>Fysisk form: {{ friend.userPhysical }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { RouterLink } from 'vue-router'

const userStore = useUserStore()

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/img/placeholder.jpg'
  img.onerror = null
}

function getUserPicture(userId: number): string {
  const user = userStore.allUsers.find(u => u.id === userId)
  return user?.userPicture || '/img/placeholder.jpg'
}

function getUserName(userId: number): string {
  const user = userStore.allUsers.find(u => u.id === userId)
  return user?.userFullName || 'Unknown User'
}

async function acceptRequest(userId: number) {
  await userStore.acceptFriendRequest(userId)
}

async function rejectRequest(userId: number) {
  await userStore.rejectFriendRequest(userId)
}
</script>

<style scoped>
.friend-requests {
  margin-bottom: 2rem;
  padding: 1rem;
}

.friend-requests h2 {
  margin-bottom: 1rem;
  color: #333;
}

.requests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.request-card {
  text-align: center;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.request-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.accept-btn, .reject-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accept-btn {
  background-color: #4CAF50;
  color: white;
}

.accept-btn:hover {
  background-color: #45a049;
}

.reject-btn {
  background-color: #f44336;
  color: white;
}

.reject-btn:hover {
  background-color: #da190b;
}

.friends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.friend-card {
  text-align: center;
  padding: 1rem;
}

.friend-card a {
  text-decoration: none;
  color: inherit;
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

@media (max-width: 768px) {
  .friends-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .profile-picture {
    width: 100px;
    height: 100px;
  }
}
</style>
