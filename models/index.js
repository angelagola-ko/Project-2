const Trips = require("./Trips");
const User = require("./User");
const Wishlist = require("./Wishlist");

// create associations
User.hasMany(Trips, {
  foreignKey: "user_id",
});

Trips.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Wishlist.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
  });

module.exports = { User, Trips, Wishlist };
