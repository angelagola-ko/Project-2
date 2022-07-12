const router = require("express").Router();
const { User, Trips, Wishlist, Explore } = require('../models');

router.get("/homepage", (req,res) => {
    res.render("homepage");
});

router.get("/menu", (req,res) => {
    res.render("menu");
});

router.get("/trips" ,(req,res) => {
    res.render("trips");
})

router.get("/wishlist" ,(req,res) => {
    res.render("wishlist");
})

router.get("/explore" ,(req,res) => {
    res.render("explore");
})

router.get("/login" ,(req,res) => {
    res.render("login");
})

module.exports = router;