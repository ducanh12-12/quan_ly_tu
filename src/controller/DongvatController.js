const DongVatModel = require('../models/dongvat');
class DongvatController {
  index (req, res) {
    DongVatModel.findAll()
      .then(dongVats => {
        res.status(200).json(dongVats); // danh sách tất cả các đối tượng Động Vật
      })
      .catch(err => {
        console.error('Lỗi khi lấy dữ liệu:', err);
      });
  }

  create (req, res) {
    const params = req.body;
    console.log(req);
    const dongvat = DongVatModel.create(params);
    res.status(200).json(dongvat);
  }

  show (req, res, next) {
    const id = req.params.slug;
    DongVatModel.findByPk(id)
      .then((dongvat) => {
        res.status(200).json(dongvat);
      })
      .catch(next);
  }
}
module.exports = new DongvatController();
