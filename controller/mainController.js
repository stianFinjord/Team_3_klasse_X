showView();
function showView() {
  //sjekker hva som er current view og kjører tilsvarende view

  if (model.app.currentPage == "login") {
    renderLoginView();
  } else if (model.app.currentPage == "register") {
    renderRegisterUserView();
  } else if (model.app.currentPage == "myProfile") {
    renderMyProfileView();
  } else if (model.app.currentPage == "tripView") {
    renderTripView();
  } else if (model.app.currentPage == "friendsOverview") {
    renderFriendsOverview();
  }else if (model.app.currentPage == "tripOverview"){
    renderTripOverview();
  }
  else if (model.app.currentPage == "friendsProfile"){
    renderFriendProfileView();
  }
}
