// import GMaps from 'gmaps/gmaps.js';

// const mapElement = document.getElementById('map');
// if (mapElement) { // don't try to build a map if there's no div#map to inject in
//   const map = new GMaps({ div: '#map', lat: 48.879704, lng: 2.7046489 });
//   const markers = [({
//   lat: 48.879704,
//   lng: 2.7046489,
//   infoWindow: {
//   content: '<p>Optique de la Marne</p> <p>14 rue du Chemin de fer</p> <p>77400 LAGNY SUR MARNE</p>'
// }
//   })];
//   // const markers = JSON.parse(mapElement.dataset.markers);
//   map.addMarkers(markers);
//   if (markers.length === 0) {
//     map.setZoom(2);
//   } else if (markers.length === 1) {
//     map.setCenter(markers[0].lat, markers[0].lng);
//     map.setZoom(15);
//   } else {
//     map.fitLatLngBounds(markers);
//   }
// }
