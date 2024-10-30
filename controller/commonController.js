function getUserProfileFromEmail(inputEmail) {
    for (let i = 0; i < model.data.userProfile.length; i++) {
      if (model.data.userProfile[i].email == inputEmail) {
        return model.data.userProfile[i];
      }
    }
  }
  
  