var express = require('express');
var app = express.Router();
var Hotel = require('../models/hotel');
var Activity = require('../models/activity');
var Restaurant = require('../models/restaurant');
var Place = require('../models/place');
var Promise = require('bluebird');


app.get('/', function (req, res, next) {
  var outerScopeContainer = {};

  var hotel = Hotel.findAll({
    include: [Place]
  });
  var activity = Activity.findAll({
    include: [Place]
  });
  var restaurant = Restaurant.findAll({
    include: [Place]
  });
  var promiseArr = [hotel, activity, restaurant];

  Promise.all(promiseArr)
  .then(function(thing) {
    outerScopeContainer.hotel = thing[0];
    outerScopeContainer.activity = thing[1];
    outerScopeContainer.restaurant = thing[2];
  })
  .then(function() {
    res.render('index', {
      hotels: outerScopeContainer.hotel,
      activities: outerScopeContainer.activity,
      restaurants: outerScopeContainer.restaurant,
    })
  })
  .catch(next);
})

module.exports = app;
