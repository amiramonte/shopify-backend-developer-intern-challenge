const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/configuration");

class Location extends Model {}

Location.init(
    {
    locationname: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    },
    {
    sequelize,
    }
);

module.exports = Location;