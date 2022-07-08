const router = require('express').Router();
const { Wishlist, User, Trips } = require('../models');

router.get("/dashboard", (req,res) => {
    res.render("dashboard");
});

router.get("/trips" ,(req,res) => {
    res.render("trips");
})

module.exports = router;