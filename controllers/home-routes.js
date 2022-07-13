const router = require("express").Router();
const { User, Trips } = require('../models');

router.get("/", (req,res) => {
    res.render("homepage");
});

router.get("/menu", (req,res) => {
    res.render("menu");
});

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

module.exports = router;