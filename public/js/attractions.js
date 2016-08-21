var attractionsModule = (function() {
  var $selectedHotel,
  $selectedRestaurant,
  $selectedActivity;

  function findHotelByName(name) {
    return hotels.find(function(hotel) {
      return hotel.name === name;
    })
  }

  function findRestaurantByName(name) {
    return restaurants.find(function(restaurant) {
      return restaurant.name === name;
    })
  }

  function findActivityByName(name) {
    return activities.find(function(activity) {
      return activity.name === name;
    })
  }

  $('#hotel-options').change(function() {
    var hotelName = $(this).val();
    $selectedHotel = findHotelByName(hotelName);
  })

  $('#restaurant-options').change(function() {
    var restaurantName = $(this).val();
    $selectedRestaurant = findRestaurantByName(restaurantName);
  })

  $('#activity-options').change(function() {
    var activityName = $(this).val();
    $selectedActivity = findActivityByName(activityName);
  })

  // Checks what type is being added and adds attractions to itinerary
  $('.add-btn').on('click', function() {
    var $addedAttraction = $(this).data('id');

    switch ($addedAttraction) {
      case 'hotel':
        itineraryModule.addHotel($selectedHotel);
        break;
      case 'restaurant':
        itineraryModule.addRestaurant($selectedRestaurant);
        break;
      case 'activity':
        itineraryModule.addActivity($selectedActivity);
        break;
      default:
        break;
    }
  })

})();
