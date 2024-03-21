require('dotenv').config();
const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    connectTimeout: 60000,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  listPerPage: 10,
};
module.exports = config;
