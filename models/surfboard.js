const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/configuration");

class Surfboard extends Model {}

Surfboard.init(
    {
    board_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    board_length: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    },
    {
    sequelize,
    }
);

module.exports = Surfboard;