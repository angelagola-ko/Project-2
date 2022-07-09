const router = require('express').Router();
const { Wishlist, User } = require('../models');
const withAuth = require('../utils/auth');


// GET all wishlist locations for wishlist page
router.get('/', async (req, res) => {
    Wishlist.findAll({
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
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// GET one wishlist location by city
router.get('/:city', async (req, res) => {
    Wishlist.findOne({
        where: {
            city: req.params.city
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


router.post('/', withAuth, (req, res) => {
    // Get photo
    cityLocation = req.body.location.replace(/ /g, '-').replace(/\./g, '').toLowerCase();
    console.log(cityLocation); 

    fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
    .then(function (response) {
        
            response.json()
            .then(function (data) {
                if (!data.photos) {
                    cityPhoto = "../../public/images/Travelot-Stock-Img-2.jpg";
                } else {
                    console.log(data.photos[0].image.mobile);
                    cityPhoto = data.photos[0].image.mobile;
                }
        });
    })

    Wishlist.create({
        location: req.body.location,
        photo: cityPhoto,
        user_id: req.session.user_id
    })
    .then(dbWishlistData => res.json(dbWishlistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;