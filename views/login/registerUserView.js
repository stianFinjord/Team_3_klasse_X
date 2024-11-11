function renderRegisterUserView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getReturnButton()}
    ${getNavigationMenu()}
    <div class ="app-view">
        <h2 class="header">Registrer deg</h2>
        <input type="text" onchange="model.input.createAccount.userName = this.value" class="input" placeholder="Brukernavn">
        <input type="email" onchange="model.input.createAccount.email = this.value" class="input" placeholder="E-post">
        <input type="password" onchange="model.input.createAccount.password = this.value" class="input" placeholder="Passord">
        <input type="password" onchange="model.input.createAccount.repeatPassword = this.value" class="input" placeholder="Gjenta Passord">
        <button onclick="clickRegisterButton()">Registrer deg</button>
 
    </div> 
    `;
}









