var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place.js');

var Hotel = db.define ('hotel', {

  name: {
    type: Sequelize.TEXT
  },

  num_stars: {
    type: Sequelize.INTEGER
  },

  amenities: {
    type: Sequelize.STRING
  }

});


Hotel.belongsTo(Place);
module.exports = Hotel;
