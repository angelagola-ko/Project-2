const router = require("express").Router();

router.get("/dashboard", (req,res) => {
    res.render("dashboard");
});

router.get("/trips" ,(req,res) => {
    res.render("trips");
})

router.get("/wishlist" , (req,res) => {
    res.render("wishlist");
})

const { Wishlist, User, Trips } = require('../models');


module.exports = router;