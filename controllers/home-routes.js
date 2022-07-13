const router = require("express").Router();
const { User, Trips, Wishlist, Explore } = require('../models');

router.get("/", (req,res) => {
    res.render("homepage");
});

router.get("/menu", (req,res) => {
    res.render("menu");
});

<<<<<<< HEAD
=======
router.get("/trips" ,(req,res) => {
    res.render("trips");
})

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

router.get("/wishlist" ,(req,res) => {
    res.render("wishlist");
})

router.get("/explore" ,(req,res) => {
    res.render("explore");
})

router.get("/login" ,(req,res) => {
    res.render("login");
})
>>>>>>> 902a4b83f10bd4d6ab7735aaea9540c1fc580b54

module.exports = router;