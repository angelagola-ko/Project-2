const router = require('express').Router();

const wishlistRoutes = require('./wishlistRoutes');
router.use('/wishlist', wishlistRoutes);
let data = require("../../data.json");

router.get("/places", (req,res) => {

    console.log('Data: ', data);
    res.json(data);
})

module.exports = router;