function toggleMenu(button) {
    button.parentElement.classList.toggle("open");
}

function getNavigationMenu() {
    let html = /*HTML*/ `
    <div class="nav-menu">
        <div class=hamburger-icon onclick=toggleMenu(this)>≡</div>
            <button onclick=setViewRegister()>Registrer deg</button>
            <button onclick=setViewLogin()>Logg inn</button>
            <button onclick=setViewFriendsOverview()>Mine venner</button>
            <button onclick=setViewMyProfile()>Min profil</button>
            <button onclick=setViewTrip()>TripView</button>
            <button onclick=setViewTripOverview()>Trip Overview</button>
            <button onclick=setViewFriendProfileView()>Min venn</button>
        </div>
    `
    return html;
}