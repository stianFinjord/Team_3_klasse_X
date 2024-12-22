<template>
  <div class="app-view">
    <div v-if="trip" class="trip-container">
      <img :src="trip.tripPicture" :alt="trip.tripName">

      <div class="content-row">
        <div class="info-box">
          <h2>{{ trip.tripName }}</h2>
          <p>{{ trip.tripInfo }}</p>
          <p>Lengde på tur: {{ trip.tripKM }} km</p>
          <p>Høyde på tur: {{ trip.tripHeightChart }} meter</p>
          <p>Vanskelighetsgrad: {{ trip.tripPhysical }}</p>
          <p>Vurdering: {{ trip.tripRating }}</p>
        </div>

        <div class="map-container info-box">
          <img src="/img/trip/2map.png" alt="Trip map">
          <div class="invite-box">
            <button @click="inviteFriend">Inviter en venn på tur</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

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

const trip = ref<Trip>({
  id: 1,
  tripName: "Hardangervidda Rundtur",
  tripPicture: "/img/trip/1.png",
  tripInfo: "Vakker fjellplatå-kryssing med storslått utsikt",
  tripKM: 42,
  tripHeightChart: 1200,
  tripPhysical: 4,
  tripRating: 5
})

function inviteFriend() {
  // TODO: Implement friend invitation
  alert('Invitasjon sendt!')
}

onMounted(() => {
  const tripId = Number(route.params.id)
  // Simulating API fetch - replace with actual API call
  trip.value = {
    id: tripId,
    tripName: "Hardangervidda Rundtur",
    tripPicture: `/img/trip/${tripId}.png`,
    tripInfo: "Vakker fjellplatå-kryssing med storslått utsikt",
    tripKM: 42,
    tripHeightChart: 1200,
    tripPhysical: 4,
    tripRating: 5
  }
})
</script>

<style scoped>
.trip-container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.content-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.map-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.map-container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0;
}

.invite-box {
  text-align: center;
}

@media (max-width: 768px) {
  .content-row {
    grid-template-columns: 1fr;
  }
}
</style>
