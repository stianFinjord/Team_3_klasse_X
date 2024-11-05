function setViewRegister() {
  model.app.currentPage = "register";
  showView();
}

function setViewLogin() {
  model.app.currentPage = "login";
  showView();
}

// Gets data from model.input.createAccount and pushes new user to model.data
function createAccount() {
  let createAccount = model.input.createAccount;

  let newAccount = {
    id: model.data.userProfile.length + 1, //FIXME: Does not guarantee unique ID
    userFullName: "",
    userName: createAccount.userName,
    email: createAccount.email,
    password: createAccount.password,
    userPicture: "",
    userPhysical: 0,
    location: "",
    friendsListId: [],
    pendingRequests: [],
    kilometresWalked: 0,
    tripsTaken: 0,
    achievementView: [],
  };

  model.data.userProfile.push(newAccount);

  createAccount.email = "";
  createAccount.userName = "";
  createAccount.password = "";
  createAccount.repeatPassword = "";
}

function clickRegisterButton() {
  if(model.input.createAccount.password === model.input.createAccount.repeatPassword) {
      createAccount();
      setViewLogin();
  } else {
      alert("Passordene er ikke like!");
  }
}

// Checks if username and password matches, then logs in. 
function clickLogInButton() {
  if (isUsernameAndPasswordCorrect()) {
    model.app.loggedInUser = getUserProfileFromEmail(
      model.input.loginForm.email
    );
    setViewMyProfile();
  } else {
    alert("Passord eller brukernavn er feil!");
  }
}

function isUsernameAndPasswordCorrect() {
  for (let i = 0; i < model.data.userProfile.length; i++) {
    if (
      model.data.userProfile[i].email === model.input.loginForm.email &&
      model.data.userProfile[i].password === model.input.loginForm.password
    ) {
      return true;
    }
  }
  return false; //*sjekk tirsdag
}

function setViewMyProfile() {
  model.app.currentPage = "myProfile";
  showView();
}

