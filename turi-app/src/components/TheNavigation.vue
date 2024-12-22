<template>
  <nav class="nav-menu" v-if="userStore.currentUser">
    <div class="nav-content">
      <img src="/turilogo.png" alt="Turi Logo" class="nav-logo">
      <div class="nav-links">
        <RouterLink to="/my-profile">Min Profil</RouterLink>
        <RouterLink to="/friends">Venner</RouterLink>
        <RouterLink to="/find-friends">Finn Venner</RouterLink>
        <RouterLink to="/trips">Turer</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<style scoped>
.nav-menu {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
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
</style>
