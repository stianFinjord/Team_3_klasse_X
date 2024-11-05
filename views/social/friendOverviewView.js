function renderFriendsOverview(){
    document.getElementById("app").innerHTML = /*HTML*/`
    ${getNavigationMenu()}
    <div class="app-view">
        <div class="friends-profile-container">
            ${drawFriendsOverview(model.app.loggedInUser.friendsListId)}
        </div>
    </div>
    `
}

//Kan bruke map() for å returnere mange arrays med html

// Må lage noe html
// Må ha html for vennene til loggedInUser

function drawFriendsOverview(list){
    let friendId = 0;
    let user = null;
    let html="";
    for(let i = 0; i < list.length; i++){
        friendId = list[i];
        user = getUserProfileFromId(friendId);
        
        html+= /*HTML*/ `
        <div onclick="setViewFriendProfileView(${friendId})" 
            class="info-box">
            <img src="${user.userPicture}">
            <h2>${user.userFullName}</h2>
        </div>
        `;
    }
    return html;
};
    


// Ignorer denne foreløpig
function buildSingleFriend(userId) {
    return ("This is the user: " + userId);
}