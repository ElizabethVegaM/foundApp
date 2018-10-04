let platform = new H.service.Platform({ // se iniciliza el mapa y se ingresan credenciales
  app_id: '3imMONAvt7Aj1IMBu4Lt',
  app_code: 'lEToiO4p-ytdOVw1Sf9iyw',
  useCIT: true
});

let defaultLayers = platform.createDefaultLayers();
let mapContainer = document.getElementById('mapContainer');

//el mapa se adapta al cambio  de tamaño de la ventana
window.addEventListener('resize', function(){
    map.getViewPort().resize();
  });

var coordinates = {
  lat: -33.43727, // coordenadas santiago de chile
  lng: -70.65056
};
let mapOptions = {
  center: coordinates,
  zoom: 15
};

let map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions
);
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map)); // le da interactividad al mapa

//acá se actualizan las coordenadas
function updatePosition (event) {
  coordinates = {
    lat: event.coords.latitude,
    lng: event.coords.longitude
  };
  console.log(coordinates);
  
  var marker = new H.map.Marker(coordinates); // añade marcador al mapa
  map.addObject(marker);
  map.setCenter(coordinates);
}
// watchPosition devuelve la ubicación actual del usuario y actualiza la ubicación según el desplazamiento del usuario
navigator.geolocation.watchPosition(updatePosition);

