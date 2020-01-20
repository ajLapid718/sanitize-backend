const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define("order", {
  
  products: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },

  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

});

module.exports = Order;
