function getNavigationMenu() {
    let html = /*HTML*/ `
        <div class="side-menu">
            <div>Dette er menyen</div>
            <button onclick=setViewRegister()>Registrer deg</button><br>
            <button onclick=setViewRegister()>Annen view</button><br>
            <button onclick=setViewRegister()>knapp</button><br>
            <div>Slutt på menyen</div>
        </div>
    `;
    return html;
 
}

