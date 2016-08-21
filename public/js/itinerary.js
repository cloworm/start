var itineraryModule = (function() {

  function currentDay() {
    return $('.current-day')[0].text;
  }

  function currentDayObject() {
    return dayModule.days[currentDay() - 1];
  }

  // Add a hotel to the itinerary
  function addHotel(hotel) {
    currentDayObject().hotel = hotel;
    renderHotel(hotel);
  }

  function renderHotel(hotel) {
    $('#hotel-itinerary').html(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${hotel.name}</li>`);
    // addAttractionMarker('hotel', hotel);
    console.log(hotel);
  }

  // Add a restaurant to the itinerary
  function addRestaurant(restaurant) {
    if (currentDayObject().restaurants.includes(restaurant)) {
      alert("You've already chosen that restaurant for this day.");
    } else {
      currentDayObject().restaurants.push(restaurant);
      renderRestaurant(restaurant);
    }
  }

  function renderRestaurant(restaurant) {
    $('#restaurant-itinerary').append(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${restaurant.name}</li>`);
  }

  // Add an activity to the itinerary
  function addActivity(activity) {
    if (currentDayObject().activities.includes(activity)) {
      alert("You've already chosen that activity for this day.");
    }
    currentDayObject().activities.push(activity);
    renderActivity(activity);
  }

  function renderActivity(activity) {
    $('#activity-itinerary').append(`<li><a class="btn-floating teal remove"><i class="material-icons">close</i></a> ${activity.name}</li>`);
  }

  // Clears every item from itinerary
  function clearItinerary() {
    $('#hotel-itinerary').html('');
    $('#restaurant-itinerary').html('');
    $('#activity-itinerary').html('');
  }

  function renderItinerary(dayObject) {
    if (dayObject.hotel.name) {
      renderHotel(dayObject.hotel);
    }
    if (dayObject.restaurants[0]) {
      dayObject.restaurants.forEach(function(restaurant) {
        renderRestaurant(restaurant);
      });
    }
    if (dayObject.activities[0]) {
      dayObject.activities.forEach(function(activity) {
        renderActivity(activity);
      });
    }
  }

  function addAttractionMarker(type, attractionObj) {
    mapModule.addMarker(type, attractionObj.place.location);
  }

  // Update itinerary UI when a new day is selected
  $('#days').on('click', '.day-button', function() {
    clearItinerary();
    renderItinerary(currentDayObject());
  })

  // Update itinerary UI when a day is deleted
  $('.remove-day').on('click', function() {
    clearItinerary();
    renderItinerary(currentDayObject());
  })


  var exports = {
    addHotel: addHotel,
    addRestaurant: addRestaurant,
    addActivity: addActivity
  }

  return exports;
})();
