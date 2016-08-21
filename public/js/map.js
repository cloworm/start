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


  function addMarker(type, location, attractionObj) {
    var myLatlng = new google.maps.LatLng(location[0],location[1]);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: icons[type],
      animation: google.maps.Animation.DROP,
      title: attractionObj.name
    })
    // add marker to marker array
    markers.push(marker);

    // display marker on current map
    marker.setMap(map);

    // adjust bounds to fit marker
    bounds.extend(myLatlng);
    map.fitBounds(bounds);

    var infoWindow;

    if (type === 'hotel') {
      infoWindow = new google.maps.InfoWindow({
        content:
          `<div class='google-maps-info'><p class="google-maps-title"><strong>${attractionObj.name}</strong></p>
          <p>${attractionObj.place.address} ${attractionObj.place.city}, ${attractionObj.place.state}</p>
          <p><a href='tel://${attractionObj.place.phone}'>${attractionObj.place.phone}</a></p>
          <p><span class="google-maps-amenities">Amenities</span>: ${attractionObj.amenities}</p>
          <p><i class="material-icons orange-text">star</i> <span class="google-maps-stars">${attractionObj.num_stars} stars</span></p></div>`
      })
    } else {
      infoWindow = new google.maps.InfoWindow({
        content:
          `<div class='google-maps-info'><p class="google-maps-title"><strong>${attractionObj.name}</strong></p>
          <p>${attractionObj.place.address} ${attractionObj.place.city}, ${attractionObj.place.state}</p>
          <p><a href='tel://${attractionObj.place.phone}'>${attractionObj.place.phone}</a></p>`
      })
    }

    marker.addListener('click', function() {
      infoWindow.open(map, marker)
    })
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
