function renderTripView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${getNavigationMenu()}

  <div>

    `;
}


// tripData: [
//     {
//         tripID: 1,
//         tripName: "turnavn",
//         tripPicture: "pictures/trip/1.png",
//         tripInfo: "info",
//         tripKM: 0,
//         tripHeightChart: 0,
//         tripPhysical: 0,
//         tripRating: 0,