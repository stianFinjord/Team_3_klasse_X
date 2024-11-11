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
    renderFriendsOverviewView();
  } else if (model.app.currentPage == "tripOverview") {
    renderTripOverview();
  } else if (model.app.currentPage == "friendsProfile") {
    renderFriendProfileView();
  } else if (model.app.currentPage == "otherProfiles") {
    renderOtherProfilesView();
  }
}

function clickReturnButton() {
  const lastPage = model.app.currentPage;
  model.app.currentPage = model.app.previousPage;
  model.app.previousPage = lastPage;
  showView();
}
