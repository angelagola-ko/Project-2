const router = require("express").Router();
const { User, Trips, Wishlist, Explore } = require('../models');

router.get("/", (req,res) => {
    res.render("homepage");
});

router.get("/menu", (req,res) => {
    res.render("menu");
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/menu', (req, res) => {
    res.render('menu');
});

router.get("/explore" ,(req,res) => {
    res.render("explore");
})

router.get("/login" ,(req,res) => {
    res.render("login");
})

module.exports = router;