const router = require("express").Router();
const { User, Trips, Wishlist, Explore } = require('../models');

router.get("/", (req,res) => {
    res.render("explore");
});

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
        res.render('explore', { explore });
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

router.get("/menu", (req,res) => {
    res.render("menu");
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/menu', (req, res) => {
    res.render('menu');
});


module.exports = router;