function renderLoginView(){
    document.getElementById("app").innerHTML = /*HTML*/ `

    <div>
        <input placeholder="Brukernavn"><br>
        <input placeholder="Passord"><br>
        <button onclick=someFunction()>Logg inn</button><br>
        <button onclick=renderRegisterUserView()>Registrer deg</button><br>
    </div>
    `;
}

function someFunction() {
    console.log("Hei alle sammen!");
}