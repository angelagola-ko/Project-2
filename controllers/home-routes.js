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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 525b662331a9be83e2085f24e04e694e1b249292
router.get("/wishlist" ,(req,res) => {
    res.render("wishlist");
})

router.get("/explore" ,(req,res) => {
    res.render("explore");
})

router.get("/login" ,(req,res) => {
    res.render("login");
})
<<<<<<< HEAD
>>>>>>> feature/homepage-function
=======
>>>>>>> 525b662331a9be83e2085f24e04e694e1b249292

module.exports = router;