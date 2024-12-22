export interface FriendRequest {
  fromUserId: number
  toUserId: number
  status: string
}

// Mock data from model.js
const mockUsers = [
  {
    id: 0,
    userName: "EmmaL",
    userFullName: "Emma Larsson",
    email: "emma.l@gmail.com",
    userPicture: "/img/users/Emma.jpg",
    userPhysical: 3,
    location: "Bergen",
    friendsListId: [3, 4, 7],
    pendingRequests: [2],
    kilometresWalked: 78,
    tripsTaken: 12,
    achievementView: ["10km", "20km", "50km", "10trips"]
  },
  {
    id: 2,
    userName: "ErikH",
    userFullName: "Erik Hansen",
    email: "erik.hansen@gmail.com",
    userPicture: "/img/users/Erik.jpg",
    userPhysical: 4,
    location: "Oslo",
    friendsListId: [0, 3, 4],
    pendingRequests: [7],
    kilometresWalked: 156,
    tripsTaken: 25,
    achievementView: ["10km", "20km", "50km", "100km", "10trips", "25trips"]
  },
  {
    id: 3,
    userName: "predator",
    userFullName: "Kevin Tunge",
    email: "kevin.tunge@gmail.com",
    userPicture: "/img/users/Kevin.jpg",
    userPhysical: 5,
    location: "Bergen",
    friendsListId: [0, 1, 2, 4, 5],
    pendingRequests: [],
    kilometresWalked: 283,
    tripsTaken: 42,
    achievementView: ["10km", "20km", "50km", "100km", "200km", "10trips", "25trips", "40trips"]
  },
  {
    id: 7,
    userName: "le-dog-kimchi",
    userFullName: "Kim Kristensen",
    email: "kristin.o@gmail.com",
    userPicture: "/img/users/Kim.jpg",
    userPhysical: 4,
    location: "Bodø",
    friendsListId: [0, 1],
    pendingRequests: [],
    kilometresWalked: 167,
    tripsTaken: 28,
    achievementView: ["10km", "20km", "50km", "100km", "10trips", "25trips"]
  },
  {
    id: 8,
    userName: "HenrikD",
    userFullName: "Henrik Dahl",
    email: "henrik.d@gmail.com",
    userPicture: "/img/users/Henrik.jpg",
    userPhysical: 5,
    location: "Kristiansand",
    friendsListId: [0, 5, 9, 10],
    pendingRequests: [],
    kilometresWalked: 312,
    tripsTaken: 45,
    achievementView: ["10km", "20km", "50km", "100km", "200km", "300km", "10trips", "25trips", "40trips"]
  }
]

// Keep track of friend requests in memory
const friendRequests: FriendRequest[] = [
  {
    fromUserId: 2, // Erik Hansen
    toUserId: 1,   // Test User (you)
    status: 'pending'
  }
]

export async function getNonFriends(userId: number) {
  try {
    console.log('Fetching non-friends for user:', userId)
    // Filter out the current user and their friends
    const currentUser = mockUsers.find(u => u.id === userId) || { friendsListId: [] }
    const nonFriends = mockUsers.filter(user => {
      // Don't show the current user
      if (user.id === userId) return false
      // Don't show users that are already friends
      if (currentUser.friendsListId.includes(user.id)) return false
      // Don't show users where we are in their friends list
      if (user.friendsListId.includes(userId)) return false
      return true
    })
    console.log('Filtered non-friends:', nonFriends)
    return nonFriends
  } catch (error) {
    console.error('Error fetching non-friends:', error)
    return []
  }
}

export async function sendFriendRequest(fromUserId: number, toUserId: number) {
  try {
    console.log('Sending friend request:', { fromUserId, toUserId })
    // Check if request already exists
    const existingRequest = friendRequests.find(
      req => req.fromUserId === fromUserId && req.toUserId === toUserId
    )
    if (existingRequest) {
      console.log('Friend request already exists')
      return true
    }

    // Add to pending requests
    const targetUser = mockUsers.find(user => user.id === toUserId)
    if (targetUser) {
      // Add to our in-memory friend requests
      friendRequests.push({
        fromUserId,
        toUserId,
        status: 'pending'
      })
      console.log('Friend request sent successfully')
      console.log('Current friend requests:', friendRequests)
      return true
    }
    return false
  } catch (error) {
    console.error('Error sending friend request:', error)
    return false
  }
}

export async function acceptFriendRequest(fromUserId: number, toUserId: number) {
  try {
    console.log('Accepting friend request:', { fromUserId, toUserId })
    // Update the request status
    const request = friendRequests.find(
      req => req.fromUserId === fromUserId && req.toUserId === toUserId
    )
    if (request) {
      request.status = 'accepted'
      // Update both users' friend lists
      const fromUser = mockUsers.find(user => user.id === fromUserId)
      const toUser = mockUsers.find(user => user.id === toUserId)
      if (fromUser && toUser) {
        fromUser.friendsListId.push(toUserId)
        toUser.friendsListId.push(fromUserId)
      }
      return true
    }
    return false
  } catch (error) {
    console.error('Error accepting friend request:', error)
    return false
  }
}

export async function getFriendRequests(userId: number) {
  try {
    console.log('Fetching friend requests for user:', userId)
    // Only return requests where this user is the recipient
    const requests = friendRequests.filter(
      req => req.toUserId === userId && req.status === 'pending'
    )
    console.log('Current friend requests for user:', requests)
    return requests
  } catch (error) {
    console.error('Error fetching friend requests:', error)
    return []
  }
}
