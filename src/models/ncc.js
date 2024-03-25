const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db/index');

class NCC extends Model {}

NCC.init({
  IdNCC: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TenNCC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LoaiThucAN: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Vitri: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'NCC',
  tableName: 'ncc',
  timestamps: false,
});

module.exports = NCC;
