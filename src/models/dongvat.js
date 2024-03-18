const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db/index');

class DongVat extends Model {}

DongVat.init({
  IDDongVat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TenDongVat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LoaiDongVat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TuoiDongVat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  GioiTinhDongVat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TrangThaiDongVat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  HinhAnhDongVat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'DongVat',
  tableName: 'tabledongvat',
  timestamps: false,
});

module.exports = DongVat;
