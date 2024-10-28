function setViewFriendsOverview() {
  model.app.currentPage = "friendsOverview";
  showView();
}

function clickLogInButton() {
  // setsLoggedInUser, updates view
  if (isUsernameAndPasswordCorrect()) {
    model.app.loggedInUser = model.input.loginForm.email; //FIXME: Is supposed to set a user object instead of Email

    model.app.loggedInUser = {
      id: 0,
      userFullname: "Jørgine",
      userName: "brukernavn",
      passord: "1234",
      email: "eksempel@gmail.com",
      userPicture: "pictures/user11.png",
      userPhysical: 0,
      location: "sted",
      friendsListId: [2, 3, 4],
      pendingRequests: [5, 6],
      kilometresWalked: 0,
      tripsTaken: 0,
      achievementView: ["10km", "20km"],
    };
  }
}

function getUserProfileFromEmail(inputEmail) {
  for (let i = 0; i < model.data.userProfile.length; i++) {
    if (model.data.userProfile[i].email == inputEmail) {
      return model.data.userProfile[i];
    }
  }
}

let newProfile = getUserProfileFromEmail("eksempel@gmail.com");

let name = getUserProfileFromEmail("eksempel@gmail.com").name;
let name2 = model.data.userProfile[0].name;
