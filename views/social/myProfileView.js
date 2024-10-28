function renderMyProfileView() {
  //FIXME: Feilmeldinger når man kjører
  document.getElementById("app").innerHTML = /*HTML*/ `


    <div class ="app-view"> 
  <img src="${model.app.loggedInUser.userPicture}">
        <h2>${model.app.loggedInUser.userName}</h2>
        Min fysiske form:
        <select>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
        </select>
        <button onclick="setViewFriendsOverview()">Mine Venner</button>
        <div>${getAchievementView()}</div>
        <div>${getUserProfileFromEmail("eksempel@gmail.com").userPhysical}</div>
        <button onchange="model.input. = this.value" class="input" placeholder="Lagre"> fix me
    </div>

    `;
}

function getAchievementView() {
  return /*HTML*/ `
    <div>Dette er achievements</div>
    `;
}
