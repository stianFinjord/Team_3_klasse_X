function setViewFriendsOverview() {
  
  model.app.previousPage = model.app.currentPage;
  model.app.currentPage = "friendsOverview";
  showView();
}

function setViewMyProfile() {
  model.app.previousPage = model.app.currentPage;
  model.app.currentPage = "myProfile";
  showView();
}

function setViewFriendProfile(profileId = null) {
  if (profileId) {
    model.app.shownUserID = profileId;
  }
  model.app.previousPage = model.app.currentPage;
  model.app.currentPage = "friendsProfile";
  showView();
}

function setViewOtherProfiles() {
  model.app.previousPage = model.app.currentPage;
  model.app.currentPage = "otherProfiles";
  showView();
}

function saveMyProfileChanges() {
  model.app.loggedInUser.userPhysical = model.input.myProfile.userPhysical;
  model.input.myProfile.userPhysical = "";
}

function isFriendsWithShownProfile() {
  let myFriendsList = model.app.loggedInUser.friendsListId;
  for (let i = 0; i < myFriendsList.length; i++) {
    if (myFriendsList[i] === model.app.shownUserID) {
      return true;
    }
  }
  return false;
}

function isRequestsPendingWithShownProfile() {
  let myFriendRequests = model.app.loggedInUser.pendingRequests;
  for (let i = 0; i < myFriendRequests.length; i++) {
    if (myFriendRequests[i] === model.app.shownUserID) {
      return true;
    }
  }
  return false;
}

function isFriendRequestSent() {
  let me = model.app.loggedInUser;
  let shownUser = getUserProfileFromId(model.app.shownUserID);
  console.log(shownUser);
  if (shownUser.pendingRequests.includes(me.id)) {
    return true;
  }
  return false;
}


function sendFriendRequestToShownUser() {
  const shownUser = model.data.userProfile[model.app.shownUserID];
  shownUser.pendingRequests.push(model.app.loggedInUser.id);
  showView();
}

function acceptFriendRequest() {
  const shownUser = model.data.userProfile[model.app.shownUserID];
  shownUser.friendsListId.push(model.app.loggedInUser.id);
  model.app.loggedInUser.friendsListId.push(model.app.shownUserID);
  acceptFriendRequestApi(model.app.loggedInUser.id, model.app.shownUserID); //sender api-spørring til DB
  removeFriendRequest();
  showView();
}

function removeFriendRequest() {
  // Remove pending invite
  const userId = model.app.shownUserID;
  // Needs to remove a specific ID from the array.
  model.app.loggedInUser.pendingRequests = removeElementFromArray(
    model.app.loggedInUser.pendingRequests,
    userId
  );
  showView();
}

// Returns idList of all users who aren't friends of loggedInUser
function getNotFriendsProfiles() {
  //Skjønner ikke helt hvorfor denne funker men det funker. Needs refactoring
  const friendsIdList = model.app.loggedInUser.friendsListId;
  const userIdList = model.data.userProfile.map((profile) => profile.id);
  const difference = userIdList.filter(
    (id) => !friendsIdList.some((friendsId) => friendsId == id)
  );
  return difference;
}

// Returns new array without the specified element
function removeElementFromArray(array, element) {
  //Denne hadde også trengt litt refactoring ass
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != element) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
