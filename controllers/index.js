const router = require("express").Router();
const homeRoute = require("./home-routes.js");
const wishlistRoutes = require('./wishlistroutes.js');
const tripstRoutes = require('./tripsroutes.js');


router.use("/", homeRoute);
router.use("/wishlist", wishlistRoutes);
router.use("/trips", tripstRoutes);

module.exports = router;