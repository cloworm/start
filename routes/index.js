var express = require('express');
var app = express.Router();
var Hotel = require('../models/hotel');
var Activity = require('../models/activity');
var Restaurant = require('../models/restaurant');
var Place = require('../models/place');
var Promise = require('bluebird');


app.get('/', function (req, res, next) {
  var outerScopeContainer = {};

  var hotel = Hotel.findAll();
  var activity = Activity.findAll();
  var restaurant = Restaurant.findAll();
  var place = Place.findAll();
  var promiseArr = [hotel, activity, restaurant, place];

  Promise.all(promiseArr)
  .then(function(thing) {
    outerScopeContainer.hotel = thing[0];
    outerScopeContainer.activity = thing[1];
    outerScopeContainer.restaurant = thing[2];
    outerScopeContainer.place = thing[3];
  })
  .then(function() {
    res.render('index', {
      hotels: outerScopeContainer.hotel,
      activities: outerScopeContainer.activity,
      restaurants: outerScopeContainer.restaurant,
      place: outerScopeContainer.place
    })
  })
  .catch(next);
})

module.exports = app;
