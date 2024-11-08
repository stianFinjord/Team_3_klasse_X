function setViewTrip() {
    model.app.currentPage = 'tripView';
    showView();
  }

function setViewTripOverview() {
  model.app.currentPage = 'tripOverview';
  showView();
}

function goToTripView(inputId){ 
  model.app.tripId = inputId;
  model.app.currentPage = "tripView";
  showView();
}

