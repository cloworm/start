var express = require('express');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var app = express.Router();

app.use('/hotels', function(req, res, next) {
  Hotel.findAll({
    include: [Place]
  })
  .then(function(hotels) {
    res.json(hotels);
  })
  .catch(next);
})

app.use('/restaurants', function(req, res, next) {
  Restaurant.findAll({
    include: [Place]
  })
  .then(function(restaurants) {
    res.json(restaurants);
  })
  .catch(next);
})

app.use('/activities', function(req, res, next) {
  Activity.findAll({
    include: [Place]
  })
  .then(function(activities) {
    res.json(activities);
  })
  .catch(next);
})

module.exports = app;
