var optionsModule = (function() {
  var $options = $('#options-panel')

  // Gets the select tag for hotels, restaurants, and options
  var $hotelOption = $options.find($('#hotel-options'));
  var $restaurantOption = $options.find($('#restaurant-options'));
  var $activityOption = $options.find($('#activity-options'));

  function createOptions(attractionsArr, attractionDropDown) {
    console.log('attractions', attractionsArr);
    attractionsArr.forEach(function(attraction) {
      console.log('attraction', attraction);
      attractionDropDown.append(`<option value='${attraction.name}'>${attraction.name}</option>`);
    })
    $('select').material_select();
  }

  // Populate the dropdown menus from the database
  $.ajax({
    method: 'GET',
    url: '/attractions/hotels'
  })
  .then(function(hotels) {
    createOptions(hotels, $hotelOption);
  })

  $.ajax({
    method: 'GET',
    url: '/attractions/restaurants'
  })
  .then(function(restaurants) {
    createOptions(restaurants, $restaurantOption);
  })

  $.ajax({
    method: 'GET',
    url: '/attractions/activities'
  })
  .then(function(activities) {
    createOptions(activities, $activityOption);
  })

})();

