const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db/index');

class TaiKhoan extends Model {}

TaiKhoan.init({
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  MaNV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TaiKhoan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MatKhau: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Quyen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'TaiKhoan',
  tableName: 'taikhoan',
  timestamps: false,
});

module.exports = TaiKhoan;
