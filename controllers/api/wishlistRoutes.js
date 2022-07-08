const router = require('express').Router();
const { Wishlist, User } = require('../../models');
const withAuth = require('../../utils/auth');
const googleApi = 'AIzaSyDOISfO-M5SMbBSWWcZ615CngMyVBV0Cn4';


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