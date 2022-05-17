const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/configuration");

class Surfboard extends Model {}

Surfboard.init(
    {
    boardcompany: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    boardlength: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    boardvolume: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    boardtype: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fincount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    },
    {
    sequelize,
    }
);

module.exports = Surfboard;