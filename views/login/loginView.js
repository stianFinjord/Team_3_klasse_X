function renderLoginView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}
    <div>
        <input placeholder="Brukernavn"><br>
        <input placeholder="Passord"><br>
        <button onclick=someFunction()>Logg inn</button><br>
        <button onclick=setViewRegister()>Registrer deg</button><br>
    </div>
    `;
}
