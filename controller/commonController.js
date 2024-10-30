function getUserProfileFromEmail(inputEmail) {
    for (let i = 0; i < model.data.userProfile.length; i++) {
      if (model.data.userProfile[i].email == inputEmail) {
        return model.data.userProfile[i];
      }
    }
  }
  
function getUserProfileFromId(inputId) {
  return model.data.userProfile.find(profile => profile.id === inputId);
}

function getTripById(tripId) {
  return model.data.tripData.find(trip => trip.id === tripId);
}

/* const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12 */