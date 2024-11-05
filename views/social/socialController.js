function setViewFriendsOverview() {
  model.app.currentPage = "friendsOverview";
  showView();
}

function setViewMyProfile() {
  model.app.currentPage = "myProfile";
  showView();
}

function setViewFriendProfileView(profileId = null){
  if(profileId) {
    model.app.shownUserID = profileId;
  }
  model.app.currentPage = "friendsProfile";
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
