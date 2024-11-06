function renderFriendProfileView() {
  let id = model.app.shownUserID; 
  let user = getUserProfileFromId(id); 

  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}
    
    <div class="app-view">
    <div class="info-box">
        <img src="${user.userPicture}">
        <h2>${user.userFullName}</h2>
        ${friendProfileHtml()}
    </div>
    `;
}

function friendProfileHtml() {
  if (isFriendsWithShownProfile()) {
    return /*HTML*/ `<button>Inviter til tur(placeholder)</button>`;
  } else if (isRequestsPendingWithShownProfile()) {
    return /*HTML*/ `
        <div>Brukeren har sendt deg en venneforespørsel. Godta?</div>
        <button onclick="acceptFriendRequest()">Ja</button>
        <button onclick="removeFriendRequest()">Nei</button>
    `;
  } else {
    return /*HTML*/ `
        <button onclick="sendFriendRequestToShownUser()">Send venneforespørsel</button>`;
    }
}

