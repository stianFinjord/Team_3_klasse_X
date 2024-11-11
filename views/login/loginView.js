function renderLoginView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}
    <div class="app-view">
        <h2 class="header">Innlogging</h2>
        <input type="text" onchange="model.input.loginForm.email = this.value" placeholder="Email">
        <input type="password" onchange="model.input.loginForm.password = this.value" placeholder="Passord">
        <button onclick=clickLogInButton()>Logg inn</button>
        <button onclick=setViewRegister()>Registrer deg</button>
    </div>
    `;
}


