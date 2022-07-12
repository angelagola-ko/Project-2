const router = require('express').Router();

let data = require("../../data.json");

router.get("/places", (req,res) => {
    res.json(data);
})

module.exports = router;