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

// Add city to wishlist page
router.post('/', (req, res) => {
    // Get photo
    var getCity = function (city) {
        cityLocation = city.replace(/ /g, '-').replace(/\./g, '').toLowerCase();
        console.log(cityLocation);

        fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
        .then(function (response) {
            if (response.statusText != 'OK') {
                makeWishlist(`https://static.turbosquid.com/Preview/001325/331/VU/_DHQ.jpg`)
            } else {
                response.json()
                .then(function (data) {
                    makeWishlist(data.photos[0].image.mobile);
                });
            }
        })
    }
    // End of Get Photo

    // Create wishlist object
    var makeWishlist = function (cityPhoto) {
        Wishlist.create({
            location: req.body.location,
            photo: cityPhoto,
            user_id: req.body.user_id
        })
        .then(
        dbWishlistData => {
        const wishlist = dbWishlistData.map(wishlist => wishlist.get({ plain: true }));
        res.render('/wishlist', { wishlist })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    };

    getCity(req.body.location);
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
            'user_id',
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