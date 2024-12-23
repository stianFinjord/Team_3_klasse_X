<template>
  <nav class="nav-menu" v-if="userStore.currentUser">
    <div class="nav-content">
      <div class="nav-left">
        <img src="/turilogo.png" alt="Turi Logo" class="nav-logo">
      </div>
      <div class="nav-links">
        <RouterLink to="/my-profile">Min Profil</RouterLink>
        <RouterLink to="/friends">Venner</RouterLink>
        <RouterLink to="/find-friends">Finn Venner</RouterLink>
        <RouterLink to="/trips">Turer</RouterLink>
      </div>
      <div class="nav-right">
        <img
          :src="userStore.currentUser.userPicture"
          :alt="userStore.currentUser.userFullName"
          class="user-avatar"
          @error="handleImageError"
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/img/placeholder.jpg'
  img.onerror = null
}
</script>

<style scoped>
.nav-menu {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background: var(--color-background-soft);
}

.nav-links a.router-link-active {
  color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  float: right;
  cursor: pointer;
  border: 2px solid var(--color-background);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.user-avatar:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .nav-right {
    display: none;
  }
}
</style>
