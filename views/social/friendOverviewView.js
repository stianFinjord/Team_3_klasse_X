function renderFriendsOverviewView(){
    document.getElementById("app").innerHTML = /*HTML*/`
        ${getNavigationMenu()}
        <div class="app-view">
            <h1 class=site-header>Mine Venner</h1>
                ${buildSearchBar()}
                <button onclick="setViewOtherProfiles()">Finn nye venner</button>
                <div class="friends-profile-container">
                    ${drawFriendsOverview(model.app.loggedInUser.friendsListId)}
            </div>
        </div>

    `
}

//Kan bruke map() for å returnere mange arrays med html

function drawFriendsOverview(list){
    let friendId = 0;
    let user = null;
    let html="";
    for(let i = 0; i < list.length; i++){
        friendId = list[i];
        user = getUserProfileFromId(friendId);
        
        html+= /*HTML*/ `
        <div onclick="setViewFriendProfile(${friendId})" 
            class="info-box friends-profile-card">
            <img src="${user.userPicture}">
            <h2>${user.userFullName}</h2>
        </div>
        `;
    }
    return html;
};