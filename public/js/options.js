var optionsModule = (function() {
  var $options = $('#options-panel')

  // Gets the select tag for hotels, restaurants, and options
  var $hotelOption = $options.find($('#hotel-options'));
  var $restaurantOption = $options.find($('#restaurant-options'));
  var $activityOption = $options.find($('#activity-options'));

  function createOptions(attractionsArr, attractionDropDown) {
    attractionsArr.forEach(function(attraction) {
      attractionDropDown.append(`<option value='${attraction.id}'>${attraction.name}</option>`);
    })
  }

  // Populate the dropdown menus
  createOptions(hotels, $hotelOption);
  createOptions(restaurants, $restaurantOption);
  createOptions(activities, $activityOption);

})();

