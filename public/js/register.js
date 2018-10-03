window.onload = () => {

}

const showPersonForm = () => {
  objectContainer.style.display = 'none';
  personContainer.style.display = 'block';
}

const showObjectForm = () => {
  personContainer.style.display = 'none';
  objectContainer.style.display = 'block';
}

let photoURL;
document.getElementById('personPhoto').addEventListener('change', function(event) {
  let storageRef = firebase.storage().ref().child(`personPhoto/a${personPhone.value}.jpeg`);
  let firstFile = event.target.files[0];
  storageRef.put(firstFile);
  storageRef.getDownloadURL().then(function(url) {
    personPhotoMessage.innerHTML = '¡Listo!';
    photoURL = url;
    console.log(photoURL);
  }).catch(function(error) {
    console.log('Ha ocurrido un error' + error);
  });
});

document.getElementById('personForm').addEventListener('submit', (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let pName = foundName.value;
    let pGender = gender.value;
    let pAge = age.value;
    let pHeight = personHeight.value;
    let pEye = eye.value;
    let pInfo = extraInfo.value;
    let finder = personFinder.value;
    let pPhone = personPhone.value;

    const newUserKey = firebase.database().ref().child('foundPerson').push().key;
    firebase.database().ref(`foundPerson/${newUserKey}`).set({
      name: pName,
      gender: pGender,
      age: pAge,
      height: pHeight,
      eyeColor: pEye,
      description: pInfo,
      finderName: finder,
      finderPhone: pPhone,
      latitude: latitude,
      longitude: longitude
    });
  });
});

document.getElementById('objectPhoto').addEventListener('change', function(event) {
  let storageRef = firebase.storage().ref().child(`objectPhoto/a${personPhone.value}.jpeg`);
  let firstFile = event.target.files[0];
  storageRef.put(firstFile);
  storageRef.getDownloadURL().then(function(url) {
    personPhotoMessage.innerHTML = '¡Listo!';
    photoURL = url;
    console.log(photoURL);
  }).catch(function(error) {
    console.log('Ha ocurrido un error' + error);
  });
});

document.getElementById('objectForm').addEventListener('submit', (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let oType = objectType.value;
    let oInfo = objectInfo.value;
    let oFinder = objectFinder.value;
    let oPhone = objectPhone.value;
    const newUserKey = firebase.database().ref().child('foundObjects').push().key;
    firebase.database().ref(`foundObjects/${newUserKey}`).set({
      type: oType,
      description: oInfo,
      finderName: oFinder,
      finderphone: oPhone,
      latitude: latitude,
      longitude: longitude
    });
  })
});


