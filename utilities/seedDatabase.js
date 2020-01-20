const { Item } = require('../database/models');

const seedDatabase = async () => {
  console.log("currently seeding the database!!!");

  try {
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
  catch (err) {
    console.log(err);
  }

  console.log("successfully seeded the database!!!");
}

module.exports = seedDatabase;
