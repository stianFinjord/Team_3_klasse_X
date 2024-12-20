function renderMyProfileView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getReturnButton()}
    ${getNavigationMenu()}
    <div class ="app-view">
      <div class="info-box">
        <img src="${model.app.loggedInUser.userPicture}">
          <h2>${model.app.loggedInUser.userName}</h2>
          Min fysiske form:
          <select onchange="model.input.myProfile.userPhysical = this.value">
              <option value=1>1</option>
              <option value=2>2</option>
              <option value=3>3</option>
              <option value=4>4</option>
              <option value=5>5</option>
              </select>
          <button onclick="saveMyProfileChanges()" >Lagre endringer</button>
          <button onclick="setViewFriendsOverview()">Mine Venner</button>
          ${getAchievementView()}
      </div>

    `;
}

function getAchievementView() {
  return /*HTML*/ `
  <p>Mine achievements</p>
  <div class=achievements>
    <div>
      <img src="img/achievement/Achievement_badge_1.png">
      <p>10km</p>
    </div>
    <div>
      <img src="img/achievement/Achievement_badge_2.png">
      <p>25km</p>
    </div>
    <div>
      <img src="img/achievement/Achievement_badge_3.png">
      <p>Maraton</p>
    </div>
    <div>
      <img src="img/achievement/Achievement_badge_4.png">
      <p>5 turer</p>
    </div>
  </div>
    `;
}









// function createAccount() {
//   let createAccount = model.input.createAccount;

//   let newAccount = {
//     id: model.data.userProfile.length + 1, //FIXME: Does not guarantee unique ID
//     userFullName: "",
//     userName: createAccount.userName,
//     email: createAccount.email,
//     password: createAccount.password,
//     userPicture: "",
//     userPhysical: 0,
//     location: "",
//     friendsListId: [],
//     pendingRequests: [],
//     kilometresWalked: 0,
//     tripsTaken: 0,
//     achievementView: [],
//   };

//   model.data.userProfile.push(newAccount);










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

async function fetchDataThenDoSomething() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jokeData = await response.json();

    console.log(jokeData.value);
}


