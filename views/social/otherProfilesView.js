function renderOtherProfilesView() {
    document.getElementById("app").innerHTML = /*HTML*/`
        ${getReturnButton()}
        ${getNavigationMenu()}
        <div class="app-view">
            <h1 class="site-header">Andre profiler</h1>
            ${buildSearchBar()}
            <button onclick="setViewFriendsOverview()">Mine venner</button>
            <div class="friends-profile-container">
                ${drawFriendsOverview(getNotFriendsProfiles())}
            </div>
        </div>
    `
}

