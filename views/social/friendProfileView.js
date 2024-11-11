function renderFriendProfileView() {
  let id = model.app.shownUserID; 
  let user = getUserProfileFromId(id); 

  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}
    
    <div class="app-view">
      <div class="info-box friend-view">
        <img src="${user.userPicture}">
        <h2>${user.userFullName}</h2>
        <div>${friendProfileHtml()}</div>
      </div>
    </div>
    `;
}

function friendProfileHtml() {
  if (isFriendsWithShownProfile()) {
    return /*HTML*/ `<button>Inviter til tur(placeholder)</button>`;
  } else if (isRequestsPendingWithShownProfile()) {
    return /*HTML*/ `
        <p>Brukeren har sendt deg en venneforespørsel. Godta?</p>
        <button onclick="acceptFriendRequest()">Ja</button>
        <button onclick="removeFriendRequest()">Nei</button>
    `;
  } else if(isFriendRequestSent()) {
    return /*HTML*/ `
        <p>Venneforespørsel sendt, venter på svar</p>
    `;
  } else {
    return /*HTML*/ `
        <button onclick="sendFriendRequestToShownUser()">Send venneforespørsel</button>`;
    }
}


