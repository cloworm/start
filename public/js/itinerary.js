var itineraryModule = (function() {

  function currentDay() {
    return $('.current-day')[0].text;
  }

  // Add a hotel to the itinerary
  function addHotel(hotel) {
    dayModule.days[currentDay() - 1].hotel = hotel;
    $('#hotel-itinerary').html(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${hotel}</li>`);
  }

  // Add a restaurant to the itinerary
  function addRestaurant(restaurant) {
    dayModule.days[currentDay() - 1].restaurants.push(restaurant);
    $('#restaurant-itinerary').append(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${restaurant}</li>`);
  }

  // Add an activity to the itinerary
  function addActivity(activity) {
    dayModule.days[currentDay() - 1].activities.push(activity);
    $('#activity-itinerary').append(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${activity}</li>`);
  }

  // Clears every item from itinerary
  function clearItinerary() {
    $('#hotel-itinerary').html('');
    $('#restaurant-itinerary').html('');
    $('#activity-itinerary').html('');
  }

  // Update itinerary UI when a new day is selected
  $('#days').on('click', '.day-button', function() {

  })

  var exports = {
    addHotel: addHotel,
    addRestaurant: addRestaurant,
    addActivity: addActivity
  }

  return exports;
})();
