function renderOtherProfilesView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    ${getNavigationMenu()}
    <div class="app-view">
        <h1>Nye profiler</h1>
        <button onclick="setViewFriendsOverview()">Mine venner</button>
        <div class="friends-profile-container">
            ${drawFriendsOverview(getNotFriendsProfiles())}
        </div>
    </div>
    `
}

