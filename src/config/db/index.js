const { Sequelize } = require('sequelize');
const dbConfig = require('./config');
module.exports = new Sequelize('quanlysothu', dbConfig.db.user,
  dbConfig.db.password, {
    host: dbConfig.db.host,
    dialect: dbConfig.db.dialect,
    operationsAliases: false,
    pool: {
      max: dbConfig.db.pool.max,
      min: dbConfig.db.pool.min,
      acquire: dbConfig.db.pool.acquire,
      idle: dbConfig.db.pool.idle,
    },
  });
