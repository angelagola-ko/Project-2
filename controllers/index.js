const router = require("express").Router();
const homeRoute = require("./home-routes.js");
const apiRoute = require("./api");
const wishlistRoutes = require('./wishlistroutes.js');

router.use("/api", apiRoute);
router.use("/", homeRoute);
router.use("/wishlist", wishlistRoutes);

module.exports = router;