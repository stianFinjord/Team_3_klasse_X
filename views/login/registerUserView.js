

function renderRegisterUserView(){
    document.getElementById('app').innerHTML= /*HTML*/ `
    <div>
    <h2>Registrer deg</h2>
        <input type="email" class="input" placeholder="E-post"><br>
        <input type="text" class="input" placeholder="Brukernavn"><br>
        <input type="password" class="input" placeholder="Passord"><br>
        <input type="password" class="input" placeholder="Gjenta Passord"><br>
        <button id=registerButton>Registrer deg</button><br>
<p> Alert </p>
    </div> 
    `;
}
