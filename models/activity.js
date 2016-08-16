var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place.js');

var Activity = db.define('activity', {

  name: {
    type: Sequelize.STRING
  },

  age_range: {
    type: Sequelize.STRING
  }

});

Activity.belongsTo(Place);
module.exports = Activity;
