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

// CREATE (ADD) route for surfboard
router.post("/addsurfboard", async (req, res) => {
    try {
        const newSurfboard = await Surfboard.create({
        boardcompany: req.body.boardcompany,
        boardlength: req.body.boardlength,
        boardvolume: req.body.boardvolume,
        boardtype: req.body.boardtype,
        fincount: req.body.fincount,
        LocationId: req.body.LocationId,
    });
        res.status(200).json(newSurfboard);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});


// UPDATE (EDIT) route for surfboard


// DELETE route for surfboard


module.exports = router;