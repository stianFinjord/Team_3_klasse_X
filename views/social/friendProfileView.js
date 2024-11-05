function renderFriendProfileView() {
  let id = model.app.shownUserID; // Type integer
  let user = getUserProfileFromId(id); // Type userProfile{}

  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}
    
    <div class="app-view">
    <h2>${user.userFullName}</h2>
        <img src="${user.userPicture}">
        <br>
        ${friendProfileHtml()}
    </div>
    `;
}

function friendProfileHtml() {
  if (isFriendsWithShownProfile()) {
    return /*HTML*/ `<button>Inviter til tur(placeholder)</button>`;
  } else if (isRequestsPendingWithShownProfile()) {
    return /*HTML*/ `
        <div>Brukeren har sendt deg en venneforespørsel. Godta?</div><br>
        <button>Ja(placeholder)</button><br>
        <button>Nei(placeholder)</button>
    `;
  } else {
    return /*HTML*/ `
        <button>Send venneforespørsel(placeholder)</button>`;
    }
}

