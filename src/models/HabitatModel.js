const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db/index');

class HabitatModel extends Model {}

HabitatModel.init({
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  State: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Area: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  QuantityCurrent: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'HabitatModel',
  tableName: 'habitatmanager',
  timestamps: false,
});

module.exports = HabitatModel;
