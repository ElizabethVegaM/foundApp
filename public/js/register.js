const showPersonForm = () => {
  personOption.setAttribute('class', 'selected-option btn');
  objectOption.setAttribute('class', 'option-btn btn');
  objectContainer.style.display = 'none';
  personContainer.style.display = 'block';
}

const showObjectForm = () => {
  objectOption.setAttribute('class', 'selected-option btn');
  personOption.setAttribute('class', 'option-btn btn');
  personContainer.style.display = 'none';
  objectContainer.style.display = 'block';
}

const backToForm = () => {
  newEntry.style.display = 'none';
  forms.style.display = 'flex';
}

let photoURL;
document.getElementById('personPhoto').addEventListener('change', function(event) {
  let storageRef = firebase.storage().ref().child(`foundPhoto/a${personPhone.value}.jpeg`);
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

let latitude;
let longitude;
document.getElementById('personForm').addEventListener('submit', (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let pGender = gender.value;
    let pAge = age.value;
    let pHeight = personHeight.value;
    let pEye = eye.value;
    let pHair = hair.value;
    let pInfo = extraInfo.value;
    let finder = personFinder.value;
    let pPhone = personPhone.value;

    forms.style.display = 'none';

    const newUserKey = firebase.database().ref().child('found').push().key;
    firebase.database().ref(`found/${newUserKey}`).set({
      option: 'person',
      gender: pGender,
      age: pAge,
      height: pHeight,
      eyeColor: pEye,
      description: pInfo,
      finderName: finder,
      finderPhone: pPhone,
      photo: photoURL,
      latitude: latitude,
      longitude: longitude
    });

    newEntry.innerHTML = `<div class="entry-container">
      <div class="entry-photo">
        <img src="${photoURL}" alt="">
      </div>
      <h4>${pGender}</h4>
      <p>${pInfo}</p>
      <div class="entryInfo row">
        <div class="col-6">
          <p class="info-title"">Edad</p>
          <p>${pAge}</p>
          <p class="info-title">Ojos</p>
          <p>${pEye}</p>
        </div>
        <div class="col-6">
          <p class="info-title">Estatura</p>
          <p>${pHeight}</p>
          <p class="info-title">Cabello</p>
          <p>${pHair}</p>
        </div>
      </div>
      <div class="finderEntry row">
        <div class="col-6">
          <p class="info-title">Nombre Contacto</p>
          <p>${finder}</p>
        </div>
        <div class="col-6">
          <p class="info-title">Teléfono</p>
          <p>+569 ${pPhone}</p>        
        </div>
      </div>
      <div class="submit-container">
        <button type="button" class="btn option-btn" onclick="backToForm()"><span><i class="fas fa-caret-left"></i></span> Volver</button>
        <a href="home.html" type="button" class="btn selected-option" onclick="registerFirebase()">Registrar <span><i class="fas fa-caret-right"></i></span></a>
      </div>`;
  });
});

document.getElementById('objectPhoto').addEventListener('change', function(event) {
  let storageRef = firebase.storage().ref().child(`foundPhoto/a${personPhone.value}.jpeg`);
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
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let oType = objectType.value;
    let oInfo = objectInfo.value;
    let oFinder = objectFinder.value;
    let oPhone = objectPhone.value;

    forms.style.display = 'none';

    const newUserKey = firebase.database().ref().child('found').push().key;
    firebase.database().ref(`found/${newUserKey}`).set({
      option: 'object',
      type: oType,
      description: oInfo,
      finderName: oFinder,
      finderphone: oPhone,
      photo: photoURL,
      latitude: latitude,
      longitude: longitude
    });

    newEntry.innerHTML = `<div class="entry-container">
      <div class="entry-photo">
        <img src="${photoURL} alt="">
      </div>
      <h4>${oType}</h4>
      <div class="entryInfo">
        <p>${oInfo}</p>
        <div class="finderEntry row">
          <div class="col-6">
            <p class="info-title">Nombre Contacto</p>
            <p>${oFinder}</p>  
          </div>
          <div class="col-6">
            <p class="info-title">Teléfono</p>
            <p>+569 ${oPhone}</p>
          </div>
        </div>
      </div>
      <div class="submit-container">
        <button type="button" class="btn option-btn" onclick="backToForm()"><span><i class="fas fa-caret-left"></i></span> Volver</button>
        <a href="home.html" type="button" onclick="registerFirebase()" class="btn selected-option">Registrar <span><i class="fas fa-caret-right"></i></span></a>
      </div>
    </div>`;
  })
});

const registerFirebase = () => {
  console.log('Registro Exitoso');
  window.location = '../home.html';
};


module.exports=register
