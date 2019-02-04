function initMap() {
  var myLatlng = {lat: 48.879156, lng: 2.704818};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatlng
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(14);
    map.setCenter(marker.getPosition());
  });
}



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
