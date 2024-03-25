const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db/index');

class NhanVien extends Model {}

NhanVien.init({
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  TenNV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  MaNV: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ChucVu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GioiTinh: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NgaySinh: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  SDT: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  DiaChi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NgayVaoLam: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'NhanVien',
  tableName: 'nhanvien',
  timestamps: false,
});

module.exports = NhanVien;
