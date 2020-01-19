const { Item } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    Item.create({
      name: "Macbook",
      price: 1050
    }),
    Item.create({
      name: "Apple",
      price: 20
    }),
    Item.create({
      name: "Banana",
      price: 10
    })
  ]);
}

module.exports = seedDatabase;
