const dongvat = require('./dongvat');
const vethamquan = require('./vethamquan');
const habitat = require('./habitat');
const nhanvien = require('./nhanvien');
const taikhoan = require('./taikhoan');

function route (app) {
  app.use('/dongvat', dongvat);
  app.use('/vethamquan', vethamquan);
  app.use('/habitat', habitat);
  app.use('/nhanvien', nhanvien);
  app.use('/taikhoan', taikhoan);
  app.get('/', (req, res) => {
    res.send('Arny Cute nhat he mat troi :33');
  });
}
module.exports = route;
