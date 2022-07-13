const router = require('express').Router();
const { Explore } = require('../models');


router.get("/" , (req,res) => {
    Explore.findAll({
        // where: {
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'location',
            'photo',
        ]
    })
    .then(dbExploreCardData => {
        const explore = dbExploreCardData.map(explore => explore.get({ plain: true }));
        res.render("explore", { explore });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/', (req, res) => {
    // Get photo
    var getCity = function (city) {
        cityLocation = city.replace(/ /g, '-').replace(/\./g, '').toLowerCase();
        console.log(cityLocation);

        fetch(`https://api.teleport.org/api/urban_areas/slug:${cityLocation}/images/`)
        .then(function (response) {
            response.json()
            .then(function (data) {
                makeExploreCard(data.photos[0].image.mobile);
            });
        })
    }
    // End of Get Photo

    // Create ExploreCard object
    var makeExploreCard = function (cityPhoto) {
        ExploreCard.create({
            location: req.body.location,
            photo: cityPhoto,
        })
        .then(
        dbExploreCardData => {
        const ExploreCard = dbExploreCardData.map(ExploreCard => ExploreCard.get({ plain: true }));
        res.render('/ExploreCard', { ExploreCard })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    };

    getCity(req.body.location);
});