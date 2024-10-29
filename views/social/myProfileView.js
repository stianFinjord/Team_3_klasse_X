function renderMyProfileView() {
  //FIXME: Feilmeldinger når man kjører
  document.getElementById("app").innerHTML = /*HTML*/ `


    <div class ="app-view"> 
      <img src="${model.app.loggedInUser.userPicture}">
        <h2>${model.app.loggedInUser.userName}</h2>
        Min fysiske form:
        <br>
        <br>
        <select>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
        </select>
        <br>
        <button onclick="setViewFriendsOverview()">Mine Venner</button>
        <br>
        <div>${getAchievementView()}</div>
        <div>${getUserProfileFromEmail("eksempel@gmail.com").userPhysical}</div>
        <br>
        <button onchange="model.input. = this.value" class="input" placeholder="Lagre"> Lagre endringer
    </div>

    `;
}

function getAchievementView() {
  return /*HTML*/ `
    <div>Dette er achievements</div>
    `;
}
// Koden under er bare for test purposes, pls ignore

async function fetchData() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(jokeData => logToConsole(jokeData))
}

function logToConsole(response) {
  console.log(response.value);
  return response.value;
}