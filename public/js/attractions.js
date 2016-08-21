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

  // // Add a hotel to the itinerary
  // function addHotel(hotel) {
  //   currentDay = $('.current-day').text;
  //   $('#hotel-itinerary').html(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${hotel}</li>`);
  // }

  // // Add a restaurant to the itinerary
  // function addRestaurant(restaurant) {
  //   $('#restaurant-itinerary').append(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${restaurant}</li>`);
  // }

  // // Add an activity to the itinerary
  // function addActivity(activity) {
  //   $('#activity-itinerary').append(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${activity}</li>`);
  // }

  // // Remove attractions from itinerary
  // $('#itinerary-items').on('click', '.remove', function() {
  //   $(this).closest('li').remove();
  // })

})();
