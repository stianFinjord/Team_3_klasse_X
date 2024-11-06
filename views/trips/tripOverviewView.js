function renderTripOverview() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}
    
    <div class="app-view">
      <h2 style="margin-bottom: 2em">Her er våre anbefalinger for deg!</h2>
      <div class="trip-grid-container">
        ${tripCard()}
      </div>
    </div>
`;
}

function tripCard() {
  let card="";
  for (let i = 0; i < model.data.tripData.length; i++) {
    const trip = model.data.tripData[i];
    card += /*HTML*/ ` 
    <div class="trip-card info-box" onclick="goToTripView(${trip.id})">
      <img src="${trip.tripPicture}" alt="${trip.tripName}">
      <h2>${trip.tripName}</h2>
      <p>Vurdering: ${trip.tripRating}</p>
    </div>
     
    `;
  }
  return card;
}

function goToTripView(inputId){ 
    model.app.tripId = inputId;
    model.app.currentPage = "tripView";
    showView();
}

