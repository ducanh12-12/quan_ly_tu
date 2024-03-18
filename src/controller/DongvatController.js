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
    DongVatModel.create(params)
      .then((dongvat) => {
        res.status(201).json(dongvat);
      })
      .catch((err) => { console.log(err); });
  }

  update (req, res) {
    const params = req.body;
    const id = req.params.id;
    const condition = {
      where: {
        IDDongVat: id,
      },
    };
    DongVatModel.update(params, condition)
      .then((i) => {
        DongVatModel.findByPk(id).then((dongvat) => {
          res.status(201).json(dongvat);
        });
      })
      .catch((err) => { console.log(err); });
  }

  delete (req, res) {
    const id = req.params.id;
    const condition = {
      where: {
        IDDongVat: id,
      },
    };
    DongVatModel.destroy(condition)
      .then(() => {
        res.status(201).json('Thành công!');
      })
      .catch((err) => { console.log(err); });
  }

  show (req, res, next) {
    const id = req.params.slug;
    DongVatModel.findByPk(id)
      .then((dongvat) => {
        console.log(dongvat);
        res.status(200).json(dongvat);
      })
      .catch(next);
  }
}
module.exports = new DongvatController();
