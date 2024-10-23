let isMenuOpen = false;
function toggleMenuOld() {
    if (isMenuOpen) {
        isMenuOpen = false;
    } else {
        isMenuOpen = true;
    }
    showView();
}

function toggleMenu(button) {
    button.parentElement.classList.toggle("open");
}



function getNavigationMenu() {
    let html = /*HTML*/ `
    <div class="nav-menu">
        <div class=hamburger-icon onclick=toggleMenu(this)>≡</div>
        <button onclick=setViewRegister()>Registrer deg</button>
        <button onclick=setViewRegister()>Annen view</button>
        <button onclick=setViewRegister()>knapp</button>
    </div>
    `
    return html;
}

function getNavigationMenuOld() {
    let html;
    if (isMenuOpen) {
        html = /*HTML*/ `
        <div class="side-menu" style=width:140px>
            <div class=hamburger-icon onclick=toggleMenuOld()>≡</div>
            <button onclick=setViewRegister()>Registrer deg</button><br>
            <button onclick=setViewRegister()>Annen view</button><br>
            <button onclick=setViewRegister()>knapp</button><br>
            <div>Slutt på menyen</div>
        </div>
    `;
    } else {
        html = /*HTML*/ `
        <div class="side-menu" style=width:40px>
            <div class=hamburger-icon onclick=toggleMenuOld()>≡</div>
            
        </div>
        
    `;
    }


    return html;
}