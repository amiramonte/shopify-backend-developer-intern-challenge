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
router.get('/getsinglelocation/:id', async(req, res) => {
    try {
        const singleLocation = await Location.findByPk(req.params.id, {
            include: [Surfboard]
        })
        
        res.status(200).json(singleLocation);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});


// CREATE (ADD) route for location
router.post("/addlocation", async (req, res) => {
    try {
        const newLocation = await Location.create({
        locationname: req.body.locationname,
    });
        return res.status(200).json(newLocation);
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});


module.exports = router;