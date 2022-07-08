const router = require("express").Router();
const homeRoute = require("./home-routes.js");
const apiRoute = require("./api");

router.use("/api", apiRoute);
router.use("/", homeRoute);

module.exports = router;