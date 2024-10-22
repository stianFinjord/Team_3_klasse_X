function setViewRegister() {
    model.app.currentPage = 'register';
    showView();
}

function createAccount() {
    let createAccount = model.input.createAccount

    let newAccount = {
        username: createaccount.userName,
        userId: model.data.users.lenght + 1,
        e-mail: createAccount.email
        password: createAccount.password
        userPicture: createAccount.userPicture


    }
}


model.data.users.push(newUser);

createAccount.username = '';
createAccount.email = '';
createAccount.password = '',
createAccount.repeatPw = '',

}else {
    alert('Passordene dine stemmer ikke liksm')
}
 