// Imports 
const router = require('express').Router();
const {Surfboard, Location} = require("../../models");

// The `/api/location` endpoint

// GET route for all locations and associated surfboards
router.get('/getlocations', async(req, res) => {
    try {
        const getLocations = await Location.findAll({
            include: [Surfboard]
        })
        
        res.status(200).json(getLocations);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

// GET route for single location and associated surfboards

module.exports = router;