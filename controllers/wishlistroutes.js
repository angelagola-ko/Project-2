const router = require('express').Router();
const { Wishlist } = require('../models');
const withAuth = require('../utils/auth');


// get full wishlist
router.get("/" , (req,res) => {
    Wishlist.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'location',
            'photo',
            // 'user_id',
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

// Add city to wishlist page
router.post('/', (req, res) => {
    Wishlist.create({
        location: req.body.location,
        photo: req.body.photo,
        // user_id: req.body.user_id
    })
    .then(
    dbWishlistData => {
    const wishlist = dbWishlistData.map(wishlist => wishlist.get({ plain: true }));
    res.render('wishlist', { wishlist })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// go to single wishlist city location
router.get("/:location" , (req,res) => {
    Wishlist.findOne({
        where: {
            // user_id: req.session.user_id,
            location: req.params.location
        },
        attributes: [
            'id',
            'location',
            'photo',
            // 'user_id',
        ]
    })
    .then(dbWishlistData => {
        const wishlist = [dbWishlistData].map(wishlist => wishlist.get({ plain: true }));
        res.render("city", { wishlist });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Delete wishlist location
router.delete('/:location', async (req, res) => {
    try {
        const [changedWishlist] = Wishlist.destroy({
            where: {
                location: req.params.location,
            },
        });

        if (changedWishlist > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;