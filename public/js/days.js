var dayModule = (function() {
  var numDays = 1;
  var $currentDay = $('.current-day');

  // Add a new day
  $('.add-day').on('click', function() {
    addNewDay(numDays);
  })

  // Switch days
  $('#days').on('click', '.day-buttons', function() {
    setCurrentDay($(this))
  })

  // Remove a day
  $('.remove-day').on('click', function() {
    const MIN_DAYS = 1;

    if (numDays > MIN_DAYS && $currentDay.text !== '1') {
      // get current day number
      // get previous day number
      $prevDay = $currentDay.prev();
      // remove current day class from current day
      setCurrentDay($prevDay);
      // add current day class to previous day number
      // remove current day
      deleteDay($currentDay);
    }
  })

  function addNewDay(currentNumDays) {
    numDays++;
    $('.add-day').before(`<a class="btn-floating white day-buttons teal-text">${currentNumDays + 1}</a>`)
  }

  function setCurrentDay(day) {
    $currentDay.removeClass('current-day');
    day.addClass('current-day');

    // redefine current day
    $currentDay = $('.current-day');
  }

  function deleteDay(day) {
    day.remove();
  }

})();
