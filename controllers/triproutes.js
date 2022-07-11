const router = require('express').Router();
const { Trips } = require('../models');
const withAuth = require('../utils/auth');


// GET all wishlist locations for wishlist page
router.get('/', (req, res) => {
    Trips.findAll({
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
    .then(dbTripsData => {
        if (!dbTripsData) {
            res.status(404).json({ message: 'No trip found' });
            return;
        }
        res.json(dbTripsData);
        console.log(dbTripsData)
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// GET one wishlist location by city
router.get('/:location', (req, res) => {
    Trips.findOne({
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
    .then(dbTripsData => {
        if (!dbTripsData) {
            res.status(404).json({ message: 'No trip found for this city' });
            return;
        }
        res.json(dbTripsData);
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
                makeTrip(data.photos[0].image.mobile);
            });
        })
    }
    // End of Get Photo

    // Create wishlist object
    var makeTrip = function (cityPhoto) {
        Trips.create({
            location: req.body.location,
            photo: cityPhoto,
            user_id: req.body.user_id
        })
        .then(dbTripsData => res.json(dbTripsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    };

    getCity(req.body.location);
});

// Delete past trip location
router.delete('/:location', async (req, res) => {
    try {
        const [changedTrips] = Trips.destroy({
            where: {
                location: req.params.location,
            },
        });

        if (changedTrips > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;