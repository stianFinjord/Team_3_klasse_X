function renderLoginView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}

    <div class="app-view">
    <h2>Innlogging</h2>
        <input type="text" onchange="model.input.loginForm.email = this.value" placeholder="Email"><br>
        <input type="password" onchange="model.input.loginForm.password = this.value" placeholder="Passord"><br>
        <button onclick=clickLogInButton()>Logg inn</button><br>
        <button onclick=setViewRegister()>Registrer deg</button><br>
    </div>
    `;
}


