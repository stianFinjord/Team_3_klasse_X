function renderRegisterUserView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}
    <div class ="app-view">
        <h2>Registrer deg</h2>
        <input type="text" onchange="model.input.createAccount.userName = this.value" class="input" placeholder="Brukernavn"><br>
        <input type="email" onchange="model.input.createAccount.email = this.value" class="input" placeholder="E-post"><br>
        <input type="password" onchange="model.input.createAccount.password = this.value" class="input" placeholder="Passord"><br>
        <input type="password" onchange="model.input.createAccount.repeatPassword = this.value" class="input" placeholder="Gjenta Passord"><br>
        <button onclick="clickRegisterButton()">Registrer deg</button><br>
 
    </div> 
    `;
}









