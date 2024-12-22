import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { getNonFriends, sendFriendRequest, acceptFriendRequest, getFriendRequests } from '@/services/friendService'

interface FriendRequest {
  fromUserId: number
  toUserId: number
  status: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
    allUsers: [] as User[],
    friendRequests: [] as FriendRequest[],
    nonFriends: [] as User[]
  }),

  actions: {
    async setCurrentUser(user: User): Promise<void> {
      console.log('Setting current user:', user)
      this.currentUser = user
      // Load friend requests and non-friends when user logs in
      await Promise.all([
        this.loadFriendRequests(),
        this.loadNonFriends()
      ])
    },

    async loadFriendRequests() {
      if (this.currentUser) {
        this.friendRequests = await getFriendRequests(this.currentUser.id)
      }
    },

    async loadNonFriends() {
      if (this.currentUser) {
        console.log('Loading non-friends for user:', this.currentUser.id)
        this.nonFriends = await getNonFriends(this.currentUser.id)
        console.log('Loaded non-friends:', this.nonFriends)
      } else {
        console.log('No current user when trying to load non-friends')
      }
    },

    getUserById(id: number) {
      return this.allUsers.find(user => user.id === id)
    },

    isFriendsWith(id: number) {
      return this.currentUser?.friendsListId.includes(id) ?? false
    },

    hasPendingRequestFrom(id: number) {
      return this.friendRequests.some(req => req.fromUserId === id)
    },

    hasSentRequestTo(id: number) {
      return this.friendRequests.some(req =>
        (req.fromUserId === this.currentUser?.id && req.toUserId === id) ||
        (req.toUserId === this.currentUser?.id && req.fromUserId === id)
      )
    },

    async sendFriendRequest(toUserId: number) {
      if (!this.currentUser) return false

      const success = await sendFriendRequest(this.currentUser.id, toUserId)
      if (success) {
        await this.loadFriendRequests()
        await this.loadNonFriends()
      }
      return success
    },

    async acceptFriendRequest(fromUserId: number) {
      if (!this.currentUser) return false

      const success = await acceptFriendRequest(fromUserId, this.currentUser.id)
      if (success) {
        await this.loadFriendRequests()
        this.currentUser.friendsListId.push(fromUserId)
      }
      return success
    },

    async rejectFriendRequest(fromUserId: number) {
      this.friendRequests = this.friendRequests.filter(req => req.fromUserId !== fromUserId)
    }
  }
})
