let map;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -1.68126, lng: 29.32932 },
    zoom: 8,
  });
  infoWindow = new google.maps.InfoWindow;
  infoWindow.setPosition(map.center);
  infoWindow.setContent('Location found');
  infoWindow.open(map);
  map.setCenter(map.center);
}
