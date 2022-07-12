const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
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
      user_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
              key: 'id'
          }
      }
  },
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'trips'
  }
);

module.exports = Trips;