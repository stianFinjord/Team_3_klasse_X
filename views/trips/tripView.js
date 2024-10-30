function renderTripView(){
    const trip = model.data.tripData[model.app.tripID];

    document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}

    <div class="app-view">
        <div class="tripContainer">
            <div class="tripBildeBox">
                <img src="${trip.tripPicture}" alt="${trip.tripName}">
            </div>

            <div class="content-rad">
                <div class="info-box">
                    <h2>${trip.tripName}</h2>
                    <p>${trip.tripInfo}</p>
                    <p>Lengde på tur: ${trip.tripKM} km</p>
                    <p>Høyde på tur: ${trip.tripHeightChart} meter</p>
                    <p>Vanskelighetsgrad: ${trip.tripPhysical}</p>
                    <p>Vurdering: ${trip.tripRating}</p>
                </div>
                
                <div class="right-coloum">
                    <div class="kartBox">
                        Kart legges til snart.
                    </div>

                    <div class="inviteBox">
                        <button onclick="inviteFriendToTrip(${trip.tripID})">
                            Inviter en venn på tur
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}