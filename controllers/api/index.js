const router = require('express').Router();

const wishlistRoutes = require('./wishlistRoutes.js');
router.use('/wishlist', wishlistRoutes);

module.exports = router;