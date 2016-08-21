var mapModule = (function() {
  var map;
  var markers = [];
  var bounds;

  function initializeGmaps() {
      // initialize new google maps LatLng object
      var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
      // set the map options hash
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          styles: [
              {
                stylers: [
                  { hue: '#00ffe6' },
                  { saturation: -20 }
                ]
              },{
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  { lightness: 100 },
                  { visibility: 'simplified' }
                ]
              },{
                featureType: 'road',
                elementType: 'labels',
                stylers: [
                  { visibility: 'off' }
                ]
              }
            ],
          mapTypeId: google.maps.MapTypeId.ROADMAP

      };
      // get the maps div's HTML obj
      var map_canvas_obj = document.getElementById("map");
      // initialize a new Google Map with the options
      map = new google.maps.Map(map_canvas_obj, mapOptions);

      bounds = new google.maps.LatLngBounds();
  }

  var icons = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  }


  function addMarker(type, location) {
    var myLatlng = new google.maps.LatLng(location[0],location[1]);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: icons[type],
      animation: google.maps.Animation.DROP
    })
    markers.push(marker);
    marker.setMap(map);
    bounds.extend(myLatlng);
    map.fitBounds(bounds);
  }

  function clearMarkers() {
    markers.forEach(function(marker) {
      marker.setMap(null);
    })
    bounds = new google.maps.LatLngBounds();
  }

  var exports = {
    initializeGmaps: initializeGmaps,
    addMarker: addMarker,
    clearMarkers: clearMarkers
  }

  return exports;

})();
