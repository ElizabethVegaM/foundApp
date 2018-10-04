firebase.database().ref('found').on('child_added', (newfinding) => {
  console.log(newFinding);
  if (newFinding.val().option === 'person') {
    console.log(newfinding);
    entriesList.innerHTML = `<div class="result-entries">
      <img src="img/facebook-blank-face-blank-300x225-300x225-1.jpeg" alt=""> 
      <div>
        <p class="nombre">Nombre completo</p>
        <p class="sexo">Femenino</p>
        <p class="edad">20- 30 años</p>
      
        <p class="ojos">ojos color café</p>
        <p class="mts">1.6 -1.8 mts.</p>
        <p class="pelo">Cabello castaño</p>
      </div>
      <h4>Nombre Contacto</h4> 
      </div>`;
    } else if (newfinding.val().option === 'object') {
      console.log(newfinding);
      entriesList.innerHTML = `<div class="result-entries typeObject">
      <h4>Nombre Contacto</h4> 
      <img src="img/wallet.jpg" alt=""> 
      </div>
      <p class="avatar"><i class="fas fa-user-circle fa-3x"></i></p>
      <div>
        <p class="nombre">Nombre completo</p>
        <p class="sexo">Femenino</p>
        <p class="edad">20- 30 años</p>

        <p class="ojos">ojos color café</p>
        <p class="mts">1.6 -1.8 mts.</p>
        <p class="pelo">Cabello castaño</p>
      </div>`;
      }
});