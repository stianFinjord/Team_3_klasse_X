<template>
  <TheNavigation />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<style>
.app-view {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 72px); /* Subtract nav height */
  background: var(--color-background-soft);
}

.info-box {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1rem 0;
}

button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background: #45a049;
}

button:active {
  transform: translateY(1px);
}

input, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, select:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

h1, h2, h3 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.site-header {
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
}

.error-message {
  color: #d32f2f;
  margin: 0.5rem 0;
}

.success-message {
  color: #4CAF50;
  margin: 0.5rem 0;
}
</style>
