var attractionsModule = (function() {
  var $selectedHotel,
  $selectedRestaurant,
  $selectedActivity;

  $('#hotel-options').change(function() {
    $selectedHotel = $(this).val();
  })

  $('#restaurant-options').change(function() {
    $selectedRestaurant = $(this).val();
  })

  $('#activity-options').change(function() {
    $selectedActivity = $(this).val();
  })

  // Checks what type is being added and adds attractions to itinerary
  $('.add-btn').on('click', function() {
    var $addedAttraction = $(this).data('id');

    switch ($addedAttraction) {
      case 'hotel':
        $.ajax({
          method: 'GET',
          url: '/attractions/hotels'
        })
        .then(function(hotels) {
          var foundHotel = hotels.find(function(hotel) {
            return hotel.name === $selectedHotel;
          })
          itineraryModule.addHotel(foundHotel);
        })
        break;

      case 'restaurant':
        $.ajax({
          method: 'GET',
          url: '/attractions/restaurants'
        })
        .then(function(restaurants) {
          var foundRestaurant = restaurants.find(function(restaurant) {
            return restaurant.name === $selectedRestaurant;
          })
        itineraryModule.addRestaurant(foundRestaurant);
        })
        break;

      case 'activity':
        $.ajax({
          method: 'GET',
          url: '/attractions/activities'
        })
        .then(function(activities) {
          var foundActivity = activities.find(function(activity) {
            return activity.name === $selectedActivity;
          })
          itineraryModule.addActivity(foundActivity);
        })
        break;
      default:
        break;
    }
  })

})();
