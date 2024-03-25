const dongvat = require('./dongvat');
const vethamquan = require('./vethamquan');
const habitat = require('./habitat');
const nhanvien = require('./nhanvien');
const taikhoan = require('./taikhoan');
const thucan = require('./thucan');
const ncc = require('./ncc');
function route (app) {
  app.use('/dongvat', dongvat);
  app.use('/vethamquan', vethamquan);
  app.use('/habitat', habitat);
  app.use('/nhanvien', nhanvien);
  app.use('/taikhoan', taikhoan);
  app.use('/thucan', thucan);
  app.use('/ncc', ncc);

  app.get('/', (req, res) => {
    res.send('Arny Cute nhat he mat troi :33');
  });
}
module.exports = route;
