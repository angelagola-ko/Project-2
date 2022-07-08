const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

const homeRoute = require("./home-routes.js");
const apiRoute = require("./api");

router.use("/api", apiRoute);
router.use("/", homeRoute);

module.exports = router;