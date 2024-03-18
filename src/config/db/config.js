const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: 'localhost',
    user: 'root',
    password: 'Vuducanh12@',
    database: 'quanlysothu',
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
