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

  // Add attraction to itinerary section when add button is clicked
  $('.add-btn').on('click', function() {
    var $addedAttraction = $(this).data('id');

    switch ($addedAttraction) {
      case 'hotel':
        $('#hotel-itinerary').html(`<li><a class="btn-floating teal"><i class="material-icons">close</i></a> ${$selectedHotel}</li>`);
        break;
      case 'restaurant':
        $('#restaurant-itinerary').append(`<li><a class="btn-floating teal"><i class="material-icons">close</i></a> ${$selectedRestaurant}</li>`);
        break;
      case 'activity':
        $('#activity-itinerary').append(`<li><a class="btn-floating teal"><i class="material-icons">close</i></a> ${$selectedActivity}</li>`);
        break;
      default:
        break;
    }
  })
})();
