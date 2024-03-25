const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db/index');

class Thucan extends Model {}

Thucan.init({
  IDThucAN: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TenThucAn: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LoaiThucAn: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IdDongVat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  SoLuong: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  HanThucAn: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IdNCC: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  
}, {
  sequelize,
  modelName: 'ThucAn',
  tableName: 'thucan',
  timestamps: false,
});

module.exports = Thucan;
