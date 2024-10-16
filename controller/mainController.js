showView();
function showView() {
    //sjekker hva som er current view og kjører tilsvarende view

    if(model.app.currentPage == 'login') {
        renderLoginView();
    } else if (model.app.currentPage == 'register') {
        renderRegisterUserView();
    } else if (model.app.currentPage == 'myProfile') {
        renderMyProfileView();
    }
}

// disse er bare til hjelp
//renderRegisterUserView();

