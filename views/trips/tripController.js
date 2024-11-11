function setViewTrip() {  
  model.app.previousPage = model.app.currentPage;
  model.app.currentPage = 'tripView';
  showView();
}

function setViewTripOverview() {
  model.app.previousPage = model.app.currentPage;
  model.app.currentPage = 'tripOverview';
  showView();
}

function goToTripView(inputId){ 
  model.app.previousPage = model.app.currentPage;
  model.app.tripId = inputId;
  model.app.currentPage = "tripView";
  showView();
}

