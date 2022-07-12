const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Explore extends Model {}

Explore.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "../public/images/Travelot-Stock-Img-2.jpg"
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Explore'
    }
);

module.exports = Explore;