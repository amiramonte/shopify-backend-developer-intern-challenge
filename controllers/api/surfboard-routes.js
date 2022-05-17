// Imports 
const router = require('express').Router();
const {Surfboard, Location} = require("../../models");

// The `/api/surfboard` endpoint

// GET route for all surfboards and associated locations
router.get('/getallsurfboards', async(req, res) => {
    try {
        const allSurfboards = await Surfboard.findAll({
            include: [Location]
        })
        
        res.status(200).json(allSurfboards);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

// GET route for single surfboard and associated location
router.get('/getsinglesurfboard/:id', async(req, res) => {
    try {
        const singleSurfboard = await Surfboard.findByPk(req.params.id, {
            include: [Location]
        })
        
        res.status(200).json(singleSurfboard);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});


module.exports = router;