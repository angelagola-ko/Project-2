const router = require('express').Router();
const { Explore } = require('../models');


router.get("/" , (req,res) => {
    Explore.findAll({
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

// Add city to explore page
router.post('/', (req, res) => {
    Explore.create({
        location: req.body.location,
        photo: req.body.photo,
        // user_id: req.body.user_id
    })
    .then(
    dbexploreData => {
    const explore = [dbexploreData].map(explore => explore.get({ plain: true }));
    res.render('explore', { explore })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});