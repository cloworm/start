var Sequelize = require('sequelize');
var db = require('./_db');

var Place = db.define('place', {
  address: {
    type: Sequelize.TEXT
  },

  city: {
    type: Sequelize.TEXT
  },

  state: {
    type: Sequelize.TEXT
  },

  phone: {
    type: Sequelize.STRING
  },

  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }

});

module.exports = Place;
