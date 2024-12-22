<template>
  <div class="app-view">
    <h1 class="site-header">Turoversikt</h1>
    <div class="trip-grid-container">
      <div v-for="trip in trips" :key="trip.id" class="trip-card info-box" @click="goToTrip(trip.id)">
        <img :src="trip.tripPicture" :alt="trip.tripName">
        <h2>{{ trip.tripName }}</h2>
        <p>Vurdering: {{ trip.tripRating }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Trip {
  id: number
  tripName: string
  tripPicture: string
  tripInfo: string
  tripKM: number
  tripHeightChart: number
  tripPhysical: number
  tripRating: number
}

const trips = ref<Trip[]>([
  {
    id: 1,
    tripName: "Hardangervidda Rundtur",
    tripPicture: "/img/trip/1.png",
    tripInfo: "Vakker fjellplatå-kryssing med storslått utsikt",
    tripKM: 42,
    tripHeightChart: 1200,
    tripPhysical: 4,
    tripRating: 5
  },
  {
    id: 2,
    tripName: "Kyst Vandring",
    tripPicture: "/img/trip/2.png",
    tripInfo: "Scenisk kystrute med fjordutsikt",
    tripKM: 15,
    tripHeightChart: 300,
    tripPhysical: 2,
    tripRating: 4
  },
  {
    id: 3,
    tripName: "Fjelltopp Eventyr",
    tripPicture: "/img/trip/3.png",
    tripInfo: "Utfordrende fjellklatring med spektakulær utsikt",
    tripKM: 25,
    tripHeightChart: 1800,
    tripPhysical: 5,
    tripRating: 5
  },
  {
    id: 4,
    tripName: "Skogsti Opplevelse",
    tripPicture: "/img/trip/4.png",
    tripInfo: "Rolig skogstur gjennom frodig terreng",
    tripKM: 8,
    tripHeightChart: 150,
    tripPhysical: 2,
    tripRating: 4
  }
])

function goToTrip(id: number) {
  router.push(`/trip/${id}`)
}
</script>

<style scoped>
.trip-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.trip-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.trip-card:hover {
  transform: translateY(-5px);
}

.trip-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.trip-card h2 {
  margin: 0.5rem 0;
}
</style>
