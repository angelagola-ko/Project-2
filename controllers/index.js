const router = require("express").Router();
const homeRoute = require("./home-routes.js");
const wishlistRoutes = require('./wishlistRoutes.js');
const triproutes = require('./triproutes');


router.use("/", homeRoute);
router.use("/wishlist", wishlistRoutes);
router.use("/trips", triproutes);

module.exports = router;