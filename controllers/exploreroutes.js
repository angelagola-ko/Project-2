const router = require('express').Router();
const { Explore } = require('../models');


router.get("/explore" , (req,res) => {
    Explore.findAll({
        attributes: [
            'id',
            'location',
            'photo',
            'description'
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
router.post('/explore', (req, res) => {
    Explore.create({
        location: req.body.location,
        photo: req.body.photo,
        description: req.body.description
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