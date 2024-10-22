function setViewRegister() {
    model.app.currentPage = 'register';
    showView();
}



function createAccount() {
  // i model.data.userProfile blir det lagt til et nytt objekt
  let createAccount = model.input.createAccount;
  
  let newAccount = {
    id: model.data.userProfile.length + 1, //FIX ME! (length + Id problematikk)
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
}






















// function createAccount() {
//     let createAccount = model.input.createAccount

//     let newAccount = {
//         username: userName,
//         userId: model.data.users.lenght + 1,
//         e-mail: createAccount.email
//         password: createAccount.password
//         userPicture: createAccount.userPicture


//     }
// }


// model.data.users.push(newUser);

// createAccount.username = '';
// createAccount.email = '';
// createAccount.password = '',
// createAccount.repeatPw = '',


 