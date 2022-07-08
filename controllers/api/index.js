const router = require('express').Router();

let data = require("../../data.json");

router.get("/places", (req,res) => {

    console.log('Data: ', data);
    res.json(data);
})
const wishlistRoutes = require('./wishlistRoutes.js');
router.use('/wishlist', wishlistRoutes);

module.exports = router;