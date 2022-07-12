const router = require('express').Router();
const { Wishlist, User } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all wishlist locations for wishlist page
router.get('/', (req, res) => {
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
        if (!dbWishlistData) {
            res.status(404).json({ message: 'No Wishlist found' });
            return;
        }
        res.json(dbWishlistData);
        console.log(dbWishlistData)
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// GET one wishlist location by city
router.get('/:location', (req, res) => {
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
        if (!dbWishlistData) {
            res.status(404).json({ message: 'No Wishlist found for this city' });
            return;
        }
        res.json(dbWishlistData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
    // Get photo
    var getCity = function (city) {
        cityLocation = city.replace(/ /g, '-').replace(/\./g, '').toLowerCase();
        console.log(cityLocation);

        fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
        .then(function (response) {
            response.json()
            .then(function (data) {
                console.log(data.photos[0].image.mobile)
                makeWishlist(data.photos[0].image.mobile);
            });
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
        .then(dbWishlistData => res.json(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    };

    getCity(req.body.location);
});

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