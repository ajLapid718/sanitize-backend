// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Item = require('./item');
const Order = require('./order');

Item.belongsToMany(Order, { through: "Customer_Orders" });
Order.belongsToMany(Item, { through: "Customer_Orders" });

module.exports = {
  Item,
  Order
};
