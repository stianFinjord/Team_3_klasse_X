function renderTripView() {
  const trip = getTripById(model.app.tripId);

  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}

    <div class="app-view">
        <div class="trip-container">
            <img src="${trip.tripPicture}" alt="${trip.tripName}">
                

            <div class="content-row">
                <div class="info-box">
                    <h2>${trip.tripName}</h2>
                    <p>${trip.tripInfo}</p>
                    <p>Lengde på tur: ${trip.tripKM} km</p>
                    <p>Høyde på tur: ${trip.tripHeightChart} meter</p>
                    <p>Vanskelighetsgrad: ${trip.tripPhysical}</p>
                    <p>Vurdering: ${trip.tripRating}</p>
                </div>
                
                <div class="map-container">
                    <img src="img/trip/2map.png">

                    <div class="inviteBox">
                        <button onclick="inviteFriendToTrip(${trip.id})">
                            Inviter en venn på tur
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}
