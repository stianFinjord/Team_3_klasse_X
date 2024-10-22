let isMenuOpen = false;
function toggleMenu() {
    if (isMenuOpen) {
        isMenuOpen = false;
    } else {
        isMenuOpen = true;
    }
    showView();
}

function getNavigationMenu() {
    let html;
    if (isMenuOpen) {
        html = /*HTML*/ `
        <div class="side-menu" style=width:140px>
            <div class=hamburger-icon onclick=toggleMenu()>≡</div>
            <button onclick=setViewRegister()>Registrer deg</button><br>
            <button onclick=setViewRegister()>Annen view</button><br>
            <button onclick=setViewRegister()>knapp</button><br>
            <div>Slutt på menyen</div>
        </div>
    `;
    } else {
        html = /*HTML*/ `
        <div class="side-menu" style=width:40px>
            <div class=hamburger-icon onclick=toggleMenu()>≡</div>
            
        </div>
        
    `;
    }


    return html;
}

