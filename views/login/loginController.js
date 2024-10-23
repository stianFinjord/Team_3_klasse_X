function setViewRegister() {
  model.app.currentPage = 'register';
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
};

function clickRegisterButton() {
  createAccount();
  model.app.currentPage = "myProfile";
  showView();
};

function clickLogInButton() { // setsLoggedInUser, updates view
  if (isUsernameAndPasswordCorrect()) {
    model.app.loggedInUser = model.input.loginForm.email; //FIXME


    model.app.currentPage = "myProfile";
    showView();
  } else {
    alert("Passord eller brukernavn er feil!");
  }
}

function isUsernameAndPasswordCorrect(){
  if ((model.data.userProfile[0].email === model.input.loginForm.email) && 
    (model.data.userProfile[0].password === model.input.loginForm.password)) {
    return true;
  } else {
    return false;
  }
}










