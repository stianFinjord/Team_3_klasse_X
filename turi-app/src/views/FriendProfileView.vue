<template>
  <div class="app-view">
    <div v-if="friend" class="profile-container">
      <div class="profile-header info-box">
        <img
          :src="friend.profilePicture"
          :alt="friend.name"
          class="profile-picture"
          @error="handleImageError"
        >
        <h2>{{ friend.name }}</h2>
        <p>Fysisk form: {{ friend.physicalForm }}</p>
      </div>

      <div class="achievements info-box">
        <h3>Prestasjoner</h3>
        <div class="achievements-grid">
          <div v-for="achievement in friend.achievements" :key="achievement.id" class="achievement">
            <h4>{{ achievement.name }}</h4>
            <p>{{ achievement.description }}</p>
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

interface Achievement {
  id: number
  name: string
  description: string
}

interface Friend {
  id: number
  name: string
  profilePicture: string
  physicalForm: number
  achievements: Achievement[]
}

const mockUsers = [
  {
    id: 0,
    userName: "EmmaL",
    userFullName: "Emma Larsson",
    userPicture: "img/placeholder.jpg",
    userPhysical: 3,
    achievements: [
      { id: 1, name: "10km", description: "Gått 10 kilometer" },
      { id: 2, name: "5 turer", description: "Fullført 5 turer" }
    ]
  },
  {
    id: 2,
    userName: "ErikH",
    userFullName: "Erik Hansen",
    userPicture: "img/placeholder.jpg",
    userPhysical: 4,
    achievements: [
      { id: 1, name: "25km", description: "Gått 25 kilometer" },
      { id: 2, name: "10 turer", description: "Fullført 10 turer" }
    ]
  },
  {
    id: 3,
    userName: "predator",
    userFullName: "Kevin Tunge",
    userPicture: "img/Userprofiles/Kevin.jpg",
    userPhysical: 5,
    achievements: [
      { id: 1, name: "Maraton", description: "Fullført en maraton-distanse" },
      { id: 2, name: "25 turer", description: "Fullført 25 turer" }
    ]
  },
  {
    id: 7,
    userName: "le-dog-kimchi",
    userFullName: "Kim Kristensen",
    userPicture: "img/Userprofiles/Kim.jpg",
    userPhysical: 4,
    achievements: [
      { id: 1, name: "50km", description: "Gått 50 kilometer" },
      { id: 2, name: "15 turer", description: "Fullført 15 turer" }
    ]
  },
  {
    id: 8,
    userName: "HenrikD",
    userFullName: "Henrik Dahl",
    userPicture: "img/placeholder.jpg",
    userPhysical: 5,
    achievements: [
      { id: 1, name: "100km", description: "Gått 100 kilometer" },
      { id: 2, name: "30 turer", description: "Fullført 30 turer" }
    ]
  }
]

const friend = ref<Friend>({
  id: 1,
  name: "Kim",
  profilePicture: "/img/users/Kim.jpg",
  physicalForm: 4,
  achievements: [
    {
      id: 1,
      name: "Fjellkonge",
      description: "Fullført 10 fjellturer"
    },
    {
      id: 2,
      name: "Sosial Vandrer",
      description: "Gått på tur med 5 forskjellige venner"
    }
  ]
})

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/img/placeholder.jpg'
}

onMounted(() => {
  const friendId = Number(route.params.id)
  // Find the friend in mockUsers
  const foundFriend = mockUsers.find(u => u.id === friendId)
  if (foundFriend) {
    friend.value = {
      id: foundFriend.id,
      name: foundFriend.userFullName,
      profilePicture: foundFriend.userPicture,
      physicalForm: foundFriend.userPhysical,
      achievements: foundFriend.achievements
    }
  }
})
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.profile-header {
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.achievements {
  padding: 2rem;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.achievement {
  padding: 1rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
}

.achievement h4 {
  margin: 0 0 0.5rem 0;
  color: #4CAF50;
}

.achievement p {
  margin: 0;
  font-size: 0.9rem;
}
</style>
