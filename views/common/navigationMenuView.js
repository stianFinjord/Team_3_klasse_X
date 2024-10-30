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

