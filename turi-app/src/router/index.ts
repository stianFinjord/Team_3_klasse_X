import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/my-profile',
      name: 'myProfile',
      component: () => import('../views/MyProfileView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/friends',
      name: 'friends',
      component: () => import('../views/FriendsOverviewView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/find-friends',
      name: 'findFriends',
      component: () => import('../views/OtherProfilesView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/friend/:id',
      name: 'friendProfile',
      component: () => import('../views/FriendProfileView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/trips',
      name: 'trips',
      component: () => import('../views/TripOverviewView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/trip/:id',
      name: 'trip',
      component: () => import('../views/TripView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
