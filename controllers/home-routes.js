const router = require("express").Router();
const { User, Trips } = require('../models');

router.get("/", (req,res) => {
    res.render("homepage");
});

router.get("/dashboard", (req,res) => {
    res.render("dashboard");
});


module.exports = router;