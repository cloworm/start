var express = require('express');
var app = express.Router();

// View all days
app.get('/', function(req, res, next) {
  res.send('all days!');
})

// Create a day
app.post('/', function(req, res, next) {

})

// Delete a day
app.delete('/:id', function(req, res, next) {

})

// View a day
app.get('/:id', function(req, res, next) {

})

// Add a hotel to a day
app.put('/:id/hotel', function(req, res, next) {

})

// Delete a hotel from a
app.delete('/:id/hotel', function(req, res, next) {

})

// Add a restaurant to a day
app.put('/:id/restaurant/:restaurantId', function(req, res, next) {

})

// Remove a restaurant from a day
app.delete('/:id/restaurant/:restaurantId', function(req, res, next) {

})

// Add an activity to a day
app.put('/:id/activity/:activityId', function(req, res, next) {

})

// Remove an activity from a day
app.delete('/:id/activity/:activityId', function(req, res, next) {

})

module.exports = app;
