const router = require("express").Router();
const { Wishlist, User, Trips } = require('../models');
const wishlistRoutes = require('./wishlistRoutes.js');

router.get("/dashboard", (req,res) => {
    res.render("dashboard");
});

router.get("/trips" ,(req,res) => {
    res.render("trips");
})

router.get("/wishlist" , (req,res) => {
    Wishlist.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'location',
            'photo',
            'user_id',
        ]
    })
    .then(dbWishlistData => {
        const wishlist = dbWishlistData.map(wishlist => wishlist.get({ plain: true }));
        res.render("wishlist", { wishlist });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;