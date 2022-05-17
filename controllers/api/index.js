// Importing Router set up
const router = require("express").Router();

// Defining Variables for Routes
const locationRoutes = require("./location-routes");
const surfboardRoutes = require("./surfboard-routes");

// Routes
router.use("/location", locationRoutes);
router.use("/surfboard", surfboardRoutes);

module.exports = router;