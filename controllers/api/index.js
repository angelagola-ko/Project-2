const router = require('express').Router();

const wishlistRoutes = require('./wishlistRoutes');
router.use('/wishlist', wishlistRoutes);

module.exports = router;