// Importing Models
const Surfboard = require("./surfboard");
const Location = require("./location");

// Creating Table Associations (Primary Key & Foreign Key link between tables)
Location.hasMany(Surfboard);

Surfboard.belongsTo(Location);

// Model Export
module.exports = {
    Surfboard,
    Location,
};