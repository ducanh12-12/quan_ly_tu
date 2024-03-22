const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db/index');

class VeThamQuan extends Model { }

VeThamQuan.init({
  IdVe: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  IDNhanVien: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TenVe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LoaiVe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GiaVe: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SoLuong: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  sequelize,
  modelName: 'VeThamQuan',
  tableName: 'vethamquan',
  timestamps: false,
});

module.exports = VeThamQuan;
