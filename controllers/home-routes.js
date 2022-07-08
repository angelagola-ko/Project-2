const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Wishlist, User, Trips } = require('../models');


// GET all wishlist locations for wishlist page
router.get('/wishlist', async (req, res) => {
    try {
        const dbWishlistData = await Wishlist.findAll({
            include: [
            {
                model: Wishlist,
                attributes: [
                    'id',
                    'location',
                    'photo',
                    'user_id',
                ],
            },
            ],
        });
    
        const wishlists = dbWishlistData.map((wishlist) =>
            wishlist.get({ plain: true })
        );
        // Send over the 'loggedIn' session variable to the 'homepage' template
        res.render('wishlist', {
            wishlists,
            loggedIn: req.session.loggedIn,
        });
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// GET one wishlist location by ID
router.get('/wishlist/:id', async (req, res) => {
    try {
        const dbWishlistData = await Wishlist.findByPk(req.params.id, {
            include: [
            {
                model: Wishlist,
                attributes: [
                    'id',
                    'location',
                    'photo',
                    'user_id',
                ],
            },
            ],
        });
    
        const wishlist = dbWishlistData.get({ plain: true });
        // Send over the 'loggedIn' session variable to the 'wishlist' template
        res.render('wishlist', { 
            wishlist, 
            loggedIn: req.session.loggedIn 
        });
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/wishlist', withAuth, (req, res) => {
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