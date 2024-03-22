const dongvat = require('./dongvat');
const vethamquan = require('./vethamquan');

function route (app) {
  app.use('/dongvat', dongvat);
  app.use('/vethamquan', vethamquan);
  app.get('/', (req, res) => {
    res.send('Arny Cute nhat he mat troi :33');
  });
}
module.exports = route;
