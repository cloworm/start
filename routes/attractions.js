var express = require('express');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var app = express.Router();

app.use('/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(hotels) {
    res.json(hotels);
  })
  .catch(next);
})

app.use('/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(restaurants) {
    res.json(restaurants);
  })
  .catch(next);
})

app.use('/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(activities) {
    res.json(activities);
  })
  .catch(next);
})

module.exports = app;
