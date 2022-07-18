const router = require('express').Router();
const { Trips } = require('../models');
const withAuth = require('../utils/auth');


// get full Trips
router.get("/" , (req,res) => {
    Trips.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'location',
            'photo',
            'details',
            // 'user_id',
        ]
    })
    .then(dbTripsData => {
        const trip = dbTripsData.map(trip => trip.get({ plain: true }));
        res.render('trip', { trip });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Add city to Trips page
router.post('/', (req, res) => {
        Trips.create({
            location: req.body.location,
            photo: req.body.photo,
            details: req.body.details,
            // user_id: req.body.user_id
        })
        .then(
        dbTripsData => {
        const trip = [dbTripsData].map(trip => trip.get({ plain: true }));
        res.render('trip', { trip })
        console.log(trip)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// go to single Trips city location
router.get("/:location" , (req,res) => {
    Trips.findOne({
        where: {
            // user_id: req.session.user_id,
            location: req.params.location
        },
        attributes: [
            'id',
            'location',
            'photo',
            'details',
            // 'user_id',
        ]
    })
    .then(dbTripsData => {
        const trip = [dbTripsData].map(trip => trip.get({ plain: true }));
        res.render("tripCity", { trip });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// Delete Trips location
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