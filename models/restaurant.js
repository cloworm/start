var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place.js');

var Restaurant = db.define('restaurant', {

  name: {
    type: Sequelize.STRING
  },

  cuisine: {
    type: Sequelize.STRING
  },

  price: {
    type: Sequelize.INTEGER
  }

});

Restaurant.belongsTo(Place);
module.exports = Restaurant;
