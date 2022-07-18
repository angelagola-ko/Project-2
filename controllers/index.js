const router = require("express").Router();
const homeRoute = require("./home-routes.js");
const wishlistRoutes = require('./wishlistroutes.js');
const tripstRoutes = require('./tripsroutes.js');
const exploreroutes = require('./exploreroutes.js')


router.use("/", homeRoute);
router.use("/wishlist", wishlistRoutes);
router.use("/trips", tripstRoutes);
router.use("/explore", exploreroutes);

module.exports = router;