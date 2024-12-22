export interface User {
  id: number
  userName: string
  userFullName: string
  email: string
  userPicture: string
  userPhysical: number
  location: string
  friendsListId: number[]
  pendingRequests: number[]
  kilometresWalked: number
  tripsTaken: number
  achievementView: string[]
}
