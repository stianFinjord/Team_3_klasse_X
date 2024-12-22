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
      <div v-for="friend in friends" :key="friend.id" class="friend-card info-box" @click="goToFriend(friend.id)">
        <img
          :src="friend.userPicture"
          :alt="friend.userFullName"
          class="profile-picture"
          @error="handleImageError"
        >
        <h3>{{ friend.userFullName }}</h3>
        <p>Fysisk form: {{ friend.userPhysical }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

interface MockUser {
  id: number
  userName: string
  userFullName: string
  userPicture: string
  userPhysical?: number
}

const mockUsers: MockUser[] = [
  {
    id: 0,
    userName: "EmmaL",
    userFullName: "Emma Larsson",
    userPicture: "img/placeholder.jpg",
    userPhysical: 3
  },
  {
    id: 2,
    userName: "ErikH",
    userFullName: "Erik Hansen",
    userPicture: "img/placeholder.jpg",
    userPhysical: 4
  },
  {
    id: 3,
    userName: "predator",
    userFullName: "Kevin Tunge",
    userPicture: "img/Userprofiles/Kevin.jpg",
    userPhysical: 5
  },
  {
    id: 7,
    userName: "le-dog-kimchi",
    userFullName: "Kim Kristensen",
    userPicture: "img/Userprofiles/Kim.jpg",
    userPhysical: 4
  },
  {
    id: 8,
    userName: "HenrikD",
    userFullName: "Henrik Dahl",
    userPicture: "img/placeholder.jpg",
    userPhysical: 5
  }
]

const friends = ref<MockUser[]>([])

onMounted(async () => {
  await userStore.loadFriendRequests()
  // Initialize friends list based on current user's friendsListId
  if (userStore.currentUser) {
    friends.value = userStore.currentUser.friendsListId
      .map(friendId => mockUsers.find(u => u.id === friendId))
      .filter((user): user is MockUser => user !== undefined)
  }
})

function getUserPicture(userId: number) {
  const user = mockUsers.find(u => u.id === userId)
  return user?.userPicture || '/img/placeholder.jpg'
}

function getUserName(userId: number) {
  const user = mockUsers.find(u => u.id === userId)
  return user?.userFullName || `Bruker ${userId}`
}

async function acceptRequest(fromUserId: number) {
  const success = await userStore.acceptFriendRequest(fromUserId)
  if (success) {
    // Refresh friend requests list
    await userStore.loadFriendRequests()

    // Find the user from mockUsers
    const newFriend = mockUsers.find(u => u.id === fromUserId)
    if (newFriend) {
      // Add the new friend to the list if not already present
      if (!friends.value.some(f => f.id === fromUserId)) {
        friends.value.push({
          id: newFriend.id,
          userName: newFriend.userName,
          userFullName: newFriend.userFullName,
          userPicture: newFriend.userPicture,
          userPhysical: newFriend.userPhysical || 3
        })
      }

      // Update the current user's friendsListId
      if (userStore.currentUser) {
        userStore.currentUser.friendsListId.push(fromUserId)
      }
    }
  }
}

async function rejectRequest(fromUserId: number) {
  await userStore.rejectFriendRequest(fromUserId)
  // Refresh the friend requests list
  await userStore.loadFriendRequests()
}

function goToFriend(id: number) {
  // Find the correct friend from mockUsers
  const friend = mockUsers.find(u => u.id === id)
  if (friend) {
    router.push(`/friend/${friend.id}`)
  }
}

function handleImageError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/img/placeholder.jpg'
  img.onerror = null
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
  cursor: pointer;
  transition: transform 0.3s;
  text-align: center;
  padding: 1rem;
}

.friend-card:hover {
  transform: translateY(-5px);
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
</style>
