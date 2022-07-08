const seedUsers = require('./user-seeds');
const seedWishlist = require('./wishlist-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedWishlist();
  console.log('--------------');

  process.exit(0);
};

seedAll();
