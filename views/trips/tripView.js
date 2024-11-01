function renderTripView() {
  const trip = getTripById(model.app.data);
  document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}

    <div class="app-view">
        <div class="tripContainer">
            <div class="tripPicBox">
                <img src="${trip.tripPicture}" alt="${trip.tripName}">
                
            </div>

            <div class="content-row">
                <div class="info-box">
                    <h2>${trip.tripName}</h2>
                    <p>${trip.tripInfo}</p>
                    <p>Lengde på tur: ${trip.tripKM} km</p>
                    <p>Høyde på tur: ${trip.tripHeightChart} meter</p>
                    <p>Vanskelighetsgrad: ${trip.tripPhysical}</p>
                    <p>Vurdering: ${trip.tripRating}</p>
                </div>
                
                <div class="right-coloumn">
                    <div class="kartBox">
                    <img src="img/trip/2map.png">
                    </div>

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
