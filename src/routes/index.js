const dongvat = require('./dongvat');

function route (app) {
  app.use('/dongvat', dongvat);
  app.get('/', (req, res) => {
    res.send('Thk Tú bắt bố code nhanh mẹ m');
  });
}
module.exports = route;
