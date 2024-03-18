// const http = require('http');
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const { Sequelize } = require('sequelize');
const sequelize = require('./config/db/index');
const route = require('./routes');
const db = {};
app.use(express.urlencoded({
  extended: true,
}));
db.Sequelize = Sequelize;
db.sequelize = sequelize;
route(app);
app.use(cors({
  origin: '*',
}));
db.sequelize.sync().then(() => {
  console.log('Mô hình đã được đồng bộ hóa với cơ sở dữ liệu.');
})
  .catch(err => {
    console.error('Không thể đồng bộ hóa mô hình:', err);
  }); ;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
