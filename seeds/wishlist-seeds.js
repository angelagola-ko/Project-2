const { Wishlist } = require('../models');

const wishlistData = [
    {
        location: 'Albuquerque',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque-f730c0301f.jpg',
        user_id: 1
    },
    {
        location: 'New York',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/new-york-9cb6cc2ae5.jpg',
        user_id: 1
    },
    {
        location: 'Barcelona',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/barcelona-aacdf7ba91.jpg',
        user_id: 1
    },
    {
        location: 'Baltimore',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/baltimore-14c1f65307.jpg',
        user_id: 2
    },
    {
        location: 'Beijing',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/beijing-536dacdadf.jpg',
        user_id: 2
    },
    {
        location: 'Cape Town',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/cape-town-fa015ec35b.jpg',
        user_id: 1
    },
    {
        location: 'Cincinnati',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/cincinnati-c45eaa103c.jpg',
        user_id: 1
    },
    {
        location: 'Dallas',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/dallas-a55f677457.jpg',
        user_id: 2
    },
    {
        location: 'Dublin',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/dublin-acf68f9012.jpg',
        user_id: 2
    },
    {
        location: 'Florence',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/florence-ddf9003aa1.jpg',
        user_id: 1
    },
    {
        location: 'Hong Kong',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/hong-kong-09cb9b74b0.jpg',
        user_id: 3
    },
    {
        location: 'Indianapolis',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/indianapolis-0f293b1150.jpg',
        user_id: 3
    },
    {
        location: 'Istanbul',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/istanbul-bbe6bcce3f.jpg',
        user_id: 3
    },
    {
        location: 'Kiev',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/kiev-e7a4b194e1.jpg',
        user_id: 3
    },
    {
        location: 'Liverpool',
        photo: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/liverpool-564727cbf9.jpg',
        user_id: 3
    }
];

const seedWishlist = () => Wishlist.bulkCreate(wishlistData);

module.exports = seedWishlist;