// Imports needed for seed.js file
const sequelize = require("../config/configuration");
const {Surfboard, Location} = require("../models");

// Surfboard Seed Data
const surfboards = [
    {
        boardcompany: "Channel Islands",
        boardlength: 6,
        boardvolume: 25,
        boardtype: "short board",
        fincount: 3,
        LocationId: 1,
    },
    {
        boardcompany: "Torq",
        boardlength: 8,
        boardvolume: 65,
        boardtype: "fun board",
        fincount: 3,
        LocationId: 1,
    },
    {
        boardcompany: "Lost Surfboards",
        boardlength: 6.5,
        boardvolume: 28,
        boardtype: "short board",
        fincount: 5,
        LocationId: 2,
    },
    {
        boardcompany: "Vissla",
        boardlength: 10,
        boardvolume: 100,
        boardtype: "long board",
        fincount: 1,
        LocationId: 3,
    },
    {
        boardcompany: "Almond Surfboards",
        boardlength: 6,
        boardvolume: 45,
        boardtype: "fish",
        fincount: 2,
        LocationId: 3,
    },
    {
        boardcompany: "Pyzel Surfboards",
        boardlength: 9,
        boardvolume: 75,
        boardtype: "fun board",
        fincount: 3,
        LocationId: 4,
    },

]

// Location Seed Data
const locations = [
    {
        locationname: "Distribution Center",
    },
    {
        locationname: "Encinitas Surf Shop",
    },
    {
        locationname: "Pacific Beach Surf Shop",
    },
    {
        locationname: "Dana Point Surf Shop",
    },
];

const seed = async () => {
    await sequelize.sync({ force: true });
    await Location.bulkCreate(locations);
    await Surfboard.bulkCreate(surfboards);
    console.log("Seeding Successful!");
    process.exit(0);
};

seed();