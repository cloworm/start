var dayModule = (function() {
  var $currentDay = $('.current-day');

  // Store each day's itinerary in an object
  var Day = function() {
    this.hotel = '';
    this.restaurants = [];
    this.activities = [];
  }

  var days = [new Day()];

  function addNewDay(currentNumDays) {
    days.push(new Day());
    renderDay(currentNumDays + 1);
  }

  function setCurrentDay(day) {
    $currentDay.removeClass('current-day');
    day.addClass('current-day');

    // Change title of days itinerary
    var $currentTitle = $('#day-title')
    $currentTitle[0].innerText = $currentTitle[0].innerText.replace(/\d+/, day[0].text);

    // redefine current day
    $currentDay = $('.current-day');
  }

  function deleteDay(day) {
    day.remove();

    // remove from days array
    days.splice(day.text - 1, 1);
  }

  // Render all day buttons
  function renderDay(dayNumber) {
    $('#day-buttons').append(`<a class="btn-floating white day-button teal-text">${dayNumber}</a>`)
  }

  //
  // CLICK LISTENERS
  //
  // Remove attractions from itinerary
  $('#itinerary-items').on('click', '.remove', function() {
    $(this).closest('li').remove();
  })

  // Clicking new day button
  $('.add-day').on('click', function() {
    addNewDay(days.length);
  })

  // Clicking on a day button
  $('#days').on('click', '.day-button', function() {
    setCurrentDay($(this))
  })

  // Clicking remove day button
  $('.remove-day').on('click', function() {
    const MIN_DAYS = 1;
    var currentDayNum = Number($currentDay[0].text);

    if (days.length > MIN_DAYS && currentDayNum !== 1) {
      // delete current day button
      deleteDay($currentDay);

      // renumber all days
      $('#day-buttons').html('')
      days.forEach(function(day, index) {
        renderDay(index + 1);
      });

      // set class to stored current day
      var prevDay = currentDayNum - 1
      var $prevDay = $($('.day-button')[prevDay - 1]);
      $prevDay.addClass('current-day');
      $currentDay = $prevDay;
    }
  })

  var exports = {
    days: days
  }

  return exports;

})();
