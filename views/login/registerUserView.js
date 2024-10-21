

function renderRegisterUserView(){
    document.getElementById('app').innerHTML= /*HTML*/ `
    <div>
    <h2>Registrer deg</h2>
        <input type="email" class="email" placeholder="E-post"><br>
        <input type="text" class="username" placeholder="Brukernavn"><br>
        <input type="password" class="password" placeholder="Passord"><br>
        <input type="password" class="repeatPassword" placeholder="Gjenta Passord"><br>
        <button type="submit">Registrer deg</button><br>
    </div> 
    `;
}
