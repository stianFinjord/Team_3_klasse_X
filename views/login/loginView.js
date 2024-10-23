function renderLoginView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}

    <div>
    <h2>Innlogging</h2>
        <input type="text" onchange="model.input.loginForm.email = this.value" placeholder="Email"><br>
        <input type="password" onchange="model.input.loginForm.password = this.value" placeholder="Passord"><br>
        <button onclick=clickLogInButton()>Logg inn</button><br>
        <button onclick=setViewRegister()>Registrer deg</button><br>
    </div>
    `;
}


{/* <div>
<h2>Registrer deg</h2>
<input type="text" onchange="model.input.createAccount.userName = this.value" class="input" placeholder="Brukernavn"><br>
<input type="email" onchange="model.input.createAccount.email = this.value" class="input" placeholder="E-post"><br>
<input type="password" onchange="model.input.createAccount.password = this.value" class="input" placeholder="Passord"><br>
<input type="password" onchange="model.input.createAccount.repeatPassword = this.value" class="input" placeholder="Gjenta Passord"><br>
<button onclick="clickRegisterButton()">Registrer deg</button><br>

</div>  */}